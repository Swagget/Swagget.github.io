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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MQGSFQH%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T170058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP0zcPzp43Z5YaWKdIKP2Jni%2BGO1y9HdZQeN1L7wmTSAIgYsuMDhfS9h900CGhvvJi8tqIAJjBsyZpP1K2CfCIz4gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuBwH5GONl7rYd%2F8CrcA9uW7%2BAQDJDFznmPYZn4QIipQXqZkqLbXY4oBXvmJP%2FW95HyJkhrgIx%2FViyPOZLbAMp9PYLGxIcEcmN0fh2U01xRN0nqrCM%2BfknTyVoJieBUbhy59%2FKu6ZTPTo8ipXFLSikuDeRqZLjIyDQOBqYxDn%2F0BOchjyV67yecoh4CyqQCMUlWBKWlnQCrX4%2FlwIGj7kPP39MduJpTLQikrhn6MTNZBAgY4e62Q5djDpeDPCrfCjGzObbL3sjD7U4rBYyT8Hbk4nw8oIJFWrrDZ4wmoc7gkOpFkgnT11qOpv4PZMANOmtKB8PoJjOPjTKseN6tl29z2cwAnH9x5Oc2D2wIIF1RCVkAjd8C7Kp1nW%2F8nJeLnRo90TgBwg5TXi32opAWq9lNQVDvmBKCvv22ElchVVE5i71E9E6LYLhrKw7w90ithQzWJm51uXLuHUalXHNPF0y%2FSaJ94ettsa%2FftCbWnjf3E09BYCToX6aifxJz8mwx654uc8UR4%2FOVp3Lg4HfdWQ4RnLdIMRqJrHKZ%2Fjiq67VprYOWgEAY%2BqaZF2TDbTrOvjTUG2HpLUvbLA%2BoXAjhe1F6zP2gPf8mc1rPMY%2FRPxMF%2BF9luBA%2BEY3mKJGN%2FdHZ5jMM2sDnApBmlTDdMN%2FCqNMGOqUBlGTcwlzWYVIBT1f8KWJ1bS9t1ZwKO3pCzrIf6lNOhp%2FIg%2FCFavPmQvhAHPS4CTld93zh3cgQ7OYGMLSQZtqMRV3hSwomLSFHEo71tRdFnMDULtXz%2BsG4a%2Fj8uyPp%2FhhYCGS3jHbbtz5LtS%2B93bMsL00KNG3icl2O8jZ0qUaBNtCp6yW%2BbERvRJnOexpSNA3qcEs7JRVkPyy6858XhhjPqTVJSRLW&X-Amz-Signature=063c499a6aabd1f1ff06cddc7ba9eb2a9d74ec5fdbe023baeb446999e24ff5b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

