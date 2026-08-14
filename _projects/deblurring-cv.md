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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UN3DF34%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T183707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGu8KONGI1k0Ut17h%2BToS2FunTrQCgEglQZiLs%2BXB8eLAiBCXfEQigCM6iDOYtQdM2qtE72cvve%2BUiKCiJ15gt4%2FSSr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMLvOmcpKgH6pJ2F3CKtwDrDN302Q7LYpiVWz1KUDJdNP4ruSmbiixRPRgc4fn4KSzvWaRnpSISeJNUW9yQnLHvNu%2BYgDRAH66PeDe8XTWV1UA7bU%2FAof9VuyX4Nlby8nW97vR0Xvpo%2ByJg8LXEph0yQUjms82Q1cbrXLHbLAYBGtDIcsFHL7GBvLfN7n8us2KiCnU78nELVG2wHhP73PxbxOwMMzxRPBpewu5gYCbOkEheji6ZcU2Z%2FdGFe%2FCOd7LzKSHHOvaj7T0OZvLNFjZQh%2FEHQ27NKF%2BsT%2FlBM7fs4BmFPAkh2GDwnBPkChrCmcay8NkhLHdR6iVJj2z1PwisNZzwUqwD2uwrtB1jd4Z5zcxpepUdzj3SOFwSmaKefmU6FVZz4fRzxu%2BfzvnhC%2FcRjeuWdowJTlXcxTCKBAGEpBQBIxaQ07xaLeg3RLJFHI3AiiTrjXAq1AvgLmv3MApw9r3YxcouYAmJMtggEt6jRrUm1yGJgOyokIzcNsjWxrye6MoGWZznBfE%2Bc5QnCd964X6rj5cetlIcz5R9JXS5UI3USqq7eMHgPHO7ltn7OnNrK%2BPc80MdMg2sFZtgKXxyB4Tm51KqlouURLzli%2FyOU8nwUyxbYQ%2FR4VWii29tAN9reAO%2FtKm%2BLfpRE4wvLb90wY6pgEMP2jsK2etwS1xd%2BBJg7azE7bBnI1qCKgQGzeaPz2GQpCtI5pYgLSoaHT2n0lhBOYQ1bnL%2FiOA2rxXcxCYB3Imo77wk%2FJrvi5W%2BCyGtjY4OVqvuL93F2BL8h5xh3ANPDF7wK72%2Fsac2HVGa44cUFbhuaJWI4X0Ps8rEzhGiDnvKopXISfSiuYMY6jLCMYhxD%2BLyVyGtKWVMwT2HfmmZv%2FX9Frc40JD&X-Amz-Signature=ac435e899040ebcb1de25fa5475dfcbb8551d4be8ab5766483db66ca3d48a573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

