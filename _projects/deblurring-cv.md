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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6I63UUY%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T185052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHT8V%2Fwq4hvlux4gpyAjXv26wpZy1%2Bf8EQMrLfCLrUW%2BAiEAmzmAFT16gcUjWI%2FjLjs6NCg8K81cNodeOHRtJwuiyg0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNEAsHKwpoQronanWyrcA3PKTGMo%2FVPZGTUtTKqzkqvOYg7TZxEquprsu8dtNb7jbXHUh5VWRYEDgH6hNLxKJT72ysEJmPAsc8WPrOpCIvU1LQUNzOqCj7ox2aAZe479oGDNMdW1%2BbEEwr3bdOAjllKiKKgrj8WQTtc2%2BUJ8gXAYtWSY5W%2B6tTDKqSYTFdqMfDO4nUMNRJ48I71bfkmkhSO2jKgTfl%2BTmVFH1mN4h%2FGKI0l9RoxQyY9PoROlRo6IFgx7r%2Fz5pSZdhSnQJbdbA5HqsYatfr7x2FaxnKDK%2BjZNfe5WXIkWpKezETbRm7kib2yD40k8auSPkLAgUZFe7qglIVUV%2BHDz6KzEYBJpSSb23Aj13lOop9rHkU8PDH5mAUCUAH%2BGosjzEUzzFr623dI296yPKcGjV4SbqVonOkW98mflQO66a5gDDQO5DAk5s19harSkmTbRPPWn%2FDWvcdEf%2FRVrTf16pivR63MItJsItzIre%2FdPIXQE2cySWRiPnnF3Sn2lNBqAX91eFpACioxOGKp80FxJ2nC9IJ25BAwaZ%2F%2BqJkqzwRdZSGDngz5h2ll%2F1QrjfDv74S2W6U6InjfV9AtVHc%2B049RFvyQY6KXwaUqs64SHKRZUKlbNEmYhY8OB1aITBGKJVdZJMILpmNMGOqUB7CW5JgtveW7Ptq8bVki15%2BmRcfA4UqQCoNHk2pr6piXvmmM7KqzOGXc8OEa6NoaZaGH%2FENlR65bJDDE1XDxov8UmLPrLLlkb1B%2Bi97qbMzEQfI6eqFpS3%2F8Tlzip4ZTwo62UsuoTpRz3LxtIO0X9hR9FPPRyclM8oeCzwSGY7zVqb1I4WY1kX1GxV05%2BuYC7VYh2BUtUQBhPd0hKFGzs%2B94%2FSMOQ&X-Amz-Signature=89524da2eaf64936d5b70e8370553fde9924ed634f144509f42287d575a63386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

