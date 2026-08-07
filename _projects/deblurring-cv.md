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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TVGGQBZ%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T232208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwkbm5Jcsr5viO0CV9s7hymqnZ9FPZvjIBf87wLKYe6wIhAIygfBxbxVsJnodG%2FS5qQS0LZwd0AQCa4LOmLo3XBmx5Kv8DCF8QABoMNjM3NDIzMTgzODA1IgxyUMOiMgbjT2gGA4wq3AMGd3BX6Cie1AzK9JbIl5svoAG0cnCgEHqzsyeJdjx%2B4cPmZDeCCdtOkxG8S6JmE5Fah1ObctQNMO7YZfFCOw9h%2B19eJUmnjwMyxPZg5r5JWzEjqMIBxTGy%2Bh7CZiqXhl94WhmeFym%2FQ4%2FTm%2FMEb4PDIr53WXbBty%2BYACEOZ1oND1dBhPSng6ISCqxk40jUwCN7D51kO3Dv8PqI%2FpyOHdg%2B5sW%2FNuzw0%2BxXAvGzAYbtXCqeEg%2FKFYLrD3yhZ6VBh%2FtSeKnG9xPx7EcMkQ7fCWCXgY%2FDjifpBHJontOiG3p6ocktFX7E8K53FVcYIw%2BxQN1fNMhwdI%2FADcYoUUCW%2FuZWnNHq7IRQ5h3OK4HqoIHcvTSrNykegtL1XiN6Oq%2FmP3bIY2TYkHzAFdYMmwA6cvJwWdMTZi%2BAoBqgby4dDGfQWCGw4qh%2FxMwIelWFDu8ggADZJswLEwypp7AU9gjuPRniKDXozwTggIT9qpdYwZXbUMxl2JA9UGi4snOLptCKJibnmfhkuvlBonJKgo1lqt4fy9dVJFPCOB108MKrbkBuXUQcTg4po7uVgoPUhAkGKB0tOhz6Skd5AaqpHUEk8u%2Bfyro9gAdMKGXtDhdEuV5G8lpancNhCWEqDl2qVTCMsdnTBjqkAYhY5GTe5rWVapi7J%2Bp9K27AKSeFrj1LuQywpAuLSg1R02sgDgz%2F8CnSOI3JvfIsYMPlYRVaIYq%2FhdbjTClRbwelUbyHhYTBgtExuVKqr%2BQT8Dh7U4ICsTruhBaeBZcac1VvxDGl9G5VSNhButb5wJGjQyDdglpwFyPsPBWzKk%2FKJyeY%2Bj56Rq%2BWW3dxESvnX7jcNjLQPpe2%2BgihE6Dm0WeEBOyU&X-Amz-Signature=362e7b02fb30de67ef4352430bbf45946d4d65603ce0ad34e821fe812ed22039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

