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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2EK6CA%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T201203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqCwQ1bPt3ccxcFK%2BoqKo04NzoJQ7OxfJNIn820wm9eQIgE6UMumSZjkG5gzUEDf6%2BfGmVQzF%2Bq2rptdQAOC44Wfgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFi9K8iJoC%2FlqYJCQyrcA2y1CvhHQZ6QiKb7pLjb45%2FrEJvWX7cjl5Xmk6UvBoGHzozOd6Tu7aB0anxpnirFsjwfEjjcUnXSWzvWUDikopHlDfwsPfqarj1QTkukKmOd%2FjMRAGLfifa6wnBpbHY5I8bQv4tsrYmzkBZWcgE0iNabzTE5CPggUcrIm8MFh2Ee9pYRmvn8LnyZKQApWoEL55rmLNTDwxCjXvqoZMllZ2eS2gvJv1QO1goPHg5k%2BAiY34RcbyEthMoJnVz32HwEZ%2BjzEntqOsHQJ68pEuI8xM4Q3bF2fFKowFMwXm2gKU5S9ZSDVvLHpcRW989xQXzr9pCU%2FoIsN2QU%2B1Ig4jyFQxOmwnqqvEbpMQLY%2FYgFMV5IAi0%2FEJJdcwoaMVYiXIQWxZ4n863L5Wr%2BLAHu2wnMPUBu4Y5YzgSqgbVb2dw8Mi1wci5q3oAdUE6sX0yOIc7dpRjISmLlXrjmM63algRN6cSsdvNS9nGhv8QcKouVr46nWLno%2F%2BXNz7oBothTMdlLDgeT3zVYc0hs0x7LK4A8ELN%2BashQ3zl9t1hwh1%2B7ZuYTrjBCsK2QxTcpoPm9q2Q8zTM%2FW8AEPRdojvlSI2zNMyHDxPxGWD4dRnvzN38Y92O7Kxz3HB9eTFND7Wr%2FMNzWl9QGOqUBpwjYTgx3cPXWWfSLgwxj2oVViOfZfD9LGXBF6wbLTztY4CundEc4eOW5ikFe%2Bu4z9DTLT1ZdsvbyAD%2BKvG9ghNT6OBR8yjmhu6pPwO8jCklo06NIPUaJg5fylbGVOVmXnaYlHImdYe6g2Jlv98hd90C3BnQmZ%2Bnsn31nWLn%2BJMO%2BHOTuc4l%2FEBNl7n9V3BrX33YNubOze%2BmDOTF0%2BAcMSQa%2BzmQE&X-Amz-Signature=32de3095e5c80f43d879805819fa267c3f10518b5d77867941212dac97bebd5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

