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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665FU5JPX%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T012527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDdfyLvZQPYLw723%2F59zSwYAC6n%2FmGr1ZJpP2C2iW5J%2FQIhAN0Mvr%2B4iaEsvlmtZLvROyLDDRXueYPk9WVv47gP5bguKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydRrXEiUgqshgFqgUq3APi%2FvTAS8LNWmNE9LrcgYt24%2BlMGgTnykYLVE0npxd9u6W6j7ZPCdZWlhTj5Rnwy6%2BTFm08U0JycpJs%2B4BCclke%2B2l%2BG%2ByZDuzWWsTFy%2FGxSQEn7RwbiQ9VMnbQlyeMubBzVHsJ7MCiFvHpKHxsuPeVPIBmd1agCBqiQX%2BP8By6iurl5VrWjnbSP9dYkkdcbaPPG27ULr8pJKsD7ducwVt%2FgwM0A8sIoLs8uTAdPtvyBf8V7pHMKxcWn%2B2SRZ5i6EYoSosm64k2YBlPJMzkecf08S6v0OEz2JjOqCpsTqPoCflf%2F3s1NTLH4In%2F1yT0SS1Yw6RNKhbdyfF53dnzdmggIwZjqo49ic5hCag2ST0V9R1fvtumHGpqBOL8R4QmyiI2vM4rT5XpCyV8CVboZa2PX3omWmlMV%2BCu%2Fr3IDWDVytDiFA7c4d%2BSkJf2piDUY%2FAvtqa9Fz0hDvumYKw8F3K%2F5ofJCPQ%2B%2B8e2pp3EfyzmfrnwHLkyRaz3YhvwxUPaWwnedNWhJAQA9miL5hqBDf%2BIg8JLqXMJGgbhw3FjeNn0mJwnnObE3d1gK%2FSDyGq%2FHiJx%2Bokb97%2FF0CRI4j5T45T7M7O0fQU17GKMdVwz05XyJhf%2FkDill%2FUZVE0aTTCEgr%2FTBjqkAYuwvrshT6v%2BHwhReJe05vpIo0wHpgkqzNgkcr3oBFuEIEoqEXKTraOUyu7vY%2FrdIu9XOzgFS6zKhVRI9M%2F8y96E5MvgxEICR0eErCUPi8Sj%2Fm0Q2bJfz%2FCKlj0%2BelC23o5J3jn50WTeVkA%2BS7%2BFAlbq2nOrOA3xB4vOnOrDosyx%2Fohj%2B0tXeSu9OP5pNb0LLqw6rXcqaDaAo24xfLV2hmWferyP&X-Amz-Signature=f1d91245279edf7aeda4e31941c094c461af8ca7a4c44a3eddd1746f97a02e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

