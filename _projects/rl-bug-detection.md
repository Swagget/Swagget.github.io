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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CBYPKM2%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T154604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSud%2BDkKNtywzckHK0DIFSmbqdEBgVLFSYZgZE2Sq1jAiAThqm3QDKYuiW3CkzIn7HHiBJnLfpEfgE1s3ydcWIG%2BSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMICqamP%2FJL2LeszkaKtwDzO42A0XDUHClSFLV0hzl7Mf%2BzpTb2iKl0WW0ImbB29nCE%2BRVe8eZ%2Fl22c%2BDxFUiVxbWzbelky09mELxbQX3gCD1jXROum9hNlDPJLOXXgoAoy3%2BSm1CafOCDcO8ohCWx1SEWE1kOjUFvKgTjqxObEnNR2xaq8Ib%2BSRXLWlcEbzlmLp65R7gvMp3ZdiDvUnX9V%2FaWQ%2BYNthA5TKzpSMhfvzg1QVDy74LSiA6QUJxhagTaaE9H%2FdDL37U4KTn3gLMa75BKq4lweYknvpv60qf6Fgwft%2FFZWWWRSZlnHeHh0D2w%2F9k0AZ7JkmIPiZNvN50LiQwoA1TXIRjb9Yx9KPqBGL8UUZ7ns62rmVafjShyrRT5hrjDQrsC2WbZC7KA0FMuRZIgUSvDKCv8df%2FesyjhZNRydtfpDCVoISgSLnN3e%2FXUaHNjisqpGbXNkGlhT3282a6Md2nkRFb8QI3PyngNyBu7iwUrHZim%2B6tM5BCyp%2FAmWVRf%2B%2FW9PERY%2B4nzt6sqE10FzzBaf%2FLzP45PHNIKAivzOm%2FxzkHRrWjTSC%2BnM%2Bgrh2RqdvVo162nP3lKcrbaVzLJalsUbC1674Apjr%2BSEFqA125c14OMxElY4kZu2r8nDp6Nz4PdHzIXT7Ewkrjn0wY6pgGoB5ca4FPF6lnJYtLzFc9V3tUgL82fZSsC%2FFc9qif23Jn5ya0gZcFOegDPUQiziikeB51ZoHSn%2FNWUZ2uSbYAb8IQpnBwNoV1njRnNT9zSuxr8cQXQcS2fnllQkW5WkbDWBLkJsme348UwJjPXTNuioWDBHOeMjmWgdw0wdbxMgxmnweWMy22q6nob5qJ7l1chrNzOBaDKW9OcVDYk9ebMPqspmWGE&X-Amz-Signature=2c77cd696ab994aea5c6debc9574cb39a7a401c3395c1404fdc0e350bd0315b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

