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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPBNK2JC%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T124559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDexwbzrbEUELwbNw9uUkb6ukJkBAqyYp3qzIGAmNCZfgIhAPCQzZ8sUfwUATermTsd0eySggsuedZGG3mlm5MOKcB%2FKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPdpUpsNCGzzBoFIMq3AM18GGIftgJq5evYqVl9ZQN5wis3RmOubgxikakXfTKe%2BN5HdAcJiww7iDxh6Hrax2DInz12NAFoEMt6K7uFSqjHk%2Faq5XSJlg7qvo8MheU8ESrYb3wpIdEzqAQArpqY6F3Ab9Tr6deq4Ar%2FcpHJYRYRsuXx%2FkDs2aSB8mcpr6tYmf7gtg07XuU3Lx5XRcIr%2Bkqnv38aE2NdGgrSjsmDmX%2FOENElD1qu78hivsfgMumb4BIyZW1Eq3nwxNYGHPXT4OEuDHO59gsmptp4aW8VJGA7bgYDGy%2B9QcE6TmJEnfZqcZES%2F4fOSMjGsFFIO11gsMq9aBLkNEyo61Sm0mSDlfiQ0aqdaUO6SBY%2BedD%2F3xMJITmiPJyvKCTFdFyPQuE77aTpzrFWjwP3Y5ZMTj8Ro7rGyS2RCjp%2BoO4i%2BLWuGk0HJvaS%2FJ9iUKBk%2FsaB1pi%2F6g8ipIVOcbORaKyWT5HVs2NQq0N7NPIWVO9xeyORQlrv2GuLIoDI2mvcglmEt8RVoTjxPKjGEVatNXuxY236IuL5wVTE9bG7PWKqdU7YlIK2%2Fpp6dDr5%2B53mhroD2lpfs1gTWupL3%2BmAZ64S9cdQlG2jUgVKF2STQxV48BaZC%2Bm%2FaatWawjcrRqOSLRhzDA3MjSBjqkAXL%2BQLxYyx1vpo%2FBIwXSTJfLyfAzbwhoFuzAAXHOmk0HA77RC5xa9KoriWsXedOhM%2FMfIcw29HecMhD%2BkHfUg9m0LaBXMmIalHeRljml1bQyv8z9lu5OdZ3Syp7sX6BCXAJapK6Dwh7oKhLYys7nziTgl7I1KU89JQ2mDIQno1vroVNDsT1jZezBmLkVKWrjq5dCqpdpaTT%2BeK00kj2UbUWTJ7wg&X-Amz-Signature=7769146a2d392a94f775490ca9f617b2b8a7ba24052d1446cc17bc651ba75813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

