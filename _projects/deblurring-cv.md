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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3XYKGLR%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T092257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG6iOrXgF3Hxbib4Joqk9qnNLL%2BJER4aaPv2%2BxTJsCrgIgOZ7x4yO8LsnDFVq1haza%2BCvPAEHBTUGbX%2FWoFrBrZCUqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB1yLaYPlfb9%2BSmrCrcAxSQkBBOXAwsXTmanYthk5DRPnXhuetIDNT4uh4c2CUcGnv5q8AgZezlwcfcdEWZ%2BO3cF%2FlZT7zXkveABwkVNZFn5459OkqoQ9mzRWD5j5dFYNnCflTItLlHgNSIVJf768Lfjy0cypX3F5aXkRTi94rro5Rfm0QxZpXOMcQt6dVoXNGIFsWwfFxEvT8mrG5kymurlhUHAvdKiNwmNpV27l%2FanAwQSPAT0THpdSJFFXtH7yXvmQloDpko11E%2BtHceYUcSVUR%2B5QWwJ7Wuwo7kASO4zlIS%2FxDKKlY9pLo952%2B2hAq3WSonpDfh3ZOYTQx%2FgK6TxzhbzEYipM8A9jEmg72Yt6e9%2BLntseuVS36iRrjcoA2MhHWbSnIzMT84G0hypdI%2F3wNfN6imAEOZt%2BMPRQGGF2Sc%2FzJEoolFBCEtHGbIBMBT1tSGOBERfvDeTL6k86BZP9qxDbL3tQ%2FbzWtEyxb%2BZBB3WQbasFJJCVWNwkXqwxAfNlVhqC1YLUizgCuo2HsmF0atP63nkvmbxyRKy5kzMlOZyurA8azqidIoqjYfkiI0s6DXZFkHZAANyYO1%2BJMd78eIeO134VBt7nlR%2BNNZRGxHVMjPKp5tS6tzAEGbW%2Fb0K%2F%2B0%2FZKk0p1dMMifoNQGOqUBx8QJstNhkDGy2zL31gm0nNaPv0NRsF%2FJdkLNAonbv%2Btmr%2BarHT07%2B%2BTRWefUiTMVw%2F4B6MZUaB2oX5BMtzDUnbQCYxDhK6QCmVXSDEtEuUv%2B5KC6Pih%2B9NeMkkgiMr3v%2FDjKbqP5CIFShsR08WQxXqQliMVguykHKwp4q3fwxl2umj0Wh6lXrsnEXbeKDD13PESZUDQ4XZ1Jcq%2FHY2yV0JSWQYjb&X-Amz-Signature=17db789f5c165376a6913eecdfc594d064bbc9f3c60c1441879dfc87d0ca0553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

