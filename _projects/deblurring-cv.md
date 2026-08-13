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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FBAJ47T%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T164204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDKLD%2FIEqgBbIq6SrV0ljJEl1Xn7pD4MeKFtN6Sy9Ft1QIgQTlXoQlkscecJ%2BKn6aXk2NYlTEOpS2yfVnN7KgMYLoMqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1aoXD%2B6jDmtJwXUyrcAz0%2B43zW6mjWYUlNNpM57ASHB%2BlA71MFLpj%2BjO9q3xbku35ueQAQ%2FYx%2Blpo8Fi%2BN6temMReFMjjb8IDJYqGuFTRCy9Rs2WM6zMmaqO2jpHv%2FJV7vgIE9T5uSG0pZTYKwrnWs2XA2ZZFUSO36zZhhTpEVeUXjz7w15aGZN8%2FiJl1HjoiRVRflacWsP9C2gLk6z0b02gln6H0j7LoDOeaDQMMkgzW0EQ23MKOsfVeyvcFEyUBvC9AX5tE%2Bjo552IP3G08A2EnUDmZXCqdZff3m6Wd5j9TRxdxOe9KCBpXAhb08C589hceGivgBIsRwlSbz7Af7W74rK03jbx099aL0vJjJVaEL26ahtosTDj7SMQKKci9hG%2FidTLk%2Flb5%2BX4FgrqcAXou8sZhXnDh3OcVnEiBvDKjVfW%2BDS4eVt1Beb1bXjscfezmnPXgjMNjlVzaazDw4up8VuRZOJ4G1dz6tf60UB6Z89b%2FTkWchumjB9Efyo24q%2BvjsHxRU3mjcIgwN6GIrdpAlE8oRItSxVhv49ul676dSg6OQsiZ5sKDiz%2Fsy%2F%2F%2FiBnCFnn%2BfR%2BaCFRNaE7UUgG48GCQ9kuRRSh8BchUJ6RnH9OOnFrtwJgB5%2FwgIYXVc83EcsEtsURq8MKLX99MGOqUB8lnPu05kRKz9%2BjoBgnsr3NwW0topw7YGtiUYjEWvbt3D1G7Ab32mfo2w8F0dER4SqzF6hyhy1shCUAFCQispgMLBZBkz3g83%2Bj%2F%2FH4WCTj5B5XLbfAOa5Kj0TP5vQNc7hBz95czsVgKH%2F4yaTH83Q59XkQYWDn1nyiwctBlMV7rLaaI0gZ8HpUnjuxGTBf5BwJUsfern%2BklILKjrCTD%2FJ4h5iKw8&X-Amz-Signature=758a29047924d3c229bd107afca2381201fe3997c52f9fbef3e07e9f27a224c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

