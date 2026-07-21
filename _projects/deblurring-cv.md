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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7OCOH3%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T145245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtzptEewLCN9jtbIQ1kd96Iv5rvDAAvqg6jsHW9RkBfAiAk1%2FXX16v4Yl1eM0VTIUpdJRCOURsIdR4cY0GMEDfPfSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaB3ASLWxfnehwGPiKtwD6UrG6INTKvENymQfj%2BZYZw6V1e%2BlevKfHcfLwchVFS65%2F768sN7a48lNwzEsrIFAEe7b3RTQZAJa1UGOeZthKma6HThcGqS5mGwpupNcdjp3Md460aaSp%2FeFmjJWzeo7Dq6bAy9Eaw7NWUWY6tq3%2FE97Yr%2BF68jnYxFgzsVMRKhKb%2ByKW%2F5ZDljvBRq6ywNqJ1UJiWq7YQXtA%2FQ%2ByTmWZRUim%2BTiG3IDmr7Rq9MPeLnt6qiPuqsBuK4tqC5t%2FqWuWR9LAa4PX8Zrr3lx%2FpMLnZy4P405L2zmO8Z9JGsVCMzVAZzBaF%2BKJ%2FlNxCXEpaKceWsLDDdcTE9QyRcJK2g4IvZJHFgUXcZRw1kEc6AFigov%2BU92VyOzF%2F6jgc6Phesg7n3vNiGYZ3%2FNJhUuxoZrpSFlgHapXM%2FaHB756j2T35H1zXBqt0qbOcNLHDPRgl16LQGv9UUegl%2B3GjCGmBRFkYQw985AFjU2%2B06uB69NPsC1AepQR0%2B4WsRPMSkm4%2B4CKbOGX%2FRm9Sfs01OEIA7O43MwyNsrGgNjH0lWYhDztMFdzmkgkp12qHKa4%2FHK4C%2BRz1E2mibGw%2FDrLHpNxae9dDifofDUuOHOPoF6zSQ609Yh6GCIiioMT%2Fke3bYw8Pf90gY6pgGVIepq7DBPd0hUq0EgavdjBLt3y%2Bn80uBP%2BkVci6kZIbTxgTOf3ByI%2BIJwSdPqK5c8Aqs9BnF8pJ%2BYNZl0U7B5X85aQu3y5EFFXN9uhndTgcMyGUP06Zil%2FsUAW3AwuMZCKCCUs1bmlY7cmv4CmtdcO3EP%2FF1s8ngE%2FGv5CKXVWnWgdt8d9O02%2BkxacTealOHL64wRY%2BzUoWnueabnrFCHJiHmv%2Bwx&X-Amz-Signature=77619735fc6db1fd33720a1b3d63083fb1ad7722b9f8dc48457d533b642d8cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

