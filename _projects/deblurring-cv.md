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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRDY3EA%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T200749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIE0pRlBfK0qY89NxDlsDgt9G%2F5Rd4jFAynnAk9vw%2F97sAiATIU9OeHiI%2BOBquHOp2ytt8kCMGi3kbF3M7rTMDswQcyr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMP2kpb4yUnD7%2BcQb2KtwDcLVR2o8QEPs5nynQmvfzrjPoTmYn1uEFK4H4Zf2HxVLiPDnlHfs%2BJpsRh2kroBQ7w9%2F8bNePXwCzaQeQ637OuopTUrURWLhXo1w7jqlA4xIoEd0hPMg%2FUxYltkY92y1qm%2FeFMxsig7e545eWXpKPeAUHAGU%2B5FpMTv4%2FQhNjvjlQg2uEjNCyOSEqU6M73pVCaHoB3ehRsFOitixaiKUnnYfI%2BJpxvwmrBVnuY3f%2BgW8JDJc8WOnrhBI84CUYm3yXY3xvgUg3bD68vAH7dR9WMQJvwi9EFt0kYtzC90Td7BYI4HDcKrZkwE777kqvrM2k3pkUls1KFkzRVNjjyWnZYnsV2zR7KEyGuEvUi20TNMFK7xP4W8q4bo2dHy0wIdQ%2FQrn5AhlGgmriHjegPjQgHW3QoltqTmz7hi1b3bZ5skdHsh0ICYkPVjWWDiQXw2Kx3boCDqigsw5XpQuvCs4hwQjFf2VfjjsLmJ6x7cPPFNFtmB5r74LuyhbHNGB%2FHdN6qyxv4rlPaYozo0JLOkeg%2BgycMmLbuPy9Ll6YesZ9RiSNS%2BKmTUMFCcBeB4BUYeS5Ecxo31aYFm6xN7d7PIpqK9jt6RBFV1%2B5CSejQutpepmowLR8yCQG2Y6N5D4wtNuO0wY6pgHMmJPa1azBOVMcQxHyIaSP6w4X1WtMlGt39Cw95gMtdCJIN%2FJIW%2BDHKJXhTiDGwhOtv6LrSxziQX8RkI7yD88w0D6q43dvj0MTjxTbvMpEKheGwQ4%2FJWqNVnyt2aaP30%2BJ%2BOwPop8lxdbJsXxLKYy93DBoxGHhT6NQRbDl3iV4zk2Wcw2yufV1ClVbm5Bk1MNaetHFdfbMpbkqOV2q%2BjclRV2xZphq&X-Amz-Signature=0ef93545964e7e59b7cc60c775d226fa37026c9529208270145557c1bbdec01f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

