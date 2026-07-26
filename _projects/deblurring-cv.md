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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KRPJQSM%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T142107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCS0XWRVLQgjaSQzn3q80bWDVBAawpzHsLGgu5Y47CKTAIgFCw%2BWVjw7Hy4oa7tJmH%2BwBCEafTjjek2I9jZw3vB73Qq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDO6Vpivri2vegUH7fyrcA3P4PD2iy3la7cEkvIRQBwEAc3hdZalKF%2Bv4fHMfG6oNer5Zs4Q%2FqACqPRdiA1zR3dXGGp261v18WDEjVWBdWg1j5uiT1dDUWl0%2F86yf5HwAd5OiYkS2JnUp2MDxg7VADXkjIKtLALe3jOYAkYy9QoRaWB9xb0GLWlQMGvJY%2FS2aUs4jtFlaKgOsj%2FNa9cuM%2FV3Zw%2BVTxDyV0U1QSvD0Ifp4sODnvdoHHLjJ45fFi7ccXpoCdPLnCH5KOUD1vc8R%2BDL6hp5pqXDLShwyIIbM8oBIKOAwWiSLvr0CCcVyjx65zlyZgwqlnyuyLrV3GRWtxHKFASag%2BQNc28Imb289AvW8Cmc5quQLG7xpOWjwkFqG6%2Fy8oZBGBpeVfR2tTrNlgQIVFmpefQ2yHQpfsFD16aFB6Z7cxZKpbPXdC9dbBTcQb52UJfl%2BNehrcehPX9%2BUh70hpB%2BfHMcQe4a%2F%2FdAtgE1YN0J2j2SlbI7yop5E0D9L8imv3lEEanH9PZdOFIpB5wIsJ4toVgVDD3%2B%2BjDlgMfQGUQKS1JFOYVlwpFYQVHpICwHR7XYpQ5iBOjmN7uPn4ljeRHkgoEIfaZUoq%2F%2FeiTopaDOp8MF4Cq2bDOJym%2BwofTZsJnpVpV%2FKOmRlMJjLl9MGOqUBtTT3ogd%2FU7l51facwb%2B7ybqO1XkPHSdndFEVXycEDIO%2B2BBVQAli9%2FwTBcIr5PvWQKgEozmG0tI8hULrDkB0pspibjjBjfpl8lj4z77SK3kp6Pye8ZuWNWySEkMkXFR0uTr8kn5QdNfQQfSr6ibuWUYLRyUBjd1ldmZSRd3U85phyhTM6w6wirUFWQ2TNExsJs1jOBAx%2FAFkSbYjuauzXTatt16W&X-Amz-Signature=360a4b7229f1d41b78e4590e202678b34f22f84d82c5d75a721848bca3296d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

