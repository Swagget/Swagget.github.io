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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLQQKJZ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T123009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD%2FbBP0wpTQw%2B%2Ff3b7zDfGppWVDTkPzZogg0k4CzgNPngIgDpufK%2B9AhFd5qV27Aj9pv%2BJxB2Ul3pFJg1FiqBATZuUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCt4%2FX6z0uLI4TU8KircAyZPSTtJZikhdsEadLIw6vDzT36aIKV9bp9EURvjQ2HDhdCMqpX4Q3W80E194EWSXcfX93JDAKHfGUK%2B0f%2BSUChPZ%2BoPEB22F4hxy5BqvAz7xN1l3c1zlO4oUkMsH2R1wgf6jpCxpjk%2Bd0FP9QUXtFFOOPqks9pqkYPoLIJU1vPmImShSQC9GfEyWYO8afQ8mss6jNvFJ1rth7cmXI8eZ1e2mK8QpszzS%2BYedvflSeEfepr3fbWHvZ0EWNz2yRb4DlI2pT8ib2Gfbx%2B2HcJEG9XoVl1T1ZqUaPq2xHcma4aIGeA7DENyAsuAPrq2sGen9%2BO6ttQTcrrDW9YpWHKHnJVOjgryanKSDlOdEk11eWehb2t17JY6ZPDOpa6CZN6xCG13OkBbzvSYrSerdKWPbW73AErdDebWgJ%2Fxuc6F2vs1Kko%2Bsg4bjZm2ku4lw32259WHHeZpghAEIFVuHYtb4XMZ4OcHke0uGWSnPDH%2FRSE5AD%2FuaRqvBLOPRl6%2F4lGTpFiV%2BThstMPI8coUHUxMiwET%2FQ8GB5kap2nw3vOpBePyRzct1yy%2BHbURaHztJOX%2FEmuLuS0KaEuR4jZyL%2BEXrD3Xf3USNtbemVohb8sKWqeXPsWCZgDrcZ%2BIE78EMJ63zNMGOqUBmuKWjgoLGT6FfML6ZOwTuUJMla2TvrNhrx78gzDZQ8dtXXgGu16NRPv0uKZlIQX7vFbjNp4aiA%2BUsZlIDQKCmD1ttqkoMtS2LsAv1thFZlL%2FENgEELzArOwoqhr%2BqkR1vJnCMaXX1cTfhhbpK6%2BS31T4ifEdaDZxW8DMGnnfqSjaa4oQaYyapbHPmU%2F7dOXXDdLbwltlec4E1H%2BSMFbXljY%2BXl7Z&X-Amz-Signature=f32cccaf1e6f63a756116ad8d92fee98af7a3bec5ff60eb2ec591de233f812e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

