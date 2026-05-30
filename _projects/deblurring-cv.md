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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDZGOLA%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T165415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIALYNPH4ip1yaXN%2F7n%2F8oO3l4%2FCVH%2B9p6IYbVCFkFM6NAiEAo7FiEffJcjPjQGXtGfskFALAniJHw4%2Fadnireet%2BSjoqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE079K7rFx9U0EPoxCrcA8sQ9gcRyIx0iOuEdNj%2FTfGMVloOdO5e2kR2D7cmtNZ6kv78QDFRUbQqngBvgeHrEmOYz2Z3Z2sS1Ex5vgRau1fCJS9ctxX0ntLK4N2B%2FfM4N0cYw3fyIyDe1tJbl6OSyXlgmov3iz%2Bp%2Fe6lwHDNwz5eboB9OBcB3YHHtZOQYArVDLyT3vxgk%2BIqcwsr2VbcgHwq220yfcsyS2hjrw4n3XlccgsKbz4Y9f3Xm4EEiBaNEvxXfEXWDNLbKMuX87HJjdTfH%2B9YezkOrEfh55Lcv8qME%2F5C43tTTmsjQQbRqwLi3WwTEioKeAuIz49uoxDPyGbs3cw%2BD68wxflcA2ANlxM97bsXeI7fDm2Kv8mLvH0UUCElx1eCW1D%2BloHkdrZMj5hDhYbF4ZrdJIIAQ8sziITs8qteTZhTMJaCHHVcDiq0OFzJ2P6f8F07HXwJ7xaeExjOhvP7ja%2FCwFh9hwla%2B7gaTWGqZ5ZckgRb%2BHaXFD5GFXAC%2F%2Fq8a0SdCgqwqZHUlRua8IoPZoH%2BS1F%2BdwobDhRAQPfFEJI9DMRdiVHtRju0%2BamKFaia04M82glXfYL3PvsjJwOcgP1iET5ZHVeA8Y9qvsSfAylzNz%2BS6SCxYdq1YWoPYSM2Q25NenlOMMnh69AGOqUB3dgIs9uWLmHrrAJrvfG02g6y8fynEd%2B34jFcQHbDQAp%2FX%2Bp3yETjl7PcMSMF627gFY3hQmki3EyOqpXsxyJ1cmMBTqwodTHQMxR79oDFQQS4J8%2Bo5HhDmwb5UmdnbyU5J91MXLz5W0pxHx43j6soihqrS5t8tNVH746U5Qop152s18ySY%2BpOeeskzokYtP7ygQa9MC0R5RONxhE2oimdTbG8RwhK&X-Amz-Signature=cfb3f86fcb3f460265144fff9a5c2736dc7ee812ad03b71dc6bbd70e7f946a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

