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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667672W2PS%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7TyCvhl4GHgU94R2Zxl%2BPWMrMzaygPF8OJ%2B%2B%2F8e1BQAIgOdCxVjP4%2FGWhl5K2Em%2F2fvR9%2FMfwz38%2BoRrPF%2BQcBA0qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKGwj%2FF976UsjdlWyrcA%2BNhtt5%2BcyunptDV367nMJxudwRJtA3tnE2KJtlhjPPNj3FWk64K5YG1no7M48G0C7zPHND8Cu4CKU6I3k9kChUC689m89hqfZ6dKrjMP7kbrBO2eSH3rpzvwXusNR%2F86esLpLZnOkmm005Y9jry7DFPjwzQcy6Vm3%2Bwyljtrh9gV4X%2FyHXnwTKZkfdUYiGDOpRjhZkeDNb3Km0JePIxUVQ%2B96Y%2FCKq2pBJwfLQa2qknmejqVq3a1Xe8Jsi%2FOJMiGUWVUhjC1Ra2XLkM6BnI4oKk9dNtf%2B5TT%2B1QNK4%2FRDIcmnWOyGMYx0A1qKotCnOxsiHW2vvxIFXQGVLScBUpS05vjTSVcjktBMZuw7qF1iC5as4YN4%2B9YR3CHXyEUP8j2dBqfoG1LvkHMe1NvrsaD%2FCVzeV0YU9QwBnLL1hseNsXYQQAAysgveIH7kJW5sDM43MZlXRV%2FVCkMw6N8O2QJMkDgXSNffRhwsOz7W4YMNGyPWQiNtmrt3RL6a9EOXTavjKu9sbd9LzRwqUua7ya6wMLOv3YHOv4vNc%2BD2sK8shw6gmsX0VHd2E3wJSwQhT2hWFVzMjXo1vRfLodAuVU6gmzSyaSN%2Farb1TjCaM8dcUpfdI8MTrs04RNFUZwMJGdhdIGOqUBja1XuFcnnLqUcP%2B2YTGbN1eQL1tH9Bb9fWIqE8KGuTl7OSjhZTNoOJzb6bWsXwHQzlhKYWPjOVMhpS3ZQ0BIg7u38q5dTdCMX88n5aTj7fdngfm%2BvxPNLs3KpLzZnqHCS1%2B5Av33YypowhdiHQSg1%2Fnws7PoZhz5qwdc9%2BjFJfmFBVAFe7s64o%2FwHD6vucJCIwT0kgNT7twYQRcNAoQdWmdilRq6&X-Amz-Signature=5410adbbdbf829fe2518c08d18513ff71cfae70f71a75052826fddfe2641da32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

