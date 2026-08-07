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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J6SIYST%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T154105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdUUDj653m17LqnQvZtp89ogvgxp%2BxRv%2B%2FUJH%2FIFfaGQIhAJoYy9AF5XU2BCn2AuTZMkxIgtKhkUc2q84FTIfBbB0dKv8DCFgQABoMNjM3NDIzMTgzODA1Igy4yNJCJVQd7BtWb4Yq3AP%2BqtDBeznoVF8VKZXm4eKFGMAM0kipNSXgqN87VJTodFlCH66e0ABzvkM8rqB2JrKFIaRMRS8x86RCniLTPWMO0heSPubovEd1iOVsrtRqOGWc4chSQhBnmIbf%2FwvqSFap8aphRH1BWJ%2FP3g3VRcHPqnwf43OaMnNHd0aS2KD2rT9aQSmilVBwpjz%2F0rVxChJYxHCwOcTtS3gn5LSpaaBJqeZpBr6fQu7T83K5VBGbijhv85dzmpG5j25QpQrPlc6%2Bzx2TLqCCoXHEOKo1sHyRnN2GbIqlpOPevJtJGJR7XH5%2FJzTkti%2F1SFr7E1WuapBB7BcOJbhKU2lWFCerOcFUSSxbmK2RCS3mnRndFo221HV65AQxsVwwmGJgWXftSXqYaJd0AWPJQdltv1wHxuapS4%2BJriiWU1Bx2nPttJXVpZB77OyCPrEPtB1NQcdF0axNqG%2FwLRabpLCSkNWzknEGzvEqhz5GH5DxIFcqV%2FFdHKpBxRtrgDxVpXY4jEmNYSFGhftRKXWBOoASLTfOrPm265WNg5pKdZcdAPXHdHbTdJzeBYX480eccn3vXSG0O7gp2vhFadTff%2Bs65kw5uXOGL386DdpG0es35IiBuX0exzAGWyosYbbGorkzaTDh4tfTBjqkAT1yfp7Dd%2F%2F1o5iG05Kw0y2wWmaWExsduNRT2MWM7%2BaI5a2nlJFG%2FjmiQi2iMjGOaX7iWv49veqx1bVuK5uEcSem2mTjZsOGxvs9FYf8SYol8WEGml%2BmYERIlYqx0WJk39vNkASDZS7Qr712P56dF9PCyWpB%2Fi4jmJj547FhRnU6cxZx52m%2BsIN%2Bkk9EDgjHf0CG9Uj6IJ%2FW3as57zT%2B7Yp26qyg&X-Amz-Signature=84c452991e7c97a9afad2dd4e7f115b821733064c96a5f63eb7f9b1a16c5b24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

