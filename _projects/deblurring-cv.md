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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG74QYX4%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T043526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyEhWp0flsNc8dozuujleJ1ni2IngCqDAiO%2B7Yio1xkwIhAOUx2C%2BG6Oug4O9%2Bt44QnCwwCTn%2FFzKg4snN458FJZCnKv8DCGwQABoMNjM3NDIzMTgzODA1IgyCA9TTzrUOyMF4dDAq3AOllIFOKhfKwPSVeN0etJ2cpG1i9BLy0N0A%2BqQR5CjJpHkWnANQ2jwRS5VACh4%2BCcoWguETEb6KRcblyaI4SObyE1wJkEjt2VDNBC9x2j5x%2FO01BbOpRLOmSxX%2F6wFqu%2F1ETKFOfvxl5CoycY6GrV%2FpG9k9y0%2FgGqvmfjkSUcYx8UZLvUEx4nrJnNYc7%2Bxv0D3uPVJuwmYcvO9h4lmynZnImMBk%2FkmVzzH6ErVwWUh1Yza%2BmeUeQJBHvi3%2BeZ2umPw65i82pTeWW%2Fw2g8MlKG9uj5wv4WGSf1ZszvrWM5qxvApupGTc3EkR4K04D1wOFQ1HUrKCNJU8ohUWtkElrizF%2FdVQwwBd8hKBJMD3ouVHIOsP2WxUbcgM9IugNU7KmoXCAIt6FokVU28xFRy9XBITCqL7LiZYx%2BVI621rOhL1r6xJ%2FuINx1o3GZpGcxC2%2BWiGolZvDgY2SnNwnKTKkMpLNMp0lLDbB1Lc1XO2CLLc3Nax%2BoRrLwiPDsSWz2LMaeSeaUzzgC0OKZhX6lfkVBX0ZZZIGvmiK%2BtF4%2B%2BJINYDx10GRi1obp14C9VwzOkGDD%2FMCnLPEoUgKtqxSbmaaix98vciYCnj2daL7MK7B7xLoW70HRMepBYHPIfl7TCj4evSBjqkAVPJnPPcA72%2FYjFjy10iX2E7s3%2FR0bJWMSNcyRmhEBcCho4iQAIQucbDz60PpN4Pwv06oGMzuJ89ZDC6A%2BE354KoCArpr1qQ4q2gbEsr0FDI9XKz9onMEjVTIgd7ChiAA%2FR0Q5%2BADO3W%2BREsZ4qF1FgJy8gJLX0mBPX3rjmJCuQ9NXiMUbORIoGgTovcdG1E7DmNK%2FXSyiPE9a2URHpVbaL95vuK&X-Amz-Signature=f169f9e2327bad233ea935c34346ea5ab1009a84052abc048d75fcc5c902a052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

