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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35DJAOW%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T122122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIACNto3I9W7w%2F67aWYeJ1MNErMWdAFLJEM1wn3rB%2FdtnAiEA3zvUEAX3D9KKUl%2Bkq%2BV%2Fa6Naavep%2FNl%2BotZATNSbEEwq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDP5SU%2BcpFKPMk%2FT7UCrcA7PYYlvfmOzhFg16qwi0efk%2B2X2xd232AXavPrUnN5%2Bud1M92hUsIv%2BofnTrKBHugXirV8CewjAODkbNXp4T1vF16qOe7evnyaxTWDR3IgvfuwuLNhe8NSstnzyFfOTl%2Bt2zoNHlWDKixAq0vo8%2Ff%2BQhZdaM4N%2FkUwnFmsYcJRfr4pSjm2Vv5eeGjFbL1khbx%2BKUiQJMDHHoaRRwpNwHHUimIN%2BVO9KF1wBV0Bj82MC%2FrGGFAkiNHkFKMz7m6WnByUFh1sKCOP42IE7vNZfEKT35L2wtjTmOPgyrtOAuL35XJAQiRMRaytByMOXEKKbrMw%2FdnbTu7jPGvx6%2BxEIeLwFmE73LcCBK9GELzEMLZAtA7U%2FmFT70sLJxbK8G7QGD1PK5vM6iR97uGZN%2Fe5D2eHYT3DHD4RwF9W5uIsXv7vKibph%2BZ4mH%2FMzUIm0WClkK2oUxgw8NEff3FPpOXIdWANsEkOrkXXYBLbx1NOkSachKMtMQz%2Fp6wk1bQghy7rLE5zmQL3Ya0TDDwYztxgaqVqEFEsGDpy6YD9UqqiZNY22YpF0lwqLyIrV7Vk7cvHbRCga82rWnBo5G9xl1PoaemDT%2Fe%2FoK%2BZC71VIBUYtDd2Yhtag1HH8lMcoq2JOWMKDStdQGOqUBMOgSlZRwdXdWGJ4TLo2LwDVWgKRP3CIl67wGnLjh7dd4milRnRUWzw8%2B3ogpz9i9mu8WNbVVUjYsJcNdGgRy5rQ7JffWaRwTFXg4Jcb0D3twsS0rq%2Fr1WbcL%2F7TCFRXbWh2JiGhGAr3B1rjNYZbY4FGi6hlYt98kyfNbfvum9HXCi6l7U6e2zzk2CsAbI507F8ZxErn0jIbfN2bAcK%2FGnZsIOSRs&X-Amz-Signature=9f5f26164b45a77f0c59d4eb21a5d7a4de098ae42d24d77c27dbd71105c3841d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

