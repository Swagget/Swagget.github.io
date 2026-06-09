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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SPBGLYQ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T175002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC3CzM9Tmf8ADZid%2FNSoZEcwOJYwqhb1qk92JwnAyIzrwIhAKtCxRE6EVMndMp9jwqgtgQ%2FY2HWA7Ovc1xI25fGTKmVKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOJAZR6xtBUPdg8hkq3AP5XENIV64XRbkSCqZrfVdAZY3WaULVIzOKzKZMrRKB6DB8SHNWRd%2B3OvE9F1lwfVcGeZ2k6Uut0KlBhaWgbv92saWD6yeu9oSXxauV9rWkpir7UMD16Sc5UYG6Z%2FA%2F5qnD5ObNQcmU6r7WGTX99ccYitqU2oxECUc9S1cZVyUZBGiYldEKLKxQN69dohNQJvL8cuc5T9JJcJQ7Hi9wgGr5AqkuLrn%2Fl%2BVWKCRDCkqNGQK0B4TWdWKEi3bvniBudJRAfXIM2EWqAsuWvnToszfxbXzrE0%2BK7P4RrR6HY2Y3T95N9dt9ZcvHrlCnRdAGYDdFwVwQqZqfDE%2FbOcJKnzTLoNbrhxkxCOQNdICtyZ7sNflg9Z%2BNVXlNQ5Qde4d4j%2FEfU4a7HgET298mbkIoqbg5j7qh8iO1eAGz3otPz5EPtD5DV%2ByMiZG0aJz932izkZjJvXd07%2FOU5TcZ3I3IWnARp9c8kDFYkAJ8jgsZt8VSihpYTQhVRdAXvw9302v8GP%2BPu6U4utzTT2PW89eNixHNJxXn9oirb1MZxMhrmfql3fs%2B75Ez7D5Y7CS73ab0hUomO1QzqZi%2FE98MWdkFkg%2B6kKT16hr9Ys0T7akZ6o%2BFu2svg198ozTE9F2MiTC3gKHRBjqkAWu8JfLy3Nslfin1OTAr%2FNbmFwSunqeGuysEHN0EbRNKG8Ydh6KWhDrQeobT4oDgBnxXmWSJvi3%2BkdW6tBEyrPbASf%2FW5USwr2jFYU3iSBhkVeR6T70KNn03Hdjva5y7v8UVg1DKygGCCAzxq1cGjhqF33tTQsd3w%2FMOzj0uzGlHc5QXguvNkPtRT8ksA2ceMSrJRutbmnTAy4Oov%2BXDGwciTL7F&X-Amz-Signature=989bf78968233865f3d690558ed73178f64d38f75ed4bae68bc4512a88282583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

