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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6U2VH5Q%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T202939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCkHpb%2BHtZLN1zTIp%2FLP7hh4eh2XAqlV89sghP7FKSpegIhANKfyHhTmKYHknUMig5bVV3kzF0%2BaovGXIhZox%2F1rqWoKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FWsctgtXsL6%2Bo57gq3ANch45o%2FRwMAzQ80U5wDwTOV0sEacOw1nD10PZHOISCGpMSjXhI0AfCztSFQ9S8%2Fw7Us5V9SCYuJI%2BYAcTteGUcgzK74a2A%2BKYi%2BpLAm8PcoCn7UEXHiMlfExEWimD9EQD%2BIfqQTAP2wwL8CLeu6nWFUDJ6M%2FUlFcMXtrkSZ2rVliPFhEfQ%2BXwcrL3y9T4uX%2FYtfcDdZdJsjs9lNdu8EwAQFgGMV5VJm5vmfOuxPmcZaFVSbw09goVTJzegKoO%2BEmndynIFjivzCgND2bpIbcUnv95iXDuzmgMQfNtAW1HEzCXBeKMwgkxMfL0SkvpIKFrp2JBd3eWRaIjR65zqqiPNXfKJoAUYe%2BsvYOUCAry8H%2FL4OC4ejhNy7VL269zd81P%2FNW1AuL9g1MAsVkbtk5lhk1I0Zs7v0LbgDBJq5h2crMa2KleVCU4MqdSfgPp3ygIhJvLnt%2FZEFvil9BWVHnl8VTkGYDb0Y9nqdisb%2FQ%2FEY9ZeHx2UGrJsD5EpZhzOqEHdLhgrMsBZtDR74tuZTGNXfuYkKFcFm4d%2B5GbnVmm7MdC0oF%2FH51BEQVGOjVthCOzKE4IB5dm2N6lNXjuXEsTO7xEgcNuJdC1ip0vG%2FV06dTfyZgx7%2FcN%2BkUDsFTCEifPTBjqkAUtdW0xBCoN6TFjbWya61x11vOKhJNqCPBfR%2F0HfyvI139%2BhMdNAOQd0I1dZ%2FXWwsKuFasspEVcU%2BlHlgS70FxyJynJgaYn2sRLCdDnyhflf6zOQhSZrVBc7su9%2BKC6qg2VMZV%2Bq8r9oy2a0u4pEMQlwACU%2BQgoxWfuCWnZBTmgVa6LknQC1Fxvwj3x2W9%2FZpJYGhjtp9bu1%2B9jPZw3REudZewOI&X-Amz-Signature=5de9a27c4334a489866bd56b550472fe030b9c357bed30fbce20fa0926891b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

