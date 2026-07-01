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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTPTAKSV%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T204359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEmZhovgxlqVqXxl4CiFa3dPtE8BgxuMLZDjfJjZYd9fAiALb202hSC32qB6Cw0%2B5GAPoKCftn5AZUVeQmbEAbqTYiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoDhpZmqxMUHMCiXIKtwDl71oHkf1KQ6nRXVFnh00Y7pLnsYmXdC5VdcvMQOvsgqUEOi5zRrTQWmH1sYsiSZmPiP4MY83QYuy8n8dYnz9U1CwvNx3dGQ0hUbn5HGl8uXAvv30nfK%2FusQDTgS3lPRa9yE3MItqTAyKPs%2FrJfDbZZiBA5WKt%2FaLws5LcW%2BePikDRCHZ2mt6%2FEdzPzjYq0mLwvnfzR3L4fbbOKzjPjBxJM%2FoCtozCsknbtN7Olq2vIkSwWpP%2BoquXMZit7GdnG20AR6eb6fVVgWXD8pphPjoJQco%2B7EyB1jQ%2B4iKE2pXqZcGZB36eo7UUsYSrW1OSpSflClLaAkAkOY8%2Fxibtva8ddSQLShl4NrIjk8%2BBbOYmDdhxHP1gNZGe2Bej4BJQsPylWIzGRh36t%2FlGoNkiZ6LsR4OyHNV7afkq%2F10pyZuWFJ48j4LyojZNhQ9F90nQNwyabhLhTPc5lHSbePdnnrKDheabaDYyY3uEbM3yNeK9LiGpQXVTGDv7bqf8UFlPAwpgmLAd4d5SR%2BKDyF%2Fs6hr2i%2FrszGZAMn4vLsQrdy7wuN4aoeta%2B1pAajsKp83Z8WZmKuidxoD702z0FuSlxrNF1Gcm1gZRQgMjKOddnG6OCRTHz%2BwyfDP6z0Koocw2M2V0gY6pgH9NvxIrDrgku4GKUxbfic%2FeTOMQQdEAAyBO3oJ7PXtCw8D25Rk3hNUhyycVUp3n6PKpihYlnCJFftJkdDM7ZrIACeZzxexIY8EMBilEiOhwQLzr4dnzfqiSo9MnjBeLbtFDWkxm1ZZufP%2Fck%2FyPV1JBATygCnjcNjMCmNhGST0CRGnN5EEFOMhl3QuoXFHjfrFK4FJ3BlEdHrkxquSDnFkZUAhdFLM&X-Amz-Signature=c6ca8995bd9e5696a330c9cf6f9c11784498ec14456e3a145417a5fcfaf91594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

