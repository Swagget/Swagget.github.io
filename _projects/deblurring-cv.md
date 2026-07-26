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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFLQY52G%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T051756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDvtMZ9NU17Qt5qP2GAj4xGwn8HgmNCy2Zt5TASkXtEdgIgOerfjlmNDTB7ihhAvh75uFSegQAsUEDpvAzDj5w2AXcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEYeNf41dfRy%2FVL8RircAxFePSJSnKpacQnXEGMn6ojdbBS84CfEskA5r%2BEm78qmsEddIkCt77qvfYpiM%2FFv%2F8MotcvG78e3zefnMQWw3YDhhjf2%2F4WW21ImqqRXCEXDZQ%2BmFd38FKC55vD%2Bx4n7h1%2FDSsMdwoL%2FfiFV57%2BeMGLqYEjL58x3idzr%2FGfFDmVYMXn3mZO%2FGsOYi5EeGK4%2B%2B3wEoJh2i0ZL2IKY5YjWcv00essIhWpVqawH0ezCcidppix6JnRgFbRQhtDt%2Bch1eOEBvIGjS%2BCqJSJR11hgC3C7DDNmfrAmN83O9Qldm1k9XXiTezYv1R9e5HgfPuzVFMdfn%2BGs0vYiFK8YmycTn6DhcUhRVYowi%2B9sah0y9ismjoDq2oWQvdFaof9xT0SbTDLDznzM3Td5VP7cVyolCxK9xoxxSKwBpYFeT211drWLbiGjCo2f0IA65ljFqNOGffm4BxtSCFKmnQNOUv%2BA0MRyGeD67ersyIjWRx%2FX3dcb1NaS7SMZSd1V%2Fnmsc7eory0X8CQ6xAAQNjZp8m7pG6nB%2FH%2FSkmZztht9CEmDJAWG3scOwMbzlP1FYZE8Ax%2F0%2BrVn34xFMgSlusjAM9aJM%2FzxEBaFVmGFyR2t%2Bjp4Fe3VbsmseARhnUkZDB2kMJOBltMGOqUBNibZqgAQByR9PRf8M2WytzTjQxdlorNtB801QbES6QVsuLEU9F8ctnWaJQmqWbQMf5F2aLea9rsQtnUueYOekilV4hB8LlsVlXmtBp%2BU7aQvi2WFNmH5jEZ8%2FvkwYNDBScssdEj%2FZsgORIN3P3QWpqI1adlSzjR1o4cl8CefZjeqyBIkwB0shkKl%2BB3nZCQZbCjwl1L9OjG7ug%2F%2Fbzg3Ov71lvCJ&X-Amz-Signature=a0aede32f933273624397e4e21fa2e102a50b13c29dbfa15c0d88acc9cf4059b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

