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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z3YTVSB%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T072029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaiATLzDHcSTV%2FCkymij%2FofkYDNnAiLDXRU1LRTcFspgIge37q%2F2BQZH%2F2VxQoyEpnxYH4SsNUVPDVLpxLdg2%2Fj98q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDG5NQF6Gt6nsqFl3UCrcA9qkWLhWIzsrNKiuQUcq2T54tc2DcPm2S9BV2%2FVv7Z0Ek%2FKeYd%2FVTtezK%2BLPBhXitryv9Xka%2F%2Bshl3r4cuks%2FQaOi%2FX%2B04X1%2BvgOKQXGEVDjsQRmJkwTYYGXzbgbyZAO0UQPMggYBnC2wYp8uPDs2eJXVmFZQpSKYturB8oIaycjlj205EZvuPugRJK83WfB7gptDmGfEWjWNZdtyhbolL4HlWjW3Yjla3Ycyov1OiQqRZO5Lx7AgnjUcnRYL2LUAv1188YwQf%2BXGjkeP9dcFI0iHbCL2%2FA1lSIa5IWIHzqCPcPg%2BTFcqOFvPLUGuTy4rUW08aQGtV7%2FWb%2Fh8RKw0qqekcdc2OvBznD0QSP6TmqIEteUBSU8Nrz4JN%2BdyvHWjwPoYNdQLtLHX26M%2Bajw1Etwqh6aunCk4SSILjFdICyQWSNutz5vBKjNODgXEN0iWIQsFNtjlGCS6CFxZxaMJju%2B8xe9opiD3Lc0mCfI8V9sEf%2BNgGiXhusC4COsbhfVWHqeCjJ9Ep0KdAvRs3zkOlFE0UDzjXWDVX6QS%2BwKLqBGxJEYFklnwd7lqDKz9%2FOvsMt0%2BgAAbnK72mKjtOrjC0zHeMFas%2Fk7QL46vWfFcjB%2FJKw1epdmHadbdZHfMLPSt9IGOqUBelRdqntSS6NhmLJGqCn%2B0qFxW%2FY9asB1RInisM2nEj%2FDVStgBpRg48eYoodsY%2Bc2CeQNrsNvc%2FxahQ40VmhEZQHd1WZZyuKZl2LVTly%2F%2B5XmlgrkvAbd5PyiVKGrYw0DGDlLtKd6rp6JCMDOjbqeAuUjrH5nHuMXqDLHy4YIhq2gRms6Px8uF99ZO77xAxHEeP0rHuk8Q%2F%2BrOyuaPZRQs163pjAC&X-Amz-Signature=2f12796b39812b881b64782c930a54915f4723979e63ed3332d76ecd1861902e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

