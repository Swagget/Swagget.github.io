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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZDACP6%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T224350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDbciI26SELXIvUERQzmt7PI1hLYF5%2BB%2FCgQidol7L0sgIgEa%2BQkaNWEkcqP4YHr5EpRrJGWFKPVwQGiFb9oOeN7yUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHjQmCJI2AjNX%2BVrSrcA0tfLcNU9ATtch1zzqviVq0Keve%2F2Bn39zgUzPScykjdzSD6qyLIIppPW9c78JZpdAAZ106kQTI%2BQ%2Bcj01BQW0BJghGXv1Z0XNvJv5Vjy1u7XHuPbqQYLEHb0Z%2BKD0cYV8XHu3id14ooOjnSJ2x7xybrIL4MpvsII8q7YkDCb0QDvvWnbUT%2FQL8l%2BLCNGdDSabi4o32QyCOnv022BjL9o2AvS2eY%2BmHYfLXxoFzZdzcyxDCyqBDScQoy6i2ax7t3%2ButL2YdaPLdINSvdLZst3Q%2BAlY7taZpRlvVCer69Z%2Blp8RPhlE7Hy3D5J%2Fqt7opkUlBpb6Y1Q%2BxhqaPLbVZlyrmRomEQjVE0jd5A%2B%2F%2BRT5AR2iC6HBaT7A66YVPr7I9MMLeGx7IkqgrxK9Xl%2BBmdURSM47ORlPPMDuoZ6jjvKPIGcieCDfDnuII6gZiC53rVXRYi%2F7R0ZD6J4jxBLbECcUQ2NzMZ62HkO9JUr1tawcw0XraGtCVtMIZzBftpur7ZWWS%2BtrU42kp9AqAjfYPMFG6IzBh5qlNbwNc0gnxYzGC4cTSgW%2F%2BMSiZw6hQvM0qblHFPPCQM4ws3VqdTHQ7Gej4CHPBWXqSTj%2FErd%2Bwoi8MH8kB%2BNmtwXsLJd3pWMISUitMGOqUB62D9xlv0dgtYraHs12Uq3PXdRcJyBM2B9jc3p9Sc5D1hdbqrHyoLXmrkiEQQSIMtMrQ5Uv%2BOEOfEJBVt9TylDLu7ws0agSAZiNAqNS516Qv0Ww%2BbG8jAxMyNEorcRPaYHE9q%2BV56WRjnRwRBjGwBzVncB8OsQ0grzLQN0TIscHZ3RciZP1tTCJn00OkykBOiDcz7X83C7ivFtMxxhyZ%2FM7D661tr&X-Amz-Signature=be09fd5dc330f6f8b1f84a686c9636df7a39ab1f1cec006f516020ddd3fafffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

