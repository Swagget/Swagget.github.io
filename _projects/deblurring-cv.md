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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVS2FUOA%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIA55Vsh1LviBDV7FiIYCBZ3vC8DSLjV19samApfrpnDXAiB9Zv63eQKMHc%2F3h0aSa7sDc0hpeO4v34TPdksODvBfUCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM5M0nhe78x%2B0fU%2FTfKtwDeETOVQfTbVvyosXyEDYNM7qQlGJj4cUZUR4EnVLyf2c3FdNzQC58LPvbvuoR03v0eUYCn6E6hChvMKmyMAyyRmZ961VLHH1HdAs7%2BCg73Beq6rttVIsuN%2Bi2ZMUGkDrFKJKpVlrU6OCI6ch1Hvv6%2B%2Bgs4rx8umnKngSOtbM1RYb1nwH3R6XejEbURxanBk8j%2FlpoFdmFP%2FqOTbGET5gGHMmkMuPdtwqnViB8bGpGbzX%2BQOVq%2Fu0QP1x2pFUfYuNg1%2FjoeciHqwwHeDLbmjTFSaeZBjgVsAvGoVKulXudM3XJckR51t0X%2FkC2wM7wbvX3iwuap%2FeqAapeVTO0YxB9zgwIMBJY1fOSihAqZZXRGcxK2xKUHo%2BxyDbGRv7mXZEnmY8C%2B4NTFKGHNjzKkKCFbw2p4x6B68ei7W%2FUFufdPaXAwhXaaAjIcWqaQfMBhvhZWiPS%2B6ZpV0sz5uwKdSUZj6Va3f0wKdIHzprOLhDfq%2Fu%2F8PahXQmbmfvyeQSD86GQnQUiJz005yuD45vhAfRsyTyVZokXBd9%2FiJ72fYPnYRbzv9Bs0LKMkkyZIKpCl9ZPs%2FfPHR78%2FhFWkuCA1Rrd9DxIbg80ALf%2Fw6W09M7lMORX9PtYH5loSdFkV94w1K200QY6pgHVzr6psIEa4hurjyv4anZKwugWwV3ijOOuxqd%2FNE%2FSUrxy7Q0%2BR7FcrXD9P2SXj3KDPJn%2BXJg3h%2F7IwXSsxleQid6Qmiq0VA6vNj3fc2qTmezt%2BCbUvkbElW4yf6AADFHJVpOAu%2Fvo6IlCdDS7Gq6GAsTmvpbsOtcyeOL51R5Jz0n2a2YHCng%2FNNxADDg15OMMT7vh%2FsEGQKgMxZ8tlr9Q1MqpTAZK&X-Amz-Signature=0fb0a0070491b2b528431005793734d3bf0c4978958098bb3d0b94a166fcf943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

