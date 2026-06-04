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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZ7RINE%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T002401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCrBoyZpDUwiLTMRYaQD2HlyMF2RwtCp5yzVjR0Wc1ifwIgTuEzQjsy%2FQA8yoGeIM9RZR3cKnwuKUfZiJ5nmjDfVgEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEL8NRzutkGXkqDeEircA01peWsGSvmzf%2FtmoezL9ID7KzUhxhyOMu2NowEUeqJf3r15h3XKA%2Fpsxp16mqUaOr3p6ZplTqz3xPsXMFjRyBpuQh85CQ0qCEvNFFCnfpDDLd6DRq5e32ESAuSYmz%2BBwdOZ%2B7kB0ehkQqHGExIeTjiX1v50GGV9tngjvEWfLQiTbe77P9JQs%2BziOYE2lYqc%2B4iZrgJ9TFmbvSWu8ixqAvKgPS3q1uKATzStF9oBFYePKrBs31Vy1JENoXJLG3auqgOn1fzuAmnFIb8E1bg%2Fcei%2FHxliC1Qh2mCElhsU5tahf5jOctfM0iOTBwuxH2l6%2FDwnr%2B2YgWJnUtuZmhzTt2YovXFrmF0OfcP3xrHKYPBnrhufVBf5Eo591QODEVoGJDkTwPrSq%2FbeLMkHExLmxRzbzR%2BFAhXRiQIvs8gSd7S23up3l8NI11z%2FGeHyHKVzBNCd8zsibLpa3ldjmYh%2BKUpCuNQxk5Z9M6QMjlxSH2OMkKGIpezyHGydEQ%2Bw7yTpPazkW5MdpYKgTxwlE81XSNy9JRi%2FFPsiue2te89A2L%2FU2QkEtrY6uB%2B2ReSFIdUClVgs%2FPgyAZ23m4CHvCRroSEZXFFxlDtJnojbDrf1eX%2BhB%2B%2Bz0wxEnXJm7plyMI7hgtEGOqUB61usmCM7s2YMr2GrtfLt9N8uNbwtEL3ncHhrHX%2BKyuAOGwm1hMPIe5tZqKPGcF6t6jcJejeQsSH3cc7zbhHb%2FXkVTN0xaSO2fa247KJC7PLlGMJNt9E46nX27DwktqCZT31z263CuTG1daC7sfkRiR3IgsdA8PnUJchkTXezJcHhzQf2TRa4JEXZAwM6TKtXjI5YySbFNnzxj7ueGnodlZs%2Bb7N3&X-Amz-Signature=e861278c8179c93c1c60238fdc6a4cd7822ed8160ba8073b2f2529492bbaa567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

