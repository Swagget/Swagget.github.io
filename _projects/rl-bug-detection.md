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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWML664I%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T031803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFO76yzOPbQzkDxzeby%2FP11Zi6zq6%2BQjf%2B4LZjapdCwYAiEA6FDwfIh7gpJd9I%2B3crJst8TVWMIgpWAexGP46Idr3lcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGshAavvgDpifMe37ircA4i8%2BPWEorgRETo2t1WGZ4OJqbmx3NChchdzW91JBGyHNnc%2FBPHlqIz7tffI2VOJ0IhOC5LiaT1FZf0sOjqbBFYb9pU%2B4gPjUatqlCLJo34H0JnbYnBvaQgEM1yFpbKZ%2FMTTJGRu52hShb7hhnM98f9ERdWNtgYZwXrSIwGAHyKQBJfpLqNFc1uiaXVnhqNgkWUryrtSTgovdzxzGpvuI6sMgfGCT4gEHmR%2FY%2F%2BLx5WP9nb%2FVvFRqiLnC3fLskzfoOSy29trh0TIaepsEQQlccZQ1b%2F0jczTOOUOI3jm%2BPlX3P724dEEmCOoZ9pfYCSA988Rxt8zwlHUrCqqe4xnpRkh0gJr8lP2rn6nfvnpAuO57XOrVxQ4aDZMa2uW1NyxSrib1o7FfKNUdWI1Vq2wNcW57Lg9iPQcgPQV2gbGZ6UGkInZgI5DLRRCfUUwdcqqhA8NRDcFLdI2oZ04oCMuL8R8EQ2jW%2Ft3pkFhU3ouuXjJPHN6zHl%2FrNTfHfhjfrOQ8OKQq6Cg39J9cfLb9sdZIzHhjw%2FSr%2FwfUfxviZ%2B8Vu%2FmSxvgASLVc2Osb6GZPwDx2mEI4hcUnwDOYsxFfZAWcSFpMEBLyz3clseVSko8E3BNfKwGNlfvlT4vmHOTMLK1%2BdMGOqUBU33LVxoU8bRQX3DLzliOpj2CKPw9S2f6NEkQKi8MkwS97WJbn%2FOce6J5StMyK1C%2BZHkxEvdhQKuDNbLRVcqmqv2V4HQsxe%2FZY1Eg8ZooWQ32jVJIWCbnx7NtUDrPySoujsTfUQKZjPfKeVzp2JTHSYlaWEEcIOrktOZI9Ybj8M6%2BHT2C17M1ovyupYhb0LtegxJRM%2F5GzjYJ9Cu3jlA3LeJ1K36%2F&X-Amz-Signature=5e5f949e6ec4ae7b41197ee6f88dfbfcd13fbf87d47cf2f8dcde81d86943b749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

