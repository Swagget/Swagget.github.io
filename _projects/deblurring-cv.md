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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJI22DZ5%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T082303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B8rsPHSgO7K23PgFpdOuOKPF9igCS557r9i6m3iG0XgIhAM5C9rXI4nn4i1jluOwQkiBUKyyiPlUkWQtTi33BB4wzKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxan%2BFBvq0Ak9kbJjIq3AMrc4Ps7CF2bILLt3JUc7ls6czw08ePKTjZSIajdD7yhPyEHC7Hwl2nqe%2F2o9SPLosBRx6xkY5d7%2BoSP%2B1RJf88Idv13ISNUCLEAMVQdF7tR0Yr5jjTxduRqvbxuTcAfnAMbxRXynAn%2BoGO%2FtOyq0O7BDBCYn4hbhlXGbjApYHc0kvH2tVklMs%2BRDhJXgrtQn9kTPsy%2B2S6j4CwB%2Buq56lKJUftM8RryBBuTwWiDayE80DdNstkb3%2BBB0XhjWZTjNVqovORQ%2Fy5Ybu5o0Stkpb2G%2FcQinyF7wa9Rzm8Rhyv0b4w7IQJKA4cDcbhScVl18BaArSfrPLvRdYhPk2SXVK5DSJr5JwgTEy7aA25UWctrIaZAWTFDpjbbELrUc81lmnA5b1Fx%2BUWJRPz2rP7WLSHlz2R3lDbugW%2Bha93ieXTtUDS4ljtmhEvd5khf1Dzv2NLL4h6WzdVcp%2F2%2B%2BpnD8jDy4LXh822xCMChhlR1%2BeaYqqR4Uon9VchM5EXaf%2Bq4bXPq%2FcD%2FFsDxZw38DdSju900lOAh6Ied5y7TGI%2BrgFZ0Sx1vhuh6J3Lye%2FqU7k81BB%2FjcmwKD6hSmI0Fb4Rh7qpLlm8py7wq7U1eprSliBlPWqorCh7pSH%2F%2BcKwNzDX6Z%2FUBjqkAYk5xTwkmKYVC0cDn0zJw6Ms8UGHB4NX0kcQmBr7TUi7YknzHvEQxkhhx42a0bHs%2BZAKgD%2BqzmUv%2BjamxkH6JuwnsikXCgcS61gu5Sfa3Y%2F2O%2Bd0LrkWMIMXnSWh%2FuTYRdb2EaypVrEYeTf0FF6EKu2cra7qXSmy7yZ5bZNyH9K2leZihKinAvmegZqaZKtt%2Fv04EQGSvJfoqye6ulwbrAMw0uuB&X-Amz-Signature=51e0ba188b07ffc629e597bfad1da5af067510942f9c1f6600b8a313e0bf3dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

