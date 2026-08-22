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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4FRL6Q%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T020638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL9icrr1Bq1XDNPJOrUUg7Fd8YHAT80Ac%2FFKRahjz8YwIhAJXLS7IrxDXoT4s%2BDetSsq5auu3lBkn2HOHjp%2F76CP4DKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaiLUXrf6PXPLRzTEq3APz7WNZvub%2BMq5uSMoGIV1tagEzNEx%2BuTNNTerWfyxusTkYkuVjdb0Wi9Y9TrjxmsoG9Q2JMBlbeseTPbrbm5VB%2BCjboyKGM1sJYU4GYd53H8coqe7UAbf55mqbbg1GuKtoycJV8OTxTNsGIYoBefSAOvXlXvB9tNUYg9PB49880Uw6IMicNCEjiKQ2EJilYAahZzeBRSWV%2FG3aA9YzL%2FWFDf3SioSDx90YM3IWyU4XKzoDFpNBmMCcWUbAEsM1nXID2Olt34XnH%2FfP72cNmcA1YRyt%2FhjIkCBHslAFF3ao6GDtrI5RZ06EYkPawoOJjdTTSB2GXNBSbJmVhcz4jypKkz2FighTAwJ%2Fjoo2HYjRq5D9lqnTSsdPZY2Tb%2FO1k5UM8o%2BRI1ci0AoRK7e5iMgHSWnUCVqD2Y6TWpQRh3G%2FtrctCq00kOYKkn8OTVwRt84OGxYSDBP1yDr2K1fJbBkH1jO7u0ukhg58klafkcY6rx%2FgCrKkpH2kvA6f8JXo%2BmyAFhiV9D8trKUrjMcUQ1bOaKwoPq94Pkz1SSONEQ2A6UFbXvncl9lInF%2FswdrhL2Qn4Cu1K%2BQFeWivUl9rnwb06MSuOFBEM0fvG14fYJo%2FUbiD4zUONHNcAm%2BwIDCqgaTUBjqkASzBvHuTMKcZJsSvzAF5lMjNt%2FIoc7mj0M2g%2F04rweTbv2xBR6%2FZqOeDDsmOYw8U9UEQjq5QtYwrCdOTAoyZgXli8S3n7uaS%2BGDMcvaN9SRvQG2SkHjttqtuT4CrGrOUJCl75A82Uzf%2FJg9zWMFMO2YZNq1UDOoYBr3M5AiUlS%2Ba6OiHYS7eU6gU1fxInWlDKLUvB0m1wrYN1lKbNUZ9qbuYyZun&X-Amz-Signature=d19686bdd70ad90d7f536e2df0b8b6c2ae0a4bd28c9d43e3c55091d9250a8df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

