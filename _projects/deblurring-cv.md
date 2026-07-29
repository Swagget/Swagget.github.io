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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDTRE6T2%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T214410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlskDfpblbolYWcQixH5V0oWcqNmbtCwocLtwfOrIx1QIhAOwJx6fKAAtqeONvbxxiaNwm79DBZc9GD%2F8PR%2F8NIGyMKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyet090wGvV1GLeJHsq3AO8uopZari7uQv4aiN4bTwG2Wk9e423xeGNqmsVrl%2FebuY5sI1UMkDMRQtXYZL6s%2FRy7Agup4NqhETMFnL%2F0pKUf6rKUr3DhoKhX4FB3g7rONH5jdmLW7AwAyLMqw43ggdlRoErLUl%2BIO2OAoK0Ho1h4OLTCLK3cYP0Gtp3NC%2BkKrxWjp8ld1XKuCCDPiZtvs9tfDcCEiwpzp75iPowCkB%2F%2B28zO6XSwB4r0n9Q%2FSuVpb1i53472yPbdIrEpBDMXRMX5fCIgitYOQI%2BdYzOW2J3XPh4iHRVILFFY6hFDsFHpu4uoIY3us9BcT7Ekk%2BdIsMnLscXRcMvYH%2FpV%2FaWNi2Yf5dVMGArWEDYBgMN1mC87k9%2Bdt%2BlA0unmma5vQAd6Tq1DyTigXWUOLkmKIUgq%2BREWlE4V05imHrYUMAmT9WwIs%2FpBHVoCCtmX3Rabaj9QZ1N3JziqushNiU7nYM3zpd8vaFTQSB4%2BRnFyifbGEnqj90A0m0VH1dmXNe0boCyE%2B8sy9JdcWrOreFOv3Rtv6TBedNxQO4SArF89RKQs3Nbp96jTDKK%2F8d8UtS1VALa0VKndAsf30zEjNwOvuahrpPbh50ht1uzDC9lT8jeCTYUT4EoRAv8BD6y%2B4aJpTD%2F1KnTBjqkAU4wyL%2F%2BZdnwNaAEFzDF44ZBsYJEa4iC4jIlvqoYtFVQbyrH2g2y1WdTtTiseKr1ZEZHAFo2AKCmyP5lQn07lm10xSKPvIUUV2KiAKJD2D5wO1XjheD%2FzHn0iyg800XAvqT%2FVZqpNopI3pC9IzC%2BUWC8oVs2LYIbwK1monEJ3rcxAP2y9Qqi4YRdXIHg%2F5f%2FEJmblv5T6IuoJPcnmH%2FwqEVNpDtR&X-Amz-Signature=eb0a80f46894dd520f2312309252f7f8901659ae642b25377e2c92416a55dd92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

