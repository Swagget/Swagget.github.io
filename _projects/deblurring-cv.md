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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIWUAICY%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T194511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8w097eYvz6oyWp1z9KpQq0EAyvH3UZ8vRwzHMKatzmAiB1%2BKCjL0Nb5XAn7J8k9kS609s4ja5ZX8NIgOkx8q5REyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM81ATDyMxGbpjFZ6JKtwDvKYZQMMaHrp0EymluP3R%2BDJ8MCjVgCbiTy%2FkPfy3hP06%2Felr56xNayW%2Fb0OhFeZ%2Bv5JM6F1yQrKQGBsJFuuhxDRQuymBtTOZL55y7rgPv63X%2FMwObIJg0KK8lxXNBB%2Bp7V1t%2FGmhj0Q6CH4ex1Jyt3p1AEBtesVXHMaWpKlQ4ETNMoke3A1pUcGxVtQqIM6Q6eK9YXUipU7HwKi54JocDG6m6mX0l32fuhf%2BnvRztSnc4%2B7k5FWxwI9AB%2BocqVrY0uYZdASQm2QLPICDDctDI%2ByTRPPHIQbDCBqlXV%2FOP229nbgJsEZyeRpXk9kPZ4x8YsUcO0FMCAGdilauLKLzarrSTfG%2BQof4i1FD02RF9CteW2gBOPf1lJgFZTc4MyMOk1R0TAAqNVmsZGy3GHjpTfKnpIRhMG3Dn6dPkfeH76WWu3%2FHm8ALEDdut%2BMN8og6a8OmfOlVwrGk0iycSxXViUll9SvY3UQGCup%2F8S64wAW7TBHJzJUOFeUPhhLHN9q89atZFbgM7O8U%2FHDxImmb4CLSzCctZtPFp7iZeBu57HL%2FfEaYLCDW8yYWobrUkhOTIPyCj5qGYg9vsb8rVdz1lhCSrk%2F1OIdHCIFaNKh0%2F0G%2BM3BAL5ryOwl2DVkwqLno0wY6pgFWV4xmXW2vTuyC8z3T%2Buh0nE1IzGvzPDsc%2BvKjgGZVFourWakI%2FdLGjapoiCFUmsl5%2BqQBdU5tailp5QyFtUtYi1tT%2FLsqO4KX0AzE7yUpdzx8KLtHFpDxwKIN8QAjYDRRacnGOQmqADxD%2F5YcVLJstPSQZl9i5a0wLehisJLiDdGaNiTHDzqdP5eAf9E3IZcbAT8QiDw%2FLUZx3hoIgK%2FgEJdQFOg6&X-Amz-Signature=58d0b376a5aa9e7cffe73b6bebde2eb4c4bad1dc8e5bae678f8b964ad76d60aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

