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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X5C4Y2L%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T052328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDAXzPjBipL3aynNUCFi1D3ObeFbhTGgyfjqKfbYIhLewIgNBvsf4yBqFxNuI1uwUDh8TQDtHVaf08MVaZc17UIMUgq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDDZSL0Ytjbb29FKU7yrcA0xjGuTId8GQ4DlVk1WLpXdStmY00c8QaOLL%2FRkcg5%2Bx0BONcr9s7S3xOw6UmxNXVwdK1AvPy52z617IGtPXpeGZcLX0FZjcWtValUqZpqOkj4npf03%2Bwe3hQFwPES9jfDHn4iIVPFyO%2FFzdSU%2FPadOaYTwoOsdJoWcWZN4vr%2F9zjPqvvAu28DR4ChyFxT0V0j8WPIn%2FmBZxG9wpgCfvYyOM8Ie91okB0T43wfm4J6eZcOYxeuE0I0Po9KGgEmdYknze%2Bq17%2F4Lcct%2BCfUtfD%2B0LP3AUd9R1M%2BP9hadENazot3mpg4qS6jMRRzZ141Ft6B0ZzL1sIRciMQ7td0YFI4KolZprJQJ4Evk1FR3EZxoTbREPpo3JnvnvvZO0c0nheOll3FKQFEdqqnP4WjMDDphzC2QCiBItQKXQJKzmowIxDK7wdOlssH7z9hq8exJBbv5o8jPTnHoRWSfiD0dYYzRuwP9zk8aPRu5774FYzgUr75zIbYD4ckzPa66HCKJqg2vHDehLIJYhk1WSjkKEMGp2zBJaTRPQMIV5y%2Fhr08985TtcLeMABeH%2BsfdhB37VbQXGMZeQM1334UECWH4Hg2ACyWAcQjmsrcy9Z0EAUryqymag6HCootJHMZNoMOOJrtEGOqUBfEMDOJlJCWGLY41S5EjWpFvdcqraesj2jlqw8l1mR%2FBxDT3nL9TQyYzVBHPhO%2Bh70syGFj19QvE5cmkLrO1TscAyprCcG%2BbgqKlqA09jmb6u3P77vQIaWqcw476Ljp6XSLmwnBjI4wy6pFGWCwrC6YOMPjHPBWme3E0AIUOBGiOrDDTh8QBHQJWKXsAtIMT37n193Xkn3n5S%2B1S8DcdWwSpYD3la&X-Amz-Signature=14b7940a99bda40195068e8973370b77a326a63f5811cfa48cd46aa21ef0f60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

