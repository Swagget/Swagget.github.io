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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVLKHVZV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T092258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDf%2FCQUzG6no6JcCurVCsNFpVrCLVcYoSQxwGCCYc9BpAiBfeTqahcS5U4nCL2RkWmC%2FE%2Fz5Pv%2B2V150x42T%2F4nrlyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Qlm%2BGAkrYJuiKunKtwDY8ngXYEc%2B%2BpOi94qqqg%2F1Fhg%2FJk9xW6cLjJM5DtrRNxwqpu%2FEGDnVJI8yFY2pvfud2pZPBsxsSB9uA%2Be1tfmoTP5vhIZvylbOyudvqgqBFJJ6o2zrt3axK8k%2FAAW476CoTLWXpXEUtiIf4saS8o4BXfvlZp7xIiQtsEJVs%2FNlsUHjsZplPpRtoLAY9eT%2F7rawG%2BuzxtK%2BrQS75V%2FyxL61cm4Vo2ouByszCUabJJQPumVG6dGIT1pAPkRXrSyTZtmlQ7M%2Fn2UzkToVzq83f%2BVH9doNl6TD6BRXU3XSUxY%2FvJ6%2FxEfl5WmuzqFKeCuFItQDWSw9AFk%2FDufAqvzdT1WkUVwlJ6BWUJHJzaJSMWOq6VuDzBg6XHNlcWYULhw8ACgGJ6z94QJLnd%2Bf5Al4UqXiqjTpPBBXG9wVfv76gobX3KgMDyGwGcLEKiPBiB70RrsHJmEo%2F3b%2Bf6V9NHzVf5ZJT8cHHtio%2BOpSPjQabEzbIDpAaglaKxkRCZjJsvPHuzI2VMD5Yi%2BPcPb6oKqD7q%2BeNiDWb2j0d7OCMUoay0eMQuRW7gGHFt7iz4q5Zkz4JZ%2FEYcmTkxqzgYpIDf80Ei0NjKgNQRVgB4m6Ly7USdMcBW5uQczTn%2Bx08%2B3zHswy5%2Bg1AY6pgFTse30xCQOsnEefmxjCU191atTuElb%2BFR67FxDqmmln9F4aq2FfVufHWg6GIpqCfsK0LJKiYfaYIGdNHAQBhz1z8MYRJfkX6beKKx14NpK5VhaNnxu67d7GJh%2BBmWu2%2BrftfhnjzR9672fth0oNW0g5PvO00somCY5N52RETY35a0Lo70A2aQSAGDm%2BGer%2ByrCgzQWQ3a8RgpH2JRR%2FaP1QYiNs6O4&X-Amz-Signature=80da097367cab586421fbc9c5c3693fa5d904d7a0f80af93614763a3bb100527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

