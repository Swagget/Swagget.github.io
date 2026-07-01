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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKG6HMQ5%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T221056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIFy0TJgwIO2GeqRbHlgRRAkXkbe768k2gfQz%2F5JUePU%2BAiBnxs%2B65NsQDVTn23WFFKuiqDTQD8L%2B3E6x%2BWbo2hsOJyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYJI8DbKf4dQTb%2BReKtwD3bm2IX111GOpi8zCeXcwH9maWAB4aMnih%2B6qhu06EdY00Epa3dFmnQ5Ol4%2BZRbf4%2FpjdNcOOzz57p5CqxtO7X6Gw6xSCgZ6ArEoVw2fy4iyRzgvh5sD8pmrvA3VfbEVJuO3Cn%2BtRaOCRo1TjtHnwg9KUXdYMfimcwEU0xpXB6kI%2B6wbmDnU45yVVezsC%2Br1A%2FdfCtV7SpQuqDWd0Bb%2F2fwWi6tF0ckyZnPU8M3L%2B9heMCmL%2FJredSvQVSXIb7cj3APMB3c97SqdCrlgoVZN1CZnHJ9ld7%2FJfqMUOQ%2BxKRsCWR00llJyekzEZl4VkYy%2FRthnJVQx8dKR5v9jyTp8RZoxcs41xwPUerl%2FUcpqMN4ozMsJNwnsWWWhFu7FH7bganG6l5FNNh3%2B4juz5oC8tqgIS8DfFh%2BeRcoXmOMSQYqFHuCaxUu5hbKck5CxX1ABu%2FrNSGUn1a0eLmyIrTrlLewhaqtWAVS921HBKqtA8779T0ioZruhR0SImlu5MN0NVTv1pvY4OU%2F3GSkfVPF45baXS1vux%2FaeA7uWf0y5mYSNLjoGonvlB5WWSvj0UiqvFw9OCxMWxeBcuKTmz9oCHR5Ns7KTfnWQ30vCEADL5K7LQX8MKeHvrG1iG%2BugwyICW0gY6pgHUmIt%2F5WITcFP%2FsxCjl31QzD5c%2FT8QDADoGzRVbmqSOTHBZF%2F5g9lodM%2FDFrloYqX36%2BXSUg6h5Ht5yCuKuKOf2DxYIj9PuAyYPL%2FFx5oDMZqeIZTrok3petqB4DOV%2FG%2FbAS%2BIwyeQMuQeJo3I5joo2k3bTLl6g5gI1vTC9iX4oO770NsUe5xqJV3nlKNjNVgaR2Vr1WAIUo3IjJZfcF8OarffYRcs&X-Amz-Signature=56b7de812a64cff01806181dfefb3d111512fdf95ad41207f9167f3930b02484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

