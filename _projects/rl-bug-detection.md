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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSW3RQ3%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T224230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDww253kJbQbVw7j%2BbqUNqXhuau3%2BQgg8NjuithQYwpEAIhAICdT5fnPj63329Bt8C560gsrsvU1pithITAru7xCzXLKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAOfyOPuzEK6Nj%2BY8q3ANhY1x4juVR043Jfd7AqKBR4MFiR59jHkecGdcrjDnS8GA3FnNgwx5d1HzhLLejenEotoH8yJkoZGlo%2Be8sJXSSav825GbqkyS%2F7tvu5NhDb1jLyPgKHeIpTymxsNXoxZiboKW2Iwa%2F%2FH6lU%2BgqzIlolEvE%2FFd08mVFJBDYhHvJK2mPkOB4bEegx3qyE7DjuKPQaItHtcJPrrYtgcbLEuS1PCv8wgOGeI9IWCs%2FWwaqxFvyKQA6Tno4ZYf127n9SdNN%2BmnaqWGBs3Dg4B0iclK67qoKeTja%2BPMqUKxOET2oyzHC0daVHnajq0k5l92O8aYA5DuwgwhKhJLX0OmBUO9UqxPig0b5h6wljhwPdWVK8tGQXAvIwDMl1LU3Z6af9fpofOXg2KsO0W7W%2BRoIeV1C3d3SE%2FwDCDnQDMvr6F8tvntb%2F30i4rMGhHSqIcpb4%2F1eikel0B5ifzCd87LM8lQre%2FSB0u12uPU4KMzxbw1EtA00PpG3wb6CHPUnYtjiy2FzIqNPisp%2FeVYZDd2kIfBw%2F6Oid8LntK0lYOJjf2Vcrkaf3pB1oMIHGYIDAX9XLTG4r97hTnWlHlU6KBC6gcf6O0avcn75aA7CX3MR3kjIgbSHzJqFuuCId0FL%2BTDBgb%2FTBjqkAVCDwELQ4i5pd6veBpzd6oogst1iu7FfzUdvY4Q7E4xitDbOP96T4GNap5VPafsFcNNhlWL6jxUK6bpq%2FOLaIqD5ZcTTzL3E1Qzxn4ckJUCBYS77yb7BAJcj7AfqopSNq%2B%2FGqlqGwEgLssvY9Z8EKEX0dFJT71LLnC6GHHUKK9%2FGWW9MV49WksMRLa%2BKj6hhzSz80GxCoRAK8CcsIXNRDVsUMdOF&X-Amz-Signature=bde4ccff6ef55ad76946a56d4baa4913b5d36f315fdaf7669f83338b99cc0902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

