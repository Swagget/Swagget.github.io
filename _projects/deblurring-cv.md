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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKABJISQ%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T215558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTC6s%2BghZNO0vP0OwU%2BInJp2%2Bv8r1ONY%2BezqWCChpadAiAfF8%2BJgR5p8K1j%2Fzjk148q2F%2BWKk6%2Bg06SGgTfb5rLSSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHr6D%2F1W3WRt2XTVKtwDYZZ%2FuFet0k36QBddiw1OCw3iGmnzPplOi3HSlSun9Av3s5i4WtBzRocTiy5lX%2FNGZ8q1v8vraoMZf3g3J9yym%2FlbrOf0COGwYsrU7Z1dhb%2FPiC3ZGk5Sy7S2aaqM6B6Q7FFz9hCW93noOA7HIhhlGquhs1i7cN2DTpBriiNST5CgeKcCL4CH6DcuRR%2FPzhOpfiqI%2BmtgqZYAwRLvNzRyejXWwhDkrtaBPR6IxrigZQ%2BOXLDwYCUenZPRx62d6uCSxzimnnL7AyYNnN6VblzAWJKfH1jA476TSCn9adhWwnGFN%2Ft%2BYxZ2xip1gwSQJ5uzpWG24E2sI%2FzNSs%2FrpPljKaeYm1VfaP232KPE%2Bmcr21LISE1RDM%2BvyP0dGs0%2Ff%2FPhJTtPSPDGv7%2BQma0Kg85IaCacnhlrWjZfERFAr4OsF64sTHbDX7B%2BIRexVVL59B560a18jlmjTXrYCNOH%2BAnQi2OGNf5LqzqOCxC2WJFAoz5kn1k3L7SkyIx%2F1zDH3Lq4t7wp07i%2FFgy4Gxa2wDbMo0%2FBqpXkmnrM62dOadabtgV69sIMDB4TW1PGmIRa9tv0w6JB9kXictc2Oct9289skqhX6qbMoYoebOGCh%2FZ%2FQ7y9hxz%2FFgFdFp5qPoAw1Yi70gY6pgHGXRkwdV5OJmMNceaLIlN5XOzHgfINuAt11XGeKEQIQ%2FO5qYMUr%2Fi3gtQNguHPEVi9AgSCLqHHYIZJoSxsmqWUlI4y2xoERme50WH5nk5bNtBd2ZfiZ2zyCXMPS6x8NV74z%2B8DZ7pTuVZg4hhDU%2FE0ljuzP8sRvcoWDR1iHx8%2BEmyYdtYXXSVfP8%2FGGDVqoBIN%2B0dtglmWcmI7Fi04S%2FME3yGrJqry&X-Amz-Signature=9c1c6840aaa3d6cb40f0a4d1a2ce9955a0157ca27b74fb8c5ced0d0e9a66e36f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

