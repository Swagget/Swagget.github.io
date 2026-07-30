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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A3XAH2B%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T011230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEOXf4totVpuVuUkje%2FLgN%2BU2d%2Fjz%2FPFzqmpT%2F4TV8WAiEA6DgaNpbxgxfAy1ewIJoBjeCtnxpgRQbuTVhPNqwNFtgqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2F1C0fnTXXb8U0fBircA8kqIIPuvrZTGE%2FFENWLxo%2B6Soet3kFwvGQp4VYImI3H1amF63%2BXxP4YBsWnxXzdjXe1DSn53zZ8Ubu0E9GyQr4R0Ajqm3xyszMR4WRewFHn2hpquOl%2FVMKDSlyDaObNK0hSSCtZ6kFLnbuftHL4IKvOpsCpBGZikaJIvfOGqOMDPQc%2BzyaG3zDIo5c7ABbjRgjLz4VVjeOTiVyzj5wJzXYtqutD%2B9h50wOe%2F%2FzrOY7wkc4x%2BQnXG958Z4GNki30Y2dMtljNqhiew4LH5BX%2FmmVdxgtuJOGd92CzEt7rCr7%2FqFx2gJqCGiJpK1Sq0W47VCwAo3yVKXXjqBu8T1IBDMvZJp8otv4AhUCQ4tzeywetoPq7RmQDyJzgffQkzoogllvT2vv6me%2BdnGNCu1G7jRzxET9V6IG4aNtzbchkv9KVqO6bWiMV46fg2EDa4KVklKhSP0r9qSzeEdFSUzWw5etIz55PRsvdc2n6x4aY%2BJW1wB2hFe04OGz3vPBirprfVEgtJmK3G2%2B%2B5k95l%2FRbGR%2FO8UwZvJ63rfykt%2Fo8RYvIcLvxlGVI%2B55c4lMMTmYo9wXYDY01KXIKIcG9UxcUaQQZxXkFvZri1XZ%2FIufTO6SHm17%2BXZIfhyh5sBawMP%2BqqtMGOqUBMm0xM%2FFQZDSb6yFddJIdd%2BBk0DgtY0ktt1Uc9LbJAbXqxNbBE89m1F7k7j5C7ycScKzAzSZoBgXIGZfsZBIy003LCk3ylmgjU3CB68AOeEK7DqTzGM4kV5cDw8tg%2BgIVhNSVVEN246aReh2ydkfI9velLHlQ2uNMhc4rmd68C6gphqoAsn7l%2FpPpmq2yLNLs9KSCuRdVhLwR5BBIaKRGwdzW2Ge5&X-Amz-Signature=07c4a98ddc07eade1b56e072428dd876325cba9eb697be3a93272bc56a82c81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

