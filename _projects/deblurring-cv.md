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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5CMEEM%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T091513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGM3h63uXm%2FUHrP22z0LPYDerpNqENdR2bpdNAb%2BT8GRAiAlo5yeY9svhGKgk8u4cWB6%2B6Imm99iUbh9kiGJNVexLyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlbxV8v9UShTRDSeyKtwDyghFQuj1lg6eOSj8CQyL5hMrxYyWboe0GS8nHJZafLIfATM%2BsR%2FOboPZDyW9En0Aug3F3AmkluBR3po4A8xBGZ9XRwvyUuJZ2pD%2FlVqYDggTAwQJqzbYX%2Bx0m853taqg5VdLtfJ1dupoI5IewgE%2FVXEFGK6W6P6cLPRimgUaGGDQSzSGrfk8PzFB%2FXRzxKEFyVJ3YtqwbhY7yIIjTzcTlIKNf1XJ03kl02OIQCpGBwIbYN1zU%2F5BV1bLFuvjDT0x05iqO1tZj6xh9T%2FKnb7Cvs3drSsYlckcl84OcA6BAGsTgRZd0qR98kyCgIqylOZPq%2ByT2MqQPEPUpgHxguWcLMrb02q%2B8S7llBZ8mHq30xhHku2ta%2B%2BBwC0lsqba%2FGC%2FvRTXzenJz0HIiGIqVNrJ4eKax7ISOsa4r4fRNZoi3FoxhTTN34fz2nqXnQHTzdruL944Dnw1GM3FbwpIu8PwJN61akfV1pAmSiytgHSiqzngVHuw2zM3lQQEAh3X3UyK8YpotXp3YS0Kde2Prxbd92kNl%2BroaTPUHEYyrPILVfdir2Ysp9uk0CUkCgIWKA8wsxWtOT0W9wri9S%2F%2BLuscfStYITtrLBAlFWIQ2d%2B2XTip2K8vk5RQmW0w9Nkwmdqq1AY6pgFJWO6fiwnHet98oNY6hw5k%2F4tEadHJToOjMJLj2VlapIjx6pfJIBk%2Fnn9%2BjgWThi7ZjS%2FuT0t3z9pUqUKO6o2jcd%2FkYI%2FPOHC8mhj8kD7t3p1FKsFdAuhmxRq%2BebIB0vYput4uJcAmrqDIQ%2FHULQDEMBmQQ5eLvYMAzvzeuZL4Wij%2FyvRzTuzMq79AUl%2B%2FLrxEFlX%2FwKqWEskajEoHTQfYPMSlL09s&X-Amz-Signature=6211135fe286349cfe8f4650b706c607cb16bc6e078a46697afe2553557efbe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

