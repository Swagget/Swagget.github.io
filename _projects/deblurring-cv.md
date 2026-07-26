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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNOCLR6I%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T155207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIE1zLBZD%2FPA4iqk%2Fe4icckFHwh0Bpffdqs%2BF1Pfu9%2FyuAiEAz0sraZD6fXEZ1f13d%2Fj%2FdFUF6l2hZr4t32aSnof9SKcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCFdC3zerDgrpBu55CrcA3RbwK1zATqvp5I8Yy%2BaxX%2FVxZH0JPvhbVSzQSGXOj6L2w9usENLR4NT9OVaOQoYCKnwKdeoJsSTHyW5MStf9AjHsFBFKaU0HH1Khw4hQZz8toyo2XL3hkpYU9cNWBcETow%2FXLa%2BRqjgRben2Sh1Sr5WRUbFO0eYVqOO%2BQSWoF8yBpgTevHNPhGwYgZVPkU%2FAmo3IoS9LhLdQrM2c1Ps7SHO7mv1aVuAlLUOjXx7tHH5lN9wJK12mQZulSB14KcI15Me29xhUlpqXY8mLb0rf9g80pJHWBoKIq4pdS4Cx3rXez2ORn1%2B5aMkEdyZlSzOyewmIcfo3nuLxwJE0NvZt8tqNdesA6VyaBgSWNdRKCMHrqJEJcM3UKcnrAOMiGVhXFmweYMKG8eesH7TBJHbl46lhjX%2FhWWnjy8qlhBW3%2Ff%2BgR4JdRMtlDkVcXAFX7W4uMhxox3SXAZowIx2pij9%2BslwEHxKP26GcTlRWYaWCQoYbdyzH95mK0Y2XjYJfJqfbLOHP8NTGhfisLIC9rCOrz1rKcojXjeAHBUVBHYy3XI%2FE9dGDLuSVjCZ9y938%2FF7%2FIxQ2g8%2FOYLayORnyaB1mN%2FJdPadqvZq%2F2nakADDK00cNF%2FFbJtejRkIUBhdMOrIl9MGOqUBXbuFboLB8ZXakq%2BNuRdcbU3ztRKz1m29p%2BxHp0BPrR6q8zYjpUDb7ps5NfgYXk28Awu4NxxmEIFPEAxm9rRCAvvYiTF9DO0Iu%2FPeNKS7GzbNnB7WWEAeI8lITzr6QsTrABaxiLQsIzqe6B63BQjpN1eokq61fIotHS9SO1LatDd1cr5ndJgP9evxKU4kvMFf0vi5bwy3kOwsftOB%2FKLlTaqHQEQT&X-Amz-Signature=4e73649256a52a032b4f3e8ebb5dc8dffb13bd21155b40680a9ac39ef5b96e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

