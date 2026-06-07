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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKLFJ3LX%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T235555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCljhLv5QhTtN7g1UOzqp6xnrwiA%2F%2BGRVwqVLXTm3cifgIgfB%2ByM5BLq0QDToVqqabM%2BJSPK3MDbf6nXFjfWwn0KT0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOv4pJ8UkDoYEEEsOCrcA6kn%2FmOmhdAErMY6ONn1W%2FzMX9x9wCvVZT3BeI0DJanHJ3%2BXaLSosuj2%2B%2BHNRVhIZYOqnEIvJqRAyfgw0ZdkzwkkglzhhQ7laQcCg%2B259VcyKnQ8LgF%2BLNwPJ8f5eMmCYLrHc4FgVJ%2BMw4%2BRc9%2FhaC38%2FyREgLLsVUJZY5%2Bx%2FImicuP%2BbaC5D6okaePK5AmKxvHIf16hV7zOlVa%2B1%2BcxVXhYUB3FLHA0UdaT8r0OMTkZn494x1u4j5R8SUi3EtgmMqMNrhCEWyVZZmDZjE8%2BijfuXOFjQ%2BXjDlbUVgWoSESOw5lGT6uXYx8CLC4KXTfMpsFAcZrvJR%2Ft44GT%2FnboTfOq7JRpalmAH43aojBURTVqMOuae97bsesl%2F6e%2BeNn4iQSO3%2FhxWi5TiSNyMIqW21OwzEtf8QziNRgGxyD3XryuDAuPHguZuiP6jwf0%2B9usVKtFfnbsch736sQYgU5YmxEXO93U8%2Fxe9rZasYorl22l0vGgz1g9%2B3q4t4%2Fn8GH1EUowGXvgCLpHW1GnODWLE519mHrcW%2BLHsJ7Pe3bJcbEt7KT0VG2l5bQM%2Bg7mMs2KCBwnHxHErvin5%2BAwHpOxZnrSrsDvAg7xtDGYWgen%2BXtT%2F%2BMTpEkHY54DzPNkMO3%2Bl9EGOqUB1CR4vJ%2BXAyiIjFGPpVVqkJe4zfV00CKMzfIV0UvDC4NCNXwxEM8FWQkJY5g6JLFEZqWv1NgDNmY5IpVHZXDfYG5JrW3VfGBEry7R0ojHC%2BqJMoB5gc%2FvCIvkCexAVMKJAXxQQkJRbRE5ZlYnC1TLux9i8vSxOVQYmkQcgyiQ%2FiGcZzgXqJyJzS0nr07TzbSQjOSpusrqRUACWldPlKQ4lV1oIPLx&X-Amz-Signature=7252c336b3d6302ab417f16a7c7cdced8cbf0f485844c5c85bc986424f527128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

