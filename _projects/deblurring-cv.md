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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLPBJ7XS%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T055809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSXh9DlDn%2B9Zg2WNs3J0vvKPh7dnCYyc24SvaASGYtAAiBcQMuutiOtuStZA1kYuGjYOPeQzpFG0%2BebDUM98sBi1CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMys7hrkgxmHCWCxYsKtwD9KQZUL2eRSkjJreqo3cxLaur5INcBvx%2FLF58Ffrno4FPcJBKeh8%2FwY6RpW9Z9xl08MLVCEStNAT96GNZoUwovsL4Ke%2FtxpSqYydGpkkTjbIGAwSwfLyqYY6omcynrWDHfgYTHYO5HBf6ggYjEQqyAawgpzBrgghXe0WWBOYXHvNWHidtIHM0MAfjvRq5UiueGNOh09R0eNkLRa8ujXx2XMl4Md6qGjx5B9WOsbSZpxvQW1oDK6VecLMzCfrkvakQgkZOfU0Uqeq6JWngjKKPwzCKCJ1YQHtI8Qs8pxRTndknndHsPHLEce6UWziO1MmDIIA2lh4gLISHTfjSxu0oVSR9q3eGXgc5V00vSpplLw8sej9Uti1B9v3%2BmwLWMuIjKYVBSNfambmGyiKyRbgpT6fHPi2T%2F2uRHZKDnqX9wLhrFpREets0mINamidvptyQIhDH9EBlEqUxsGBfFEY%2BnkUn%2BfPDXhw64jacKG94vvyxzHejhnjREpb7XASWjyr4FEbfSZXIeG045ER%2BlKpcvETwJO4zow1bk%2FXukjHxaenPm6kTbV5HF5wv%2FDxGp%2BzJIt6LYQYeJNJ6MJzrTmo03b0JdfGBbCgEGlRa%2BsQPXJALmDxKq%2FCcfZ42DkQwisGe0QY6pgGQfA3akuQ2bIo3s302cJ1%2BeszqE9C37yPIyhk5vfa1XcVMBIQyXeWSyj1N1MNOAMdAnH7rwkBNxHTcparFGbrsBxE8xP08%2BiOuTT0t3Ag18QrFv7xm0oSt1XD%2Be1k4QXYukA5TMyeAs8RK2iNomBjYeX4Clnau1SwIo2%2FrYwSYbLXjro5QEZHk3uMFKGyiAThvIpNJb7ugHrQhvUyrQVrYNXe3gky%2B&X-Amz-Signature=71aff2f3f2e9d95f48b5aeb7ec2d7e946565cd05fc6d1429f774dc7661deba19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

