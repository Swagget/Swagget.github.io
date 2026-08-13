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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VIRTHL%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T123921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIA5SgPfGcqZboUHg12afmWmLmtzoalpqlTRORfO%2BB142AiEA5hdhQGVgC0gs5K58hxOTcy9SZbD6Rf1blgO6yxnezqoqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWGkzjWystA6h3zgCrcA8xPP6c64cN5kXjJbqV5BB7jD2%2BP201wTdfou%2Bg48jsnehXUprPHd3yz1umtQ%2F%2FSZxb2OHz3qNNcxqiqbtdHFxWDrgOW%2BfE%2BQVpq8QAohNzjuq5pakM4NeNdB%2FPpqYDSf1Lhzrkq46qaeQKAkWbrgkmJU0%2BSmNdqW7yqMFa1vuVDrJp4Vi7oFEUXFAS%2F4nrvmTHL%2BwMiNXviSIBGYQO3F7%2F6CQxosKQv%2FyHxQ%2Bk%2B9nIMNSaBFDZoiR6dhT8jtnG12vGGHzRFtkPszgOrpGqWgAokZaPQZvX7spNkB0FO2o3t3oDAi%2F5%2BQw95uzV5FHfa%2Bt2gkaBjMYUvzZ1m8ctzlxSK32Wwz3027Qp22ADytbpTPSErB7qfh3o8Hyfgf5tLsGpb9dA3t5OjWjX1pxePQYAJG5NPxHzaqp7Cu12mgxCsHCN3k7zUw2nuBYgoZYp6VNs2EurH12B%2FLFKpb78Wdu%2Fg6Yxu1Q08P2mTlN17MilExAy9agaHPk41jnLZdhI1RAyE4T0krrrMF41TmEjXn4QgeGdJAFsHUJ1SzCxNChZyMG65S%2BuvyYKEZnHepjzACugc6lDlCDeYuDd%2BZNAkJfKFF2bZRullIzAEQ1AsZpX8x6LnVNjfPQB%2FZIS9MKPZ9tMGOqUBT5Nf%2FI1O2Zm1kWWD5wgsYVTVpmmjruKL6FmYk0dM7%2F80HfN0C9JKSe5jYS8iZxFefZHwalS2ioe0CL93oZaROSejS%2BRqjqBTma%2BwF1VuJy%2BrWSq1Mab1blOSnUTcoIKGoN%2FVP%2FWcSGCfedncdE27QzYpk4i7ZZguIv0erl1Gc4oc1MWvjbXVK%2BIb2NQbLa8Yaw4b%2BzMYyVL0ZUJB0QrxxPx8DGkd&X-Amz-Signature=2fe3878b799ded9c4b72d5f0a9ede2c9de57822cc6506fa5541c6a44bd9439d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

