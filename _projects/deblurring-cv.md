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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR3F5WBD%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T042320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD2aYUu44RbGIer8%2FSR5%2FI9ZlMIPzfTXFm7a%2FL6m%2Fg2iQIgWYJPKSlFtXke9IlYwVCv33zkd7YijuOpJ%2B1UGQwLMOcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAQ9NK6NlJD37VkBSircA14WHe6UQSrKWRWg2DNSHRxVpQJDtWCZ1DIRearD%2BasKS6RFSbRMRn8N99%2FMEjgnuoa%2FTvhtqhsj6fIImpIXAgqLe25KD8w9HiXzkYl57Kg26uZVwDG05GXmQEEw2%2FPzM2aNVrVjN%2BHzBqQKg8h9vDF4vneYwrDuN0VYUWyJ4IRoTGVdrkg%2F5ASUep0dvPFmm0VyI02tZy%2BqrkZ6mAIcNkj8dkLUhqygaee2hlJZFZdztPRLEzHSlQOe8%2BQhI7tf%2B6k547d5lTuMmbFZzf1KdHowBmTHLp0ibUMreK6SNgdMpgI8u3p5d0cmjKYCbldwmb0JTwqDStJmYnl0UBptg5Z9RHgu3CGkt3PbDX4toMFHyNnwZqMZLaOC0OUmr5Jt98SuZfrrFTzQbIpkAcrzmieKDVeWGAt62nQ%2BHFcntEEVQ%2FYRByspeUu%2BUscmAwHLooCwyytHKfcMURMROsFJIkeNDwz5Phci4omXnySy2f0%2B2oQKzDvFEysrUFT62K%2BQtZuGUkIjZfqPi90t5Xbx9SpWYTbSLdzI9RVXx04ueCCvxvPbMpemdrFKxzqXJLLCx1SgMBF5WPrYiF8qo7CT1Q1UAcWEZytMfEI8WutC0p3O2mddtzD8rM5331BQMMPrg9QGOqUBwbLyO1noDFFLlx4I%2FlxmgmKI8AbjJlKCfq146UiSnXqrjaPRLHgc614Nf5AWsBVDeqPIvl6rTckBzL%2FKnALbBxhnnkh8XxEZEjv9hdNwGCZT0CrXe26feuN%2ByMsBmwYz0BlURIRRUzny2c%2F0WOuGnYihdPIRgPYu22XshP%2F8yl9uYCuHChMDWNL7g49K1q4C2gsoKkeOwN4li4IAmNwM9t9ufuYr&X-Amz-Signature=a025f777ff950c7c67a39cefc185461ae549e2c4f69c37bf7671668bc2d685d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

