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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNIJWHVC%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T071950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIDiguylW5Gqc0G9P1Ee5XxYT41ZOf5GSOZxPpCllJGQ8AiEAgDh2e5F%2B2aJuGFYl8O1syEZsBoDZYhEnHdAXLU8%2FRd4q%2FwMIDxAAGgw2Mzc0MjMxODM4MDUiDMnZbxkVMly8hL4W0SrcA9fHNOXqXt%2BaTqucjPh63zlym%2F7NOZzNhPLayIU%2FbTeP%2FMHTWa%2B%2Bl%2BBKVsgjaQeJxcUSDy%2F8%2B7ryIo7CGjrWrk4vQL5HF5mhB7yi0memSlHC%2BMDVo2s2tyyiqtECPQoOk7L194dytYk%2FHdzJ9hhAS1DzAioqYuX12n6srcw24JPy5HKoGyb1cK%2BY%2Ftv3S26wXP1X%2Bi%2F3a9%2B6lku5oswjXANolLXQ0FS8Djx2qR%2F9kV%2BEj0ZQjKnim9ZldWaQzIB6pt7ZDhzLdoVQXoatCgJ6Dlkq8B66qOO59MxnETJSgPNoPNApZp4BAhjED144QSUamnjiXPVYb5jZgN6b9RNtGtf2kRipfaiTb6qigs9I%2FT%2F7gy7mRGY9hzIPSjnKrImM0s3lU8bPNMrah61g6Gnd5scyZaDaQ2iP8sMM9iJSQy1Sl8uNNMjY0T7eP5Cw9y6%2BZm3OzquCaMZLQoN%2Fv1fDg1kMafPCRAGH%2F9%2BJevt38aeUD5N%2BSOxJxLdRamRVFkPLUUeOvm5QOKbd7r1TBFRi2YtNteYMOdWiycq%2BL2lsy%2BYxkfZvpfcTvIT9jO9jufktz%2BRH%2BjZSMhGmgSKLGLHeKB5ymhHNZM3h95jsNmMi2XXOuCsF4Zc91Q7mgnk9MNmAgNQGOqUBeYIAyWe2dRs0FbO%2Fme%2F9VAra3ZkMF%2FSaU37149x02w4EOZ%2BdcULu7lmtDe7I%2BHVJHQP81jRxtyv%2BQcNFUeCLNMAQhzyNnR3%2FnQIheRO4CdggmdyjGBKxyM%2BgiOS5psFZNngTI4E%2FrZFgjYrYxuBjwSuwkNmk%2BwcJqnRNxYbkGqsNEQN51EIpOsXvNLatdGNatMNpdrFF%2B2HPRq5cp98Um%2BmdYFlj&X-Amz-Signature=157a4e39df5969142b1489246e88f20bfc7067cf7a11feedb8fdc10c246f25b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

