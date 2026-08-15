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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUFFOL2L%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T140941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDco5PUdnZD6NKRjITXPmI3X6sBgLb0CgvMs1LwmHyx3gIgXiitXdD5C3ZKNDAoQ1C%2FnzJgMhLOdoAyjMNf1ALNEakq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDEhEwLal5%2BBuUsmVLCrcA9ifmlUqKBTy18EmvTp6wEiOMjovMs1RQ7vud8CM7OzKVSxfA35jo8skr1xCQOWX%2F3%2F94%2Bk0MlGYEMvWqPTlA8XLAvKub2tsnb0tzNUS9BbO7hr56UWeF0jQu2kFeklC4YfjQOtDp%2BcDKBaSrYNqttFWBlzDB903RZn%2BMVFf6pJJ2smDr9AKzr4%2BT0uCmmAQN9WCBqMvTO7LHToWF5h1qNBzlZXqaXWcALd0bMfacRosQLnTcFQJgy3gXiWNbvD9Rn2C8KgiHNP4kg%2FOJtceb%2BQM3XKA54O8n%2BAHrQq45F%2BeKXTVPJfLF4tA8JtlgRN57dhKmYX29wSyH3eWD1mRPj%2FV7%2BJl5qrYGHyvZTbhWFca3OT%2FDjfyEV%2FINsplUrkHNFbCuROnMZnUoG6Yj2aRLuAIxq%2B6T6105ccrN7WnVwTnaQXBpZM7T2sWy2Tjwl5Zkj12NZVRsx3v0nwDp8LxUJr3hmets0Jjzi7zF8CdjdSSpKKhAuVoXQy64y85BsYxd5gBqDWj4aUtzIrHUxOusOcaSIMU7qFYN5i94joZ0eBA9bfOCp1XUgl8j7L4zPt7uMXc7HK3Zfp4zv2I3g1%2FS96FOdC7n%2FjbBJKuJp4Tmd9h7pxyi7mp4ONMve89MJebgdQGOqUBNrORhM%2BU1qp6gKsVYBkaLXJuZZUHNM%2B8E5Ev1tta4%2B5WF4cpJLR76j8jRQzfZeD0sRJuj%2BBqmhx2tJ8YCco5OEXfLiPEPqM8EJeqwgXk8SfP00eUwftucExgHrDbTZOzZZ1d50v6206HOiV%2BKtKSOFKWyahN%2FXcpAU0QlQ6wP2xkCB4LyaPGVhLRHJcizl1DCcJGeOIpjfBaGWX1wCbvnrkWs96h&X-Amz-Signature=fa138347fec44883c9259f62413dce414a7c14c474cbe05b90bac34e2d2c4339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

