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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVFQA7B%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T224539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIB42pDWh%2BNzzobREVCpVjLkzevI%2B2C9MGVudu67ttKVJAiANYepIbG1%2Bc2SGbiyz9srHT%2FKBaCx74yT81WdQNdTvoyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMHEdeX6t0mxQVTR%2BbKtwDlKdisf6EDGlRADVnhmzMZab5PT9QR3RKwD9C88UBjzUeTbeD2aMuW7yP5O8J9kGz0g3Uo5EmkdwaWnfdhSPemkV6xMY4snqEGTjZBpoN5JRcfNAh0vK2oLvGIZT3awrXeVDGX3ChcdkjJBc196MgtMnLRkwTdMYkJi7LfGyc3%2BFgwzNgm5VJlI8Rz1ESsqPyP1%2Bac9%2ByVW4WvnkJ2O3LsD38fyTeqwZGLJs16riQrXfpVFt%2FIuS8unIKzznYNJeOJv8%2F4dxFw%2BdwC7SSWLJSgU0S65dARoDYQjYzLhzoaWbAPfQ8qhkf89O0CEYZMvafwKTsg3H4rOFT3PQAMoqmSACNyBiU%2Fw825fQoXtC3SzgKF5sJr6TiXoiyPdMO%2FOFCwSfJz0dwH6NnYGIInCQwNPbUpRAlVRP7m50tIM5LWtZK9y3DeeL8Sikgk66ydnuChOUd0NasUb7r96nPkfTALjk12lyZ4LVAMIi8enwaBKbSFk3izlj%2F4SIrTou2UindJ2Ry1wxDzjwbTSdbJZMDhibpJZhxp%2BevVGLMfWGAdjJME%2B3HeErMQc%2BZSLAVb5atM1CLd%2BO7QfHc66I8mAa71jPZGKf7aG92wpjFUJXA%2FHH1%2Fl1FqRMNAXZobjAw6oqa0wY6pgH0fxTrRflpWgUckWVQTdrz6AzuMp7hH7Yle9xFkMlstRtATnRr520SgJCFyo6fz%2F22RokK2Ue8LoVadQLa%2FRT00SWm694JZ%2F8VbquT8S8pIzcc5R86gorlU0ZZvwYKx1jgQxi80sXWmkT0d2dTZ3o2j0wHteSntbhZhDOGVMCjfX4rn%2FtmZk4djnIdYily9Kx79z1hOdS2%2BmexCn3%2FvtnUcDt%2Fmf%2FJ&X-Amz-Signature=f548d70ed614f8e15b157a42b3778b5998af3c4ece3a552fbc7f7d01f59e5f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

