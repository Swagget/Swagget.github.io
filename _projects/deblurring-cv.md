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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6DAAPR2%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T004441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX%2F%2FWW81%2BPmblnbQUh3Nh7O%2B8wm463Yzlp2VNWY4fVkgIhAJOHZf%2BBuv9cH82ukPoqzcQ%2FEq1%2FecIbRhHUMzoCJkDrKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWbQMM1LJI%2BkkHrFkq3ANk3XjFUqa%2B8tItDqmfjF%2B4h8IXRL1%2FUc%2FmYjxasP84Tk7dzX1BZ2WI3XvUrP22MSCfbe%2BUOcHflqFEv%2BywVaxNbIfCltBpHQCCIweUZwUU5%2FdfDkv3G5CY1%2Bmn7NBXb5eb%2Bov9GspvFedhVJL1rgHSyoGciTzOh4ha5s64a1%2FfawO1MYKDdaVXgrO0f%2FvrV0a2kX%2FzFT9PMpn5xG%2FlTFD9jwHskCLl29DH80%2BPSwihS5M4OMYeaqNSKutDfqgv0f6NaOBvtEkxpaz5z%2BaogZQhlrDr5GxnIckVd6FXVHfeFgxHtjzmXPNMzjDuHQlFlPM7ReplyCjOAnJvE2jrA1q7Cq2P4vJc0sl5YJ%2FZRf%2ByjpSR7NeH470gZLCNb%2BFRlb%2FZWPYHOKYTLm0PVYHeV8mIRj3yYl%2B%2Bla9w2E3S7WyM2r3LOeHE8dGkQnZE1P2GA0RvVhHbPOfLuI7RG62GGJX2NjXZZjoBS8FQ5Wu8q%2FnFajzd8fMFdnRO6Bqrg911kRopNdHuqvoFQnVQD9MDlYO82hUleb8yfJiEl%2Fux2VkRycMXnZfy6TpesuSsutLQpaIzKv%2FVbvzE3hWDHjqUrpVoO73DgXqr66Mv8mHss8HNhAPDUVltGyZcubGQGTCM2%2BnTBjqkAdCnprSUAAdDVH8BqKYDgngLBYzuwUkoD%2BKigodzM9XlkJodxWiOOy0QeuiE%2BlbKszlFKvudSwvMGmkTre6MLJr2Hdbfdb%2Bu3Cnv4jJkPrVjWym24HMk5hG1OIgNiANiWdlxNovIH22b723r%2Fisg3Q3bZOL%2Bapv5vWGwoS3jYLaU9Tfba2svSQLLgIl8tI2rJcxUaSO64gFWVlWU9z2mhYn4Q6Tp&X-Amz-Signature=15b84de60ec25a66b81d204a417e964adf8c33256289a178b22f8a92f2485df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

