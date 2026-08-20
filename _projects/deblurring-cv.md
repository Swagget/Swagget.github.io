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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFCQCX5R%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T231400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJlyBhHJV25814o6bRGDb3Gd9o8JOBBHF078Bh0gC3pAiEAwCyk1zj082vojfv734%2FTuj4%2FNyzpL1Fj6%2BD68lqknDsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7zwFeS2fbzkzuCrCrcA4u%2BtErA81vURT%2BsPzgVUc6xQTUYL4SQatTl7tMo6NcvmSyLSH%2BLUJz2QXpd5uusDGQIc%2FVGoXQ2Cg4ifI34k8LpH04pKbmuyRNi%2FmH375qTITlHSRbc8Sa12eGnIvPXpog%2FYaHslNTRu%2FdeBps1keHHFkGBxKREPTr5TO6DIgql319mEJAbVWYs%2BCOMNGfO36Bd1Ir8bYPDpzKt7M229KA%2BpR2yqtjhq28r%2BiKxINJlVuprJcOEcOA2aUO%2Fuvq%2FpdI8wduU%2BiuhOo3B66ifLF2WsA1qQmNxanumMJdBgvF3Q6zJY4umSqFFDoeSxphyQ3%2Bq2MU0Vq4Af1XsFvlsLuOuv3chmfVr6rR44HeJl0azN1dre2Md%2BAbjaV3FED73p9hg9YRN10lVOQ5YPylo5DlCrNk4PYr5GDhY0pQvc2kiLM58FhsFSdH3uh%2Bv8KSu9u5%2BsWYODhCaPlQukD2ISz%2BJ9yWULfUf8Joro2T4ilLlo1XNuahB7hca0Ad1pMxChduuzM8DzrxkUllRvMfmzSOvwQQVz6%2FdkGk6asL5C6xQRC2%2FmsD3QnF6sp7blTYBm7DIWnVT1LsBARYjB2bvqsrNlgZDFjpMSB4n5ZA09gJ0Z5PXSAnX0sAMqPQSMPDxndQGOqUBbnvz7TfblPO3t6mTcT1JGK7jvoNf41mUZK3NmR0dSxWC9f5jAnMXsYujYXJL1w4LVHmDhx5TFoj%2BdTPoJ81MkmB%2FRpjLG5q%2FZnH5oocKHORZXydxuNSysXODLatXJD2ktTNGBqWe12T7XPS8HTnyd428h%2Bg2Te5Rx7ouag4cpcDqdYtZ88GN6yVnAAbEdeIUiwP6Lcn%2BPW5bm06sQAfzp%2B%2Ba7tOJ&X-Amz-Signature=e3640a655c5fd0fe2d598e73f62d599c887c6d58c8394b8976659598d8814e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

