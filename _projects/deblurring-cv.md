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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3EZKDHO%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T001215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIAfM4qjEq8%2FNYv9Acg1HYZhutv60cH7LbSWSSIcEJaq%2FAiEA4FV0awoxVz0kd62AA523yiCMISBOLYJnimC%2Fl%2BCXUFsq%2FwMIBxAAGgw2Mzc0MjMxODM4MDUiDCb%2BppBOje90bxcHnircAyqKM0etMSOR5DDpX3VVrS2hnk2ISRGiWCCYv9TtAlnJqyfR24LePo%2FMcgTq8YmA0tc7alnH85FzP6h4YQNi2VNjC1AGeF4VJO7oeLi77qN%2ByORb9EqAZuPjFNJdxoBvPU7JApUO9qtQ1%2FXJfiZA19mt18MKN5731iWPUsCcJM3jZ2owASQ94PjUuY%2ByTFqmeeecruEG9mAqSrLXS0HK09Uy1Zs%2FEy4SsuGgkHYdJmCWF%2BlJDRggXkweOR8Qj1rZv0%2FDEu7amOblLxBoDbA8iHh8TW0qJDZ4qTGBQT71ZyT8YeZbHClf2vVRjvVl6r3hWOZfbzzVG0Xpkk%2BnszcVTZ999FrSk11AyVfO2An0SG%2Bd2X8%2Fyt9l5UuBTkS2CVx97L0IXj%2FosiUoFp0D5nRiAQktBZdPrDcKZM2uh9558iqEiWQM9ic6hnDlciXBIFjHApP9xoUxnPXoUpyWAhYyFjPN2emgAcym3Jgk9rOAejg1BwoGiT8ws9TcDuiBY%2FfoTEwfl7AIAdtcUE7Xz6unxQ7jK4L1kx%2BzR%2Fqv%2FNyXaPKcrDA9sheNyfI09z7Se6DdindlNCOlMlLm3%2BGpLNRo0vstuPRiqBB797UMiHQ%2FT5lZqrT1BrLupG0%2BRUucMKXkrNEGOqUBfrvb%2FsZqoRqRF6m04zjsMs2YmZASN9h3LZZedgyglFR2FEYH2jwd%2FOm8v%2B6IbPUERsrQLJbHtVN8DxyioII2TlaXITQ9BFR366eRouYmWgB0zDfrVPHufgsEk8WC%2F4%2FnCBnuCoaWjR76cQTIyW3rb5%2BkmxvfqRi11kIgsg84D%2BRHptbXHQToT1vTmqfo%2B3zXzo6Js0FsGZLQMJy1oCMgG38206gD&X-Amz-Signature=d9738f792e72c68edfdd18cfb7465494b5b8dac1a89f7850f99c075bb24fdc87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

