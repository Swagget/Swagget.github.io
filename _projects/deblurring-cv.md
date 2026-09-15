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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQXE2XKG%2F20260915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260915T231437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIAKet5xKO5LaXxdPzIhPtn7Ud3TMA%2BAHdRCB42WTdl3tAiBpOR%2BDTOCC52tiBsFwfomosTQrn0ByvMcEcE%2Fb5ilyBir%2FAwgIEAAaDDYzNzQyMzE4MzgwNSIM%2BRTYuAUIivJylnEzKtwDAEkkgH8mfmD4EKXKzcBJXdn3FSqJ58j4f4hIu51C2tdTxWaa2ulpjkbAgYSfIqaN1vTg64KwFLRi9%2F3OlSWUC9SD%2B2Mn4de%2FpLN6QUggMoWrbnwkJv6wZ8P73FDApgzh5Q%2BjTMjuePZUK4D6jIFCSPx%2FQ%2FivstgsRhGazpzg9KpKtHITxYGvqO0jPaCAnMt8LmDx0riyGLKjMLiYrH5ruZKDbCtCj7S19XYVE9mjV%2BTFkIxhXYEide8BQiHGKIENu6IZoK7ETNHpyBJNDeT%2FExK5nlFhOXqh7eGu4TiAagMn2uxjub%2BkHJgzJdlFl2yb2YWmdg98lxOoEiOchz6Ezc5DgbyqQqu6vzNUlxr4O6Uzdgm%2Fh2tRbzI%2F7r9NxoEP0YJRjC9oC9Nw91jBkHE0bSt7QT3B%2Fj%2BEHtIAsEgFzeUmNLOeCvWrtrC4cJmFfv1d8oKybMw1mcWGQsxoj%2Bl4eMWmnEaHAGfry8Lvd2cvb2jAZPnXkH%2BNqH2TwGlT41dWTsn%2BVXanuYNL%2FOE9NNAhFVeIEsEwToEhr5Rrgco2mHLHZKLv3JApgJZlkPb15ChyOZqYtYyf%2BTI%2FxX9YE4jMwYSKOab93krGuyHYgGxLgeMenJ4Q35jmfqjamrUw%2FJCn1QY6pgFECuT5hHA3rW3hEs4kQY%2B3yz38E7JMgOwrV50GgW01etMmvpjYpNjOAW8OCmtcs9hX47U%2BCU4X2ucejup5DwVI2JEkmRfYL6VyTq76NRmWSKoGqS7rNAX%2B208es%2BN%2B7FUNDUrrQIWTYa4n%2FA4OKCcTC7ysAI7g%2FNUYsjXu6fdWTakqGCx5XZUu5gwHZBYUh0j%2FyUJHb3kg7o5TP2ILtRRETJecOkmM&X-Amz-Signature=0e72dbdfa5a9c27e7a76b8a09cc777b6994546806a529388d7b0084f2771fe4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

