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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PCNGLTW%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T225902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3F5Wh%2BphZxD49%2B2MtKi%2FAdzxmuJnD5whXeTuW1l7O3AiEApvwoQ3Z9GXuv9wb9aP3PjYQVr9sjJyeIkxthOSf5OFUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGKtnzBEvDN8XQ4IZircAwC5SuBSAkdsjqv18i4NboGvwnKqIeaQRBkywiV8Mn2ChjPLukymXb%2BSJH3dRwkkxSN0F7IsyvgBWZBaVCZZ9b1ChweWJJMdXLD72RWhuo5Smqy8tE7UQuzuzUbzYXVahLCE1wBWyzXjEpIlTvlrAUbSO8iAEmBWcfkcKQy7S%2BLGcFkO5njK294GyXl%2BXofGn%2FHaUW3wnbRjX5ONcBfecU1uLQfRIJdrwWZkUhg1Se6QnX040XpIvtMrhmIwm9J4L0Xivg5FDBMnRP1Vg0s%2BLN6AjdDmN7AdJ3wBW8dCVzR6jvgBDpsQqaVKlXyWwWqJQmwyO74H7VEusxo5NgTSuzs%2F%2BdlPQEm4nTmeM0ojxzmtLyi7bpFXQQyBNqK%2FvIaNk2ogMVI3qd7ITJxEEKd8yYC1aAVub64Zhp5hBvttpzyK77OOalhIdFshvcMUNeQEaeiPtrHA7JYQmhAienId7I%2FJmWm%2FAp%2BrkeToMfCXYsXWx9U2kSkOieEp6wylviWQdiFE4Y2sYveeTh632iZKmS56EIi8pFrXv0lBbOxbeMGOnSA0UQGRsDc%2F%2Fl%2BP88Zt4kNwNyCuY6ZJjrEp%2Bhr5qWO4suPXg41hWq0HSEprHLILxiyuelYthxXdhijNMPf7h9EGOqUBfBu%2FV5cMF%2F5woIjbFAxW%2BwJ%2B458LI6uOhFwEg8tpjVOIu70xQLU85dxC4%2FTW8x%2FlB5syWLQg%2F4bGV4uaDqCedQcjbPUQSemwbFLlkNgwq3ikVNJLYqawmAQ2wEDkAHVfhY0CzFeznpbZGhJc47n1%2BKl3NaZ3avzMxc%2FX94M%2Fo5sdjA%2FLWipoBzlCAExMWvB0EdfLaHk0cpq11gdZUZjsUJUuzJ0R&X-Amz-Signature=8f0131e2fbec88a863c169dc487a0bcd8bf6f22034560e33b50bb944672fe99d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

