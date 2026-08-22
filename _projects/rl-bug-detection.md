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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644TCQ27Y%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa1ma99B%2FTbhyiqEfIGIy2k%2FKlWFY4rsRnUzJkN9Nu0AIgJ1T2458P5LY14wc5RQi5uFVmwjCSFuZLzpLJI3aMPW0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4Gw1XhZOq5xaHsBSrcAwffgcnpc%2Bn8NadzZKi1LyQuXtA9EXuN%2FQLqkP4LvJieFfq%2B%2BQC2eig%2F9tHoVHKjtEp3kq55QIYJxBOoc5UEDVvhP0JGoEIpKajNgDbZE62ewRUzoGSJzoN6F8RPWzcatOgPSOdXsZiqAS3UQEqH0G5X%2FEKKIeS2D7N5Mo3Bv0rN%2FhthqOQpPKSUh9f0jp%2FLY5HMCSEwmJgBWqaUYB%2B7wZ0MZWP1nlb3%2F3CwJaBtQw3YIXCB9apPsJ238CVCrh4PbFHagETKLikL4WATwiB0DRXqIAiqf7Zr8N9mL19%2FW3z8bda6tCMw4A4vR9wcJiC%2F%2F4mK4n%2F9f3sZ8qaFhvnMSzY%2BdrW7%2FgW3vf3EtJOjREVAXIPHJpg3o7NOmXnaUqu3EDNZDBGBXMyn8YuRuEJ8u%2FPfs8XSASmUZQzHqI4Lg8x11wqh%2BQUerQ5DKUKI13vZ42pp%2FgY7N0SoKCm5zrnYTrfrwh9HVMo3Q3eosL1uNbnoKLZa%2Bxj3DPv3S%2BTdZ0ryYTH4EAVUWo0kN3bjZ%2B1pf2Z76nieEU7oVPbTjfmnvZwcqEIgJiNAJhQXhc5I2M01fI30cxYYg4u%2FvFS1r1jgJie0gGC3bViAJXB4B%2BD0U3qi99PTBWn4gZAKAu2TMKTGptQGOqUB2%2BuabExXOPgAeyV91ex7TQrmIEvJEbVpaV3%2BUNh%2FrfGplpk8qGk9l%2BkM6ZxbWwS7L8NHU%2BS1IhA0h87t9gjbumD2r3atEkR%2FQe56ZEf%2B08xNrIoVz5McVjG4xEtBYvTBYwW5NkoyiKUxRh07dJn7GZOTxcisDWpnApoArv79rmxowdiJhy5HIz%2FOAR%2Feu%2BCdchzdOMlk%2FFcrXoxc2sbXAQfDVfpC&X-Amz-Signature=0255f2a16f65ba0461f2093a17251a0895678063239130a44ed1e8e42c2fa1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

