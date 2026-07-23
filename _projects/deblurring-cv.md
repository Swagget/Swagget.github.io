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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJ7LXBG%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T234534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIFuAsYBnh0sTHIRQeTfsLsXsSe66kKsEWvY4VdIMO9uyAiBiRKY%2B0fyJwEHDS7%2B5QAm6y3XJ%2FEFXw%2FUvKBDz58HE3iqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz9gVOJKhnR%2FXa5XhKtwDMWrRiJ%2BpjjOJg3QkH%2B3wKh4bV8JR4rKHIQaK%2FsGlnd3cEZVIfm8Lj%2F8gPVIgMUnsOCYrzb41HA4WSnGe4m4bCilqMXB%2FCt%2BQU39XBJc1N%2FQA59ekl7ZzADP9OpEdfzC9v%2FRC%2FFDZdvJ1OlH%2B%2Fnz9dYxwtgwqz2W6fsDs0INDqKCfs0db%2FLk8Ae8Uh1yQvB3rzhW%2BS81l%2Bi5hi3t8vdvINOXsMBO9PWmIcTnCmih1mmfhrw8U9NQt92jkbHN0R1e%2B8J1EgnRGS7mUQskv5rLGY0TeFdIDwyEBMQxWlzjOydXPXiuKwck9daF7kGXI3onolNGgpZMJGeCvp6R7Wm8oHZi15cGyjhEiO7wfU2ueE%2F7LGQ00cmgHPpZ7mxC5Pf7vinI1jbmZZeVe00TcqHYQQsGe2s7XyA1zEnJYylSanL6ZAN7jaSJr6%2Fx%2FLuI%2Bkv8mNT0xkSducUr2j28na6AO58WMf61%2FgXBW10Fey%2F6wEpjB4J6so0wQa3M%2FyA8ju%2FM1g3DWWyBgu9nnLET7eTnUojHDZLud1ypLFPMyN73Ix6vLBK%2F1EfAtJjQRxqbcmz0IMpJclI6KMGC5ZIghwkV7K%2FNfXJmG%2BAlwKeoymqX83DyffJNh3LPRND%2BbdxIwr7aK0wY6pgFGtwcJkZzK8cfk0%2FGYMg95qnCvAcOuAlH6sReub7FzsT1r5W2CfaSITGIBR1Foh6P6srFKJNtxehYD%2Fi9KgwCicC1IhPIq7I94JPh5GbxCk2FDO2vB1y%2BXLxthHs29tdRXlRETnFdcvMK70mzcRsPWvXdDcgbgevnpG1aG5%2Fm4uje2l7xLzCwTcuhs6g%2BtoDMq3y1pK83xGKERUtifBR1wYc5Ny2ad&X-Amz-Signature=37507db21d5990b76f0bdc58b77deff68c1028b006541445e2f6e96ebdf6f5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

