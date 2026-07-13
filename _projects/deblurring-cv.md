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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWWUNNZ%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T114751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCUi%2FRiGjnFN4XQ71d689A38br%2B3ZYuAHrgqStKo%2FDk1gIhAOPLASn3VuC4Vgb3JRDawDoy%2BVvfeDGQfwd6HxNpnwu%2BKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzaRcaBWMUab8Vl0cq3APsBhjmQ1bu0tVYeAAofUq8759kAzm7U6FmyAU%2FCcn55NEWoj3wRAiT0FbpOP%2FbILO6roByLMHvr7Dtqp0RwG%2FWhRELcWyqB0ZMY97QZlajZn3Ra7udjVVXReKq2cYZULQ1oCer0Gk3pv9kocmn6UjjVgkSEFb6vpfw1bmIJcwm0gsCtazQbEgwLEmcy9QUcNIcKjvGfSF6EbTGPPW0CV%2B6oHOhn1sfHTUwbFIYQUvP1weDnnKvOFdBDi3zcVI2VSMrfcJh12LHPA%2B%2FRwGd9QxPaeWJe5YSslQpaaJSsogw7e27OF9JXN6trOYyWUr62L5AsFvlDXlVXX9b3jok6q6Lhywvutxcysgu8O%2B9y%2FGE5il9pAPldcUV%2Fz1q%2BayS7sUgh1kJuEfm8mmx7dpH%2BRbk5xXLr8q0N3Au0PekmEOdlYrgv03KNO9PCB%2F4xSGP0TQPEZdj0nUveQmAH4t%2FbEtbqiMMVottHldG2RePG1tq7arecTp%2BEO%2FOSkLUdVWW6ndR53U%2FJuSOAYKE3nue9S%2B8UVKEKHX9DLqDTXGXyRy1gcony3AgMIqELlWKzPrsqw73H%2FNZLPGLA21eWIr4zGtmMN4mhCdsaVMqoSpamGLugQZsUj5MxmfzjeKOoDDT%2F9LSBjqkATfPpFeMXIOaPJmLSrGjgH8P3seCXGPdqGx5n9GaHv6lFGSYTgwNDz8sCD1eVA5t%2F7l0b1O1jRKt7KIlnPt0a7JhF%2F4obrJFtvezotGUtRJCSga7MvovRidV5WBKLUFnuC2dt%2BP8L6b%2BAr3ebUl7YH75KRXPwAD0qlfy%2F%2FMeihzBGE0mkUYDOvOp%2F8MhJBRI1s5hZTBcXa2d13eIhfnLzPeaSaPa&X-Amz-Signature=a39dab58b38c7aa326380f424b48bdbaea6dc8eba548f4b0eea74cf8747953f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

