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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GWQ5EWN%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T154204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBwkf612Fb%2F0BHC7KToNF6MWjKZ%2B3bHwoXD5JbiBSsccAiAimL2t4biWvsN716XrWxKQmk3hQpcJHNdXHMwZmKjpSiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9s0ukMad%2FlwLEOBiKtwDIT1tt1jIcUMsMOaHKXmgSrGkHxVpQ4Y56q7A%2BoBTbxTak8x%2FvPhJuH%2FGwWo88rppHeNBSY7wvylT5VOebyECpJ0Pg972nC5NwgFBVorissykW6ZD5n1YOqRfFM4aehQ1iM4uB3MNRO39Sf4MBCeIHQeysIqWxnpkgU8y2bwVvumdk%2F2tlX42YnD1kQZrRjiKYtde4iYL0o5JOEquKGj1nrK0nI%2FdxKyDOUCue8xf1026J4jRbeYxQqZKXZshgW6%2Fy4rrpzGA9e1hmwm9mbQWM5NDqTKcl8TAxhU%2FP9FF%2FYg5kS4sauKgqZj5DZJ7Zyee3Yj5%2F36PXcnNDl%2B3gxoZ1qWGMjtPUcr5JZ88f8etQnmmJa0VHdzNjasW1HnEw6Vfdeijc8teYKtbUb1YSQozPXdxPoUhFbmZjPiCcH4SFG2AXmoPuLAY5OIpqr%2FkNsoExt%2F4qmy33a8%2BYKRdIMr0stnjvYYBTAYIWafQlTE8axs9V8vVrScpZjpDNpf47hV%2ByI8s54AaT1UBcYNYAn%2BwLXZR05VmErcS5BlowxGddNTZniabLQo15UXWufDLkY307%2FK6B9UL2g%2FFlp0QZ4%2FalupErOzBt944teYIJ%2FxlEF307wne0Nfx%2Fx6gZccwo8HJ0gY6pgH3GEu9GB9KWOWcizhZ030M0wKMhxjOgrpXrRE32FEy9kzqnijnFszbAOvLny4oNURwvAjArSnRD9PooXdCPGLf4h7qi0SMTgAQuYxlSUdv2CqNDiOVe190Xtgwtzw9rvuDMCO9NzU%2BZefTcQrAm2MyDGUFHD81PLBNK3qDM8ne9fd%2BBOA9DX7aQyOg5c%2By3fW3681qU%2Bq3G3VVYZI9XruHi9strKHZ&X-Amz-Signature=a02a8553827f39c7e4b7f82398c0c61cd9df9a72ad9c9f46f61c4ce0272f5956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

