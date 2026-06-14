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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L5XQJUO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T125511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD877tiqQ2yJQaxqqttXwy3BimTM%2BR6ddowe0AVMnhfOQIhANnC4B8cZHnUN0HrIPJ19vtDBUvgPE0posocakEA58mmKv8DCEUQABoMNjM3NDIzMTgzODA1Igzh6ptNxoZY8IoHiHUq3AOidq36MHozIxIaDcrAx1xg0CkPtXRn43Jdwr75CljH2Nzvta2lZRb0tbfIF%2FD8IUGK9cwL92gyrpSJaW52x2VSEsS6SxO%2Bk9woRM7BjIJQByP6LTjGK9zjh3a1sF5YFjj9TBtDlC7aRcBHbldkuDq86cfVGYOSDjtcJTeILczdY412wrhYl9%2BijNeLtcbjgdbNe3Z%2BXmJcgKVySBiFV8SAYlmqNkpDJmliuzNTXlToZWYctu3ROjR5iswXVoVmXlJmiyq6R7u3JWD%2BOL5pU9tLqho5W%2FD3LTg9IXV14tlXjMKtEJmxJ%2BlFPcMg%2B4cmwWNncn%2Fcro2S%2BwUzs5ZtbHK3TPzH9F2IDnCfgzsXdCDvnL3HiP52%2BInWwraCasccGnl%2FZoBAhvyRvmw%2F6Dra%2FqzpBvhzGYbgaTLSpWKbxtN6j3WJvS1xUw5MsSGQoqALOYeTOXh6f2fjd8QEHP8nDCizFnGNGTtF8fEie3CrJmT0bcXxaJMP6HxXI0tBOQwA%2Bw5XalKWN9v5uVMdTk%2BQdHx77p0ni5e6Da2Egj73REDugEyvWtobByIsXrzpGoGMXWemjCOf1l4Hxw1U%2BttpwgSFpt52egtHwiN3nIqM%2BdH4dp6zBPLuMbO23eg4sjDqtbrRBjqkAS%2BHtnfTiyxkg42fg70D9XQ0erdgKkZQt1gY4t%2B1kIvKfj%2BucUfNAcVdd8V5gA9cKpVLNDF8wKu9B6oyrbX8wPiTMGH87389HN2jDN4y0FSx70Q7heLgNfx7Aaqw1bsXxB51TB3MLBouVXPGRqm0HFtsYg2c0xBHZ%2B81KSqf%2Bf4%2BbntPrDBXIlMY39jG8Gl6%2FUjwrpOyfS5YYeW%2Fm22CkH3g7jWf&X-Amz-Signature=752096499de584f4e0c1ebb6a6195ac2adee901f75327f6d2de6292710b898d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

