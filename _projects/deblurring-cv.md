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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OFN7OXF%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T101520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhP3thVJ1AQTgnLzIZp43YfR9eU9GzQOQUOewt8vuu9AiEAwxfxxYSqB3Rz4HCb7KjLudYMY2XDMOMBC1X%2FFfhvOQgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFXwD3239HT27uGZRyrcAzgNDRTpecbh3zyvdGLIVWuLz9mmi7Z7lTmTrJsN7hUUhAkm7jEJ449hz0EyG1e%2BZOWUlLCWVr0lcCfAi5behJOc6FCeKJcTMzldbAeM5TCO%2BYBV4w4GiqDq0Q40ic8I4%2BmVob418ZtWFYan510tPb%2BcqFjtlV5qxmGd17T%2F706K9cxiJpRc58TFpMUfCCPiVdYb0BGN%2BJ6ZN78nYZturU8sJN%2B31Fya0yApainaPld1s3NXr%2Bj8CGeMHa8v5URSD45sQbTtCQiXRGvPps2sM9Ys0HBF83ymPDlNwUB8tDQFVekSQxhQ3goUzh7yf3KLmUW7ur2RuYn%2BvpDM1MYJHO9pvn0CPTPvaouxD%2F6rw9SYbKy8GSDQXwftt498VUORyGJbyxy3MFWlnnzOqGvB9fufxU79Ga5Ly1Q8eq79lkTqeXBpjMDRUrBfEFIFNRN%2BCluYhJgy9olAhR%2BWNQrnZUxqRZ2QPmvJOElAGAOVrgwpzIPjaFbZO6O8x7hfYkaYm4kV%2F5%2B4aCPMdpmu9EIaGyDJw8s3nu5tKAMn0LpJzoO9kBG7gw20%2FI9XAsljBdXYe%2BP4Auiyb1V4F3L4vVARO6qEc%2FKoJFlvHk1sLepRlOCIcmQCgA6NZpD5XGTWMKC4kNQGOqUBWoDiTLtOADT%2Bsxw8HGL%2FS8R2KW%2FD%2FKHEZExSFBZJn6cOTF9Rmfiw%2BpKynFsQM2Skff3nvOuaiwxGQ8rLutHfUVDXN%2FIlELAPjGFgNVASzDbmZqQs784wWg2NZIlqA79qr0NJA9qoOWCunHGXY%2FJx%2B5OLzv2AX0Bfd5pqAs92Bd%2FpBQjxqlexOIQBfjHB3IzPS3Osd%2BCMeuHnRDy5TobOqSuKmrBN&X-Amz-Signature=b0f46a8690163fd95f24b99370b9c5a692af78064fdd86e196b9366a689a4680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

