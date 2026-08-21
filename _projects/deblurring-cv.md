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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEEQT4T%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T033922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFT0L6tSV8XcBfzaFe51V6sTI58RQk9T7OLXMYpJw5n8AiEAtCJX9%2FVH8rOd8bMKjYuESad6Dy0A1E0FQFl0JOKZvdUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdD%2FIaPE6IfL5Y1EyrcAytC6wz7lu5za1H9ylWDuLKwSDR6jnxG5rrX4Kvc%2FGMZXTSOyRKh77oQy5%2BHLBTgWL4jNMDnRvng7Nge1vPucn%2BiSlvkiYNacjxp0rG2nfKymvy6g%2F%2FPkQ5RzhJHa2KiEAlWiS24aEh97jtsY9j4F8Y3QLbpvjl1uF3GXurOC3U4nhhMPCqlVyJaW7mFQfqV11CnNlKe0p0D%2BbjAf1JwR5I0O0eU1FEkUXn1spTArSUiuSM35V9Tbk8rUDG0VfKG%2BAGVzOEIMXPz0j%2B1vd17BkTGldC22xp0PoqzOM%2Boe15RoBPe5VDuX%2FkQaHz1aQS4M9KQG0fLK%2Bn57vRlI0BXs3TwtCdLaTDQvTD4Ooo5ojNE1bRO2BDbIuSCzVLI9wAy3g8VtkCp39FciWk8VbrGJ8v%2BoG8NPO1CVSXwIXhxwUrz8GQlmBceNZ7u6C6caX2mu1QPAQrz0SboaP8VXdnHsXwfAnANRqeq9aEzhmYktbq9esuPADvmmfDc07gedpFgQiOrSggRF4AuNd5VPeeV%2FThUsqEu%2FLm2vtTItqjnEytVvnm5zIfcPDOB%2FygXNgiHG9pYlZM%2F8kZ61RRxaBySc6kf%2BCsbGw6KRdGAsqaIgJqiqOL3HAQsr%2Fl2GAcDMPfsntQGOqUBtW%2BUUJiS1TXg5S77TV%2BUXPe6FPea2emnT93oc39VBD6IaI%2BcF4Ca8NUFJdZGLLWkbFIQ%2BSow4qlXUEml4v5WQZBqtFHvtPEGhFlEuoRjAWuSpy1aMeVZp6cjEr9nY48WobKxNhl1cj3JTuNmMlnLhKvCo5T%2FeuycNTSieob817%2B48SoKUMTHfoMFwbgGZuYHO%2BSWWgAtf%2BaccdtG6KY%2B%2B2FPqJKm&X-Amz-Signature=b315f581976965fed14e658928918e331ed0caeaea0288c17e068c1c8745ee86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

