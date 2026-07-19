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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPZCZYRC%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T072333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDul302wDG7e5xmWBJtf8rs9%2FoWFk%2F%2FOpnihVqNglqBzAiEA7sWl77BeH7eDmQcGhqySEOBH%2B4CYSsGo0Ru2jl92i30qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBlqrgeOx%2FNt08r6yrcAw0cGHoRFr0ZL40w7Byz%2FnyUQOKaswtmU%2F%2BqZDKV4eJ%2B35S5ORYXXB3gDXBlHm99Y4AUHkL2K6oPFeDeWI%2FytainDI%2BPS6rgzA4l61lZyRR2zfNn6QG2CfBwavntdoRPpzHxdFy0AHI7nkybQ2i3aSgkrGEI4LRfG%2FG6BU7b23St7KIpCbw%2B8ePso6i6YW65LUg8uO6nlZ%2FdJZrMzFJsO64uwX61%2FEJLZ71UYupsi%2BxyfbJblJB5y%2Ff8dxSZHS%2BNPpltuue5dgl9jdrzkyY5i6ZoOd6ucg6CpqvGH1Ui%2F3FHRQb%2B5ws14ZoZe9QFcMAM6gTvQd0RSzqWgPBNJzROT4uKIDPiB5uTn5SvUcfZPMNUEiq5A8By%2F4BffgmKxeFGfoWybKL850t6Y0I5uulRvAuFCmrv9rjtMuEaB%2BTyyQ3oFWZ89PT5MJqI9%2F7RayYABdXwR%2FkKxlU5aKgg7f4JlkiCJUOEPFwHBHjfzPZJ7QhTmSBpsjsRNq%2FmiGlBk73SQqbGeDSDkwVCfn7j45uDn7htHyMR4s8f8HeIOc1xCZlpWUCCM3u2DXNEaJXWngDesfwYzakmw6Kju0PM%2FIDHopLPLvlSsDgXXOZ8zfwB57BQ94NxcZZL7RBPU8mDMJrp8dIGOqUB%2F5znQqdfHBw%2B1%2FCtd7wcT8eoJGjuyOhCQBcaA5LQh1CmhxWsvLpOfWWLvQO8BLJmy8DVS1%2F6DCYeYUsM%2F%2BFak1oMD86FKoXDuPjjYNTLmCWem2PtHPLGJht%2B0TZcsnegkLouKbn83Uo09lDVA%2F2ZZRFlt8pA5MMTTtyK%2BT0vjvU3fwi0LX%2FtVYuj7MWn45V82tgvwfw0L2JcmXCZINyi%2BLGDn3wM&X-Amz-Signature=fe856a44fa875114a5641d9ae86e81a756f629fd680f0833c05befe2802527bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

