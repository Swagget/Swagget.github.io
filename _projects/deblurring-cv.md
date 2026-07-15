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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQEIJWS%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T070417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQD2tfTO0cWrxWOQV%2BtA4LzA4VRRBA2SXi6O%2BLOpV%2F8LtQIhAMpbEdEVqwndEHlE4YEvU71rXEgFxkLc%2Fy9rPRpXSPsaKv8DCCgQABoMNjM3NDIzMTgzODA1IgwFWQZfNXm0ZzYS2Agq3ANgdzu4Hu38RlR6MGuJq2cusoXoxjuK%2BNlFwDKf3NQNFfK57i%2Fs%2FrpzSaDREGll9mYPjrymFeI3Kr7H2jKL8EOYPL58%2FaiuN%2BiAEkSoSETm9%2FC5zmrXdRz4DIKNL1yg7mLmg%2F0eargg43%2B2c4F4rWfBefHJBHfpeazEDt9b5%2BGkS4QLxO0UnqUZmfXkLq5728CoQL9DnyErgqqoeUCPV5SQCQowpeqlJ7bTUXCIDbPXqzneuzG%2FJjHC%2F8EQjgEaUxqEsAU6VyahUb7evbhGDDlXxUrlz209RHzXjBPsbunlWKfHtqllsYxD43%2FvEyHEWmLpVoYlQ%2BGFO%2BHcIbLojd7AA6wPwFIqTLONew5CBM2qQLWrWnSFTDFjQJQ%2F1oI1T%2BGBq17RkYKLz4MzhJyMz1Us2wOhBaRiykqMTkYo4VJot4bEnHRaEBOYxt0iwaxh35MQnb02uCL8wwMpbNXCstCfM056eoE%2B5NIHz%2F3DhgSRpQvU6idM1YFjGk%2FV6c5zLQN3vwMSmnepyIMzKsAHzU5Z0nxnHRIRlls4pqN2O92iLX9yrBWIfs1ZuGzw8LxTaXs6I7YE5D3ae5z8FNfHXzqPDvccHMrLSrXZA4LQd0O%2Fb039Exh0EmKgS%2BCdnzDk39zSBjqkAYjOXkHwQ9y%2FFU9Pj4iNgGkwBJIs5CdTtdhsEBqorSpSpCawuxKwfZfmL3YE7zbIiY8IRDAFWMCFZg0ivnDe%2FkGeXdRd2m5t4vzZaB72DbkiU5%2F3kyPsZ0X7dgGQ7ssW3nfbewDlz7%2BK7%2FplNbXbEoegXUb5vs4BmpUYbGWL2x935e27m2hEr139STiyci9PeEG6PawuKjKhgl8ljwX%2FqxnTv01X&X-Amz-Signature=2a3e19db230bd898ca6281b4d5f339e8f95f10afa4995bf6e9ef7168d9b2b15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

