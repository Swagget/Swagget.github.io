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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OXYFU2J%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T053318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDsJR19AxpZfjkUWvo546r6FwOMbWS2tAThe7lZkJgIbwIhAK7%2BPCWdkcKuZVZhVsf40jd2JXzGswY30B%2BgdbkxbW88Kv8DCB4QABoMNjM3NDIzMTgzODA1Igw%2FVVTpQ5HzWAKUFzMq3AObinrgB%2BwZY8vRBPg3QnOHfiKEWPxPejELc4iuzOraCf0cSLRYdZqExHvtWXa83dHzREvISFDUuKJ8VXpxppamOrIxnpR1U1y1KvxJGFZmBvuhkVT3r9UueLvumcSglC1lDwi6iciq9yM32Am3ZUvUqSCo3127ZJHz9J29Z4cNeB672rcT8LlRDD3RqqT9%2Fg%2Ffbzb8MHENws4yIIj0E3PZqX%2B3X8T6oSPlxtx5%2FUkVnqh6cvP1hbOZlQzNM9oDfft9ru%2FbzftVdq7VAFf12zVngZMbXa486uySpnMza7TelCu4vUcmxenAt2oING%2BrgoZrCY%2B9zrNXm72hXjPlUlYiZKxp1HNRfoO%2BzxyyxtwUWn7Doie9ZrU9GElbGKbMpFu83jtp3%2F1ZlN78HgdufuZYF4mjD9HShJ5svsd1ajYTZmk3BmV%2FKL%2BPNjyFkKWTLqrOalXFQD6JRYALP%2F%2Br%2BN1Vw3W95wHx%2F2GqBOqwNUkT9kLxFIEvWBXIERFP9JNqVx5HNwYZYPUb4jGiKNYSI2LNk4jLgs5jQ5qiwSE0QBLDJJtJFlme3%2F4vrKiP8qYGoLRcRU8Gq0dMfCwTUTG8vAazAHs3OoRDmJ12uWlAZPCTHk3S0SBx4bfUTcHnfTDAl6LSBjqkAQP0u1wO73c2VUTbrkwvpKf6ezvqDbNK79pbAffVvCOS8gW0OmJvDz%2BWcQ48NaHw0jzq7b%2FJCLoUcgZDNhYNGmy1627FFg1a%2Fv1mJ7WTuybtxKCEMuGNMV562UlNwnjUGQ01ExVPz7XDkS1pNEyMHBDREh13S%2B9h41W%2F9trfC1SZCukWf1qSOpOr%2Fy7Dc0vI8BqE3ggJ7YdI%2FhC6iZqST2mJlYUv&X-Amz-Signature=fdd9121f94cf2da7867d2aefea8b195d866b452b2d3566597132978900c5ff2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

