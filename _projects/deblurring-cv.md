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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZPET3Z%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T224730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9fr7MkTV8qC9WH6lgQdAENJGAzBLx7AfMhCM69Dx%2FJAiEA%2B%2BUk9bgDJfoJoD91dGHEzmudMGnqiUrWQ2tDEBUkMx4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlccmVu2IBur%2BuJjircA4wuYmxvoE%2BRbjvtZBypVDl0jlgaC%2F9tDi%2BtyKgjlmp9BpjDick0iR%2FcEGQdbOfZvUHoJZOjkEztuwxj0jXKi%2BQUmfMdVTfKLPmay8SO%2BC%2FqoPuIiXk%2BnPmJ99LLNAYn%2FARfXCO%2B9l%2FiWiqrDH65XjLKmEt7znfv9HaGZoK4v2llurZd5aY5JIKAqB%2FADCDZ7kEK3D2iI1KfE7EI1Th1O1nbzGvm1P0JM%2BULGFbW027pxz9cWmZfWXWs2NEL39Vt6krOebY9RW1TdOBDURUDbUQlkcOIaHjTIs%2B%2BatLArwIBIOt3%2Fwp6w2pz4uE1rZ7OujxWNbVjjotbHRJkCINnCcyBUdiqamhG1MZYYs6ghwS7yCCSSrmb5RG%2BnYY9QcCp2eiWd5BCvs%2F7nL8jjfr%2B7sE2B6mURwbpSGnyi7%2FOymHCBitI8O7yYNX191xxM6obWHdtuX2rlKWTt46uUI3YQL9WZA4kil13tc%2FD1ffM8sMViUdQIxy4LwN5q%2B5Hl9uG1BMUe9WY2r3C%2FqZj0X7QPhxb5BndYCUSVp7jzGHVvFhTaHJgJSchhUHBbbSl3Q%2FmrijpbFi8FJ1W%2FgPuVmRMk19e4g%2FJiUA7wIwRIFKY8bHZxobfgW10zSLkawUVMOy7tNMGOqUBmtHWvYshA9D9K6hwoGmkGXDRG63LA694yVsC8tHUTzFOv%2BxwOPQ8JrsZre%2BfKWXF0CU2wPe6d9carD9MlHF0zFsZijty%2FdJ%2Bxd7kqlqu3eFpGyqWifCp3Y4%2B%2FxuvR%2FfMJX12hnXOh%2FHQDo%2F6WOQdkxPeU5UyQt4sDSYWm4s%2Fq2dAzVygBH2%2B8pmQw8HqYDryd0srIWs2W%2BFeIMtdkFcPjzELBt3c&X-Amz-Signature=731746bac1afba7338c023c7382ab9c497165f9cbf17c1b3f9db89330339f0be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

