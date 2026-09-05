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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6TXZZH%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T133934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIC02oRCbrZ%2FKN%2FzwV6Al7%2BeunpxL6oPoW5OiiEeQNbDgAiEAw%2FyGO%2B9O0bTf1xfKbpvqK22%2FdDA8I7VLrAppQUMIcekq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDL39s5fU%2FVn2iwyJTCrcA7hy43%2BhAZywmi6%2BgLhm2CPrijSwhXLD9Zx6jbGwKr4n2RXPJTlFu%2Fjtw%2BIipg43srq0mPqI75qFuLnCFx7Da8VwJe%2Fu%2B9K5h%2Bcq%2BoAAbkajsUAFliigzojPHJO2WDwpaDmtLT3wNq11PW8CkTdj%2FUyNRYOavauMDJw30s9Aih2WQMX%2BUaUpH0gj%2BFmhH7N7p90qSYfK6iJiCo3sUUCEvJUX58eP70C04bPFj2eovV%2Fg1seM5mF4jY%2B%2FeXYqrCAJtQhMMIYn5Gh77W88jvOt5gkoaktJ709l83BFAXAyhg%2FOBAPbJ1F2fPlmoz3W0ODLZE6GCv9FYSyH6%2BJbdmBLooHLspmDP9JI1I2euRBLh6blcOkiBHN5DZN748csEyujZoq69%2FHNeA%2F8sdhZXz0EMbNBd9QiXzcTOP0qPZYMCHY1yN%2FtG2gPb2DwhO4JJJKioPp61IoqG2vzk7JDVtmn60STzTprJoQ%2Bq3s65VkmJ99LVTgqShkpBhxeg19WqEWWPiJynkv1n4%2F7QuJ%2BDQ%2FScXWfb719qU3ooHsMiPbDI4hTVIp%2F9gcOquFQR1m9aksR%2BIYwUrH31ngTarq0c3q3yv5odoxmwp2zxPd1tgYj%2FxeZ2eHDAIQO9mZijuh2MMSv8NQGOqUBN9GHJAFimV8Rk9EEmVSej1grJ0MqniM5d4lWYWvPQ%2BlHZ6ei7k0wgTRvbOJvaVLtI6nS3Sjl7ErQL5QP1wSbHiu%2F6T0C04qiM1WBxZ8PxRDHDcRn7PzocH885v5LWCaLwSnEb2tsB1%2B1sE228FBAR2zDoxac4MW9HJqkawC4uA%2F7w1HgGHUmRr2bGMZit9jg38YKbdKvt0aOiMONhAhdSdcm0sa%2B&X-Amz-Signature=3d10d439375289a239cafa3332ffe87668905bd7ae245e30b05f97a7c0fc423f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

