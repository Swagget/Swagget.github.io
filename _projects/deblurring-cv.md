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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHAAEHO%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD5%2F%2BGNQu6N7DdwVYTTPh5KPDuC3gf2KsfZjxf4GN%2ByAwIhAIFYc9%2Fs78M59vAPMYwt6jdt3EVj8xUkJ3yboVDXwXE4Kv8DCCsQABoMNjM3NDIzMTgzODA1IgzaHkOBBBM%2BpEUxKQAq3APPB%2FpUSvkAGhyEPHeN8m8z5Yw4025MOJ0xtk9ssTBD08rHqD9ctCAj6WJifT5RVz9%2BIPqc%2Beli5pOzvOO3y1PWTATgbe7pfQWRI1tDNGYUJwEU3aN6yOm2fyvyxzNusf4uWIDGZ3JIaSDr7If0EEK2bM479vGvaH59t5CS5gm1%2BlJAKUg518Clg2woVWCSOc3K4IksedsAa0IgWTyBSZMsbr99x6JqfiQqLU8DRO9%2FSFyQkqxywSFSZ98lxiHOvbtGU6YwRvPr8COZDbEfQk72RP6BO2gKyUogUmOHS7wz77lE%2FCK2L97BGJVebpfSpNQOEEluVd7HgIneNK8vtV1G%2Bnr9NrVqh57zi4bCOQzFBCWMp8uqaRiWRNV0PYgMDf8gEsj8jkJD9izaYBLSmZEcULDuTSdwz2OKFfkuSrfTtpLr1bfTv82UItYGFsh2yxpc%2BXUoC%2FZzd5NifGREZuatru9lleP1OVyDU2gVjg1%2Fr7G0xY%2FJoyKn6P5yJ%2BHIaFTez6YsADcgT1rIEQeBKps1XFVWsD82L92ZjnAAV6OBHic7L6jqr5SSHEZDtnthXd8JXSarQ8irYap8iGPneay94MXUTdxuk3NAADXB6AQ15GQA%2BMthtFNOTpYmIDCnnIbUBjqkAQIcvMcqlwGU1RmCFKd05AiayKHbxPEsxVrkPDLZypGJvoJTYBqGKFMpyZvUW1uTiniH3nAYvFvoMX%2FVxwLIt1y7cX9LGPSChDBxoC%2B75r3Z9YtNnKpOcePdYi1q7fQvcyNiYh2gZ7RuMXjifXyAn9PSmejYUn9Fo6nRYVYMH1bVy%2Byn36QrXiOq8Vg6N%2FqkK6Ww7LqJhF8wnh2IvMHX7mSFx4X%2F&X-Amz-Signature=ea20b8893649aebcce4b1f555f1abd009917c1812619277dce08ac6129046ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

