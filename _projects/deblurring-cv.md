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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UU4P7V3%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T232922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFklgC%2FBz9ORm6y0%2BCL%2F3Hng%2FWAwl2Smzd2bBbfeQIP6AiEAw0Enog7twZdWa9h23C1t6qmMnXxu%2FgYhSowCS2Orfq8qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfKt6kSyxwdmzOeECrcA8hNF8apcAxVaK%2FlKIeYtCHjYx%2F0h0U72StbDVHe%2BFos%2FOrGf%2FEhZWZ%2BpdW789sLLfw1xJ1pvJALsUe%2Fo6MGPZQhg20AjgmrUX65m5dcv2Mwe6UXnEy6qBJ6d3WDtrsR%2FZzi3nB4xaew%2FA0aJKs5y2b66mXYyMvemGwFKzCx18SKBvZFROCeOM0X6z3DcrKSnjx5sclP%2Fg6z7iJSRFFaBp76CA0FFPcKjkJmwT3oPoBd3PUB6WAgahgsguk%2BOtGZlHzT6aveORzVqN9IR52m%2FD%2Fw8olhFH%2BVx392%2F7KQXA2I%2FYzKqhhXzorKc7HverAwhLZFsL0eWhowWFBRaXUaPF3cy5f7Ss9XV3TfXTryzbWvW3iOGIecClSkzSRvpAyHevPhcoTOIJI%2BxyYVkudWLyXAGS3%2FaKJ%2FomACItHRClz5U%2BfFXKsoIlTRYaXA%2BLOYdvFMMfPbL72dwyYtKW8OZ7ITZsKup1QMxxJ3%2BZWU0mT59Ee%2BtvbY7qLiL5Ru75%2F6u9%2FHwaG2Gs%2BzgnUDekFPYmMsNcQo2ckmCSSBlvRnZaPfns%2Fg1DI6PCVG0fkrLuw05IQ1EhMImB%2FON8tBjDWakRX9%2B0Pqyk466wL0Re7jubbVLZOldhmP3qgnLgXFMJKwl9UGOqUBiSSdR5ptVNqH7GSkhr01Jcejm8%2FrG5LhISSDtccIGZYHKLyaEV8bP8x7nVsXoVnuS1MlW9T4tEmsxRGTCJTrEef5CT6iL3LcZHOo1WCpEjS%2FFY7VALbKSILySObDS2p7GoPMZTbsiw%2FK3CT7KKC0Fi5oUCQx9Bff2y3gwvT8eX%2FAEc%2Bf2%2BQOXPTel8PdjaQ3BxekLKGYpELA08lk3Zd2i%2FBUimun&X-Amz-Signature=4e1c08dfe2735c034627378fe282e1831fc5c0295522f97e5297e61e79e90b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

