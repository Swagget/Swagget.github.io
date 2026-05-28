---
permalink: /
title: "Aniket Wagde, PhD Student in LLM Evaluation & Online Learning"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hi, thank you for visiting my home page!

I'm a PhD student in Computer Science at the **University of Illinois at Chicago** (UIC), under the advisement of **Professor [Aadirupa Saha](https://aadirupa.github.io/)**, where I explore the theoretical foundations and practical applications of intelligent decision-making systems. My research lies at the intersection of LLM evaluation, multi-armed bandits, online learning, and machine learning theory.

## News

- **May 2026** — *LLM-as-Judge on a Budget* accepted at **AISTATS 2026** (with **Adobe Research**, collaboration with **Dr. Branislav Kveton**). [[arXiv]](https://arxiv.org/abs/2602.15481) [[PDF]](/files/LLM-as-a-Judge-on-a-Budget.pdf) [[Code]](https://github.com/Swagget/LLM-judgesteer)
- **Dec 2025** — Presented *Efficient Algorithms for Combinatorial-Bandits with Monotonicity* at the **NeurIPS 2025 OPT Workshop** in San Diego, supported by a NeurIPS travel grant.
- **April 2026** — Acted as a **Reviewer** for ICML 2026.
- **2026** — Teaching Assistant for CS 401 (Algorithms) at UIC.

## Ask AI about me

Ask anything about my research, projects, or background — or, if you're a recruiter, drop a job description and Claude will make the case for fit. Answers are grounded in the content of this site.

<div class="ask-ai" id="ask-ai">
  <section class="ask-panel" data-panel="question">
    <h3 class="ask-h">💬 Ask a question</h3>
    <textarea id="q-input" rows="3" maxlength="2000"
      placeholder="e.g. What is your work on LLM evaluation about? What did you do at Dell?"></textarea>
    <button class="ask-submit" data-mode="question">Ask</button>
    <div class="ask-status" id="ask-status-question" aria-live="polite"></div>
    <div class="ask-response" id="ask-response-question" hidden>
      <div class="ask-response__label">Response</div>
      <div class="ask-result" id="ask-result-question"></div>
    </div>
  </section>

  <section class="ask-panel" data-panel="fit">
    <h3 class="ask-h">📄 Recruiter: check my fit</h3>
    <label class="ask-drop" id="ask-drop">
      <input type="file" id="jd-file" accept=".pdf,.txt,.md" hidden>
      <span id="jd-droptext">Drop a job description here (PDF or TXT), or click to choose</span>
    </label>
    <textarea id="jd-notes" rows="3" maxlength="16000"
      placeholder="Optional: paste the JD as text instead, or add notes."></textarea>
    <button class="ask-submit" data-mode="fit">Check fit</button>
    <div class="ask-status" id="ask-status-fit" aria-live="polite"></div>
    <div class="ask-response" id="ask-response-fit" hidden>
      <div class="ask-response__label">Response</div>
      <div class="ask-result" id="ask-result-fit"></div>
    </div>
  </section>

  <div id="ask-turnstile" class="cf-turnstile" style="margin:1em 0;"></div>
</div>

<style>
.ask-ai{margin:1em 0 1.5em;}
.ask-panel{margin-bottom:1.2em;padding:1em 1.1em;border:1px solid rgba(127,127,127,.25);border-radius:10px;background:rgba(127,127,127,.04);}
.ask-h{margin:.1em 0 .7em 0;font-size:1.05em;font-weight:600;}
.ask-panel textarea{width:100%;padding:.6em;border:1px solid #ccc;border-radius:6px;font-family:inherit;font-size:.95em;box-sizing:border-box;background:inherit;color:inherit;}
.ask-drop{display:flex;align-items:center;justify-content:center;text-align:center;border:2px dashed #bbb;border-radius:8px;padding:1.2em;margin-bottom:.6em;cursor:pointer;color:#888;}
.ask-drop.is-drag{border-color:#2a7ae2;color:#2a7ae2;background:rgba(42,122,226,.06);}
.ask-submit{margin-top:.6em;padding:.65em 1.5em;border:none;border-radius:8px;font-weight:600;font-size:.98em;color:#fff;cursor:pointer;transition:background .15s,transform .05s,box-shadow .15s;box-shadow:0 1px 2px rgba(0,0,0,.12);}
.ask-submit:hover{transform:translateY(-1px);box-shadow:0 3px 8px rgba(0,0,0,.15);}
.ask-submit[data-mode="question"]{background:#16a085;}
.ask-submit[data-mode="question"]:hover{background:#11876d;}
.ask-submit[data-mode="fit"]{background:#2a7ae2;}
.ask-submit[data-mode="fit"]:hover{background:#1d63c4;}
.ask-submit[disabled]{opacity:.55;cursor:not-allowed;transform:none;box-shadow:none;}
.ask-status{margin:.6em 0;color:#777;font-size:.9em;min-height:1.2em;}
.ask-status.is-error{color:#c0392b;}
.ask-response{margin-top:.9em;border:1px solid rgba(127,127,127,.25);border-radius:8px;background:rgba(127,127,127,.06);padding:.7em .9em;}
.ask-response__label{font-weight:600;font-size:.85em;letter-spacing:.04em;text-transform:uppercase;color:#777;margin-bottom:.4em;}
.ask-response[hidden]{display:none;}
.ask-result{white-space:normal;line-height:1.55;}
.ask-result:empty{display:none;}
.ask-result ul{margin:.4em 0 .8em 1.2em;}
</style>

<script>
  window.ASK_AI = {
    endpoint: {{ site.ask_ai.endpoint | default: "" | jsonify }},
    sitekey: {{ site.ask_ai.turnstile_sitekey | default: "" | jsonify }}
  };
</script>
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<script src="{{ '/assets/js/ask.js' | relative_url }}"></script>

[//]: # (**Recent:** *LLM-as-Judge on a Budget* &#40;with **Adobe Research**; collaboration with **Dr. Branislav Kveton**&#41; accepted at **AISTATS 2026**. Companion work, *Efficient Algorithms for Combinatorial-Bandits with Monotonicity*, accepted at the **NeurIPS 2025 OPT Workshop** &#40;San Diego, Dec 2025&#41;.)

[//]: # (Research Interests)

[//]: # (======)

[//]: # (My work centers on building principled, computationally-aware learning systems that bridge theory and practice:)

[//]: # ()
[//]: # (- Abstraction in Reinforcement Learning: Developing hierarchical frameworks that enable agents to reason at multiple levels of granularity, reducing computational complexity while maintaining performance guarantees)

[//]: # ()
[//]: # (- Convex Optimization for Neural Networks: Investigating optimization landscapes and convergence properties of deep learning systems through the lens of convex analysis)

[//]: # ()
[//]: # (- Learning in Continuous Environments: Designing algorithms for sequential decision-making in high-dimensional, continuous state and action spaces)

[//]: # ()
[//]: # (- Multi-Agent Learning & Communication: Exploring coordination mechanisms and emergent behaviors in systems where multiple intelligent agents interact)

Current Work
======
I'm currently working on combinatorial multi-armed bandits with monotonic aggregation functions. Traditional bandit algorithms assume linear reward structures, but real-world decision-making, from personalized recommendations to healthcare treatment selection, that often involve complex, non-linear aggregations.

My research introduces novel algorithms that efficiently identify optimal arm subsets without requiring knowledge of the underlying aggregation operator. By cleverly reducing combinatorial feedback to pairwise comparisons through randomization and selective sampling, we achieve sample complexity matching state-of-the-art methods while eliminating many restrictive assumptions. This work bridges pure exploration theory with practical applications where ranking and aggregation matter as much as selection.

[//]: # (Recent Publication: *LLM-as-Judge on a Budget* &#40;with Adobe Research; Dr. Branislav Kveton&#41; — **AISTATS 2026**. Companion work *Efficient Algorithms for Combinatorial-Bandits with Monotonicity* — **NeurIPS 2025 OPT Workshop**.)

Previously, I've explored:

- Value smoothing using similarity-based latent embeddings for reinforcement learning

- Metareasoning and computational efficiency in Monte Carlo Tree Search

- Applications of RL to bug detection in game environments

Background
------
Before joining UIC's PhD program (originally as an MS student, later transferred), I earned my undergraduate degree from Manipal University Jaipur (2015-2019), where I developed foundational skills in machine learning and systems. I've also worked in various machine learning roles in the industry before choosing to focus on the research aspects of ML.

What Drives Me
------

I believe the future of AI lies in systems that are not just powerful, but interpretable, efficient, and theoretically grounded. Whether it's understanding the partially convex structure underlying neural network training or designing RL agents that plan with limited compute, I'm passionate about research that connects elegant mathematical theory with real-world impact.

When I'm not figuring out math or reading papers, you'll find me playing the piano, cooking, or running.
