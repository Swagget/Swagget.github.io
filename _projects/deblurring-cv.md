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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIS7EFW%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T223537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcJcEDP4M5MRcLQyhWzxKVLZTtqnw1g501oi%2BsMgr%2BxAiEA%2BR%2FrbYqxAssNmgyOZXudSuPHDr7Fz89VZtzt0loNXnwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGW3rlFiNxCOFyZEKSrcA%2Bl2bwWTf%2FzUl5LVQpEmakscqeIfn6LEmuM0s8NtlxHayz7qR8J8qOnFnAIsdPrl2Io5hQYFADVPVAC9xvGUnaLE4Pwco6AMH3VPdxjWrr1BXWhScIVuIWau4rb0anVuDioyin%2FpUmzJp74V%2BpeOKaWvkQ%2Bm6ktHjXePvUUDQhilrd0C%2Byl2bQPYificRVQzAgK6595pX5RYcXTKafgrXHQQ0%2F2lw2gWqYilO6RqMnwQZdrauHnQJGvNpdmtVlW6HndjhU2slIY5%2FB4toE2Zn0JeJqk3AVghfc00U0HQqnTlRzFF2yRiGz2KB8JlgiqHAC2nh86Fn7lvILSXGn43TEdU1sXrTPQhh5SOQheGt6aHlDYhx6J6D%2FQmM1se6eYVvuEuD868VzdtEoFUI604QSNQuxG5zlN4T73KjGaz%2Bx3bWuoqlpGkKG0bW5M8rlmxqm%2FHxDPOBBygDtekglBtWowi20N5aksv3kDo6NUH4OhY%2F%2FxTqtkufNRDOfaxn9ym9GA6bBMrK%2B9PXCwgSrucmmvJVEoHsed8TYMrHppXbFdg%2BFukiamJw6eSOm%2FhqE3q5WcKx4L2FZ45PSpbnZ%2F3Xndgto0trYn3MvCCf%2BovQ0TgUeCh%2B%2Fj2cFmbKLDFMPP379IGOqUB0kOhWUH4XHo2RqezNVho%2FWY%2ButJzid8FCccapfoGJ6Oim027vX8AtJufKcqKoSHq6DpLr0DpfuwecrQnqOzRFnFTj8obFlVNuMB5sQzIi%2BiAhK1V1UMDdjWDDVUrBeKQq7BJZA8TrQx29hvwBDxzzhuicisicPBrxoqOUI2DLqGXSwtvNL15Jj2SVm4qnf0q8loh5P91Wj%2F4l9DpjLRV9PMylS7J&X-Amz-Signature=d2be6eba267a23a9ade160477005f54128a347ca162e29e7ad79bcba1a7c5842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

