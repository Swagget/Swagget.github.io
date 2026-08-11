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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRFUSHH%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T064155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEPH3iQ9DFjCuZ%2BBiiYHqbmw%2FcvFJEeb34f1PhArcaLAIgMwW00CsoWpbq08GL2FbRB6tyeuPOkClF1k%2BCIXc9yDUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb%2F1wCgqidwgSlJJircA8xCCwi7vDcJOslJbBGnLlbQ9BHeAFRplOqKsqLSLQaFekJkfOWzJTscKmPSuPF3WxR7D6Qh9Va2xQA9i%2FZaafMZX0m1ownn6CCqSH40JKatzLyS1Vd%2FNywUiGCAToAYy2Cl9KlZJ5h0QErFBkiq2w0oswOFPnFbk3Xp%2BIEMZv58CutW1gv6cmGM%2FafQfzHi97LVejB8jwmAhc99e3vUgYJhRCT%2BNu98dHMhUZO0U6DceB%2BL6evJztV77Ju2VhFriyu7EAHjZH7QPQpnKj0Aawc0ZzvMczeuz%2BlcSF7wWlb1mpYEVY7wra8GIJ6P6OcUf12g3LcvviPogToyv509zqlhc4Bg0mLD4Zwu3piw2NTajrYCNa3Rcf997k8TnTHEJdVmglmBAgFV79v3yKCIZEkqO48BUA%2Bnb7qZPmEN5ew%2FleQb1voPXhi0XcbkNpf86d3kAR1tUFahbNZ%2BPzHnED6WNbkPbAgMQAnJWXnIC9MxuZf2yjF09PoU2HTVdJJ7pTgyUgjjZTUiTPpDXXluQyfGKlBLMRHotrBnSETW11qQlFeiTorbI5x0uNdE3JFdUdwtFYNx82SkAkcy1iXhjUPl7rj0rEnFDa%2BzsgiyYiTm9GqIlt8La6LBIZDKMLzS6tMGOqUBloNaJ5C8E%2B96X355ELQD7YKKDK2Pj8nCciKQnyEPxqGJ8YRw1yJmzmV7igc0Vb4bZdpKe0XC4vv4DicHRRhDt0lfRtRWvQHX5jQDKWx0adeRc5lZqInfOvK5YiG6Is74tqdTeSuj7ZPHUGPmM1AkfkdpviAzPH%2Fc9P7HnHl6xneLxU0Z4e%2BvXcOIUD6YWD%2Bsu5bQaIUmeCCpD5z%2B%2FpN5kdtA6FgJ&X-Amz-Signature=445bdff2b442ea8b4ba126e05d21485035f6c0ac0005668a2b5f7b4eb33155e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

