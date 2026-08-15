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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSVV7MP%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T002955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIGjZAT%2Bqx7CYmzuyTzH8ZNocqJfGvq9w4KfZma2RM5NgAiEApqxLIeymspK%2BF2WCpyH2IOQd1IRBndenuVS%2Bd8fuecEq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDGhrrXaudDkwaPVsYircA9dI8%2FNaynq8yMPNHkSvCMOFomb%2FFdp0L%2BDeOUgYRBmPiiwFjL5aVzb0WwzcnOV%2FqfP5bLW1r%2FdQm7nLBKZQBKbZPCM5l8Szc1%2FFyrX6R0lY%2FseAbFiUZu88MB6Cyl6Al1l%2FQ8fbOJkAaaXKztp%2FH0V0jLEOqej9reStcS8clMdPF%2FE8uPecuRI%2Beys7rbOcM225lJayWJzu1AXzcgRDgncciNZ2mS2trFqvW6chW7x6tBGoSe3tZrlnViNFZMSxyjRRlNq24vEl8EnFk6BgZ2GEGZO7l3V7YMca%2F3bisgoQnnRMx4HJY8O1W1Hbn7EcS4yMHRK%2FtdAW9v4NuLfhTqjfjlJa67iT7gdCYHpjbgcV9Hvoxt7FIY6MMDAaMI0BSmd%2FUq7WZU9qgxIcw0b1udGmMR6zfeuuTQ%2FlByI9ujmpckwmhWEh3wNX%2BmO8L%2FgUbhqn97FUO61iSYoLBUwS6nS8iK2Bxo%2Bb67bUGWvwmq8uooP%2BvCdVDA53fmQ9I6UCgRhUtEefmpL6vR8jwCBWnim9hFxWJzdqC4dA019uSc9TLK0YvSQbCdiFQb%2B0V2gA9AZ0iX%2BCUymYa1g6ZXI%2F%2FulxpVr8092EY3YCNPrmxBMkv9I6R6QhK6prLJVCMIzF%2FtMGOqUB0IM3HEcgrc1p9Rw5F1pZ%2FDVRuvRa8mc78J6wb5IY6YILBRJ5Tr%2F%2FRWl2Z%2BG9E5rYedVhDA7TTV%2Bt3G%2FQM6LA8uJx5SG3zGHSwS9Ei4QWkQdN30MQa6XdowVGviCuui037qw3wV8gRRekMhVk2QbQsdWsF5U2X7%2BRwKRgYzgtKSbrSyX9876Na2Wer3Eo96CtCm7zs9NlCj8V4X31Pq78Bd0aG63J&X-Amz-Signature=0ad7e6fc2c8f9021260145b0674eb1528746ae6cb482e764df2bcd6f28f7f98b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

