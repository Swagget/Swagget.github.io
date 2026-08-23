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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624THRGOB%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T042444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCde24qGUCj12%2BDlDXF3g82HWTadDG1SVQ9I%2FRo8Vwg1QIgIBbfloZCFEzkzuYE6uVuYwsVemfJTmDMrOUQ%2B5qqs0sqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyCX2qDR8xw7u4M3yrcA62c5rMlaXZ7bssl1riFsuTvdvLpQmfYrO4vv%2BWPgPX%2BIK3KAOVb24YfJvB8IzWUeBqoxoT1dvUyuJaXFFbUjQeZxhrJRvRwXQwDJxudiyTt39Hb%2BEndQBP5OEMolbXX2DoBxIXgc40CaEZHaz2Mc4%2BFu6jDcS9j5j3gUaC6XNkc2Jn%2F8m0zO24hvLAdSU9tyD%2FEfI6yiIMIFlnJbQxiS8LYElEiHwZM4ckGE%2BVoWEjh0dn0K0qVmhI5Mj22bbsA14viqh0%2BxY7Xxz5O3tNzBKsKNBUTP35JGsGoLv3Su%2Fa34QQObZ1DzyxQR2M%2BpjXyGKvUTpSZ1j5Q0A9QJWwMOCuQp%2FMkOp%2B2WfPlkjgRJfy9jF8guQq5wcgXaJ64QLmZH7m1kCn21kbvJi8sQ%2B%2Fa396c93ZXzDDmqUHD9lzp0Z8RTkpsBEDoBdRTiLx5bHf13kOBYngN5KBYXL9hqbr5bYRUS29nI5vsr8OJiTDKphY92Qdp3JimLFvqWAjXo9%2BBENeeC41YIImhPgGxfX47RFa1IypNctgyMDA7ImBldJX0RQnCLr8jyoddSoU1sHSH7BnKnJOdhJuxakZ29V4PxMKYf73BArNZ3m8FlPyYcxPto0m5THPYmwpp9idkMLi0qdQGOqUBEolrOpzrJr3F7gaKLqPEn0C%2F%2BrTXxYIrr67F1k%2BOFaEAJz0en20%2B7xKbQ9u1JLyXf0H%2BZOrAwnjS4f1l5bLLAUvHkw%2FUQ%2F3evuOCruPbmIIiodIFGbipoxVXaa5XlU6PIHtKUzIw4zfsLpsl%2FOHzy%2BF68CAVs0Qf%2Bg9sq%2FZU6Hcokv9DfLiyL13IUfPiMFZrlb9qcFYHQm7RKzm%2FmtlOj7QA3wHf&X-Amz-Signature=c5926751cf7cc70f62175fbcb000a0f80da3128c95525b0f58337aa5a96b0453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

