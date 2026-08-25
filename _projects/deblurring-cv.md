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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGOXQZ4Z%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T021013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAKPucenFxhZp1VkemB%2F6c1Lmyjlis%2FeRSQbepOZmH5nAiEA330L4jVZECeNYAQddTQoD8XI3SVRzkt0zOrI8%2F4AE00qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkbW0vD%2FxD8JVZG%2FSrcAwmCfHiharj25U3riom0F7NKYUsqY7vfH04m0CE55aik%2BtYXq8w72rjM1J%2BAGEkSHyUwq2o0%2F%2F%2FF5hEF%2Bc%2FQFY27iF%2BL574%2BSm6BPmN%2FbiBTyF%2B75FO2VzVJbG9Vor8tB%2BZ8UQyOXdwO6B9YP0%2Fcb%2BfzxX6oYZ9BOq7JrrotpwDVyWAswKG6wh9RjEVdbbZGRSyZ7ewE5SPCm%2BHVLdHASNz541t58wJoT9Ges6Xs9FXb7wFlxm9OwazKMzKFBQksK%2FsPgxyTgI4ds5TarX1ua95PqUD0iIZGt0eKKxckWXPDQQh%2BwWWT6xguRdcbzQzOIWVnq9XWqCIDwuDoD8MZ%2BNucShBOVDE3iYvooma7dG6njxSfQgf3IFu0dIYWVDkgJ9a4N0Adnp5NNaAEJ%2Btr%2FEOZtaOmOQuTrZutopreGCIxd54et5gIhsijQgrGVpkuxdMZYWcHtfuxoCZdrw7sozTNdO%2FWWjDriHep%2FwaOnVor2fQhR0NViV8s%2BhOiJTBiUwHsM2q7xcSqw2iNdJJEgY6RwHfo%2FjUGJkM3xn6UtWViO5e%2BcqFt1FRhCCdosCMeCUUqRqBZGr%2FWxj0cmCMnQyv5xvkziPu5QlpwOp95NfO9LGF8yi8Zl0wdeSFfMPPQs9QGOqUBOxzk5fkZJAzL2SpwpDlA65b4nnZ96fOQR3yowZvnI0sDBs8rN%2BqETNXBM3UR0qWwRaha09X2XYOuRbSLuep%2F9o1OeeSBJSHHcO1wIMZfgcY0t1aUvRtb5YuImE%2BWW%2FU%2ByQXU1lPx2St0MQ0YWD93kRQzOYBBT%2FcZT4iDXbTZ7Ecm47SF7VpZxpviFCEraKdQ3av217YXW4ZCr36xkaKT%2B2R0zNEl&X-Amz-Signature=8aad20602875594d20384a352c8bfdc2d7c50995368468425bb22cae9f7a5c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

