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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSR5NQF%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBU73F3yXJkFcuk%2BhfGOtEte5C2CT0YtNLkwPhRXCN1sAiAgC8%2F6fhrznGUNVGtaBEs5NzzlwCFjc2nAx0ltuvCgPiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2o7szek%2BYBWwT16fKtwDPtn8VrZTQp1opcs7G1XMIjVe3Vp4Ez5ei3NwvRrkcP%2BX4xDEtSuAowjQZoZkdSo7byUun7TQQhrtnWcgdSDuCN%2FHGrWQq1p%2BBsL5mCJMDCSP626886YUhzQdyrfL3TWCdu6bxhmhNH9Z264e6UyTGhcAP%2FCxB9FoskhFbESf9aEEgvJ55aDFgUNDM1rvF7XjdPIEd1QilKujcOi0o1LHdETOxQ5619HBZwEIIeWWqJGOZW2BKJQWC7hxiMNNLre0Ve16QtgIAPZQPpWNvjWird01sw4FCcCpR3TAiKYVB8mvhhTbe2gp337qava6sXA3wGS2%2BbenulthIOlJ2fw%2FP8IGG%2F6%2FmnSZ4Y9MBTzueZ3fdBCr2y%2FE74rXFdpkkmJdkWHvjuxZ0fRQ6GjytcSLSCjgV08y3yyTDG0Pw6Keyh83Tdw7MB%2FCp7aJ%2FOC5tzU%2FpFDzaykTbj05LozvISuqwr%2FETZhQWdhBSgNGSdCNdypO7cj7E5bWU%2BmnCPyGEDC%2B5edTg9lUwEQzr%2FdiRVi51eJKAHelS3WvyUsS7AkvZS7NRgwhQHHkqM%2B0qwCNZypCK%2BD40lhm5xsKqyUs21krUUc8wNYRP0fXTdkrlF9mmXf0g%2BNo5AorWK52NHgw%2FOSs1AY6pgGczzpFRlFXBlomiA4k%2FJmMvPFV2Z7sU5%2FH5MTzthG%2BeFMHv%2FMg8oT7zRrkDg72OxBUy5Xgip6vnbLjL2tjJ3pKDgB%2FVk%2FxwEn38tMy46koGD8FScihlNAhZkZypnL9wxOLhyeSMDxzvfketQW1fSv5Hz9%2BkE%2Fz45ILDzMZdZPsX6hFzCaBobez6Oq%2FKJqTHWW18Ng5dJsmNGbJqH3y5xmHj%2BpP6xRu&X-Amz-Signature=e21fe42f989381a0fb35d800997c82e2ed00550539c8396989c01b7676a2764a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

