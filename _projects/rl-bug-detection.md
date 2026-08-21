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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJRGQLY%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T142142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0hej3tQlyyE8rR79hbDZSja0uspyuDHwxEV8lJxz3sAiEAimTE3y2lTSwnRiIx783DKAXm%2BUnwXl%2FHre9wdVviSvQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO259GsXXkJoNk2lSyrcA28HkowAI8cEeBuM%2B1HBZXyuVhi4GRXPMOr63RZzVhoSBLo%2Bz8L%2BV6i3RjkJ3wloUkucZO6h4sE0Alt%2FL0JR41NN43oxc68u9izog7x9kkat71KJ0cBxKLzdNEV4tm6G1Hk1DRmvCH9mMlfsaZqLXbREIkJWcGDR4k032ITlHycmh3Kz%2B2P91AUCdpKAsWVJhNZnhtLA74dDg1jKTcFaTaFM8beVbj8UPWZQNGzqRAlYr55DdsJsoOKcULqZha14ELNTNDdW4%2B3m5%2Bplk5Wt56%2BSFtq9SixTd9GA5%2BIL%2B4NtFezbG00xPEkehUDDlblkc0iZn3bCh4JptE2sgrq9y7Kz25CXTW9qV43lvZKGlLg7i0FNBQ%2Ft4sVPMbLG45Le1I8d8qeblUtcFbd6Ffj%2F6WlxpS7gCO42nbuqB2aL%2FPLkJoQtvcof0wrDIahrgKhXJFmxIXgNXnf1jKG3M0tXba3PJLYJzTpc8ATAiM7XxTGoJU6z5E5R0pFsgVcYNH2g3TIMO18IJ43TNNvPjXHsQtY%2FoeV0ocqrEYLpbXH3%2FblQFEIra%2BL4VvVhCyNRbIQ3VhhGin0zThNWyyXKkaJQ2PHytOwE%2BT1OK2hroED4oWTNQXgt8c9mQquOhzHXMJOKodQGOqUBI%2Fr%2BKIpZKoKvQ3MMDzH6i3zy6sOHEhmeYVpfuuYouA66mrUpV7X7o%2FAJsEr%2BZ6nOJNhcIpzcoK0dX4IGpjy13DFIN9B9FYEDpX%2Bqoc4nnZycjkk8p8OPPdlwQkk63t2bXVBAjRS4BCoYnTp8jlsRfY430PytVSzqchhwGjhcTxWIptb7ogiw7CAq%2FEVTOe83me%2FwR6y%2F7dAyT7qpN1wBFHr56R3K&X-Amz-Signature=1c9ece0d3ac930e92a7d64ffc4d6b6776594d3d855016abf94bae62c8a49d6c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

