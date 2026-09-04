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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626U2KDQT%2F20260904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260904T013710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCQMf4nhUZTFd7BUAe2XQHI5dodTLrt6dkQyUlpQEFPDAIhAOSnU86BExIUtbnOCs9Ck5%2BSKH%2FeIITYDa0uwoLNHOVtKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqmEYDbJYxMZIodgsq3ANGj3Otp8aQ8XBl0wQXjiDVrrePCjq5zwAXG4AspXOo5YvBYP7NLMshlxBZlxW%2FzHPzrXzqmzexSxfL25IUdVCHIGg4%2Bd27nfkKDi%2Bs%2FQogd8EoiNtt1wBSPgHMZvdIfZ9%2F55vRUvKx3XYI9JI0botwoCagJDZa3tt1cc55p1w6X20sdvfodm%2FXkJ0VaCZeFvg7nL66%2FwXSOtTGu58UfkIReryRC%2BoWaIuhMv2exznfooYWddnqh6TKi5sDca6m1YPhIf6SWMZ9VoNJfWW4cbuAn9ik9TNsRGp2qsyTdHR8CNY%2BDmyJ5iDl65L75YGvgtj5XUgM3OXGGIYNUfy%2FIT9aWiJQMdTVqpuki6bofZy7Uofn3Ic4nuj4N0cpgJk%2BtAmUtWgDVVZIRsbwHz6HesYKUMfwmDx%2FS5jTsbKVU4pZYsv7dex0jfQbMdrpEWJI98QGhrTcEwLWDhJ%2BCyoo0V3cPO4Nurl1eUKLy%2B2BxwtAas4KjbgmEkh9Ps1odMVGkLkuzudz942aWwbTWPk1nBb7MRQpLSz0SdpNDOCQzlxeuI7XvFRIW5%2Fs4PPeiDbD8LiLFXmdAis2zQmEXN0ztZ%2FYl%2F%2BVwR8zr%2FKLPjJbMqSk2qHJoAiIVijeG%2BC9sDCJqOjUBjqkAZWKXq3glsVKwoPYwjUCIGciJhuby%2BQRFaNvKrgeJ6xkJ%2B9KzBGF8sFn7S9PoYnk2iWBAwEqDIvFhjkjnV6B7icJrW69yA%2Fcal3QMQMcMVi6Yl2AHyrzKkPDNGmGkLARvfw6IKIjmXaW3Nbz1JPWmcI5%2FGhqupHUYrSjC91pkSwyYQx44j1bfQB6Y2VFWwlMF1IuiBbrY2kdJhUr7aoDhkwFJhNU&X-Amz-Signature=259699ffc4919d946eab2b2305ca631e2f6fb0d615ced60dd0461f332abf1d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

