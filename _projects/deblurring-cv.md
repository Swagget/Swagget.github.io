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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI4CHOZM%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T121934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BNrF%2F8GIuTfPBMee%2BWaJhDOVusNKkwiVqfKDEW5oAjgIgNjJKU%2FfXSx5fpJRdYulFY7iLXjFIzbd60SfqgZin960q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKbgMcuTa2aGdC%2BYJCrcA6RmOoDz%2Ba%2BzkHAErFEkG5zWvBFnZL403Hw8TjXJGlExcv9VtXcSN9BZBdNObywKE0HuSPrt9tbn4T6%2B9JuTnMzXncIrOGuh1iQNRcqK%2FwOKMPkCGvlRptGcw8ijvyL6gFF1PspQ2JlVfQXgMmJxWylihrSmorPjoFcWvnmK6CyG1feNOestkehPHh%2Fqk67fqfPjY0Lxe3l3Z77HgIBB3eLLU1Bx5e%2B2AO3qucxTasPaHr1cjh1zsSxKgSdn%2FsQn6AN8qCipPvZnyhm4f49oHemo%2FvHYhLxdvJPfl0McI4XXN9TKXKt9tDq%2Bjbbj%2BWGmrGOLPjfRoIqLNLXzkTxJdLHFR1rBg08RUAHj%2BwnsYW5LAyRlwFKElXe4Gn8k5c9ZUzqnVg40sqG1ibLD3Ov7okC1jNMpOP3MDOKVn4%2B%2F0UWXacGTEw9339faYkUIVLNLSSmAsI5HaG5%2B%2FprY%2Fw3I3csbxfScHgT1nvtHZwtZ8POYpLtMQO1KMsz0KHTGZgBo6zD%2FVXXoLcpT90FFavElOEvhGIXH7FnF8%2BPubnql2pILrsOUp9VSdmwNcCIo7YhTXUI%2BnzcRF3nHZG2CDadm7hzChVJN4LZEzXWFkmky5iLlWwl%2BOQjk%2Bw7VoCVsMLK7s9IGOqUBdAyPSddETPo9mQAxsfbhOUUTHXyhze1MqKgdd0StsJHMNmMmxjNDHtdLe0C1uUigDANsWtX8AmYT%2FN2fsoaaXP3ql0zYbtc6lsAWxf5iF7VMl4FihSsjOZUnBXglVTVvlvMjsr%2FdiYlUa1ZUO%2FLrWu2%2BX%2FkpvO76fRi5WOoEXn4P32FYVWxQXzQPuKzt2zLpK29uPLZD%2BhTGEAFW0CGEC5s%2Bnw3i&X-Amz-Signature=13550ec8a318dda34f71b467a937754a8a0ed5f0318babecc7911988376b95a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

