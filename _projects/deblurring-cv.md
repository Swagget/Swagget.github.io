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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOF7IIUD%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T013819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBGU77mE6CX9DsYlY4GLfuO3zpZxZFDX%2BlUvr6y%2Bn%2FEOAiBKKf6RyJtnKYSZPuULDm0%2F%2FiE0m2%2BPB0LN1ua3CvvDaCr%2FAwgBEAAaDDYzNzQyMzE4MzgwNSIMuVPPQbcUcq6wWA9JKtwD2v2NaSTZQUTxg1evAD%2BdfpnIaiinpoRL3j2P9vxsVcICib4SpIwaDeiNW1TrOgA2uRGWOVpK0BUF8DPvP2cq80THjs5nkpW2KL7NerWLqd8LRpShBphPRVJD3ImrjmH%2FSVNPwGsAWhEHxuTeCHTWRQfqSSBdTMnqg3lRfvs3xYE%2Fkdeb9tHcbp0zN2S5pC9hCAUaPft0wxV6XdEdSnv1MQno%2FWFieGukRKLoxUnTbgaxCwJeAf5hUfrNWqcJdqDfB0UzyidybkD14%2FRGBsn%2F1%2B%2B%2BBTd1IU%2FZW1oREsDX90tj9D00%2BS0XSECy2FM0eXPG8EsnW%2BDiFEmMkoLMju6TNNlIhddwJ1XzdEVN4Da8DL9E3Z2CkPyqG2lflI5GVjdid2w9C%2Frk9x88QNqDgwjtQa7Qv5cIympI8hF9Lak%2B49j4z5f1oXIqs6Zvu4%2B5EThw3iUCmosegQKDwTTU3feVO%2FsqQvQSvmM7lOt2rC2V%2FCZpHUCcEvGP5IX0koxqZILimEawOaYzcYNnu7TiUyyH4UXGmF2aZ%2BdvezVjDRqnJreI1GZnwZ57TPzDB0ltVgFJ3uidKNHufvKvnoJQQgtBRvR0JY5galHnP5Ljk1Ut%2BwQ7qXrYr%2BAp%2FeKPqzcw%2B8Ht1AY6pgEpYeuEvp3vo%2BRbadTvLWnyPOJswgS6jrDZiHysMqv36Xh1j%2FJSt9U1QXmdJOWasVnbBGae3dhqR%2FuDRyFCX46drGCvOlRIDgaPhaSu19duZnIiHfCa8dis%2FPmlM0Wg7AdRylenWKa%2Fl6nRH3H2evguXzphIldXaTtmTowOiFcvzBilSv%2FCsP3zBuUFizDEJiwGEvHv2VXXOLXKLTEU9NPPLPPQeJpg&X-Amz-Signature=97c59a55478c84e1c0ac41dd8e220a0f6bddc99b7626b7f985ff6bf64f0a639c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

