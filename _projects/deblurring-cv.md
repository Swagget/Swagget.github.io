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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYQN7TG%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T152141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEWXxLLTRSiCnI7FYfCzbyDaJEk9NIu5%2Fh0S75WIeCPgAiA5L5L9Zkv3FPAdarUSwLVFHjXpLBCEzQpZhEbd0k8xqSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMahFmumAmdQ4q26IkKtwDwxYlcjcqwhhgEpw1z2ZuD%2BxIY9ZHDYU6ysXpTRR97ji2BPqdAfr5j%2BQPwQzoSVdYsmdGdhWiJY%2BGTozcpkFkMWzZ51dyDQwdq4ouo69XBHNF9sgiKn3fT6SfXJPVrBUmyQFB%2FooKr2fhr8NHgOD8NmtAGWgkcIz6oWmJQevK6VTg2p0p9bz%2FysAmvftuIP4p5EbTU3Qp8Ey49qVT2nfOGt1yY7dO4ULWT750pmGWk7z9CU4VLJgQu2enCdJ%2BHugrgzFdF5RpZhraQMnUyT4B6mNxFNBTS11iDMbsbXaFMofzY1DPRkFXNRVqDhFM7RZXi%2FxZdsDLZTj6tB6Bsmqw2KVrWRTjcRLOZKJor6MMredR8foORTwhmV0ct4bIrmsH8PFnk7w0RKZMH%2FZiDpLolubyKR%2BcHumHj4CHGR15EZmMeru7mwq3yPJ3c46IULgI62Q7m8gVwow6SWvKx7dDiUVA289HibrJ%2FQooZTP%2FKWtnLmxlM95OV%2F7qKTaWcGO13RnOKoXjzTocWPtM6moQxjpfgl9nuvJv3hcYAz0XgAJ4VVoF9OVd3mA%2FAcktSzNh3eS5FMf6Th8Dbv8TFMKzwopflTI0RfS8gVtHsMdvAMKOqBN8uB0wGQW83qUw6LOP1QY6pgH%2FpX9VxszsM96r8DysfobLkfkBtW9H6ohftggoA9LubosuWwj%2B7XHVoQCtxnIPhNPKqjjEErp7fw%2B2rDaT1gkbbgO5t%2B5W1d8IyhTZG21%2BxTPbdbQ8SmSa6U9bdSukVh5TmIGVAoT6w0nV%2BAoJpMYo5qXWK8FvZ8IQVwYiICQkDN8oLSB5SIvguxdGcpDx6FVhQckvYkHBqelYP5aSPh9zUXxutfWc&X-Amz-Signature=eb687145d4ad6ca337b6d8a19a2e99a8cb3f1ffb54a8113f5ddd731587b787cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

