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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKKRTSO%2F20260904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260904T210606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCu37asYGOYqf1W73h8AvNg96YLDM63mpYOh%2B0FS99Y8gIhAJQ%2BALES0xsKLFGfeYnqSQ5f7MTizqReCyQy3QJFUfhuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0TaNBVZE%2FgUQ%2FtJQq3AMoDJ62zR%2Fiy3FqHjTtQm2AO93W36sHpGMwchtynyFesFda77mX6g4FZqoyCN7ZVyJaP%2BjUDONIaQcHHFZzi%2FXRnLXlIPUcYO%2FB88qCm%2FJCwW5bzx9iKG%2By%2BbObbRwAdQgXvw66ADJJRkhAQhDXgtRWFn29edcRsGRRhBVC%2B2R96DFcZ8Co9evyLnQukUtnHqUQALeY02BFkiD8g4Rg5wtjMGXxGrwNujm%2B%2BlBkLXGevobKs8XlvQV9zzBKsrYHGapPwlm6Kb6IAf%2Bod7EHEzmq3PmCRfExY1WLjWOBOcaspfTRcmxwBFwtU49OenMcWypXOJ1wnXGWFiiGnvu%2BROKnC6k5Qrr9MqDFliGTCjwdipN%2BgLfx4jePSCCNF%2BvEZuM63CLVu3o7TeJyXuKkHWCx43Pm3ufk1OxaxDsT2hp%2FGFAil7BIxXliO%2F4mq41jz%2BKn36DbaxL2CAKNE3XJUDQGs4L2IdF4hLrl%2Fz%2BLUaWnIx3b9dWPFIV2ahetmtvV3byITjS8XtRyxMVOlszDlEWKNulmqolTaFMgaObxHlQvW5D4DB6vx2ytsBG1XbqPiwOhvgNIRbMZrcurnMgfog%2FnS3zuFyxGo%2FK9g72Z%2BLkoNngfm3M100Y%2Bq8HHBDCz0OzUBjqkAfotAI8R307hdDI8r60R6UNHYrlIcHfeFobnC162zLAEdpS9Uy5GpgJ6Nlk4lk6wFu9M80xHjuSnndn1%2B6qPtcJDS4rhNCPN%2BZ%2Fk%2FPmEAX0IsMzCmbCGkWtvA0HS8OU8wbVlD%2BYqGhXaPeD%2FKtAYctnVahMC8zT%2F3iNynZ0rjN3YBfKmn0UYuzFsrzV4k68chUqSd0hapa6zDvuIcRHkGeWDq%2Fdr&X-Amz-Signature=361e43d856413d943d108795d61467fba4c4c263f742f4b5d9f8efd3fe546f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

