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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCUXE57X%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T171519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBApMQP9ZXFW%2BHSLjONcQ7Plhxu2lLsw148HNgYYIWHmAiEA0yv7ax7CigUB%2FTq879kF6yX5Zn7nxeWCxXoXtBHn4o4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDH2hPOlWT4zlPt1rKircA2xjQRAXYfayf6GQX6zcxzcYs4bjhP7giT4OU1fjNoJnnTHoVf5%2BpJU%2Bsai4I2Gx7Bx6WqBVR3G8SoJ0sEQlftjKJ1%2FOAgF2ZJfQUgx%2FzmJjkN6DDXfRPkA5BzaFYnDGVBSkTAubholcVJQx%2BEVKVgTZbhITHmElbPAvumvB17qgsPy0qRWW9ZwZ%2BevuxsKqVWA%2F5iPleppQ1JavP%2FLNMzAK0SUwE5Uh%2Fr2N%2BsEbDvy%2FxNoyUrPLDaPepFfcBNxeNsPPL10PJ%2BXGU08DSa2tnIbZIRv4Vn4R4EBflqZwr24eIVsJw6r%2BJecD%2FFrgLUkbhI8bL5RBGH2RlFsHjj%2BTKTUbU8ZCLFX9QdyGnDtKgkWyqpMEI%2BBLduTwu3ss3bAVbJYNpFZSMfvgneNNovh%2FW7AOm9pBLVpVsBLZqKjUW9hBPB%2BCPSXD5QE0rJ7t%2BGJ40FWHt7ulaie8DVaEKM5dZSo6BoerCFqJlOXWux076Yll06NEFfLqE%2Fkp7O4YseKfaMiaNsr4TbugazkvHqRl9s2PuOWBFroSGF7BqouubLt9d5pj7kvsB5590vPMknH92IbmzfNQKXAaUpLBrJEZzBaDekECP6b1V%2BiuJ23svnJ4qDLfHl1ZEn28RFMzMPPzi9QGOqUBFjWxE%2F8sKzuVhvmxkBNl9nydnSM64AVs9PtzpadGdXFFwiby%2Bl8gJAB6Qxv%2Fg5T5KcH82pvCzcWT7MIy55UpOnr8tXVMjCHYDU8YSwdNeRhJ6N%2FlpSk3%2FVASYsGBVBILkKe9lGFEpAPCLOG9LDdz3yrzqZqQ5bhaXb5yffmItRb4wt3ix76UAQOn9Yq1IQnoMz2okixKMcPvC3SeMb%2FjiS3naEmd&X-Amz-Signature=bc65e6c1088e682d2d64a085ef674a7290e567dc34e26865d1e113dbbfec4356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

