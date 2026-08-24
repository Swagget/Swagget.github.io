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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIPRAEU%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T191950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDkL1Df6ouGa11gpHpahPULkazw3xRVe5QU9e9tsOsdKgIgN%2BARcxBkzOgt3bXgLudNO4q%2Bm5XzN4aQNS%2BM8bJQc7kqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsdEdXhYSuWPj3bpSrcA0%2FATt87v8XWgI%2B4HJHmez1zbAKXaeR7lkc1jylr7xxdQVdVUaINDzL1iEwR2OVV3scjZmQIBEud8fFERzL8FRjvehj17OSsVayGqqjHZCNgodb77UJTWtm2roU%2B0IjDsoGr6J6zwb9FeiXSBqDAOifVL4FQL1zLFw5niSQTwMGF46wljCUUffsu2uv%2F6QSqIK9EJWJ8f2F67domMJZZLvtg6xgtXvOPVdmDykZxOInHRL69IDxv6kvw8SMjS1CDyVCEnsdYyaXLcv4Epkl%2BbGw8YYARtqI1xyqJBKe%2F5tkYS940t3bhmDXMxZKZezQUjDrpJ%2BJlpDActONUbTr6JCz3XinQnqKUI05mK%2BYtok6A9TFyRhY7T9JR2p6uU1JS%2BeWGBx6F9PWwsgGpvO5hoWc0DZw5MlS5vSV0bvZzLoKH7u5df4sFhRU%2BMaU95uComrYgWFqytKQqur%2BVHBOxHRPi6SH7JpAfyLlrCgQS9265MF%2B0U0ZsdY32AeTVbbPVi7rOIcC1U5491g3MqF1tWe8Hz9TcQCArOzZGwFaDHPJSS3Nl7dxS%2BwnhN%2BWBjqwY1T9qbaDHcWinayjVFXAhmgFzMINF4RCAEBkuY2FuYgf0bM7x9BEDTXVDOhSSMMX%2BsdQGOqUBzUiBlCsE81m27AbMHV5S8faU%2BURiVo8IQbg7cKQZ%2F%2F65XPExJhEeiMVL04uY6MiIW%2FVjMB3gWTBWiNldXT%2FVX6qUumU91JEflF8iK2UH0M1kqeNdRAuCaEn0Yo3scw5rbd43PBPu%2BHiBSvUBwdhfXlnvljN%2F0PFE451gr3rYGgFIiPzarrvbS6DEGIQmvWCL3%2BecAWeOS7z88zJEDC9QFN2sj8x6&X-Amz-Signature=f0cbe38c858fc91931a7dca3ee0da5633df8dc15d0a3b5a2e88475a840e3d00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

