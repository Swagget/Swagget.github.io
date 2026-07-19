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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSHFQBN%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T154327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwdf9FgS9opoyghg2x06riFVzQ5TNjnZqmkj18t0XE%2BwIgWFgUCgLeYOzKuOc9KFGvSHKj%2BFdhOfXm4uQlmrtlC20qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0dqmdmYS7sHu6JbircA9vglR92CeJQl0y%2Fyw%2B3pywf9crFH0uZ4OASAfMqs32W%2FGmRSKXSwUCI4UHN7LNX80rfHuKrG1t4cIxAZ%2B%2Fby4vRrkjVtvE8gpinMd0er2%2FGYAhYCWs9mo5T0ygP%2FIckEvKWmkhTmZ8YI1ACA1H31xGy5j5AlipkDT4UyEE3B%2BJRlivBK0H3vHolxO1IYqIM%2FgWAEW1JL1XA6EAgKAarYIOMW9rTcPAkiiyhYSTlkYCjb6t8DkGTIrq6ATbBKV9wXHY4ScKR9oGb33PZOAtWeccIJvUMwoi5U6SLls1zpQtbWmQqf4KowGpPCmIFo6IftQzgPjvaUeBI5iw2fuwQ%2BVWFEau3JG4gCgSrsEov95KVKESQl8iGH0o4QW3qNUG1DQxct2pTWQOq3dufvR64J3snUnCzNeVj0im2Ti9sV7iIlfeC2LeIJZZYu6R4lNl6wkLt%2BHHDSAuMbwmlLdRmC5QHUYQB%2FEB8HxekIGficiqoJ0v0uXsKHiIj8CHqcSwr%2By5I%2BLafWYzCp0bAUODCa3bAVRUEsTTAlmZqW%2FVbvlfxnb63lG7CIFGj%2Fj0nhQE3zSRskiu1UfnPTLxdG6kM4SlBmn5Fb7Pen89aeX3A9oz7eaiZEvJS9Bf%2BIIxUMLWi89IGOqUBQBaypIksrNH7hQWm8ePG7vvkD9bCS64Nbobzbt08po6Pyi2wW82QMIkvoY0POfXJmUAemX3ZgOvPbqixRfkqwEkBQIW5y5H1TvcmXPSlHYmlgRXhv828R0BIVnf5%2Bd5W5toN66pZXhLeXL1a6BqcsoWI0wqtqNqtG2vzUncZ1qjLGUJh5gldqLYAPj17EttA8yba03BM87CBmtWE%2FD3MTS%2BNM6L%2F&X-Amz-Signature=63df7c3660206c47032ca2f121c9cfecd7943f7bfaa6bf54805ce0fd8d62b1b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

