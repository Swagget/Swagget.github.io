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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CKZFQOT%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T021330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxtHzAws8ftdGtyYBUbJ0%2BLJE7Lzx85taqgyHBLM2%2FwAIhALqStixsEEP3AvzY7wShaqurwRVcrjMZhom2mVyDaDdGKv8DCCEQABoMNjM3NDIzMTgzODA1IgymWSC1JHPDWS3R3qgq3APERd3sPEAC7U2BjVzKaBejdC5YoYMnYI7PXoWdBXMZJkJ0RxIOZgGwsEV5ih8s8L57QhkO4bCbaiXGlQTkcxe7VWe3UC6WTnpM67ggMF96OgwRazveqFhBJn29Y8%2B8okFrB49c7rsQEyQ8mHmXAr3zqM8CD2JL868MyCNHUlMZswd68Iyo8BuEppsB%2FNhhPxWwKnnV%2FEg8hVwddujKPuvhovD6lk96dCEane%2BwoQnkIWeCQViuVh3C73k1OoaxqoOFhRballqwhx2x7i5%2BhUYbWMqx7MsyLS%2BEQto5o1ncOICTn8wUM27E6rKt2%2B23coPwC30xHl9%2FosfGCSw8eAEpNB9UUeOFUij6yVXMVUSVvYT2uEd5aAMkQ17jHc%2BmOo7kTUmsFvRTmx9JICDMpgrInoVJb2ZyxCPQBSSEME%2FrSZ1PD%2FJRpxA8arSrra%2BJ3BqbEsjxVMjCfwvHDyTK3zvdNhsKjgTaAkoJf9ZEVR9rcm82K%2Fk5LiLxY%2BF8L3XWIW2RimX5XHC82V6Pkodi8T7QXrNrfmBL4XOIAdcti4IMZOZGU7%2FFHh6uxp2P2sxenNJwNuij0GDZh8EDY%2FPXE3rEnZJwEj8wcfBXMMAi73G9LX08U6Mnt5bkvOFtnTCV64PUBjqkAcVbnnAATrfTBj1AeS3vnqUWIIqyv7CkWSrB34zroxtzlUq3WizYvmKKbXeawFbJ%2FmWTY2ipCzjfSQGO9UNkoNrbg858PnAppDBgK1WU96kN4pxiVn5Xn03PtSftKD8yKrt%2BzDTlQ%2FBusAbHfcsXSBKaV0tBq6xphRRIexntQjq9oGzwtLmaSLi%2B7MG1x1MTi1IiA8M5nGdFsnt47aO8YyM0kB08&X-Amz-Signature=2db14504dc2fcde79f65cc5eb18a96f82eb9258f3a280a2cad96b15c6fac90d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

