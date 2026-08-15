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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPNG3HIU%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T171005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIDVSxJbjUpf9Wi1sNEC3V7CEODCAZ0yUbmAMa3Q9t0ZaAiEAuHG9thQD7e4v9edkr5ABibcosVv%2BkKmdns2qdExR6PEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDGXBNZVT%2Bu%2FlkaJaJSrcA%2F7uyI0hw7q9dQxYml4WEy9cSqzp5oXtaGONbYLll3JJg46zSx35lCJnWOrc7grtaSZusq90dhz%2FZMLSTmc6c7wdkgFXqiAeiDTxpEliGaU4MTCmrBM42RN9mP%2BL8%2FIvo2yyOv6jbQk4LDlhZ6%2B6V1IfxqaoCqGKJXdBdb%2BLxdQOgJU3iSYEf5huHmYdHo82T%2BlMWvwaBaxI5iYDTg7zoa8iXzn0u9RXIA3CBhy%2FpCPCFr1BpuyAiBOUZ2mZcIILbdiQSqa1XAinA1%2Bo5LLYk41WJmbOp7SdSfdVOYg2xm74TTRENu%2BQvLrLd%2BgJe0Axs0WcAJYd2TTmXgPt1VJ9IwHb%2Bn%2BXJmeKYqkYn8EzmO9Zqu%2Bzt6KFB%2B9tFfGNJmp8Wjt%2BAC0ApmRq9nMx0yUvastf9l1ZRNJtsXNqRDSdZvRfHCiTXuLv93gb9ZhFcWzHbwiqqOoS%2BI4xTs%2F%2FhtFOxjy003i8rDh9LgetpdVKzTpgP%2B3wmPQaY8jVp1YQsTpF12d6w0c8LmAOkB4Ikr5pw%2B1PcqzGCHv6kQsbHhv8zDn0HAX9JhqC%2Fdytq16IzOexxWXV27CS9d0RuT1DVhoh7VlMGoeeLK1YV3DELjKQW45RcEM7BnJdMCAwNQqkMOKagdQGOqUBGpq2NQ1S%2BpusLc3ciiMB6N8Ty%2FDZZGfC76PzNC7R%2Fqx8AqZl1ei%2B7tcqH%2FoznMysRVWgXnYvSnWjjuGwVLwGoIKMZkl5ojfQ3iTe%2FHmKl2n7C9AT6BvCZTyQyflA8N694rnjo5vyZO%2BaDaEgD2ucbY4UEhCvlNV83cjY6pLQVJB7rFNid6dlm4inqSqcmG7w2ppzAJvmer4sNW5VI27w%2B7Ip1GU7&X-Amz-Signature=c0a9ac0b1eafd811c4e195aba28fb3b912ea85a7659470ede918b8b92099f584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

