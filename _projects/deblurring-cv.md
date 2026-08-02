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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKHNI6H%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T184848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDIIO4xzmb8b2YrByZainb5vXJrcsEhjbAX44WKVBqSfAIgKui7QLxffBnwnYomC59tlJrW0Q4djna1vec817frUToqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNsmN%2FVCWiZ%2BCCb%2FircA5ABtFYUG9lQH6xVlZ2dk3%2BOR05eMvnS7cKTeWxTkCF9%2Fckgm3fCH6j8cp79CTY0NiIhroECVIURApWI61QTGGLv%2BEjklsN%2F2RAHqw3s9wnvFxdKX%2BBTdxZJtTfahF4mHX3H0u3mFlPJ86%2FvCAICiHkfNK4cmLw3Pmlp1vP%2BX9KJGd5bxk8kw2uzrMkd7oiyti1ge4S6MDfBGpBAN2wHNTrZAiHnpY7gpDj8UuT7q%2FNq%2FME3G%2FeZ24MyRq5etCtJ2lsZXzJi8xaTst80q23sOLBqKrLPzw1f%2FpSW1hVkVXQ7WeLXiuHPwLyIObY3uoSMvNN4BiUAmsFiODBUgwFjmUbtpW%2BOr64Hr01dH4sY0cy5NcU70lg39MX4DeARUbZd8j46Gjx8jhN6yz0tg7GnTHeljCTQRDK1SDbi7NXdeON1c51L6kHCi%2FoJZYdhNq273WTEEL2cRrZ6izy4R3g7MLMmo894ZaFeqKM8nU9R9XpTNVZag%2FvXVhDzaq%2F9arUuKFKdIdfmks%2F7mGKhI2r%2BpPeG%2BFN44VImYh3m0MDVFDGqFWk2PBancpycsbxdjsAWUWcCcAG0gaqls8Uo9jvmo0woXCWHrcK7%2BoXS55XQzPRFgLQNPMYPDclrC9f6MI2YvtMGOqUBwFSZGKdZ%2Fh2UAv47nqq93hGpC1P5D1QItMiwAQMUgjXC%2FMNjdExdjMmLipmuJhaWPzsvRJ6a3EluTBQrKPgXRSmnkXmuCxLp7uCEjSRYtqEXZqk0UqMsJ57fU%2B9fdSWn%2B97gZTkbASSgwQr1PaLHa65WErx46tONwq4H7suuTfOhYa6KpoFQQ6JrAJ5uyI6cqIrwTUPRoyjww8eTwq5r54s9rs8X&X-Amz-Signature=94f9d75e8c397bdb3d79246da7f62db6eb32cf2a75fa6d6c01d0d3ec460a5b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

