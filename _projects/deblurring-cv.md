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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5WSKU3H%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T151637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhX9EDNszvutLeYV%2BukPFr%2BPWkQ9gnubyTVFXPAwy6wgIhAN2SPZJ%2FV4he9cfgrEijQWb3Nd%2BV%2FBOtSUwL4JDFHWygKv8DCG8QABoMNjM3NDIzMTgzODA1IgyeKzW4AHXoi4FWk8sq3APqw57aSKsDyL4Atxd2UFxyISiO6rQiJY0ztgqULtnkADCMokI4rI%2FVJCc7gW0fjhqo99myz7nmqVw6l%2Fz8SiFwoN8l%2FrLcx8ymyj4b9N0NSpaY7D8m737OGQZuF73UfGwnv%2B1GnU6KH73DTA1Y%2B6YXeY2mAdXUALM8sybes%2FBrQKGIvnhA4EXO25KaX3%2FFi235pDg52gOmubFEt3Z5P74ECTTf%2Bb%2Bi9sxYNdf7LoORy0b%2FhyGid%2B%2Bud7%2FJK6IioaFCeUAjFCwWnpSith2ZfvehKvCrOz53va6%2B2DfnzZGUr%2FkG8nr67AC5mHuaCbXmEFmHRyIzuPqXRnnCRl5z%2BikHsD4NLYr5iH8Av9VxYNMyCgZE3OujDf90V%2FXUaO25LbJOLo%2BjGva3Q1wV3IT1jbairZp63NFc2Hk4YKSl9%2BrZYnrdTdGypYmjIMkUudz7o1dCwZgE9U7mF5oRTUQu2fBUNJTRiVbC4LGusiGDJv4o3YZNAU%2FB63vArKn8Y678PEcJHqNRl1tGoHT0%2B5rf34oWGsP5DcGwICqXeu3QCD%2Bd2gJx8S89282yve7VZnWgzrmopB8zfWmZN7z6acq2kHkHXs4Yy1Poi97%2Bl7mZ%2BqptQi9E76Q5x9VYB7WN3TCb7tzTBjqkAfoTNVbnK4F8Tf97NoV2IB47TnkQa4LpW6qT52ln5rHHu1JxCRIFh%2FXxx0btTZUcsZXD8rhAb8fwohWId%2BiOWKedKi%2B8R%2Bw0YsdyHojxScIUpx411n1sn%2Fnt%2Fz8%2Fo4rOiLSvEl%2BD9pq84RL1ZJi3KbEid6FbglowEUtJkbCylWtCY9GAlAkNTPdeW5K0zd4xly1uhM2pGTyKBAO3YJ2IA5Bz0ygd&X-Amz-Signature=905cc480fbbbff18a323f2f1662bd17497bfe0760b552c131713d5669544e643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

