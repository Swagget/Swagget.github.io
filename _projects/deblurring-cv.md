---
title: "Deblurring Computer Vision"
collection: projects
category: cv
permalink: /projects/deblurring-cv
excerpt: "Implemented a research paper’s code that de blurred video content. However the code had an issue where the output videos occasionally had artifacts in areas that were relatively still and not moving."
date: 2021-10-01
techstack: "Computer Vision, Deep Learning"
source: notion
---

Implemented a research paper’s code that de blurred video content. However the code had an issue where the output videos occasionally had artifacts in areas that were relatively still and not moving.


We then used optical flow with a threshold, when the threshold was crossed we used the prior method, however when the optical threshold wasn’t crossed, we used the frames from the input image itself.


We then wrote the methods in the form of a research paper.


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4HJUIZM%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T145214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQD0oXaiLSGXoyPdzpGuWDyWf1UUgrzbu0oHrEa%2B%2FM7c4QIgQPl54yXxfHUCisOsdC%2BP3hcpTOExSl4Mw%2Bv0ts2KY5kqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrQaNNd1yjKyosKTyrcAxKckgsTl4dMUPHBMmfFqARD38T%2BtUhLatEVXfzbnD8nq4nrVQxuGwi5i3d%2BlLAkTe0DpYt1pPI%2BExIHjNhZatbZj583hJRO%2F9i7CO3d%2FtcKhzYmWlm3%2BUHdcJZ%2BzJF2Sk7CAMY9k4qJ7aMAqgOB%2FHM6NYAxcxzgYPM4Urd9kJiSXipC%2Ff90tCrlILf1GTexs751pkoP8sd0PMa%2FyDWNrHjF%2BcHciEYhjDWM9B0I3OxBibRwJoTCy3sH5S38RO7%2Bj9k1NFSAFPXxtOcAyvLqcNEachyBhqAUl01zDwo2xsEFcRSoF%2BW3%2Ff1Fy7viMbvl3zZqzEzmAPHiIBukxD%2FEvjdvoexOFPLns6jObVgNt45LquVPeu1OlztUXB2W0f%2BHVqI7%2BBuLKloKOhjfgfEuMafzRlurCGfuPiVAV0LfCo8WKyhDvdj1zQ1oWoLwG7%2Fe27jNsEG1V7ypjVzdBVC9C%2Be%2FQJxA3lONRQBTyFgL20zq62uxm2GbkWHmZtpX%2Bz6Zap2IpRMvCKKvQq4ek%2BKgzHVUXdlLM%2BgQWIQb3cj88U2zrgDPqjBe%2BW4gv9Aigx49HH2t4lQHJgQNxjHGWYBqLPjoE%2B1641wNX6chLC%2BWv2mlz2WvYfegt7SrRqarMKmUg9MGOqUBfqd0nyTtDNEqBmkuVhfE1nS%2Fb0mYayertvFzTiO99yc8fCRbmk3wWLkpw1zP%2BeYwZN%2FNuTQSwVA%2BpnSiCrHbiDKc1vSFsUzTaR1dcDpjQuHive04DEARPBjXpShfTcHnTb48C3NHOBILlSJB4hD9xmCefX6eUYFc6vcyxh4ksksSX8rNW76mbdAi0v9lZT3d5MpU6Yx8HiTM1g9vUCBIbpHCA14l&X-Amz-Signature=3e00e0b518feb451e31ff7d02857b363db01c18eb1ba09b430f2834259d92aba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

