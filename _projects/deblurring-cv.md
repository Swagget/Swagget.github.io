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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVHFVZKB%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T134455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbForMCHa%2FpnNjBdGzAMFGJrioTAkzz85fxNV4cgd94wIhAJJIXTP%2BlAmF3M0%2BsOenfxQI%2BFy8LdUDgRbqBJH6FyTOKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBCVZncGSHSkcWdiUq3AMAa0gxBMTWavMHNoYSpAAU3KuuxED6pKYcwI5mbX3nZCUxWSLzQfN53YvlDn4GoKwsedCi4UY5qpl33vWm4ybVlYtSoV8XdkNs6Uihp7%2FICFP0cHy%2FHkqICbVRa6QVI2AIpA0qHsmvppTK95h%2Fwvey3fvT%2F%2FlpKZT4DjjZc2Wb7HCTThYJypcZaIJoY%2Bpjx5pCN%2FDfqgKul%2FHBKIh2V1%2B7In2zKn7LL5aT%2F2FVRd47mljK5Rirl1hURmwZn5X43Xzki16q2HTpEUVbxE3k4xfzJPJ%2F%2BxurA5RtInD2oypedhnSynP7WHo9wqSz%2FR1QFeDiba7tJAHEmNSz34z7MsQVYnHuPt2yVgG37CPFDvH5pLsY3yde9Ff96m3c%2Fa7TQ70kdcxUG1DGQf3q2hkmoNR2DAK%2FU494OPnBe0cLTsyiS%2FRE0rq3Tmr%2FK%2BAxfXR0p1whNiBBrdVfl%2B9k6N4ihjaqveVO4rhQIlojidnD0wIxGAsn7Ju1CfIA62v1leV6lkLbZAn6ctvIXd7Nx31CemPBEswuW7xlYSo2cFW5jUC5Nem7IxZwA7BuWCw4TNHYPhsrLYK5U5VNjV9HYIlDvtXFpk9AWhpqou5LI79kdHLdIRMjT1g41R8k4D0LhjDY6%2BDQBjqkAddDSwFJScM1CG%2B8R2qv%2Btxiptk3fQfMlPQ7xVcbN5ABvuU2mUEWwZb%2B7lUlUnWjAJmx%2FR9bupfp2iynOxAX9uO4tx5dln%2FhtPigJyCQ2lfLbEv8kd%2FWzT861fNphNjkPXLnZXK1iu95ICkTh5F4hIGVvV6kyqI6JGo%2BmkzDkYZBGJZGI8ETvQ7nJ9vXt6TeXGcCIe3Sw92YWj3%2FsqT%2FapedEkkO&X-Amz-Signature=29468617a5f24ca67d596525f8f6146798f4e98fe39a5276e9e7d74ecd9fe2bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

