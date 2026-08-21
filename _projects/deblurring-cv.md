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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622EILAGI%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T142141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWtGJ9RfE4WEWfdNvUtxBHSVYd1M8ulI2dDS3s16xVfwIgU%2B2ae5JtcfKqHZtdhkeasJJcRXzXLL%2F1c%2BS3S9x2ftUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFo0ULttpdDtiV9v4yrcAwF0rxn%2FVJxXHzoWzMpaxKJwrgBOVX3Wsx%2BmD9Ebyg90ullBLsIqZdQ5E0iEOxGKwk%2BMdnL7lRYkbrGnzHC%2BqL1jseyJZBurXcodQm0WRrFHrs3fF5DMLr%2FJWIm61uFkJ60T9qzuQcehfPT2bMuqHkPprfx1BgpxL7SLSxQmvR7qzV%2FjgkRDJAA%2Fss5RXKn2%2BvTGI31ll9cZiCUcbBgvEjUSe3BVwqgguSWrfb5wRVhqteOLWLFWlJnRkTrcw1xquLWFzxUfmV9NXVOnohutyF2KDZL4xYbobupx%2BGwGXCPk3IDjLKlAvpqFFLQpk5WFqklka5nZhYimqvSU0ko%2BJ%2Bhr3wsklEAGbg64JeUDx5aau6bA5WHNQ6DmrkTzBawCC7HjX08fJHtZzL7KdvMYX6KE3EhCCY%2FQmtmsMdRhO90vMzAPis7DL7CDpYgxf%2B17bj31LehUqRgoMbz%2FIeR4MErEaJWv4Jpo8ta7sz1t1lq9Il%2FMjgHMDXYO1QsUSivey691jLFfXsaAgDgvFOuyAKY9lI0VPqimpjndtCj8NcSwomTadIDd2qH79zLTc6sn2%2B14YBFEna0uy0kjbMlLtNg9Y40ZpSXhN2viro8PNkDyycSaBD40U50yz1QGMLWKodQGOqUBcpF%2B9IMk9VFatxwympWN4thVyDCSYuy2yPltcpGK3ZKcFbyZ%2FdX5dIyX6LUhUZdjMR9dd1W5SYQEja70SR2c%2FJ0rC4jmaC2jWqzbTOLP%2BPMzKdID2Jo5fjYZrs5JIFLg4iqwE233tUP4OnvFAYva0bjeTFVv0xRh6bzXRt5EsyiMPeG96Gmwy6XRV2RkjQJYk%2F6wHtmEj%2FMtWSW7ZcIm1J%2FLpJAJ&X-Amz-Signature=7982b735cd356095fc0e56813e012a1ba2627cba898100ce2c7403196d883761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

