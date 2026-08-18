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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3AKPS5M%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T181807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbBsjwIA1JipsPP2V2jPMOWqyDv66Y68MkmSLnLSrh2AIhAPRSpjALm162FWWikPKjwFgxZrQfOeQGY8ZwzB%2FblZ9sKv8DCGMQABoMNjM3NDIzMTgzODA1Igz%2F6zWeiaI0WyISxecq3AMRllzQkQjp01ynsQya1Vy0M%2FKJ4FQstehBlp4CuOL8JCK6nxt524A4lesT4J8Fe9BizDM8F9WlJc0kiBQ89cPyLsCm8H9ql%2BdKcGOzhyPo1RTnL3m%2Fph3VihEe2lryrX0c%2BnZ0se5x8wGAj%2FzbVWaxHiDgIrsRB62Nn%2Bwq5fEo0O6X%2FjdAWMNXmXDTKIoPjyAtUZidcJFBMctWypiZKIc9tNrYttEGoyL6gvywsz3JaF0zqR7n83AU273KF2mEmls%2FIrVdMvg%2FNmXHwlrhqQacW%2BrFv9BUQkt21sHx0QZxdSSQIXkgGIJEIH6AQP3uXAPHLSkdQXI2pqqwe6ByI0eySsllqfg3aZtpqM43RZBubljQuEtI8F53nYRsFDOpkWqHnAytSM%2Bpr9oTdCGFQhwJP4nfIgx4X8pK7TcvseX1vISbks5xhjPHqtt3L9Q5D09mY%2B3vZxmhrRHtODLydCBkRIWGJubk78AyKHlS7NBDGLTsotXonATjcsAzyPAkpTm5mtwnGZJPZ1EAH%2FqXOVGhk%2B0EjrLuW8EsTXvxs2hWq0OzDNixMrlVmqw5KGnVIdaFx4LAyeYYTI7eKhJ7BTv7C1%2Bz6VSwTCMyNeb9%2F1%2BWqfqv2VGtRdAIrs0IGTCRv5LUBjqkARsWdgml3bOTMuyRY4QsDDDSWr6MWkAC7KkZEqsf3IznHV%2F428liwQ4BqC9ZB5DxzYQrBpkqgKQZZi%2FRbefqqNibQyn%2FPLwB02TEe6QizmToigkO4xzyYKD1TQmI3CR%2Fk6gKV43XyXchEE3eYOoTjoBY4%2BH8mM4QcdOI4UT%2FVW%2Fls9YZFQ4%2BKpOqRMW%2FGTixj6rSUMxiD4anWK8WT8oEjulUnhNr&X-Amz-Signature=e23029ce2c8ee2cc34e1e32f2bd50106957176ce2a23b468f78541739ca95be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

