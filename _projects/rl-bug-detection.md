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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPM45BF%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T200533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK1hhm%2BvWckII9Fa3GSZ46Eq57h1aKebMC8nLMyZ85BgIgcEAKJshiQi%2FMsSrRDCkcosjYGrFR2e2KbcV8S7NipZMqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPqtXZ59IqqaGBmWyrcA4%2FfyH9PgL0HWhSmqVFxwtq9LRcoWW2x%2BkuW%2FetxYgtGNbQ185sGkBspC55MPMM%2FSrKejIWehCySDOxbjVr39lz0h5DPNDEVAebfYO7oCiLbAVQdCU9N4yHMBjkTjXyockBGSoP3nKTnbeE0OtgmJO9z3OGhcWGW9erwX6GdXc4l5rIMdX35pyUCpAiwvDytKa%2FOagONlwi4wUZa36n2Oyjnm07kGCePln8%2FHM9uphRobzxZkYvGNBvc%2BfG85fHXe2%2B%2BMvCPwcWGbRV0Qv2N684lAd91ObqfqhOP0aaVu38ylPm2yBgeYNkbgzd5kaKO%2BX0We8j8pxJidOGSOBRnb%2Bdyp71N7mg%2FT96OkJ6%2F7secwGZ5r214b6AqZ9Zg2kl1RHcL6JlxnwaCfrVp1R3qbNFlDpf3thgPDe8PVYmK38DJoslPFn4cfpWexaggJNkeU5xPyD1%2B9iV4bkqUuTDmFjCjVSgJX97u8YdHAJOOAeUwmGKYMmtQ%2BWcHCHyfaNzt0ZDqlI%2B66RcXNXKu0h%2BbIw7rI9j3qZGVpJEELKM2esPGjPfAg5z%2FfXnnTiAcsXZQcgWBXwxVhqM341QaIfU1gyyypUh3Vktubd5avrUEGo%2FoVRcWtrlmE1WoTYkKMPKvqdMGOqUBtcas83O48H9BSsJON%2BlmvQvtVitpqsb0W2ROteknEOcJutoAot0Xu7fgXiPpt%2FF7sWXjRDmddQc6NuMlhpN1NPPOQGCgRbQuDOVAP4jWt%2Fi8ah0oXR1Xwo7ejCRNPSY2Cx9mcj7nezQLGs2sU0ApmMMp%2Fc6unthBsfOp9UzBnsfR8UFwNHl7xxRtXmgG6LOzKetCruLVDkOxIR51zyJyEZRNrScx&X-Amz-Signature=daefefc7f8839293c2916f6c2190eaa5a736bdc46a80906dce6bad4441ccf1d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

