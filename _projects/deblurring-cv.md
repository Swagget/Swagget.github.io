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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PPULEB%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T215043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNK3qbhVqD3TAxdBoMs5ch1lV62ehzDqkfcxQ1H2LMSAiEAjFk1wLZtII6UUYfkn0It%2FxNDjoj7Or6PqbkaNbYuLWMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoxi71c4NEBT9i2CSrcA8sWdnTq73C5jHFR1ypk02L2lgMy1eZ6UPomcUDi8L69r4EiS2fnkoNxvdHWFZbvbcTe1kbkKIq0drDuiK7ELcLCi7iJ52Cuw49ZexfSUserjtOSvZv0%2F9w6JGfIbe1zaKZXGmS%2FVaRqbpoLU3x1Ee4Qikiou80M50SWPCtVF6wvvwyhnK8mhY54WFwmoPp4BV9ZvrIL7v75lGdj5v9UvtzLSrtWUVrJxaKzEdcVeER74N4s%2FGvaWjaejyBikadkAOxUSHfzKh4S7jR2iEu40Pix%2BNcM5xGAN5wRK17UH8ZWAicjpIeqBkXWnD2alhVqSnR61owSkNTtQR7MJRe3SZILW2iepcMRvqqu%2FdiNAERWZ7pxidcec6hIdy0v4C8%2B%2Fd3bg8XWXG4vCjD%2BGyqGS1GL8D3rAcotbR0AShpVMQzC%2F1q3B%2FyB42JQGH2NK75GzjL3vKREk69MCIfSv37evmHBK0ij3J0WeZXSuqt%2Bq7im%2F8DTdNiFa1OLfai9D0NBpqw8iku0ILl0jQP1GZ8iDrB8crd5Xq9FMcxi9MqsDwXhP6S%2FjDzM%2FzntbfvIZgt%2FvdyNv3S%2FJfjfePlYcB%2F1Ef4I%2FrVkJeDINbCETriWqTLr%2FCFhJ12ZTp9DWSBZMNblgNIGOqUBeuLxSf7NCxt%2FOK70jL5x04bjqjpuq8kEL4mG6ebzONe3%2BsB6WkaiASUrx6vnaVCxxyqVMOWsoweI%2B1BNy4WRyaMbDP0cGwDACZMlASrVAtjZWxosU37VRFK%2BzfWUWtZD6fEk8nBXW71FEGQspQFOg8VwX8QbW2zTmmF7%2BR768cjRFuyZbDxPUba1ovPv1LqiRfEczBgTT9lzS9x%2BTFdHIKxyQ%2F4W&X-Amz-Signature=e28ad99ae3c01ec63e3ea33606ba2a89352c5c00c8ab840c35fb1007c7dcd3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

