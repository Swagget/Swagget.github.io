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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKGKQ7MI%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T054511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwdWOj%2FIA19mU137g0w3O93gTZndo%2F%2BfqJtb%2BsLdkHGAIhAISnZn8OxF2p6K7occ5RYQBPh%2FAap2nMlY%2B0RlbaXLOpKv8DCHcQABoMNjM3NDIzMTgzODA1IgycBEvKravQUho0XQkq3AOs0pSOug01ifBmcfM621p6EpZk8prHe7DzRf5D7EI4L06L4tbjHBIWvX8Jddklbm1sKd0AcVnlxm5tbaVrV0%2FS5YdpPFj6npeLBg1v2kYbMra2jpxEpqBZu6RSz4Fxq3Ho%2BF%2BbYk%2BIYaiNvgXgT%2Fv3ARHqG5J8fV84rwYE1aPvxvPXv8HbfBw8DxAGyWAc8KkVEUumCLWkBIMvGNTdMfmyG0pjjvLf08JbWnZE3Rl8aJ55DMVxq8n4TS26mm%2FJ4%2FudoOa6aRp4BpKmqVepGFff0IKi4gGtwne823PK4TtSRpaKZAoESdqynMYh%2BAtjr2kqagHhI16VD0n4YyLttxHRXhxNxnF8jFPWT2B9Fnm7vngVNYKx3J9ERztu5IBcntXdHNa0qnGhxp71hZ%2B0UkPhOSmc3cyOR59pXyKdxb%2FELabt4qJb7274aVSBfTN0xE94YZREEF%2Fp7m5hkGr%2BUKYgmyj34%2BrcRYS%2F9b5%2BXywhiA4yBFo9jNg6%2Fh0ZynBPGkjHa4A2xChjdSr6gprTVarpPek5pSE90peZ1wTjACo2C2xgH3z9pqVCpe2KveBM%2FHLvMtAoJTLKUEnpf2mthMtC4Yu%2BRo0Kkh1TMUyKUVyiHrta%2FfsAJWq88CF8rDD9w%2F3RBjqkAanuQ92BshWczLlVdtQGbSBRFRVXiJh705UTwMEYWz8FpJgwLE3RhGjeVnpbmeVnb3ZUzmoIqzluHNUGselHLEale7XXgFdc2xOinwfziVwcWQKTOQDMdGNveM%2BQBabgnriJHm6%2FZtdsCUflOQOtYn1FCG6%2B8cQ5XIb0%2BAxLfjt0APdtRJnq6%2B1Gpmmz9ZBF%2BqjtspOe6oMiWoUdyRFgAxDdyGEC&X-Amz-Signature=4e5903d21ebbc6f8c5c0073c96a15dfe12e14b8abfabbdeccf5932cbbfb774bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

