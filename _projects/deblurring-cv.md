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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBRAQMSW%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T050054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWTzzvr%2BylFrP8AT2igsoPXwdpMvvYcpxt0IPYyJfqLgIgYf5rC5Q%2FyfzX7grxYv6i3WQuSLbulC%2BhSvAnZ08lMHMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN0iw5kkBFWF8tzsDyrcA770XAbd%2B6gFy9La3qj7ZCDDORAFKqcGBeRDTaN32sabwTrdPmAmu0mPiiHdp7OeYWZM6NVHYEQAj4ux10KYHO8Rtc0bp2%2BKIcqa527d5fdZZnjvjjTySiot43ss2Y00PiCBUqJTGQT12CscZ%2BNX%2FR9pCr%2B1vjWTEqMz17ZWJsWX5QnHELSPkNWwL2tgIsx28SrpgoF5xTDO1%2Bj%2BaKFGAEKdqSk6HrrTG2Vvjo4K25vvc%2Bq4JR%2FooIUlL25hX6djt9o%2BbbD21FuBbsIS6f5iOBqJ2CEhKB8ymWdSgznHzxCbHfXrVKvNs0voYT%2BXgyRplpM6qLwgML8PjMq5Q35U6s4LbYAtDmHdghQanbUnL9rciBgdrqV1n8fHjfkwuDMhEOuycRXoOH%2Fi9z6Yjtr8ZUvdi6SSXb8vMl0Uj6G67WldFkpW%2ByRfnVsL2fWI8Y%2Bnwif2RXhpREgBYPOu%2FP09q2dVzqKgGHupRjn6bi1rrDSHMMqgTNad4j98ZYM%2BIXWKkStmmWC6a6bK0%2FeWFssN3PrqzHR1yHU3S8hCiYIK0gXaZ6Y0GZ3tQJg4IQUEqNAmZmynmYd750J5CrOJNcHiAp4ngHm2btPcJY8rGwjXnDBGcnCwVMk7JD3X4n89MOnC99EGOqUBqOyqeSllacTf%2FKQFSsxXTTL3yLz%2F9%2BzIZeeNL06JAquKNqaYM84JbNIuzyDRHrBTnIFJgT%2B1%2BKMrebt8aGbv9GEmi%2BgyQ%2BmMn96LJHU4tr0S3VWYsK%2FQ9KXqeDnZ7Bo66y62B7uBg9ErJXejV4VFIhc7rMymVPoz8ZZRnpRoQ741gIeQ0J%2BWeAGLTNeqegGpqz7enderctRB0r3i9AD0rs3ptP2Q&X-Amz-Signature=a5bb8252e34f140045390f4b64e4c004205122b2099e58d90d3ecae19ec72e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

