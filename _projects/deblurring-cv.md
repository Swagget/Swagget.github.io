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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS35573Z%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T055609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdmGPc2sYyUzbsd610UFIWPFhWsah6uu1U3g2sP9wzYgIhAOz77hiH6LZYDWolqJt%2FMe8j4WohcB2xXYpHKvNV0lnIKv8DCGYQABoMNjM3NDIzMTgzODA1IgwhB1qC8BFsCRcdBEYq3AMxNHHPhJ1RTw%2BUoJWj%2Buz5enHMALMfvXgnw0UHf29MfrVSXTX0bWQJSIO5%2F6LU%2FIt6pUIi9cX%2FFi498wvK4tdMyS%2BgmyMawybGMf%2FytOWaW5Kv7venQLMLR49l2myj8aKgCj56i3uCtlNQO9E8CO1jBp2ZrU%2F0cSwkzvDuGFeRfcvQz1BPP19JFBmmDq%2But6KZC5DfimBgiiuWEt%2FeDg9kWvl%2BcLQ%2FGAEZqByx5GOSvdMbC%2Fhzyks3im7LSC58KA4kTVn1DRyJqSl0XTsrhw6tK1Jtn6b%2B5w9ZdHhXlxzzXWthCqsxTGXM2MgYyrLRVOrxcv3mr6cB7u5Ed9ArTWvJNLo4Q4YO8z5alakZFESm9uJnCfxPO8HiDNUiuHMq1M0e9eyVRas2OaaVabEGBN44gbNTXI%2FovjLIlRcF3NVNelcuR56TlakXsYJq70yvePMT85uoou1BsqyeWDIxNfyxyTPTXpBjKavk7jHSK5Cety4ZNy1M8qOdrCUxn3C3wmkKQYPdju%2F1%2FrIVzRE3pwkp2%2BtArO103jG0%2B%2Fu7mZQRCfGcqLiHM322D0HnZNy5BMXv98xr4KiXyNb2Uq2nkervsxFe65F0OrV%2Fts3fJX0ExbS%2FEF%2B6x8zVqxMJZDDRkrLSBjqkAZShV6Ea7VmzUVkQkguD9SQwN41YnVsm2PxoDfX4F%2FDsAu3eZ9eTMln7BwDr4dxcCyd3aX4LepQTVJPnIQkHsuT88MF5lKfXovJD5b15l%2FdoimNOCbI4RrBS7e6CS182flOF5zZjKBs6kKdzos6PCY3vBfnltw7n1WWnWnflSrbgvoQ3u9W2RC8p7wr8qOCVBdfd5%2Bqe1EtWKFDGjV9646BY3E6v&X-Amz-Signature=98fbac65916e0202f392a2b12f94e5055a570daaf9cae06e8ae0ca20d04a4089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

