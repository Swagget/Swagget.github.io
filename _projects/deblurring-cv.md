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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNPLH74A%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T042005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEWYpRYqn%2FPWCz32%2BBu3lV3tNHWWSDpoRUTX%2Bx%2FFF4FAiEA88PU2rBxhWj%2BnwDEo1DEZbikDAuI%2FhPL8oKmIKDWMTkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQduFK%2BN8wfyZLLPyrcA1nD4Fk%2BB%2B0pVxPIW40Mb%2Bv3%2BCCdwhfiBtPp5pGo26VRyeC33Zx%2ForEdKhgwx6rbWhMmgd00YuPJ%2F147Id8tfXcVxLv%2FLyAP0oXVTpaoHjtM8JAdCUI%2BDRKrMn8efyWS%2F9O%2FYQDlfGzwb1jTxuiA2Agn08Kps4iTPHsBrdnTgl9WXmRvfUJnPpHAz%2Bc6jhNueulHH7KwS3oIKftV02Lfrl5%2FcVzRwT3UQ9UzbzBB1mDxD5Mse7ApNcUzC58Aupv2O8H71tgHGNkolo4IrcXGDPup%2FKeueJTXaMDAjsN4yCd0ySE4kDyMgCcbMBhJtX8gv3535JZjI6cMVriNWMQsA1aUIiBzAX0HgpRYzHp5TWD1A8IXUx5x0PaAMhb96nic%2BeOtUFFAGAafmYYN6uxkoOkeK0bjB0m%2F6m85HAoFVA2sonGMSO4kojoIsJNvqNdV6MNhqhbtfMVdfpt79X9dp43MKWunNM7dsDNPFjD13Gy06zDPT8glr7ynzmmGbyd0YKCjQBlBSbqHi7l%2B3pDlI1%2BxbLycEIVtRFRy0T7I5G2qUvzs4BwWuJMn7Ic9QIG15OLIg%2F2BE7a%2Fz%2FXr3%2FqgGVS2WtvoaWZTvO8Kq%2FtYcITHjBzT0wWb8AULBQlsMIPApNQGOqUBDwy3wBhawK%2B1Iair20I%2FIbhcdBW32ZV%2BRb24STNVvzdY6Sw14f7eGNH3Ehp36nu5JLfxWLLSlQ85ju%2B0kyvkynJ31oZVK5ejd6lQZO9LXphR%2F0%2BHzT5XTsrOr8M%2Fwe3e7ZvLQIzzHjskIu1ZB4MjDPklzCTOQFuXGXkvPrUIV8Ce8eSSfouMvAUCTGgrS3RzqhvZrw7k29mJqIW2qrBXRC4265rf&X-Amz-Signature=1d2ec5c995d364efdad6c114c45a142671fa8da9ae58139e07e70fda1bd94b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

