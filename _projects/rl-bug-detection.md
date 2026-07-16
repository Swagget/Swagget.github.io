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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GUH2WL4%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T044708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIG7stts82NdSh%2FQExnS67Q%2F46Pq4oNtjF63kE4sapEEVAiEAvtXx15Qr7aprCP0cmG2MDxKUzy%2FlrD%2FxjtnKGPworE8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDFbEkPtYqUdQEbjSfSrcA1mP4oq9JXaT7%2FsbDf%2FT7lPzpwoTudgHS%2Bzed%2B%2FJL%2BzdTRfELNQg2lMdYcOxmC2%2BxbX%2BcroHwF8De8TqpUoC32n6sURCd24OO%2B%2Fdt0RsTd4D3z88LOyARB9Emv%2Bysz0SJgYLtl8uDY3YSsI49psB%2BBFFqSa8X4czF%2BMzYDePCoZrOCBkI38k4zV1P82fvOpqPwYCek7OErXh8PUlzvL2hRaNg3TsnbXIUwP2Ht%2B3lUJ4%2FVaa2KdpUtaGOrcRIhDFRNetsmkRnBBRWKbnupuBwgTImYdeniE1grNag3WR5nRsooR6BI5KE%2BkeuWwmxJSZi4ESt1imGSPuPVDY5MXfHkJxDUUdXGtly8zzuzRoKous%2FyMFuMoz3Yo5tpltpS%2F%2FFnwM%2FVvFArXBccEN2yJXVrX4KJy4OFPM%2FGJ5i%2BooMybjxk5eBjOYlu52PB15RxHJ%2F76EHvktVkNP4YCaDWeLZaGeyL4pS%2FlE6n4ykrQWZOqGDqA7zgK5w2fm9FW3fPkPM7vMK3MYy%2FDKCe0UbskLIwRO8YAHyHaBwWYGD1Bzz5E9o7rcR6jjWnme8bVouCrg0IuXuGp0x78UbVXGTpGWmBvMhVYs%2Bu43S4rhsUspWtlnQ%2BLUqzdOtjaF895rMMe84dIGOqUBqfOmif%2BpZC%2FgWC7hj0OAxGHfa4gq8JJSrq7CMj8g4o41XlwKvUzNohNbWBzdFNFtEKt6c9UG9g2tiK1l3DO3vOqRfaN0JTME%2BoJ9dDAFDTXYL2Ifyz%2BSGVBcfY1MXJYV0tSJ7RgPaNFNz1ClurI1muoFtzcUDaVO36lOhT259sSvsWjXeRZoY2XXQmtxo%2F%2FuFKvyqhtpUtZB3WXw2pIyRKuT9YvY&X-Amz-Signature=295104d792b8b241a1dd47917bfb61b415d719069bfcf2db2bfe34c1e06fc544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

