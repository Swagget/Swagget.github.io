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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4HOKUT%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T235049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ3P1D1CYJ4smzV9CXxTStyUnhk6HjsUP%2FxTPh7v9S1wIgVyz8jH4z1vZVbA9JFg%2BfiL4J9lqDaRhyg5ZcezFAc1wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhR%2BVLbcn9A5LY2XCrcA8jl%2B89DQpv1QNrn7%2Fo7snQful2ZGneEdjb0M99kzqXVMUC%2BU6mSnyfbJRMBpvjGpJYF4q9458JjrbLKjKR6%2FktiVGqC33Vjd8seZRXu3rrupwoc4%2F%2BCiuAzOCXqw%2F8n0k6BoZHh8I5L16GBFGuHZlqNJuBO8gipQEeyX%2BSNTC4VkfJv%2BLMJ3f6GVx5FtHqWXWrA2bLN2RaQcHVyubQNX48esPP2EITCBzlMHMAeGzu4%2B4xyNsET7RVKGPekoEg2SMuNlKSnTmAHAmI%2FWeIUg5C%2BqnTOFWHvywT4K9FLSlYhS4zieo1IJqGrMXO%2BX5P3YPjPCtAMRDffSOtOf1O%2FLUv4t1IJPvzr2XqkGKEf4z4SFH%2FnsRlHzfpj3IJezzQ0nm7v2c3btN1k7UPiorN58W9vfuJufpHzmUrO2ye9ULdCEBA2R8XuYbL2SO6Ezy9Ynb7SjYN1LQ3KZOt1XQHabLQ7twsReErgx7zQraiONNejxAAu5TZpZo9GfWGLZcTnt39o%2BPgIrJLpSyYmIXZFY1h7D0ejkRF9%2FSV%2Fx%2Bkt2dvhwwJgEhag8P9kcHUD8t%2Fi8uY9AcpJ73YNZK4h3cRVUjZ4tCN%2BVTGKj7RGfmGUbmURnipMBzseuOhgdZuTMNL9qdMGOqUBH59ninhZe%2Brz19NkBPAqGkxSEo%2BNTyjsp2MSqiuhg%2F615KJx%2FtsHArHFDbd5v79qy4kaBOIh%2FoHr25jm0JBL62tpFHPe8ZQkkXkf6J65JO0AAAhA3cNk9ydGYCyBH4AeweinAJFjH%2BLEBR8IwrmHzKEfQmxtPf005SgDiIPgljn8FWNipKxPGYY2RKgBsEv56UGxfBOoA5AOT44jkh5jAFlaeVNk&X-Amz-Signature=14fea408b096e70e1151fe14c09ff630c0bd46fc184b0b0d2e37ef5946ebd422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

