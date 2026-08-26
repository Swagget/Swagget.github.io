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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VAUDNFJ%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T062452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQC%2BBkgY07uYZp3YeBrP6KC9s9LAqDT9YK6bXwn%2BS8rcoAIhAPWQIlOBj2N3FtecTju%2F%2BowrL7JaD6tGBo7z7A3HZwV4Kv8DCBUQABoMNjM3NDIzMTgzODA1IgwIP9%2FIB8gBcCoA%2Fm0q3AOvullmgIcj09byFKM6N95DXDBamKsEWN0Ug%2BBWLgDb9EDCxndfyShQEvE2v3GttU7ilAFptt08zYe7EBW03SXe143jC8j8ESQk1Qf7VfPdbYYCStN3dy%2BDTa4HkRDSTxjFDeWWh3EYXydBD4VSJEGHYn8sT%2FlcP0ybpxCIeFPxGfTikpdsOPU%2F0Ellta3Rha3ZuI%2B2TFnV5mIyaUEeSXEZjf3riqoYMVG%2FcURsC2sp9IA2PBZhMoVpu5FVzz1GmKEL75BDynklGaT%2F7edjlA5sAAuzed%2B%2FMnogo%2FrTT5lapwfPca3ULVOzZMAEcxSNEQerySFpHhezP7E9ChZaA6aA%2Fqrd80tDlobGwZPJ9yfoEucU5TcMBCbY9g5s7tMkd4v6QTWYj%2BwRlIP2x9KvsNrca2QMu8zwtMVSVSrRQ6M3gmUoJgxOLSMGnli345gJpZTHaqcj8QHjks2Y20I6BYELt2vjMB2MZIi%2FaGt0lbdWirNE9i7OWTOFCi7NHaQwoxg%2FgVixeyCeSjUJucLGLKLDx%2BuewvWXw6UgdRUFwR0RppH5N1yt%2FCQlhhsXxad%2B5R5rvRJaW9MoahKs2%2FueXTLMySAXwoAzEJtLlAbbXJON5SxwDfO1sAhhc%2BNH6zDy1LnUBjqkAbqCMmy%2BJaq4UHObRGdaAdwUepSZAQyBz%2BFhHTDVL3m6FlIwHHK64jZxltLVSrJWXJqCaG%2BXtIid5ZwyadYt67a7289Um7Z3RQ2qPrsP%2FcG00lDoIxSp%2FKu4stEibvBdpqxRlJVq5olX2bcL6%2BPSQZPh459eLbED%2Fzmw2EzM%2FvbcJZ8Q0JyBYkhiR7fmE2%2FdMDcfxjzALsthfifN844cLIjuCM4A&X-Amz-Signature=c661466d2bbb8d7fd6d3d0874c21b0f6991de1366a2105764b31facf4e67cb1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

