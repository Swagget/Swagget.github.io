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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YMYUDM%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T091318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFk%2FP%2BwAKQgYNfnvF4%2BTR0anXupTlgqyzrgbjbf9GKmlAiEAr7TM0J4PrmYI8Oj98gom8kzgxVoT2Y%2FiIIjQrDj%2FloAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBBKmuay%2BnKuyB0TSrcA55NIpwBzkD97u84VMfqUtpgdm8QNQ5gWCl%2Fr0O475ZkYuPFcH%2Fg1Gn66b2nge6XAuy8L%2FfAIh3AihtkKEFswkWAQF9o%2B6vnydk%2FuCs4UI0V2cFNihjElaaD3cAvjWI0dJgBmxsKTha6QFpz65xn5r0s9T18cvjZhsixm5AOcFmZ7SC6C5uBoTxOnJrTKThFHplqf7cdCDI9tiLTrFtel6nGTX9ncZbsyM6kr%2Bk8OpXs80mpWS98oqK%2Bf7ZbEBhi3U2g28H%2B3mLphkyOfLHoF894sAImqh1dusKaZ4i8V%2BP%2FYMsh4H4MnduwTzewP7C7npEevBL0xJw9KVw8EBpiD78GbFPYnRpBl4h6lXer0CWDyzV7%2FuawMjzL2q367zF3Xgo3PyZV%2BSkfO7GcwbGwidG2xpjVnQ0CuYw%2FHy8R9uKHQdLwntSLT60o%2BM4Uu5uORkH47q2LlKWF0TVoSBUM3dLedlgTpzqSP%2FHIYR8gS9R2jrd%2B6WvpFKYcTRPyDMaDc4XI31xxCtoyQYC%2FIqM1clw6MY4BHzSsc%2BhIjAbRQtR2tqW7Or7CqN5qBhd9ruTaLr5pC0VyaxWozpu8BfeG4%2BA0gj4d2WPo8hZafuE9hSAThbypzgYBdTmi0MuxMJX9x9IGOqUBA1Df%2BYezm2Xeo%2Bx92M8inkdHxPYY7G8xoXkUpkHaBYx6sMFDxGdxnf7uC15tT9%2Bl%2FJAdW5eKNOTGiAZKg6ztkIgg6zbICq03Ahfo2p2H135dEBSgnjC03vtGl1ZfnSRF8lEXin0PSIZiUekUiTachEgvzo2hly5ZJI0ZgyytwpI4B4obg1efK1yNPS6%2FR1Pkx0r8krlBFCMLbG7thQwizY%2FWEPj1&X-Amz-Signature=9df2e129283c5486130923b04ab38ac804fedbef40eebcc7ee13f61c9e076d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

