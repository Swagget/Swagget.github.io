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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QA5ENUA%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T082041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBap0J3gdltP4cklnUwwdWRNit3Nroq2PuDVpHvSGIfQAiAzBUn61J%2B4S2azzYnX1xDgVDcivmckNCkFVy16%2FXWPrir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMIEFUN08pHQQ7lpSeKtwDCqvkpm9r6McOazj1MMeJmR6sRy5hN5V6PnX5JWZFDnGdtV0r2uhOPo30YKPsilt4TZ1fUuuWv8uBHQAyIUmeSuQMKa6cKGky%2BfeOgAk4Ui9fIxLF0G%2FXHFekDXE6b%2BZn%2FUovv7iL6NUtT4Gtm3k5dzYliaX%2BWkFsPOJCr17YxuQhoKZIsmjVhDt%2B5I4cFD%2BCLKM1458yfwThd4WfaQKtG%2BQPXQ7hbmdXUJbQschpdKWOP2%2BbJsPCi8Bs5OMLcwWZou26elFl7Ec9qpdR%2F22zpk%2F0WrdyI69PlPdcn6vS0bO%2BtyD2eDF0Z8vd3yaVDc874MXMPyETd%2Fhv933IYo%2BEEXwIcAndfaCFKanjR%2Fa1BGfRfYovchRojNSpPeiUwVACX5jgzggu2lrPneRMunfC%2FSfXGe5yuRjaVtOsjn2RdJUQaHZmW5wgbFFMzE72ca4LFsD1Oe4meFzrvihVIcRhzzOhmfF2%2FIw0GsbU4e26cETFF53AZAPFMoWDA%2F1t5%2Fkc5pxDFyCWWQBcbcDCYkxUBLGlecQamam2VXqhwIs%2FrVRtRaxWm8XYTWmcnw%2Fii%2FZDUOQVx%2FKJmfQefCEs4XfA1YGVRyVfmBdLw1r%2Bh8%2FH40wqNT%2F4%2BhBibaXm%2Bjww%2B56V1AY6pgE%2BSi%2BSAudFcZHPV7Yx1ncQNUDeCHcWZHqterYz8uq11y%2FkZln1Q%2B2MTDpR0kWrq1u7hfrKYNrENUdsnrzQxyiw0FBE2e6P4pQzIA9ruUx4W2fe4N%2FWjirWFHuDzE6lxkFIHVELi1JmU%2B4fEBWCkrJTZn7ltjNGzeIC%2Brkz0WQ7MXXkRp5nBrAx8WDoLe%2FRmdULkzxTPZTpCts%2Fzxw98zBxVGI2weqh&X-Amz-Signature=0c569db56cc05a1f29543b012d4b12300e80f4e2d93ecd3b372d35845e45a907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

