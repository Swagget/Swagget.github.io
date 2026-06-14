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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IJLBPYK%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T071246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIB6%2BwtBiDstfqYTIWSZ0gM4gJF0%2ByF5bF1qGc09prG7sAiEA53vMar8TJuaE3Ki%2Fc3Ka2j4ED86bl7tgzQ8XYBqjAWsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDH9E5P5nbLSERJv%2B0ircA2JfrCIRxnyzXO7ITBbqJKbOEn8IIEzyJ%2B46NTaRmCcw47s%2BiXT2%2FYJeX6K0GeDLv%2F2okViT4YWfC4hs2gqoe1fiuLt2OuoIGvCLWsTJhaM%2FHpgqsCSon13IoysgxNZXY3yZEk1On4YsyQ1Id3MO1qyy%2Bbo%2FQSJOiZNXVN%2BpxJ%2Frdp7d2egH%2BDMvyfRfsawUgTlCwZ9jWv8dafweLNwlqHdTSk2mOev8nfElW%2BIAXJvRaygaKQvEMY3W3lvDtimZ2cJl2nEPLvgVwtlvcDIVtvulS0PuvXcMH4%2FYHSRYbtYiZ0oZif8Eci0u43%2F0mA6T9VBE8Oif12n37wKbnWoqPEYNwbVhzpBXJJ94JukJ39eRneGCPSynypiwTOnU8ZeDSm03%2BJWYpwjxwQ2B6eZVq0ncK7%2FYai7fL5UnqgobYznk6mq%2FbKyqRjpwj2mLtsEUJWQnUrmlLVQREaxnxchsjmWdEIi5NuCnw3B7pND6U2%2BOTarA6GVqfxrFK6QKtQEctzKk0cIajTxiCWns82h3pHgphlEiDhHLJGz1UwpVqS%2FBpCLozB6EyhCDpqhWy7JkSSBLU4B0EvrynOIz0TZyXrYdWZnxnvtUwIooBDixZNm1uvDHqVCP63SdRM8QMJScudEGOqUB0Di9e%2FlcAafl421ZbsOxQDTk09bS2RlPf9VGLjmRFl6CEOqQETp2mtGHdkYbUiYgf3ZNbVckcHItDZrBajk52kZ4nqZsz1iuiuwhhI32ew0vhglxObsFS9CE5bvfdCceW3tL%2FDVfauZBe8Lvfx6Rq0UkUWFrRfy6Z8IC3Xq5JjO2TRJuna1kPY%2BQzrBLr5Y4GYn8JcH6mtc9OZjURWRt2boPyk0I&X-Amz-Signature=4b13c8da9ecc2c64deba4eba51e29abd06a50240d299079f82c21858f9c19b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

