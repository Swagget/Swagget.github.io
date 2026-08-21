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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNP2ILLS%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T021456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDJtequudZ8%2FC3Icy4KkxuIMekmLDio70p5YFH9fFugwIgUZ3oTCjeuqql2WQdmxmV%2FzulneCavU973vL%2BnaEWOBAqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBxBKEiHtwqfs4t5ircA8k0VShavx6yNqIfiSiIFjEkqxvdOfOeX4G%2BxgUW%2F1cqBi07B4C%2Fusx880Fm9ZF1JuVKh375qv7RtYvlsfaA6lC2pgSKJdm4VfNGmxhxlDaez21njzTc0bGS0sL%2By%2FkUcxXPqHwRm3BPAd4gRAhNYWzuLpLoQoSbveMn8a10YivGd6%2BYabq0i%2F9a0U3EnPe%2BBA8bhlDFPwJk8oQ4zSMWP33WjmzljCEdldEvUSvqCHE0MwpEmS3mKNyKZxF8YafBu9aInBMCp55rryFBUReDaFtvyluWpRjbZ0QEWBkXYAir9wPh8tmD708htqkz1odwD%2FWKOPVGyRDYOkdvTMikZ3qy5Bj31f6dnV%2FV6Z8O7z9RsXDi%2FEnm6ATLIZgGotJBgwziCTwvk32dJdE3jnMX%2FhKfpl2IkLyPKnbCXZujr62Q0kAPSqgoVxRmlTV%2F2rXDb9Gn7vQHpoxe8PjMXuEl%2Bklh1j9td66a3Le7rghqvumCFlOOJlBRLjtbOlnQvXw3ZKtH0nbICOwhNztj6NkPz7SquETntTlx8ycKxKD2xowwdN8g%2FOS4sqiyUaNj4CuKXJbaN5QrSSxqQZbDXmdkwwt5GXLxtOLg3w%2FxCM%2FMxZ4itf8aVnaGEnkdpyBoMOitntQGOqUBY36BZT1W11YMG03jpc7Z8S3PsXqisc6BTGUYtXaKAD%2FfJ98lLwB76RXlM55VqYG%2BdltXtqc92%2FPVh95NFARmgrhe0xKVq30Kyn%2F8gcZLG4Jvt6tqFyOJqjQFjr30ndsLOvrsHX0csvBqMUeEusT4D9ojUWhOeYb%2BXEVmDdZq61iqNXVSrcEy4MHwXFJkhp2X5QZmu6s5pP8gl4Bn6s0L%2FAbY41vU&X-Amz-Signature=374c3800e55b48c3c57ca8c0fe73eec349d2a320f278b2f18c8e1df055994219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

