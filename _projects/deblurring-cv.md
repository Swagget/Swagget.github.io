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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMJ2IL5N%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T174143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh5A9igfr6D1YUK9BzpAGnJFo5wNx9olX9aTxFLezHCQIhAMckNN23KRbMDirv5Z%2FfC2FvDtlLJzqS3WIwL7GNVMqdKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2n15dN7FPM0mrscAq3ANHaCryB9TJnaomasQvcndLfBcr0WNWw5qwdkPMZCbeRoOuaRwGWV5WUiWuIk4k8MjdZhQeJAanJ7W2pGd9VUyReVMgt3rAw6%2B653i8yP7lrqenWYexSfypm7DM9tACU8G3KoGeJXjT6lhCILCSLLHn0TZJO54J8asBhncXuGYWRUmiMh9tvLc8xgfh4QzSy6xLoX8AutKIagwpSoAYdCFX%2BOUsDPlted4l223MhSvBUzi84tOrm8Pqn%2B0jx%2F1mkypToYQqh8i78fIuYEoqhGJO5op18v8qad3pHN%2BVOYOZinGyCvTQ0EkBggJhXrZt16csSVMqDmd91acs%2F4orf%2F%2BmbDVqVsZowtfeQoZevQHves3EinPLWfZoMlVmUK%2B7EKpDvrgpcDvj3Kx9HMXEPgdpZ7Vj%2Br9kikKYTAK8k848OkeEfmMenvTtj3vpbEt7ZjlZZa%2FIhfdpJmvnw8c5eTHTwJ%2B21%2FiY415pgjV7csZMP%2FzkKVEPGj2rlWSS%2BEUDcQe1NbzesFohpxTxaR7kiW6Cr0qr4eh2CLu%2BD90Wb6W3XU3ZqH8r2SKLsYlzMfE%2FbjG9%2BkC3yX8QbmyIxkP%2BHyHdiIqSXUZpc2H3HeGDcwzrsVRxYJaoFCoeeUJ8uDDcjsvRBjqkAXIPBtbwemTcGmYaIgwDpFuiaZxCbQkRxSKSkjUS8nyOKD0oNTUwSeUqICADBHQZHQsefMeRS5IDR2Wo1ockIXmP1k0ukIq3VreDuKjXUDJSrh5BMQqxXKPSss7FHp1ynXMMATIz4XAas10XuPsIe93iuqUHCMtNh2bnCxRA54qV5I8ODVbSlTgTAtQG0xR98j%2FAOfgsHXpZ5HrOau1pVXcGe4P8&X-Amz-Signature=deb98719b75ad1338b60530603c05f2218e352868c7b60cd46d8629d065c52d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

