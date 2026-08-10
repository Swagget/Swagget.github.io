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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TXWVFXZ%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T183842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5ZNp3pmBiQymKEx8CFbRM6cbeIPaoXd9SKiQZs8ksagIhAPg%2BY7qGEqqm87HFg5uTzXFVdohkl74TPXXKFuVSx1McKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuYv5swPfSN8UJ%2BwYq3ANDfqVrq3k8%2Bf7cC6d6WEy79qh3Tj%2BEt3wNLqU5yTxYlm54IWkKSMPlUJ881R4J1ogq4vxn0JQjfcB3sc%2F%2BoOTzV8Dw4okORqQIdXpC1pzcYp8gmR%2Bq9F5Ma%2BUP9QI%2BzD4q075PBOm2kxD%2Fps5TRRVptcClqclMCIl19xaGlIMJp2JSOYHx%2FgofmJm%2BMEzV4Y05NPOj%2BDD9%2B45cuvPuOhxRxzWYuGYcoTqBfdowXDxijXApncVcEMpPIeE8wcmwKR%2BbS8fLklXwoKhB6ok%2B7Y1tx25DtX5HwJHw7zC3RPy%2BfTf2dXC9xzGsB6xv0yzxz1lC1zOvGJ6azusfFEljYmkM5dcQBbOsa9D2RmzzOouD44SNzzMfaWU5od%2BWMeDZZaLxQapPc7okdgmtNEEF%2F9IFEuYhuHVbKrstnZqckpr%2BtaofgriCjP%2B1QBTZmuIO2XSB4%2FrpRJsEpl6GYqAALZxMLhKc2kDluEaF%2BcHvv4Cg6w7%2BTzC7okq%2B%2FQY3KjijyTy6B%2BOoqfzFBhL%2FVmy9voAwVjx9Jtdq0Ih7LYWxY3iQzinWVl5g95sAQt5mBLZKQkT05ftSDgAgs1aIs0I%2BjHWhsZZeoB7HQTCTPs7wKS6peXZ5QTWrwn3u68flOTC99ufTBjqkAcFSYSvhYfs%2B0A9IhQLthUVTvgAwZVMAvA3UbOB%2BYEj4qqANTRytIeEctWam9N0RbYze5OPmGqf67hZTkx1vaFirRZylxY5jkFF0pSO7woty7x3Vu%2BS3B4SAayrRK8suHCsQuYagOr3EnRxn9n%2BvKQSzxyliCTdtmaQTiuCOHTgkhHZ7MGHLCTWN8naZVoa7eoyMI%2FDjz1JkT4aM64ViGUZbUbIA&X-Amz-Signature=f4f7d46db1a6c7485223ecbbf390f76552d3372da1e06b313efa53fe719a86f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

