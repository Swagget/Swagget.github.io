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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDXFFRW%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T104605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDP1HVm%2FeadJ%2FZX2%2B4xdaIfskZOZsM4BiBLKA9wncr7IwIhANeXWckXcN4Ll%2FV%2FYndEdxoiMuxj75FyA87B1%2B5qxVXeKv8DCCIQABoMNjM3NDIzMTgzODA1IgzSf9IIO5MuklZbowYq3AOqt0BXLHOHLqoOhh9ligncL48OAWi3rAkb2t8CEJumWpRNXK7lD%2BiNF6%2B7s4g4hz6Lpc8gJEFpo6w2VRclPvKn2%2FDXwVKRyKg1EP42vSuycwqK4kuqJ48MOoanfIB%2FuqW6VFcmkmnqQHD22JqHpq4LDuD%2FEtSqr7HBGkKpPBvn6MzYV4VcNGwx2Zkx4g3WjFyBV4iEJ1bSdSx1Wo%2FEAgpoFwNMzdj1y1sVUxHSnfOyc2kYXcXMBADK75XRoBfbe5Hm3IFlmSJi%2BUrvxbVt1HD0E0C2W39ZSxP5F%2B30%2BubfK%2BSBH9FeIm94mC7uCrSx6xIAc3X6OXjfXAIvscionqIImox1U093c%2BJhwkn9dkymtl1uaXN8DKpRiQUVKE7Qv7wOVR2avCdS6U%2Bd89qwguVqV4rs2v5RjNioA%2FAclIpiCs4jY%2B%2Flm5Y%2FcT%2FLF%2F%2FSgf3j8jfYW1yMyeUmg74NYcsLSH4XqpGREZYu7%2FcrH0s%2BGEBThVLZdPw4CPTN1p0uKXm5OJlA3%2FKJrJ8fMzUacH2IArvtri%2BliWLDPN4HFvHg4gYFQcBD5eXS9hWpS7QFp9%2Bi8sUn3N%2Fbj7daH8utFwdzciQVg9NTUTJ3MxqVdjK8agMcyQSeZOAoJ4ipnzDAn6PSBjqkAT4zcioS%2B%2FnxISHpnm4P1lYlF0nmqMgBywc%2FLwLkv7vYUVwYUyH6ojhEy5tBavCL9bgOpISMd1qQfASgGYmzIN02XWzDw9WYGPrr3Sze83%2B4gByD%2FFOSW05BcxopjpIAftMIjtYJdPoo06HnGGnWWm6V3oau3UhXY5p%2FHrrn97qF3ZSBLPRHYOW4yCINEipkGKyV1p7x70bLVMsXZMMSMsehE9vd&X-Amz-Signature=5c9ec38100693d226c9130788d7032b603d32562d009376293b51b620cc4cad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

