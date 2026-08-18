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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZSDATE%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T133323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVAAA6P6vQlk896ivJZRvFD2hlsfx7aWeN6o6xIOzEygIgXz180OwsXfTRLBPwWh%2FIEzA8uFxHVqDLJZXNOUz4Uu0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFPKzOt70fsIKC%2FWVyrcA0pbmWX30sHmhGP9iIVYysMYurXSGOfYr5kQpZIry14hIeZfmz%2BEw2VPTweU25iy4kE4cXv%2BUJ%2BLjJiorLKDA9AZt0Kh%2BU3I%2F1prrZmLbRQGKafQLg%2BL4KhZd8xpzANFd34JXteMp5ngVy28KXs%2FL4KZJvskw2zxKC9xKA7KCenHG6QpjkP68Py83gh%2FXkTkCyjhOafgq8Mnh72Sgv3FeIjx1vqSjH8Z7fpyo8u15ExwOFo%2Fq7uCSFLf0RFhBao5EanagFMD0fJhj21X7x4bmmqdp3K4W%2FffZxJe0qR3KEsvQyWQqdxfvV%2FHzCHIhwvgY5wdwIgECfbDvdQiLTRxj2o36ol6HTy4h%2BPHKObetXrlCCcDIHqY3vBbZuK46TAlzwzRS1wywM5YB33mnURFtNkSA8dCpefLz%2F8LLQw0aAIaeXSFLG7Rz%2FOVjd1HNvjfwS%2F4Zxoh%2BPVD0wot3Z%2FsnH82xuprQW4iDmgjmGcATngYrQsIPEwbNq0viPqfgQIb4SMqTV6R%2FlqorneQnA%2BPCEp%2BWlWTCVhs0vGJW%2Be6etAsNvYOWy1t%2BCiGosYrdXLBZm7RNDSjghPUhZiSJOFDeYJ8QWykntXensiKrfzYZu9Kkdl0rGVKCjP2fijcMLC8kdQGOqUBQomxwau4C1VCO9oCpUZ6U2GI6I8fjz0H%2FgpptGeoGZ8qFFuy%2B58xGo74MkyuN0BaBEj60konM17hsu0wiR7CMyvN7Sa44reBhyHSsD7bupusHCSBZgba6Y2pLLfUKzz6BwmluznHbZ9Hhe1MoKQrKn1N2lv3F8Tmc6Kt64dWEwtVC0%2BX%2BPuLMud9RvXAvHu1BrPBRbqUYQs7NxBdBdVL6kB8KsdR&X-Amz-Signature=634706fbb9d3c4585600f243aecabbfe3f66bdc60664659356975d364b23ff7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

