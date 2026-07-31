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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM5DOOUZ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T052105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoarPkMdd8%2FtjC72EDtB0ySXBU0SsQWzfVcoh2A5oaYAiEA8IKtz9Zkpkruu44kZBqkf2zs9uR4V7jxYxkXJjSZB5oqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BGw3SKntL26TtHTSrcA0Ixjis3gcwWmHAmSREHxQglZVmM6LmYc8vd%2BH3gT8ubWa2EzjT%2BVsCF3C%2FmzS3WZrqZwlmCPgh4xtrgGE835MaoZBUNdFjQXwm%2FL5IDMpcOc0%2BuvwpVtZGQ%2FaM5ai8HgLYPSbIc%2BSw4sstNt7G7Vg22e%2F0F6XQLZzSUhHGBSvaruGXWbld4931ZKz%2FlkZ12a%2B7RaWF055mQGNOhQSeUU19WYh66Hf9WEnAk0qVcWhmnQ6kG%2F1Nmq6KleiOvvPDjg9E6tR8SoWWZXgRCMdueRzxtcJ3HDaaPJNVxfgFT8bmWRFFOqQ3qQ%2FbnWAYrvGfQwH3V6WwGKDnoBHbQOiSVcnzXt3KplaoGCCYpFJM1I5hmHtnjJIxXpLBEQvsVIoWRjIJPPpfVWocdPdFTp8i4LwzUneBpF%2Ff7VTeKUnxMWaDwPk%2FMb4WHZjfi7qmsPi4Ii0qqzhG5vqbGvL6HFcalCsexhXDu0Guw%2BGcYFMETKBBGb0wDDMh8sjqJbfp9UzOkreIMWnLbeVdVA4iH7kN18RKww3J8KjsPfHlUfoH%2FbhnpCN94%2FOdPH1CtYLQ%2FIPpjyWQZg2lK%2F4a9UERQGmCAVL68gqp6s%2Bs5WGRdMbRpANoGkjKRinoi7y6bdTepMPrAsNMGOqUBNjoouhQTd%2BbZ5TI2b3TnXjuQfT8ZzMaPogbtqOJpFYh9VNsdLz5qS26sqakJ12KanIULDifOo1JmjVka%2Bes3zbOtDK2nvHoFq8%2Bm0EdyEpVyE6nVpBXCWNBB9OnKBMd0kzBkn3T0TO9%2FEyJWw9yzDh6PzZumewsGc314vJ0QPBx1e98C2VeKrB8jh6qtw4HFQGzu%2F7nXzPju6dzLhbl67qguREXv&X-Amz-Signature=a7a7a39eaf18b158bf7a0b4261ecf7c233e90c130abdd579f304b6f3f52a024e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

