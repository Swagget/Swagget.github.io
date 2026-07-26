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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVN4OD4F%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T175114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC4Asr0yzhQg%2F6P3d2amQpbTtlWKxbfTScy%2F8n8kCCc4gIhALTZzgACYJWZNzkoLznXH%2FnHV4nNzmXYFttwQLBF%2FHHpKv8DCDoQABoMNjM3NDIzMTgzODA1IgyzWWdrZI9h9%2FAO4HMq3APw2eIo8oK0x0qUIw9dYb2GnSp1YHLQUlFjtPjK5oy8RhzkMLBMV5SaIYD03ddjpEq2H%2FDk6nq9Y4ONHMM6rZPno4wFNnTILg0v68X3WiNxgMACcnGB3XHmqOvqFAEyKgBbDG%2Ffyal4a0NiJJJ%2BWdWUBEfgpJFwBa0EZWtYsFtRI7sUufp86aN3713FfmJVIiNoLunTDHsaSssuEq8osMPK9sjWmH5HE2B%2BkMpR5lQi1K4BvooIG95Hm%2FSYLLSrayFytn31R92E8wdvV85b71lAptSIzz68ZArc9mrLl8ZdpL1FlVTO843T%2B1m5K5TskvUPul9uCt1%2Fcrjg8MrBESDvyW8MGXAYzoeSBgbVFlbr9vtWH48eVlLqJovurzKVzc7GXLrfZz0l5c6%2BZ19GztwtISM3NrhDodbAPr0zlseZ8jGyd8IRDudlSk5MAuox17rpSTgedKzMGsP2aKxH1QEqOPW68sc%2F4G34KLwX0Ayh0JyGSdynWCOkMvTDMm5YO6dBQr%2BmmamycEODTIpy%2FwpPPIFSzWkjN1TbpEP85Nc4rWCK9wkHn8AeG9D7vqoKT5koPGMCstbGb41TbLAx%2Bk599me0C1eeB%2FqRdeks4L6cokLuuoWE93gYdw9YxzCv6pjTBjqkAQt2ZH4u5LyVSZTy2PsmX8CDPE5RFsLWLBjHtT2mXW2uZihdtNtocY7Z2UD8uK%2BDX3MZquwuaWKSIOQPs6EY096uBXJoWVXZmBGI1Y2VmUsSidmLKIORjduPVy5ZrrasBIn8BQBNOV8x%2BqyBsiIWB%2BzJkTmlxTFvE1BLZh33thVLKLzTM5o%2Fy7TAy9%2FvZqyvcTO0XSnl%2Bdw7aZwAxtpVC540wt2I&X-Amz-Signature=fe7d636dfab083dd5b14cc9c89fc53deda93d0fbaf01ef0f518d299e781a4211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

