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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB2QZSJ4%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T012203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENfSS%2Fw9y49BlfDWOxLsOxDKxG5LKCKqEow%2BekENpFyAiAuR%2BhnwdkRj9g4gEsYfSpB%2FE4ejsozbpgmjZFp0jzWQSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMzmagdGB4RR5tDOnnKtwD9LpvFHTNxwAkV1wFeDn2sVuP%2FGRRE778yaCj9PRnepGABvfQ9miim%2BCPFzGdzzaskO18NwbDK%2BPW8guBlbEYBU%2FK1Y3NLb38cZtTW4X0bB72Etomtv7PUH4SP0zc8OQrNryObiopoR%2BbqvqkSPR2nwcDaIsJzIOnr3I6IDmM3evF4KImNoWDi%2F1zGjUpCgdNdLft0mIfWKtwRwxgL8hw%2FxiQW8mwxrIOHt36XygeOmm3GwKdnOmcsj2XJ1P63kwDQu4LXpI%2BmdKHTrneMeasBo08UrdNJB01gaLao6gPvfbA6hvCG%2FQltBwJrIgRF3NFzYTtQdXwiY6l808EVrycLiJz4ltN36Qhuljt7gnjXTU0rzYL21BqHe2kOQeNkv0MUi3G6kkdQGRCkjGpcUXLTkz5ofaZfn2A91riomR627rUasxTL9nOFC5KPPblDzPSIj8joPjsBavojv9gKWJMKH32otKgV8RfCkWsMO%2B7WYz6U3dSpqCJkTwbsmpJwFnZh84CPeodfXxOiTefSowS1GIh%2BNDWrCRq0fukG49%2F9rQt3BhghCeAbFhAkeY9G8MhJC7uMbZIDPqu6XMq3M4zYvPkldajqPzFA%2FuJlmKBQw2N4WskZYnAaYL7%2F%2F0wrPHl0gY6pgG0UccyHtNJ3%2F7smX5OZacSE07u%2BWDz7M5g1Jp3p9NbsdZ1Zpbiy2ELrYJh1S9OM3lC13BB%2FDZZqFB3pUwiJ4nH4QA1kaFSp3N6kYsgcUNmRX%2BN%2B6%2B27LSd3dOeQgIBYwoev9PjAFXU5LaHT7Lqfv1848EkthYuU66nWcSnR%2BsoHyBa7R%2BIcS1tw3EVe%2F2sL4q6wIl%2B0RnJHzUK7USMoWS0x01Xq5Cr&X-Amz-Signature=6c8ee80c0ea6c166b21fedf505948683caa748e26f321c5ce1be209af0ed205e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

