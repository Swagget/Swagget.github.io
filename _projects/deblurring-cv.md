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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHEPW4AN%2F20260915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260915T010157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCvFAADKTE6p5p9BPa60YLdTtZm4YdzYU7XxZXRj4E5lQIhAONweYAMu80h02KrhSAHYkpTZZ%2FydObIBgz%2B1f8%2FQ23PKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz664NGdQbhnO9b6xgq3AMipAl7uC2mhfXvA55Khtrjj9n9Yvtlc6CmcxVSGWwNdseAo62O5oiqxyWSVizawFTNWASgCGeUAe5sWcYPLq5chG1MhDIoxNB4tPF0lsOOw07rKtvlaxb0TwxawsnW2%2BBz0f11Lxdc6FxzJ5x1vbx9XREvWQEBrEntV4EVJSseoVPrzJr7Zc9jz7TFsmzfeC8l1Lc2hdtRlqlQTinmCsalWge8LHC13SDJ5VGIl9BggzslS%2FzN8jVW015UQHQP8OlSoIzyxd0wENr%2BaVWKoxRe9IQQT0evkAio4lUUT610a5lKmf%2F%2FOkFqsoESS0TMLhUQR6sYvT5qBOlYf8vZTGDDW6MZ025WLdX%2FAQl%2FbIAIycj9EAFzJP7shQn1Pp47ieY%2BzjOt0fLF3exyhhAkEvLmXM3t4cm6z7m7XBVtQVYWU2fkUG%2FpOj2tRO3SgaQxpEuwGZwsz7SNoRselIR78hWvy9pjeM1dZC0c%2B0NqVM1Eqd%2FxFJF5uGqxBF4s7PqYm1T7CQcIBTkYkD0O%2Fpn9jyslDWFpWHYAkwCgiY%2B3T0Kz%2F5RMwVA9AukYjXcEbdBq7wlnR%2BHkiPthh77MYlkkhQcZB8cJnK8BScL9GlS52Z6ur5suIy5rJpVCy8XPJjC4%2FKHVBjqkAWyTwv2E%2BntnqhXuutSiP7OV4CsFQEDfagtFBzOonMAndVHLK%2BDpEArXUK9XkHA4MpeS2CQ5uhmMCZ%2F4P5r4aSMbmP5nqN%2F7OEQiP7FUGLRYRKV5jwRW7pVk3mDhmmHCc8f2gdBfThxnEYrwKRFxLNNOqU5nDG0bZRTifpVs%2BpJP6F25Fe6krq%2ByWI%2Bae4juxJba2LY0mzGWh8O4hSyhRJ%2BrSkGQ&X-Amz-Signature=b9216b777edd958c58b228057b79c5dab8f4b0f2b3c4a0e554939128a18384b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

