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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XKQSYK6%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T095951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDEXWZXMHFFms0tUrGt8x34AlbU90zOdYJAEvIIwyzbDgIgKfKxNqKhcOLHtpDBtoUdSqhoUuQJiwbbhzw9ExycAbAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6yZ71aTrCfBWsxMircA48VwidQnGGgBeBce%2FqJkG5XnCgu7yt4Q%2FYHpGxKEvIJl2MGFdI6%2FfaA5KjuFmGcUpcSf%2BSQUGo0uabIRLizaCR4FbImIug%2BUqeUUawqnZuqAnF2akRAJaoqlnedbjNiCsVMSSyv%2Fjh6VpW3LSXBGuVbrPRBILcTQ%2B3nidEdu1LNCmYrKet3gRf8Q2jO%2BkTCwoeSc%2B6m6yTn3tmnO2SUvkCOb78kojfefxANZrgL%2BWvaiMW9xH%2Bd50DAH%2FD41HKQUhV6JgPz6qbAp9jG5B2tT86wnZgvV4S8s631jbCAz0QI7N2H1O2G0vqIYEiv4Du77Jyt3kL12CoEzcRTrvqQ8V9x2eY7cj3AmqLCN8mY7xbMn8v2XkLihWFI%2FkF9jFvsmMxxk%2BHjVHHcK78F3dNSM%2FmRiupgFRXyluiDjeuYfcCK34Ut3EAaRyaFFI0Z5Si0IQO3jo%2Be2bzTUzgS9NJ19xL3DBIxmV7fqfBdi3CnBIkRo9x4yOFZtsyFUMMCkUoMpAakxhm2Qi8BO1ssGdQUCvuzoi1n%2BQbdeK%2FM7KfhgWN4gGmphZEWwikBNzGHOJh4Ae0vWDEEznUdRaoG%2F%2BoBE5NuVubKJff1NRVTp6ry%2FAFeJYQ56J0Fwf9SRZV2MM%2BLqtEGOqUB6pGMvX9EZ63ofFn755rjDK4MlDlVR%2BSJ7ez%2FrPjx9CigKX4%2BLw7jH3Jeb6NsVENfJg6FVkQbGbKizVS8SRC%2B0Yorz6ZWpR%2Bnhik6VwC%2BM3iK%2BgS4tlTTbwGjmL8SHm5LjVng0w0vdlbsH4vPSGkIVJrGHJGShtKPfhNpJXUyn5wN%2B%2BAlzu9XYti%2FDuovr64PqaaqSi%2BkjqcM01jKKhnw1ju4mQFM&X-Amz-Signature=b326e2fffb963b9f449bf57a68be3c290d182720912d98716b03725fcd65c7de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

