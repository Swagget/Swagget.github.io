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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDY4XYVJ%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T104706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDv2L5Dc8MV58yd7w6VAUUgMlJXzHGoV5yYene3FCR%2BtAIhAJ2p%2BC80eQR2UxfXj54%2Bk4y4QVJTeNGHM1y80h1iNXrJKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxplrE4xRt1Gswpp2Mq3AMgVO1tT3fLOoaCu4Z9ddl0CEmUkHgZsNzlylmaDHVFLooDRsjJpfKpoK9EnlLaFRz0OQaRwJDwojM6uK7BIeu5qX0zergP4nJZD5Zk1a7rWg1jxkbuZUgvXHsh8dx%2Fdhwlb7DNwUBxobIBTiPjVHrzhjXyrdNcRTOhW0X5bTa3li%2BQOoj2c1bFl5NX5%2BIUEEI1BHczElrWfjd%2BT9I6m3s7pLT3d6PhrLlfu%2FzNRNF7AlDD2dDSDzoCp8QTs3IZILFTcYIwyva8uDW3Wlg5Bh4hG9cYNOLjtqS%2BdXKekKdYktXRmmpgmdWeRCyxAqbANj8J5qyQlZiBnsPyj%2BmjjebcjewhmoQSx4zpPc2yOYYqRr8SyS%2FvfNf7P1xoR%2B0SQxQoVyYhitZMIttuW1mwSDoa3cm7JU1w7Z2DALe%2FNEkmeg7IIVHqZcd9sxrrUg7aRSFa43t8pzqwYc0tl35IxuqfF6eLBAHJaRFkOKmsv5M%2BMdgQONfyBOBw74PBWEr8N9saDE9If9JDVQYBwGfgRQh2ToKodY%2BjhOv6cFrUaMM1VLePuN4D8W01rwML9SpXKaGk5YfkxM%2Bm8Hy0KugHKI5SIJrnMvAFkBCM7ytpwDWOAOFbVO%2BZ2oXPGJYSDzDV7aTRBjqkATxP%2B4DiXyQ2LuOkBVPPzAHc3XJFwtGiewdoQPHO%2BSE2S0DUorXoI3QJJGKF%2FUZmztBP3EkY4jcANzepbTesRQGBR%2Ff7Um5LzxgGvmZp%2F4fyOFVmTbjXtGZCVas7Arjt4Y81YS5ZeFdinegWHPl50yKJOmSpcJxexlWDOBYaBM2S6FJ1SrTAAVfA68KWwQIMPNqjyS68WTLmPOSx02ym%2Bq35oMTi&X-Amz-Signature=b57c1f86191ee1f68cf0937bb121b93094a432adaea210f623658020cc34b5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

