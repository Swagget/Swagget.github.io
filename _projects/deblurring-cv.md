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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q634NMBX%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T033720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDUgxyO95iNShokqJv%2F8%2B%2FO2n2CqklnZjGIXNfSLrTUkAIgDZ1fmMa%2BAAdAXUDcVC25U5JAbIk43AkfJ4tsw8QibDsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTavadHNCOy1lKCJSrcA%2ByuTUz4CdW3Uw4mgaE3NJ9V1VXhtqA6GiCmNUBKpoImJAi7En5nHAj4GRk2337EMLJTnxALo31OXbNb64nGusmhceCOu8iZV1BuWBP2e%2FSZxI4IJjzvifE4Y0H9ayaqHzRvFIafQ6McSfUO0hElp77CKh%2B3YknQfGH%2BZ7WqOHzvlAG9zveKPYoNLkL%2F951UCNKURejTU5Io6e7rbtfXtCW0zz1pMm6YvdIA%2FyMwWuIMvNukcl5OqnCGobMLRmz%2Bkrfz0LBtdbDtYXESmlOh4A4BA2TC3UU9AUZ2MkuyvuyiemU4I2bdgxMbpjTvgNu7Yu4TsiMixmUOlQtbgolgAfl3NZWmUOr9PP3X%2BRGFXCyZwfU0fS9Yv3FEYlzy7jDH%2Broy2D1jIhSMk%2BHKF4j4VqgXTyZDNG8%2BRNk%2B0ojxGNLxXKaBk2amLOQOR1fEKZW9iuYxs2eviS8c3inTfCzyALG8QD0UxMC96t9cxGxEQ9u%2FqwXY9s7yMsr8bKCtCxoz3xpaVAilD8e1dBGoaN3rZoEYZtpwFydw2aW3tMEd3TYJFhD84dqQmoLRCEeamsZWeAOaWNuaJQJjFJQ%2FQNzlcfpRHnUjdk%2B%2FMXCFLROXR60Cf6UQ%2FjT5Rrs3DyVHMJzRs9QGOqUBxd%2F4%2F4SHGgG0QqRp35dVXE%2BNWAoZXFSf8CCH7XHJ9Me2DOmbbb9N5ISt5EUfTTIYcDyYRCl8BT6TKcazOwp%2BDifM92llbl7ihGup5BL8kI9LMNhSLP7MzoJXv4Phm%2B2Po8imc7cyo4LTM9uO0GUpdfJQxuiIK8%2BPTA1vkHLjfMCskEQQUPyQcHDjNBkRxbjaS5kJXIEiP3c46ClthTm%2Fo6HFpaGO&X-Amz-Signature=0ffccd9056ada732f218fe0aede5d3fc892dcce9e6352f8b4dc5aa50831bab3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

