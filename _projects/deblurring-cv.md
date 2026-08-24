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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDBAEWF%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T021428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHlXlVMNvUHSSpdox3uIlOFHj9boJEIoRyEyAyVLN4ZiAiEA4EFCOcEHQadaybWuBKqB3CbLErfh97l2EfqCxKwNdA0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGLtOXPmrkaTOHKvircA4T58TMbAWZDbAwpi20f8H1%2BlCCPurOOBR0%2BGSXy3nrFq730McZ4nvqe%2BF6%2FJNZlgWFHe4J9qlLA9jcMTbYNKMHOW3AF%2BH813sxhBV%2BD1KLalO13VHgZn3narrM7Eqp52jDCt3WNQDPO9ZY%2Ftt1TWE%2FoSjNY90jqLl%2BmB%2FXIgTZ1v4LpEHHaHmNxsQutExe477URbIGION46%2FPGcS3kbrFz9IK00RJP8xfHq0sqGuM0TuWJVX5Nyph%2FobLkrTihLXvvSzB6MSS3fRMs6ywF3w%2BKJXs7FIdx8IspJ6XXGI10RPL7yd4Ieditry7kcmuIIgoPrAj8aG9widYr%2BslzqHR%2Fd4Ltl5FtHDnGS2wWNEovcS3AKeWjpbtrhWi2JuKheoK2GWRvmo68IKzLKvcgE%2By%2FXRiKISJIabnyF3YE03IttG4i1MIrUYY%2FQ2iYb2nXiImvqhvwQ44uFMgJyN5Cf0fELsq0DNkGyV5V%2Bf0aN8cpGNc47usJe%2B6NKtMqv10jwaemLroT8xCPwd1vF0lp1nrQEmsVTMvBZ%2BeNYZuH886xjdT5RFq9tHjkrmyIpiewi8yIb7vUDc6%2BLUwsC8hLKZRhwXEaREJvc2LDGUMefpeRcoXflHCIWjm86VY5%2FMN23rtQGOqUBF72JItWFDqmSic0lOq8fqfsHCD%2BZvm9CFXWcqNcPc35ihjiugkH35d9uYD97A14GINknUaM6s1sNHF9%2FOHK5af%2FO%2F45%2FrhV04HcaQ3pOr3R%2BcbThR0qIOC9w6jikGfVGs4PlbDVqCnvbNgojoL0yA7eQjsJVoebWEygA35fBnezFJ7gu6xLMIdxYqkdm6%2FLiNNIBGJT1ob1%2F2GVo5BezIuxx0HeI&X-Amz-Signature=c1d5ef7677335d5e540298cd0eae366780ea930a14a1eb0afba0b9f013679a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

