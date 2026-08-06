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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHJHFHRW%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T234602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCFmwau8Z5TjogN0PCJx%2FSUSPIlDqqhAo43YdcEe%2FLPzgIhAOF%2FFPfgQFTC9CWasj6redo2nEz3ZfqccceAW7J3WaBHKv8DCEgQABoMNjM3NDIzMTgzODA1IgztLOioDtg9rroPJ%2BIq3ANgx6CNkGrhQa3HxVG4xLPD%2FjOsR%2Bs%2BFbYS7YLTfSBlLM6Vrv%2BcGtC9kNA13%2FseWQNUR29hQjqvEqm20wVk9n4nTWPrNOaN78IvDoS1nJBJxdCXREuvYD0XmhJOeGLrX4sd%2B0mChVHuVHCByBE%2B3EiPt4TjYMNnOUdoMCWii0fqXRhZRvZA6vVxaLw7YqybUkDelhM7zDNRwc92Aztd3Av7611PC4YcY%2BlvhcE9x%2Biqpeto8x%2FB3sRyLWFbGkylU1QUmJGifLHqY2cM%2FHh5xnMuIx%2Bci%2Ff9%2F8NnJ%2B2V%2BQiG%2BWgJhGJfuEwgWsL4gMDDcAktrvFpjYKI3KHLLnUYxBvEfUMOmOZAehhRFHVHx4RqZJ6XCUd6Vx%2BZ2TQayk9YMxWAFKgXUL0qA8OfOoobfex9XyA9vby1pT8b5Lmyo%2BOrlxD4m03eIbmk8%2Fw3mrQEY9aY9Vn8V1Dt8s93sxH9p0za96Y9R5%2Fp3Ewv%2BqonQbM%2FRcVjGx5cAxbd6t%2BG%2B0S3B6i0IM%2BhuP%2BCjZ4CvfL4I%2B8l3VszCaR%2FFm8wn8aEo8h0te1vbWoAy8b4%2BLYVrz6T9IhgTuYtSJ4BLcyA6G0%2BRO62oVrQD6YLPk%2FNGs5xBdZsQDlPK8VZP7ri1J39xDD6qNTTBjqkARQPmvE0Pa3lp%2FVfUukdvK%2BgWeF1kFwRXKfheOUmWlqX%2FWgJmcLXVi5LQICHQotEB4qfKLcQnSptic%2F1Gslc6amL%2FU7vXY6R7AWiHq%2FFGIIz3qF73cT5BysWtYgqmZkAdDfYXKUrZvbeS0qqCSmr3mF%2BK51m%2FdKBsS4xSFW%2BK%2BpTWFlc%2FfcZJje9GeXm%2FOCyHUHl5CvdUaeR6J56F8LRu6TEryHr&X-Amz-Signature=19baf1d95be2d787b2341e4163e879478bc173347a5cc5393d4c158e1d90b11c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

