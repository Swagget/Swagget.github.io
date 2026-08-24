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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AZ5S6SM%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T034200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDBaefCpjvKnlzFHtlLEQNPkzcNENmsUkOTQrSAgckkVAIhAPj0Ia3T2HOwUuMxUaU3e3OIN5sNAAzzrVwFwwMjjGp1KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5VxTNDhYdPiSl96Uq3AOvpE3TwhpXQJtGTAYhbxqDcjggTKv1f1Sf0R6RNaXa5OU0rdK90j5A8K8Udz2%2BOuSzsSycAa8xYotxcjGqR5L17Uy7HkehOC6yXVZ8LvvzfzV%2F9%2FTFJS4SJtRG0e6vRbXDH%2B%2BGgJqNPGbHtxW2%2Fjc%2B0vxc1etUDn%2Bshvt2%2BUOrX0mjdzeDAy4OkOAZWvzIdZ%2Bdo5WNamL0YxojRlYWYM2ADP2mo8jQQmCgqngzqsOJErIfYpse%2BEbDXAmOEadjofI1Ga9GEttz4fod63TxFCggjzY2aEM8DBz3y7oBT7jq9kl9tMI4iUSWaKiCt8jWOm5BRdT7A2Xb5lDKWUJ8pMivDbDJHqLMFdnq33%2FF7gYeCZzsld7onxt6CBduuiGbtgccrMRR7MT1Uo7mJAZPoWwsFrUP7cYvkq33UPopcBHWJ%2FmptbRX7Wm7%2F5uPYJhycDsePvK30MMlkpWGORUQsL8u7nLNiszqVHN0RStte4l76wb%2Ba5JOMYJYTNao4URVvlvdnhuaF9M1bwa5oiXmek8Mwomg%2FRbOg8SwgqlxaWGhOUXxG7ga8GMznhk0V8UMBH%2BbpaOUR24JGDlL02ZdlPD7W59fi0KJ%2FFoDvG1RSTR1A0m76TRoTGdBpFlQSTD17K7UBjqkAedVLZlk2VD%2BSQQDzFNsuFGE57FukL52V8o68Kbo8s4g0hoE%2Bupx%2FGWrLG245mdEEh%2FSwfWOJVrh9NASvmQDCZMygQzquFJjEiv1sWjkJocFL2dYOLMAuEkIfyXLCawvo4LspzYae8wILsKJbIv69axvpJ3zQxcKRYICL%2B5tRlsuqd3%2BP0C7PoKQVUSIG7ZgR9XSEP8D09ogROsYpCEbCXc%2B3yC%2F&X-Amz-Signature=6ed958e6487ba52373c5a9687fbdcdfd2e05685ce018c5a051f3a867a299af99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

