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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUIK5YS6%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T080612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCIyfOxhu4cHHh9spULf56I%2FNe9xGV4gB5eYR31QAvPOgIgHybFkZP5CQJ60SdvU%2F4uxU39UJxJ4ioYuoYbLtmpoowqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHpv1thk6YvQD%2FFFyrcA0Ib9Mk0sqPhmI4RwbwD%2B6A7qx70dyV%2B2hYah8U5e7G3flRQ2YQ56J3OQfcjtilrJA59Z8Bv8k%2F9BLeKyGQgBD2cFENIi06%2FkL7Mvdjp1BpQQ1cGB3jSAzEO4FI1V3Ekkslko2%2BwahsA2FzsT2on23K1gtPCWCLSWp6y5bKapJu7bkI1j4xcWHZkzbwh4hcI8bWQ2UXlBFJ0vV2eaqK2gp8rNMNUPrLwVuH1I3j%2F%2FjCQOts%2BggK9VTggys5cCdDwLCX4EZpCS9F81NxpNXMUpZ3gzA%2FxGlCs6Ugc%2BguCfhZu8cds56hb6wvLgdqeMwqHpNjf8TCZK5DLD1l6xqosyS%2BD658Qwcx4Ax9hRmjkMouGDHmVSKIyM60c3eGEZXBZlS9BKjLak3EB7WWjWZ8S4zgoGx8rwzxH9%2Bi4ZGqeU0cDQbjtjVEJIg%2FbXRSVilleknslomBUY%2FPX%2BByMQ9DI5vnmsMOgTFKR7aqHr%2FvvCoLcOn2C5hSMFpBxP5npmgrJm5MUMcE8Z%2FlC6V9SYid%2BgH4IAtILMsofaLBUvBEVw%2FrkiuMYxAgyhYZvZbKOyKX2xJh0z%2FEROmlR8jv8CxMUAkpM3X%2B04l1kBUVBmpHHueVo%2BVMbdTJhQa8X8RWSMOjshtMGOqUBqDhWXc0ni7GCvlArZL7EA8ZVqRA0%2Bgli1r34qJFb4wVlVHazu2bf75xBNXbpA9KU42gBEfy%2BgYEm1kZWUyeRv%2BlaNiVy2P7fNLxqhs%2BCNT3dvMeq4LmQ6E8ehmYNlKaxjpsesqd2OkHI7pSKLYvDnpfXe9dCVIJgOVho6DdavbjyW3R3cI1OyQPfJrlDLPPEAP9ULV6ByfXHEWprHFEYTxx5iN4i&X-Amz-Signature=c530c541a8798c0d433fca75443d9feedebb2c9e81c74390a1cb9457307920e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

