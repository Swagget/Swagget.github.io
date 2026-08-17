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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6EYFQQ%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T082809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCvm8eYz3Hs2CFsYYCTcuiZ0qgveMs2Qf%2FRlqj0h2gafAIgeJxgmHiTIQe7Eb7OTA2ey4KLjHYjQEYLlPv3WjaAQjIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMIVYy7ZqbBai%2B8fnCrcA7YnaUmPdxcCcxKNTYm3UNtx4UCWnkfEI1B9VNuuTXvqY1CYhNoN3bkmrBXb0HfqS61lhMKU%2BLzcs3cUQhkTwpYyjUVVRDzDka67TSNwbDZFsYLyCBP52r8arl2pERhtolIj4x6WLX6VttN407ntmb0c9CXO2tjiaRpj2Oh02Zdd9zALEf%2BsZ%2BkfJ38WFAela1nnuRXkJJyp9URIi1FLdhhXXbezfdkZLFnw3TMCGXHBHLWI71BfLX%2FleO2pvgItMvt8PY9rIMnJImqqn74m75RvGGx9%2FvfV7e68Pyz6%2FZxFLBHGA3t%2FuKk26n6TU6m7HN%2F5fZNFVUGci1vv%2BRsnWrS8idpggwijDge3MADKS4ZP%2Bzgzd31Bh53izBmoj%2B3mHUGdG2%2BK81NBjfiAMjJP7WlXv6FUgImB6l3fE98u1OznHKYD26IiQ84mbsy%2BYcH1gds1%2FN%2FBeJ5MB0fet4UWayALsyjZcv%2BgC%2FvFKdPqh%2Bj91m4HKQ7M4Uage6fVJ29tqVY5vPj1YonzZKiLh%2BC7FKeBDdy2hhnJEM8t3wfewrzEC6YJDH3V4VaNClkqsT4PB%2BNmZALQT6qqZL79COic03jSzKGK81gJX035gGVtb%2FwpHIn9o%2F90WpIStJX1MKSHi9QGOqUB%2FPD%2F5sywfKaGpgrytsPPc6iaYBNmTgri%2BToICnasM1egVDes%2FfU72o98mB0K1fKFgcYbkaz68yCZMBnRH6OXA5Urpry3DRK%2BKgjnccEVkCRpgA5fCJcTkILElSpESM4OpnzW0F9554Pd1wJuTmj7NoZ5CED6HV%2FhWIU8zq21otAbq3oGv1%2BOHU7jvRmlnAFCljZSdgcrQ7xqaXt0h1FahzseKCen&X-Amz-Signature=ca6a9c877c239646a1de4b26b8265061697c16c54c320c7179b9834ebd9dc6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

