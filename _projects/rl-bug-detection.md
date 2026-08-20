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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCMVS22%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T002943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK6sx3N0HkHDoKwFhoL5w6Kltw60bHfIfZfseBjOekIwIhAON4EB1iM1K%2B96JSjEGeZLiRvV2a8aT2fpXgC0oc5CShKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzX1nz19JY1RuHC%2BAkq3APLYJb7qk2VpZ1SYolbCIP4yEnhnf2KN2TWTj5nbHwhwaazaD7qaV7dbZm%2BF%2F9DuS0dvSNvoReKZk83QQ7thH6YiLenB%2FN3dBnGJZ0X6VYs9ushRREbrrm%2Fn1tiXrpRIC9XvzBoFpptYvLoJ0JyUTcRO1F8yB8xzCFrHCQklYwfQrV%2FrNWUyz5lCW1Hp1vOTN3XT75IUfGcJ4C%2Fgnh1qYR39AqcWgZh%2Bp5Pv9DcYXVZN32hM%2BAyfjCOIw4ClXftLO6rXEHkGdSlnwZCGED4y5DkM8lFaT%2BqGa4DL%2BSK38dqJUgeE6%2Bm%2FdBNDvegNf2ZL2wpZEteOOs2qE6jCzQsdpOuizRK%2BJBpL7SiEtYeseVWiNhxLhsY7mUJN%2FZKzXuj%2BUji%2FUogIfXF8oiFcetwQJ4JS3WHMklDQWAs%2BXDqinwxrydNgxCnZcihZdd7reuU0xwz6gTZFlgEScgNxEMFhLTbOpDQ%2FPPRhPLrxyn2ZWCg6yZr9q6dQsa5WBd%2BVS42CyJZAO%2FHNE8HaeViFwxqW9E7QJG3z4yN2JhSXubNz3DU2DrqGogI7e%2F%2ByYEgbs0F5WsZHMGHSJi6NPPxI3i647PND5D1Sm2982rrtRkuhAZCFPURffYaCDQf8jracjD765jUBjqkAWvGtfVnEpjw6PQDsDhWV%2FdXzzHiPbXdi5y30HdmyZiJYDuGJyJ6gA9HlGm9fNh%2BmMGvh23oaLbnv1LjN5GEKelP1wbDnfH%2FC8M%2BswaqPJr9kVM%2BLbE%2B8meKK2730QwNA4yWdaWjg65iMvFH8k2Jal3%2Fro%2BRbE9BXNe7Q5U0BlwxJhb6osUgaaH%2BJjdLt8i%2FV7%2FVnJm%2F8VHXFDlN%2BBWCRALPWudm&X-Amz-Signature=06fc4a2754424df24d54c72bafa45543030163bcf4055876544fe6aac449806f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

