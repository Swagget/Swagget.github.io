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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMVEXAQS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxMsXFWOFfaS6aujbXnGgwWU4La8eCKhB%2B6MsHgQuVzwIgBVziv43mgDDhfmI%2F2%2BXZHs%2FszxywvSyumxIMJN4RI8oqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBh6tVeOZDgSc1hdyrcA0JlWXjLepWti9V7oMtY8P%2FLb%2Fsp5SgMinBDIKyrTXtXAQyM%2B%2B1wHJOCr6vijDTtF5C%2BjoGrlA2pDSDQdgrwRpUc4I7nPlt8ERGfH3fZx1%2FM3fJr7wvNISybaIvVwxEOW%2FB%2F%2BK8tyCMg1Mi8VZRyyIjkkYiiMo4urwwFsAvNxHJZzIyilYvK6lA%2FrjangfuTGPgLyW4BQVLnoLbomhKjPgDxu86L3QDrmNCuAOntxUf8T%2BL%2BxC85QTFasbsHwBN2g0z8lIfeRNKK846SyufHGO3U4SAMu2o%2FyauftKjskVYRdUMX0DZb1WiCGZ7EATgZpWEczJMZnsh6lBJGutv1Zjq6a5UeDYDEyAw3qCbE8%2BI8vaX8q2E0FJ63RUvvO%2Fdir9ze2EgnvE3ctEPVUH%2BVZjnSND2LJl0HciMAlgeHiFDa8j%2F2mvv%2FNvk3%2FYN09U1Pm6w6EQp4Z%2BWyz2JBaeF1GLYFzWh91AgmP%2B%2BWCSd9imcJ2IhthhPHN9D%2BD9AtWYRLet8piS4tJC02e6cEFsJff6T7wBxdkLFP8om1n0stHCPzSaL%2B0H9N1gtDma3MYiNRcG%2BJlEmbJIT%2Fn52WsUBWoffACVplR1lXSRDsYc%2FuOSZY4h1E56x9vS7H%2BTJWMOzVrtMGOqUBLUzQiiR5ecGkMNbhKBAGDqI0MSO0zPbqpQarixl%2BTIr7JI%2FdQWuupPN0vxY%2FCBSM7BdBLVhLpmiZLr6IhvIm2FggM0GyXxo4g5SPYA%2B%2Fvylmxos0g2ai%2Fp%2FFBD2oixfB7z5sVd3gvOu5D4dBlKIhQrnVJqsS3D%2Fl6vjX1EA5Vi%2F%2BvBy1AtJ%2Ff%2FcHCQOpcz4tm0Nl9yOCDMg2hOnPdmTE2E1AcJX6&X-Amz-Signature=3b24f464f5751f59db86877368c492a2661b3efefc3439b0e80af314d8983c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

