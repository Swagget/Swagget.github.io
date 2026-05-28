/* Ask AI widget — talks to the Cloudflare Worker (window.ASK_AI.endpoint).
   Vanilla JS; no build step. Renders Claude's reply as lightly-formatted,
   HTML-escaped markdown. */
(function () {
  var cfg = window.ASK_AI || {};
  var root = document.getElementById('ask-ai');
  if (!root) return;

  var statusEl = document.getElementById('ask-status');
  var resultEl = document.getElementById('ask-result');
  var tsEl = document.getElementById('ask-turnstile');
  var fileInput = document.getElementById('jd-file');
  var dropText = document.getElementById('jd-droptext');
  var drop = document.getElementById('ask-drop');
  var notes = document.getElementById('jd-notes');
  var MAX_FILE = 5 * 1024 * 1024;
  var jdFile = null;

  if (!cfg.endpoint) {
    setStatus('The assistant isn’t configured yet (missing endpoint).', true);
  }

  // Render the Turnstile widget once its script loads.
  function renderTurnstile() {
    if (window.turnstile && cfg.sitekey && tsEl && !tsEl.dataset.rendered) {
      window.turnstile.render(tsEl, { sitekey: cfg.sitekey });
      tsEl.dataset.rendered = '1';
    }
  }
  window.onloadTurnstileCallback = renderTurnstile;
  var tsPoll = setInterval(function () { if (window.turnstile) { clearInterval(tsPoll); renderTurnstile(); } }, 300);

  // Tab switching.
  root.querySelectorAll('.ask-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      var name = tab.dataset.tab;
      root.querySelectorAll('.ask-tab').forEach(function (t) { t.classList.toggle('is-active', t === tab); });
      root.querySelectorAll('.ask-panel').forEach(function (p) { p.hidden = p.dataset.panel !== name; });
    });
  });

  // File picking + drag/drop.
  function setFile(f) {
    if (!f) return;
    if (f.size > MAX_FILE) { setStatus('File too large (max 5 MB).', true); return; }
    jdFile = f;
    dropText.textContent = '📎 ' + f.name;
    setStatus('');
  }
  fileInput.addEventListener('change', function () { setFile(fileInput.files[0]); });
  ['dragover', 'dragenter'].forEach(function (e) {
    drop.addEventListener(e, function (ev) { ev.preventDefault(); drop.classList.add('is-drag'); });
  });
  ['dragleave', 'drop'].forEach(function (e) {
    drop.addEventListener(e, function (ev) { ev.preventDefault(); drop.classList.remove('is-drag'); });
  });
  drop.addEventListener('drop', function (ev) {
    if (ev.dataTransfer.files && ev.dataTransfer.files[0]) setFile(ev.dataTransfer.files[0]);
  });

  // Submit handlers.
  root.querySelectorAll('.ask-submit').forEach(function (btn) {
    btn.addEventListener('click', function () { submit(btn.dataset.mode, btn); });
  });

  function readAsBase64(file) {
    return new Promise(function (resolve, reject) {
      var r = new FileReader();
      r.onload = function () { resolve(String(r.result).split(',')[1] || ''); };
      r.onerror = reject;
      r.readAsDataURL(file);
    });
  }

  function submit(mode, btn) {
    if (!cfg.endpoint) { setStatus('The assistant isn’t configured yet.', true); return; }
    var payload = { mode: mode };

    if (mode === 'question') {
      var q = document.getElementById('q-input').value.trim();
      if (!q) { setStatus('Please type a question.', true); return; }
      payload.text = q;
    } else {
      var note = notes.value.trim();
      if (!jdFile && !note) { setStatus('Upload a JD (PDF/TXT) or paste it as text.', true); return; }
      if (note) payload.text = note;
    }

    var token = window.turnstile && window.turnstile.getResponse(tsEl);
    if (cfg.sitekey && !token) { setStatus('Please complete the verification check.', true); return; }
    payload.turnstileToken = token || '';

    var prep = (mode === 'fit' && jdFile)
      ? readAsBase64(jdFile).then(function (b64) {
          payload.file = { name: jdFile.name, type: jdFile.type, dataBase64: b64 };
        })
      : Promise.resolve();

    setBusy(true);
    setStatus('Thinking…');
    resultEl.innerHTML = '';

    prep.then(function () {
      return fetch(cfg.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }).then(function (res) {
      return res.json().then(function (data) { return { ok: res.ok, data: data }; });
    }).then(function (r) {
      if (!r.ok) { setStatus(r.data.error || 'Something went wrong.', true); return; }
      setStatus('');
      resultEl.innerHTML = renderMarkdown(r.data.reply || '');
    }).catch(function () {
      setStatus('Network error — please try again.', true);
    }).finally(function () {
      setBusy(false);
      if (window.turnstile) window.turnstile.reset(tsEl); // token is single-use
    });
  }

  function setBusy(b) {
    root.querySelectorAll('.ask-submit').forEach(function (el) { el.disabled = b; });
  }
  function setStatus(msg, isErr) {
    statusEl.textContent = msg || '';
    statusEl.classList.toggle('is-error', !!isErr);
  }

  // Tiny, safe markdown: escape first, then apply a few formats.
  function renderMarkdown(text) {
    var esc = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    var lines = esc.split('\n');
    var html = '', inList = false;
    lines.forEach(function (line) {
      var li = line.match(/^\s*[-*]\s+(.*)$/);
      if (li) {
        if (!inList) { html += '<ul>'; inList = true; }
        html += '<li>' + inline(li[1]) + '</li>';
      } else {
        if (inList) { html += '</ul>'; inList = false; }
        if (line.trim()) html += '<p>' + inline(line) + '</p>';
      }
    });
    if (inList) html += '</ul>';
    return html;
  }
  function inline(s) {
    return s
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>');
  }
})();
