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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVLCY3GU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIEzliLi3FCRgCcTc18MMhvu%2B2NjFkfzNi0AwjfVnLGhFAiB%2FmCsfQ0kYxEAjyd%2F03%2FtjOzCd4k8smqcWFwsyMe6rkCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMve%2FBLAvJF7vTq0z3KtwDLcqJa1QubSqfk5Pw7sxRgFOmN4Dzc0xCaLAAyXZv6ybYZ0not8wJ2ctljUrSttOOf%2BximyPP76rdmjPz%2B%2BLgqsVr8fIHkL0mblitT%2BCcRXwL7rDN%2Bdp0A7PioNMCw9C%2BnCuwCeEckjtKnXfsQVPv0TurwMe%2FjCbPXOUZ7MnRrYjXIUC%2FegvAAg%2BiehKwkHBNTeXfmNHTzpuwbql4fwscVXc584sFBu9AezCEdq495awmHpKomqjFS7fKJxH5T6rxfYmtrstjkvCCeAz9Uu4%2FzWHanu8WTXRMRd%2B6X800nwyr7WZ6OKOCgLXYEudpEaTfZb0fmD11oLQy66DDE0OXOSoLxkjVkIAGtqG9WV6TYYR2Ihl9AKRhavH%2FbXiBRAPGBnEngV7Piqd6Ygza%2BJ0JwghCruQErhziWki0Mr%2Fj3%2FYJHLn1V97VpxFfIBJwfVxfQsr2Y41rFTRcUmSjtMGGwXG1CzOBuL%2BIdQudDrukcrhJSeqrQPWIYlCkvOC07rVaWiy6PlyCIhM85rNRQ61lxRlJw%2BJu29ye7oVEgY1je1SYLr3nX9e8mUOtgRY%2BSzkZAgk1Pa7hw%2BOpKa4mYG7Na6xoUs3dGiC%2FKFbPctlzbsAxEYdx%2FhveIJ39Y7Uwovur1AY6pgFrdqjv3viXJH4jFoUoWrACtGuc9ewH1vJYheUQJ%2F0l2YEr5wzoPNFiJRBnAwqhFceCna9lhCF3XqEKQ5eMkt5Vv%2FvSFg8MpRVSxMCWnptBXa0qjfueFTfHUoE92AYbvFXa%2BUaRqgXnxeDLBP0eC%2FwNZP8AAsnwOkcSRkknvUukZLaLP8bFSU5evkQcqP%2B4DJif%2FbukkqHIgugndSmgnkArSPdOp06V&X-Amz-Signature=2a3311905b2efa18666c53bf2cadf4f06212c723067356c2c05a5900c64ce0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

