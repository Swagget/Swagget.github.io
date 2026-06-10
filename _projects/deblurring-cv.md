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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGV5MLNP%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T020254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEqO4CT4BiwwVqhQZWkYs4r0uwREEpxPlLUuSxlaTiKrAiB6EXuTReoy6ldUfSYyrnLaAmOIDIAOCkusH%2FOivm2exSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtGteN2YMbZHFYaZSKtwD0dngTiBRGXPVgn8W4bNGUb1DX5S4tt%2FmOT1%2BDVl4ENSwojRsuqA8A3NfJ8r263ZBDpLiMBYL8i6TK%2FI0KmCvDXOYb2TynMOufzSWJktwtQ8YDrXkxMHpOHNje7CJNWPyP%2FzSUJ6JWhAvtCDu%2BuV8lbKti9qMUxRxAy3ltoagKMDzefRWze7cwZ%2BKw1DObRET5baZVVTzq4LwyLGiSGHwLJEyqymnliRc4dfSgrUz6yGy4qY%2B%2BvqT7jIhzqj0xNW%2BTe0PAwE4HTQNYgjYFAeS4UPp15Z5KFSc6IY05Tc0EK33qUOiHF%2B0cxIqdVPMGZVV1BGPzVKR%2FnCsWb%2B8fAZARdINCYswxFpQmJd1boEnD4b9XHRWZ%2BESlqzLuUmBzcEBWiwpzR%2FlyO8Hijg2S0YqtSQDrynFnIRwKg%2Byuwurdg0QsdYZ4sGAvCWBUI3dmGUIAc9NH0XQW5iSGIvC%2F27QFde2bLf4OnbkGUgKGn6bN57UDYUPIA%2BOip14Als4UsDTnZGOD30AukvFKxhXkX1b%2F5t0yCLgO7P%2FbZycCo5%2F82AsziK%2FMQGjGerZcywHgNvhw%2FZok%2BYIxtpf%2Fh2NGvkA3dCqGLr1nrO59w6scTUMkRXe3rRIiAmk%2BVSpWRMw8%2Bmi0QY6pgFsH11M0UOAMg1FQOw0ErM7rb24yh25jvzKgthDl7PVAKL5WfKYwBkVQvO6VaTWPNfEarv3rtV9t%2BJg1lexnspJlBlr2oXgMMQMdHkKYt9TNAGzLaS6r4lleDu2ZZmsGZYAKd10gvbWLeNwQlfPfyExJ1REoWudkL41Jlhd05jac2KYvdn%2FDXUxOMPJYEAT3AfR1dUKuL5UpsPbliAVqZiSNkx0pLJm&X-Amz-Signature=753406340b7fde6424fc7141dc6a7a761e4c84221428eb5e44efe478448352d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

