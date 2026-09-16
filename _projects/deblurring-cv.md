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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFMFOZAU%2F20260916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260916T125304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCh6qZiXlyHORV4fl3onimMagmb7qOQ%2BthtBPSKW5Z5wQIgLmXI6Vralfb0BtAdR%2FV2WPGwImqrRbmutUoO6YaUGMgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDPFw7tEIuyYyMn0sGircA7ZXLfmz0zMqmFV32h2ASOZoTYbOcmVOWxf7KszifVRSLV3qz6PLEt2InGnFef50J4xJq6tOKkrCHCWcH6BGbz8%2BjBeCOTyOoOo9TBC3S6PRTGSUBKIWbTlW1mSRB6gVpecAT0irvxDwGTeSk%2BcZsKSg4gyou5liSqj99BZr2h8Jo0w%2BYq8%2Bmq%2BB5FxtjDMecAbZ3Ogt%2FWCOVfG9J1Cmh%2FK%2FyyV02WaciRgd2t0tpeGSYkjm5HnAANeQOuj4kBs57O9nB19JtxkQo0ebc7PtrnudMlheiqhqgvUQz3eEmRkaEELv2Xtuij6A%2BRN0ELLIRUtXzF3JGjniaful4YMnasDw1wARwz8nIz8Ey7rsQ9wTm5AIsecfh4zvhrS0haegeikzLwQ74ufi3v1qHcjrgU4zo9W0XInnxUiqKuTgggbWdHj6HE7kTMk0whceBh1bfQOWXGJrld32ZG1mAKTcQsOrfEvYsGyHRfyB%2BIK3OxVWvTY3MBhAAVRi6%2FATl7qBq2fKQ2oOHb6ZZEWQ81%2BaLWJ%2F6XVFk4U2foUWGa4cAi8Dbno8r0pp1KPPLvx5QCX2M7rJKZSTYgCRA4dET%2FwTWe4C3Xf2taerBEVRTIHY9EetHT%2Fk%2BQFp6O8CuBdkMN6MqtUGOqUBJ3a%2FIyLzAAx6W2nNkebFEGD3AQqjTqRbDm2VKRXnXGYKj1UmjRKOE%2BPbF55%2B98pemyHVIph77zWJmzFFfqyZhGirMz5jcoCCg52JphXZGRltpAG4PoV95JUhCp%2FmUcBMOhRecRa6otBhm5WwIltkO%2Bvdo5cKnvjnm5BAemhamH%2BQEui1K22eSmC2giitG4k2jYS%2BtwGQpap%2BA2fxeFhTs8H06dkF&X-Amz-Signature=c639569579c2854b4b0f2cecf5bcfcc6886bfb1b21ae1329cd9d11a1d34cb9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

