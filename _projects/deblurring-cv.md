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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOW2WE5W%2F20260916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260916T232003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQC3scbzuJuKNAqQaR7wxlXMDzR8Vx6%2BeNXZMFZg4l5vIgIgYZ30UJXvRf60KLxOAIhNGQt8Pk5TZvE9sdSw0n4WWGQq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDGmPwATWXtvimmt1DCrcA1h1pjosRhZEIogsvojSHiSxz9AVXEoyYlfSuVKNAKQQ0YwAUdZftPQ%2FGfuy3itP8%2BXBg3XkIuch%2FETqB3wiiiqZZeRuALs3kH92zzbKo7Fd9YTYykGDUBiI6l8d6RCCkGyrMoK%2FO815fW%2Bl%2Fza0uRyKRw7SXKaQgF3l4vbPe8GPX995PkgUsWgO%2BEwMxG48veY6nVxU4ns4B3OzaZ0m5Iiov2uMf4OkheUrB2Rj7HcolnVNDZNAlFDUZPXWFfnAC4WsgKZ5ZkAtmjjzd5gr0sYSQGWxJmQUE%2BP%2FuAljowYZXYzNApZY6l%2F2IQRP4ukVnpgF9eiq4IaFk%2FztaFhhW%2BKWc2Io5yRZod1JmKP8SdRW0DZ8tFtZKcHCCf0GqD%2BBVVwbjO7j%2B6egCkj%2BPygajq04kx3n1NFKsMwnfwsp4YS7cjgNmMb2mTVJ0UG8D8BYV7ix0g3UhEpTNFk8TAueGxC%2F%2BJJfn3xhht87WMsVh189vYNYzhd4h7MNRuY8MA99%2Fte1ti79b5gW2v6nQZlOA1sLJgQD2QKJA9%2B%2FtlwI%2FyHu85Dir2NP6IrnBLxQodqelzf6rxH6NtZuEkiJJWm4t9fkQqqld8cW%2FVKkin1vgGZQUgv8WFVoeMOtCPRZMK2frNUGOqUBBota3hhJCgf8klFLwkQg4fV%2B3Wdub8kZojF%2FcMAT5z2AXecbzHLstplpiZxXgIIF%2FcKLSbTL%2Fjl240325PpHzIT1o9Ho7PuazkeDWNWm9kb0ITVbhr%2BGqvxt5gp7c%2B4D7KHhardJY8GBT4HgVdZQf3pI8o0pRWgwq%2Fq5um8GwyzlR%2FXhqbvvgM28GOH5dvCdKMzmyR6r8jIO5JyHfsj1i1fFRRXH&X-Amz-Signature=0ab841ca6600ff256359d69e38e4708721212556e8fafff8b7567a6fdd303d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

