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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWKZQBUG%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T073355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCtvT6iDPmFFIt71tTAYqYhHlCqaScSQK6l0zRLxatZ%2FgIhAPviv9%2FzGcZTwa%2FAGMIKYtSj8G6mxg7NpQTQs7an9dfVKv8DCAAQABoMNjM3NDIzMTgzODA1IgyvMwZxhbyS7hIgQcAq3AObLqyfuld8TeafS4Gvk4reFAiNB6IvHFnaZfAitkYDggXoBYCLPNyy10fYW4e5pF33s5a9GHYGKtfc8BlwZibbOmcb6IUE96kFkipf8kDNGQig2gGaRHI5Idn9rb%2F9hEJ%2FxjeemX0tLtjf59BgmfbACPOA4cc66HAcJWoCadRo%2B%2Fl2ohC%2FVKS%2BcR4tO93qmSuygkUv%2Bl%2B0hqrLPDPm4m3YlUn15Q%2BKs9Z%2BsdDJJjn%2FcguoGS6hL7tKOsWA6CXHikNLWSbijkqRroWOx0opkcQIIxFcHF0isHY8iClfM0OyOjg%2Bbv%2F02266Q0b4bkOysOM9RAzYTRcjH1Wraealtf1wtLxlq7oYP7HpJRBHPnxL7viNxjojKny9yWgV%2FO5DIiwgYUkknj2dPE0YXqrXszuqP1NH6nhPeTQFu0fN6Yp%2BkK%2Bd4p3kCfxXhEirFSoODzbKOGujcbysSL4BZGyyka9DCIIzkQV1vfBWMd3zuMAPkQKtscF6T9M3w5iE1aODSkdSKbmT2l26sQJUwAnMQWhD3nuUSp%2FGKDneDF54wdXaD4QPoohsUNkCVXK29NPaEFJ4Z7yPvpkEANSxN8sWqxx7z%2BUgIBTu817JZBZHKRIsqkPu2F%2BzKYbV9IO23DD27rTUBjqkAaFdG1MNwxSZGEORL4ShYIPob3bchJbL9nDvUkql3nqgXKm7B%2FvRYQFSwBPqPwcCSxLvZ1H2fTFMswWbx9HnApoJXxz1dKu0BDxRMrOQKFxfWUl%2FtsD6EyBdOt9vvswbXcRuJsakkojYPUwrKjb%2BxxlhV2OI5jElnn6ujJ%2FI%2FF0spvo%2B2PfeTN%2BMoZBzDnaefJJCrcHenGPLPHWTsb6m0PZmnp8O&X-Amz-Signature=c7f52154b4d55975545ad631c4a8b9247d11fdc189ee8ceec5822bbb77e03dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

