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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RQRRMQ2%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T183842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbJxWLxcBFcb5G3ySH8Ag9Oo54NQVHFYD5KphIV5c%2FYAiAYLlFT%2B9NrcLv4k1Kb8iv8vKKGmPatPacN0PhyoXz%2FCiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzVkCvWVrLnuogU0yKtwDVdtWljMe3NqVlitsrSg%2Fv904%2B6Y%2B1l1mXGjYuPz%2BPS6OfxgzdajIZg3ovcTZdOMwuTBiXl9Ttb2M7eYQxU67VwUA4eRfADFtE0AGWmTWQUB%2BcRwlGJhisiB82O%2BxrrSMnS%2FjlUzuZKj87S9a5D6ZYNyh0XOl33FcloijGvJNPpD%2BC2mQr35vbt7mWBL%2BwojfDpcFznMvB1JQ1QHhaNwgr0i2aadCNrfvV6pkk8pqMGACz%2B3MMsqp9jGN0pgg2Zv4Pn2fVBS3MPwArkfPhMvYll3UaBiQYpmtDg1wfOxMfmUPo4FtXKKlDXr1btVNOs%2B9jb8KbTWC0pe1AZ2qKvgEol46T7yUigZ0e1lfcSG3jIlkFBJeFOqr8%2F2kRxoAH6CIBWcQTqXOHB7mqVOLSbbfg909wp8QjAze1Moltw8zOCAbmXhhymjvYf8jbCtEvZcr9hfxWuraPoYFDYfYb0AqvGQrCFWn%2BpijmuyKnDowyx4Ym49zL2P2pBCLf%2BWZMklaT%2FRLvIRbEzD8ldlneFnDzuGF0FSJr4bLflSAB5DzOvc2oASyfFj%2FG1tWw8%2BpgLcGlQwcjNxNfYw67oAVBfVJHysOgIzdOztuT1igvMLcelD1mmkP93pV7q24VEgwzfTn0wY6pgGfQ3exWZQ4HVyljmSHolpmfRPNnYGstd5uH%2BJ4TFaO3WafkuBVyjoWhFCvM3kXXcSfqfS31WiiH7dnrsS21EIhankEwt0WirM4F90qM2dqYbOxP7a8%2BYOT3e2kmU3yg98t1xhRiIIfLwJR0tdOm7AuayB45iln3%2BwbM6Bq9pY7da8783bhBAQ5XFo9htO9%2BS1ejT63dne6Kq4Q0Ykpl1H9948ha4wU&X-Amz-Signature=9d8bcc1a498c8c176266e07e0f04d74aea2bb0ade902a788f683b260fef0247e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

