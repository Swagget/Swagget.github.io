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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYMQ7DBO%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T155708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIC5gbOlAzXdW8a5P6EZuBvr2m1rgnxYJQ0ru6m%2FWovc%2BAiAdelp7cfJWepKnjGBE%2FXSS8JWyiuSwcWEwyqJm36qcWyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuIffm18IN1selYJhKtwDnDmzwC4fCr7ubTKcc%2BuR6aDMNcsJ3SIKqQM30OrzBqhOfjp3eFevUi%2FZEtPb3Cga8av%2BtysE9R%2FUJx1IdRTNEuW7oYGbNp86ncXld6wTdT%2B48ZfTtdeF1hDrLRJJjBEpzk3P675o%2BwZ3x%2BJibyu8N1CtjLnpTkJEpKHQF6pTbk1oUfo4BdyZ9J44VHZKW18sK0j0a1dgd5kMlcTd9pDd%2FrP2J1uNemCEBWyfeoITsyVso0JWiarbEkSaQVOv9Q%2BAIIsz8Udg%2F0BrA%2FJ8WI0etpUwxXq6v2enaN06Jiv4p%2BLh9iYsIkGvs5lqPqAXZvydirvgfPT%2F0%2BYPwGkZuc2%2FlrhDsD%2BvjsnVzlK%2BOwEUAuo%2FC4iW1hcoXpLzpjGfP040ECD7N4%2FjKfURZsEXwgreJINNWNracw8qZBted6aDZxDpC%2BIaOR9qqkW9GbotmTod6CbgNOEYLp6Sq0iQCgCeeFyeaZY061wEWKWlv3wAkPPAZI%2FUOR8ALLs73G6EgZxRA4WMWY2sn3TIYjCvbIcvu5%2FJyx%2BsbjZjQdMz0CK%2F9iPdkMuypK8D9DHvFM2PXxo4Rn%2FUIiedT8IWrJqAVt2eiAOtJULe3KtOcBqlLEjij5BR2acSrnJyBHarWAUw%2BOLr0AY6pgFtKwhVF0Kq6sCev8eEXaq%2BVH%2B4GvwIifZfF7%2FG5BWSBYM4qonkBJ2rhAzheY2959FKfA%2B8wNk0biUOCcXWOI7QHB9Bo6hefrVBWIoZbu5YMs66OZ3RYIMDYBITUrxNVSQC70yvn0WJBSPUxQZxMKGOlTaZSqF8kZQMw62OgOl1wNWoCgxJ47EfohQJ0m%2Bn6YrQp1D1f2zS2Z%2BZy%2BWHsJHOaB2Jo%2FjI&X-Amz-Signature=b7dfcd1ed875a6019d9ffe6e0e64641b06e0ebd50f55cb43fcdcfe88907fd707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

