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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQQQLK7Y%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T163054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCHLHXvwuQAiEMtz4vGI7r0%2FU1LFZiRGDYOcWQl3qzYbwIgBF5WlhDX8PcSyAdawcz0uZv%2F43H%2BGSTjZylH0uPq7soq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDisdIa5hTAtag1o%2BCrcA0AUJwg6ft%2FCiJIskADVaDMX6onZtgEa37XBL1vqgejF%2BMtwFPlK01qT83pFJpvEmsOtKDdDBf%2Bfu9y5ZMkN3j4ens8oXbFNpMiBx7wiHpPA8YUC8Gio5YAlvZNESol1ovo3DNMIwGCBZBACQRX5MB0mzznYvBKarBfFXq1fzyxgG4r%2FVidwG0CPkzh13aRHpXt8xCehrgK6iJZD26hk%2FDiFvEZkHRASDneEvdqKC5sxEn6olXayZ%2FAIF2hQDxo4lxc%2FJhyLQpht8gNDlAV%2FW7vtGBM9%2FHanhcZ%2FZRCO8zVva2h%2FJNhn4ZeUki7ebxdheKylLazyl0QzqtwkyYY1pY0APm%2BGAo8GwCBwTUvTf9Vcka%2BSlX68bzGBnt%2BgXwJipCgqL2VQ0JoUJw3P%2FdmTJU9DexmC4wFQIAjk%2Fhm8ua9vsX37T3sMi9fzMG3ORnmZroPt8URRVVq1hg2GO5zqg60fyCfcSv43wXn0hDubNiDVBzd0BzWrgbaTpukH3YSChjcBmGW%2Bfw8D4KSCQVXrR7BXzf30UZLSFSkNVp92FwlaetiJ8mhyTsF4zaQ22%2FgSlYsjOVqXTi%2BoN%2BOvTHHnDBTaBCKAWwIBHxq%2B3dRnsR0Lrp%2Bo%2F3mGvfEi1vmrMMys9dQGOqUBAMDwuyEW8Q5Sr5jqfMaG7aUqPOS81QdBszwgyqC3p8WCHV0qcvYUjMVVHfTZJxPR%2BvcN9d0cbHljOgqNDdTAsM0MVbIyCmhssKBUc7AkqqedreTO5zJX96PaRdA6o%2FjXpu6AzOYdNGrvfXIvYjn4sGfou8JQ5OrX98ZQ%2Fwm241xdvaOij735%2FQOj%2BZS3fKPANtmxWgdExIOUMDdSc3s9ehfFlj1W&X-Amz-Signature=591af4dbe0d01751c50d71eac3bf1012cb126256d0edb7c66554f691e490206c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

