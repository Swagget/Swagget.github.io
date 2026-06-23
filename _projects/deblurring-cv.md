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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3OGWHVM%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T205943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDyLTrbUoa%2FgHLIZJntEgmSg1lN8yAVx3ZbyQwN41LrqwIhANGc8ZTolJfpr%2FA1ci32S1x4kdp6HGzgC9F87WkCXPW%2FKv8DCCMQABoMNjM3NDIzMTgzODA1IgwOlvUkAO7HoP3MPMwq3AMmXoEL5SSXxRBWlhaj5JOlHkJC69eGH3gY3Cs7qfQEWeF1Hv3glxD79%2B7QV4lXjJvP5%2FblAq4J%2FyZET%2FYvosLSw%2B4YwTAidKOG3xJ%2FQS%2F1N84LZKTi%2BG2SVVu9Ichjg2%2FQVHc3Vx1oU9tn8LIEDdTPRK1DXzuFzrltakipyhdkUR2RaOM2y6MoePzIeNKY%2BwzqqOBUYLCMDgKl4lX5odzJ0GhokGvmu0pz5kVHA1IMi0hzElwmTJ%2FfjHpOy0uvShdulkGYuCNwPIaeTSF1syxv1G0aViS7zt%2FuF5uIEqQ0%2F2fOwzZbFJYmOtL8X8z%2Fz2rY8%2FWk8EPQ8eq7ruOI8lovcHhtbGsuCgKlS8Df561iW8xB1lr%2Bpej2AttL444OV85R%2Bfhdq4ZJHg8xazUKHO3YYFR7c4RgKLxjDCy2jPNiPg8WFCi6yaK5cbHYLWc9hUBvJeWWc2mPoCeVatC5BzRxIFqFC%2BhBG9ggvl6Dq5H25EJv71%2Bj4JoqbHfZK4uIuoeQ04U5sNuuzYpdV%2FM8pRyAhlhxpTvgsnTMaaR4nDiJMphhwePq5waCvdgCdW7MPBi6P2b8iBWfW922%2BQgDbyA7XcrilHrXHDZCJK7JTfh0AqTf2weUlGu489EOWTDFnuvRBjqkAZr5bPBBN0%2BdLQiaI%2FvY%2BHq%2ByNTHo8fPd%2FvKYa8W0BBHQ50l%2FuVCleRObc4w77yBPFsA2B9EAhr9V3gB3yl9RZlShQ9822WCf33%2F9c0DWUtauIuxQ7mrrl3fWinQOMf0SGsI968pwAfmjrtZAHIhsTIHHOuvdMOcPjtpdkboGcv9OaKw37gwPLa2bLtbYDoNZreSuM%2BpwvJeM2JKUqE03ypWoNLy&X-Amz-Signature=790efdd1dd45bd6be23eb2e180dc7f169e4c4767f72c1e9557fa3ae8f6a5be96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

