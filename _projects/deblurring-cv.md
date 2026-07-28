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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCWZ77V%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T072904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3DYhnAQA7pyVRIMG4fMmnIcTgrwXed9e24OJ4QCRasgIhANg4QewMYzxoIu8NI2tjduW%2FIbj7%2FFT%2FkP5yarznzzoCKv8DCGAQABoMNjM3NDIzMTgzODA1Igz4NyWKUBnygLcvJuEq3AMzqj0cbF9Dtj24i2eStq0y9HX4rxOKaNT5j70S%2Bszi9LdUcq9EoVcvpEiIGvPVv1O6QRsfEjOy98GcPgKcymJx4IzAaSH60C17C3Hqe1H97D1%2BJrBErlkASPE4skLnRPRWyzlLaM7UhO42RzXBej3pdnwnhjKSzoKGmar%2Bjtb6hJKR9vqqrsQouNXZ5iwak%2BfsFvR8zh8fqTRTipRYsGJDrbdVTd9sZhRxOh0JrT9h0ShBzLmc3z4vyufeXcqzuf%2F1yKCrP7K9z9%2FI1ta5PTiBiZwD5gV5a5lN34c79YGVDQfub9YUXYzrIOsW6ISSrQZpshLJFU2b31tnpTvMYLSrQoFtLq9XPp0FFdGIPKyYbybJxRVJHNDKK%2BeVLIlBTTwa5stbqJ07XpL1Q%2Fs9qpMqgXKsihDxiJFR9CwTr%2BHDuJ%2BqReBGV4hrbm%2Bse0jaYEvV43gFmocMGrJB0Wphzpf60ZUMsIWG3b6RERyfnzVle8C7%2Ba4GJM1iOlThBiPfTCG44vjZovsqB7KjArylgimxB18ndrQTES%2FodTaUh9itUlIu8i2p2jrK69ww7EYYXP%2FurwzpWV28DDkl%2B9RaUw3QyRdJ%2B21PpnnDOv61j4%2BeoaYJzoRO4LxT%2BXv%2FnDDgsKHTBjqkAQAi0TCRnlH3Bxt9zlLV4lJnm41CUv7G%2FHpwRCrgLP9ePES0z9hFDWrBUY1HX23GzrNeVwGMq8U4tgH%2BGHcnUtRO83TJKDf%2FwCP1RUwgLUEk47zt2afuADoXcCDa8sZmeMKrPSH4lZHrzXZNJxeEzY0ce8pvr%2BYwHEiH5UYirnHiHonHEAgDwag2CooCXKfXEgkLHUmswBQQ625npHi5ALK7Kb8W&X-Amz-Signature=927120dafdf6bddb3dbe7800075f9cb2e5c55191c1248677fe80cdf9c2283a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

