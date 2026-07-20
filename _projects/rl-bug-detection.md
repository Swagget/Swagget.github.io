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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZDGPBG%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T012315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZRipOiSUirvY7aF%2Ba0AuSlITCmzyuZFLJImA%2FpCGbOwIhANct3ytLnc%2Fq4otQL35pTgVYLmmWHCJbQk%2BNuWyRNdrjKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAi86RpkO4GyVK084q3AO9KeQNPSZQbEAztPQtB5%2BOn5yR0JnXC%2BwClAgn5Kme5Uv8Ef9Jpqb%2BIfS%2FpI27Sf6xlyMAgydWlU7dMT804QWeF8SDrXMtMT2TCGVoabu%2FVD3ikGL%2FNHpxribtGg3Lz3pFBuI46iT92s9Dvb2%2BS%2FFIH48fLi7s4iOukLlLBPouUXMjfBoIq3%2B9pAK1IHVaKeyzcYw2QpQaB5r7EgPjB8MDZVzZxus6J5RfwKEaUiq1mJH43uEmwXNhlIFOfya%2BScvZgRXInkfitiuNuHfLzSTRrMLwpR1AZqekag3Dk96xw93hROz0%2FUD0EkFnfWHRzmc9jykPTkXhzbNAHRyeCZeT%2BfWigjfgNHFmcnQBTzfz%2BmbRCWzyZy9ugtSwegqE%2BMftscLOE5Ntqk4bwTdkXCmSoWiKEC6%2BFS6SOwlr4MBCcRTXLE9Jbga8JoyAYPoTCi4zO3gMx%2BpEKp6RwMhQrvKLGjJBw%2FdwJSgEdhtYGQkhXms70SeWHUeaXPEIZpL3ikUcV0%2BTYQRx%2FHc599OiVsN8ARXWP2WCUgcXU3iIaxq5wFZiXx08oL2TTKI9qHyFrR%2FKnK%2FjDmce35XWUxf6VFO7a1AQClcG1HInchlhk9XHyZzFhimcr0sDCbUM1jCGr%2FXSBjqkASEu8fS7Mq0Cktrdv4wE%2FQ4exs%2F9%2BZqqv0piMCqAzrr9aNErkGQ6Nm6stckZoqN8e6x5pcidTIDru5lMmQdIX9lRc81gMfCFOJr3YPJSPOnJvYA5KvFSQlypCpoS6kIO9tTTjoC0bPOeQD8%2BkYtxemuCTYdq0FuvM6HewQ0%2BezcW7GKWERAVgJT0D4QC6OqYXnS%2BgBqH9ByvVMQNGaYKUtR%2BGVoS&X-Amz-Signature=73e8c76288d95b437c134120cc99ba3d0a236259704d3b0e70c55e0b6018957f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

