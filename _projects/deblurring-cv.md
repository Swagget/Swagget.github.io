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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCUJV6XA%2F20260828%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260828T071833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEF0eO0lkcTCur8GStjzTIs4k8rta%2FjZrN8ZqNZ0wkMyAiEA6O9f7y%2FD%2BRbF%2BaMMzBIxwe%2F%2F6Zfby5tAz85O23A41pUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAHv9dA5nUd%2BUHUgvSrcA%2BPpY6hP9gGOt55E5BvhwWmPtVMVo%2BrsS6UBpiu5ISXWHNaF8CQKhb2xr02HjGg4g9M1SHYnLiAm8yqPZN8DBEZnGC0zRmBKNJr8WiSVUrMVkMMUQYeGWCNrPLsnhkhqtk3B1oIGE4hyViXAKVkmxTktcaSmZZ9xEdkaQNmTNOh5pzJtMV2vrZvxzcLIB7rI9aINgJ7Hh%2Bm6%2Fphho0DyYZAYgRQfuhYDsy4t0EhPGs81RgE2hDlt2kiu%2FPSP4xptct6qVWoYAVxqcJjjhOytVsjXwKpPL7DV6y5jmfbdx1JgAGDE5lhJdr3pGAtriXrgS%2Ft80EFEim5e5tj24lVe1KWPfF2KFFAwLNVb2Xo5Wt9iLLxxK%2FRd0SQHdAwjZeq9qi%2Fpmi8kt1OkwLsQcHbUDHFU%2FKR%2FbSH%2BNo92cLhnidnnUgqx2T1nWV5lAIrFY%2FgO8oBhNG0%2FKixqYtwn5%2FoHMn%2Fi5EllXCYZfGvpXS5uS6w9da5KubmGZPN%2Ft70EZKX7XepC4J%2FRZT6AtUjb%2Bk0Ek42bJT54tvkVjEnuzL9ykqLpdkeAjZQYr9YQeOLwnP7sw0eyEzfkaKIuW2A5CGfKWE8YlZcslBDCPUHQy1X4A2GFf8%2BSqqDBz1tgczVAMN%2F7w9QGOqUBpmEAons4Tnk7qoEmwjB%2F%2BP0VnE6kpRypz3qD2jNfmQOioBlwZFDobu1zia3y6909xvR2cmHp2cKZM1y3w9zoesJ0AAlU4KiWTbBtVYRkSTlmoueuTrd5GGOZS98A0Mm8kiN2cuh%2BKwyzAESYEsiCceN14asN6sOiDokV6Fy44O%2BUJD9tihRh2u6T95FGwxIv05D4X3KKpNyCDXLkKRViNo574OZd&X-Amz-Signature=e933b2f80b3d670395c6adf9d2bc313f464e77951abe382a213e709fbdd06c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

