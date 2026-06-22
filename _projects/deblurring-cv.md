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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WUMHEE3%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T202940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCRlPG3catAKNo73yPL5xD9lVVTRwu6BR2P%2FVMK18pOzQIhAOlrAlOwssC7PlUVMWimsZG9KNs%2FZpPGq7c4t6tm0j1xKv8DCAwQABoMNjM3NDIzMTgzODA1IgyrA3kCidogSB0sxaYq3AMY5XvQD6bzupE3WbpofzJcFFR6dKEpaJKGq%2FyaUzClKtu9bm63%2FCJX%2B5e9JTVJFNP4Yr5wRodeNDQM0oGwK53DROTRXf8vnbLBoU6oLjMEsaYcsAHymHAud5AC84IiGgKd7ZFxYgeMDrV9P0zJNTjyHDCVI7vlQzyOvfwMV64shCrnhB3pxCD%2FYHGEPlpHMiWO1%2FKFyj5NNWWLA0BYuTW%2FPb2ZtZ7LxVtc%2BmVJ62eIUe5upwzUBYkUCPTRJAeWqk3GUOO1VWdrtQHnTe%2F1wu476g0cIOPEGsu6k3umt6IDyxiBut3CFBW82OeQc6ZmhpgQ0HEJ4JaMdJGybMVjtQNRsC4KFCy6mLwfUaaFoB61%2FxFNkAM%2Bgbf3gkSxbMXG2HAqOv0CgnP3UdGu56vNz4ITcHWABZHFwkr6eLWuSd7DU1yhwLFIdjXPDw7FMBi4k0tMGU0Fce2VsdKqm%2FvCZpK1kT77DVJZQGMe%2FeVzBqUHrJ8IL5b%2F66Tr5d9wWtxq6iyqNk0vXoMFLhTulclMmGz7qlm9EyJ4QG0W7dtjXT5k%2FvQo%2Bn3RgLb1bTKvpyf7UVDaGa8%2FQLx5MFkAvTARV1zySU3LXqZeNN3P0dzhUfNCge3zMti%2B7pHWaNbTDDCLjebRBjqkARho437meET8usrCmYyFer8XN%2Bqbb7IiHhTrPL681QGySRGYct7a8QdFtXWGalvRs5%2BnqSrotmDyePY2SOdCWpA8KPUrKhZkGdBmvXWmhhOe4wThyQFBSncZyRb%2B0QBXOU2RNtZiPNUZothML1i64lOngPtckbB%2BDtm4gNJ9YIPe21qV2ITrkDcP25%2FqVnBCEiM4psjZIt0YcTaAosX29Cdxv3vv&X-Amz-Signature=860a83663f634b51ce32e246d81f6707acbfda8a511292b8f051a858cb3f9b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

