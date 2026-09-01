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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZAHLTN4%2F20260901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260901T012859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClU7ZQhRhqLFqJLSVt%2Feg%2FvY1pqL2pZcERgFBGQ%2FrBpgIhAN8MKY%2FbPMABrAZoE8%2FIEVo9%2FLwocMtrAtREXqHFWLIDKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzuu60b3KrBC%2BpR%2F4gq3APCniFfWbNCGdluxK2qlrJm4JfIxDvgS6XXxZrEyBS7QwcfBCU%2FWw65kabPyRzb0saoQD7HqnxkUKzu8XuS%2BUdN4nUyfYnr6mnIdMT9aj8lucZE15yiCySRzCDDQxM0w64jZiPdZWzi%2FSGoQZJkfjTvQM7aakqyj%2B1fGcqOqIIC0l8FMB3qv8TZREQeIGZoFv0wbElHbGjXKsF6yOKpmFSuMZ9MtxDNZYAV56OlIaPGl%2BL0sHlM%2B9KTaHuNTX65BeUKZxz7hMsmmQkaPUe%2F9gPoFlsYdt8EUQsHqo7CWhWkFY6zGiWrl32dVNvmumSUYwFEbosnTM8XQiwF8zMa80GKqNRkU6kpPuqT%2FFL1KimfHLcUuvgkSO849pR6OmJL98Ywt%2BTkrA7%2FPhzoOKFBTCWXtXCXa2FsY9VmsMXzfDcmRpg5f7ApsDvA%2BHYY0DKzRFlSVD7WW5hsJR%2FK5ZW%2FI7WfCRAQADkDtxlZirQ0aRXH3FeYfSlvv6mQbCFAw0O%2Feb9x72GIKMhrPWJuDv%2BUzxc9vqATVpdX%2FEhzz7P%2ByAHEUuYz9eHXsaUPXEPrGtaC6d14C86UE7yq4qfQ%2Bv97OjCy3xLqGE9CVpLostuPLovfJIW%2Bf2kkizndXngQFzC9hdjUBjqkAVthGi8jJ8FpolvyYadv1Ew71gN6ihaz186zZ3d79YeOZM057wzeT4w4NN29%2FmGp6qKktsjuxk7JT4NkfSsR9Djw%2F6Mq66qZJHOFlCR0U1mYR%2FiiS1aaHeW8pKkYPv4ha5LBNDXcA7bcyhZ%2B4dlu2IWJkv%2BWV2u6V%2Fr6C4Q12tRvjXwt2qSx2ybKMCaGQb%2FObmYTOBxjOg2l1SK3AZckrA4LDoeU&X-Amz-Signature=c9c3c3a9eba68abad5eb3e4786e12d3194403d12f2e20459695fe184ff24ee18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

