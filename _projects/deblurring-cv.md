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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F75B5TJ%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T031937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpzOPqW15aO3ZGPGjvqspwVkl%2Bwg8SLm6%2B%2BPbfaPSryAiBvBfD9YtCtr9dG9yWKbEyuoLZcaRsMlIf2sHaEINTzCiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BHHLP6hBUZps5GhqKtwDVPWD%2B%2FhucVRrW4io%2Bw7fwxnMo2M9WnvKhs0XN3zdK%2FBXsyGVl2whpR%2FUWScLglHprjt2OOVANaj2eXaXfNWtgmyhwbj%2F%2FhMdZmyMg86oEAxkd3EisDExNGp4rsrajOyhzBKoQHf5bC7aitU0GD9TUg%2BPqdGoU7cW48ZDZ9SG6Fg%2BqBLjP41t5Rj%2BdsIZgbW0r%2FUV5PstXkeVQHIbdCFgsTIdy1ofrX%2Bg9ert4crlNWnsN%2FdkSxfUMjh5KhNYC8MQOVJ8NTmHDhrAidSbPI4INlyBvaLraIIhSwWGn1tRgrhqZv9h6ZLaN8xz5ZEn6QxthhcQ1VD0hLHwqzoQkaFrcLN8fw3mGGbiQSyBSND%2Bk1R7UglsnoPFoHxqa7EBeUO1%2FxLDReThXc9vZb2dHhsvmaESNjCmagXWtpNRUU%2F3PcuN%2F9MXPD6kHnKRwb41hZTLe6aKqJIavjXaxK0o2zYw18m1UtMDCoijoIGjSV7glUy75eGIw%2FSBpxxavoxBYwEF4Mtli%2BGlZNzTZvKoXApb9I21nT9xLcpiNgQc76im2bL2RhyVBfIqWXZeBulzMzePi2IF%2BKTE6thAckjHjH7qv%2BYfFMus%2BRz7A6dufNluGCctrvo5r0Yb%2BbIXRkYwhcze0AY6pgE3zMGAr3e86%2BSl8ApahsCUbaE%2BXVXpbUP%2FvLxwqBnfRR0zZrU9gw0%2FUz9wVAuVa2ZUbknVLpovfguT5%2BCpZaEyJEf67i3Yggs9eXjYmzoj2XWjcOG0c6tooEyoG5FEXF9YZCCRu8I4ZOHGSd%2FIanShQagnt7UvFYjBLFvtXYrUFEtIQSrALb3DOPBdMiPeSJlkoe0Z8jbgTzhU8u3ecDduKufTMEqJ&X-Amz-Signature=aa96c5c5658511e1722cbd107233665c9ad344c9ad019e48853cfa034435fadd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

