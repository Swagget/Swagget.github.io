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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JG336I6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyO%2BgfOr2OJ5D2loPLqkB0uTrnwxdQSeAaCpJgkr6h7AiEA0rBbn8LVRntK7aLVHt2MQQre8QRa40tMebCcfIZzgB0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE87aiTtAW1XHoGcwCrcA5ugFPTPCa6PlMsrfcrVrhqYQlZ%2FtGrNdd2fmIlDccWKoOqdLf4j%2BYrw2V2KOeZfIqkCkrVEXfT7JUdCGeOUTVlTXVT8arXOgbSOoF%2FOtWZVLrKePU%2FTSdbD%2BLQFDfGV4p2uQpKoqF6ngkMyu42b9rCS67kNxrYRBwyZhnwIsaX5%2BztFbbFIABkwuBaGxGzyK3hcX4u2XyHiPL%2FoIZrl0DzS1ayoUoaWLIb5ygze9o8kVGkWD3%2Fakb18TGsJ%2FHKmxXP3pGs86VRunXVvQpVAgRQ8kzA%2BxqAY5W7H6QL0T%2BbuJ0x7vmhbc%2BNmYvzTggf2WgHCnf6L%2BEMw7FoqQzpIGuz54cnOZ29gYerXhMVY4biwkaINNYZuWYDCdkJDL9CCezgxup%2F35S0vzGvIVtYBx8vyqr1wW%2BPRLt7IXr1ouWLaXAkj7mE1aslRb0%2F7h0yhKfs2w2GRcWDsk15WCnM9Oe7h6CCB0cNqJK0FXURw%2Fz5E9huRs31Tf2szzwEFIsHeLuEZzKccAdBGVAjZTkSEWFoZAPpPe60mQZVlk9ikXlwClTBrQRLkPVE7QsZkLYpuEgznEkr6I3Q7Q0l3OLQxZHkOuMs8gG%2Fho4efyaOJ5Mmjs%2B4ma6rJ0HRmgr8rMJXL6dIGOqUBFXZKyue06CO3qXlVcTtZ5THft%2FEiQZmUwDV5z6vg9T2Ur57YqAtPen15m8igtGsGmlnxM%2BAc7VOk6aXS9SSxmcpLna9jQlOhLB%2BlZrY%2FIdlbatW0OnM8cvyFoWFFv%2FpwelpMN7U8wM1ieIbvxSC2cUfZFi56PYNIwGtIx0%2B1eic%2BtPBEeCCPFrv92GqF499MZQeJK324HMaBf9LESzqnWd6ug%2F5S&X-Amz-Signature=58fe3532686ecf4c5338306c3db7da10e26d257e4b8ffd5e73c2c3d18d909d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

