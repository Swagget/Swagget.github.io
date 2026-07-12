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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XICF2GR%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T164131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBJtoCXVtQKWtUVsiUdEu5jtmZqAwyAZmtYePDbU0k4IAiEAmW0S00ZlHSHcFi94xeC8GEDpbisDgzS0opNgLWwsrUsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeH0NLcV1%2Flo6aeQircA2YTmiUx0tMWwuLvHCzRg0V6g8kLfH%2BPMU2VGaoOcHxB7lu%2FLfBw1uQKxDyoP4t6JkJRpe%2Bia1%2FftWgMGnBu4APgfpu0NReTNo%2FkCwHpX%2FvjVliozp0gfRw%2FfHjPKywdhFryfM6Oxr%2FA066ewZYzWAAyrDFykDMvdFAbmSDg9KdkIWSLXTD1VFconPR6tiPmPo%2BT4TmuHXSyjkFRm%2FMgJjNM21G6x8yK1f804UFZJpcWeRT8N401wOxW6Y%2BVOqOzzcWGbOaNsNFY3L%2FuGG4ABKTkibdcqz0LNMUbh%2Fu3Di7pdO4kUQeGvxmsuPlq%2BiuEbGAtT5M6K%2FgEr2PuOcp%2FhDoeJ16dRv%2BAtW8OVdZDYCVZLGJWjjPO4c5y%2F87sMJ9JhC%2FWtwnWGqedcnEBfB8%2Fihhz%2FjNOOcD1QhVYMkRam1KbItwAgneEtgSpKulsc6PfijJ6rf2rgyXibx9HoRYSMm6KPpAJU5Ga2Grh6oV1K5nmRuKnoTWjLTGoC2yXoCEEPZBSXn07ApzRrJT5uWcYjXSGUw99SbUcNU4pMkKUT3JiawVldNXranMxkENvB7TD20JhCJ3hxQBkil4cte3GXJ8R1S73wy%2B%2FavdSzlVhNjufZzzvH23uX%2FGRJoZyMPH%2BzdIGOqUBBQjb2fk2wpY57y4Zhnh0H7WZ5u3LRlDszhTjgr0Rb%2BzEO%2F1anO9sbIJEkDePiEN1qC1PvnmrZKwN2gd5Dhrm3jO%2F0gAAq5KwPrAm5MlVpPLZm65QU9pqjijrPeMmxr%2FnvSvMK3x%2FVj3nZtxBZpRhT6Micx4ooOZueUogLtAAkExO6WmuTZYx3zSQr7qALlNtDUn%2FQYmvQU3l8FeMxEYwUrILeg2B&X-Amz-Signature=934006ed8c5141a58efd1dea7d8b933f471bca0032451321e3cc15a654294b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

