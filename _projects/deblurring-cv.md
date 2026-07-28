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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTUKYW4%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T045035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfkAwYEmWwtcio7ZZ9apjDvdyIwpn7fD41GZr%2FTkoFQgIhAJptO%2FyPtqdO5oPH7TElFjLWkwuuebduzG6eca7wiJnEKv8DCF0QABoMNjM3NDIzMTgzODA1Igwa3i0yOI9z9v8Oy%2Bgq3ANKBSsheMKm%2B4dSWqECGaFs9Eg1V1ruLmEnCvzXtPmgNj2RStxKhJ9pNoCn6jh5KfQiZMuzzYglTSq8ANpi96A066F6gWq7%2B%2B9W1MdBhB%2B9XE1tmQQd1sGJl%2Bk1%2BDr4Gm%2FLkOua7UfYQ9QYXTstz8kRJXt3fIp73I0LeVOyYd8BGw9tLVVHv1%2FtwBL1hP%2FcdgyWMU9dtstBGhzo2tLtz8nrn46lLuSE2vshQItTxSFmo2uK3FH6VZ8kJzUmpO90qmQFHaLXbU5r67hFKMCkT0Mk0djlI3VOTHN1Y29IrBLrCSkhbnhat%2BJrwz3F3o5bxvQiqVYU0uQ7yqkdgo3hD18PpVhEELTJDmuBkO47erI0%2BAAqrk%2B4p69kuQQN1Dqc18UUDz98r5v%2F%2B3EZPTXbpbuthEp0FlgHVBCqtQ6Z2LzazxO14my45kOdLZcJKBSfQ7dcHzZlLC9eTQSagJ0P%2FGLAncCSaKRnT4O%2F5ByPH1p%2FvJib8%2BSFlhItv%2BlDNQyd%2BRYwsTZOT7B7zSy96EPYChJunvMncIfTPTaQd75EnAwcgCFUJgYeJI6miytqA53Upng2qqZsT8GJ%2FUc%2BjzMFN9GsqeNtgUHaJNM1f3o8%2FTfAut7vj03vYSMOtOzV2DCm16DTBjqkAb%2FfCFRACxxR6iCs8ZGZfp2xdk8rpKA4VfQZ%2FtJlamQmvPfRbCpa%2Bl%2FzpT0L34bUEYxTWhGa8AK0TZp6uanTfU4wXFwiwACR%2Bra0QvsgtVpNihkxW0xuo2Vg%2FXBkBTXEW1oxN9dK%2BWncfgnwEnNW%2FbG9IglDK7SRx2U9b%2FdPMuv91H8rfgigRTodZq2ETYAInnFy8HMwAhLLeF7c53KYK45Uwt3U&X-Amz-Signature=de85b8e68bd88376aa28bddd843837e5380e91fb908bef58dbdd11b48fa4cda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

