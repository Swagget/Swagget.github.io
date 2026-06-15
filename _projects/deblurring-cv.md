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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V3FPR6H%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T153507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEIL%2B2sjBklTjDMRLBP0jH2fP%2BpEGjO26wKrTrrVAj3AiA9YEvGCXaHVBuurVSiJ8c2N%2F%2FC0hDVpcU%2FdajqDicgZSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMMOLHDlXZhfQ9W19XKtwDnc%2F%2BOSsX42MVk%2B4enFmehUNds8l73juYyE8D6gqOtBQ1bFt1EJNfNfZgeDoz%2BlLCxMENB72zDUTUOs4KjXWS7ikcysVul5DN6r%2F1ZLly9PAiENs5eFG9e03K33Df4FdQ4G5gEHh6HWlIhHhQcDA2gey99Rrs0JCIVKRIajFhSB5UTKogKWydakGd0h31YDyIdtrVbmn6OMZ5%2F2Ei7qawBuzcSAfxNp%2BXwFsZfmQypI%2Fi8hBcDXsfuPKwO3jyOk3dosDzs1rpXjVEJtnTuAaStOewB7AsxYmqn%2BtYlABqO9MFFPA2AeOY6zLxz5FKWAJUrTUaJHenomuaJmaqEdlYtgbh817vvR%2F3P7UB3kXjA8np8tiQlnD1OefB5qS6N3q3Mx5fuoCEQmXiWewJgsbI9%2Fr%2FI1ZDHE4YdaoE%2By%2F2X4EttwUEyRcO%2BrBMKAimx2%2FV7L9mOP2IMF%2FQnDhQ95Wkc4r9fl1Dnk6Yhpuzckw3TPvg6XNzSpqGuaAZoncgavbS%2B4LGkXR55z4MEra9enYUga%2BtD4gaIapv1hlelbgsBHzGUxD9jf9zF8QM9aVwdbl%2FI3OcrLYNoSL4PaCtmooKavL0BXt4qkIQj9ioCEmnXd48CnSI4H%2BeBnfeevIw6q3A0QY6pgE0hsUzo%2BHB71QP9UDCkN4KKvrBFfaNV%2Fj%2FkbzDaPOgilCLko61Xiu1zTal29ME%2B3dcdQInuD5mf9vvRkrjSKFFCGN%2BBu%2BFrqHnzwtknGVtVltutSC%2B%2BFkIqjhBtoGEMiImW6O02R0jjWl7qlXAiyVPWIz%2Bpa0sP4L7GEnVfnTTZ5lvZsJQ74LchNpXWG3MUMiDwpuQZDSEY30Sbx%2FwilEj36Peu0EK&X-Amz-Signature=f7abfaadc3aa48cede01736d948523a2dc3f845e4a306f09fca907719c5d61bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

