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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GQYJ6NT%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T235030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCICCo%2BX0UzInsSuEldyUy9znvfBtGlwK%2FwPrft8vXkbggAiEAmjcw691vibgXvM0lPIuSFHBRIa9%2BRzajREG0OG89Y8Mq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDMOqO7M%2B0ivtRZ%2FBqSrcA0Mrc4NbaYRlyKCdJkOSNwyZT7O3hD4D2JTD4iJjy8LqPSGEkV9bAdUQvgz8bbJ8h24jtfmJdm7EGEXQc6s3nT2J0Itca%2FR9mX7%2BSaBxt3yiEm30MgDusyw9Qycw%2F%2FcoC%2B3dUludbG%2FQF5STLHV3DtiRuASX4ZG99%2BbROioHxQEz61SKljeY3XMebhiY7AbWh4SeJcfKvqezyx3OGGl%2F96OM6XhNCXEhsY0RilbvZV7gUgy4alylEpnf0aJ07ArHnwJec6MOuJPpu6DIuarMgtcXjsd%2Bq0PBu5AD7SZMtM8bkv97a5ohvoNWgLy0%2Bb66b6t70uwvk2WXHInlrurGHVjx6Ylm%2FTf8RtoiakGQTIq3qn2L6Gk5cpohSBb8VHOGtLQOAVSbUHQygF%2BQTwcLFewW8%2FWDMl%2Ff4lREhSb%2BRmKvuThJCNMqFxgFGbPyvO5W%2FJOKysSr92K3hYan8fnXSQkNGCBbxFNB3zEVnfWZP%2FMJfTWzTcWgFFyd1J3yrH120lLf1bqzLBAUWQ74WDWma%2FWEb%2BlXBV%2BnByu4imxFIsr5gdOP%2BffM9dwfQ4Jpp%2F8gzM5trTAlEkjCLOovi2rIXMoJ7FqKRg83fzp%2Bw59s5fDWEZBKGWOS%2BiickUVbMI2nptIGOqUBY1fmQTBa5X8qpGfAsJNMWBddK1Pv6R7iHHSu%2FLp3M09JNLst2LMxZuoUWBlMhZ9nyEJk2IukaPW7v1tkcRsC%2F1XwI6YSgRAl5%2FpOG1JssrrxsAh%2Btwnhg6QkLJk7FVtOpzEY6L911gPNtheZv66n7XeQX8IyXmXIBlv%2F5d9%2F%2Feinphu9xCn7Rc053B6f%2FqsdC%2BBcQizGL9EnBK6M%2B0KMp9Fkwkqt&X-Amz-Signature=1a26907118a2fbebb04e806fb140af10cf75c93f685663fcf9eb5c6a6df2cf25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

