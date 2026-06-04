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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVMFTFLC%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T161506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmSh86yyWF38ZizN0N%2BP5bcRRylXyN35P%2BpG9TMssM6AiAU%2Bn8tCZwv43XoXyjhupUNheWytVro2%2FqJuBUVPUvRuCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMy%2BFqkpGFgnACdj9PKtwDX9vUHzHCWBdLjf4ShFpJiQUTKz2PJNNR5gIgSzmsxuBLG4Lommo%2B9tvO5AkdPh7nSU08U2gLEMPk82XHObI%2FhxTkW6yntrnYa7XgN%2BoQhA4LnSm2JJVkzi%2FwS9YkQ6071y%2FPE4njSADWyGh7I3xm5NR%2Bmre9bLIIZY%2FCNpWBCk3V56CIUQ%2BI9nAtqNCM%2B28%2BXGtNJp40DE4JiuqEhNrGxE8S8WkBkVfRLtmIN8obacfxWWC4UxwS%2Bp77g2T25b96QYoYJ90SwIpUOJXwqknlvUCbwZYVK3jDsJiQ%2Bs8Lu17OC77moJNN3pHVXtjSOfYbBqfAe7krqyUaT5VwGhKhU1KBJNcHWv33W4BvNxW2%2BDPAF5QX0I5nafNss5Ke8w215xPoeRyym8LyhDOTUe5GvWlA5JSB2qBQfjKf2kge4KiZjL1%2BHzvD3xa6QLffKbSMMe7S6flrYn4P1liC5tRzeS3qEyzceBkhZCMYSuSxEfWmnmfUyw0oc7iHy1GG4oKWufFdxszuM%2FQ3D70YcByvq4feg08td8Ykot6d29f%2FxnBmKtVChX9Pg%2FH8pa6LBWsUHn3BVwxcv08%2BKaB6Ra8FEdkoirwrTQ8AT2bGMbU8gt6FTX3eBf6FNLloGKMw1IuG0QY6pgFS7ATLG2hdVn8jmw1D9znE%2F%2F9%2FcxrEbEwMMyzsNavhVTpQDs5ewo2rjNw8Xv5gMWvHz30FfzrOYmlpoqoO%2FsvAPgfkrFPdTmso5VSiIBKI4HyzmkQyNLeKI2vU8I8onXG8n%2FCiuV%2FVBGvddfdyJsGFHVAXlfoMUWatldq6CpfYcz8mVTz9sMJ78ByQoCEW1dUEY8rwdK%2F8n86jo6oFjnGZuKtZRrwd&X-Amz-Signature=5e0cfe5b6a623c1bc964c638d59c00103e3d7c4a2c6c78e645df4204d421b6a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

