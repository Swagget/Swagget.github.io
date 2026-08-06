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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FPYLPVP%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T150345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGmv1qHwwP1yZxxf7OG5Hg54NWqHt6glfrVVEDjE9xVsAiBJ%2Fj8xMcCNvMx6HGtVYUx%2BarkyMaddOoyepmHp9Q3eyir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMrSf86Roj2OIjvFK2KtwDPtAGjgMc39NdzST1ZJiHm5lL40gEuABFl0U9QLCrrEFVbhjF2qUNBc78WPKfH4Ny7ZW8n1wbHZc1ISlx7fPAfoGBR400u4ENVBrNXb6hnSj7Ch1iSiBCvkct%2FU1E5UhafozNOtCRzvVIgnv4mtF5zVJvd9UwNr7l%2B%2BR4kF1tgk3QS5l5NQoR3TUD3Gg2SchnkM8MvdTSdZncI8qCckWLKK4rJRQe%2BZPW1Kvea%2Fz0gO8rHgd9Wu2IPjR%2Bqhf9LjmSX2bxZxjn8oG%2FVhGdEnTqISM3K8bMaYHhdkK2kCJofisymZyn3A0eyv3qt4IMO6GPKVhOjJycoUNpiA66GDL%2FVf4X7oRYkIeChwLT4CWugir1EVDS5rpNVRCnv9mvxkgMtTvh%2FkW4lb%2F2ysR%2BLN2fkKBaMZb06Y5fDDSnj3dTTnzguH0B%2Fe8Pqi9QiEo0hIm5eyYvFs4YK6DRhTFPeHP7SjraqCr8JeMdiXTDsJ0PwDqW4kFT2R%2FsdU%2BQ4W7w1mPCCiUNyJitiRWIkE15mgYOrdxqcJ2xXajRLlEThP%2BxfHYSPa4A4onm9Rr5VQk1OSGlYwn3VELOvB13i7RbSXhx7h65G3gDzc1BPWnn38beimlUMw3zqBEJQjZfYcswza7S0wY6pgGJ858yOLtntj2A%2Blt%2Biu%2Bm362E8BDbkTYGaS%2BuctzmniQFXdNvHONpktmnwxiMsnxlFL5FOwFGVWG0Yc%2FLxFUXijkOaRBDLvlHHh7nqCpe6rQpPLSjgytWe23gWI5pjFxzalBxR5rq5tma7%2B7sRMNBKHNyWcYtosM3Lox043Q50yD6RukfvDEGtl8HJsxw4DdzmZKz2lWvE818te4FQxqpQ7GS5agk&X-Amz-Signature=812dba0d1ce72c1b254722135fc0bf04757cfc8b265e1d667d2df8a447052404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

