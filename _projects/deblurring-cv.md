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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHHEWFOL%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T235825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQD%2BX3uNIr29cl77WUNzhSzyU08FECb8NGtZEGza98uqRQIgP825%2FNcwI%2B1QV1sdobLSYdps2P5bMwb7zlx9lNTxY1YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmuGOVxE8z8v8uYLSrcA5hsL7Jy6ZGIPPGQ%2Bm9tfGuaZNxljNodHeareQwfG%2BApiQIAolDr%2FboS2q9fGL%2F7anLA3tAKcGliNG2eaa5w74C2qTTyy6inC4%2FRZiubJPb1l5U7THg5w5e7WLpkLSVC%2B2cRyM%2Btc9pIJRJDywVquRoDEtbR87sgRqL81%2FTwfQ6lbiTaF5ZDTUtEsnt48LY9hHnwyz76U8oN6c4wNp5Rbuf%2FEwTqyH2rEpoclABAdCzkpr4hqCt4sTJV2Re7xj8SwrzfHNcZn7hDlrZMak9ZzlKuSjU1cZxR4FVfhvHCV%2BnzgmlYGRYiYzkbg6IZ7OMg%2FkNo2YyXlNv7NEIOEPbCf78AA%2Bfjn2yy4VeOnLq%2F9L2Tjmrte4zpMYAivx%2BpxHY0aFea2JIS5%2FybCPMs%2FIyYnVJkSMPoK3b0DtS3i9j5t1QhaomLYZMNlZBz6R4nXQD8NxBcLliCW80AXXm3F8efBfxQTJN7OwtGEROaVDkQ8vqDx2wENPcByuD8QkJlsvh6B1kNhdQ%2FEFsfiLX2ybWuH4%2FdoNNa0Zmhdwzvo3p1GY9x8UvUgt8MX7Tzzgc9TocrVmZqLq3r6brlTnCgHunGzVA85xD3B15kaGy50l7FEZZRXFsvfRCY4THN3koaMKqa3NEGOqUBmw8oFxOolzOzYn7OIRVXl1QiJjtYoGoS3sOe0gDjHUoV9tpkOxnr8WIGkwRuXd4hQPmzjVZJ3IcWCrGI6vyScLV2fsLzLYOihWi2UhGImctnMz8DXaz7vCvh273vWRHX3y5QXFsxMJKL1uRhPUjWWZAJmImIPIyMJQ2FqvGY6sPDxn%2FblK7YZcJ0dSwdX004iK2TAfiwKdi01KYGNV2o8nssBoV3&X-Amz-Signature=d1de360fc289814cc498d3a5a0eee1b8fbebcdf7b90cd323bb9185c3c23f6c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

