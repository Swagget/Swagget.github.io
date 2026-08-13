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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TESIZ7MI%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T184341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCeuk6PO29pxGAIrV%2FpgBQOu3c1zZm2PhTH02Bn6OZMSwIhAOZRj%2BbkY5oMY3GHi1nYhlh%2BiE26nT%2BDwrUDgE335KpqKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BQiQ5k5pI5t4ea6Eq3AN3P85CfeX8p6kWjyu%2B7UwK2o14BwjMkEjqHbxXesKzNwEwJLEk3caV5GlWW7565T%2BSml1sSDnes%2FPCebVghVwR%2Bo3zGpdyXp%2BfNge2HXXT9sxMq1Lu%2BgQlZVg4%2BfUDtW8MOgxEdCrqPI0m2sShwT%2FMr3x4jmVKaL7nqzebK%2BdNZOUqn1YlLDyrrz2vGUqDy%2FDdWBEt0p1ARef%2BgNxqnzRGp8ejY02A02cYMMdCLfD9aDioWVVKO8KbpaFHiGd7KDnvwn5xvgw2t2x%2BQbf0ig84se1L5pH7mUdWfkgkwKqbQe35%2FIQE91hJYZNKCv%2FWg6AjOiCaNILQ2e1%2BWlRJnO9XIR7k%2FNrMeXC8t2fNKbanpuQYQEcFhf7ESZMibl2vh4CD9T5l6pKLdkUqHo13f3Loz6L6%2B%2BJ%2BDTP0yGUNUEBmOaje5c%2F8KLpb1GgBedMzPTxlCdCqBPPcc80p8KyJmkGzFjYfTWKUh7YsEP6nRs8Uh%2FsLJHiJwGmIvR2UuoR2pBiJ9D8vbtzTmusZNsNKYXg%2F%2BWzRW8gyKIk5ZY%2ByqzEc8DzvGHWFOcOFbCc9jGVkkro%2BmperyBUSEExFlz%2FwNJMzrb2SCfLetFroFHpX%2BsZNzX9F1ChYmRD9ioqXVTCY1%2FfTBjqkARvgTNO1xB3CHDYzCT81oXeAFHBzHd6LKK3GEHauddadQiv5r03k%2Bva3Jk6taTNFE3lCWuJSg7kFYOXlVUzMzIF9dRaJ8gBdKuv8hpCjecfbjj%2BE%2F0t2K1uUugl82r3h7rGOCdVCHd2AqoNhSxes7jPasFVK6CMHSCZDjMW9LiYU2Jk6tU6DoULKBi1UWlMk%2Bvnz918ZHeaRjq6a5bGnQxQfeh2G&X-Amz-Signature=557b4c1753081adb5bbfe25c6107e3fbcaa0dcdce1affcd9586610acde907061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

