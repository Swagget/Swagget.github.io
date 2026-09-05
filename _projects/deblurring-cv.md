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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN3HCCKJ%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T062351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHTNksS%2FEFiYye6RmxUqdoW7P9GU8Fn4tvWl41iHqc0aAiAw57D3NcNuVplHW5Xg0xmWCcmN8qq5nRaF4PcFL%2F6xbCr%2FAwgGEAAaDDYzNzQyMzE4MzgwNSIMfMaod4su1QKbr26kKtwD5%2BW6%2B%2Bh2Zrbbcvx6vXgYF%2BErCgTvz3qMObFJVLnaRrfqeY6iCeYm3%2F%2F38cxecLKOaU3rMf1eGlGd%2BMzrlue7M6%2BgeVd8emaj8A%2FZRCj89zYoEwU%2B6l%2FCUvsKKMg5jSW6X5h3ZJ%2Fc8lJARqU6coBQ2dEV8K1N3thnrmRlUuiMdawPb6Ed37f8eLztCAErGIl2BcOX5h6RA%2FtZ07aRvQU3VU7zukLDNHDs2TrFbAOWxxOLkx1Xq6TkTkl8CV9FTzcYvMa6eQFkUrb38wepzNclSHYTXWjbnWOD5DG%2BA32QPXEFYCswJcQg3zsg1YmIzHJpthM%2FChez7gHhhhFN5KBzEQVGhYaqc9clU0yVR%2F6pmLpbIQGM5vBraCOMiZDVVZlCK1UXVoqXPKYvry7%2BK%2FlrZnzsDRD8XM%2F4URNTgoAmmcuZmpuoxLEgt%2F6oKhULAjYZWzpMQLd5WKK9oo3fMeyGDWw2NixnVRSiHbKbCNTJKyoQCZiYVlt5ZiwPgi4T%2BktVYm5xJVz09fFGX8yICgefp8sh0esJ8Lo3sDRD%2FxYt%2BD1qfi2c2nFLYGTQl4ewVOUsJzu8QrpY97Iz6Rx3bS8aPVNc2YiWM6JN9WHOz5crrLTMdDqmZiJPctOqi%2Fcwt7vu1AY6pgEu2XT8HTI57uZgPgZRc7PxopkdCsqQjzUEqaLtdb%2Byc39HmdFZSxKZJCEX8kKIJHnRMsnDzWkGlaoeY%2FeR%2FSNcML%2BoDDj0Cgq78f8tjwzcJKcuYKqSopBYMiaqclp%2FWqtMbDta38x2jnQq3nObi977DI%2BctSLDl2LG22NQYBiG71A23IkaWWSbt%2FcfyLHyNEhfOkNPhV0Tjgam6odLYE2uu1JjeyJt&X-Amz-Signature=431e441ab313c664e4313f6cd3961b6bcffc56c651c99bfdf4358bdb6423c4a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

