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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2DMCT62%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T130011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBNG2REBXf9tNG1HuaaDKcvHcRGHz48uylznkhN9oD4tAiBvAfvP03EfxYHz5wye3rBXcnOghn8D9NZjUHnsT1byGir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMfh90%2Fx75bBh9e9o0KtwDNmyIBAK3Xi769KGH%2F6%2B8rXwitl6ZXxQt0vEBjoaFsB9otKds8s7fobyffy0rkDmbILq%2BCRSkVtmGtIfqDp889qRAu3XS%2Bi2mNmh8kAiODX1tWAwd91JXeXQs9oKS1gg2Pv%2F%2FFBKVwmkQE9XP8mm43z7MvcDmxytgwFvQOQmrUO2o%2BUwCT0mB3XcTHuV62RLqp7tpG4moPJPLgB%2FfvRqxNOEflaCq%2FcERBXb78xlqUastTygJa0IYhROuMNbDR5TNjePeyI4rB8TTuDliy2F67FhtzaJyEb%2BzipbXw1KMetY8b9ZmTuWx5kUodQhfUzgil1avClA%2BUpvqmZYTkWxrALtEwiLxi9%2BRiUTlFhzjECMdoLJKSEGT1eb49zrBMmSVqA%2Bkaoml0Nc5GDmGG0eGTDO%2BL54QN2yrjx6Vjd%2B5vSXyeQWA94fNKMKgcQbGlwJQKm2rhf4HggixtSdYu3AV8YfQZxBRASCxtf381q4dwrOprlcFCGIuwBu3YC5czTNxEzVxOB8K5S51XjpeLmhRkLmK2Nj5Pn4XzvUIOVeY5uTpLbeTT2iHblK06Kw7nlqo%2FDGhPRTVZ7FLp9XHZtAUamKPLx1DdoaI%2BHJt2GOECG594oD9qj%2FOaLjO4zow8sjX0gY6pgHD3GsY%2B4zxDKX4VZ%2FXVmYXq%2Bm31Bp8nHlZLw4Y0trtmdHvdo9CBtxxhexKgpfx7eXlTjloSSMQHnOuOy1ZJPo7a5t7Qc7W%2FA5R9dol70kxd818%2FEwclRuP8ghsaNifXbIgYYehMr1EumDed1dbve3vcsKTmpFtpGnMKdgSUFCLTm8i3ljfwGNVzZwAyfZaLZRYgSRv16QuDIwBJ%2BhENzWbQ0RWzYjw&X-Amz-Signature=b23ee5ad810199f6485832b7fdc7333ec667a43bb9278c5d8dfb531444bdde19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

