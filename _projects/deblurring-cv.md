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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HLKLDCB%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T000214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiIuDQm0k0F3C50%2BLzQUQ%2BilwXuXOOf9hBgriVOLG74AiA4KJfTXbYt3K2E2L0UTbzCk68bg2TA%2F1qI%2FGphiK9AnSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMBeGa%2B%2BILqBSgrp%2BeKtwDfZkBGKCD27iQ3GnUcS2eyLFJ1CSv47QpQCiSJdsIO6EDvVg%2FJKFY1dFVBIaenuBo4SVe3P%2BY%2FZqmpKlGAGmThzVBYIBmzTKlODcc0vG5pSgXnUbR%2F6IaiWZHaWDe78Y%2BCxbEgsfhAVRuQ3WD8CaOxi0O3uVIzd4PX6t5jzwsDqjTquzxzJ9XBGE0E3b6%2F9vba5dMrg%2BGgs6DCpnnduG1aB%2BMM8VHa65RymE8AoLAsv%2BN8cIYh%2BQTq6IZXGa3UPe7BP4XzunS1ilPeI0zt17gnOZFcyMWJLf%2F8qTQgMYaPyz7MsYebv0hNi11kzLZodwzNP5I3Nh61jCCTMInViypyNGk2oHHQX9ith1LJ%2FxAeuFevky5F1v95HJDpVHkjT8ju1jQiBwtGeQh2TawgDYa6TNgShoXtB1QcYwLVmVkHtLr%2F93bcPzzu%2F9uFFCcB0U7CSUp%2BDMvtwJnSRlTxEAmetZslJM1HK2RPx%2BwK7KPx6p2gTUzO%2Bfrd0shu2vnPZ1AT%2B5BAOfYeLhlmqM3Dc1%2Ff46IxjVuODTbxswyF7ph8f6WdsHO%2FRQYhVgBAQTEFHXVPqy7lrYeo8UmZx575vtL925e%2Fbm38orMcR703KI6PwaihEqiYcNAqPepVngw4%2Bv20QY6pgERKPNy%2F29UcV%2Bn6%2F%2BgGtztDS6e%2B8XPHDRgPqbL2xXnqYTO%2BIVJ1wO%2Fwj6wVJgdzbcMLniluP%2B56%2FL6l%2BHtMz0kHTNg%2F%2F7OIuX7c9iUcT1KvdBXYOvs38wk7EW25%2BolZzEC2ZNX5bsHAnY7R6vz3nZaxmpB55Qdvq72HHUTl5fSacxIGtzT7%2BYDAKpQWXcJsWrntKmBDvPwA8GEg%2FB0Lo91FSY%2FwEk%2B&X-Amz-Signature=f74ea71797536e6fb80030fa90429f8762a3af12a1aa9c6f96d0cca6ae3143bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

