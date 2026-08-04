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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STA2FH5%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T172636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCdot%2FFiyECJC4yHcPuXbQICDQOzRAj0QScaVEUy7hUuwIhANE4fpf3Libu%2BA4URygrG%2BcPduRselSngrmVENSZ55awKv8DCBEQABoMNjM3NDIzMTgzODA1Igwcmu%2B4JoKIIH%2Bwpqwq3APcJMqDakmyXAAgMGYWG2Fn7qs2ovBT4y5NyzQnaD1SQvSZpXoa4YjJs2gflYsWxijY%2BX614IftnQC2cDC5T2ELQ5TSWSz6uTkryRVLqEjLFBMnECO7sCmMIjraMVx0wB4O1aWXuvAjxuI2MhxIpeKZTB1ezLGi11wUFzFPOJcQ%2Bx7z3Zok%2F6AydOVHI7ugIzcda5eZQAfEpFSl8%2B5CdO9Yr8OF%2FrcxunAboYMBe7DYWfJj57PLkkT8AJ%2FMyGigXTrJN0nO0ZBmbJI4A16F%2FHOpWSoYV1LfSeTuUcXB3by5%2FMPFo%2Bieo5dHWwMkAED5zJrmF1oZlHGclcGwM7mZsa846Z4Po%2FhdZu53MZoQQNa6Wzt%2Bm6s58A2abXLXLezMIJkrIY2ryiJBXSPT9jWKFRJ5NgXzxrTw61Shi6vqoR%2FeWdJJJYaGAVgNW95t177qjtdMEPZbWmI2TbILhhFrUhvpJKGRu0QiQRaICE7QVa9%2FBierT7uT06oID5Ez2Zl%2BpOprIvJY8YSbUJ%2FXMuM9d%2FdX%2BMBfhI6VIr9EHUUH8yXFaGayjUp6Th5TygO3RR3HsODChCdvrK0ni8ptIjsHuy7LzaKgoS7%2FSy2dz75UBMjCxw8lz0DKHEEHSQRrTjDZkcjTBjqkAQlVjDsGzm0Dq3TNwIr5tingH0zxw1nwN5fQjpr5c9PHOo22ddVnC2D59Znf8%2Bw%2F2wSEh8kFmt8pXU%2BxxCjZT61ylBlLzV5vZCBNVgxJL1aMbGZd5NB0EJ6sLjtJKqv0yOq2QxNMFpTkMpVsHtwiorqaqx4%2FUOLxuDNB%2Bu9PURJ6ldY80TMOEiwcvv6154%2B5TMb8hYx27C48W1WiZJ7NwRcEXMPm&X-Amz-Signature=cb861c1274033c87e71805973de211f4d7491c728bc9597b157968d89ad7945a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

