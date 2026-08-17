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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YFRRMUF%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIH4%2BpEh3tj3%2BYMXc3n6WyYHg6osNh5UpQ8JCIp7Nj5ucAiA6Oz2vWEBNV0kBXT5bKgbXXoLDWED4sfLRRnDBH4yVwCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM%2BhuwZY9lGaHjM78kKtwD1uxwfNQdQx%2FUFG7cP68A8b1Z8qBwgUbL6XpP56yBG1WV71Y0Wohk%2BmGYO3zrsd0Bo56K4TPL%2B7H0xy8oWChYg24ru%2BgDdb3OSvmj%2FXN5MceUSjLFhSBhAHdvpaA2L7872nP1IOgTGJNxQT3kYM9IhmKLkXscUaZUyp9dkJnovC0fvDe3WnbdXQJFeNbp6XRwvXLkZ9dsxJdQngLexmZ02BiM0LJ70hhV4CT%2BnnDaywgQ0UmQNwXAK5ucuTsixLOfvt1ndW0VrOMKLnjE0M5wrM2QAHSC2gXUFtP44UC5KILdsXivDU2cvg6UEeR18EegV4div55csGApL%2FPuaFvb6De9Fdm25CL%2FVVIAIoDhzi2QBqxr%2F%2BWHggPWBtobkDdGOgjnn%2BMT%2BxBmQBBfMUqYhHJLSkclSt9uDxOP1P7JI2fcjT8cdxecCHoAhtULAcBOL2LpWKeqodZWqAqYKP3uBspiWjA9pc3DFSM4Cnj5uE0PS0mrSs9eLN%2FD4p%2Fua2FcdGb4ZSODW4p%2Bn4LLD3VL0AoFAvmOH4zCWerDRn%2B0MzujxNRYbda%2F3u3E8jR28l3yOxJs3ymZiOC6fcRiI4wXJKW2y5uvxtw22qIvutYxh99PC5uK5k43PTiRcVkwp76L1AY6pgF08Xs%2B2sHA1DtNu7AsDnzuRzjkxfpHH6h7YOpBr8AsgfVfJR%2BCHMVWKSvOxfJ4KtQUuHg6J1U59jOFHetLDpEKpZ0TCgv4phMFYxv9B9%2Bv7dnEFIObX18NgQaxgPlkig9xRjlK8CzpSlzguP9PNphPBIurDHzpYVnpcKECLHXpdxTMhTtlv6COdvXtV%2F77%2FCdzz7UMShbkf4qF7W31Lc0YX2DEggwi&X-Amz-Signature=d4c0309da87eba8d48c437b69ea53a4626d94a3e4ec684369bc47abd68f38f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

