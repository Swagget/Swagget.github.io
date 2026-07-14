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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUI73DFP%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T185731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDP7fsR%2BvOPLAaTgoMYPa32FLDwoz5Ess7%2Ffw2QJSFqQAIhAK4GP7M%2FbYVC9SgETI8IJhAXxt9PYRbm%2FV3Awa9aPHE7Kv8DCBsQABoMNjM3NDIzMTgzODA1IgzI1RFjH57F3b1KzC8q3APyPOo0%2FoRz40c4h56cL8ZcBlDdUqiYLQZjKSbHu6X32QFx%2BSxtx%2FE9HCXOI%2FWWjzNDBhW9hTpY2%2BQgeH1Ifdjb4rSRZNy072pdINEB6dFyG596%2BRFkHneVTMgbLl4HJqJQ0ZqiTrjYdR%2B67B4PKll77st%2FlCTN2h5s1q0zvb%2BbkSeQBMmuo83nyUzm7xt0EEyCzzGAvTRZLoViZh8StUeKGUnlwejmxDuBYdTX%2FpM4lI2SG2QZSaT%2BWj%2BxtBAJ%2BjP4PzO%2Ff0wLE01wgMDHjBJMpzEb7ONNpqHih88GoIzITU%2FWkqsnunCypbydnUC8NHb24r0zKf8GIFPIy35mvQp8%2FscyOQCfJjoqxrEogB8g3qRZIcsijbci%2BOMvUN6YxZrPR5zlvpEv9q4ll%2Bcqo4D6vyl65BXJI1SNptcMCutLDGYb64aprqaX8ckYoOcIEGO8vDhPw0FVlA19%2FHrtScw4V4CfVSzrnb3THxWkJuFlfEFROvVxVk39LgZBWfWaOT3GzzkVqavIT0fuaGi6SJmeel1d1%2FqE7IlyDosvJaJR4evnAqcdXPQaOW%2FAb6EzF0%2Fmd0ZV9L0svgZU9k%2FYrsQuiomEemhYrrpIpmnrbonc8DD9rle6upNFlPrJ%2FzCu5tnSBjqkAZb9DI87%2BVXy%2F%2FGvTcdMsEwpAXcw7O26EGEzf%2FZ%2FnTzLewaNFp1B6WMd6kfw3FFlSYrZ57eY3fhiEOB4wiNi9iwgsjmutOmpYbkEgQu4WAAUUfJXHAry0LgwsA5czzdDXECaM2LCBwhFyWLm%2BWLY%2B6YzhEvYWbNSQD6rqQvBcSXIU68EWXWLBMC6LG0SBGaaNBUVsi%2BafwToGrQAErkExK0SELZy&X-Amz-Signature=cef3b9bf83a7bea9a658ccd8ebc87f0ea3c90d911e3edf74dc027f31afd915bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

