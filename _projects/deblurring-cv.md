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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJM4IUEN%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T142308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT3zkNCTVrAobyRwG8pwuh9lLp0HBq4x%2BtyjbGyHMYngIgXQS7gDptP2Wzw3UrpvzuP14KOcDcs75NZ3dAUrhxtl0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSfgLxIzty27riaIyrcA5NFPan13%2F%2B9wxXXQDmwubhB3B3w3SqMq17pQP5PqrU5HfwEBlgTRG%2FskRIaXPXaNClA2Yo0SmfUmmuwbbDJpLD6KwjnvJnCbdjDzY%2FJqo2gY%2B4aEjyp7%2BsaZ3O2fDrNlXTfJffllC279V8ZBXkMUlRS98ssg4xDL7PErVcqUgf%2FAO%2FioPTx%2Fxz%2FdrDoIuUG5ItCoxLLYHN6opnatoJc%2FnVQ3bIDo%2B0nfkg%2BB4pPFHb37E%2F8YnPASSygkK60OXvednJWUiFzv8jDmrNIQIJ%2Bp57OWhBfNtGn9oXLKRWxW9zt3at%2BBwV7VcuUKvOoqs1bvST3pN6GgcS%2B5hFK%2BW363XZc1Qkb8v%2F26BKozgtOwQqf2v8%2FQgJ08ymJPO2zq3OaR2foT0RLQj1fCjSRs1hlfBWeRd5VpKpv3556EuTpNxjSVTmyD8bhENEXGoaQ98iIbJENDIHr9MvXPve39qGWrbDBYgMO6MI3ub91PLi7kILu9nuGFn8BSRTdhskvM6ys4NDImxH5esgZtaMwK3eG6OtXHHLBxhQmjkwevMXDRW4HCW662PnwLnWqFG9GTZTzLncWH16Bz2OdBJ3KfViw3m%2FqAIvs1NCxmIMkCcp8DbH6eMgL3iLSbJIe%2BqOBMIfpm9QGOqUBOPHeLWzbF6mN15nlys3r4bCtwjJz%2BI2rolJmjME4B8nKBBrePRIAjOJxXRc98zUBPArEn%2FTH%2FwHf9h%2Fp3Hk4%2BkdHUHDGQEIOwRGFhfz2nwyP%2BxH5WOnF40hEPO4wA5Q4NTLI7DoGvZ05hFq33bU0XyP89VwtlyHYNBL44U1OKtNOGcs4bqS4hhwLVpF6pOSpR5%2BxrV6sMfaYE5rO5WnmXtnSR0K1&X-Amz-Signature=f0269317871df1458adac5c6d56b86f93420d1a4acf7df8a5ca5d7139c0e9e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

