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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIHFPQ4C%2F20260827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260827T131252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIFUFDgjhg6mAI3yy6guYPaujCdqpUoqgBhYE%2BsBlOdvfAiBZ7Kp0lYyoFB%2BxiDsMF9FWvoQhyEaN8jcgylVAADq9lyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM7FQWSYn7JuUjhfnYKtwDQgPPg9T%2FV%2FwDV4sC9G0yBaH85l9KVQOcs8IpN4e%2FnLaRhv6wnh2wk29qo5ZplNEm6kVosoden8A30wLd8FQiYCm03Vv7R%2FOy6c%2BLIwJnu5rg11FVzN0AvtsYH1pihLDSCnx4LtLYM65LcqUsGyOMf4wtbn563lxSdqxoy9SPKa9qZywQhyEmZo771tZI%2B4E90ooLZukEmD9jHdgOX2kAIvEoznNFtin7YeWTldirywD20AeaQGI3R4irxy0YnB55q1CmDPj5JPOgpXUKCUxJzevrKXXQR4eT7D2B9J%2BJ1ax8pJqJoN8LE3e5nuUV2mWAMnanX86ElP3qw90NTQ7mj%2BQxDLswnfG%2BXviFjlUbYA57Zi7tG9vQzZm4xpBCtVIM4jliGXYGInsxbUAUeiAnuEEGsERhlxBSuYMoWjrsG%2FFqa6cVUf5rmMgWjnIzW8VW%2BfpAXhrnWpBQEIueu6CwsjYIyMEdaP6syPqihyikHR7X7jA1l5C8geeuuFLNeFxRRMqvqyvn4J1wSZ%2BY9zv6nlZjXBJWC9KWqEkkwoqfmU0jOlPDquMjGICG3f4R4ZofmoQgXrPBN9bxSh1LmulE1IFn25%2B3BtM1a%2FF9EOhafY6EJG2dEzbx1hILxQEw78%2FA1AY6pgHe6852%2BbapBK78uDqj%2Bob7TZzgRlCy4JxSe1O7wJ%2BJzBs8nISd0LUNZix4nChtBoWuKKL2bieWuSwWmeUsKo2ZG4xoOHZ7HcPyBfhi0WIBiLrS1a%2FOiW8fJ8ce%2FR0ky%2FqOO9AIIiL7vwKXSrjPxM%2FpoMQr0RbLj3ZaTsLix3M9RPutf3Q6bZuYrDmZVayKdHjfflflrI%2BsLBk4FqbLoDY8m72QA5Ob&X-Amz-Signature=1df3b40503e187e907705ba9dd9c3d4ec3e1579bca52b57b164ba7a4d9e78c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

