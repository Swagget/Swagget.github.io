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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466674Z7SFL%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T132452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqna%2Be5Q93pR6Jd18dwyagl1g2OZDG2fbaANMkhiPOdgIgD7e3EbL62Z82FowSBLFC%2BDaobYQETG3MOPIU2WK%2FN%2F4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGU5zU3ONGnW7YkXircA4yDGjk14zVrZYwPaUolkKlN5QfjCtvpDdvPuS8HYzLnGSnJrrQ5xgk6kSvMpCGSXfK0eiDIDk0Knr%2BZ6R%2BDVg9JOfkcH0mOCyiCm%2FmKdwLaoehySGyteUyVbXw%2FrOmwAEWEDZzmsachQlUAU0rJ8AsM4%2FSt2Yve8S9%2BTx5194vjt6gKjMZfdkUspnLVQaPOJQBhdQUlBUqFWQMYvJYdIwkRKAyddy%2FTxl1f%2FoiXnhil8n77cTEcNHLZHHOH1oNrq0nVqwkgUUqcxVOzFcmSythnuW8l8RMrxyHhqPzoZNKZmKaXq7ad0x0zj%2BBDqUAvfL4P2JiJxJz9p4B8JW2ZJf8I8pxPqoxywl5Mscp2bc8auCDFuZy8kc9N8Z3WM1TSDMJKk2NKXtt7pU%2Bmd9A1MFTK49A%2BeVvSDPHxn7EeWAx%2Fu8dOMz9wi5P9z7wyzmMKdUZ58XftCRE2OXo8TrUT7cjrFkfUYf37vzgGV63IZm3hXIBQGn%2FVSh1%2BBBfPXzpNTNEf6afmJPtgB%2FcWT%2BAW1VFSiElfmt%2Fwo87FMFUW%2FKgJW4vLSBUd6hyHKB6SrM37kBSM8jH20B%2FCWwyEvbzFiClDoQfaAxIBBi7zAdNcKAAZRFf31gZMc74Oys52MPikstMGOqUBvKwYY%2BEueVp%2ByTuBcwYcnAoCSrFFvzJUvr9w7oJF12dpD7V5mXPZANWBqSlp7U%2F57DxLnGoZOEK4ucAheTuVgQBgFxZ%2BQYiHFvYVvc%2FMBpWBTfLk3OWu0fW6NXqpJEYrsckt0bCkci3tzZjuSPtGE%2B%2FFNSQqdIqj4kXgzKJx0gRISQwhMJ9La0Y%2FjGrrr%2By4sldVNX2iQtviSTf4yFuxDUp3yVtd&X-Amz-Signature=52b8e5549be8c0941577ab7ee30cf3ff83cda1a1fd92012957ed4448b4bba66f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

