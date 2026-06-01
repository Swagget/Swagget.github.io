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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4BUJUD%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T222809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIGuMXGHYlW7vLK%2B9kBVjCmQX1JzXP4zUoBeQSOU%2B0tXCAiBvB9ZDBKYkmv2BcIKnOQkdC1vjeDlqr2dGR3DFtaTEjir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMGbYTyjbYcbcvRPecKtwDtc%2B2D%2FVYImBrp47oe1KVZY52K0gbrvIq2E4a7NWCme9kDGhrd7DvnmY6qEUkC52u32C77VLZQOsNkuXdD5vPVg2wDvyRt3npsCqQQKS5QE4NLm%2FhmOa6qJmAEGuOe%2FmnGAO7hFZ6kmKqmK1C0aSZ0Y3YDtM9CMNPreojiIg0gw0BQ0UGlLMzlm1tRM97F03UHAVc3BqiIoMbu9vcSYnUTqtxpZGpRolgt%2BRfxvxquRqIDK%2FhqvEWm2dU9n48IhpWSsVZ4IO7Tj4y%2FyqV%2B%2Feh1cGI7dcBKcsIeAXcPxRl7HSI7xk3GVZUrhJeThAhjjbRnwHDcaLjxvuTsjV2bB0BS1trG%2B%2Fdmk%2FODYkC14ZqtytN3UdAIcp7lX7WXbYL0IBjUWqZP5RczoqioED1%2B6Vww9uuBWy5tI6boiTDu9xVdsMx4iEd2Pui5l%2FG3GWJ7MT%2BVPRCqDTocZBLLz%2BHOQjJyS94OxdzRtUn0qUCngJ1LhDk%2BoGymhgNt%2FadWpKXm6S6NwpYDN1qwPeNxwmNOcIsu4HwXHvaqoodRo1vOethkeWvh%2B8gsZRNjLKDGn%2F31wwt7%2BnosdF6bK1RnDbwIcsR1iA4ZZz9oAmXootXEUdG%2BvXhrjdXDJKqJt0OV%2Bsw2%2Bn30AY6pgF9tTZciI9xCuYl0iDUKDtujt%2BQ%2BNHpRjRBZ49lrr8XFh2f0LPeQqyvydeBWey5C%2FOwCx%2Bxnqd%2BlVohhUeVSr0%2FcNjhlkiOvhGIUSOUyTyV4%2BgX2k16bxagTQLf1pvv628CWAAA43QXWoIg30YaLUT3EqQidiDuyet9DitwqRA4Uq%2Fj5uZBaf%2BQlcpVSMUpACTkpNA2XgQAprmdscYxR0Meal8580QL&X-Amz-Signature=c9a0ed1bf61346bc8aa26ee3ae6198c8e841159f4b3a518388dda43a7cb54826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

