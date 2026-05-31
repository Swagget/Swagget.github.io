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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7W4NCH%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T165311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCe587Ry7JNMEpRcrKBWp91GhhqAgm7LcbtZ609T0gF2QIhAJW3JhBhXroxSwERpMh7LzRjsvrryTinnO4KOuSApqJkKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTPicXNeSvPnXvUpcq3APv9Z6wdV8lgUZ%2B2ANZF8jKFL6eN2avYXl9yaNkFNnQ%2BlMYZfLKz62poONrO1Liq5PQdmYvEOJnjB0UJOKfKQHITghL8Y8pvk8%2BlMAxiWzrOC0Gd0USYAXuIJe6o40RylAk2kRdkA%2BcmYTy%2BUcuIHSeLLWzCEkAxEgFmqbMbovmpygu%2Fjm3DmU2N52lD1nkNNRrpB6rD19AgMjxtlFXGA5GCBugaMPbU86h8pQbtmohwM8auMHMpGfBAVn5IBH7MnosBG1OB7eD5ZUIMbpJjfF8LebXo182OxbU8Nvs%2Bp7sSPeU%2B8V9ecg%2FOVtSKe4%2B8PQwnA9wYxi5%2BumJtVc4JnPhudTIURe54occwYxyt4UEEZQ2oud6dBaILv3YbxjoGCR8gK33qsz2jE5iy3fFIWfWigPvQJydrpOiHlnrBZUgY%2BnXlRcnksZVD6VySGnPs%2B2mAKaBkQGZYtMi1UrmCdY9zthvm4Pw22EmtWw3bnkXgdT3gO2dn%2BmbJ6TvUQrgGj1891GyoX0sdGJKenHHGf%2BB7JvY3wnnhwMUFdy4A9FD6vGc%2BRLqxbhZyGfmTQ0no%2BGxjcpZHL90tBFNcl0Gl0EU%2BqOh6bf%2BaW%2Fnxha79ni9k7pSpCbo%2FA%2FxpuemhTDVs%2FHQBjqkAZc%2BZ2c%2Fbz%2F1y5vFuo3%2BvVx42n2dfv6Eu%2FStUPelxjo8hZId0gxk6rSL6Oei5ySXiKq%2BGDqtiMtcq4bLCGUPqJSR0kisCiKqsQx8vxq2trZnaATAnnYI2tp1vM99Tcp9gVaTkpxh%2FjeA9m50qAVnTMpWneuRwh2LU2PDJrZPTgbRaGOKo1BzasnbJ7r7QvZCY%2FsYSYaBHPlRaddVQusMPi7%2BDMTv&X-Amz-Signature=4cdd029fcae39dfa417a99acd63dd2d539b596af2d5a49388ff43fc58c59762c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

