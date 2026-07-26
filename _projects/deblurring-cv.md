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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5F4HYZU%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T214457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCY0QYwJMy1g4lzmBdb7gnUEBnGpevXtILmUBKvg5CtPAIgTjkk9dLcR6Y3OmZUf2hxEso7F7Gow%2B27UM1o6GQPLCwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIXIYnLe9ge4BKcpcyrcA6LL0vk39iVx3cRtwW0ExW9LoeSUGb51zvtOckYw%2BiB7FhsKWhEEPhSAGWhVj4Wjp8aW%2F6jQUhnsl8paTSDeB%2BKzM4TgTZDAFNVUvTTLj3LIkempoMR6O%2BqeQyhGXY90M8OEbcZ0SI1uZ5L%2BtxnmqXxjtYnRigNm84Q2T1dgxog1UrEqsN%2BnyhtJEKQnzKaZPs8cpaIfapl12EiOeAWOJOx8e9GjZA3eL8j51c73ypU786fYLf37ey%2BKxmEfmbnc7ma6bZ0cBohqm7qFvQG02mh8xcArM9yBwFgEQ%2FN86ijUNDzJAq3XCSQD2915TreY8lNQPwnEU5zgEoA5jR5Jwrll4YTkEO8jA9Mr2GaM%2BWF0xDPRLj%2BjXs0OpKU%2B1H6bA7xoQ8xP4SV7%2BAVyTai%2BpTh6ZJzXYhFFwKHYgpwUe7C73c6qWXE0hYF8%2B80%2ByVUA%2B8AqVcWe7z0Gf6wiNdQYGYKsCc0dUfOBZY9YhAZ4dXWkvqBDS%2Fv%2Bmdr6WGWrN%2BssnOm1kzQSjdwNHVz%2FP300WUu0nEcyyfKAiBcibAKINidzl3%2BZHUP80hb7JKx%2BFmRcoW4MhBQ4%2F7A7gvgCgJuFqqcccinidvUcLVPGK%2Fv4j3VpTfAAvZpaVFPVvfSEMOrmmdMGOqUBKPpPJ9eG%2BePqFn116p1owhf9t2Gi9gQB0RyfC7t2bqCCDWLHSmu4QtxeeCFPJR4uqcpo%2Bo2JWwoW7sM28uCfIJLIiHDQHFYNpwXRxFg8VR0V8kPZmUemy2rjPgCensBfj%2FH%2BUZPEY7%2BX%2FUSh2p9fQU09nOQ%2BofKRkD%2FilzR2gHIoUlK0PWgGMbmffOtmuNEO2hNkwLwAooj02si6e5aSGXpj6HDn&X-Amz-Signature=d977b4ddb280cdb13f9fd2c90fa1a1232e7221cc714743c872207b5f96bd04ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

