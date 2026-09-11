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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFFX5JG%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T014245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkWChDM0ZpoEWqJ7QtctjIcEgPilFH3KuRjHyybKa0wQIgYMQfZqeEaGyN5mv7J0cnz1P1TYYQTUr5eczQ6Ch4iaYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGgxWh%2FF9rbuAfXmCrcA4CZfU%2BCqfFuD6Xsc4knAFrbTScxSPwjdJJ7JlpUc5sPu8hC2scuJsRruY3xfDFApD%2BTDPyBCo8jcCjYsoglJN9w4PtMsfmSqwnSW4xJpRR7rJQ6ZSboTxQlLZr9uZyfo5GvTd9iklvxMTvYN0Z7TeyM5dpK4eys0VGvm5eK4aOBT%2BCDvzf4aaF8sWHGrG01SS6o8Mn0VKqYk5AlbWuJQuWxMUNUnJg2%2Fn%2BveeQI9tn67s62ctSeiLIqnjF9tcQe7X%2FPUPJfr%2Fgnt2tw8HvWMsfrBNsJI4HWme1W9uLNdldcEmrPXswlwH0DMB3dHTFE345JFA1vGsD0f6H4HvjbjblqcDtqtt4KEzCGhl3QJMPa9RJZSB31w1LcEPGxtp8EN1CDKB8H6CjUmKItILnMRTn7bsrBWQSVzmQRsTw6QymrmCg8gwpIXskE14gS3uAtlY2ipiod5FIHJo1iiq13hklhREXViaKcW%2Bli4CCVm9aLRwYXGXhE4K1EM2i7UxTRBWbJDDo9eUx0v4KGi2o0cd%2FOSjD8lCvidNesB3irj6tzqecrNoKASfaZgdWmXh2xqdtWsdIsLe%2BX8Fgx%2FJnkon%2FvzTS3J0eVbUJeEMmjlDGrHerjlXDR1V7V2eDCMPDujNUGOqUB%2FQByL9ptIfqXf2WN1T43lit9MRQv%2BYFwSgig%2Fp4cg%2Fm0jeSZRAQBUM0TDL2Uhvy12T9tI%2FPYznORXu9SYjPTwV0TMBFWnI3gRQB4gcL9F0Vvp9%2BVsbYgn72NQslKp1erETLpfBGJC1mPMCkK0XhETHpapLCiTohVMUaOkkLMZ2oAEfi%2BVR280AEOOOinv75QdQv0IQZDCALGNarQtrbJJek5fU9c&X-Amz-Signature=8e2c9702f0453894a941af4cb1cbe3ea0a3997153c3af8316b1072694c96c307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

