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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YODP52OR%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T074237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg5vg715OtOpEYfASvu%2BVVQPL6PAzI73b3tPe6hxp2bgIgL87UR%2FZ%2Btm%2BKAzMGq7051U422Tl0XkGsNh0EIzcVAgYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCUnqB0p4jUMMUM%2BcCrcA52rqSmpoPQmfcDFqcQsKGiCOuCfErJ86RqEPkONbKX0Cx0Watxrw0r45yIN%2BRJ9UX38dCgTkN8mfC6txJCGraxSncHCL5hNezw79napa4UfdultqJC9vlfn5FpC4Ep%2FY%2BcXP%2B3hgCbyZHj8zOle%2Fc23vSoQqey6RiJq46v7EtdDT5IZv3MTw3%2Bw8G4vE7M4r08eUAVyDVjwLix9sQwQofuaDe%2BpPfocBj4sy%2B4zhKcIUj0Syomq5BAcy2S6yFCtdewkudxm2mIWrCT8LUD68qSHW4%2B%2Bul7AVrNYfg23oqPhQtZC3BrKJgfqw76gTepYnVAfNsxWF9%2BToNfk5jHMkqx5i07%2FnJNCu0kUwgnnL5XW7WFwYd7yCI%2B0j%2FZZfDQvFVzESAfvbuMc1mCsOTgBXU8C321UH7J7wIY1fKY5FDn0SxE%2FGKF9vIHUyrObFYJtV237s3WIhF7J07YH4Nu%2FgxlPtI2SFnkXYzr5iFQvSGjQ3AYrfe08ZJ%2Fxr8gNfcuWpL6AmkbUGMYbTrbAylfPm9dYwlwGZXSER%2FnDlFkPsirmzbtMQxzlzK8%2FyquYn85SX7%2BjHmVvyYtvy3fKHkU5ShjK9gO1U%2F08u3W%2BOhJirDVlpu77zXVkaosDVetcMKr439MGOqUBLgOfbGaZD%2BE%2FAb6WkMZRKN2sMJoPeSjRI%2FDkGPIMrJj95HD52H0k1hBPeOTvJGgK9Olgug%2FAOAK0BQtumVAlBO%2FmudI1vID66tQZIY%2Bau2amIjmu5iJixVePuBdvUpX%2BgobgifgJ95q4ocWkclJqKfhlLIDMl74KNb38%2FmOf%2F0yC8yksSyvJwSaBdqAA7do2Dc899cBsasGLfUsx5YC9PekdHHeP&X-Amz-Signature=1e3d50a220438cee65eaf877c7f699c5bac69cc2584f1654b740144c67c6fcd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

