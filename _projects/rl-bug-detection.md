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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NQIQZKN%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T181843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhzC21%2BqANvfNgiJc140sa4rRhVbEHNY9TxvMVwPvmvAIhAJOMvL82%2Bel1swTAuC6f4awqVcaGcVWVjbljmDrdQV0LKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCDoCRzQwxcVquw6Qq3ANfn%2Fm%2FpopSshyQBR1tAU%2FEk8cC1YnJY5sLxVx8g90fjCYykA1HM1uYQt5FD0sXXhjZROR%2BlFLq8ztKI43jlUd%2B4TeR3EjiVSJRDXg7wfMbDwoc8zdSkcG9Y4PEWEZepIDq1VGA0beJUfH8x0z26BNAbZB6NPoXHs6d6lXgWzYe0efqv4R5BCUl04rVpMd0TGzJg1rkgNTqhg4Ox6aMceSfFSAJeMZmEVh9NhXFf%2BqeaH7vCeA5GqE7yCH63%2ByQkzMIPDvUocOL7EpCupjkB39m2oowdeaHe7YhzgOkH7DBlS8yZBJY7b1ukvnHy3As%2FCnHIsKfEs7C6ZEXocKQnwBxymPTePbiYbytUFP8uH8XL%2FbDr%2FMZyEpqYQjUL46BqFt14joC%2BnlTLEFgdnuMmver9KeoApdc3M4R4o4qNL4Eh%2BpbS82WWy9wc%2Bi%2F5r1GTwcAGlszAPwEXbPd2AmpZv9J%2Fzcvl%2BV3OOUI5yycp76%2FbD3ZCKyfLNXRj4tRNzvshZAS2sdQ4VzuIqdrr29t8SSjEGJn0G5LQC%2BYP2wKesqXHAw%2BIQZkzz7Y8zzx7BWJiSnRLfS8YpqS28liTy8x6RpEC9ORTqsAGpWiHKSuJ4S%2FsJk4Fl5ZLGKPxgvLlzC5%2FaHUBjqkAQJvtm8%2Ff4YhV6GbRv1oTm%2FJXkzW1DEdjzNDAm2M4KpzPb4WebhY7uPm0UvaP%2BXblRE7yurn5m3UVU7qcEBAuP5MXGLTb2yM%2FH0UzAFDOjaGTHHN0%2FGQIu326ioQIhhQk6xSk8rQTgZI9qtSDeuW0WsK22tu4xbs4PVaB8unSCo9FmPayVEt3FzSeojc9ed0X%2BVNaId4xnU6pVK5P5eEWf%2FcSlcz&X-Amz-Signature=49758ee3aef1327fb3af2460dbc68357eac0fe6799745f6d3855a7ea7a070ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

