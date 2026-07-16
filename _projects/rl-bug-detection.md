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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXNAAWN%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T224452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr5QWrTfn9NBjOD6TolWKvqgL3hbD2nrV9hD4NopXwbwIhALdInAN42VbTkt%2BQ%2BEgttmLL5Mk5DE36%2FSEBFFaXpJdeKv8DCE4QABoMNjM3NDIzMTgzODA1IgxGwBoP6ShAuDsCiCoq3APdVdNXbbK9Bf2e3j3bhhSv0%2BFBqPEF66TTSwrMQqGVVjbOeKgE9rARSXCA7mUfO21MPnBeCXmyGR9m515Ds5rkMW7Q42A47ddaRftE3uNx7fXqTFFdZH3kyDkCcaCpti8yna8T5XwbaW8XQX0jD2J6LSangd6K%2FypcihwyjcN30hlpUdF7ymKfPa%2BCZ5AkZxM7MD5RNh2w5evDOkLZ1I8og3PJEL%2BN%2FTIYWYWdhDU1m0YaDammSMKzxxuSriAa9pQCklBcdYAzMNXax3sTdmzV%2Fuk4SMwaKavdrSRSqmtpQD8dZcWeOoCjAY5zvsp6ZrsPrQcjkrEgOMibw%2FGiHMh1t04NhW%2Fw0smJmmzHP4p6WOBwyHRrCQ4sK9qh6xqo%2FbE9gK%2BEcPojeG7dBvrVH63txlX64TcctsuUZ0ilBLEgX5glZpwp6U3bS07gX3EbL%2BWnePBDd561p7DKALffetQ%2BG5CR5k%2BBNPIw3m6zim7eXCGIw6YN0imRAYsbG%2B5KHhVommDg0xt%2FF3KgjxDgdK%2BKIQEx925goVq1GEa1ckf48Pfz0T9czMVStfsIaVXxwXVJgi%2BFZPtc3JsjvzAG6RTkcdsxEc%2FDCyQlFytxbrWbWViXD1QEUOia%2BghNRzDxi%2BXSBjqkAdxV7ptmAIRKPTaHqMrkrb%2BrtztGJdz9EFl6KooR5JMlqr%2BPHjq2aoLUoG0kovpcnxdo8FD35k7kgwIDMjtIFWdJKn8XRRI93aEMmwzU2az4DeZAB6AAeS1jTXvlX2b0Za64Uusa8ULckLgEJ5SdRG4D8F7DlaKp%2FtRUxFgAZHrtCEkaE7R01%2BeaE%2FlHNEq7ZM%2Bqt1NaC9skjmdSx%2BvqGlpjpIfk&X-Amz-Signature=dac8734c36bef342ced0417d2a60997fb2497a7a176712618fb47a62213b3210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

