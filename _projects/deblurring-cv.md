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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V24PJ6M%2F20260904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260904T151536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIBc7p%2F6hEP8E3hqu5X5R6Pm7oTQpY73i9Mm30sV5918uAiB8m%2BUJh8tA3FhC8qyodidBcQdbCljGYJ%2F7nabQtZ2HWSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BU74xqWGkDG8I%2F19KtwD2Bd%2BrsXdNg5fc6%2FLMvpHVe7O3soWTqKaNgkdIMd0sF6FZuUGJI4qn3IWCnoYBxOUMrB37QKBv1TwZuQtMxHksoeePjLBMIroxVa2L3tk4iwOculUliO01YNN4CA%2BSzuEGBBPyLPlUJEXu6kjVXrcQeAydlDTyKp1e5oymCx8sZU516PbgiYPRYgnaWE7Z5AwmLzKon29kv%2BYL%2BXHJ1KU3Wc51lxVsr%2Fma3rbOHxPTtkxw2VGEiwhmqhsUNJ0B62SM7Q4hck7c9koEa8%2FTQlbgAP9nfI%2B3%2F9mLNsJqhztD8bcyAZM3QKgf%2FANRcNpGbi6QWpT6m%2Br649thgjTL3OGW4I08FAI9U5EvVanNJb6bzLfW5%2Fk1l0%2Fo%2FVQXmrmz2LaTXpkhfjZI5DvCcgFullAM2NgUUUtadkC8jkxSfuZyL7p1D51Bd59rQFlNAlI6zl3ecweKTuabDmy2rYR5SaFhyI5gWNnirWCB2ziEPsIjRVVYkv1Lz1faG1KK2Swhqo7kccZXvqW7QO6hZuI8yvitF8lfY5UhDbNVdKh7Ogk17JQl0FUw%2FXpzXrzTKpgEEWOcA3xl3oKVgYx8oYGDxSfPOqWCl%2BMM%2BLDV5mHlUpL%2F7RZB4USlGbJoAp40HMw0LXr1AY6pgHfCVTOIYg7zKPdlabIsohexRN7XdlKv4tPYOfmV9doPXLhrfzJQmH6siDyEWNuuMALHw4NNz3Up7gJmUiySWiq5Q7gI6squB2aB5x3wTpV9%2B6A5NOyGK7s76B6rVicNAGSxq%2BLC0D7y75zAqjHjgk47LYAF4Tnq%2BjCCfgaqsi3LBCwsjGyK2M4p8y727jLHRjh%2BDGrJxi%2BHsC5nNjSoAItIIftU5zt&X-Amz-Signature=3bfc3916d27a0277470ef216ddbd195115447701730cb8105d8d7ee137413836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

