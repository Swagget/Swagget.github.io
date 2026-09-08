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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHSTLIT%2F20260908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260908T220528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA099gsJy1XUYXZel4HNdFaWvMht9EnHsu6GMM20PxynAiBAoYiMm8pQ3Uy1b%2FlC%2BjcfFwsn27M12jZ3aZG5PP3Ljir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMHZ7r1owiAwlFa6qFKtwDwvRFIcNcYOpQTboc8NP9lHSeX1rUqeD8On5kAoLop6%2B%2FTPytSiBga8pMLaSXJWXBNMwJrRqt7%2FqJXvT08lYRotJd%2FKg31wxSdTM47EtyeHIsdduQ%2BoBWw65DZqWApuQFmKQ19%2BhZES5KBvtbtBptvugUG01H5diSHzEau2D3f106%2FmI46zJ2BifTzPgxa9XG2LnPU0KtM5Z%2BVOVj4NHkgPV7l%2BL0GHgtgtm2Z%2FbgZx3yJY07PmnjDAKAMASmbucczVbYpFoAEhQMNiT%2BiDjV4ad3sD%2BWPLe4%2BAsNGviQew6RKfdYc0L7zUVVhAwJ9WPTynylwHZY2ribQFXQpTDqqEdEjCv%2FVMgf0Bh4DL8o%2BdaN0jC%2F7I4Cwc4Ft375%2FklfBRmoq8Qt5muidtbSC%2BkOiL7pWw1eZ6szjWut1YZSEB8s3yHfbVEIFHxctDFrGU%2Fz%2BJN4VyWnDAjqn10IfLvaS3xu1i8%2BFJjLFMsfFzEDrFKXG93n4Qb6WepGBOhPpOGUM2O1MZRF%2BJr1Zj9dyMGQSK%2FWCoIWbE%2Fvu%2Ff3oCvB4ggpiDUhyM2bbziQsayMHbZ%2BhUx4HqpIaOTlIrI78fQODm6SMn%2FBD8B7Agp9VJ9%2FN8smdWFofqumexFnmGYwy4GB1QY6pgHl9KBbLkeX4UkFlamx3worzl0wvbNzR7Iykz9dx3MY6d3d6fqSfJq3MPyKB88Yct9SD4dwrgJ1qX2Xr8I9Zne4IPRgJ7KnwzsBkaN2SwDCf2hgG5V%2F%2B7tiV3kxO0RCcl0erXs3VuiiQNP6YbHZlduRSEmUzMCUKK5iJkXzUM3ZGyDwg5U6abH4GScKRxqN4z0EJZLGFXhASzZ%2B8V%2BMluhy5KcLBrs9&X-Amz-Signature=96adb00eb41ed4ec970723b47b61f2153f629575f539ba9d66679f4859ddf40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

