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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KRPYLRM%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T182052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEdSO0vA8uKwJGhXPib8D7NA5gDmm50%2Fx9Szw2IB%2FVggIgaQMllsWmghXDt1yF7rO7lX2OMX9iVOP8XaMwU3sO4H4qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3UqkU4PvudpikmZCrcA6W%2BQAQMQgklzg2oP2i8tf6xJ6t3%2BnEjhMwVYZZHYhQjmbNwpHNMrfveeDms4gOH6q4bySyKWEF68UmSZQs8Sx00290uXN38e6%2FWlLk0U8nm7%2FHUH25maAMZpLALDkqCGMCqcTnRu%2Fle7W8eLs9L%2BaSm5NfXtwCXS1TlSeRpuMwPqJBLq3pfBpedoCPR2dGU1RgtHB8VO8eMRhXOnAgJkSmcv2CBA5xVi66HFbTRnECNHGK8%2FVn7RzxgeNUXjVEy5eFfhFpZa%2FUKcMyeAiWj9Yij3EkhY43zVnyjcq4JEG%2FNz9Ws6DTJ7Fo17PNFbLWvsdz4rLHne7KRXHZZ46SxeTLLfp%2BmRqmFtG6nLO%2Bf9rI%2FHOzc0obLJu5ixI6U5bwvK6Y4z2DjGUJBXRszmnoF1PrhhpZUyy5hzIkfpkgVOJ73T7k%2FWacI7fgPE6rZgzEBurbMFnTuCKr%2BGH3KexqWIYAWE7TE9GP8dj3I4bLwgX%2FdEn3E0KcPEt3zFouBICc%2BMwCw4NDkqAGe3rDGFPoDwrPMD%2BPKzUMHZX%2BM%2BnfNi7G8q0nVPsjbCwMcA%2FjaMh%2FBU6%2F%2FGIIik6PTT%2BP0gVgLsVJln1yd%2BRjDyGoOn9blBCw92C%2FRZ0w%2BbZ0ZK9%2FEMLvb4tMGOqUBHw774OgTC6u%2FfLxOd3XBkOZIIKu3jLhzSajIHku7LNZH%2B3chROigieapUw86atm%2FR%2BvEpL4Q64agAdO6ttUH89c0QG3ye0RrXfFOsdUpI%2BFtNNW9e3EivpIdLoI%2Fz0f1cl2QFA9H%2F8PWb0xENrPWA7KfuXaJ8tURGl2nMgbJPJ5r1xa1fVtzEVyMNZtF%2B2PyBAgOaW9qxhJZFIfrVz03QS%2BdDAW6&X-Amz-Signature=8c12dde83d8c918747cc2b72a288fdbf91b8750768327b511e38914c78dafac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

