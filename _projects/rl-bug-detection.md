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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2ZISXSG%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T110958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAC2RGv9xJ5GbaihE2kUzP8xAc36ocWbJIQqABgDlEhvAiEAxlScEKubqDXfT8kOrk%2BV5xCne2u88121TH%2FPTwoZzRkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDOeOulByVm7nZKmircA7y1NqIVsSDtBSWRyBBzrDCxVOvCX480wQq%2F2JgMVv9I%2FHEI3EZ6Wmzp1MKdoIIlUygS8Bhk6iIO7x7t3uKVm1u4PxLdag3caualEPbOzJY4EzeSfbDjy9Jf%2BeDQTIUOzOYMsUNAHiHUL%2BTgMSw0Io7w8ig4Ex0vV%2F5SJ9yxSZWQDg0MGi5sk53q1q8NB8Fw6OUKHpWrgk%2BymHk1meCK0C5W18f29j0AfpHI56BuSuGEb2wfto0A0w1mlRMdnlh7oueuM3BLSCLWeO2Qp6ySXmwsQT4U44x1kuf%2BtmYjnELGvQTRSwAejO5bmt6UzbKuSeI6EWAC1CCLaHVvMfVOCRovpmwUiarSuk0fTTJU8uioGabqncG%2FRWCpXURU%2Bm70ZT5Kpn%2FbyEd5Csq13f0ywc6j%2B159eKpItK7XY6wC6am9yHYsutGq6G48WYLPojBFO6zWn7qZtNUBRy2%2BaI2wcU3DCD4YRqRqcLygNu4Wo6y%2Fy2E50YVjEyrpqEKPEBU02m1eA%2B6T%2BVigL3KRZx%2BWmjMpvALhGQIbfU%2FWOGF%2FiWsaT41BUAUbsmF%2B891FS%2FP5EbIlGq%2BSZLHGLennOYMdwV3Ytw2NrkHlXWxQbYrFLRqBoO5vJOhQ2tdu0ylZMPTYqtQGOqUBPVhR3g%2FdfyHhyGiOdoqHnz%2BR6CfnPUYpCDFSwZVi%2B6%2FeqzOHqFXi2S3aHlf9b6s%2BfzrYU5sCAto4hhjoA9lBm7JWKEie%2BkDSJIo48lGZXRb%2BplmuF4eEBWoEYF3gMVI56pjKS%2B6aww4UDpX%2BQ%2Bbkz0S%2BsV4XB3UEjlYHpWq67CXnIdOuBeWnDQPfKWG37Uj9Ki9x8RxbIVutkmDsHN8BUm4zrUhp&X-Amz-Signature=3cb370a3fdf8c0d7f57d1481b56ee0f23418cb0d615d7d2953266309ada0e070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

