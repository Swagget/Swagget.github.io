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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YJ27ZCU%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T191427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDghhv%2F4GGHA9RPaUPg87GVubQ1TdV1CgCve92gETXiKgIhAI2se%2BQME3CIpGkhM8%2FC55aO00vX%2FcP6%2Be9RPC5TyZnwKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykRgkNLp19HEaGrwQq3AM%2B9hxhAM1Bz48JTHH3wCBg%2FdaO7RUkTbd8InEcxF8VQzrQSnUoORKAyRh%2BKKwpTsB31k9q0KMTiKdcYp%2BT14KHYO406eFokhSNzcxKY99fOVHz8Nb5MqccyG0vaEcpTEbkUGps%2FfBm8ftCKLUwT5GtR%2Bc2jTGfdECc7jPOGULOaCWTe592gFhBysgNgge6Z8NRh%2B2vIVs7yMHTNLrAUGsF6JjOFuLTekfCuCumgxqFyxsj3h5ZXGN7FR5gB7qUa%2F5XUzmViZkpIKchJU4bHvukkuK6YFoRXHFJRs02048Ecq62%2FZC0x4hphOP2KQ%2FmzZeXeFgOYJHm5Hj7%2Fv9%2Bg23dyXQw2CPyDNSa71Saq26NU9T0MduASZ3ZLGShBjHg0iZuxvFaLl17MBjolTxTiUSpPWDNt0t3V1WJZLCvWyo9Weu7GqxvGDQygq1FMX4UVkroJwFctxf7LAxRX%2FJ705HttAlkkSgsRpHwFiBAJwyt6iOtWZG58QHvpPPItRdCbKpffwrwwrz60ww6zl7EriEs06%2F5YrfrwYunP0OBED0mjPEmPmRm5o%2BPDlZZQIfRP2eUj8E0rvhFwe2Srm0tncUxvN9osG8kDs3HWYEwY9%2BEo%2FHckyua9NMiGVny1zDX8IPTBjqkAeZ5lhywWor85VTri9Jq%2FmwhMJz1UOXXrmoAsLtILNtiUaKpykYF8DvKrG0WfFSAUrdcwRpGGH1vTPZKcRbSF7ubRkWS09LAhQRtSGVtoIjlzGxmorNkhXbzUkJ8uUFnlyvXI02KgHX9Gy1Z35TsIGFVvUkd4cmq374z0q8M6XJ2hROAR6GCGWeJbNocS5KHsSkYlG6rdMiHnK8fXD6pzBhaWBWE&X-Amz-Signature=8034265d255512ebbc176e67e3bcf284a8ee7f375110519a6847be9b911c980f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

