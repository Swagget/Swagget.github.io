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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEZZAWWF%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T042006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNdjQmIulISXhCMWqKgPrKQD1vhCUbLQIwFnNzrTC3%2BAIgE3AnC9u%2FJ8%2FCptnathP0KCUcht6rh5kGux7a27%2FD08kqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE52NSt11yYX%2BKHlmyrcA8e7RAxTWoweLNKyPCLQB%2Fy0zkJFWv3YG2aEZnUIkuL0av0Jlyl6wmrl%2Bx9LxBOMl4xqljHK3bwvfQKfdY1CL5jqnsdvCHJlW7VjoIakGOx3K8iwh7PRv6QQ1u8%2B%2FWthkc3S%2Fl4QWIFkgQRvc%2BeBK1kG5YF72dGEKgEtrlbZhppcJ%2BTJNgMVukqHb76qEZOeiiQJfmDInmL%2FjGduhd77RvpqmXunlofbOmza6LzRGinyd95Nnu8axMw242vnYGpjS9oiv75qjBJeyq7QziQATANiRUHNv%2Bs7I85hhBbS8ULlOdhKU9XifuRHcfgJwJtjt9L7ivFZbExk%2BN36bziXnYSPOd3uxoPuYDBdPWnl6zI69KCXjcpDW4GwqwVIvEhTg1KothpO51c2OnQTm%2BaovCodK5v7iWFPU6h5qMwzI2SkjeVMvad9JhcLPsDPVX8hO45nLwLOFtgoQ6GvI0EiN5T5MffFgnOZJwAs3YCLXo4IlIaCf%2FdslwyrdD2smV2BJGQaHOHE7HGWhn9rQR4A6AUOoPawuhtXpV9DZurHw%2Blhi%2F335M9kKhl981iSLaFYDDg%2FRcErXhz1CR2CcrFipCrNfNn8h%2BQSGBwU5LwFCPrYr0gCdwlDxCwdwPw2MLu%2FpNQGOqUBxVgHweL9O%2BpX2K8l5uw1eMEo1sGoNetOUopNw1zkXi2DUaoIBAAR1GkbqQ9ReIhro5To5nbqOWBbNVohzMGkttB3qkYBuFpyhyr10V%2FBHQwsJCGMsQaXDK4eUYcxZy7tqIE2%2Fkh4AvQWNGe2cfL632G8ZoWAOC%2FNj6xlWInbZQ4iTq4nmyZcvG4USozj8FW40YPMSfxJaoiosL4JInEJeNcmHx0E&X-Amz-Signature=b27ed9d7550310e58aed6e5b4a0a336d18f440a1306570a8f033930cd889cf30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

