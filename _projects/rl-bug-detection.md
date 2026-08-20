---
title: "Reinforcement learning research paper"
collection: projects
category: research
permalink: /projects/rl-bug-detection
excerpt: "Wanted to test whether an algorithm such as DQN which was able to play atari games. Could also detect when the game being played had bugs."
date: 2022-01-01
techstack: "Reinforcement Learning, Deep Learning, Fun!"
source: notion
---

Wanted to test whether an algorithm such as DQN which was able to play atari games. Could also detect when the game being played had bugs.


The idea was that reinforcement learning could also be used to understand game environments and detect when they were behaving erratically.


For this I tracked the gradients of the last layer of the neural network and observed them when bugs were thrown into the system.


It was observed that when a bug was in the system the gradients shot up massively, and this could be used to help with video game testing by flagging situations where bugs are detectable.


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676VZDS7K%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T122012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEachUdswGaTTn0vKY6hsk5C3Y8RCEB1UyNCG3fkZQhmAiEAlntZ9ChiAmDW9mBMlTte9iYVMKnTQfA4tbF0BwHlUHcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrsgFvt9TomA0RRdSrcA2v4m1bXa%2F582lmjeXFA7HCgLk4ckeSDjYPFFcepZMLJxq6S%2Fq1ia6eMZOKF6tD56GTKh3sJdr0Qxbnd8mweWxVt6or7QVr10A87D5aDrj%2B%2FYy%2Ffmn5hTKg7jYXnv7enlAVQS29RHqbQM%2BUGYYfoeBySr49U8AMbu2JsFUp0pBfw88BU5DPI2RwPbYnrxSShajF8ZjAZuOd9zigBCLlDLwhGdXhRZUj7kEMYoQGJm%2Bd1T1erq9cKdB78378gk1glRikfsUn82xAK38HNP9%2B5wjKFG2kU%2BrqTMSQ8pN2wJJYR%2BblQ%2BJvbkLOTKF3%2FHL9ltOuHDVi3klRIOmgxx4CaTK7AUNE3g%2FBNVLSYLq9mKQTrcPo49ghhuW5hJKwuyoDCV5kR%2BWEHGsqMkRr2OiRbjMS%2FjH5zaPcqJdBYyk0vvncdivpvlE3CIDmXEUznFxJPfSyXVl9lGPiozZfE9z18KiZknKFD4A8LEzApktjiTuOTBNnVa8tSiKR6rnOnrI4t4l6a8XeTl8zGfe3xdQ40xgOGukM%2B%2BmosESm3%2BBtGcwn%2FcHj%2FbHO1iRZXCU1gDeZU79k6oORUuBBwxdnR%2B3jIh9z%2BhlBmbVZf2BHgEJ9WnxUDfkerT4tvnsjPRxfqMMmum9QGOqUBocL7Fn4YbQTMx%2FCaalYyzGS9pB7mAL6kiPBvLcAx1mPFhp8yZi1ZRRkASw80VxVf8xw%2Bk6K76DGSlm8ID3MevJc4VmBXUa34ZGawAFxRqGlwevaFMkTfw594rrjZmxkZVmxzkKPH3DcTvVtuBp7Oc%2B%2BRsrIALr1tA6ZDIkEPbYocF0P85gB4RdLm4xS43rHuaQeDsvzCj0GCDBqytA%2BME2lNY5%2FB&X-Amz-Signature=1a35131289714c32c22b92e38e71302460d1eae5d79b85160a454e812d985690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

