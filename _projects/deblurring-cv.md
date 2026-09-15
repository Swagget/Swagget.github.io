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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SHMVLE%2F20260915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260915T172058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC9Vfk%2FmYL3vdG95ORALAcRPcZ9%2BZluN38Zjywf1LYkywIhAO0HVEbcjRgitMj19a78O7sSvI31wDaRacTlO72PYObjKv8DCAEQABoMNjM3NDIzMTgzODA1IgyWaHQ%2FgqVf0s4YXUQq3AMf7afHS%2BM3WQBf%2FgCV9Jo6PD0SHFtKrl5jI7mTyeRPoDLMQUm3v2ogwN5nYtjQn%2F46XAuZOs8fUwgeuo3G4BaS5jfI2%2FD1lWTBkzOJybyjgrr1qabjCzcLhohplfdzfvmt8bhVrAiKyM2hHHeLl2Y8c0mv1K6n9B0O1GM8oBTs7UfzYBEdyLk2o7RH8gDTUq95k2YbWoiwhLmb0o32xAUE76Enlado7HfywrYaA9xbD0SI51moY%2FNpLCRe5GnkIkHDdKr%2BzrZGyOkcRdBLdmSQ6%2B5KvoDPwiT%2F%2FRqjj0JxNYXL%2BPLN4CjLkmNsvgzok%2FN2aCZeMC3E8ZUL77mBEzWJJbsCnm6a8XCenNF9R2r6E7BiEeW4mgDZa%2F6RKgIeTMXEt%2FGObzsc4kS3pWCU2IgA9h8EU7IbAgQukOrdHIyvcLVwsVaXyTkCNhvZtaqkB3ooxmZpT3i51qhHmBxwTgmy0Pjz4XzfvNFyZ3fF0SbglSdJqZx5n4DT3ueo9FHaoOJy%2FCDbdpeYCVgVsZVKCcNmWwuaQAJYEHm4c3mht6uHTOuAX43XbcWyM0UStbhj11%2F5LCaXWjV5254Nn1KyHoP7%2Fb3BwwMG%2FL%2BvvmzTSLwm3dK2bMNHyKjgCIaakjDp0aXVBjqkAUC%2FRjV%2FgxLLIFDrFEIfzDrkvGN7C3wGKEqDpSOANSScTvtzlHPz7HnILqjiOe44IYd%2BhhonF4ohmm7xjiqL%2FQU38sPMK8mQlm3crPbUgSaSJoeA0n5%2B0N21yBPik1PfHngEFULRI0uLtKfpLYw5ZG1hyTDrXSe2EqUwIy%2BAMPoSpdp43yflgW57gAheCo7%2FDyZSe3G1fGa%2FFXYhzwWUPhX9j61%2F&X-Amz-Signature=09f4b67de2824de0f337a0f879cb3d8e66515544005fe77f08e0f442435414f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

