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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XTCRZBA%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T190813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD14V1WQ7QAtjZKQjxIGrOFnfEbth7HvVw7ZMHH89CDNQIhAKc0ZuAU03nizdpgWaf37k52tZaOACHsN0pehoh7cJQxKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQEOxIntJ88atYCikq3AMvHy%2F3yD3beXirKtU1sPTFjqG2YgCAZQiVqiDfhJ2CZjOtLxF3%2FOibb7pgN2DULPkWY4UkBswLIPtxdpJHfK8Xt7R3KSjWzbXhJX1GBjda6gMeWZxy%2F6LRT2lSeGvuYR9FLAHtoW7ESn2lXRGdns37dMSDM108y%2FHVgT3PCKhOYWMHteqSToonMQNNDvz0%2FdEZSzsJLC8x86%2B9qBHqR%2BZgvocU%2BYtfD2ULpZp2pKBUabtoFr41V02PUQhrZHhHw6X%2Fr3Xx4M7wGzavdbMcdoIXZUelbFIEWd05yc7I9KRctyx966Yqywpmh51x8051y%2FSzdcExFzRv54dSeMcJf9BjTMs4WcR65tST4DlZxoJWFMX7E1VI%2BChARSEs1VDB2uMYEbI6LXfhmCap6JUzMTw232cKbGmv%2FCzjO%2Bt5Uk%2FKEwb%2BzY8gIuOa2wtvLiLVVJE1m9WTH0KGc0UZ7gc2RZ7lN%2BAOmgDU2ffflQENnwqccJR3Q0Fb0qukbod5v%2FVcFpJTgQDqoyFgzkF7hGSAMEF%2B7Y4SPnXHLZfMETVwSU%2FXAz7OjnzBk%2Bi6CWVCkc9JZGOfYbvolUi9VSN6Ke4ifunSfTG7doFxrV3UL9e1IWoNlYe%2B2um1QV4P54qS9zDimoXSBjqkAYLpM5bWzG09Kkdy3%2F67siGfv4oN5m%2B2Vr8XbS%2FrIMBYTbRvofmR8t7OlkxKfruJokqJNaWZY7qzo3PIMp2z8rSAAwt0GuMBPxoy5dbBcSlStDDTA8Deon2EFwQSwU80Cu%2FwR9S%2FEWxQ8Y7Gv7U24dzbLTBQbmLMXGknR0rE1OIIaIYxLbOSd0NPtiHAyo93KC10cX8%2F3U8192Mt%2FUAjugAnQlBQ&X-Amz-Signature=297be8ff37b172322274619a58a7a8391e32f6011857a4a6b2fa1301818d6f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

