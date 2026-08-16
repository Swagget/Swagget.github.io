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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672NP2ZGS%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T051621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC1T5jTsiUiMQJe3%2FMmX2Ki3HfORGZntv1TgaBAJMjHxAIgeBGC0Xv8xuaHZA0TSiWrOGAhcrp9davSeZiU7T1zShAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDNzRwgh%2BXd7q8e85jircA7%2Fr26p6TGbHXeQTttFPXazZjeX9CEaxELZVPGPZA5CC9ZJqMXLhogyM2jFP%2FAMdK%2BNenCSJcbDkAudWnG3iZ4Or7dIEtlw%2BPrB%2F8OsdjE9qeGDtEqIOMUx13uCxACtuU6oMKucXVKJI2VwwIGLDG6B2hWAgJiKer3dfYQ0CXDnqy4KIzfiH0Lic2BX1B45LSV2zgEzVk9f1gFNaY7WOC4X2qV%2BJCrzZpWr1ksuDzL2UankJAG0xXI2FMSPAl6LhKN4%2BlcXUC9VNzQBkVte0BqislYR0qVXKH5USqhLi6uNoo1y9yGX4jWW14XJ95Mt6j8exyrlx9fnzgRn7liGlZYxCOgBa5MCpWF8qPhwbCAjPC94uqrHN1f4Y38G3hL6Iya14Fwr35wCl2GgZLWfT3e6sfEAymovDmMymh1X2S1RZgZ2mwETZjcNZ%2FMxbzomOe9KGA4OvjgTROuyWW%2BC37toqCrTegt%2FxqTNmjgfNO3QCN1CFjN%2FdzKuHXO3bgep6WK8nFupBh0ZgLO4pAKfrXw9nSjAOpPPoy3uk1QkBT79MICgp432FOHyM25C7erTwzzkEAlLKqGoaoMoYMTPM5KnaQtI2pApyVwkC8%2BgXxOs73edSOjKPpM%2FwBOoeML2AhdQGOqUBKP%2FygC1atYORsYvxtkCGDybthzWdkfuK33Ml7akrtCAXJdwSFaKVyHuwmzHz583gH3%2FwACslmfhIoz%2BEyskr8XHnmUasPI6dkVzZrf%2BXePfLHwSV2ol2PDQQNiJ7r4yfA37v5kMMcXDj9dQWxc%2BhsUp4a%2FKdmxl6OZeHwNws1QGptzOcYhdi%2FmxNpofG3UFcMAcUwc5K0ENMLG0vTsZ4hGwOaTSV&X-Amz-Signature=fe282c10fcfb7a2e3d0dbbad67ea0f029a497d7fa379e9c1de409f836f25ee6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

