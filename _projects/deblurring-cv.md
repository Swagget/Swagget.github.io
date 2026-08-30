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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VHSZTO%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T055940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0C%2FB1HoUzSy9ulXbWgkQDHrufQIbQNE1EXP0v6ErgRwIgdl9mr89mTvIkYhErfBJ63Vbq23hgihPDAwVQigGYBGUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLMfwbJXEL8EJSaV1ircA10jdKtS3Cnv3Bay3wwFtaesIXWQPZEzRnsJQYK76Jy9aHl0dzZHf8hHim03MFQWS45UP1d8L%2FH26kZ3X3BBwZoa6t7%2F%2Bahy0ztDq3qMJFo7EjXOmb8RNw%2Bu4znfVItoW%2Fh2P25qltzWAIhglLt%2Bt4dZxKhDAACLqSqiR%2BI5HP5EILV0kqkycL55doxT5iMqHNbLciFGAzXLjsXGvwWa9rS%2Bao%2Foh9u6g0iyLRZ4M1n6gLpMmlGqWUGPKFGUWU%2Fx9i5yrxHcbM5czeI3wssMEvQ3SpbEEqEqIPIQhSc1VfPUMfBoxzChiM31OIJ5k6BY8zq7YWXBPE2cqlgwcP5dqI9pVBfq2fFw%2ByLWsiZMNBrWah%2Fi%2BWBHl0LpiB4dwfNETW0xKXzCKsPz6iGCiwm%2F5arewuto1MrFh2A1BxV%2Fl4SEb8GdN41rPKicYyQbqe3go15Y0WGvx%2BDwx1pJW1eTUhF4rU4d4cMRbi20nFuQTe2Rou06vnJGvQ1Njip88sRBHTeXr02Af0joML4cyilJTTW3M%2Ff8i9i%2FLPtTWpCXmwGz3yNDG%2FMr7HedjG2Fk%2FOfH5N6GXnDAuEWqrhx9brE1%2FU96I5yzOgNNNItqEjpHCA5QBC6vHaLcdtkJmduMLD9ztQGOqUBOALEqNuUC4szbdhGvHo5KQDyUWn4gnc4m9JkpjkirkBVN2l7%2BGHKMPcu5x6V3lJP%2FK11Kjdk8MDxUYjx3Sv6WWJbfGi5V3ppRVqzye2e8MwNhXUBYYqhS%2BrfFEoBSkKBNWVwbPPraP6KsmJsULeqzHM8h8d0OsSu14ZWt%2BbA43%2FhnwOOB6LWI0%2Fy1G2UyhsNRXO1LSpll%2Bf2BtxlXsu82RUiLmOW&X-Amz-Signature=a16deab5e653ff72bcb0442df7bfbd5fbb2bc68b216c76e9f9824365bd6fb7d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

