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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJEGKZU%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T020551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFU7oJ%2BM7FDJDZOs1aR1eJlarJgAvwXQPxiOCsIFEtLeAiB5AbuZDHNfIwOp3Nzc5eMXPUT4CbRNiAHF2pG7066JuSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1tnQNAb7yR%2FvJoaKtwDnOSZXHohuQzXPjN%2FHiOicv3mIzF1zMHT494S25XboJ9nzLmwRqFUYmFmfNqupjAniaSRudqaqbX1lOBsOCKHtWEJ9IDzGhVIX4lLnP%2BLs1rZRTbyK%2BkxT8v2hJd3gFU9dTdhK%2Fa1ZUAmuQhJin1dX260k2rzjp9RKhXKmowmuaxDbyZzlrflSM9%2F3WzP4GUoj7TM4d3jaPwv8jB4eJOQt1GhplsPuY4FLSmAKdoGCT2XqQtSL6SDYcboZWoiNah4p2J2hWWelV99Ez3OAhvbcfpyBw7lzO9%2BpjR0hkWDzO0uSHEQc2DXEPjRl9k4OK07p180jQ7iOVvMgzbJEFSGeNa%2FLyS1YAQvXKB59QpVfoy0j478bzOI9%2FQodW6M3R0KN9C4FOeejR5b3RSnGnPl3tTTpG%2B%2ByTZPTU6FJyAA%2FsrARiXPjlxgnMgcYyiCSgAU7kbZju0ix%2BQtropSHkVP7IXtF7jRzlrCQDYz5R5XV2pTNDCOnfM9aUvzBq%2BZd0Ra70ko%2BUkgoonGT2TVIYJ3DITYuIFNeMj3iqNkEagp4n%2BjUF%2Ff7GkG5otARGONKWVxPlM6G3RzWO5sOpqg9Kv7dmyHjza60jWTa3KeUupeNMIAMZ3%2FgwidOJV19bkwkLSB0gY6pgEMECzU4b2seiyGEDPXzwp710QN6AbgtXTzaWFE7%2BEaRoX70t8OjHK4%2BcP9%2BONBCfRmsEk%2FqIJJlX75LV8CYMMdQtk5BRnoX9Adr7WSh8BR57jOszw3HwhWubMhzMcUW5m0jXuP%2B%2F1P41Nd%2BFMdYUprk2IrCJc0Sc%2FpeOkWEUqB7sICHphF%2BOI6fNlxyw%2BfMC9zfIiytus%2FO4zSWOplNq9oY8MuZVT2&X-Amz-Signature=866c284e9e4f0bf4198d566a6c3a4ebac37235c83ab9d6c7ff47da58e24f38e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

