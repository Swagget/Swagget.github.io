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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQ4PY7D%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T105837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCID4OhJPsSHbYxE5bNgM1p7kR1mIpM3zVM24%2B%2FzYV6LogAiEA9IZRtnW5sCXPTc%2F%2FmpUHKWlmGQ%2FamEVhKYzIlcB%2FvOEq%2FwMICxAAGgw2Mzc0MjMxODM4MDUiDJXJvIFzwVubyTPpuircA4TQtXI3XQpnTTZ0YHrhA9W5XV5PJnefr8DwIGwF1EQSGkkTbwNdMfn%2BQqOpFHHUG%2FeedAfAlhmc92RLUlc6448U8%2B1AQXId39rLk04zal0Re9HBQMV76ON38qy66SjyTPrFPsuWYeOSh4%2Fy4su%2BbsGEDLrd6KzjRIXTGdsWR%2FIWILe%2BWOAxM%2FwJgFWmrTfVcKtK61fcCux%2FDDOKLog3b%2Bf7QZNU17ioB3RzHzYpj2EOoYRNQBcHWELz68tlUL94NIRReZ9EKH5oeyClrYyOjgHewym4SMYVBAvJF4DyLmF4Wcxcu8Jas6GiOxoRJ3%2FJPAel18OdflfqvZws0J60CgW%2FCLPP9MnNn8yLX7TdouVwrhH3UVObMDUskxllH4YHe%2BTMCMBtjapQ2w1j8HPdo6eFfZ%2BZNxyZ3XzOqB511HIXnMUCNLhksw4h%2FRKv5CTQ%2BtkWvVbuKgANsy9BIqP4GmozhhOVXnr%2BP1lJcD8Cin3hlO9ZzEJSr8ufdEriatPMzqFGqCHt6M9%2BnDELKK3ZCfryZBupeA2yKyHqvOJe%2F1krkQzMDCJ8YnfZoT9WlGFXAqKJm9j6033wOEy4SYZBVLys8vYDHrAvXj1%2BRestbiytfdImVeaVSwaetNk2MJ7Y79QGOqUBQ4hEQ%2BTgaprd5UWGi3wpovi3sjDIUEJXZH%2F66keafXzmzdC214Mv07WVgmthVkmPHpYzdIXWomuhDUBdKK2ztUVKQ0c0L7GXYyI5JH3TBrl4nJLf94qwU8UN6VZftFYaEfQBYPb%2F%2BW%2BQ7%2B0HVGAFQeOz2uMNzgHcCy%2B7rG%2B5OsiyQ4tFdxxU3SbWZ2TPc0uE9lzm42IO90f8rn0qdsssdPoZ%2FaYJ&X-Amz-Signature=de17b44dc988a815b02c6e6a8692de8a2ec57723e7441be8226b3b112e2e05ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

