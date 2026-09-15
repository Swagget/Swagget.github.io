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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEZPB2KJ%2F20260915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260915T121734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCn2eatXo%2FtjPOxYdLn7qnu2THp8AYjuWpNTjA3Jf1R1wIhAORDQpBwh8ouD9paP3zs10xntJkrGFMSG%2BUaGUMDWy5qKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU%2Bo26T5HG6CevZKoq3AMbO5Jfvm5IRI8rHwk9qzAr8svy8wC1rxtAEGSwZyL5JQFL4x8Ek%2FdjtcwLgSf8Wit4suKOIvMoTt2V1za%2FfSm8vNeSi4baJwQZV%2BAMriyRFQ1wDL6JvUNR7LBaGzOYESGYebdVY3BTCGFiKkoLlyu5yam3QVpDM%2B%2BKeyIHYDnlxIg272gvtkag0UvLgUTU7d8%2B8cgEHq7jWZ%2F0WbFfRlK6Q3wEbR4sQJ1Lh3StoC3YwEZfQhVfL5NEHD6e4F6yX7dI%2BEC3%2FI6qL%2F9RkraRkmczDVDP%2FmO9mxjfDh%2FAnkuT7iJtYGa5Ed3RPalI8AfZPuirwk7DA3MeLTUUaiMLfLwdQkwI0OTKyrxy5x0f1nXd4r0aUJ4rvyEkBArGQGW4ZTJRfGHnzk%2Fc5WvRRRS1II1mQlyxIlvMzl4U%2BcVSIHLtciuTcFtiG8m%2BNLb1H6iGKsLOP8J8RJbCrVVUP16XedIrfZlPhyuIb0WXyMtzA2DdH7CDtcBpyTARnY3ourjPGolWf%2FkKVJQTOF46YzjaLY1mc6830ybcircI9PGMgwwBnu909eKrAyM3jbUtnJJEvQ8hft1lvWNWH%2FgRRYp2j0e%2F6avEs1eaJz6IhL8IUwunYpSOF8%2BKi8WJh14vqjDX3KTVBjqkARLoxbsh%2BZ%2FxeoEujLfFlscT%2FijeXJvzq8n3BCnrW8IPVeYbet%2BVUbPRYy8vkrLhn1YtGM3q8nT2kZkDWBD1ZYFtj5iiU8JZdPlp7Q1UdtSH53iHi8bK5pRiahQ30yGUX2fNQlQo%2FUgbirzqBbMzuAuqIxZ3KvNLdGcxMgi1ELT%2FeH%2FC5KHbyf4OqkepVNCV0joX1vEXlAFRny5D7%2BVsyOX5FnEj&X-Amz-Signature=eacea3ec899a896fa6438015c019f0ebeb188af8e2f22318709d893215960393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

