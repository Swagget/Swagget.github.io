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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3Z3E4C%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T185104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC8le2NNJAcIx%2BOIqBdfo81Wv7EEFICkmrAW%2BS%2Bbm81ewIgYQYnhR3AznignaF39sIP4Oq6yMcG4I9Z7%2B93gIoyX7sq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJ7R2ZDEQlVAFU%2BPSSrcA7jccT2fWR%2B9rlC4Knb3v5kKCjEcMcMvGO3clIsqaDG2xa0EQKcGcJLmuyy6keVG2OjRrLCzN5lp0KnKLvnbN4IoddwHczVBq8zOCiwxyfU9RukrWowY%2FK1vIOrPslLshsNkJrOSbIpa247mxa3VRLzZn2M9gf%2BSXWH3tS7T8A2X44%2F92eCB8SaYH5RoOYlir8LswSfmxiCBPVjC1c6Jotg9vIlyG2rx1pqvz7XEGSQl3l70qiJWaNb65xly8AwCS9xc0gURSl4FjgOqoacqVD2AZSTQTXqTJlXA0fjfvSaILNtHDLDjsCKKYaD%2BhQJkQ2IpepUf6xEtGcGD0380HVAn%2FZwXvYDyREDCwjudDjJh%2BO2xE1aiK6ktHLFAIUQhyxORQN85denDu3MesXaGxbGFUmY0Ry6kbzKJqqc9m6KTSw7TnSqeAYTtuBFovAvya1OQrOyvkbR0NQX2rZyBVUmkAvTnf7%2FnTWhVlaLC4OSYVWNW12yjvj6hnmyp4IQ6gWxkhQsWsqSUGvakCZQKYjP8DHFAegYoZWglciQrejbZvZomGb%2FiO6WmYULL6kqkMeGDhy35kXAkGzw7py08skQHrmkhk0x5mEAdDtbaQBx38ercneneRtKAGs0lMMv8pNIGOqUBGZ58HC4%2FhoM%2FcB0nmif9dmUAb68FloNLX9AYplhyGOYDmMBVtwjpUV%2FVkl%2Fop5CBkbYIC9nDCGU%2B0e%2FOhNjLsHOMTT0iDvkGQp8cUPM7rL7y81YMeUa2R67sCOdZT%2BvrwXH7z8vwvzPdbWwPVwsZhzYGN2lAhoSaojGw%2FJXEbnn4mEWAt7f1MpV%2BvoEW%2BYe2t2mJtOXoO9Wn%2BeZWLr1zcbpCuByG&X-Amz-Signature=a817734536773d267b2dda4975a33770099a1579d68b2a1a630b39e4b071011c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

