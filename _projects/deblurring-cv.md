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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATUJP52%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T062250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDu078IKWvMiXuyZno5kMLxFt3SGhXjdTiAQhDShXg8sgIgNfE67EskUYNexf8QSRzyIHM7CFoYBw5B3xV33sQCkA4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpAuP4%2BTT2ImWEpRCrcAz2RVXw9MPdbGTKlZNIcSIFdMe3L5BoG8e5vtLycaHxJfhzmhjt0XQQjHewfYOnJ70oXS7OUTesE%2BfRTW6z2pycbm4v%2BhgtGmfOccnzgfQS8qfiekICKubexTPvOwV3KByJc3vznCjkSjMMyeffqvl5M7Ji8HHQAgRDEhyFylnwcCC9M%2BL3tdLYMfUNJ5iOmVudEHkHR619FreUZRFvm7FQrrnuw4iBzc0AlTAPEqIP2yr0I4i8BfF3UNBAN4HiyzA%2BlwFDLDGTkSYuV6PjvbZ2PrZOWykh2cCQRGHpvt3PLmsdT4TKAUll6ktDoT2tONg1ZL0w0C731p3nGaxhGEuXdeHOi6PYy5nSP%2BuF2pkk9COHLT%2BFsjQCwAqTCy57LKF%2F7V9djjXPhMZEjfYqePDnkekTkt6JM%2FmT0pVWHqHHGX3lxVF58CkEEKI4E7RGkYLvgMysjb582Du83QMukpfwbWVOi9hIbS8HUYh1H%2F7JY79rEMdltOdwRkRfsJ%2BRxnGZ2jwSEJGUUNCVFEzRzFoPqEhpztqIHlm6uDknTss3BqWE2MkHJe1enzsETucIdnY4afj%2F1QgxUuBMFdqlUl%2FjFFnrDnYxIEfsGKQPn1IjdVFv%2Bd5F4WOTVngrZMPvTs9QGOqUBUFl%2FOG50BMRqA0wHrXfmlvee%2FEezUci6h1hlkIXKukInQwNlZClj9zStk6NOOcefjbxT15%2FGpKC1JGLaOSQA%2Fssp9%2BRUhDxb6xiVI7RC2CK7ePcBbVwZCnrSB0FB3Dmo%2BtPmSUmBzQBKc8G5a6Yd8tIzTG9lW00BFWj0WZOVXFZ0FE%2FcgNqFSccbBWV1xlw6Gpn7TS1GOFK4FoLDJZThtdTlr78m&X-Amz-Signature=6d3d8748808441818acd9788e1365bded7ed9b7d0ab59a3d81ec9577e4ec272f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

