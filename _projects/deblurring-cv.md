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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIAOMCF5%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T141505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIF3I9nU3tXOGeHUYfzDT7Dn48GsSVRfkRN8Qjuc76%2BvqAiAcbnqXhY0ZNg03RLD9o%2BhG9%2B6Si%2BpOAMBgSxnvWpJXAyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqZ2cDOtLiFEbY9Q1KtwDjyseH1%2BQg0qeqZRZcEsaAb4nCFNgSRUImqru3yMUm%2FkW%2FfXLkDJCxXlSNfADS017Xb60CiPr7qns9uramOzh53LA3BShc62rDdJYAN9zjoeCTNp46CNFhNwuuujFEc8oVEd3UPAgZ4Jn%2BlqQW0LPnAY%2FXP0%2FvlGeCvV8ZksT2Ei%2BlnWcopkmq3kiGAd4T2IK9bb5G7tAI0lvkNZ2mMahw%2BnJnxtVkglXBPW0obpIKcnUO2eFLWW5SsJ5RG9d4xFDUeu6mZ0hrUNu0VJXF7kRxKeX5MdVcBD4BMCHCL3uMhlRkNIduCRY2Ze%2BhxER6HccOdLsqv0UFk941BOcZ%2BcfqePre%2FDG7thlCPRwbRMfobbJj%2FIouD1rCmmGWIfLqN1qBfuAIWTfwVm8UHXKak3DjxLxnQCL5R9rLtWgRmOHeE25%2FBQVaWXvHpBk4BEIrmrmY%2BK18FmHXWxUncXF94BSQH%2FPCVvWLJRlUPs08K%2BvlGItDSagmNairuLssHphUCwFYc91X36uI1odd2eVEdzPlNWN%2F42cuAAUQzSmLzSMOw%2BO4A2KODoIi20QhOZIqLXbz5ep83m9A5%2BoHFHUPnKwfbP53C%2BryGUOuLQdPdeOvojD%2BiO32lhYlPdTSzowwNOl0QY6pgGgaSb2Ist3gmp%2FQckL4ey%2FJEpc67BuxiA3L2MK1DbkVebcLRzKbKDbEIOl5pS9f3vwTyC7rLXeTuXuFTuqaUFb1yrDx05EGDlFf%2BqtKjzloNN7do8LIQauqqM3R1gfir3pHmJ5tr%2FZk5drQTqKH5FxCOAOUQN8Jbh%2BID3j6MILnVWpTN2bHatqkecJxN%2FCvT9OGy7zDFhFH9BWys7%2BDS8xb5BFQwHD&X-Amz-Signature=bad5dc648f3c9a104368f824edf12d28fc394fa1feb891ecf9f927d6177dc3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

