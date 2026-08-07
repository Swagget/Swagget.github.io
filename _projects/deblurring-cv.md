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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2VEDE7Y%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T080322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEvW8MpE1X6ILu5jxOVv7PineIjaUF2%2B7eLVL9Xt%2BwyAiEAsOBfIWpqcCa8TepdzKAsjHz9EHv3m4%2FlQjKvRu66Iwkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHbmaoEpZVTTvVZqlSrcA7KtXE2bRmO57u2JQwAWplC%2BiOV3gi7HpRGQCJMGCG2GoPWV%2FM0wkEytREH2ckszlfZvjWQX3eLqdKI2EWJtiNLfNueAw2zEHeaViC1iVxxdwIcvBK90z8TI0hHghfRdR6CR3GxIW1zSW5Cwk3lNv244Ea0Z7INXeH7L8TOp1LQhPQf4DM7bpXSvhf7kNq9GdSirct%2Bs5YztzWXLi%2FFjOQkI74OcgCj5l13Xu9aFM%2BMykc4vr2x6L0kprC5%2BtME%2FTKWgtLRYkuHPYNq33Kzq1lpZJFfBYlAsrZVGn6EJcGxvcKVZsBWbXA1BAArZ%2B9aEZ8bcD8O2BZAeCAL2Sj7HWuedUgWMworgPO6bJLKVCSGTGgniWaZT9Z6HU%2Fnv8SO9LYqRao14RsRfFVSosV%2FFgMDEhDxx9OLvMqVhA8FQ1LlpZEqM%2FcFMP9gDo4%2BDsEjHdO1HOoyV7cX5hg%2F2nG2agh8UL3%2BktrsQ0maBF48yKxcZjzQhav%2BxygSTVeAeQmXSei6cbh5GapP36k55A%2Bvw7qJcRgt1MYLURbG5DIYMSkvJ5LrOuOKQj8T%2BMkp3ZMtaqiq4%2BEP97CJFzyECGWXr%2Bb%2F9OZpM2FQ52nXIYpEv5Gymmy97%2BQvo%2FDaT9JTVMP2Q1tMGOqUBMxLqmBZ39kKdnsrMLaHBjY%2FBFurJ7UtbdEh%2FdskIQE8Fn1AzczkThR3u2kBQUM9Bw%2BTZU2%2BTPnmsgcctMUN5gSksxbCaxlD0eHMfc4%2FHyKCR7%2BDBgcbKD73Nm1Ra2EdRVAFvoNPKuntc0xWSiJ5JtPhNxELpqdA0UYv7%2FyGfGmd6m4lqtG5w775XVmxRtOcnW24Vwq%2B%2FcpPIkQr1vlAQg%2FUPjRG9&X-Amz-Signature=7a3e57fc5d74cc64548a3e378284f9f38fe5a363cc3b3615188e0d61fb1014a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

