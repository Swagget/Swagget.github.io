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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A25BVZO%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T141116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDmvjIHvVcQJVZo9bMFbGwspoloXYRskr05UnIHtEKv0AiEAskF3e4PU%2BhnEvYoRMZuuHTEsXrmS%2Bow9C4hql%2FeCLZgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFgUuoqbKm2kWhohCrcAzaI%2Fe2%2FbWR5117Pdeh6F8tAGKk70y%2FEU23Azyh0oTTdDqVEoZsqW%2BsuWsZGplD%2Fy2kvFmTljE9jVGLEjTMn7sifuFfU9ng8X%2F8xXZnge7SMQiiCtYDmdNdQU%2FBv7fd%2FqPchFzxIlJ0Xnr6OHM%2FGJjsvaxeBYYD%2BN0DNDtPFSoHXie19E%2B48FKTArQR0EEslK%2B2jgNrsvluFDFlxNuAN1m6aker%2FmcSaeaLYeGccPJ88k1Qvf4MAiuT8d0hD3Dhi5P1KAyyBEwPteMNV8rV0FkHgkthq1fZ%2BgSyozVvWxFroZHvufMJgpXT2JPIsyAAeYqav%2FDVoPkxSR9o2YtKojwB7vo5ZbOcAHJdW2aYexVfqyIdKX1cYDstcr6O4t4UpUsjpKPmN3h%2Fpde5xIp9ML%2FAQ%2BtOb2LE%2FqnKjIs%2FOaFNhd4IrG2N%2BapLqMlAzqCk17F90%2BJVUAoi3bJQRBK%2FFH8BZwP%2BzmHyXWhehNkx1FHGEPq02icKMtZPj1IuqwnQOD0UvE2%2F8mNG9iXvP8OEsUAZ%2Fb4zbDobKJsXzmb6utifSAF%2Fml4IE9Jdv8nLl6YKBa6S%2Bwb5twrAotXQOoJTZBYxWAJhH7%2FgAX3G0Njt5ookjomfBcqQW7bcurXvkMKbaqtQGOqUBtojGteYIQOhae583IuqTM8bO%2BhRToDSWemM%2F0tV07t%2FDxcMMbU%2FrUKBIk21uqZ2MddPxTG7bcRO3R4MIXzEscS2HfAvsxKCBCJ49hJQQbE2FvA5PRkYyWpEhwXsvj1KzYE8EwLWyeHXpYzTx6EufHIhzfSjxINJOH3yNEVYpKZxt6JmDEuUNgOJLwA112MzaaPxLupnFaJetluPS8g852K7HsaGD&X-Amz-Signature=89e2742cd31793e079c5fe3637546f3e15247063932e2bd5ece7c78d7025b310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

