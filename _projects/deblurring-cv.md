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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2G4WFNA%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T085911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCe4cKDDp23TNkAI5squXdzUaCbh93QVa47lIQmGgiJYgIhAPgUTcpxwuIpa20KXUY3ADUGYkP0%2FPiDuvBCahmvhPm%2BKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5i6r5dmcSc02NQwEq3ANSxaYn%2FhCrtXebzTANZotawB%2FdV2MI2PqRMgc3te0HSLrlsQS5CsWSgcOBEUupKZqyZYvBQWaQeMt3Hrk03TCMRgVfoDZopQu3X%2BU%2BeSweAKCHO0QmtXeQVp%2BwPS%2FnvzmNEZ2Iro5ohjfgbPuVZ%2BOZ%2B7K9fTfgPmsAF7nH6MWB9rEvaMQzPGCUhNMNaBD8eVZ2UNUIWn7xMlm0f0ICg4hEXuP4LzNW5lsqZ3WVScqv2JZYC0Fnsnrh7AnlZEd9x5nrfkTqyoMo91tWq4CbukNSUd8Os0e2SsMfNwLqeahf6ZqPGO%2BsKS9q2YI%2BQIUHvOfKwaS%2FMpS0HJ0q1yyoixbc%2BaZD1eFWF%2BLG18LMNSbV4Z78ESpr3npOzbdK7QVkjbEuAfKRPQfSJMkCI3oO8D%2BwDR%2F%2FhkNGXa9C0AzjxFF4vu9Ir%2BnQRMmIPlPPQxb03D5%2FDfaCjJWuFK%2BUWd5SOjbT1TD%2BGlMnF%2FOcKcDHhqDvhIaCKwO0ke2N3J%2BhC4nwSPX5%2Br6KrPlP63%2FXhSal%2FuM9qsLuwpRjYTwcrhdZAN8Q9IhIgo50fTaCq31zN%2F%2BRF2rGzgWUZC5h9hd6NDIa8nYxiwUt%2B1WSs0opnuaZ51taAv4p6ylyb5W9anPPUDCG8vXTBjqkAYJHRE01MTHZ3F0nmnCIs4DitHxwjnd6QdV1420eY1RdMZ8XYr0IPc3dea7xxMvKAPvCkH5CgLb1TRHzxkyNiPQgLq7p%2BnCcYguKMsKj%2BoitvuTnKeIhaEFAKUBENcu1jEktFrTDLihNnF2euWyOrg2UsBi6mkSZyMGrTfNte1De5A8RrNyu3HTsfsSVVWYvFOE1IHC50tK8sN7nj4neuTnQnoDy&X-Amz-Signature=67f23c9d89e542a270cd418937f8883d101f6e99421b107df302a6bb5590cd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

