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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RXMNDN3%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T224539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEkaZGmYCVyV6YxiFvos6RfGZvLpNppAwsCTQan4XHPiAiEAluze1yEz%2BhFx%2FLwCcFr6yGxCfZvri3IEz0mxr5g0LHIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDB80kY4tYXN14TGaTCrcA6IqbWY1A7SjKFieUCEHP8f6PSmIGiol9mI%2BZXESIV0ww65vaquimleVcgMAy1egZuBD63oSkk57c%2Bqt3BMfhmtI%2BickZXiUdqfRE51g3MQ50QWmxADyofkHOnk9%2FwqD0nyUYQV4gJ7eVWncIwFmEAkHKqWBIGLznLhe5a3FAFztnrKRbE%2F9hOTNT%2FwqMK9icnTQLS2pVPjxd1LFvy4JwZCuuUxDvYMsPaTA8szxL15PV%2FxXU2MbH5kKYEV6ShBphU6y9knzA3Ss7MfFq5f6Zqen8KwQ1mrXaGhhyDF%2BKXukVrx3RlGwEtDhpgBy3hYQcTIcy2uA0HbekZi0EJgYHCyNXzH9zd351xs6QCpvI77wG8Br6qvbzEKFBtmjzPOtbs%2F5LzyYkxatv%2FGmtRYro9iOziRCFP6Ur5Oc%2FgwQWp3SXU%2Fqziex67eTlUGlMrkQKvLQK5dVBwEMh5dqixg226t2pbzrUH%2BKGIRpR5bB8Zdjmr93etRkMrWNAUPxqo87ljlkb992WUAX4HgdDWCtjUk6ap5yC781TQCgBexEX5seraLEq5PtLIaon9sdP1QjdRcRbcyKwI9FYZsokUPf%2BB8ZG1jdJN2dqD73RlyFA0v1B6QPvay7hgU5b3NpMPaHmtMGOqUBOmVVRxXHXU980GG2%2FnM7unmmH%2BohNMv6XHhKPzIiJ2H4x8jDAfwEAWMQoeTX41coeYPlMndbISIKhF2D%2F08e1MNRfb4QIDzk4F4Yzr4pOq6SIF5daa6L145lasSf4GZNka0NAQ6jshwXeCh442cqbo3yNRrQJmgW4L8yWvMFyY53%2B1w0%2BPEuUfEQoCGfVDtXX8jwhkBk%2F25lPu0JG5HWyvGXkxsG&X-Amz-Signature=e8c518ce939090cbd70e3e67e5f2e5e3471a57aeb2a660efbdece641dd074e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

