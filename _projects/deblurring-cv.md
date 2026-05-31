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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROXKYBTQ%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T112413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCOEz1QP0lrvHgUI7XnawEUs%2Fn6mU5%2B%2BR9MG2Gg9T3YMgIhAMNgYl1aDYOSLEi1XGghQIx7mYbBotP%2FjEAnxf6TYTxBKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVjtHOC%2F60W7MTJ7oq3AN4CiKTK6OHdD03sE7ces8DePpRwotXO2jiGpOwDkbRRP21qRfiTJbivs%2BPuq0%2FjDeVzrbo5pD7Dbp0lRRlIHvTWdtyXBOjNI1jbXj%2FM%2BDtL%2F6mRfZuzRXxmmrBJBmLcuPopWGN4dO6apLzXPKuFDSccxvFSFGt0Ni9o1oQwBaoT%2Fwjr4hGaGO3pJ9Y3gqDqwUDWUjRjiSTtyc%2F7T2sYQfjjCPFR5OKogRk2kixMj2gx5p3yCov7mIvpkhs6L3WOgbHTbtPJZfYC460l8ajQT9dcLFZ6i2lYzZ1E15GYwC6RGPJIIcop3PgKPU0%2FSlh7zySn9xUU%2F2AVSCF2K7%2B98a6HmrP3ySjdglO18kc8I3IhIJtaiQVLn5acdZalKmA6Bgx6qnjhez%2BzQ7QYKWkwG5cmSjhGoC%2F4CSRoElryTtLktr9M3loppd%2FwyYSJmDXG4Fg18LwFFoKKfiAfZ0fV73kZjbRhHcP61mL9ui3Kx1IyOZAY71luCtXpsmIP0k58eHOFLAorpjlw4hJhhWBS2KsSOT9W%2FHu8X%2FxjviHn%2FyC1Gy5mlclcylxof9eSOobrB%2FMfWAAj50JuNHfYfLjKYluOIqXhjgISQnmi%2F06s9X6rliPB6o10tK2%2FdAZqjDG7u%2FQBjqkARnyrKGhRvvb5EecM%2BVEDM80NwM8iQzq3F9IJuUvFLWZc5Jp3Cd1BDDIKl65IWFbBuGWZEm2TR%2BlVvwprnbavtYGp1%2FmY6kOMcvruP3JxNqRwniresrr6Zq0KadBxLq2gTSGcwpzYYp%2FvGBHAF%2FEft6HFf1Rv7TLZ7TPsRbvdWyFQk%2B81gbMzo1OcvohqMFAQqi%2FhA70oKnTlCU9NPkqov%2Buqmtg&X-Amz-Signature=b0a9a84f158d98aa158b43f9e692f8670ae4eed5e854557b8217f16b9aaa20ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

