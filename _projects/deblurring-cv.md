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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVAYYYDP%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T152815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDwpuqsh2NJsW7aflwqd2E9QODZSQSbRheeg20WaLWQZgIgdLkGsSQ4KjK0cEDaJrry4GccYpazuVAJ0PqyIbPBFCgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCdl0C%2BQm2ozEm0hFCrcAwhYIFoJxi4GyfBwBmO7sLVTUX5zbKLCGfFr%2F17Ib64TyG64eNPm7NzuBEn0zm2bNLNhtRt%2BQZUNIIhtfP9igkW6%2Bp6mtgTzE4ltzpP%2BIxLW1ey3Y82%2ByEw5k3dIuM038xgLydXzPcMLVUnEK3UKn0vRAiLhn6LZdHC%2B7LALf8eeEkl81Xus1i3aNSjONKzbsCLPZcMtqlm0SGwkWN%2FN7xOnwMcWFkYpW5neY%2FIQB%2FgAZ2hpU3ZzqCceY5DRBfuSIG%2BH6bfKDYTkDpQKf0XshJ2yLZG5kLYbGmi79bB12p3W%2BPqm%2BVGNlDS7heSegJgRrNePVqMXFVXYVk3Lk52H4bk3hFoiPQLAA9GkI5gBHc5JtFP0Gs1E8mcN6fatJNZW2mupMrXu2urXJsO4bbQTLKn4z9N3mGqayr%2F0fOvbJn86wgGHBi6Le2z4w6Pz0GWsz%2BEMavebcGp1fhKiUcX0UaBivwBAPAByH9N2k3wZw0wx%2BrDzY7%2FbxC8tHKjXGRi%2FAOyl%2F1LmBBkwC9c0kTjb66qar8MI0NayQMP3PMHDMIKePxuqrKSnfMfmcPq%2B4IgBHw96AtDQ45WjMlN%2BBQRR6ac7c%2B5I8EED%2BKPcRo9jQuIP9Dek0oA27VMqvUBbMNey79EGOqUBf9Vfyn0RkfGEVvV4MC7Iu6V5qbZsY9w7IacigSAX6YHaSYmEG1Hua%2F%2F5kfwyili0bZgKm%2B7jZHSGtg4TlZ8qWxlAf8jT%2FszvCoKkrB%2FqQk19JUtPqTJs%2FO6NGTf9bme3hnGqU6L8VhrL5DpWOlCGoC7wsSxuln9WhT3I1JLwO5TYNixfYNDMcf3FCyBjE56zIq3NWjjQcpk7V0%2BEwZ7PxPOmrLuf&X-Amz-Signature=e74d278d8a7d326cdf03f1c77043bc738a48459d7c2a7e79fb3865503619b2c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

