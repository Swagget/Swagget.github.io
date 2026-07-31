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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCYN2B2%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T235023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuxZvTyxQPolsdFiaflaClDkLeypkAEww7xeid6MArGQIhAKMmqUAQDQfY4IOsARpNS7o3RYxCLnGmjEMD3ypZbo5YKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdLUAQ6PCINPWV53oq3ANap5ouh1GrE1gmX89e2dHL%2F%2FpiLmY5V0WELLCVEm9e43U8qYI0i25td9HBhSvtKZzIY50Tsvxpqh2JfbQNXziAGY8tQIkbcXeZqX84hOWRbMDLIMS8QQvQsuNZ9b%2FOWohE%2FcgxvtaOS8UhHrq%2BST2TwbRWBx28OC5Q5UaJDPu%2BNDHMDmbDq2opTCHQuoILvY8maPUmiOrqkbKo7n3UKpK94ckVnpPQ%2FMjYrPl%2F6K0pMNTHjGAfikyqbg%2BKBdky51uH2B0hFiWLsYmr1jqKkJpfN2tyOV5zy40i4wYxSL93WuJFkMsLI%2BKT7ZGiygFeddJxUIqN%2BpSyiee7Q06f5NJ0kCJV9XONVdR2r%2Fa45GoqRgiSnaTsKDFIoS9LilBVq3Oikbo%2FIEhK8KHEl8rVUQ3K3ETRqkcPAy6dnX8LqLC8jGVIDhOinetKuU3rMH215nW6pljrW1ce6nG8o84gjtsfm2Cxw5oavOjFXJEM67oygs%2BmAh2wDBzz7woRb5UDfL4gLDSbuJjPpVZlaNcnQr3To7%2FgMnApGmoZfFChh2KwUw4cQURmEkoiVeqOsjBaZHoxek%2BMLPDoCEkar%2BXZp5dfOUd9BUv4dC%2BOjYjqDsHgIGySC%2BRKdDIcyc6TiTCM4bTTBjqkASFVB5nyK2hb8IN1n0qzzFZmBQVPjcZd%2FsC2b4SphgO0bnLBMZb9dy%2FTNKy3PUGoBXii783iKKSmrQUd%2BhkZUDWe0kMoNaNefPazmOWIYAVFdeTkeXXU1WKXl7tlg5UWmRJfJHyhFdiqrDYpMsgFW8T7PSweQAnuEK53S70QOA07fcq96aOz3HWTScZqSHcbqHZqJjrYZbQuE%2BwmCQMO2ayptbe5&X-Amz-Signature=2d19786a72efb04b92e80a142e138478ca3dda3d081763ce0c68f26f239a6553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

