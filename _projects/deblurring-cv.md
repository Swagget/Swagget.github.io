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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSBD5EM%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T072649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGeH776QTNcz%2B1%2B%2BgD8pgHpixqhbG2Ia0FPOOX3rpp06AiEAs2ESimmHZcQ9INHYC9QbsqamRAOSAYa9sttMhnp8%2F%2FAqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMT%2FRW39S896VDa0hyrcAwoHqze1XefBjH3nGnDrI%2BCXi1C744QZR2fBEvikStiYMNtjZRYE4VdOG%2Bpi7k1oPUV3c8xxUvu7W6Wst5uOJWhsn2CXT7KQ1EdLqNXszL020m7HFcXvuxT%2FlkRqSUVZ9%2BxKafU35K6%2FXTopG5yNzIVQG1TRK09gtTwR0CfBiYyIppdjMmGH0HOj4yK%2BBMYQPUEIV4cCJm9LfqK4ucQdWwTXcELtIlhUmEWtYenblt5ob67mm%2Blo0ZnQpqC09kEWSpYOWQ8ZpJ%2F7wydQoJHotNd29eQUq0t6kO30gAnSn30cW9o2SD4%2FfNBNgzYIAoN644nABth1KVv0qpv%2BP8EdXDlXxUEf4ypm0ev2wjbGkaCfFFyv2VY%2F9fsdOonSBSiwwlvIRLmV7vPduwdPzNsNBJ0rOgpNC7Z3IYqXqAVZsy7GshN5xnB28qHvujAsz1sBpUJz974NjApZ6NzKEAbZhTHJFO995cSrwWygfG5FeZXEkdsqwwQu3xdycjKKJbDs%2B1vYszZ4bjiuTwda4n%2F6jhkcJmMPXvEd5TO4iXYnvCkSrBnO%2BrVtXVESMEpgyXW2pUGBZ0hlhgRF8VcFOv9JBgHPPNSXdmUBkQT%2FYnuFd%2BuC2w6%2BrKY4x7qqR1lVMKW7ntUGOqUB0zqBqHmntcCXBUFQix52pf0UUL1pCXslI0r7FB4zOrA%2Bqdq1B7w%2BCRb%2FUvWsxG9WFd0YrdTEVfmEx28dbdo4D2MIqXYRgNFwcm9GVXhI9ZzM6pAc3ViJ7sgMdn4jfH47c825Az7stccCO4oa6RETBot0OuuFMxj20wbh7zSqaXaHZLJcpDZwrmZWbOUTrtObX1nP%2BfhA%2BIgcadlfg%2BRZ2qwbJLXr&X-Amz-Signature=f4d4f4093ec31c4b194955997e1891e84fa0a7ba3eefa819ebd534826c53e3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

