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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV45VHQN%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T142948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCO4ns%2FBm0rcpExtaTuo3OFpt%2FWzabyLW8igUWOdmMIuAIgKXyl0DLI649d8cDp13U35%2B5%2BKaEqgA4umaxAQk4DMSoqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIxheH3KbZWVZxd0yrcAzB3i96ulxvp1nl1upR2Ibzbr62WsE2plS%2BjVoAZYZAonu%2B0Ail88TfT8jelfkGBYrQKIZV0VV7b2M7zF63KdD1cBC7pf%2F2GrSWGd%2FPcrYPzYKaD%2FUDQiXUhP6lkvkvqQk%2FjGUxB7Mm3qZo3v%2BuspClDMlQ7mQAV1t1sj8iEtQCzn4zgBVeapoxv6uCN2XI0pcs90rLT0Or5VqqGOxqYp6uZZr%2FJDxJDW5vFAeRnB%2BtpMh7r7Y%2BNBhGohP3I66QNiTywkkCmwNfxEa3fzwWSK39k3qI63zNBNRHswH81VIX0QjrzKFkqLX0WN8rH6xt0gvBXmeJN6ej1%2FsXqLdRoj0E%2Bg6a3t%2FSpbPn6%2BrOIgMweWcjvhwQMV2v6RqQxPc%2F1ILjkQglVE7ZMJ6cGmCMkR%2FPSGlkBjUIoN17a%2B7jNr6ZLvkRxTREul5eBVj5ns%2B2uRQHK%2FlBya8eTV9WN%2FKCauNDyMLMlQStkIq8vd6SSneuB7oA%2BvqWvVJdzyCwQPm4ttsrpNdu50sYqOWDrkrRyG8qbOJlgLlPh1LR6DVdyRRmmgHrD%2BZ6c97OzHT5wEcc9pFUlZtqgKcJSZ2w0wCChMbVj6QoZV3bZ6xVHgoh32vAYesd49i%2B8CvE6MXijMO6jsdQGOqUBhcnXMfFfCdmJ1Fe1HoCExtq0Q3KGy0X09MaNF9naZ1HZ6MJKSkzKS1imtRBRCW8dtZOGaJNiWZg5neCwAyviAb8PdoWoiOCnvcKvbK3dXYAL3HTKZOWDbZIphmEeAOmU2I6E4nA51IaW75rkmJNUWGTsZwgNYHwNBgchbl1ng1ldODGeXYR7%2Bt4BMFIhIOxshMecgO1gN2vBy5dgzwJa6Fc%2Fv%2FEU&X-Amz-Signature=8d6350a7537047f080e5e5efb6dc3825090f1ff7c6c98a9d0e744693a258982c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

