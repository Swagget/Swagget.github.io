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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JS4VKGW%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T002930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqLMX9xxZa%2BdhEQKXgAtsXQd7GpH9FSWV6jN952yG7gAiEAiL0E0pcz2dZ%2BISX9kz6ADNjhZdte2%2BGy%2B4Y6XdgsRmwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCckTU%2BV8PHALL%2Fo3ircA5sPU%2BSPrl%2FswoY4PMQ35EQGIC0pKG3kmID16NiEpNE5waqSMoNA3y6G0DBGzWKQVpR4Xels%2F%2FOR64kDed5RIkOGETymSa0KWueINsGSNuaElp17ENWM6B6l%2BrWLqmaJg3Yb1JicCtc8bC4%2BJErIxCJHlvtMhO19P2yb3qHjaGYqqjbELB1ZItgnMiAnu8GUJk8q7Ok5bzF0nlqUvtbuC08%2FsepmEZJ3vuU68lfygVHXDmJN5uofdcglZyJodlpk3GRmz%2FO%2BmGVFI6jBTLB%2F6wW6zzKGRdop092jR3hcrdJ29JSUAGN%2FaNlbITS5unXRZFoAkK8U9CFHlnhOwOMNrqERHD6dOTmH7czmsUX35pcx%2Bj1vsjfCCdflZRBuiobvje68tZedMZFmSZ0zkyUm%2FtAmBmW9oHSiYUWydLPKhp4TjfC9OTOwiflIzlFKD1igqZWJ0gqKnZemC5HJc9%2Fi7mx7OihuoJpOHB9%2F1U6aR7SkPU8RYeo6MWXVbEwZy23I2qSmcWXJ%2FlSp7C8U2wE117lg3rkqiSoieevGtF0EhD2C8aefOANJEnhqGymf6al31wGLd4gHW%2FNeQQ0vQxmqh65xl0deJrPrFOk%2BUR5eK%2FZIWOcqr0ZSNuy8ttVaMO%2FUk9QGOqUBGgTuar5dTEoyMux7QvdWDABfvpufUf52ufkDAoEohSz1nLm0i5oAc%2FdMPUwfwg2XhAnPPW5yHnLLOUYBH%2BjJcJkzkm1Q%2FmpbtYgGJA35rrtiEHAaYTX5ZsOKsWaqcBNK1xA8weiIrCQw%2BZz5efejkEN10Xll7vAFylwynpxKaz6vZ2SoWA29v7bO3HV0G4trYziB0aATbVAsQ%2Bx1jq8UJFAjJtNM&X-Amz-Signature=e4b2af82df5ff5e9b5bc0fc104970e1cb6a6bc6d4133f1dbce0c057296c06987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

