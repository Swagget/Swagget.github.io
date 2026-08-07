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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNWHCGJ%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T194139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8fPsANsh6JY%2BcvNWGKMXbUTjwQE9QBN87FylbsH0m%2FgIhAIXx6xaSDzNXv3IDap5%2Bo5Q2HEQKzdMGWYyMa5UBMaRMKv8DCFwQABoMNjM3NDIzMTgzODA1Igz7Rr5FSZLl%2Fc7KjPEq3AP%2B9lzmr83AEfQxE%2Fd6VSxH5j17gcCP3HkinLsvJZY4rzM1LSkuMgAJ181XzArCnKJQnsBho7nks2Ewz6hMgeyAWCCbCQnIqstRGArvICVdvz1hdutBb6Kt66vr8nStUFzufoP0lq4fYs7hxS%2FG3wQHgiYC3UYmDrYCeYD%2FLHgwO2PduuHVN2aPOCyQq6eNyS9dK1nSkNyXwa4oeHROyw%2FEt6%2BHwPpsWzrIOrCsIJbuhU22KQ226bzHhkt0paYwNiQuqhZ4WUMeLdpVf7gGe%2F58lD9hCU2r1SVWavX7Tvt%2FOoJfAzSroOJL%2ByoJdxhVOVVoNBl8OqN5SjdLd73mwQ6k2Fx7R4GdR5eaJK7yG2b2outXvuObdaMYGt%2B%2FTSued97JSUY6XE7GtZR91b74KlEG%2BcQXt8ESQIVUAxAzr27%2FQZ1NlwbQc3xP2PjHuFGPs5tZE7fS%2BUk5XOuU%2FovlhrBLP2Q9427ja6cx1TC%2BO2zlc9II23pbMKKrXTtPTAz9vJTvC9u0MdQxlDCK8WtC8%2BHNMelahzsj5aDJyzopDgI1N%2B2jp7AKqdaAkGQiO0t4NMnmSvQWR5q7l1kYbdsEnJlRCFxrSL8ws1%2BKvS4QSzyiDVG0BcpYp%2Fv73zzcbTDpz9jTBjqkAbZCa4Dhs9s9%2FlVNaE6dCnbKAEQfYy7VLt%2Fi1cjdbnCyQgA2WnDGf0TZJqF06%2BqZBA4EyMKTeYWaAqeTdD8%2FimTJyrbRjve5uGkshN%2BUPEZPKkUxzoLX3TT6QAjtDkZYOX4g%2Fc2iK0VCZ67XQtJD4eJDryXsRqU7Wc6HYzpQ4B4rVk5w658tURU%2F5iHgbHWdenFttA6jUeJB0xJ1klDGVvwNssTl&X-Amz-Signature=bfec4bd675f78fdb7b1e8f0796a5f8f3c6601a60240494c3026b2290171a0de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

