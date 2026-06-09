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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNC27TJ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T195251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDD46r0UT6kVThdne620eJlX2TpX9qODKp2jvE1xQHWvAiEA6y6QwHc6LVyeLnh16zXbz%2FPxMYOA7Zn1SZ3KnqRIfVoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4Y1vkjkMtCd%2BTEMCrcA5upiQcDQMb6uozAlrhVM5TjXs14z3f3UnVAL%2FEK8KYEod%2BLkfXrg1gCYaiMSIHVqaRTUj3Sin6swzGFhmAW9XlUz5xMMrlhY6H2OpGLqdD%2Bi4lxPMxdTp6j1HZUCEzBDM03mK9BBMX41I%2FvEVhFw%2FGzRi8wLyCGVHg2pUICh%2FoXQNGtHmqfQFdHoguUOCuQzpD%2FPFpCwfQPqWqy%2BAan4hOgyzH3Vk%2BvOkGyrHDG7fshbL6fF2ABaMflZMY6n8e0LMxulW36wBkKCUzKdQlYFgdR453R0k1JUPx38B9r%2BkPhYasl%2FTITMjcGU79HowHZ0nSHjczYx36YEcbF2W5sN7lrq4V0%2BnhehT07ouClWW2dC4YURVycnt3MRBam%2Fzy3pT9rBF2C7XyDaJIIGG3gZ7l%2B2Mm5BGMZTRiM%2BjCoGvuytT2CLGRjB%2BmKV3Btebep1UJ%2BGjoEZt9RDZU8zahtxguZjzaWO6Mh7fEwKHxGbjep%2BTPIAAs9i9%2BbE9TTmzaXfN5dGgo3RHxdNfmgl07pKD6kw4F2lrFhYXZocIXdPQ3VMSUUEQuzXMxQsOTHmUUVV5J%2BXrH4MGDDPNqH4X%2FtiqVRwHZdqF3Uov2awncIlJzUnLkSmRZJU%2FL8QkW2MLjKodEGOqUBS3q9XberAituMKeNedpfBaOKApIuhsl4sQ32PJdtO67AR7kLgZHWcnugpQatkqh2TYvXrPzfc0WtuAJjCKeybyKNGe5%2Fgpw89UZAoX%2FPuSVepfNLriYwyuOBmSgC4tEyN0sd8%2BeBtT4AARNnxQ6A02e4fO0bo8orAQFWTOSeBYgRUn1tdpIotIVWsJ9vOuCY%2B9nqniUW8blza%2FFKk2cSSwKdPW6J&X-Amz-Signature=e923e47c8723abe464fade1b92e4e366f3c783de5e655ff389b7f029edfb25ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

