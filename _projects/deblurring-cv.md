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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBKVA2W%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T204117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1yxyuXuDyEjSG6d5xGItpqPtrpFM%2BNyhv%2F%2FQH1iQ%2FgAiBYvqjxzBDQH3xCFkVkodmhHSU%2Bd2NKnBJaRkejrRhOmCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMqTw43uLjlJMuagJsKtwDDhOs05tUg5j93XxTSC%2FcH%2Fg6k7yXCGcAUmDfc7Y5oSE65o4eSpdGEdQtXJEiRKStekJehkSrVU5iEi5ckVS0FGl5N48X8d%2B1RM%2F%2FCNSlTfrFpy%2BT%2BAZpE4%2B4NC0jL77jtfO3PVF9TSZqPqJ2MG1%2BgE4VDyP1JbLKRjIERATDRW7fKGzp163UWQsS5UkyD7UugZYmJdjuOj6waRu9nC0o17JkZq%2F0i3Lc63G%2FLgX%2BC%2BiRGXC9Cvm2efCXxNdYi%2Fs6P9UYZPWDHBMmR1HbFXrbn4V97xoI72n8smKXyeyClezlj%2F6WTBmTN6pqUgclJaRwkDlfa5cgShRAxvcYo4Av5GrS7MrafM3gA8lHl72jsJ1meEqa2w5Hncmc%2FHZHEWAY2Bt2FVth026q5LtvedRPTve%2FOKYuoZHhAoRMowMO%2BEmP5WqskIdhB4taM02aE%2BywcN%2B%2BXd5Y2yF8e3C0GyON54fd%2BC%2FLlsKz2aElrdJOULv9ois6jXTpzz7X9zvlZXCwvSAIfDlL3d%2FVn7Sm5p%2FeuobTrrHAukjtHk9b11QqKAk29SER06k%2FcIdDsazaXx50T744tcXbrqwGa%2BiwD66dRnLjO2ysBWxly%2BmGZKehw9e5ipgWnWfbQYIpxkMw2IPq0gY6pgF3Ia%2BQ62uq5RfMCmqoQjMCanw1a6zxdf7iRLqtvx16rr9HUDi6UHrlCpqpuNoNCRzJLGdSVjhxxWkcnvg9azwJfRNYdorkmSg5sgXx%2BsZApz7ZCDf4ckbbTj7hLR1UNlGPPJ%2FBtBODImssNn0A2oYwhFrQ3taeye2sxUYcKPWavpJUu9PZ7%2B8PamQbNSRIrmHQtuKuzCh3sjuP5s1ruCa7lrthK%2BHa&X-Amz-Signature=dc728e1ad9e899f1075ccd81c63170538ee3fe0651373dc2109fa20f42f619a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

