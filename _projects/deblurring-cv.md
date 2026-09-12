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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJZM6V4%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T142934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZjQMlVJfyS0GJECCUQi2XB%2BLw%2FMk4U52Oz0H9Tc%2FCbgIhAKfv1iiUXpqMqejNB%2B8AsHQolUjxkA%2Fey6jiYWkY9kx6KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2ULsP8YONGfz%2FDKYq3APRX3XMV%2Bhzw%2B7xO2ftiqNg1sxsLHXbx%2BFoJOMBM2ijjZ%2B7ZWky6Jc9UK7GHQ8Wm%2BT3vhiOFJ2eXZLHmG73FQ5NgqZqTcfNRkkDkmaBdJpwxxuKSWR73Tb1HD9R5tFbPpKx5KTKITgfetups7%2BHtibdQ49BRqNHs%2FRIRN3xRhiTjpu0FgmDj41jvTD0%2F%2F95h4RAgz1M5Ypdbq0997iX2GLy9XbeaiP435W2dF6YBeI2DpBbueTrF0I%2B93%2BSxypcsLzBm%2BC8NNsZMxxLUcmqt%2Fu3rhq1%2FrUiUjfL6WsqcryX%2B%2BTMJ98h22uyeq6qoD5RjBLVPXVDbvT%2FDNIuh6xKK7Ekix8CaBfrQwIczUK2gg2g6BwDMTGxW5MvpSCzBe7q3bIvc3jqkbC39Tg6%2BDyu7EI988%2F%2BL1EMkcTcGjNltcc4IG1%2FCJ0npbRHQf3tHedRR2Dh9kefy2kZ%2BsRSe9BUD5CZu0QUiPws0iUvUscg05I7P8NfECGxljQWvKpktzzAX8ERmMiLQyKk%2Fo9LkFmv%2F9y7iHjcpL1R0QrtPgwdnt754YqERh%2FmkB586b089yBHjhlls7nkzCJViETj2tyGn7brj2AAvqBHIC46hTEGVatFeV0q%2FVAKHGW1N9ylVzDEqZXVBjqkAT2%2F8Y3fDe6kho09tNTlMepFG6vGFHfjC5cUFghHjtu7jnyaR4HSZpXNYWI%2FSJDPx%2BupbnX1oQJQyj5FyxK2JcJeuTKQfTqL8BwdaAMgo2vsvPT7%2BsW2Q98CvfQG1TQLWhSnPVfqOKBjvfjC6m2WmYNTyEWVz4JV%2Fterrt9sL0DAbxJEPFtH2qxc71OxYVt4USnspbrZu%2FNr1UrWizZO24h%2BqEn3&X-Amz-Signature=a1e69f3686f22ecce89813b1f61af74dd67c6dcda79117ef2377b1207f6d532f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

