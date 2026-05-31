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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2EI4LUI%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T185912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCs46BIFTRtUS%2BFG00kmO2ZMeUueIwWBSO9SNxe7pRRjQIgTa%2BvFBBkW80GqnQUx81xzxY1h6wv7Dr8gzepra0skzIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4%2BVwBC7SCUZHveWircA800x3Yi5hfJmplpoqhSEL28NofaBgL73GF9R%2FOn9X74auC1BZeawQBiPISS%2FCo8RZgl5DtdptI9eVRoa3FDyqaAm%2FJERPYKN7gJnmu%2B2O%2B2w1NL6C6FGO24DzkeqbGcx5RtBSfFUD%2BjJ33wSR9QqzQuW%2FGOQLkJR0lSOdqzYY9eJcutQ1e7sK5iv%2FXVXkoe8yNog2dDxnx8J8Hnb8JscETVfDG9nMeunAtDdmDQfhI7mHg3iaPMRphhrKXHBpR3K93C574hHWCPjr4Zo7JsdVN4etg2E1IjwiNyV3x7VaJIXtOYsaHdHTo8DOZwDaxyweL1T6E0aGAIZy5pftzRXYLtITw8CBElunn63TCECPBWXQI3QBtDCAdBr6TQ7etWp94325UPSgLdLjcpg8S%2FmCPF7LOnGYmXMsZls%2Busr3iKR8JBbUSTYvET48OBoqHbzehaijvcQnAcxKDk3ClkXbpBojdxz7YdDnoz%2F0vhoKZTLcE%2FMh9TfjsB0F9JZIm5pi1bZPUl0WDUWhmQLOOLwBj8KFaSt1EhvHfbHRYTHH9s%2FpqLxusKf%2BEV3bjsDTURZsd8uwn0sQLpOK3o4ms%2BNw%2FYzdCMag5O5hyG2MBXmuyr6R8%2BN9djZjfi%2FDkkMKz68dAGOqUBLQTrLhYKAg28BbgZin%2BavqPCmIQ%2ByG1g6geCPMfky60IRKHC%2FNiPxckuXQqttlfAKDI9oujm6V%2BdGC9GOVxoLKAKMPeMf3h8KxEt3SFgESgn58QdGEsrbmm4vEOG6NlVa6fsrmsXTVH5SIJplS1Cym8bdCBhZDU60zO830ZJP7854o%2By8tQSE82Yf6ET4ITtcYd0i59FdL78OjOI6GdQ7L53fDLz&X-Amz-Signature=f81f2eafb40881050758711c98ec6b7765dd363ed989eb4d494942f351f9b50f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

