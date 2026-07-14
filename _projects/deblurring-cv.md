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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IHENNKO%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T011217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICnWnY0u8rOBnPKm1g0y5x8N5yh95GJFqzinbe7US1qoAiEAqx7aJ57RT9PqY%2FGF%2BhmXsNa%2FALvFVDWyWtZ8KeTNxQAq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDGf%2BYO4cOMKMzdWl5yrcA6qSQOckU51lSoBXz7gRnb3%2BVhOf0jMmMeLXzHJf%2FunVT2SpFhnNUP47T4%2BbhDSbkBHvicBTf8IfrdS407kgemMuIOkKadN6m217Uzp%2Fimu4te00zYfKVdsxcqNxB3oiVlLWxhGaRHCda8mQHDQFnS44BUHf6jNP%2BhyVH%2F9EGL%2FpnnnfEHXvnVy3LQmSLhicon2ZNX2zLE6MOeozZaI1Sb6bEGlNaPSsbpPhYOQ5E18s5JfS6FwQnEJVVV3ogG%2F6n7FhkX3XL8V7NTTq28hCwYZ48qzlzxJcCpelEyjGnjq9rhFNAAFSxCD034IJBJdm7wFZjnOpD7rwgk5ZaycvUX4j0%2FE6e2XjMY06cpiUZPqbAX%2B1E%2F6pSvrXXmriYyzp3%2FKuCRcopqniO8VEt4sids6TEZJ4ThCQy%2FtTV4t05zKKVqptVpbvWlOfG%2FZuyyqRXMrZYdbuTvGFPXRyLiCENuAB9d1P7aucnQj7%2FJ1R%2BBIHHtM%2F3OULIKQwS4h2u9GeiUufUQPNcyRgrXzZ1LyWO8lAGKSIY8Rsd19XRlEBSMHLHq1uq5Y37naMv7MWQu%2B8LuoQ4Kuo%2BcvLVG3uEyArniArSroXHiqOKhlJ0il4eUjk%2FtFzOewvs7kCDBMVMIrx1dIGOqUBS%2FMCSV313VrPtdfaFe21cD8szO6lq1q6IKvAbnrHwzY6TQLTBp3Lav19ViXzdvrWBKXlJVWS2odCfTRd5G29oTus9hyl8ZEB1VZNvPHQNnnTiS%2BXNqwCETBX71TsPVJGGYORsK4djlbxJgCm7XmcmauOJ1gqXthPwzvnp41%2ByvrtmLyMKBYZU%2Fp1bV32HwiSXaj2FrhX9NgWVJktYOeRxdtWUwLv&X-Amz-Signature=d983b6df6994c8ad34e5d513a4ac88159ae63a3ad00591ea1d43573702eb7c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

