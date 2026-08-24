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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVT2F5KV%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T133947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCVV3%2FZ7uq8Hw2MQgGr0f9EMfUG6zqg5wgh0NrDDH%2F64gIhAJPTf8uhxE%2BZtS0tonS29r9fgKjdf4xoqihtXY3B6r6tKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymTH34z8v4olI%2Fo4gq3ANhuKvVq8Ku8XowN2Zf3DO5%2Feyq9z4EjcZVCGHgsibDiW8emU1ycMBoe4H6VLihlCTFVACISo4C%2FWJrAnq5EldV8ux7cUlIHSze4j1WWuFHTyNUxoiTNN4Hl45%2Fb7Bwfb9h%2FQuVdfMpw5pyoeNS6VDLXXb%2BDBmlBgqyV7cJF%2FyAXGCqFaUiEiDOSin2YHdhZAJbbENjdyyoVjIvvRCNRuvG%2Bm%2BP2x6PeWAulnKiRsfXoh6CdWnvFM%2BMG%2F4%2FSzym9j5T%2Ffxkx7MSYjybRH5KfcmpRhUxUHmqfKYwgqphnYxYgUPHMsccG5Vfe7USJL%2BiXvggETNpZi%2FXEX8p4gXrJwOzkKhXTC0z0e8DXp4BsYBz2gH71qz7XQGIwErWCb43kLQqr%2BxdN2ljJu7dL9rDvLmu4u7p7VjrlOhy21hR%2BNKBNSWrmULrBUgV%2FE03SCCC2kDOUDYBq9CAs3tU1Cuhr652vbgtD16zufJB6%2FviST99S2QcrMMMVMhMpTsBFD0aBztrPDtyK1gmpngttd0dumszIl8irdfD3l8kPT4Uir8%2Feupw1U6HHCPH4vGUI4vEbTQTiiyE379cX4ZRGMEaL%2F6QSjuBc4gqobB946xbKaDuDapftHXE3cAMMdM%2BwzDz7bDUBjqkAd8y31S61TJhUpICnzJISscfSbn8AuG42QsWh4aCXhukgTbQHsG3bshlHykOLuNbp0TsGHDsDNcVt0c5bf%2F6bz6sR8mDYWMpAqsliEvTvy8TYVeBJ9Sel4U0h9zC62BBZMsoQ%2BVjtrHorYgmjzY1U5Xvs2lZ%2BKhzIBwjKVv88%2FTX1VZzkXN1tPirfM6p7XVxZe5ZR7ZoXOHQb7YKGgNXjxeOo6ZB&X-Amz-Signature=67d410df5df4d0c7ab18dcb86d07c1328464ebe0822ee9cdf20f3acf5ba1e6f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

