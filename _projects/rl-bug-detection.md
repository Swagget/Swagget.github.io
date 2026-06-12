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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKDZWY2%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T001216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIAc62zJJxpBfBGqK2qzARmQRElma6CJnfi0o5N%2FZ3lMqAiEA1U7WXfKCSIgVWNgkkfKpYg4pQ02bIA4iWs5rBvPoqW8q%2FwMIBxAAGgw2Mzc0MjMxODM4MDUiDLb3IPkHUGhzNXp1aircA0XW2PQiznWv1aWXsq%2BpUd4I8sVIgzprwOnfyAJfwpDTJB7yft%2BUs8O3SYm7BfbIpJJBw2IHZRi8sMYFXHxGheWUxKs%2FgrxO22fDmGmpvSx%2FEJQC6T0YwjCRoSnvDziPQXTYGyyDZj7agoGTLqokc4vai5KLRaeZ7XKdvz48%2FMX3Si9WLFZOa0hgkb%2FYP9CTtuEtDSX0fxyyEQ4ZjFQpnNWcdcmSNdP0REXEf9Z%2FcjsfzxpcrvhyUOVDTip%2FukqnV0tfuRlFuSiPybWqb%2BKCMOZdtMmcQPp9nuJpgUgbhnw662gjIoGkkmy9nyWqujOoedFw5bTbMf51sMrWVqmVVijWxFEU6FhlCou%2Fpq9oY1Mbc01YA5mlrP%2FbURb4AjjolkdD25HP2X7R953FUMmCqjkkPIyuhMb1G2RRFRAzeSoYfIpde7Ds8WP0F7T3hg36XfOp3AcfQWroMP3BEcApIdLReR1H1w5nv4C7xrKbeP2CBUyCguuqXLzHqc%2BP6%2FYzmh59bsmBadtHNBVBxoX%2FhZMZjBEkiP%2Bl9CxHIMV3VpPUAmRejGKPF4KaoEo3SJGUOTQAWC%2FCvTeaZ97oQNK2uCBg%2BdpJBKTlWV8XYNvdupgxhURRLob4rSRNTXTKMPDjrNEGOqUBjlT2kqwZ67NlSZetMxiLoZ9kJIkvw%2BA9qSnyTMQn3qxLVLacDs3X82crrG48kMkQavF3P4q4rG2w9dYxDu%2Bsj8r%2BA0ALmt7KfNbCi9BeiLeH51l%2FDbPzy%2FhT9VXVRCOb%2FE6mfNT6IU%2BWQTm2zdOAUG1isx4jC%2B3YxJlVVmmdKusEg%2FhYYXzHgTKjfhXRTvg%2B2jq6eFjDaPcgFXwr4f9FPhLNyjnR&X-Amz-Signature=6941ed2b18b6be032609eb315de679403cda96fab2b8d921f6daba8c4c6a339e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

