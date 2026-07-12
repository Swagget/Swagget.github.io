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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCNMH7Q7%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T223525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAzeWpKtw0WqvMVXJFBajNNYXfB4zvKQjaeRHpYCHM%2FhAiEA%2FMQoQad23yV62KFvigAaNosVxb3v3eeTXKNgy8%2BDGs8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODP%2BfdgwGyp2FA2aCrcAyBwpcmGVblrLulS%2B2X8CAh%2FoceNZkb%2BkC3Cd8e1OChI%2FBkVTzxR2%2BlsfVWQtaXc%2FMe6Mh%2FDdG%2FclJbQBIYXjt9BitPI6XuT8snistQgTe%2Ffwrl05AfQ9HcTqqKkT%2FMnA7tdQH3iNgWYcUFiCIy7bIjVqH91LAinB5Qc465gLMKW%2FcUsWWmHRxNQtxIczYC6rokoq4ZgQfcVrOqw6T8IG9h2l5a%2FyBwSs4T%2FTraTocfu7sTafMmrlSHeNNo0RdbebB1nUzS7%2FczISEawZuncw9bKcEcJnSjq%2FNz39Y9m4DUJt5hdUwguE9GF6UyfhjBUMKqBhmWMojNMuo1AWTrBO%2FS%2FwBDRgZ4vHGP2F7dbz98%2BFASFuPozj8ic%2FOHzDC3xsTauYoNaBGkRHxVGY4JnXkhcMHNqx9KiA5zuxq7Svu8XJzc0AHbhK%2BdUpnwEwWX2e24JGO8MLE%2BC2dJsYSefkW27R5KC%2F%2Fm6GHPqYrXf71CDAOou5Yf9sz%2Bl02pCkOvBka%2BV8tq9w65jmfCX1EhB3BCJAZw%2FDC89yq7ihSbFbxGXs6mBQrStRU74hM3ZWxA%2BJoD3ujpKKoRc2dh7C9%2BpDoJVasYvoaUIyQQsm7DPoB08InxFLuHrQv3Klyt7MIXxz9IGOqUB8l81J%2Fh%2FZ1TZdl36nsEGwG4hGLsL4wEpvtU8iGJjTLzaSi2Ryqw5i%2FG2X8UjtxiIUI9k0EkLBgPgaGF3N4rt1QT0qIfoNMLl6sSlAHgQerbAyEBlxpcx1JowiXC7c7v5IXSt3GQRpYZIFf7TYhDoOGWJ8pPGykCFV1jsRAa8kwQNTTRevxYcFikPszyocR9w81auMpJvjFa%2B1mutW3EWigd6mG4y&X-Amz-Signature=d09a74795475d0872021b978e3a272023c65f5e60184673956a0d833f8d91eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

