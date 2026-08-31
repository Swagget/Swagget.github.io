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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIANPOAZ%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIN%2FjbTUaFjFDKMPW%2BeTjEIkfEuhhSpUih7XBgxFpwmAIhANm288s0T12xmnYGR7bCKMWzvXGI6nOAMvlL1Egy4JYaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5PcrhKnFxX9nXMgoq3AN1eOab%2FtiRqCKAiDMtsmupadUNqbCpE50aOkSQs47DJdMyabsobEvrhxa6QEx0YZDazuzgMXryc%2BHOvBuVjXYHK3bx0wfvjcwhWlhKnGk%2FvJ1V6k8gHHvbRt7BK6hkATI6udMcieNcFT%2Bo7emXiNabFYSmnFPVY5owT57aUdoG4SYo%2BwTW9nUc7LIbxu79SUwF0BAwdQUS9Ldc5RqouHgBwrEY67%2BCY2oBXoQaKu%2FIICkaxET3FrUvIhJSE41Khc5FSb7AyOb7i%2FSKT3jlS2cfVUp7foJSCJ3OPobu9XehaTGB3AFJ73FTVbnrqGOdfT4ed1ORJwNXemLbqv%2BPhmY5iDBS3fpT7iBlIV5hU%2BWgaHPu9XWUbmutx5Rwp44xRSZ1pckurwBXDn94Sqqnk33ZTniZr2zmabJyYHDa7GLX41EWCDkKPFEQ%2Bo8emVCGuykhkaaQP00By3DyqK8NAA8QrTVEjn9jlDZmmXtRMyG21SAJn4Xr%2BRLmhBttX%2B5%2BdjDD28pdX9QD76lfPLsrl%2FBIkwkpyRhgD6x0YlTkiDqo0IDUmpr8gdROP%2F7BMh3KTTYSz9WtlCRsUK4p9B8JkqfMIczSwBoF2pbgmIdhEVDruxObFYcqLcu6IOZ%2B9TD%2BgNXUBjqkAZ685qjMs2vwclFxNgqPK5oHupOkk2%2Bdv9Q6Js7Zl%2B9JozkWH5NDTa%2FMWGqMn252g5LseSU1eDv2chnertTi%2FwLeVcxFe7NxZKnGAhcixflP9O4y61SEN7%2Fb1JDKeOduhoTs3JtzPI%2Be1QLjD4ePYgFmeETZa5Os08TbZbK7hMF7twATlQIRYxvLOyEIu6idpKxQsENZtVchke3LhhCkzanjm833&X-Amz-Signature=4a648a358832b65b4343f3387e3490baa288b3a6a57559cd1ceb5692c1b1c471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

