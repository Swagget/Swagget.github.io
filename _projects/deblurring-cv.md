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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS3QNZNS%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T200253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD6kyiEBIk7854Ei0N8BmcNUf9hpBkjI1MZTO%2Bn28U49wIhAN3tUwriPqJJb%2Bw5LaPX1PmL1szf5h3ndQDHVs2uOje%2BKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9%2F%2FvotMynBjwPbdQq3ANSAyxOrgl9s0uIaAQW0smpDEifuNJD7xHjy4tnlMQ4zOgriP6QgqHpfh5KMb4HzLhVvn5PeHJstB4rcsEZeta%2B4gxmt0%2FbsUcIVRDvbFOAfMrKymnGUD9uHS0mEHp%2FKLNz3zJY02e1VHa08CNeSPqhaUPt7tE%2BaXrO2WWGjUMi%2FynnnqmHtiLR3UIR0wTJK183PL9gC%2FJDXrXuo0P7JXgXuEGx7saTxMZ5rKa8uUTsT%2BohANuqijrqzl4VV1aw7u5fbjJZVMliOO9Nc6CyhPEral0XovakjBebnIqSKKpNEcBYI%2Ftg1aZdaT%2FE8FFZAkawTe24eHyNIr35JJMXKoNukg59La%2BdrhjhMBbWioPgVXuGWQR%2BVEIs%2FkxHccfl9%2FE%2B9NOvThYcE%2BLWZWztNxV1vYvUN%2Fri%2Bjx9X%2Fb9Oc6uV3FcLmBxpdtWDtKgH7fAhH5XX%2FeQ4OXuoPus41oIJDTctGNM13Lpz8HjNOcsH63jxKkFmkb8Xp7vKxMQbNeY%2FFrbJNQ3oetGTDRb2zs3XFSpCbqRx%2FTuHhcqaZ3QartSLjrpVMxeZNwCQ24grqJkCN25OaESpIlbOgDmon2%2Br%2F3tVey82XgU%2Bntau86REUQ6L5WyuDXR2hmdcJ5SpTDBlbnTBjqkAWRL%2FImXfNb7D6635W650YhL1OT5CObYbh%2FH4XxjESfpQnJC9i70cq5KfxeGtL5eCXFqkoPuF7Wi0AQmKXCoZRAsRJZ3XBv1qOxKgvj2qRx85B%2FLFiytqFP%2FN7A1KNGzDCJ1LtIio0uW7Yymp17n53csGJtzGfgAwlDULDgfZf2zmiotYmrq4kZbBgSWZEVuvbem8rWmkbVSGV8gGV0PXuuDqhxI&X-Amz-Signature=bb796baff699a82753cbd4e4189debff77154c9ae0495105ae71bd07e5e0f8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

