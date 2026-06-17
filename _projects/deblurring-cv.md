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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT7V7FXZ%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T102611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5OcvQ8JnoYKdw6nfi4N5LlQ%2BxuUOZryTm%2FwvSq53smgIhAOtKi4UhLIwrK4o%2BWEae49PSiEk09pPWFSZABzcS7nSzKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmQTfBKB9D2Z7aL6Eq3APgke6KRM7dSc1KjA8CnaZucftvs4DG%2F6fl2c8%2FDYAMATfQsn38Km%2BydwUaLuRYRmBYxvoOor0gU6LcNW2M%2BKDUWMUVRUwNSZ4Af63iEvP6dUqXzSAVujqh%2BkkKSm8V42nikQAYmBLd1sYmHIVZXZjo%2BzSq0qMnHIaS1y%2FTBpCCqR7weCokrR9gVwvOzYXi0xAP0hgaFZLRkJJjYaTUqs9CdRDchfjXrLQLDasQt8xR5RNR4UW9VQoy02rx1EUgtuCH%2F8HSgODHFkfqiN424xOioSBVqw%2FnWxcINvBMMWuAfS6fgYAZKZweGyVKE7XICFyL8LOnnps%2FJAXiIhOuA4qMrp%2FIbPDrOrJNvuUBQFrMCILul5iw6JREsIm%2FyakhawOM7eVABsANdPJgB1uvXQVhw0mOrOeh8ZzxCt5V%2BZuUe6nYHfT8bIOmX8eSJcrJEjORToE6lK2hZja5Uo%2B4FDtg%2B6SCo9YH5d3TldASZq8OWNPfsrDnBCRS%2B1cRL%2Bwb%2Bjbb0hMb1oJTj0BGQwvbQO0CnPp1aYuHRMB%2BiDJC2Bi81AVDpbO5WqUM%2BSmFtcsqBFUwLruBsOFNHiOxosk%2F3ErYjbzqNN%2B%2BBX68RRzwkwnf5Ix4fxIMOm%2FXceED0zCawsnRBjqkAdeunXZ7A8QnvA3rhHWWwmNg4R8Ziq7SD0Lcw6gH9cbRyym%2F1kgaxXO8H1X%2FVmB0zNDQj590lL7v%2BmMOV3VLTWaMN9DOLY9I5zHfULuKYKQcWRRJ6dIhAAGlSAbqr4E%2BBVc00zwjSzkhB0tFWRhzG1%2BB4WkllnnIpJVMd0yaBPX9FsofHaputbW0nsiZQKD8vCOAtB7EtpELAgUBhZ0JDyNwhGAk&X-Amz-Signature=acfcf8b04c19471a2e371e8e3302e671a43250607a1eb22600f7a4a44ba6e15a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

