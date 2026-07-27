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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXSXL572%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T172629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAut2hTiEw8qGiF%2Bs5wja7zor1q9B4lphC1k8vJifpfVAiBXsgm50npkuko2x%2B5OZVsMMmUsD0zGNDeSNcoNDF8wNyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMXT6%2ByuQj%2FcfZM%2F%2FvKtwDI4MsWNcdZnLPaKiSMgdviuJUyhvVApg6z0bnCXyXW2%2F0TziHXVaSS8KcamUMYteId861FDdoWmelz4mql8oIBdk89uPPs7hqg%2FWA3G0wvKyMnEciX3hJiDuVHWM95kY9aBNP1aZ0JJx12d7mXON8XzDaa%2BD1t9RM9%2FmeOpZgpJYSw4yn9NMqr4BmQHWxqGaA58N5MJRO9P%2Bs2Mhg5hb4Z1p9XigN4DrV%2BvbR%2BuMWryXSjGYBAX%2FZkNvij9fxMou2Q3qJtEYb1PEATDSXoV90iilIoWZZlrThSu%2F%2BPENLZkguhLs9%2BqYR8I5HHCq3Jvmr7nG74wOScedTTXZ7aTcvVxB9W4E6dqp%2FuixpmTuNfcuoHYwcO0j7bQbdn4JtrylJReIslkMmvMDDyd5j7rfEp0DNGDWO%2FwN2qcrhiqPXqrydTfCqz4JoygLp1QdXNzfmoAFsnUZjk5Uxl3U5xAIDSNnfoPT%2Fjkj5VBDXj1IAnDjLVQeBbVBbXfBMjSWpsZyJZ1a7DyfgBz2K1CsU6N0I0CAPWe92ViJDNqBATepYfw19%2FjUIsBhwhsRbra4oeOwTghE0eVZ9MG3li5zbljSejCX%2F%2Bqe1gIndnlHwlxORles5fX3eqeNTiSbjAj8w8KKe0wY6pgG5zVAGnk3SBdlM3jZRcPGC%2ByYAx%2F1S3CG7h7h6ZK9TFCOwl4zeaiMUmJ741y3lVzw%2FgmujhAdNFUZ6eEY99RaOd7FveY%2BYukS7DgVce3ojJ1L3UfAjEhrnqAlh17sveaalWM0ir3cMTrZ1Lv8U72T0PMjGS2WrAeqDH2cP1EULt6g3uEF%2BvsuBM6k1lNQ%2BF90RyApyIuhVTN9ezSnFjtiOo5rIEJX6&X-Amz-Signature=b47ed9f5287035f841004d6a2380301194568ab5ea9b6650e224f2767a1f2887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

