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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SGYU3VU%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T200444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCJP9xmNvflTPkDB0V0O0f5gZbTa2Ici3isMBQn7%2BWyZQIhAIaodYoMhoAS%2BdpCQbbwZqYXF46d%2FchkVIR%2FBIKLHRZ2KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztzLj%2FBpuAHRfwUJIq3ANP%2F%2BWW7yZQ0%2F9Qsxk24Qj8s%2BlyQyGqpYaquQoDTqEkVotBdeHPSydWBUMpEkPi7yFOXvQtirWfLtG0F4MFSELZjHbgzbNTR9yXsuFL7jGn3DScxmZe9T%2FC0PP4LxGYgIfLPF%2BaQcrYKHudI0LXdLXzofH2yFyanchSg1u3FImh4reZEfRqF2BEcga66CSAMudjL7cWHxYr4zVsTC8Reh5COTyIMABXfn8vM3hnIh6gmr2rfSRNaqTigf1FdC5BjNBs2s4Dc62C%2BvE6WF2nvrj2ngBAf3IrCv%2FlYVzeYP%2FU9RqlQtpUEYxLjtpuwJykE644n3Eu1KGsrtDkIt7iVL9yt95wS%2BVgdWwCtT92%2B5uQD3lxYeMu5Rvgsvnb2hiOWyQX%2B8S3CwMyaJ1%2B6FdBYqrtP9j%2Fb6VrVGNZpr56TFVMez%2F6SRMpJptX7fziEA50Uk8YU6KIUuea9NGfBeOuyT3QHIvoJiFbw72PqGteClnXb0h18wEXo%2Be5WAMbe3OZaL0q4lmD4uZMHojCNhaeVr9PPJBueZtMH7DgW9DQX6F%2FnCVdZSqVNNB%2F3X8rnOiMe2vtk2u6Rg6zdoONwHZsDQpii4CyIHNCvieGK27rwf%2Fvyvi60N1duz0tvYhIzTDmz6bRBjqkAa3qH7UGWDPwxFQ%2BwTcxg59GqHGlW9alXMwIqfdy9l%2FzOJufahWENNaKrxlf8C%2B5rvO8w5VLeVvrOBlV73inwLQdRHkFCfovUXbVrH9sPvA51XImC40JPcNLce%2BJDABbUxV9jC%2B7Kj4p3Y9KrQDCjL52%2BwlxjAapUdgffeoKgVcEDJGeSPjgH%2BQ49CN3ORkjUtCMYzfp3p%2FQq0VBjFqDFRnzwTG3&X-Amz-Signature=e5fed92d4857d75c8507ccce4c767c32138b49a854b0f6488ca53e0e37c132c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

