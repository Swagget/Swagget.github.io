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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466532D24IT%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGY%2BUMn8I9aXN4gQa2Zl73VSHrtAuoiaBByyBGkafO0QAiBRZKWYcvNeWMDDwwyDf6F9mOKKxt2EXaiPm%2F4txiWOeSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDwIgWhQEvCxC4GyAKtwDsMppjSCv%2F7C3ZD%2BJAjnX5mKNmDWcB2Pkq2igRQuaOA4tWYzqYNWDd9IgM6TovuGxUWqdyxLrMnUpyQu04cgC%2Fa49Q00qjNFt8ZL0XWp14ZY2Eb7iI8%2BAH5u%2FSiUGqFk6fZ6KNcPUNhBzhouEWv7J631LJQfmYHzOEzM%2BXxKSCs5yjFpve4UkFUL21pmuI2KtFJ%2Bib3gqoeJeRktj38lc%2FiHEcJaN%2BixZ6bzE1GWDM29g1y9IddRLoEvTrmFFFZVRMDyXhCtEWr4DNOOskfZKFGw3l6bIwY0vcvk75%2FVCg%2BwPnl7R%2B2OlOr1nP978fkfcw3lrO2qkWPIrGqgdhgqs11nXrI3MIE%2BXfemqE8ZewpHKiOuPWiMrLKfbyRa6y0ZbiFxoblQl5HgdF99OvuE7bTrM224KRrcaSEZWE0thsdeVGDowZ5uZyLcGlJEecS3AoJFVFaJkOrCpFoKutPcU1Ysiub8yB7iYMiyUXcfJszMNII0xjYkI4%2FgTWFyNyvIraT3heshaYSnIEzSH4vSb2ItS8VKpCiFGQVdQN3ri3HakaAw27p38FU%2BQ17Ri38xM5r8XFjKl6ZnrDPQMxrD0X7ktG0g7ervorcm3uj%2ByEnCTYk%2BiKiYxYc6G07AwzN%2Bl1AY6pgFj1LoJ2Rkkpr9GYN2kk9Y%2B06t38rAMRd7bgt4A%2FayAt%2BwTJsTPqtynjlVJbcKsUMVmgnLyBhlC1HHItediOhRBhojMOPS1aOgmuN5ClrbxrxFJ4xsDQrbJTEenub6yJAZCoATh3wwvX%2FcCH%2B5KXLMljboPqZ%2FiiQaWDmmVTDzRo1bN0ubHnqyKFn8mOuQR6U7JPj3RcCoQQ4Nzh%2BEAL65sacx98O89&X-Amz-Signature=1521d643ea5ec948fab7637a58889513149454195bb6ee38b71576e970948fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

