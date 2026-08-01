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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP4QUMRA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T214141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCICRnqJID3u7ff4zn7R8EHAWGs9JhwwptqWBtTqtZebBoAiBv%2B6xTXTJPjWOBEzrJRsBJGP3mnBaxj6BqxDJ7XUBlnSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlBv5B4rIII53tGbfKtwDuquP7lbp03%2BaSmTWW7WtpBwXMPdc9vCa5SZOpaDfzKzAisxFBunRSmp9ggBzhG3ONZYSrFyET9G2aw5GJGsOjhnbthacBuoOmqbRsHXN2NpStLRWKw9Bw%2BuMRNTb2sXoJqkCAjUFHc6C0CEWILEidWbQGDwILYaFN8%2Bxs4y0%2BeQtj8bkVP%2Fn%2FcahFZOK61La74Qah4OStHFjX%2B3U63Syd4iECuSFS57kKwZYlQBZvqmAO%2BBGMRngj1mwiADHvTRSNYbhv4Xhxw0a3fXB2VIx2bugYDtM76pSoSsvEf9%2B0GYUNp%2BbCoW%2FtUyAA2s%2B2EKwHMAe4mMNMBKx3c%2FVF7BTqFJqnOubp5EnPYPXc%2FacrRsEgmpAGzbSrhU4A1EKIbFVsBz3MwpgH6B8ZPLc866UoVi7FlnJFfxs9zissh4nuNQ2ijAbWU7%2BZJrjw%2Bv6iPhtEBXw4GxfcwBrzOxpRrN0b7WJe%2BxGj3HA8hA9OwDyaX%2BA6GEkmCQtz8QV3VN1meAjUDxkG2TZbNq3PLYjshOXIYHs49jNiC3e4s8Rr4QByJjfwRidWxceUtLEZZUxjY%2FnIRRsxFAjARyfNrI79l%2FL%2FKGyfKC6U%2BzbNk6u92RXVtFFYjnjEgFtJLIk5ngw1ri50wY6pgG%2FFog80owPYv7NC%2BE8u3jeXFb10kBPgr%2F2Vsy1a11xA%2BtUufcRB6i4bi8ZjPZksrhr7a1C3cBEF%2FJT2tKZOcs6E%2Bfkd2zfOwIgI1ELz1gMoJtE3DgHxxFrVWNy3zt%2FYZLFNT8Eoj7DYluF5k%2BlSfs5ozjmoSM9SxysDXKB1FxbrViX6pWI4VN4Y3hIZM%2FZCaTUbfGvXzWRJvXJ9DwrbYdh0ren%2BfeQ&X-Amz-Signature=aae74f6af96d44c19a417a4b0b522ed1a808c374ce2cb2ff38e20bd8000fa08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

