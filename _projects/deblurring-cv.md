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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UPBJY6F%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T170923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCfOjB9Y4bDTyz84urAvqBfIIQksy7ArP6W67vAuNcatAIgaCuuHo0kz37HwrwQ0hZsU4A%2B%2Bx7cBx4WrNX%2FBi3gXQsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLq8c7GkVJybUDYTpCrcAzPk7xeNG8evrJWCIxZiaJbLfzbZgRndnI9Ftf4DQP5bfUz7sEifXTRogR09wKGHds2mHCULYIzArW%2FjnX%2F%2FyOtWEasOs3HSD%2Bp%2Fw0EZhGbtqz%2Bl1x%2FRU4CTSb%2FFamuKXo3VvBZo8YWdFxPJxQLgvgVSG4gKYxE%2FNgFoqd1SVtXRoYL25IF9TYxbx2rcQhhBCozf4eRZGScCrMhHzSBbuK1g%2FkB7brUl1eqM1ZxDJoX2t5kQPSTQC%2By0S%2FfnjsBBpgdeTpkGa%2FAsGcWuBsYfGSL9%2FcZk%2Fp37bT12Bwnqn676eQtVwisn4jNywoGZJmfpVHrZXTROb4NFqgZ%2BchKLkYsOxRUywAAq3Uqn5rWcaaEHP1A9wQy8%2BESOFWCG8q%2B%2FnkbarNgz2TWKazKZrcgPr35SX%2BXxK8E74N2pVvPAvpri9Ro4It%2FcxTHJ2QG30XXdoktYRgQdRcKMUgZ8TGziBb%2BAO9zcJWRUlXD87PS3zxu2li%2BQ%2BY%2Fr97A1fYviiyu47JIVtwAWDzVM4S8yv7p%2Bp0IXbmeICbyyFwdlPhJ%2Fch3DNTutSjXm8XR9K5mh6KlQsf1IqrWVnheus7%2F6b2DnZmYy06mw%2Bd09fCzOH%2FvAlEBbjHoyOZYo7ynEt0yVMIjRh9QGOqUBO32COSd7N3U0xiJxvmojIx6AqQlS5CKe0w9lWo7oMln4Ttqju%2BUC4VYvp1S4%2BOA8P79vJYfBRRnzweNJ7sfaDlByZPMwGZT4%2BQwjHftkuOmuxZQhNov%2BjaNS87teYniNlTdB3mhnFq5fUJUcnFmXh%2Ff2FovTifIPJKrsuhitWYT6hnPcXYfYeTLSnVHgx9QbNVumYtNqE5yzynJE%2FQljMCooYFc1&X-Amz-Signature=a3643cda80f4dec025ade365eed9c058c389130728ed8be1dc1d849ceb10292b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

