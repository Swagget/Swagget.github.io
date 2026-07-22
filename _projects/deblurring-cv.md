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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBP4RJWE%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T215319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBRK7Cvx%2FPUQON81ziwSOv1gbZbjX9pN9a4qE9m6vwLdAiAUbLt2trERacq6x%2FvRUP8Vdi7Lc0%2FNUNapxifPHOvR0SqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXulByWUAC7eYHOMNKtwDloDDrGVrFQ%2FxB9keue8NrDp%2FSXAOKDLGIDwMIEPe%2B%2FT%2Bx8rejyQsBEpaE14zFefjddlxlVAZFhWcZxYATUZfpIkpUue2kzl1HiZlldmQ7Ag72qtLVry1BUBPcrEUS1PBj0CjGeqaf034SM%2FmMGNcgGo84MIy6mXnybgLBknoKMuoAv3Uh0%2F28cw%2Fpb4Z72SaZq8pqtiA6gIWTi6G%2BC2i5uPb%2FmhcDx8xR6IwusaNTyRA%2BsXii4l1xjpb9TEojLJcJxePJ65nxE%2B8zokGGD%2FrnOgOAMv%2FmmeS76uin%2FUxl4FyYpn1eKV8kuiuh%2FhgzCetyQUKySzmFCJfFOHnfWDuEAc9Gnmmg1bJWd1wKFvcbvOOfvO9oy7T3X%2FC3iCl%2B%2BMMUGVkPMBVL7GUx5aTI9Uq7rw%2Blli7Wv2kaWp0mO7N1%2BiY8y9SyM6U%2Bf1OCa%2FDp47eY%2BEIImtyzPXQsshNUMTJX0yAlghoVqGP809Y8wJPMaDcP8cDIv3a1%2Bx2A%2F1UzujPDZIUR4i7kgJkcn2WN%2F3Ucu%2BcX9rMwYrpcweUjfzoXZAJ2FzKNL%2BLjvdmo7HM6qAQxFtsvsS3TPSoi1ZmTvzpGziyhH87GQJBFpNRgrIN%2F67Wsp4249Uoppoduzsw98KE0wY6pgHWpZ6ogwQbOGd5%2FSQROG01E%2F%2B0fXVJEWVNRMqrN4nQnSToTXFs9oox3kjSOp2IaPhQmEI8YVNQ5tG62sZpao8f0nc7cYR1IVzr%2Be74hDHmheyYuX3%2Fq3%2FFZnaSBIENjTH9MA3bVafQ%2BQdERkbd9iV4qhFo6tawRNT16pK2rCmXImQEv2%2Ff0fIzLFGed5ITPNv%2FMgXbInaSq6ouw5K%2FKUgGavDEgEZS&X-Amz-Signature=fd0b9cc474ef41f643c4258bce7bbe742996a591cbf030152e2dc82d468b967b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

