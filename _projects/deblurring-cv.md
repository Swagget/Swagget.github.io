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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V5I2QNZ%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T235943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6soDpqoQuM4%2BTzrJMrFZIOawuBD%2BogIopfFxIbh%2BNTwIgL7cQisb6vz0yQuq%2FcnAYMR2WcbQc4xteIELPe6ISx4UqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVWGmRcBdzDrwWTlSrcA0dIaKzBxUHbruWV%2For%2Fi3zxrGr1GCcPLrHltVHXW%2F6uivDoKvbxDRmZ7vDkAox6vCDqoGjo%2BLmexHp%2Bey4v8crCDLPeMRT9imG%2BXRp3XWLAPBxMeoROXjt%2FJR9eWASuPG4ivmYaTZVOXPf5f6D0myZcfkXw0wYp6iegdNe%2FZYuNnPQGlNJ6FTuXY9GBuETpbf4XtOirPLOsl49pMJ34aNWabQ69kbfG%2Bn%2Bp2NNvloNOwzrBL1gAowEx1IyJuteYXdTjucy81pI4rCg8QnM00QP7ApukLcuvVT7N4DM%2B10vrQmpdcuG%2Bo5iWp0ss4fJaOQYMQZxmhBjwl4LlFNHRifS3qwTnefGfK37ifa5TxHhJ87cm8frtvgVvRlnuLCxdoL0bZ%2BgBb84a2ib4T3NC9MuvvImJIR9gsZSSvM3de8liqhhprcAo2p0VYzbDXyt3yR4GLjc%2FutB%2F%2FFGvwpzam5sugqyrNtSL5nboWPJPq4xzjj6%2FURgPX%2FdXk3ZO276bFtdRCdkHI8ETGVqjfE7ubl3ttw4phG2EUT%2F5okg1cYZK4XKGvs9PbcnAQ1Ed4mz9lQlgN4uaJ2V2tO69E7OyEXwPM2bYpUKlMfI%2BcX6D975gvTUxyGfnyxIsxooWMOr%2F4tAGOqUBaAbKAaxPTTplPILf7WBnkFkROJPKOqvqUZAFzYvrTZkCdsG%2B1AUmrNW6dgceLWPj31l6xGp4MvW2BILcgsoSZmZmtp3K2xg8SMnvx5vXMM7pCmmq1lJ%2BY6BZezAxXhhj2mBV5P%2BE4LoVYJbQhXwdGj28etS2s0QLDezoV3FUtcddJfCpluvIIAffnIE0tkWwGSA7L4a7iAxI2qjg3dr55UYNKUs1&X-Amz-Signature=b581841c9163bec45e01b4fe57496c9bb93129cd28b1988249814d59bf770c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

