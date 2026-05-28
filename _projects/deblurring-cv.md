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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSY7TK3B%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T200121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FWJXMlOQgpBv4ZnzUxalS8dX1zdQm2eBQ1G3lYNgNzwIgC%2FANbnYGKKe9O%2BarpKVdYb8ugwbF5KJ9tbdIUiKKzu8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMdB8vMZN5sLJ1%2FRircA44eZ9wRO2ta0bp6hwuUPdroxYzumIgG90UouTqqQ5hh%2FIFltYH8u3v4Ef03T98VOLtQw%2FmvqBQF4bp%2B%2BFUnZgEkY%2BMBsYeqrK4qCwX52bjoznE2h7iah%2Bd80eAZk9c1df8nBATdI9skbvH9JRUawyPx1GfUrBbllD4WFuIZu%2FlHYEsu44pKwFBVPGt7ZFS4UyWo1jq9bEHDYzZXsV472R04AGvJIukPM%2BlQwtH4kgxy7LB0jpzVOqMnaCL9BIOOEBtCnFDKAPfsA4wWHeoxPkEPB7a6CjeWoAQ8jKAzNi7jtZoECD3dvuuwJ4txcrvsu6Q4dc6qALXam4t%2Fo0In2c1oJAY9APpZuqxvHwPuEkK4aHEeQG%2FdpCpEQo%2FgVODiAIgyN931odiYJPU4J1YrHLaHBGKpKjRkah%2FB1TT3jYflq96IC6dWKpAyclrZMrBtgIySvMkty7qPiwqSdCtFa0Tfho1IU25H%2Bo5C2snqSN22bogHyqTH1MmjwBOGd%2FO42O8e3mCqtFkJP4cMDwDB%2BdOwVDlCCn9IZadVfr%2B%2BWCQj9CJMzLJTfUqeIX81rOorHEawsIFsnJv2Doz%2FYXVDJAd7KNRlFt5YnSGKeLaairMopdzt2KnjORR%2BbRCiMKez4tAGOqUBLq6i51EBdGOC0p21mD4CK8FD98urRiKKVm9zUXdGBfgv4ntO7x81EIKMOhOqIULfQW2ggMhV1f90wFe%2FrSuQcLTuKJPVtjYGmpSTruki3%2BWZZt1MfoMSdfmiS1igo9s6SAHe7YroZRb%2BX0TJiwU5lpLcmOXZI8LLhveBW%2B4KU6MB3LJkiwlChx2igFSfcUXyUGMIu4R%2FnvBFn4H17cSeG%2Bj%2FOqo5&X-Amz-Signature=ebdd00f20c9a9b7d37cb119ac6984fa9245f4f2a291a1aada3a3692c7b127941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

