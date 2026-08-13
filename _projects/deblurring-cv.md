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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6GBXJC%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T213220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDKgHJUjAEoCqf%2FmLU1x1zIZJr5MMkAbm8bKf%2BmuPj39AiEApFo9eWpoLDmmrxwsJW3xFmWLuF11OBieuiZTewPkJBsqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAevcZOOvdLUP6fSlSrcAxszhRDI4mRT1cXmSkBDm9UXzRu2X13JVb1IfQxEEhD9%2FplCXsX62IKw%2BurxkFJvAIsiBPyQMji%2F12TuI8yh3SD2Sn1rOOrMgKhuN9OZf8ghTGBeIMNCMp2cLjACzjVVN8qpkoOqxjch%2BakG6vCWcytmWRCutHa7OvoBVfrv65RGbQ8foSlLd5e%2Bo8Tpj2Dxic6m%2FINhRV7Ualai%2FTcZoXwfAXe430NySatdkGhRUPXDfW3x6W81I2RTtjb1cfccdLRCFEL4nONclyQAFh8D6R5SjSsIoaBH89lKWU8tLEwVdLWCzb8Kh8R2ceaxKVnNH84HdxS0wkgyCCJhmUJPGCQGplbQf7xqrK3kPiVrPxOfNmFFHN7I5wkJFznJgT%2F1f9kPP9ZbEaAlhbZAi%2FWWu%2FI4WeWTeuLsD5US%2BjeRAXQdfzneYv%2FBKI9oesSbT6pspQ19W%2BpvSRH49CP9vyC0shgANUk%2B2AfOfxR2lPnTrdZjHc9FuY3VKaKAA3iWFFRLhoxRuG7OImxPDf9jbxpegGiATPNaYa743xDigpvxXOXZ68pMFd0Oy7SX4KSlBACi33kJflkYge1lEkaR3jITBUe1%2FV43AFcOCVs4j4ByoUxq1cE2ERlh1aVADROzMIzc%2BNMGOqUBOF%2FAJU74L%2F3UBfxOzO%2F%2B0SsqtO06H%2Fg9q0J6c2MBIjlUvGR6G2eH3Hhr%2BImpIqf2hcYA8FTQ%2FoMqmsGdBeFpHkXSPg6tr8zde8iSS8z9NKL5f%2BRuPTg4hcJAvoff9v9FvAQJtif6uoiXP60cPxlhb6b98HLlxvQ78LRva%2BKthAC0d6swjbUT7L5dyVC5ww1oOTWtfmrKBwjxUYoX7LahhqfJu%2FwR&X-Amz-Signature=7b7e6adcddabe681c90c049df22a76a058a79875230986b1dc0413548e2797bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

