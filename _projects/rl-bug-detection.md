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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQMFB3N%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T222236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSbcUoIv9jSl48osMPXySyjMB19W%2BRvG5gW4eZiDUz1AiBnj46gCx2tY7MIotdLxZUDhmj1lJM%2B3l5grgbNPcU1RCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMIQpnQGA3BXDZqlD5KtwDC2M7%2BjmXbmvrXPdXOCKueh78vMfYidBpF8o57qZtUQ44pISscXSCodQNtCd2u0fBWKNv6pA6jYNQksSr78D%2BT8KB7fdJW67eTinQdlP%2BGwXJ9xj890PX5vL9HbEerXJ5RgAmtx5E882dSEd11K7eYu%2B%2BkiQajEZXMy2he09dRkWUqg%2Ff6OPz9PkA4qYrdV7KS3tLeQDv7Anxaqru%2F9vOvf0gNjijgZeCJCuPaoLUCX5jXengxFNbFPo8P%2BjcumbhZOaZME%2BFAzpoyc6UN8%2FPFTMnQ8xFyIct7CKBlivhu0dnRb7AtLMFpJHZASN6icALS03IEHmkNwYwPBNuOFupWQb7dgfH8JzCNot9zkKD4FtKbVYtxYNc8AQ8v44sRB4l%2BwJxmpWYMpl5rSInMT50TIYlfIfQ1D2YWo72Gcr6y%2B%2BAe1ubW0xlUwcEhCc5bf7MFRk9Doz8DPCVoMj%2F%2BCUGDSOGguvWX%2BJUD9rAla%2F69a6PlhtFkRmgM16L5tU8PAkqKmkeHyWZsVCc4poV5RjH1vEELPwxDN9ncQDAGh4osp82z6VIO5mpZdXgtjgqlya4yswmv4HJi7mZYwSyFki9evCScAdHEkshTguxvaAtw%2BifEW9tfUb7dZOS75owprHZ0wY6pgFfp1CwzKWwECbq1Cn9OiKorYE2Lf4jQuEDsnfHNwybFsLYcf13wGLTtJwRPPB0FME15%2BtgqGpHJa3VPAgf41YepHiswAxY4E80NgpbFdcQs2rMR3p289nSeLoc8F9qfpuj9OPF%2BQ%2BhTe6l60Rfv%2FE0ptqgrNnOj62TFU56L%2FH%2BfpedaRqKndSpQa74z8mGcjh1AU1ZGrYzf04fGrxjlz4qWwZJjvsX&X-Amz-Signature=be2f10a0bc6a0e6e6609e69ae0d5a9498e274114bbd72073c1ff8d421b73207e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

