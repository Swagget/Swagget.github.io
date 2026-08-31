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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XINGW5WP%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T220602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA42m1RTHOgxRMn6ybXkGOvBTB%2BzzgNHdM0H4HCig2coAiEA3ODrpKQknQfYNIHzI0I0zNM7LlAginotW89r%2BjmlP%2FoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp7XQVwfaIrcDG28yrcA64YAalijfT%2FenaA2ZAQ8ecNfLKqrGh0BUi4RHKtpptgdOJH%2BimlHJsEMB5z89jy4wHShuXwz%2FE%2BMJzRfkGRiP4ntEZqC%2ByYI01A8UVcP6cYMeJiSHqMIt8BnI07gLF8d98xYOwfBVTEbYTuAtfsWWlUpyCMIC01x3knktYfWcFmJ4QgZuhQF%2FiUBVA7GGE7FDJAERQI8R3DhYL7u6%2BVzuJB7Gj3XzIrSDEJTjsFLuKUifRj6YbDy%2BUycT%2FZOu9p8PCgypRu1WM1X%2FegBg3qYPu0sQUX%2Bcvevi6fruiyIegHHcNLhIDuqeoMCzJfesNkJZoN6PV3xr85Ridg0x%2BhK4NDy4u6UxGd387CZRleb2sJELgpUII%2FkdaL2toNG%2FGgVFWLrbrQ4WT18nfuxj%2BT7ukhx5odBt7mFRdbPnqjxoZNVytAqgUXDSYeJiLYJYaTSqOqPJgyipRcr24e28N2ydajO431RN7tcDb0uzKivLOhYw38hLBjc4j0eSzS5yAku4ZiKMGihqVaV%2B3h2W%2FAsc9T9%2B3EkZtySWnPRzmQLMRUZwwqOuYQ0D0OaLcvsuAbjeIG3G%2B9%2BIuy8q4E4XLEfbz5gV2kNW0sTRJm6hKSFUVAs1fs1ZlqB39zb8MwMLrw19QGOqUB56ryxPV%2BUyAnt74yKssUPENmRntBwZyAMBgjjrYMkil83DUsLDE4FgjZr8VPi4z%2FXg5kEL%2Bdf7qT5xL%2F0R0uNfEdy4k2FjlLOCLpOl4hsYOTXXPZv2APq2SDfKZN4kIRX5%2Bjajl3Fkzl2sn%2FzmkNNofhEI87lUyWSkbxolkJzzKsIW6sGjqx7zLYRLHvKG4Yamyzjy6MBtFVdzCAHujGjrPJUnzP&X-Amz-Signature=ffb29396521a830e8d813e4ec767be43421b957e48a010fd4d039e5f48791c83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

