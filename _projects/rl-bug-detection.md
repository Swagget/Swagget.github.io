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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GMLUR7H%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T215319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDOUpI5EMsvQtLraZalIxWKflT%2BW9Rxavof7sKly72PIAIhAKP2%2FRDjJNwzr9DDGU0wGJ1InppgUZMIVmNF0WQIIlCeKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx%2BBfzd6YAoMMzYYkq3AO5XkyQXnSBCoCIVDQm%2F9Ct%2BNjqYOTtAionvhmBgOGv9mtOntTzaozbwtlDgfE14wIqg3UelKWsIE4YhDR7J5gM6MVTT2VNWYAQ6KqlfHx%2B4j4hxfMut025d1BtaXzjHJ37skxXyUk%2Fb7Gbg7Zhxt3su3qIKdyYUrsg%2FCf2h9K0Ifz3YytGJu47%2BFdmQRBbpys8G4zC3sFHf6Ph6X%2BibB8jv7HxaMniuYocjOYK%2FmXCIOHcA2GvSOUBPHZgmjuZwvVK%2FNrArMqz2bygY%2FS0ncsF6kW6NQC5EWzRdpqGyEHakSwx40yKeVgPMG%2BOM1bTqrendShgd7%2Ba%2B8rer8gCyBawNYuAFml818MwVoESlczFW3SLoAotTN9%2BZxh7QfpvAMLggwHbJivThnCrtiOejD1rQI14%2BsQl6Q20O4fPEwECCIo8Et8WLg%2FxgPCTQEubGrv2Mpr5oZsTOxA1IQ5bCnoNsl5y9FKEy7pwzqugkjhozm9RyoV%2FOslXkCMQfnuoD26rglBtzzxWvPdpvPDZYP14ADh6LQF6gW8z76YkPVRFB%2F%2BDziwoisCgs2fWI1JEtLA59mdqAyYkarVtx0EEczSNEsq3%2BzU7VlxrPhyCHwB3n%2BvXINf2jVcKQVywvzC4voTTBjqkAT92q2CbBdCSYJ3EthFculGpORb7nglvTzaHL6x47hAVvrSUOguebde6Ao6yB1O7HElXYD3DeNw4NY3PwpSlX3VecV7GzZfEKOLWyt8y3R09beY8vwwi%2F7SS9ymfEpqLItG0XFM9XmhdJ0boshvOvaT7VucGf4LIZOtHbSyh50jUlmAHN2eFby1cKSELl%2F8PB0dx5VR%2BcvpZzELiYzGjy76wn1GS&X-Amz-Signature=707cd4b433ad73050335807597df40f4ea0b583bdd0ae4a21856a30a033faf7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

