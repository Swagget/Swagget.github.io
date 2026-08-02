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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EICYGQ5%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T095600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDClI0hxPNO6WgofW0iMgpkG5HA3aWQVsNL0nrqqnQULgIhAIXEKKtaVN8iwM32Ao0LdIEnNMwWbeyW9QAHwI3QYpabKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypKWliYZd8O163ZAsq3AMeHhMVqT5KXdMI8GWWQ8UEUg4NytaPVszuqGFv%2F%2BDfpeczB%2BLOozJW%2BoV7L8SYFh%2FLRIAmW3nQ5XxEN2FPzGBMy9X%2FDEiK1jx6TjITZYx7DnUG7gAsynOIItpJ%2F6dK5%2BsfprbwcVaHC0xXG27wNKO4CrDkNevV4UhhdWa44VaWkDvPF9vfLIwOKSsuKdXOBou%2F47PqP2Osnhw%2BupZZarj%2FM3w%2FK0%2BJgz2wdYh66JPgTR0bUYjLg7xe6XLBSfiBkmSBP%2BLuJD0Rer5RmYQEcknqFM%2BUYlcD1lB2z1hSIZrWEbtp%2FpvzAcPKM5AccdWT4nxiS62oaG43hRQMBh3akFdXlWlB2TWnWJngP0XXVLa3Mdk1SLh80cQlqHpsuuZZ%2Fugn5EEyUC6koXg30knYHaPeEDFXoxqpO711plmFooiUsmY4o5IjnUHeHFSgB92zWrXKyOSDBWj3LDCopuSDCG8uvro%2B5wvEInPIelDisavWlxZUsOjTF5kUp503%2BnPAOKm5CnaXvk4XvuLMCMHstykamkI7VbFGxTFSKH%2FNHMlBIctqFez74JiMk3lgSANYJqhfhQILgP%2FXiQYxw6OzOXxR%2FYGd%2BR0p9Hj2GhYeBhPpQ1X2np6ovgyBzuahljD58LvTBjqkAXHK1c12TjgcOpDy%2BUPDIEOA%2BIhTsbaS3SAvMnVd97MBIEHhL8tyFYzB%2F76aI2wUhgwsiudOMR26nusVHzS%2BnbLbdCrY%2FL%2FfjnPuxpAvDQF4%2BUszIAcNVZFAthvNi6qZuwyTT7PaSAeCzGUrZcNe1RPf4VktPAkK%2BqaByS%2F%2BnY5vEwP906YW%2Bl8YLAqzBz9TFJ07BdGhYBiLIeZzfXnpnO4t2e2T&X-Amz-Signature=ebb8272d937b64708e3608296824f7100e7f4d76a48eccf091745650010f16a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

