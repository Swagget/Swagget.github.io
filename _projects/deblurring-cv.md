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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NMA56L%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T042253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJSbmFbOgC9Ougzi1Llnu0SGmwaQcrHDzyn95gbc1HiAiEAyjHKjQLwhMuvpGByLcgEo%2B40pZzBgCpON4hI27CJX%2FMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG15YIX7jfF3Q6SnGCrcA5LczKQsXm8VlK9ZQI99pZZBHeL2dCuitD1jFaTGcVLdYmLDE8Q4rD3WBI7vkxWRxC5UKSaFw%2F1LcxLEttixcBoHCd7ToVwgTlR3ZASsNvnmDIWsQa6rkYfS8Zk4vYaTKqDbqCkXCLqFUO4c64WriXO5RXrr3DNMBf04pb3%2FpS0I41zBQ4%2FQ9t9V1vMM57xm0vKfQMN19xjX5WsoRLMESgH9MQQV8S3v70OL%2Be%2FzM3I6H%2BpXzpbRbf587UsE6kvI8gyX4aoAt60YOwiQSJ352z8rxdnvuCa5TlEXC3OsAvWyTfxd8JoTstzUnB%2Btdvaw3EwBXhtSZbncK1LS1uqQkc0iAK4AXrPGGxP33quHLpf3%2BZ4lvj5D4ND6T6Gkpks%2Btg0OORr1ol1mqknBT5qgXHEvZMpRrTr50gVfoiXMMspxhAZ%2B40JummZ1pzJAyDqrm6k2cpqBGpWdC3Cj%2F01oSEgGLCfVLLJQoTaq4%2FhPG2knLfhpWcVGEIkHwXGGZBJb9F3G7y0B10hovaWBlcZYWmrmnd%2FjgwE2xMRuiStVbYuFOVBqQqHpbVTAYpCEnp%2BCBzNiKmOHHgKRk7TOvDcv%2Bcngt4wp6XCzPzK2FGFMt1uOdnqQHve2Z8c2p8lzMOyV1dMGOqUB7EumUQp0f6CcgWZPEGjWHgekOPgOywnhlrLSDoRUoMGMRSltG77wZKf%2B7eomNMwxcbTo6uG4Np3fR4fyApfATKsld7zcVp%2FXKDMzi%2F6eTD98qFTbWOPm8huQRhwWDjUUjyr8zwDFWUwA49hpC%2FYbAO9kLibquoaypk78pNnmAFLNe1lfzjVHLDYbZoKT%2FkyTu6JHaL6aVtfr0HJbuH9FV1jOn%2BLG&X-Amz-Signature=bacae7c09d1c76cdea653bb1a0f95819b3c1b98c3297868ec98b7220fd917dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

