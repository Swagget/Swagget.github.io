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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCSA42Y%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T205535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmaGUKJrQ%2FPe8UyKp9Or22bYSqFy48j90v65z%2B5dajTgIgF9IscWdajZmHgsjpzMKBmtb8sULDnPCcuKNodNN40mAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEgPZa7KiryyrpCD8CrcAxDKEGB3K7nv5G4UVmY4AS9BmrHf9sLEjUCcbHA3a4pJGsN3qObjP1nYPnogOs6TqcGcFuVUYOmD5OH%2FfXAXk2nnKCMVtbOXUaqai8rSI4UYFEwLRvvhYdBetcUVDzYhOGoJKsrjELTuSvtv37bQgEzYJcuXmuMgK9BNV9pFhvmJirk%2FdedFXQgtaIzrpHSmPhqAiSxc1FeY3ZXroKENyXcDF8HQzNu8QQCzUJbV%2BR2dAeY%2BDXdL2xEu222EHdjQJlsjMYT8cmZAqWbkwTmg7%2BoVe2pAzdwb6ygKSh%2BmEPQQ%2B3JbGj0YMCisQZTqHG7beySWghDf3QHh1u9owqxEQz0WDjqUnYkkr2hO9DujrwaGd6dCMzP54W7ooWJsGqsE0HswY8etBoRupGbpu%2BTsbwUsfI3Ii1vUEQUaOIq4sgFDbw7l11FmXjeaRGutHfhF7rqSu65JH3Z0iZaOOi7w2lU3BPbHmkIDol7Mbl85hO7l6XlZ4wLtdqjaeJfh9cXOel6k%2B%2B0j0Ro%2BxVOXQZZh29r53f0VxnEgif8ycNeD8NuI2nqRgCcI8WnXTGscLzSgiC%2Fqn7RcDN455nSOgpAntkrPaIH7aaCmo3FgRhHShKmc3bnSKc5QvQYJ7sm9MJWbpNMGOqUBJOxJEdnFOPp0rsaz%2B7N%2Fyph5WMcjnzgfihOREmqY1X9obZwVihalG4V82cm74qglP1x79BkA8SLNDv85ulgj1v0MVI%2Bzohgn%2BpQq%2FDKbhXsI7erNwhaFCk8UTYijhwSbyN%2FrtaceD576HWOYGkJ7rYiWJ3Sds35Om4SL91ehY9E9c%2F5PmKX52At%2BEfnCS%2BN%2B5O84gANalUWFU%2BHzoxspDVXG5dP0&X-Amz-Signature=367ce56e599e1468f5977d75757de34b68fa9be79bc7e91b0d44ca36fde7fdd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

