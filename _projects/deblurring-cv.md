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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV3Q64N5%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T211646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCL7zt46vnDjlEBhJuL60yiKtZP8UkWfwUOJgoY7PFPAgIhAIHLhWvp1ZsjVxiBomApa4b4gkwFA3Nfq2X6sF8qmCqcKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FI4yV%2BJbe3Knf3QEq3APiNZLeh0eUjSKxLNp9byr6%2BPqfQA0fVz1Y0ZWfVmBru7RUtvJ3CytuZBvfKzy6T05Gi2Sinnz1isZ2MGImGI6EtWykLAn%2F%2FOId%2Fx7P8N3DN0MSbHeDy4dXZHzTD0rH4f%2BZqii89LM6%2FzHUVh9IV5VgiN7K3iPnbuRIz3FyKCGzwwSv0APO%2FCiBBg8E5ujrsIx2DITruL%2BdNZI8jceyrNCdMcES%2FyvfMVHj6YEjgOS6FegwKvimIeq%2FH4AkmfOhP8CPiJQnQ6Y16WVP2kKc7%2BhfyP7oLn6PCPtUE%2B9kc17lT49bnIZBeWGQpYLn9NC%2Bdn%2FHjBrv4OmV%2Bgu0cz4oM9X2EIS5gN7jbeTN4EnyUacCT0%2BKZFX2q8w0CDWMcQnGm%2F62xufWvAIlmjuY9Er14hjpS9bFtjo1YToyqQ8AsHvxFEaQqmCgqdIAczyGODZYYE60OwWSYb2BsD7OqseKxbhyfNbkaAuujhj0E2IzgKQ4cAbPNqaWjbZGRpAeHqGEqBi1RsxtNrgm9FSyDHkgCGCAToe0ePvKAhvq6NBzgnO1Se55K%2BUSG%2BY9zT%2FOXjKNPLXfMhO%2Be3%2ByKp%2BAY5CsF1T7OM7Iff0c9Y5XC1YnvRr4DbKRbB3APytRoQDX0jDAxrLUBjqkAbEw0D%2BrbTHpGaDCM5NdeJWEQelqoXB8j751uyaaqSBIk%2FbmdVtGFUZVjwfx%2BAbuJhkT5urpmNvpPDXyb7ZWQXvV7TTMlMRb4EUQPLDJy8zgVfJfjSpgzmx2EXNGz3XZyWj6A6oO1FIrOTNivkkGwVRi0G4UHz%2FpWxE3gc87Y9YFxvnYjDXQNXAzE9Gp3Ntfp7fLJvSR%2FYG5V7UuZxfhyPFEvAj9&X-Amz-Signature=9d0dbd99b35d0567d04c081e860ebc181eb13bbb1a07443256a4ce9eb9d99408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

