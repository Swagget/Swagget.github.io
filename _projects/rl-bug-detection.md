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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y473TO6A%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbryc%2BruEMgjZBNPKbQTE4fAsRUc1hCyAFZRNuxgpvfgIgAlCPcarQWBA9SvyS%2F3MxyBOuY4n6rErXzwKcJHKHOrYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVjcnUpFFmRcmDB4SrcAyyLWmMDiiOtSOxtOTmriVQEA5P8cUWzU1bvb7xHcOK4ko4EDrOvK7xiGRM5bfIXFAWK9rSHisPHDyAuftxUxVGxwGmvVQha%2FAur4RfL4KJK%2BLKfcJJeN3SnkVV78MtxBAS1WtrS7lIMrlYi0xQGhj5QxRRq6rcpn%2FOrxCvPiDBC4vMXPGICFttPZwfTez64WtwGBcgQr6liHjh80C0FEBLyHySB40gUYldkiF0roIygY%2FQQA6RTpUa7U5EVD4M4JIY6H7Shh4GANlU7PQ4eLPBzAvXKdiSZQEFrOqkAYo%2BYNDCiuijPyy9BuWkct5DAPDQo8anioDvvBDeS1K2bDbQs3RmQPigIJwnB7rQlM8mgIW6XfHXcnqP3LqZWIO%2Bb6HcdgLo%2BQeeoaQTWK5eEDI%2FeOAEN7h9g%2F4Ey8YcPM09Xz1ZtZSeZ4M7%2FQG22Yl1S6PO319BFMEjp0xWvOYRNuDJ8tiZY%2F4s2qKLls03mshml%2Bb71CCPkT28jpQhCSSjTmVMDGWyAKCDa%2FZ%2FQd1%2FVZkL3sUhd02kPJ3PSjYSnitmyA%2F3GsPrSlnggyP9WUywXZJiPjy6%2FoBUTKIC0akp6aDBlUCEFFcW5a732P7kkUD5nTbLohThWhPvPoCmlMNjEltEGOqUBQIFjnOjx2chQU0WyAt7K2BdPaOBvs%2FnDdPZHltAjY3RmgobkG9e80IA3DDfQJAcjSkzpj62Xj5lrvex0KrRvURoBEryU%2BAZyu5kUj4YBVGiREdEMcOvFTHW9a1%2F4tpPC8p5jI1U6ZqADzDSQJ0IB%2FRtk0nLWwLH63unQq7Qg4Df7pvJE672yB8DHZBPCLqGwQneeBQ18ROZLpiDWWYupPNHX2GdB&X-Amz-Signature=372f353defa5c55afff6d6a70a7768b3efeb6708c318f85fbe6a7f4ae99a4455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

