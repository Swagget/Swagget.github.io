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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBCLRGQ%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T174642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIEJU6o35QrvlDBnLBcoXW2I1oQ4qDSfsR5TCmrbiohnXAiBEEWn1aUHVmQfHGe%2FddYKIz2hm2g6Jp7R1Va7nGkD2AiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTzDf4uHkO1JmZU1RKtwDYWH%2BhNouirnxlRegKTpl4ljYaKtKQr5VSs%2FXep5v15bsXE%2FejlB7GOZFBfuop3idwd%2BQ1TDwn1L1yfwpHgPSEGCKhm6wy4R1BF%2FxBW0sM%2BPh%2FVlTGrT97OpdWoKDuz06fIexuw3AsX6ylwKSr0%2FKvtue3RrIygvZQUbfwz1t3mUFp%2F3eqJwKrV2SHLTbMXLrwJ4U133MZrbaz8dmRutOcEbvilq9jsTmT%2F%2FNb2Eno8bR7iOGNWvIWl1Iwtc4ZfBb1NdGvqZA3DDENIslKJsk4h6VAkzY34b44hfnapclNTLeJB2gEM8hcCCyAHpy1v0XqS8q93c1%2FeYhUMyujAAiE4FtW4ihBlGZD7Dz6J8rLTbBYm5HIYzSstLX7GBxIGbyeRVMKSTzB%2FMU4GJXRrAdTAdOx8GVj7mFqw%2B10NP3UUEQuZwYEuUGHoP7jLmc%2FIBjYbY2Hk7XTJevA7foJm9zZQB4LRYilNoPUIZ1C4Ws3egrF7jKEA2rr9092QoEB23OtMjKBGZKMJJMaQoj8cnw%2B14ePe0vE6tb3tbVgfnCBi3qAse1oaUrmzIpSv3NDMBn9ZwGXd%2FX55nFT%2BiDNeN6LRhMkxYwZ4GuH4psRSg%2FS%2FqTThfjRNk1mh4u35kwvNr30wY6pgFAX6ZJFEBozcefGrfk18K05fzxRY7PuSvLwvxhv4Hd8JnyHkVMqPwyWMjP%2FoiZq%2BfHxma3ZwL50PJttCwu4TJdGE%2BfU2QU2tP6Jw9XUau0gRJhC6DIURilufDjJ%2BKXyQ4Nl4oL27zxElKOgXThXg4Dy%2F%2B1XIdZlQQckMtyEVsURagWkyrZwWtD9Hi2WPpwCYt1SRETE%2BBQYN09aexZd%2B%2BIFq28GC8W&X-Amz-Signature=5c4a76d3c21ec811ddc8848510f34e9c879e626936213a0e633be8f697116c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

