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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R432KS4O%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T110956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQC8D2%2BbKXuzUxQ%2BetJ5imvTlsLD%2F4EDu2y7P8BofiO0jQIhAMSPiyqUzNP2Kc5ZPg5us154D00Gx7wX6DRWXEeqABf%2FKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3TVrpjNUPWzeCp3Qq3AOev6oxmF3EvoVexl3jwWAghVOPBxbY5BnAUHhE%2FBNWvDOLnxjUnyLDOSTuCr2GHkZWaCP%2FiH1JrwOSJ8vVsNzB7HksT6PGBOmPoa38HZz5c55dfKaK6XOnDSpCL4PaKEoA3RaapJ%2FiWkLpF87tJfcgEq%2FHpr%2BjNGwd1YENOMwDXoE0A8ueg5gyaCoBzZKpHbNJ8JO1%2FR9rV71pr8j6cDMvL%2BcAGdJFkLhg%2FRzxkt%2FQqH2GYsNZeWgIhYVg6xbumNDUIK4cn%2Futi4RrV%2BMPANfak53tHuRtHF10D22zmfz%2Bt0w9BWNdh4mQuwz0pJBrclxMsyIUn7KgpD%2F5nXtVN94gQ0X9DXIW3dkxt7ARjEp55ZOj%2FZPNx4WAgt3zdL6YVIzb%2FXfecXpG1sbKJ1%2F0SqOUkkVHlmIKcThAuRpZ%2BZQbFRYNzrgWM3qBa6JDKtQIWUEjmGvPTGkcm6fqfkMI9deSvTVTnN1wYvbASMwA5yhNEgCgkyb5ARVt8tPdWrgpWSuctM0ww1KTMYn%2BCozyauvwMThQ7FJbAQMbdPbq%2BbMDoPJ6j5TKY1w6gZ7BBxxZ5rNbe26YJ1Vie%2BKuZgMG%2BhgraWf7zh2nosC6OfRKxqZyCNVl4Z1krvigr1DLtjC74erQBjqkAcEbw43B99LS176%2FVAd3EADtmZM706kJ1AMnXIRrKv7ZK0vEp5GPAWouF%2BJ95YgXaj4Gsmx%2Bn%2F682Egiu%2BVfjNmMV7ChfoCdIOFJ%2BFPHQ3U4Z57vTo9ds3cd4JK7DcEjmuah%2FBwjXHFfLochh2gEGTafxExA2l%2FlRGFn5L1X%2F5xALvIXjXy0Vb53gNp7egsg6T%2F9s5Mh2dRlKx%2BZTcjvQFRSUDbG&X-Amz-Signature=345864f49da43cfedbc5ce395ecbb12190ce3dd0fa60fd3fd5403816ba279208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

