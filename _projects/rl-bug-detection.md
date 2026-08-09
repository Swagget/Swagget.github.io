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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ3A4C4K%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T161849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrP6Uyi0HkVQL3WlwpOIQGCucixbstpo2BGnEuOwz0NAiEAviNMjdIOsp%2FL3d9d0PSdReCdDvtotDC72acyOiZtL68qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ637SkeNbfGO43pEircAwWQVu7a46e%2F4Y%2BwG0E0Cr0IAAiRjn7VHi0W2q4JxXxJjvWATJp33vohy7BNDtP6nZfkRs2GgwTOvqJAKCqO9g6qPyCdhVGLjVStsXl2JQh0KU%2FGa8c5P8mF9HZgo5rI6yGQPkMnejFiNNmKSWBPMuUcY95wvpKsN5VKWlTNvioTwT7WXeshEFuFyjzkSHQxQlwKdl2X3ez%2FWW6zv%2BsxZFtTVA34HLkwgCevPSolZC1ixketa26K%2FYEufQS4ZiElAuGPtGU110DoxS%2FJ9phqyHkK2uB9Dap3k4L5XPVOOt%2Be891fmgTsPGwdapsx8kOKIqzphokBnXJBwINjGGkv4ulo6MCQTu4pFH61RZ0W%2BBqnt8CUw2hyjjIHStkYTFkXc1IGZ2yPCYtTvugymhFqmUfQzq3Rw4yaVkjBTXwLBu%2FqfvjS30q1kyyAaJmjf6KM9xqLl02JtvlPmxrC7t40eG%2FYNsRyslfStneSyZGqMIiaXvTTJTZW02LuMIX814C5uo6%2BFzWcPmdciye4uYbqQwedKcBK3xSZigFVVVq%2FjgfSCsnDxMR09xW7jiBCcDi2Yc30R%2FIDXMRdUAmne5MxQy146CBr1hun%2BVRaCXmf1f75P2UIoZDPTHR9arjJMNLI4tMGOqUBndfFfWM2tRig42P7TjX%2BlANqRp5%2BOKuvEpUzPfIAjBvylXBq011kjVJxrgUrZNB0fouuhJTzsi%2F0dcKhTN%2BKhsFV%2FfGai577G9jlZZ%2FIpeflN7%2BPpaLqCEZf9V0OjMcL5qctw8KgcRaXhAlbaPmKVzU6vGR9qQjAHFKU3qtrKmNN44RVb6hdra0eFoIy77Hb%2FSu7dI2awy%2FaTsWfyDELewgK5YH%2F&X-Amz-Signature=e52c88885e844b0fb779bd05c753e1a94f6413754796ff2b05006a427691fc55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

