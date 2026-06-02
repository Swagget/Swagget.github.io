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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626DETYKF%2F20260602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260602T051950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDCxw2Trg4jWol58%2Fgfdt42uVsq5fb9hhlBjuREfKscEAIhANsLsoWjjxbG5MrvxMisb7Iza3f4v9J5f51%2FGdTiTPs5Kv8DCBwQABoMNjM3NDIzMTgzODA1IgwCdhpwI0p%2FwwnnDAsq3AMzm8t65Q%2FEeRt2bqpJ0j5hpzjCOthVqQsphhTa3gQ9iBzUg0aB4ejC7iFo9atVr1qECfDZ35W0sBHP%2F8TcqdQ6LXGjs5S5eY2VxA8cCgxH7xdoVoVBDHy%2Fi6ndGi1A7y%2ByrmcxmjN%2F2Ddv6ahqz3gs5Gu%2FQ2BH61gW71o9koyqiadGqBZuwwbvAgd5N05qrF%2BSTx0l8m5kDbFfBZmW4S2yLlRPEBs6TLHNWlp%2Fw2MXl%2F1oMBsAy7t7vsihXXcJsukKex6wneRzaGlQrqeZmzJV%2F%2B99ee7ZA9dTR7sSzgdf36KHRYXjP5X4nMeCVQnftjoQbopG%2FKA6bJXqlETXNU6YlKLvpxRA9DsniupNGCVNwl2IAVkEm5XDM6UQl7XPkNq6GRQDC1zV7DBMhmrvJJ7kBho8Tzzol5%2BhzRuMV0y9agcBThqQUCjrNvuEa3GOJgGifTnn6wk3F7bnMNDoffGr0CEF8yoojLrYJd45MEkVfuPVgBuP92ZwyrRfTsrR1hA6OC94KbxJFtfcOR%2Bp7nUx1EztyIbNjC1nAt9Ride5Oz%2FTC6ZPYRXZU9PxW%2B8eZYI5w4L2oPQbndM10W5xhTtEvM55AVsX%2FGmVZBhNvkusPJgtGbUOpTlHWx2qtDC3h%2FnQBjqkAU5g57jXmF12It38rYpU4%2F0uwMsjWJftoDTFI7983r2v8xKAXVSbARXqWgeURTBvrnnxuaYoDivc5inFHRt7WXJf69QSx6va0ydfVVRtNBSfjTWOhUA5B02fbBjEKYuA4rF6sS2iKMKZqVzTFuC6vF8aEoWy5ga1ZAaHa9NPO34db2orFgCUnbniamztdArQzmw9Ntx1ugw7TU4ItFwv5b0%2FhTJ9&X-Amz-Signature=da3ad9ecb611bd99a8569802ddddc67c1f1c7fe306a75967c0e8c750e5bf50fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

