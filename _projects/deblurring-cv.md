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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQ244OR%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T011949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6QX5qqIn%2ByXLUFRenfZKOoEpkJnR%2FqYz0u1NENF95BAiEAyXQMJqdRQQ2slPVObOoyyz6SpiotauoqsB36wHbMvGIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfkw4U%2BYo9AWEi8sCrcA9MiOGhhByD4MTNiYLQco%2B9X7ZREyKDniIR2mtGKxNIiwDtyxZDWJ6IYRuxk1TW0LY4KrhRSLnyBzmPpqKXG3L1XVzkUomSZKqyxRNNrwjfT7ehUiHUq3ppuohIZT7THLye6cU%2FfjttGUCq5mo7%2Fho95%2BvabGHt3qJWobV8dXuL6sueHPejXMKNL85nSn1y309tIP%2B7Ql5IKntEEF0dd6zfCs3h267EHNhOUI4BCUFsMHje17%2FB%2FQD7b4kFIhXoDimouz9SzwVPz3i%2FCDRbqUGOOjfPT1spzUI4NeklOUrhdi5I7V6znF%2F%2FdZCNKo%2Baw8oPDwqiSG88li9ro4vFACEyhVWrcQriWIw1beCki6qSIsxR%2BuXf2nvg61Zyfxj99nMaEmxUQ3Qn3FKJoLmk5vQbP6TPvrfDKhDSUgSFOQ5EnjpVKeTBLukRuoQhT1BKYBttZVs90H9EEuRIYkOobgj79ObfX4A8JF0rMVEkuuZyQrB219IVXTM6yNXjCJBAezOIYe15hv6RgRkNbl9Xwaz6SdVHnTwG3OivK2FNlGtvYRtV%2B4LnDXcAi1AJ%2BTuehWLR0SdkloLXDfJSYOY3ucpz5cRI8Vj%2FgmcJnt8UlUe59jLkRR%2B3L2ggws9CKMLmm8NIGOqUB6xVPYMwdyaIC0BAZiVUTt17kwR0pYslbFCWJ7phAfRdvYAmwK2vL%2B9qufZeRqVms9i5770szcdWPEptt8CTucUsG6NWsw%2F9F5EGd8VPR5GO8MOsIgMCYnHR6lHyMTbNilvLUpq8n7UUnr5ul0sLdLVqnWMFhj6VX%2BM9N1b6pMBvlAyJwUA%2Bi5eT25Ddb2whgWvB66%2BK5wCATsA1x2yUz37aRJg3J&X-Amz-Signature=4bb1afec1446eb9e0640087263b1eab2ed897f18a066357133fd0aab6b5371b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

