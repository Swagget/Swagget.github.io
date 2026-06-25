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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652EBPZJE%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T113103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbiVSuyu73IjZ75qkUloOWwbIu9qijEa8UFw%2BYBlS2LAiEAmoDLOm0WCJRM4gdWi2y9gHamL9SgVDU2sqFZNrOfXjcq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBdi0YD6ZndiEsNq6ircA9sPYL2nvadEtHl8XIJviJ3wU%2BCsmRncgf2RIyEe6MZv%2FNHYI6hx1kPRlatLce54PJ2hsVV6JFGSC2u%2BVGgNOdsGr3FyDjcTa6cxTBREamYJzX7SN4Ur2klfFkCOoSiI5O3%2BGTs9eagoRinADXNM1K9c64wigEKl094KzgD4A6lgh2FJSs64hdr1JdMwacg7HibJgcmwxTvtnbGVtBMlaB8xLDWMzq6JPPqw5eC5stwKeMEVOV0F1yccDRAObS%2FE5zYUqV8Fs6n8DxE6Zjh8Fsj4JxvSvEvm5TZyZqGrLH%2FSGnXS4iFZIJLg2vyR6Gak9u%2F665iH8zqWHh7zpT0DKRb2I7DIlZ7PmwVIA0OV7lyTs4KT6ihicITXAGQSFbDHXgYwS7RMjw7XgxGoOy39k5n5L89sGhXoaVPceQeonlji1mWAT%2BYDzBqH02LTeNc0v21chx%2Bh8Fl3Bd9lBsDLG67ncbqMJiHrhmR0XAkDjYNBUip21VD8Oaqzi%2BN8Em%2FfyS6KL%2BMSayjhC2Ex2JwLWImyic2snAF%2F7UL6n%2BydVCh9w85vKOcDfbS5CYm%2BWeNRUPOO9hBaf9q7XNDlMk3EdqWIsl0tm0VaiqeYPlbnLZwxgzsCyGIS1DabnCVDMJHw89EGOqUB%2BOSKFJCt4grhC4rtz5EUcNQgCWZ9mzwvXUTr2FwHLM5m5Gp8S70RKjb3BW%2BKzF9GDFA4g1KS%2FRRvIm9jnW6wE4v7AsQt3kY990dN%2FP1E0Qk1hd1FT0IF%2BHTYFS7lCr89R1gR0izBm%2Bj8iDYwkBS%2FRTkyUdg8ZL6MIJhWaSc35TIhIedxC2Bi93ZzkEhEgDPrbRkSesl3JWyR0jWLY5PClfmNA0LU&X-Amz-Signature=560fd2142f39cd5e29cda2b01111faf428d1fa3d574d359633484a3b98d39ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

