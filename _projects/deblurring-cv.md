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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4KOI2NF%2F20260602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260602T225341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD1EG%2F8kMQrx8q6kt4NDvWRF%2BPaYlQu%2FBw3CY%2Bxj%2BZAlgIhAPlu9Na4jgy9GJdlR8MHBGQoGAd%2Bs4HngPlhIKha0SiVKv8DCC0QABoMNjM3NDIzMTgzODA1Igy7BsaiTg92fB8Amcwq3ANaZMCwxw1BJvHUIGydNhGu2WoFOZ%2BXvnlFeQu5TuPGcLWbNU0MERDB8s4savii%2Bhz0ORda6%2BTx3K1CwEm61FvsfaupgJKt0RL9gfLj7pFJi1RqTENp5uGu7IyucLDf4UtbNFvUOUxxzvXH4vAbB6x5J3NZFRe2yAuItkxsPmGbnCznz4rlr4KOjKF3kTqoSEMO1mXoCiyeobQC6ZZBitdOM0rSi74SGg5orEUA2BKByADf9eaV621aFc%2BlkofZQw2JNzQd69aehNJwntRBaW3hnootLiKTFaIbZxap4WStxj%2FXCKI6%2Faamvnz1dx4TqlwOySuLRvzPa2F%2F05kJLCdbp%2Bf98aSHBS%2Bf1LMLosY1KrPpzBM8P8GNYi3HDrX9Kk%2FZjyP53uO38GZ9%2Bwbsxp27M2Fkpfm%2B1ib4qmxcew5VoPoVmKH0UHQwQRlgVaTlaJwp6CM8A5cWVsCYnEekKxEhnH%2BlVIWnFA0LJCe1RaM%2Fgb%2BwoI5uQ6MvqZv2kKFwba0a7JugYlpwa3leMrSNLlc7PMyaUT%2BqwYwy4p56YSR5wI%2BcVVzr%2BMefl6G7Fw8y2usiBvc6OshH692xlKaStwpwuvhFFbj8lxsIih1Wc9bNR96NcM4knnaEM6zY3TCr6vzQBjqkAftFk8v%2FCG7yl3RBZAaolBD4sVfwEFJQMG5i5zsENeqdZ1uXqWOhwi377%2BNNcpsNz9UCwZJwq9n5rbVyEcf%2FtN1K2BWoQxAUvD2yOzpwMiLiTI5c3A0QKuPqfNBdWOOZzx10VefW5YW5ChzF8GOSUFrTfIXHPSIU06lFeDpvys4J14Oydufmv3vdzU27%2BqA%2Fx61cUZ3%2BpI3%2Bhm%2B0CeAI4y4YW1tF&X-Amz-Signature=e70a2833697eecde2970a5e8b61502475edf6ca2b01f6fa164cdf03d93471d1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

