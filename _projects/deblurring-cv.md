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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHSLLYH%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFggAg5niZRY%2BIlB3TUdq1Ez%2FsCoA9d5sL8B6f0VTrYeAiBRsYVvs%2BNiYygiFB%2BNi2cImN4jgn3Q%2B9R%2F%2Fhum%2BWS1%2Fyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMZc6EqXoRvnTPx0J1KtwD5gfuHPiZjwyAXrH0Q8PZmqK%2Fe%2B1d3LNUt%2FWgBKhXCOEkGYuE6ZzZSg%2BAJK4%2BCnN%2Fr6d7Bln%2F2BytZuS4y4O%2Bty7FniOOeojQKNSG1knCuAXsFj7Q3yXvtd4RwlIiSxScYwUfZyfFDn7em2JA4GAp3gIRtRVILbkk8Nca6qibOB9tB7jGss9H5ibFwTKiLdDLjqwFCG7jwPgpvrnd7cv3UGpQXDqjrN6pTRNU38C9MO69LqbY5q%2FQ1tSDYKu5MTTWRsg%2FnCwITrtyZ8pvjrbhspUpSqvG1vV0nuH6UrMLDlSDHotf6D4kIDJROewE5Fm9aNlUFXZWKMal0G6kISyox5HZBZCiYpWFzlzrGNLjjjTbzoDY4bpWHdvVoFUPSc5Obe7NMiE7KHS4G1ZEsa9axN%2BBh73Vs7Igo7z%2BSGpl93gLcuqoNNnRo4DlauU9gRSPafEOjB8Y%2FDPranyGWKDW4i%2FeF1AGZQckKeN1us%2FCrTm71MEDjUghivjLNRzmgBqje3d4%2BiOtp8fYl1MnstMS%2FiNqi9Oh869CvK7UFdlinWID1QfCp8icxug7S6Z8Utetfw1ywLudmR5tP7l4gLDICoMZhw%2BDB0IuR2Xz3JlcIAATV8flr8VpUSwv3LYwnfqC1AY6pgFrq%2Bq3Cp6wSR6KH2cp%2B9Pz8maY99ksospjuxecrOswGamM8cTMuMV53PtAhX3eeQBAGmopz25%2BeFqRCzEGyZ1TottsxbHohX05Nw%2FY%2F6zWXE9EV1idRDAcNj3fOXuVvTmJTIIltsi5P79QP9Jru21ORMqHihfXS1th7suDjggeqjLy0AB7MTSeVdn7Kz1YwjtkRBbRkvjXhs7NtvWWyZumQ5GxEHSC&X-Amz-Signature=02d2b17c9b83504f4f3742d4e41ced27d403e3472b6df1f7e2c070482f26559b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

