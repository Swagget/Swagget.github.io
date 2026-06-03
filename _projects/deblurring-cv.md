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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U56KC6PK%2F20260603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260603T194000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCpQsZur9vkEYloC%2BiT2WJcwqPZ4glKe33q9NI0cNsgNQIgEP6ICkifcr7xoiwZQLt%2B8InxR8vzlvM8ouaLH9R2aw8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHiHEVbdsBckznuvxyrcA1LeVteWSzaNgR5dXMb6sMinZDPu%2F1%2FYiOTldc7qNOpN0TIDomlUoPdVgOsHUDamCaf8ZF5r8cm%2FaNK25tXJcQmskuaiON3aALLVZAth%2FI2lHoYxwLP5l771vKN7t7ANpUwBJgGY6GaJBsvtdUP4qo46zLqgH8Q0aRfoA61xOe1XvoiRO8P4YINpIU9aRSsXhjG8JmSVrhn1sFu%2B6CjcOJFQ8i%2FA4XwbPwpeNVcDJ%2FSyMjA1qts%2BceY5%2FvlY4C5p5SOnNOfrAKxUpY5W7df6VLySX0BBODXswmbhnGYCXkNPAjh%2Bnt0OBGGrXH%2FhnJ4rRd6tzS23ApP3XU8t7QxmaSJOhHglexkuDOjSj9nkMkTQmfB7d7lH2%2FIlZ8Pir9Y%2FQwZs3NZsHNQYUadmlZLVv2WJ4y4uzqLq%2FJraU3c%2F92MjlUnKcf6nRcoxW7aXohRamp0obETM1ZCfxqD945gIUQYC5ecozLrpk%2BPTHmxfkA7bFy2e6Zom%2B%2FLpUIm5XHKOD4gd8I0SWzS9bf23fpc3QooaiHspl%2Btg%2FbnSzOGycoGGPjpkmm877d9QmYnNdy8jjyvRtBzLv48M7qWXUW8ElDLyCO5T0cqTRfKsaasJPJRtqF11Y4ToObhKzADGMMLegdEGOqUBXKFvSC2yvT9Ey2planu1wPYF6jpT2mgAmiWr%2FI%2FeAWcJV5NvQTUIgis6V0hies80YeK06xhGV3%2F46YLM5CPemRRwNz9pxy26Kj9Wfwch4AFaHvTFcrPzfYhLhyhT5uMJw6cW8yqRlNbm66WT6H%2FnEOi77oioQBYFO4uBRGniPKUSYCA3EkbkgoNLpLNZhXsLc0HntBrOIfKSN%2Bm9IRQiBU%2BuvsFS&X-Amz-Signature=dc9fe39115ab32ef37a5fa8f482b92beb5f4af9b3b92d2fc8f673c78abf0d696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

