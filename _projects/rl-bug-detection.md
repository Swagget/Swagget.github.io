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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SWSOAX%2F20260904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260904T151536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIB%2Bzgq34bb54CJvvXDbAlz61NdXBDY9KSialZAZRvOerAiBgZfAAiAJ6t12BHrvPQ5o00BfL3a9k%2BE4sGwELt7PQNSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzL%2F3S0oji3A47zA1KtwDw6Mp7PBFtGTaBjPIITfUYuSbFJIynh8t3XUYb6G%2FxyYMZ%2FAsPoRvUxM9dFLp%2B9pSf7s7L4qrDWI46GofWwhAeZBXfr%2BlzOzemXWcl3%2FgKz1vgd26VdwSwXdQDhwKnJT5QfeHgxfleB8TPK1EQB2%2F99u3BZRFCTeKLVAFAfKQe096yubo%2F8Rsp8jkrESUgKsi6%2FGFMUD9pRf9eybDmkr5g0bC5y9kFenFzJ%2FjOVMEcEiKb%2FvPB8gbXCi6BCQiuCbub3udAaaYkDzogWsoPCZ7tldcWxYPpBV%2FKlf2DWelpXUIplp84bDoruw7COYXdHuMpKXmjiJ3yhhzOI6V%2B679GOAntya4pM9dbqSS1HFnQgYDgnxQFoOrdwraGcqiWiRSBK801VyHgnCyUW30HYxfQtGHkNHDNqHbE39ho5oRr6QxltVmUNrVw0W%2BbNhTeVuwemHM63JoG7A3LdsqqDZ%2Bh6fT81p7%2FUL%2FXL%2B3aidWCTwYsNiSrIvo2nLUFyeywUh7uBPWgeWB7y2C%2FiamnrSLXK0CbZz9w1cDhBykvMUKb4Io%2FLLT5x%2F3B2vbL61Xjax2vTf2dnkfXqi3nSGxlTODGdgKW%2FMjnyl%2FmQp9ahQNQ7ndgUK7j1s9R99OKJww2rbr1AY6pgGenC9QriPocdJM3mjCd7JYbr36KX0sLKOMLhlKfWDSenM355i7vip4%2FA15cyeB6x8JuE8qYaAv883x5mO51r4J%2Fzsx4kvt4Fa6gnqRZI7kEJPHQofR6ufBWCyK%2Bex%2B0xIMOC2fcWBQRk4lcWReBkDgw6ooZ2P4B6PRIUOLc%2B5gwKHS5dryl%2FDKlHAq2ykvoTQkCntFZIK6ExIlT5qhL0VJ%2FLmkp%2Bz1&X-Amz-Signature=ccc70d29dd243fb24bb72bb37fcfa11065543a4c404fc4e982841191126b7755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

