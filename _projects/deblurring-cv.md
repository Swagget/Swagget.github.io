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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGYL4L6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T083552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAa506trgdTOEuExHjJIfpb72QkUjR8dqmJKWVOAKjNJAiEAsJDDOyFjXcKqCiIcnJvEvGevHGwGxbwSkJCvg0G8k7oq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNBrQimu9PR4OA3VuircA4pXngY9xKG6IjbxvBBg20zKOoov1oc6tMenE7DSQ6p92qQtHEniX7k9xvlAx9HyE5tCQN00iLlJg9fGJiMgvWxQElahnzZ9AgtXoeYPWj7MEZZK9gVkz%2BVAF5%2FFQkxq%2B73bkX3xqfBhurkNguAAp%2FP1N0YzZAsmwKBYGUmsFZtsDg8ysYAe2QoLpFZdYwYXGpHqI95Ub5i5b1HGfskciyiM9I598lErqVO1bRcjZKvqoC68ybbXpqZaJ8hSmEHBLHv%2BcTRD9LqgMp2GXBbdt6CTHb1vyTLjQasI8PLb7NSI015DMQ3mxs%2FWLwkn8u%2BK2XxSZz%2FKejtt2OI5c9PoJveJdFxm0LntUGL3cKAE0yLGGhvm8kfikTrrMU6Oag68qT4uUN2zuMITR8erKg7V0PtKJc1ODM3QIulcHHEwAjwRWVQvbAQJn%2F0fiw3PoqKefhxjbeeTyP0MR9rG6lBtCOQAktvmcknqTYKRgzOMEpL83d8Uor%2BXcW2OgaRfsDJuIhol4mO7a4cNXKe3fFCYrPKFY19wqJZWhGE4GfG2uc2%2Fq0MKJWhPFO%2BLiRqe2aWL%2BNwBdd%2BemetT1zmSCtx1WJhIiWdpon5HfP6bCMo%2FAf5x8lvXbgeBIxWzWjFyMMr3p9IGOqUBFsCRkh%2FIKEN5qH0yCB10N4DNLKlKzWv1PFAgyBS8UzHYZaXQ60YE62Hwi915eX4GhYgySok75ka2fmHp%2FsXLbNMwXHLViPsISXzhyBGeIyaO0CMoVweiThdgrAj2c8t8XGgoLLP37ZPGGkkDoO3sijUS%2FZkfIoQ28fvD%2BLYRdEaBpl39nBdhc1faHBGG7pIdmSR2ZVGnA5gFaXfOMiuhzbJKIWXK&X-Amz-Signature=b07a41be895ee98da8c83746bb699250e593dc1f2bfd28754bb9edd75c47c277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

