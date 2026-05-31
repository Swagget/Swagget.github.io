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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UKT72J%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T064457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIFiMmUVpXIejJ1e4g718XIw9LX0kYOTO9n24ToCpqzxtAiEAgpnvo3aa5zXj6aiQI493t816RFhwdiXyrkzgAU9ijdAqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNP2hf%2Bp5z0J1Q4m9ircA8stPWw9E4ZKSewLefFxbmDA9ySYjXXNm4jOFlVVgR1jxpBoMGYyfdxa5IWgTYAlGNITOhViFJwQlrjYroZ6midtjgaTT9aVEv6z140qhjHvcyT489XJBTCFy1%2FM0px24LYmEddyRCCTZNTlQw%2BOURBK8xJL2gkFfDE%2Fbi2neXbDTjMk9%2BxRk%2BwYv4P9BfyhxYfi8ed0%2FMrce%2F%2B44mZBqHJ%2FLIv%2BX2QzYi%2Fgcph2XX15YvxfI9e5M%2Fqj1WEoXOQRvq9T2hGvGkxawuOE9ieY9IO6preOlgSwat7PMlIsaK8KM1WSbOkFlaX5beHcGfPHROHQofmnVrVp1XemiwNB4f5Vz8hBKKTiBsFBITeG6WDQ8idlHKEcGrp9jtLyCH2rL1j8xNZgN1RV0Hth6Ka6PPu036%2FVySTBUbDQqV0NSHeGaqknch31wOT8YWNvDnyPWHEnFyyNIc%2BMme%2FvE14BIXO9%2B240zYxHo3lv9rHVWoWyPyyMhQ9EIbhmzQAZ%2FmQXXFIx9no6xXZkGhxr6gHBN5WQ2hZzNK50FN7wtXD9y16Fb%2BlqBQATYkjzGahQEsxhST%2F%2F0Nxm%2FMMnfo4KmhtDBHa%2FoJdl4fBxTuG1XZeyezKs%2BmzZ5KIQhAA2Ssq0MMaK79AGOqUBq5MDfKB89si7CRNik%2FZyaHMBl7z24LaYvljDU7cz0N4f56tAipgL2JYYU95zioi6TIW7RbWBgRr32bdwVsqZDYpS48FjrnJv3p2QW3NwasBcSCASEJCK7Pti2A43w2UjOAR9cCKvWZlT0mxlfCb7bOyCyd12poWrvr4kcbWro6%2F%2B9ZFZd%2F4yc8uFiiei4Tk8oPm5e4nNk5F%2BbAYkkjaPLV8zVLox&X-Amz-Signature=14d572cc18489d937f50226c00ec92fa2fa8a091d9072a6d3d200e669399b3ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

