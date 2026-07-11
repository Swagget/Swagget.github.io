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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BIYZBT%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T124600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFiSSYzIu3acIo7vPRQ7xDVPtudhUZode89u8lKAb5rVAiBHZzqsMaIOOhVhxHwWNxnBX4N7IAveI0901vkjE7WB%2FCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcTS3kl5w3AewA2IKtwDj2rTE8%2BsYMaxJEDK8KjX0gL7V1MK00YMl6vSuAM0w30%2Fs98ODH8fRE%2FGNSpOwgstaFxx0g7i5flWlUTKjFztI3A75g3jXjnAirEwvho1YUzjPUGqIbaeLnj0GYjlVTrQTXnIDKxrmSUEXisx8aKUVQ7Az1Gy%2BrQCVi%2BPdrtPeHfKMt1b%2F7ElRT94Qr5XL5vD%2BqhF%2FQ6kPy%2FaGV%2FjKo7Ja0ptoExit6SuDVFlLVwq0wCqxMQPsnIWOiVYW%2ByoXebJlHVlQd0uU46eZG5F%2Bgy9NBhW6XMtU6maxYL9CuQ0hcRkLjDVwfejR4TZitUPVVSwIasu9553sdtUNSgrCv8lheSGDxQlNkCHOCKjBlw6mH3eqZZZag69RGBd1HempL%2BTwq4%2Bbo9VIiGp7FERUcPcJ6supMNUNERkWYpTitW87dsTs6UnmnNGMp%2B7d2YQi1m%2F210EapHr01cPk%2BRC4MYHMmpmi1cxI7ooDV%2FWdnEgPMeVUTgLkHMG%2BTlAYrI8y1u9YRifMwDxeWonsLGp%2FSxTZ2Pg%2BcYq2Lh7V8YqLDu57LwGJjqf9xYf9XsuenQewVYSx0RquRKK1eVrAOvm%2Fk2d0FvR0%2FFlwIpQows2ItzuFdC7STxXLcmeWPDo4xQwy6DI0gY6pgFwLG2u1HjEXJucOEfhuRbyChkXwLLzm%2BnH99RoMlf6l2bPl74uCJQDh72K9pPVQz0Uj2qw%2FQ988ClVP80v5QuPV0EgYPRPvqsMNO%2F5HWwGwAQyctOecCa4UFrxXd81j5ULW7Z%2FSVQZ5JuhZFnbvGdYsKqaPcXiAptXTFnDmWhccQj9o3AR56z7DJJKkK9c6aCQ3%2FdjSb04Nf43cxaMWbmBm16VDPFw&X-Amz-Signature=57b38eb4442166d7869acd7fbe4fbf1eaa43204d93ccc5dc04b7dc85b9f2d134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

