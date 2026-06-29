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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN2UBF7%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T220151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdCxnEFb30NEF5%2F1LkTWtzjAqBxpooGM3WuuCSgKKGtAiAOciydzJh4ueIsRUtONiF7fIKA2%2BUdlA7RHkofPHNXHyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkfaDYHjpjbTy59e3KtwDBnuB0JzJ8RoUuqh0%2BLbRsbpV9ugor2MX5x2e81O31u9wDZ6CF7eCc2frgrPg%2BN%2FjHoJbIoaRd1ge%2FPqezuwFkDZzKG0noe2Ly6%2F792qSVOGeMqunAk0tOediSBHd10hjqtca8hqOPSNjYX0V3RQW%2FfCsZ8V2QLwrKg%2F%2BQnyjyOSxGTXn3FRZCzkf8EuQ9CzhuqF%2B0qZHnhEKRIGxxBt1pj3rfMfVkV5v54rySTgbiP0F1Drl4%2B7oFUBROAH4gAygvlyyRAjOXqw6TeJT2HR%2BtIDASHLfxshyvPt1ZCo9eVxeD2%2FFKJzOXf0wY4hSDc%2FhpG3uvcZ%2BJEgTMv9hWo%2FVA4cT96mmDK2Q6R799N1aV6RWRGsg%2FVpqInJSRdsuaqCO1mmxX29anRBZQZTJcgDuhtqIvwfVaUYIkzmDvmgAvPspCpjCKSRozTwPODruoWZ9CNvu9NurhkcVAhKsUlUf854EaMSfJLmM5fF6ESIpwqdV%2BJH4lA6HOwNpTb5FNh46u58X2AYk2peSvrcKnfN8pJiqGslOjPmIP%2BnwyfI4DocifBRVaQ7Z%2ByIxqadV9Zdf5mDuq20%2BgmE4CXlqQqsZYGmy2rQJEfxXxZBypLbYqbqkVUO4w7JEBzm0r%2BYwgs6L0gY6pgEKjSbPwajCSAECpQym9JW2RIrtMPRF3Y62PKlHSrD209QdZ21FHRBZ4vDj6StiRm4qPgtIoXLRGqZTqvoAHvncRD0%2F%2FuUQdpIAGAxwCGTGeFmUaawKhMOzq%2FBS1Bap3V5eVND46vo0uXOYo58kPfKaaIjtms6zkF7BlCLBgLsDhGaLfrJnX%2Bmn9MJI8FkTdjSdEJ5Y8xmrptH%2Bf6VmiApagscucQIt&X-Amz-Signature=e7dcd13c446d6d6ad3a5ec0770e99008eee9f6dc2b05860f910c98257cd5df91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

