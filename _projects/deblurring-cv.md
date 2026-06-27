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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNR6STO3%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T015548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhsQcjp6%2FvkuA%2BHQZVe4H5H03h4e9SWlSfi7ikAJEJVAiBAsDnxVbLmUKk3k6mLnT8Mo%2FTnPHYajjldKEtyX%2Bq3ICr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMbwH26Ad9SoPiQNKAKtwDntkahHdm8ILmbr2p8OkxkEtBlFAUyttghweCDWx8VcR4ShLYCUUGNXZmGqYrtWsIvm76933tr1E%2FxZa5WCV%2Fm40EAWd0R%2FryBVSV7YHI4jiwTDxed0P4Z2KEVW5BdvKazF2YXXwGCfkNYt5K9WBjiYVahKGnWgvatWzTksTIMDMSFULa%2Bbc7zKhM7M0z3S5L4geSDMMLZCsT4RfV6nj4TcakqUHxobQyuTqojqryhWPx%2FZZc5Zk6kd0iorkhKjl3qYoi0elAxWjVIskq6eE%2F7CSAFcA8lQG44QtLJyYY5g57bNzqDp1oSXA7h1w22U%2FLsDV%2BmoVJtbmLdG8fQygIIpi4qCcbTNuL%2FOmKHGgTgY0tzSE099RfJG4nLQLOR4rMnCY3r0WUUTli7F27gsD5sUtvH1%2Ft6rbFdrwg1WUqXrS84nvvBpuIqX7Na9pCl2ZUlX44qaZuvVTuib5b%2F19QP0QpPhybFDVe4jETHgHKY2xvFw5p%2Fcp1OSCJx%2Fy2lkFLNQ%2BUIwitvzLlvQm4cgiO8NbS6hvwipoNVOqz7MeyLEGcPNF5qLAMyJH20rQwE6YG2CrMSnQrNRFmH0Y46Djn3Wu%2FE1jGUhmTMudlZYHTQ49CgSUO%2BT%2BGwaGu%2FeQwxdT80QY6pgGIYxafE42ilCrKKKBffECskpZTBNvzXu6TNRmBJreVKL2kMwQvsd70FkGqFOeLZ0De%2BCO4d%2FWaad7rrmGEpp%2BNdLqrMA6s4S6L6m9DU9k5UnwBAAL8c9VT9ssE%2FjmS%2BxoR3tMBQedQovk98eJdNqT5%2BRpGnIBz%2FG%2Fip9AQltR1XI9qLI78og7cQNr8Nk6syjnEpiis0ZRCyrZCdkx1nQRQs7IkHzNM&X-Amz-Signature=9e7eadf7dccbc00e6e8d9ab612661b3701ff3a54cee9d439683283a6fb6754cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

