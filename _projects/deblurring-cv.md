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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXOP3Y3%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T235614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAy4KqH%2F%2F4LqxEVJZvsrezQtPdhKYE4oDL1BqMHix0gAiBGV5nZ%2Ft5ddir67ATXyMMrKuH7sMkYVdv7uLB5xaB2viqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkNGvpuh5Mvza5E5oKtwDPTwJf1kXs0qGFXEdgGYCImIMDU6Ywi6xi%2B9Z2XZi2v9La7JgpeDOXDlGgzWe83vjxH3QEkqAw5JnbrVJWrFlFH13669fq0AJxdeHMcokSCo2S5VIhg2e3pBkqfca8zVo66XM06csOtWYUZfkKeBPjwER1R2%2BNwDlOKAyCwMuC4w5ZbEC2rTkgyeQZzId7D4qMqHrWK2g2MGWgQ0cVmbLhxnVPLGz79ZXRhglbITeEL3cInr3bKItHKYfcEHvTuwR09RwAOuqkWLyXIFnD3i0X9qMQ2rh6KkmswRkQSHa2HmHmue8ttvsJ7%2B24l68Si2awX9GcqK47plMiZYvGTaHj7fRau750iLW8TyPDYfJc%2FztO3tzOPgURG%2BRycegygLsRzCsssq%2BgfTN%2BUllhtFdmFQhpqBhKfjYW6Yvncg2XspNViIRVb2116gNQHx3q4%2BHPnyg4Y0n23oXBMDz22AdqKEKijGz4XXeNfHSL9riVoDzWJnH6NrkSEXnS4XpWY0xsDlR7cGL9P2vXSzLHsyQgJb4sx03ZnaElKhLdKBFzOiK0Cu%2FMujwuq2AhRfsqa0o2874ekGJtHgeSiDx0KewgR0SGpmWdepQaxpttWRKmBXtrFI2uBul599kqAUw7MTA0gY6pgGkrQDHm9Y7lF3oId%2FOXOOYvNB8Xqfk1nIG3gO%2FSLZlYelmEsG1IDcgQ2%2Bxh2ZYv0LkuhzuM0Eq8zlHAXI7Bqt4MU4xu0p3QyiOsdlEOzSvtsD3tHNOJTjmawIiQ6wX3a%2F2atCOmYhBnSVk9KwNXC5UoCMjNPSNZhpx5QftXgF8TUtqvHr52lD8WXSIqrWFSNpv53z72XRR96P3nrofpdQzftX0tMFW&X-Amz-Signature=8c2f655fbfc5a496af67fa25a499e82de884fb9f38e78c72899dd22d5642f301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

