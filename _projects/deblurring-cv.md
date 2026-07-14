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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FP5OCCS%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T214348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIA6ZQOOGCYvp7cXRABqFtZfQQf8Jj91fkG%2B8LqyAXsTfAiEAi6hdP6AVLAzYM%2F1i5rpL6PjGOAzBA9R9OhGx24PmZwUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKtUbZFaSppxUlq6lircA3Ey1lFwlHkL2rvdkk7r4sD9hRqPWuONBzNR9HbDSInKXifdZ0wNOicdGQviLn%2F268LiPy%2F92%2F8QySkl7lfgiLAr13qQROPCGugj7oDXnVy8vJ3mk%2Biju3K5VfTRa589b3iG5AsKTGm6jnbYI4Fdx85E6jKgycRSO%2BOm%2F3zPpma2EWWgIXHSA8gJ3Bc4V7iwEhUmolYGy0dSyeE8kOBx7cCNorqkNc0vzQQ1h6D9i0h%2Bbvd3Er4HO4wV6%2BHF1xuzUwwHYhHjqmkyc1xLlT39J2MrmxEpYzkxjNe3DVf%2BVWevR%2BZMC%2B%2FuB2zYW0Y8yQP5JuwzOmc580nyrLUbYpXfS8yZhbuSxU9eCquN4k6k6QHODYRUH9ffOBNsLHoQPuaLfisLBZAqZNLxXZKWORWQPx3JUilL4IeJ9pVtLaS67rznMXJFkOXRNlyHCL4stp%2BVpBkuaprV5zq5AJHjTz4YBfRcM29vL%2BRw%2FuGzeBOG1VCuLMDvaqUcT2zr0BIUYH3MeRioVpfrkmyTAXUGZXL3zy5drhL3TLVorFZujTE6Y6YK0oj3LIDLW07ApjODJwGO7jzpUU7MuE7BkZ%2BGNkA30DAsI2NsvbIHhmk8MbghoTyMDduG%2FkZJRU0z0uUEMIDQ2tIGOqUBuyqtvMYaplbNOYU%2B0a5osWEMJjUsRG6E4X40%2FKTc%2BHHMrwoLFVG3WwNToP1DWKdHvb%2FVAurM7GDHfqxypaJnU7YAF4DWbio8Vunx9qNp5rP8iyMQBMIxfR2ah1%2BCMmzHohPFqR9dKZT1uxQD4Gdg4Ct0GQKBnFvpn5gvwnFqzoBGcOdrHhIUc9Ptg2t4UzirqOv8VBTT7FOfL0hHPrS3fg7UO39B&X-Amz-Signature=7006a56c062feabf9bf088ae31e128811cae00eafb667d94382cf665bb9b8756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

