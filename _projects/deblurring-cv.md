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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDMEZASQ%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T000048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDJ1vGUmpuKlz%2F7RSnuFySLK9zig7YF3ynytbu%2BeYMweQIgbc0Hx1ycsoZxKToWEM7OVSeM4%2FV%2B78IqLAzDM1KGMQYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv5zxfBb15%2B88DplircA5HFHcQrC9dUwc%2BQWWqg1gl04WX3jLJZHgklGKplbe5W4b7aJYYYc0%2BteEQTYuupD2KfPlSZt3C%2BDA%2FE8vKm9PMoyM%2B4COn2%2BCcbsUxK5FMuoyhypq5lJMbfySG%2Bpb16sXS%2B%2FmbKjOqKwQrV%2Fxxm4P3kXwPjng1cHNTpnUuNBoY4EykeUux0n%2BqZlZhl017XS8P2LZjogul5qt4zjwACblYHvz3dHwNnSitaq%2FAreyCczdgiqXGrpadF0yPds6qPcfKhfP7%2BDHM%2FCVN6ZtxDm3n0ovTrmDGwG%2Bn%2BOmgQu4r6%2FpP%2BZvSDewPibNj5jjnWBAPM1q%2FRAqPXMtXcGP95k6eZzlmQddHrK2eT%2Ft8sh54OT%2BWvvF60%2FxBiPJEIiRmmJdnDMqrcJmjcBaBBurBAgLkzvt2bdiFgTFi%2FXA33iENWW9DU6h3m9NPEDQoGDYUsPa7WbQvUXun2F3stD75NDX8hC9nyz%2Bj3n0APzwIea4Ppj4Ja%2BhhhHUjqn%2FbXTMPdsaiR8hbH8%2F3GSYTWB4JEgHlmyeRNnWUn6oEsYKyZFastZrY3OlydtTiPZKAkRgYIzoRF7RRWFyMG%2BdVxb%2FncgruP48fc6hUl9FYWpZRs3FSj3RpdELKjfgRW2TE7MOSv6NAGOqUBBuSumoDQwR92bl28LzqPdsrw8pIZoI4oJ5MIX%2Bpt5eeRXbC2bPrnJt48ZxwU7mgS0rnHGbA5QFYIO7eerG76ucRX1UXGZGC9A7alFRY2PVPdlBzLxG4YaommcWv7xIY1tQ2KOyN%2FO%2BiSTyOqgG0SJ7D5p3eXC2hR6egpJ92l9i1UCq2r%2B6J7QeMS1hvGQEppj%2B0cre13QaHDMCS60kY4id3e%2BIKl&X-Amz-Signature=aa71792568c648eac1398835e62a6adc01e78ab4eb7c67a41bb4343fc581050c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

