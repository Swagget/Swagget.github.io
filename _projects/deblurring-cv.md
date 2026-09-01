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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNYMJC3%2F20260901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260901T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtaLYbXdosKKPzWOk8v2Aqx2aYOVoVaYtMMKxSVcnt5AiEAuTqHPm8nOtWjuunLn6HQRXXF4F8G6pzm2QxVbQmqdBQqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDV8kwW%2FR76oR8yGrCrcAyUuXuCq5OVW2LHHaei4HNi94KY0Gz7m3kvOx%2BJr9TOLI%2FwOTSD5tGBuiCk%2FetCSH%2BPCAnf2%2FOuDn9URokolJRs%2BgSMGO7wPrPeRL8NLGoiA3UDdIYQfHfSdsEaHYNvp4I%2BjCi%2BE45A2xYo6MDEr41c9ePEW59rclUSrN1kKfikJmy11xQcgff%2BhBF4vtMfBxI8GVPU6j9IG1Ii6QHf%2B6I551hv1H6trQcWQyBQieTJ%2B%2BfkdKz6BJ4kcr%2FJ3NqtSoQstS8qjOsMTvUUucZ7P6QiOCzOZqpKlyq54DLsGXoNU%2BxwUfO1v5coeXsBb%2BYJ2ntgPy57SGmv0XLk3k4mO244qjHXAQVGavB%2BkUdApDtanQDI9A%2FWdPiacRlOjCIY4Y6j0npmlmc57z7%2Brdu9QzeOBnapIvDgwMeRLcEP%2BC%2FXUn0PYMhlZYH0mpH6MeZi%2Bssg72VDPuMiQvmItThXc8Bkci9PYl7n%2BDWVADnhvV%2BHh0LoD6Q5ga4rEO%2FVVq79vdC4Et80Od1EwO%2FuqFKVpSMRZbPO6WrVeXdadpanMbpShAr9BPnkC%2Bh2FQeBoyAJAzjs4tJkzD7UD7vq7B1b2Z%2FhbzXDEaYP1dt39JQe%2BMrIQarTCHxe7J3FFbsRQMPTh29QGOqUBnLEf3aLdboeGCrwa9pjYVMiHZxgJndnipH%2B7zhz6TnvkoPFgbvwW581e1SaKs8l98yckIrh5r0F5CfB24fqvzOgsCgB9uSlOwBI54dtJkuqIrlR9Mw5QXeSqosOBQUoZebJqBICcH1%2F2UoruxB36iOCmRIQRz4vWOXytHRZ0XeUGkc7%2ByKU34D51pyG8KclCc7p8qIuqOcOqW%2Bhche3kA7Y%2BoxUq&X-Amz-Signature=39f8b1c762adb4329995f3b22aa27fe9f47da74ec9df9cc9d0b79cd0c2056248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

