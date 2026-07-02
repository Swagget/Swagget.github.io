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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466222UOQZ3%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T120553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDmBkRM0ePSAOycT1qKDONfUPZOwms0brF8kcw2y9xZwAIhAPiRDTMfQSMTds3PnwN45ehfZlR%2FV3WA8Fyb95MxWge3KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1vXIHIYQGEA0Ztzkq3AOAEcTgfjJvpR2%2F6ZET8zD6oBxQ0BK973ec%2B8zptAdLnj4OMBAxgiue%2BM2xxh%2BOp5znVWOeCJiIVjvwv0FHEdlLWe4F3rdxhtXEwJ1A5a4q9b9gjfj8jRLF8x4ZglaA84FswcMcsvl5hWWreNBObXQAwOKk%2Flr%2B2PpykE17hdhpo9axtDCYtnZOzm8O7SSXjXCJpKD9OlN5aTH6OZklGCaiXtFyET%2BZqhEwf2vEJLhBLwXN7Jbct7SZYPZx1q560u2h88x1Y0jQfdgcqI1IqNGOfVWgYq30xuBVpCP14Y8yajLlh0%2Bd5vmOJB2V8ViYVhvm8LyqS8XZwpwmsuMLLhLoXUaCUCv7Ld2Q%2F%2BXNDBbtaDxd3C1RwbSayVi783yZvmVEpcnHRHrzKBZVjJlk%2FSbt6BIaRsaudB5uAYXlRropBiAlqDuKEpu8rcSfJteMXnYU7R0oHWkpEWlQlRJrWJ927APiggE6%2BuqiP2krYYg7WgraZWo0%2FRyuJnwnTeRGQxHmsQVdgRkqRnOVfnbWedlqPc8zp2Y1RcuCMMhbU%2FBHGmkf%2BQF225%2FPECQCu%2BPvCIAd4Cyi1FrqOinfy1Cy0Ov9Y6CuabOlIcntDdy%2BinRwFRtvgCkQeGGGfsNwhjDR0JjSBjqkAUCs6Fbh11yYNrel2izVMAFrSEIY65LDCWaAyDfxATAkJiQ7%2BsPssDRs%2FQfyRTDjXJXRHamMJ6KSDXT2E%2BPhN9Z8kFYIiqOdwXY9fFq8hvcyouwE2h0W0i%2Be%2Fao%2Fj83q4NZlFk9WRwp1YT8yoT98kMzpUTLaysFt1bJrAO0LeQE9Q%2F%2FVjemyV7XqoflwR0KnJIVNxyYbAoJnQ0GjR65Cn6fz35o6&X-Amz-Signature=b452594e2df67bbd845c8fff9fbcd38dec3da50ac6b24a9842f6e11c6c901cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

