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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BRCZ7WG%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T205917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAo1aL%2BmbmuMfkkYCNg2bsyMJbq1FTt%2Bx9T0wLNQIF0LAiEAuwNdStjlVnbgu5s4rX2WEbCxOvMZYcVrS7gsKzhKve4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI1gQJs4UjrEbyMuxCrcA2fLgKrG4ZGEyelXwXvyVUain4X7oTpa1xpG3kd0bBGck%2FgwfJSVe3fK9DFZuIUXa3fR%2Bxji8TA4CPZXl4VO3AGZeB%2BUGmJJxTfltEXoRiR53C8t9X2xLJEDrHRRcNmEchE73NmJQ9QQ0dpUZ9pDijMT94aqTqUowaQMeGwlSndd9b1L9UORPhdWx9qwQyU3cqicds7IdyAAqZv77HEjxpBqcwxUd3fsHPjDqZeiU8E%2FfKNzC0%2FW1HvoSL7%2BdShVcbRFttWRaOMJN7YHJEtkswnJq1IWveZm5BJ7jjaUqeMBUrIHLfn7Vq3f7gO%2BjMmtpJB5Ff%2Fm0ViA08Z6PzoUINSsNdej5asjikWkUJ23e4WrnHftWNyhSoUC4DJ6QmEalAlRXPu3jv%2F4L5wDqJQdczJ24IAgL2eC9fg8p0LLiYStpmlrwM3voei4hYSsuRRj1VWVm2%2Ff9kmAqgKJjDBG1uM1mcdcJCc%2B%2BpbcGed566S%2FlxzmJ6%2FVoOXpUNPxZME9reE2ISSsi089iR7GGcJmtL4v7rQdI3Bz4QHUZummoIeMRGLlokp%2BMdxkx6RtLQpBsg5m0jnMV7jnh0fMVwdbQeW1gOny3I15ezVFhkz%2FlQViUKFB9MbkTV07hzEbMLL%2FttEGOqUB5vIe%2F%2BuHpQf5Z1Lw7RT2QfJVC0yXhTnCopbhVzfSPkjxvHBeLQQdgBgLMJqM4S8qkc30anIqommco8IflBkLqRAv6kb6CMpcLB%2FNzlm10VvmfSCoOzZPbonjGW0wpU%2Fi1Aj%2FSuTRZ61344SncIqDi5XXtUmntMmXRXJwaR38gkpb4IY6zzAJ3b9uZg9B6%2B11%2FQ6iLyAl7uVXMm7B4IaDEF587W75&X-Amz-Signature=337995f00d6aab15e40105891785d0cb5d208506f388502c3959f822b9c2c3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

