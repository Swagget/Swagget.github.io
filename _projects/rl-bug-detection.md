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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMU5TSSR%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T072937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIDzzS5xOtVRqQ%2BVhk0LEdOxJWwbkJKGIrxv4ZnBhJzyoAiAA%2BLavVdPTpM82rlHG%2Bgi8FT%2Fylh0YFuno7w4N7GU3Bir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMYRK6jG%2BKQJiyzBNJKtwDPC5vQ%2F9HoXzo0rh6HOlyZJ6p4LRxgHtRW7SthzTS5Ms5hiCsVd1X71%2B0wUrPolPW18bFHGfkDgDC1lpOCAwbS%2FQzUVzJSgztSHOhqABfIItBgBTV7IO8vgPNCbS80m4JrjcMRXtjW0BmGt5tLlF1jtDrW3h7C3WvTG9gtLS8%2BBdtL5mlbTeDWATXGXf27DPm0Ikmo8cgJnLLzbkCzRz3L6DYCj2njOzKXz557ne3n%2FfJi7jJQkO5vWjhHxz%2F3Hrwm0gRFRaRLOM2l0AkzydZVWNFBfMjK3dFqZXAL8YfmNM25CWvj5ECkzaqA8EfZ7vX5gTYC1i8%2FiKB7dPVDxNPlVMXvTt4gZ3VWs%2FJ%2BnAj0L72K%2BC8NeFHXUXaaCAtrCN%2BWVy4VVVgZhN%2FhLBxux9mrLV0Ua2rMDnfTeFisg%2FLS8dAZVXLQti%2FfI9LheY14UjZn0KasgcZ4T6%2BxR9tr%2BQhq8esJkpTFO%2B76Udp1r%2FIprRGpwrFZLC8QEBcv2wv3JQTqYN6uG2TV0M4LyhMy567ynlb7I%2BqDMTeyC1ojdPHSM8C4LlkSbi1RnmVdMmojsRI76uGEckkIa5wEcPli7IJ6Kd9Y8VdHRag9DWXI1Cr6AKewSd3dzAui9dZd84w76nL0wY6pgGeb9%2F5bDaMnGP6ao%2B2%2FK30nTROQfbgu6Wfwksef5AJu4uMJQuTvDplSACNLVE7bTsFk6i8oUQXB%2F8KKrP00ZhcJabF%2FzbpMciumS%2FLQ5B%2FYrZ8tHOuieCnCHpfyag4iyHRXSe7LXouAK31H379FnG6om02PWc5jKOxVHu%2FSfiGRZt00xpWBzAFLO4Hia8YfswS%2BIQTPQ4IuEIZNLOQsyLHQNIAUEQA&X-Amz-Signature=284dc74c00d695185e9f41dc8114495ac9555f57636bdd2beb04e59be6336fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

