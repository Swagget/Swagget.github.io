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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2RLTEHS%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T061859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDG7gh10N%2F5vUQQHjVWPJ%2FtcMUt3F18P4CCgYDlIJw%2FzwIhAIO9yoHQCrXyqghlOoGKBHqjTfL3DKOGYfNtl7laSVnDKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM8mqQ0fXUtegyvYgq3AN%2F4JrL2hcfs0TbM%2Bg1c3DLOd8Rrs5uF5%2FsQy0379sM%2BXR%2FibneSml7r3lLga9Wxt4HxxNEbRq0z0LKQkU%2BRGZwKrbHGHkhzCMwCS60td5maduRe3IpCW9G8NeLUal5DoxjbhsAeD5V8lwfETG0VxeHj47xh%2FwMAXuH697HdDiyfwJLHA4n1pQPJ52VYnSC5wOZXKAA4y7TPvxbtZTUCPZnsQHGIGKBJO5j8wsRDmZuQBOdKLvH1IeDBVmud6%2F0ux%2FGI1DxJGtNEYvX1WwcN%2BKbI0u%2F%2Bq7u0BlLZQx0M0Ue0isZU4OQEmQF57CjeZD33Fcw90nwx%2Br%2BNhwyrCJHkSnHa8vwQm8Rlnqj9sPLtyaFSJ0LBBX1c2dEOt1bp%2Fh9zgJUvCmMFwkVk3Ztf4BbyE2bkFc%2BptTfpKMIiCaB31uhXqduBgTsyAO6dqnQcc8kO0rcVe%2BlULOOPLSCYNLBJNyas4izEqgQ2SgMY6sQ8rbW7OU41tgGbqAXLW%2B2mz9HovbVI0MarDdkDjlmJ4tMrdsafQKXXW5wZQcNTxsoiOcgk986dPRPO11vjO5rV1qdwMjgq1qyWSRL5sCj7N7WAqRt3U0kUnkV%2B8w9sWZ5T82ZJB0KXuqFtr%2BZoI%2FYvzD4tKnUBjqkAXTNrfnEANT6EDh1s7Vjn1%2BXfRzwmMflZBWc%2FR6D2GujXEQwdHnxiDpnkZj5PlmFHIAixqiQts8OqMDheTKslTsI3VC2jwhY%2Fy4AMDmrG6RqD5nR06q%2BweWBs8OhgVxBgs3%2B9YHTaeAIaTZkgib4EzuOWr%2FkjclxR60aVy3LXNcIfOdXLDmqNyU25kn11TyeJwS1qDg7iFLxWuOLiw75IIgiY1xb&X-Amz-Signature=6d90617933bd6ebcf3e2e596ddb1e7032599bd99d13b5b61d54e52664468515f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

