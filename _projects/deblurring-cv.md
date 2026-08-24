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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLKNOMV%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T133946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCxglC1N4vOMIuEqIX7z%2BfmcehtKhayGO6xTl%2F00KtNdgIgJUwVavIklwSfPCa3uVbt5h2i4EbZTnJYg%2F86mf4VB9QqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIB1N3ATEBdxplpFCrcAxsXyiB10H9X9%2FhZYP8NKQd0Rv1rWm%2BSeFE9epjqdrzv%2B4aCSkPGWC%2FKJIxipkaVwQV2bOuyGgFQLzF158E1BM5ABNA%2FFFODsAeALLOa6n%2FmmNfwWDmv0RWme2QEbvDmI9tJuZIbKqxhy1rVpwUuO87AdhyLNCdkRo2U0hGe1YLMuptvD6zXFRSF5QFsEQVmJMBE6meyxuP4XX%2BLq95I8pgAgwA0YneD6%2B%2FxCnN727pfjlHYKtDo7ta1ON0Yim%2BgIyg%2BcNxzR1KtmQRkXP5d3yXsP5mQAeO2UXR62wsOMVTucVAEstCT4kPmoBijsV9aWwvR77TUJTnx0IBZ2XOIb0xytzv0FQV0%2BbhI2PP3%2B4b9sdWVpltGfi6YTUs12Bm%2F1J%2BN2NzRJivtWeSlk8vZyK%2F3Fjay2dHWOw69FGHcs9ehUhx71pIJSJQSoSz80%2FsuRxwY221%2BPEZlqtKnbLe9fBaWpY9AG3GemnMiujWJrXldq5XMI0cRUlcWXDGtQzZvNoKm7FeGMVFsBmUgGmft%2FYDABuGDChwz%2FjS3X1iJIP%2FX5l%2F%2FBO2Sm24bSFCTJhgsRboRs2xxyDP7pb8W6njYQ0zfQn4A8inmEgLHWC%2FaBTT8yROPjXzb4145etAlMKDpsNQGOqUBGL9iRkQzw2notxFveQMj08U63NCHMfXHDCRBU2qfFkMlCAL%2B3GJRMJw7k6FZ4vk55YZ7XRdhyJZ5kK7LGLIvVeSJDvpWChWFOYOTMn9t1mw3T8q0lIxEQ9RSjU4EujbST8huXGEY5ObXwszrYe%2BlA0jKrMWOEUskfUvojYNVOyUorNvVDIiJbSWeIjuGn4tx2xB61qFuc4tx919jVMlfL9U9xqp2&X-Amz-Signature=c2668bc4d404644c5c47cd5ec7c4cf224f967a6a1d307193037779ed17f26fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

