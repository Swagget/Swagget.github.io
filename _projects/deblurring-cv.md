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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEW2QZDT%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T150500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIG%2BCIoM3h%2F7L%2FCkd%2F2gWOYR5FiqUpXsDJzaJJXoeC6HPAiEApA%2FEHnCYfV19S3Hbv3oNkcngILxC42NxHUMXLAMjkZsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGCyd%2BibNmkgqZf7CircA1QNffBknccC3JMfOINae19H3D4UOFEsCF3CxfYQj6kSGO9PoCQQ%2FYdoWkcRMq%2B6dTWTp6rSdeZ%2F62I6zWedg43aaxzhQDMLgY8nAG27Q7QHOhLqyso9yxwhrbD5zymtTPFLQmzIWA%2FehIOuZoDBclMel%2Bs6zi2iMMssDb617kJ3pxU2tbzT44QDlQ7GgNOaWtAg2yxIckWbDRCe8YtW7oGC2h1JJ8qldgDUg2f0UlpQZNSczow9cJ8ZuFYl4MtDB1ieXtS2Iykf97DFMHlguskD8rwJuAK3odbEwJEHfr13wQeUwL%2BAWxIbpS9DHGrA4021JeO69mVYIdqusp7NIEVUgnIt%2BL0MkXQiajh68KW1CF%2BWAQasG%2Fyq2QzO4JldFl0vNeOly%2F%2BasNXZYsEPJaQKfxB6KIZb4UzaUGzdnKqjRmiYQ0oFiaGXv1jC0l2UOLMKN0qLQn6G0dThDaKiCNt1A21B24p8I6cIoeuuxV55J%2Fm7YVbyt%2FERNipqsIctq%2FZuWhn6SU%2FwSmLHPGoMaPOF1F3srfMlEfPrcP0C7922vSOfJ%2BBp61jhJaEDPm1mmgCsWIxoq%2BpBA4UW0r%2FeuOX1iONjYlr9fKHAWGdrFvG%2BpcK2Zkm3AtS1ySIzML2LzdMGOqUBlPQgA7Yrzbj1KYXqi%2BSZwAJw6CM4ZLsGLvh8XbXBIDOV2%2B9Hv24KDLyFjp3Pnzzd%2BnkeqWU%2BRWufWxJZwFoEKWF6imr8%2BMEzUH3FN5NJW%2FaTm5U2%2FeeZzuNYLHl9TLXNOgmDc2zLl2FkpsTGIvfLwcXQ5VdMpyM8c4AlUur8fd2JCboF1UZSO95DbADOg7Jdj7MJT5Y5WSg85Xhmrls%2BpN8cGXZQ&X-Amz-Signature=44c666205575a7acbd8a42c46e07f0c0779454dcdf75ecc83c1c3c1bd0968df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

