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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWLJHZMI%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T100341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCj94G4xKoDNCL7AO2uW01btrBpZOxdWCSW2Ht2KjAm6wIhAIOSq6bJrYKZk7TzSi%2FwZYEICpgkdAqZ8MSWwxJaHiQ9Kv8DCAMQABoMNjM3NDIzMTgzODA1IgwiFkGSugMUkyO4mU0q3AMYTpxfR1TdGLkAKCHLJTZk8pM3zXkh1bKpYRWzSf5gtQ3Ubb%2FDkU%2BpObvyv%2Flfj%2Fk8CZ5ezjF%2FlK93mc2OoLkpRS63GU6%2FgQ4%2Bhp%2BVILitaO1vBNohbpx59J%2FB2N8fEGfaS6oeamFmh3m6wMiSC75UsGUGBo2CMGBBHjstz5C%2Fq7vdRTDZDuW97oegeyMk8bSxnjecX4tHRB4%2BcbqqmE1njSYUYzE2vsugwYT2HqvJ5ozh%2FSCs1QPGAuEysrxH353UaPIJ6AS4TPvLWU1cX8n0IfqZvHaRN3I5LDiE%2BW3%2FKuvVMmdl16WNRW9eSX6DbN%2BKzJ4LzT%2B04kJmbtbJvU668dDcTQXYDMwSOy6mFl2dIdinixPOIvR6T0wYflbugTF0dXoOZfEoizpuNY42djeujIiKX1c%2FROvW0GkllXhXO9s5U%2BhxixiqyyGuYIoCcq2a90SgJwKR%2Ff9Ja02mzJfTabHadmHItGP%2B5BYjNacCGk67ZVnhFL%2F9qLTn39mMRJCMhZotCrd7wvSQgcysKlyuQDtA0GNSMda6QIs3RlUrh18Xwf6Gp4%2Bp%2FDJoDXvjszwt%2FIANrbJqA%2FzsHyAGt9q6WG6Ol8YjaSvidQR0UtrmJWwbKw%2BFAunqTQm3tzC15IzTBjqkAYPTX8EGMTz6%2Fk%2FptoatJCSgDqkEk%2FLokR%2FCmkDFlzoK1irly%2B74OoTeViKVUfAZd0kvfWuOgsz2QaNMb1aWeO3gHFDkOcntehfpH7Cf7BCmlA7v1VuuE1mftkZ6s0BQ6ca2Gs45BIrmkuzvBGtJDPUo2PsAWAC3I0is5PIgDVBtY4bRhnhkJ%2B1HHKUt6f2gUsvPRhnOYV6E6jWvcY1WnrBbdScX&X-Amz-Signature=d39d9c9bd0030ebd019be5ac039f11359306979e54dc362ed14badf38fa6f2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

