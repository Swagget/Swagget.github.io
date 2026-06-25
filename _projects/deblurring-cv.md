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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOUVK7YZ%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T221440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZEJwdEZPVfgibsttzumh5QqMggX1qvzT4IJGkisJVFAIhAN5f0txpdWF5AEJkH6jPnreSswHCJTU9HUkLlxb9uWWuKv8DCFYQABoMNjM3NDIzMTgzODA1IgxrZKflREUNLLN8R4Mq3AMk2JUQKFqPWpBkGu64vBuhny2SXsmeEyiXrc931FY6Rgc9buxENwIKKnNPsNhLOrAFBftag0nSZMHeWjtvxlPbOWYk626yYYtzQPBPbPnjvLEpxx6nMeI9HHX4vr0fxROoQ2hDn%2F9mjhx8X10esnyETLtGnbylUIPXp2OXUieBCdagB%2B06SZ3K2F28IXVHyw14pgxcHXH7WNFKp3%2FR%2B03WKBRIrcLEaTsRKYRjgwlQYxJR7vPBgIfCiKFB4KVBCshcNeNPwBlgHIaBsRPO0%2FkAI3hkHHc3KKoiWQiTQCnQI6EiknQiUQAMiIuu13JVltoPOrifT05x0n7dz9ydFeP9VCzVzmGLExV0Hlt6XlQkUDTrK%2B9f1SItYTNrAu5OJcvggKuVxRYrSjbh1CsuGCf9nnwFkcG4h6BZ0tcLX%2B15hDlFU2XWbUnPfX2JBbVOPt2hDfcn8asTyxs0v3TQcWL9gWqISf8fyOclW%2BPmQwAoB2v9p3cLFiTHS%2BiWSppKedOsti3XycBe9OIXdrqgJzguukRrPjqE0Yqs9v00E%2F1RAqoQjWY1JKT5WzyVi7Xtag7%2BzTAIKGSjNs6akjFvx3GG7Mfl00%2FuqmcIDKxg5Sf%2FNZXZUY%2B6Q0rj%2BPYFITC6uPbRBjqkAeZeEDq%2BZnFUGS%2BrXad2OudEpNSOdSXYWcKrzhLfU4QJhC3oTXy2RnUk3H7uHx0WH96GaadZXlbkSr%2FF1WNUl9tu8o4N%2FEMlf1L588ka8QFA4zhtvl4u2e92ySXJ0yKc4jU%2FWhCQFDPNtS6O8qhvQd2On%2Fg%2FtafImAcp4UFTzYwZFYILkgat7ZU65g4KzULseN%2FbUm82FpPE%2BKdUjTq0ffLiaPYp&X-Amz-Signature=4c4314043dc3b984b9d45d24290bd3dcfd3d7183c64106b60f8bbe97253955e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

