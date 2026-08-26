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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S26FYGZL%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T003136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDtyAS18N1yWIzjKyooiXKiJegNzWrXA%2Fja0lX6pGwX9gIhAKI%2BgSNYs%2F%2BVzhoKH7lFVPpTgZhWz9oBPYklAaCaRPg3Kv8DCBEQABoMNjM3NDIzMTgzODA1Igx%2BoeJ3Fia3s8lnyDkq3AORZBUoj%2BA9VXFeu2H%2BrFWf%2BqigsM%2Fp6epRbHsn6%2BnhIAM%2BstpV9PSHLwRx%2Ff%2BAYiKHXzd4R0ZmRbPA5xQDJFxr7rVxEmFpKC99BgBJ2zNGhs%2FPXuvks6X7VqQa6mqkUGCxc1KL2KGLrfOQ%2BPtARnB9BuHZtX86xGDZLa3pNsvw0HajSVPNO5o2A68bNdC5Eo7pW%2BaSsd1QiZRK6X%2BSaaKACRXpgKrQPWFLcL0okqtVWzB4JhogVh696qkPleWuaG9PiBXLfJx0xsfnq%2BOmH%2BAErLGx75ZMftSACPZXMr1eGLEf2xMBFP2semm17QwvnkgK3mBaILG7xBlvprMieby%2BORzbo6QiA9wVMPCRjTfwqkB9RhqBTb%2FgjwFODjQjP0ys6zM39aatSjGS1AW32yVxLY9yIoaEc5vOm2MkWYGHxF22a%2BELKUkZZ%2FHN%2FCRLWNoNH4kSDd3e1ezWVU7RHysCkLbf60D1m0emvmiFG6p%2FI9Ab8F%2BNaVGVfuXkyjf2C7QatI8k9jXiDMi6jgPrVp0JqvarnqReTmpybtnE6vbZEzHsb5zOJZxi9GSQn7%2F2a5lja4M%2B6gOl%2Bt%2BYYuCxfmFtRkVJZFSihH6v1MJmo6UNaGAH7acrYcFe7yoO7zCw1rjUBjqkAUFbZIOR1RJFpLtbQgT%2FPG9lkr3qhMHqsNMcLKdAslw2NCETb1%2Brl2cETIkje52b5jja2ccDq%2BxtP4Yo0JjopQkQ4DANoviqoKQFWqoYwviLWE0jZHA1bA3xUiIckk0hTHhkdhHC7l0v9VHM2%2BHDd1GVdk7I8Iq4vl12VWu3NN01bLK%2BoSdZpqzMJgch2y8SUMP8vTkCkXKnFbHxtird%2FAoOfDKS&X-Amz-Signature=a248ba49a3570d19e7f03dae68c48234dabd4420e6c0870379bda4fb6b4c2f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

