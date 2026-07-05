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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2AUF3A%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T105611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEzCKjIc6SE9UmXTBHYgXpb0bPQKxQy7GlT5V%2BQhC5%2FeAiEA1BLE10sAagWClXaBBGrJ3%2FtueJ9dve4CfrF3g0wMzO8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNsdUApz1srbKlGM6ircAySt4VmtdJtsZvtwlq%2BhLKAlHH8EiNGY5bySJ9ndM0ZdhWLmHJjPb6pPz7h1CWUcPAqeAA4Uxrn4L5xuu7rzARBi7iaX7CEj0wISgkAr0e%2FkTP65ERJVWuvjDFGdEYMtNq5NDQ4yDSoE6ZP2Oya%2BkpnrQUA766ZX3Z54s5jvJmeEHYcwQtvUYVADpeUiYy4y%2Bzi63BCU1ZFCOemV9e46fexvdqzroANafKIZ4IPJEOsBH4925%2BbGTF5%2Fm6Ky8oL7ajEWCah2Fj2vOdFwyed4hmQZqkSvWqxw%2FLiswdmfhX%2Be%2B6kv2J%2BkbiQxfNa%2BUBkl4rMICev4w0AaPJYIqAcnZ2Pr%2Fy%2FyiwP%2FkjvgRpAkeUvEt1LTB9gJDRLoQaCZ8NTcVswc5u5BztbOP6kZrFzdI7KY%2FPNnfZQSqJqmB%2BimUVdd8pxRya%2B9ZeLmobBMswuyIuqwT8fOyBHT4A2%2BEL2ZkGq0QlnU55Eg%2BN5cfXH4tMOdRyEQTMH4FP77meuxw3X3svRYHeC%2B6pPAv74vfFytL1YVVRZdA7%2BStqTleK%2F%2Br5YcLZqVbl27X8Q2R%2B%2F5om84wYJClrb3I8ytOWVoh66ZEfA1Q7VewMiYXDvrU5ZGV5Y%2FbJYUTZgm%2F%2BmEwRQpMO%2Fep9IGOqUBJ7SzxTJXN6KP76Oc3SHtCw%2FV2Lj6uJMg9SY%2F6nG8wvEJTyDt5%2Byua4yktqWgxubcwK8q6k7%2FC7KdkLooIWlD6bP7XGEeKTgoSNGwTlNJYSLMh3LysVYQcbVJ1F%2BYvrekLxrbE%2FEU8gJ5X1GM4pHUdDA3zuM6jkBVKMgRx%2FQTye8qTFvVWNt%2FUzvfCJAl4VVGN3V7UoQ0iM5gvwScnVyoHUbgwd9l&X-Amz-Signature=fef3e0ac6216def39627d8076ade91d2414c6f7cb6286aa39947223c8aa36b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

