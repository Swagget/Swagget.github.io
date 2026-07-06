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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2Q2G3NR%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T225401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxu5LklwCbYGJIOzYT8eZu9gj3%2BInCtjikfb1X9jbHNAIgBIGXXN7ixtV0CpVGZSgYW9DXQsLonU%2BFk5gj6ud7LBoq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCH2BGb0DimRl9Z4DCrcAw4LySOslM4y1wKj00FT5Z9QXq7HNbMBkVYajTBKkE5PhbICBUeKpVNLZqvmdRD3mn94EZPnNsF8kL1S7q%2Fg0MT7ZmeWHMNEl74r30MlwYridGncuRwtHe%2BvTS7E4JDyCWPbnojHYCCQklguvfsq1YDtxvyec%2F6p8KK9hmDTqh5WR%2FDIk2jqFUilI%2FqowkioUrUpR2FIJlZiaVGxhd1FLivtoEMwivU9ms22k9F3beduJ6An3tiU73YaiKk3QKbHfFt4dEAZ%2F226sJQv8JDKtKI0%2F2xm%2FMzXt6iXlaOUPVt0twxi411VDgcMgC%2BJR0u8H8%2B2I9uVUNkUIx9AFFajhRu91wSiNy1afBZNXlE7cm75ZAya7LHytNa568SP09c%2BjKLGrSveTEf7Vs7CNevXnoONJtRANiRU1QXFfNcUBxLgvA%2FFRVgXsH81NOx3kHrbn1I%2BEiWhXd8C1Cp7VurKSZZXDCQh9uU94WspV81g24bQJ4TxFU%2Bav7%2FD1ezfn2ZPuMISIdDqo7fXPcRiOpL4tl%2BBO4SKOg6tjDMBRf45OriHeouZ%2BUoz0R%2BY6jG%2FcmK7icJgvgEvNvn6hBRZwOH5tqf0gkKX%2F1J6iQw%2BTbFZCrAPx2FczxtIqmRHt0OMMM6usNIGOqUBF78rxnTQtIoSDxIOw%2FsKvj0E8coLs6X92WqrckyRrUa4cqkQrKRGLc0u0eToW8Ge%2FPQRlnH86UB%2Br5bUhMcdicAF5rXB3hnL%2B9zS61FS44nUrQNKsOWDcYQPuifGZMVQmlYFLlYEBigH60mMWBy%2FqjIMNV%2FkRUypXUcgRtCIfBpqkByaiqYMpuAVRHVJ2zT1%2Fp2ebbKCOx000A9%2FmnwL7obOhVWI&X-Amz-Signature=28cfd7e011f422df4cda89cdc9f5ae31bffd72f8d3ccb7a72830f49de3a944f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

