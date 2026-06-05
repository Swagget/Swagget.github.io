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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOS2RVJ%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T235712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICk6nNTGE2q9%2F97bbAFZdNyhVvq7Bydw8dP4bfpEJigXAiEA6wpbT%2Fpj4DeZZHruYitwhW7I4LuPCf3QnHKwrRjO2v0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDDQStc7KO7xL5gG0yrcA%2BnKGlYmDD8HpDDPkGKelGmlz6BmvuAR2Lj7uEtmFOOR0YDx1WNAmy4F9m%2Fs81oMpqO2hyXMPPV4B4nPVcz1m93P6EXtny6Sz8kegiiBmepCr9q16ynUDwmCt4PR6zUILEcvID%2FlD9YkZt%2F7y76xqoj1lKCJj4TNmTXiNRxHfpUeWos4g3NwTNEIHTxmNa52G%2FtubG8NAxx%2BpG9OcnZYgQ0i9V8tkD3an%2Fp5UOpVYV9tK20CPPUDXGJ6oloQvr8IlPUPmT%2FiOkJJ7EoVEG0YyWUfr8Rm5r1xA9GzapIw%2FGYSXejnlT4D%2Bv3KGFh4WMRLAmZ5XCPKrBes5QqUFVkAY1shddJ0h5aMStyRsfrxi9Xm4klPtD3ATF%2B6XklMNmb67toNsOv66DvbZNycnX%2BpbUD5HnFt70CfpELL6K6SivBSuJNYUhQFNFcfhnVjlWKI97ruiLHrSmyq1NW4Z40lMRyIuZF35ayudUMI3I%2F0sZo3wTTXQ28wUB4xTQo4jYxSUOyfSxo75Uh60jqqRptFJz%2BRnrwSaucsbQPrpPoPOds5XqZXyo7Hz6sR8hAYpF%2F8T%2BkTzEt71JZ3tMO39vaKVXRyHrAjRa5Xdv0GltYlTQM0qgtCebNyEKmMBraKMPywjdEGOqUBQPIsLaitneaaZIKHgYsAOWFORyk%2FPig64zzffFX9BxFi1abHnseCh8wqrsrMGon5luDT7o6HeODC6GycJ555S5AE1HVmTkc3daVbUzsJqJ7j93ouOVtzMgNAaWZiHVIMHkDRmhoXrdmZkHUKNKVfb2r20zemk%2FOeCgARoovkz4ILSngkZv8MVnq1Zb0ZKhJhwjsFBb4pDfp%2F7UblKGrt8sAr%2BqYC&X-Amz-Signature=e1bb7f5d18d16e34b838eb46758e831a61329d7a65e6f51188036ac1481da1a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

