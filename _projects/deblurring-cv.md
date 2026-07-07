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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G2ZXMLO%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T192932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENP9S4zcbbRl6MBQyIMu7FcC5YcWnH46ULMctxtCv8iAiB4QCUvJxt8%2FlhuPxLjf1yccquzdZDj358TiYwykvmqmCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMVqKL3T8z5TEc2HngKtwDQEqNLrrwe9HOK0eUjt2w8kdvZiMiTrsYrGQbAqvPwgnOztM5ReORfPjDRUT%2BxpQYDWwiBBzaNlazdzsMh9LBP6D87NTjzNKlqroOdbvfqhIlcXZ6P%2F3kTQUb9a4ApRsJ0QcGGC5kl05BlmPexMPoC%2FjoMUXmyagbp7B7rFaLVPf2yEM6dMevXIaMFl0%2FHI1mNvjw4JuCjRs7kwutTPXPaaqr%2BnRf2Oji4n%2FdN3kRG7wir4WmreSjjBrI3GDBdoy%2BNvWdMMnKb9%2BaT8oqyDlvJFFugM03htXFIB3bcWGiCY8HMUyMzGq9oOVYkE6DsBsQR84A6MJKiXMqb4FmeIQMtEEnEKcD%2Bez6mMfG6Zy6jrDCrU%2F0lx%2By2fgrTSt1xrEZ9qtEyU2pMqZsvupwOsrjlba4aOKaXCyuG2%2FhVTZENRfzVr0otSw98ZAfPMl7TGaYmM4rLuFWNmoLHS3kukjdIFrZTRAqOa0eGQLXM4BE24IJOmWU36B9D2pn4hy1HxZgEKGVp23PD0L91hJyq456qfO1jjZf%2F%2BM3jC%2Bbm8SCOY3jPNJwZWPCacM2NJbWnfd3bXNDNOHAvFPXWOMvRWM2Zs4lTXJvmHYESw7%2BsndMq%2BZa1bsl%2FEf2wIZ1UAIwq5m10gY6pgGiUZ%2BKC%2BWiEIGXi6whjiURTy4SoBVq5pl9NQugJhU7qElHg8%2BSQxT4DW1UK%2BFxe4euWGJqwsBAAccBZokqj%2BMFepqDAVRLucXu8Lv51vzOCz%2Frc0PKO4zadQROeHY8rY1pBlR9z%2Fnke5lPZ9XqGpax8ju3oMoR1JZ%2BeiAjSjA82rJhMKdxEiBoqtgEdy7bmADYlKsfU4fSF%2FuTuZQa1IPHiNFNX0Ym&X-Amz-Signature=d10ee753a8e77ff6f792cad15dfc313e0e23917747e32707a947cf094c5ec937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

