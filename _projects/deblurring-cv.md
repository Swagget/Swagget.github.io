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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHDSDUTA%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T213750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGqi7wPM3omNLzK%2B8EIeFtiy%2BKfyJ8gAxL2bZHaAfpPAiEAvxxVGiVg1NRyQWqY%2FPxi9aE4pkKluBo84Yo4f53ApH4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLB1dCCcYYtFyU9XnyrcA0k0485FzH5Fz%2FxkYA%2BA3rgzBZrclT4lJwiEtD6JTLQxK8i7Di%2F4uw5MzXpo2M%2FS3kfG1qRbvFhlZWqYhanrcl%2FztJ0gcEeZUaQqAVtLAJOY6K2bWtFAzG0P19F6rETFr%2BngbjqW78i2Y5Fv6bufecDmZxTocFvWpqZ9NsLT%2BD3NRE3ToHCis7rzW00%2F76GoaJvnfFXCCxdKCJwc9dAgt%2Bhm%2Bi3%2BUDJCIX5XrcZj1vKUULV2xJOLpie5J1vPRoSUMWGUqeoKZayNarKUa5L7Kuj0ePMXH66wLKKAk3sQv0cnRSX%2FkdDaLQpFJhHJ%2FMzqkwkR%2Fs7KPkMvOhwe0nlhGs1IlB90a7ldET2neWzUz5KKtpxCPvoQ%2BkWqp%2FokTpY0tAQ4tHmEa0kvCkL175VYJoOSH1ts19LR%2FFo961EwqYN9MQjKpKI0ilMUUltaahB6DNZuEbnY4k%2FA5e%2BYozTQutMJDsUl62h2mU2X7lt7OjhTTsWP3GEIE6EInBF4Kr5tMsUTFpjS6PUhWJQXWeBB8qEXvoqyDQqPwTTlHkLARAzmyKWMyq%2Ba6dlAsIQO5BCJGX%2FyZGFOysNEiPqYTL1fCdGbVFhCB9pYDvFKfAKyJcZxuIgmLXBt1E7al1H%2FMK3G79IGOqUBqI%2FJC4bKnV%2BXLpCWVw8O6kgX8LrkPs7GqNUFwqdHZ4Z%2F8OuNM7i6Ic4%2BpxLoTOu76fu66ePr7MR%2BkQQVJAxJMQ5Wx%2FkFJQDhFDf7O6pjYHIn7%2BxpQWqJuBTQUEUgjzwmByDBdlz8axkuFl6YuB0Eyib8%2FlccMakAk07n9YmzgAJ1usFIkkrtqNnH9oAUxboYPW8F7eIaassmD5JusQZeS2gJggtJ&X-Amz-Signature=d3b29f8cf55180005b2efdcd11a6a1376e2ce968317cfe738606f01d719ec9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

