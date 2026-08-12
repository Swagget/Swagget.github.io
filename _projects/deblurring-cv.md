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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657P73JGF%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T031553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADRlEkGVHY2nidUIB15t9dXb9McGOceZbTorX1nJlUmAiEAyl0TuyKv6n4HDuwdaBIvUpnUzSwRl8Bu1uEnhNjA7ScqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE99VhUVehV0U%2BZKbyrcA0ZjSxpZ%2FNxvDYyUoWmIJopKhC7x3a3qKagbxr3Qo31rQAKkMq2DBl99L4fpLk1AMUo04ehkJRKDqWTFvNuq0bpt86BtfOaAx5mInM7AZiZE0LnW276Tt8b%2FuIlDv2cUOhBR%2FjfRRA6%2BQx6HP0VfqX4C09wXI13OOCLTE7inGvMnq%2BhtM%2FNlE6y06%2FFxG6RUAnfNDIj5PqkAT9nRsEXD%2FJg%2BgGW8kcctdAYSWSvARQax5pXOXqvXWxCGNzV0ZByBVXx0vljQHCGdsIEwZGWSkBv1%2FG%2BcePpnofbKtDR0HwVWwXQADV94hpHhHFq9aOkdEseR%2FxHxSP%2BXTOLN4HnW6xNZyIA4LXFBE8cqigHU4uky%2B7xuFlC6be%2FyGXuGZyga%2FCwoVcT9b5Ka%2BtI2uneZjndnY940WYIyjCStKFOchDfd8%2FerC9c8niVt24%2BtnFT1PNvAXd4FLhOBfHwG%2Fp8iIWFm%2Fv3BWhVoBhdMIOAb1N5SfctIl1hUf8o4%2F3c2mgFI5o67eEBQH3F4grez0%2B7DHHZq5OwVBpXD6bnQovDnTe6WEBN07b9Ymbw7IsRmoizs%2BDd75uLjOI7cEJLZYYPGD5qUrq8ySwrLETLDpHz9Y5OFRhThnitWFqat2ryNMIGr79MGOqUBQ2A2CePlEBQ962y3BuE%2FwDKlKMjyol1GYfU9VIpajxE0kPU0AfzWSSNBkiHlpYCroBqSh7pwT4H3iwuF5gQdGQzQuUHOzUAHn9RvVKm5HwuH4kP2q1t9AbFogpMGBiZnL%2FpMm8iQ1deKgN5sxxKyfoV0TB5z9OOPyJzQDueEfjD3R2ZwgDeKuUBI1vxSsMW71kDlgK14plnPgR7PyUpGkBMTnANj&X-Amz-Signature=99ef4e345e79bd7743b543001d6009f888489a8dc5e41d532518c295db58dcd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

