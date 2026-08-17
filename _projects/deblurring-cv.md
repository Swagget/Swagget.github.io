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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KBIJOVO%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T052411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFtLvCfckADnztFfeqmaFizasD5KsoD7t4CHJ6%2Fr5S%2BtAiEAxI6d%2BpxY5OdpQdqgpdm%2Fg%2FFZGyJySUfmGSWxWZB0IuYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDL%2B4g1i3eP7Xb7oFIircA8jIghhdxtnNfFZIL3jk%2FpnFuTexSfi5b0Vl3IZriYtftLtyYUn5KwvvV1abi6knY%2FcWHcQywk7PAuFZHwdKRtl%2FiufdPHPoWai8GEFt84oONSemz%2F9Yu1asPwnHqluJHXvCt73NMoU5AK%2FRJj%2FRtbyG4Z7gqh7k%2BJ8xizwqb7xCWRY3MrevoysAf6Wc6fzp%2Fl1c7fNXnc5DDahGzg0b1imA2f%2FgbrQF0L9v7k6Y2BWr5EPe9tngEJu9m9E2oshMQRu8kkShZrn91IE%2BK339BVK9DVfYQwwTkSONNQB%2FrsQcsi0VkdkoQKGNewpINionDRZT9aiT7aC5K7zw79WOyPOp1Fu7PevPmPLt8zw8AFbbFYNGLsRGBDoN9w6T25%2FvQrY7WV94fljNa2QTYtTw%2FWIN87TwNIoCL%2BVgooe0Ea6zrkPVabUS0RhTQjeHmdGZsuLcFlQgX24JyBYBZAfvJd68zdzDg%2F2DV%2BvGvXZ%2BWpKkZjiBG2sOk8g829e7MxndX%2Fw8BdjabijxIDFkKKKP2z%2Fa8EcQDDiF77fOB9ohCN%2FBiXholD6ee2qFOZEkCngbfxQY%2Bd%2Blm0fXr5BXqZES71yV7sudGci%2FgcaWNjmMwYUk%2BM82K6cXZ7uipUp%2FMPqUitQGOqUBM9s9XTh0Ruw6U98ci5L6huNl73MtIpjYuxzVbdH03MkofIrIhfILEq2CBncs2sDgny9EnhPWrDD9sTDQC1EyXjrjYa8c4Y01RTZHvlGv5zyZqJwxVcaNJoX4t4cHoCpwm1KG%2FQb23Sih9A28LqGmpkQZ3tRZqvwrwLTG5ZrZI9IYel21cDzh7MjHqbrFoWGCVO7%2FdyC22mVSqcfMvI91cRllcAOY&X-Amz-Signature=7c52b282752bea18bb9e8aa7cc8cd1099787bf25f23b66af03b6e82f59498560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

