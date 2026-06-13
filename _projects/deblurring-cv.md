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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS3Y4NVC%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T051225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCEfSOeJLAxtPEUv%2FmpcJCfrhQC2mSr2B7BEDr4TTTYSQIgP3F4zAhcuJKI0AFA21ekg%2BhURFoYhR3LcwLSfiDD5Xwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHaOontrH9z6vfTThircA6iGme%2FX0T%2FypLxIhYvq9ND9i%2Btx%2BpSCkNozmXVBLoQxu5bU0TQQh1gXoDzGkNh21HoF6vboAjrlI2haImFz%2FmgDkvbkI15jZnmOnM3k1KzA34ghSjNUgpgjOhTc%2B7ekMEVMpqJZX0z763QxXBx07A5R3pDOYIEk1e7P0HVBL9jN1tzlmZ4gRtsSXM6C9kH7OmYMX0Q4lUhk2q3v9LJGB9RV0ah92MBR%2B4x2MPqucQaY5WYN44CWmkEPWfhPKD9pGUgAaCyGdbsOw6D5XIvo59aUdGMuHfke02vVwTgbct%2BsigsaxvOuEy5tCW%2Fb2EsM3ZVxu0C6jqKFLJgn1uWaPTyOUztwLhpJNDbPKXrh8adahUhspvNkv0v3g%2B9Ji0FouWWuC3DgRyJGt4tJ2MDIYRZWPfhr1xv1mMsJHYpTTE2bVqjLOV4lLXugMd3rb1R9YM8KH8O2CR6qSn5SP%2BFHC%2BmuHIv8SlAW8rRoUlGDLhEck9KEJiEqOyb5N8LstEMbQY%2FxBLVdXAc8xI9Y2w7LIP0qJ3H2BHbDJtUPCoi%2BhzcyNBjc6y93q%2BschLVyNV6DVd%2BBNSYTdAVl3T6MAzaAoEcYuuTywKZGuPv8ZTBZENUorrBGtviJ6gWkDa7MMJaNs9EGOqUBpy8dUP3OriHMHCbjFyaozSpir3814nWLg3nuvLYwijwQaJYr71ItWq6p0ScLZxAGgrhcYnkNjtiOHBDyLl1HtXhhhwmrDyx1Y5qP4qAsTucWLqmr7jrf%2B7BqJBucxcsSpiILd2qRC2PIsMp3B0YqIbZ6yHm8JB4n%2BlWVBAirfp3prysB%2FQjZMJZy4zWaUBWMj5kGVvLsu4g3fkP8TI1bDcyw9sWA&X-Amz-Signature=160cd0f13ddd168997ac4ff46f5a3f63f884d923115b1d015a2cb78ce30451a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

