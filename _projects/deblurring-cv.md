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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYZADEAU%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T000526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ82w5q6KDXzW%2BhYamczCJeJlNPSwnQOBtRL2eSxYf2wIgJedtKvo93zCP67VhpHkk6aSQBowChu4ADV5BcbH7%2BR8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBXc5hYZGfLgH4OUKircA10AkUDHY97ovuU%2BXPWpCKR0P0wdnvkbbYkPYqnWWEioAh%2FEOgdqH5FvckZjkxgZAG%2F72u6Wsrm1jKMdKGSbiUR2RrecgkAFNOMGEzVQfxdZYaeIk6tjmns9nNq8K81u3T2vtEf5b9UwXC4BV%2FgVuIBxj5dk25RX9Nx7%2FG1%2FTxd1eOf8qR2tnQE9CaAGrPFxVirrUt3X5O%2BcnEj44v5Zh1VCYJaw1RoRktos02P4ZzeWDlQB9%2BrE0RDOJeIGsKLOI5rfpOz031QaZpeUmcDTWCpusPsbHFn4Vv8MWobqg%2FjZtvE8YMS2D77fbOww2iAKC%2BTpofqO9yqe7YzXaMaceaBK2YsCIyi1J79SDA0yfT6CasjRAHHsxKlRxPFCVtvG5PW0daJl9vkbpLzNuQk35SRCZSfbz2FE7iiX8CCjbHoNVPVNd%2FsapLnfodHuK1WZab5sOYHPtrPu1dyf18RF1jpYq%2FsHasplaSm2Hw5lvalNGO7i8WcYygql9ba347qIIHCEbdIcpbflOfgzHId2Uze8%2FGP%2Fnfc8AuCU92kRbq21edPXZcdf6EzvrgJznwBZvFSrx2dzyYxQ4p79g9YwAkiZIQxAkpILtH%2BK8YgC8Ha22LmTfhHW3dyUjUMuMPj7h9EGOqUBdo4Nnrah8aYdh%2FHwjWjXyflldf%2FX4EII%2FQtzUB1oU1Ggvnu8%2FQrabmkxHW1YdQhVtGGil0ZKe5j3Pz15vF7D3aj%2FZIbnBiLUFIHMB95ufHJeYXb6FV7FsqU7FokDSBYtz63FlCchugLU9QDOKZxY2Moj6BzYCSxN4fEGBFxaV%2F6K7mNVI8NYJmVlJYxC06Cl4T3mlySlS%2FShpznydjc9gkkmjdzS&X-Amz-Signature=2da02e0503fb258a73fa306b0730e0b7c64b7b8fb66bec9a8301c5a3235fb389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

