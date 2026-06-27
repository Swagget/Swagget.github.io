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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q47ZGCF%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T120356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYDxw%2BYJ1OnCijZJKTnpi%2Bt0hrUehLeWIp5Mt0n5FuXwIhAI4kB5w4V08zCAX2r3AnHnnSQIsW0af2dbGokG4Yb%2FUaKv8DCHsQABoMNjM3NDIzMTgzODA1IgzvRWaMm0lO9F5m%2B58q3AN0mhfE1eoQtMAwVThCZsFgkDLpB1jUD0MZH7whR54qs1inzR2%2Fa7qnLg5b1p7YOEKOHRLZ4Ykb1BZjra3Y3sF6%2B8xoT2%2BZdr1MhVfKHH140Kaf2EtryEPmoArzWFO6fGIV%2BeCDUK6iBNOkhs7WihC6YIsS7lw%2BHFqo2oDoSfa4ZygrufWqTXkvnwqSlepVb6ECXMDeYKt%2BJvRLlWBniFBikkfWaQgr8CtfIpwMb0Wqy0Ez531o76W2o4xX5hjj6JfXq%2Bu%2FDI2QTc8yBKEggRuEP896I4hlxsxM362%2FG42tDHFW2REAnBQlSS7NaBUmLpExomtE89apJTeNub3ju2uXlFVljFR1dg3FwVEWBHMltOTI75QQmjCXiEyUs%2BZ0zsMxk%2Fc5snZznQy0U7AQNinMW1eV8O2sHq69OMCG5zM0NpGqttmAkaTxHOmxYLVixbFWZUSDJYW61ybQTf1RH8cOpWYGIO6v8qZY0WwQ88FbopkPc%2Bp1Mi3GkwaDaqaNpUjtQhThJlFO%2B4nG7ykiXumlaFk1mzLaBPUTKHxdyfQQr%2BlHvagYnZaetm0HxRk%2BmfOHGFtaEXM7n%2F7FpwkVxqtLcv8HIY9m57QGSwPOWR9RIszpx9mjY7jTxMhcezDLs%2F7RBjqkAXMogtWl6XmsASDQawjjw7%2B2uYRY81HhAWwhoZstJh%2BOmYerAPS76chr7qq9ySFMyY%2BaqH%2F9tzBAbdM7F5K49gFliJAefVAykYLloA23L1dMORAGkpdnuWFONxP0G2D2q4zdk9Tln512zXCb56tm%2F5hCnmQfx2PCOrL0hUJc1mQyG0uHRnEB7lxHxDrTNg9AlAH8CssfL1MrGMwI2en%2BxUENp306&X-Amz-Signature=b160b5898e6fb0892625ebccee9761ed749893585e411e9aaed86b0ca761cb99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

