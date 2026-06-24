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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU5WPVIG%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T152816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCHEJM4CPSqKnwJIFaI7IjAL%2BOj3ir5IdJ41JQV7%2BmFKwIhAPLssx2rPwzkALcTskVbUySF63R9iqXbFP79%2FW%2BdtBCSKv8DCDYQABoMNjM3NDIzMTgzODA1IgwgpPqXS5V6UXI%2Fh%2Fsq3ANVq7ehzEV8CP9eYcobldvnoSvLIk4UC9ci0AoG%2FGL0j8KDw9mQihMAW8kt7zI%2BnHWh%2FXfj6vfS2xUMVNBvhoxUsupDvVF5QlI3g2Fkb%2B%2Bkp0%2F8WmXm0RzDXyayY%2FjTSGvqkk3QIIDUlb0h5Dw8uLphsKrphz9FVMBCkAr%2BPvvM%2FC5eBYZFdEqrXTtg1KQYUOiy0Q0wfkSKIDg4q%2FHawamv0faqgCWvq2BWn%2Faq3ZoD5AHNv2fr5PZwW6EMkpoN0eYCpquedPGmc2XG0N8SQ7U8dV1hIknHaATfSsKlO90oHJ2QfN%2BqmMEYrihkJMqDpA4Hf1PjEMt4l3s2F4HYjHClRASaJvvc5z5T14OTOrLNteWHPys4d%2BiNYsiTRG9DdGLXQfb8noa0RvJq7HfStmO8W9Z3krbtLbYrBkBExV%2BZnJ7SDxgD%2B%2BNfODFB8vswboxED97OY5oGiL1vIgiGsORkdsxds0LdmEiN4Fe0Posgd35DuD%2F%2BLyQ9JNLogPSXpmi9t2%2BA9MXgoHBl3zdWJEMh8i4K0zph4GMV%2BGT%2BzoJQIin%2FM4GtkXXBSaX%2Bpuef1wmSuarCIO5JgCzpYDdBlgC3SQx2ry2yDzSem9Q5%2F6IJCGYW7nfzwixmXEBRbDCIsO%2FRBjqkAV1ck0lWWgFsWdXW1CejZeRj55ieP0fjRWL7pRQtICvDVs4mdltWgi0SqCCooJlJ%2FYirZ8WMvD41g%2FtkCDQjxK8aDCuM1TWse9BtDmIqY01u3vLtwyCz%2BUT5HJwbuh8YsJjceFuLIragi8St8XNi0Zmf99Xbk6af5imGJk2XmIG7%2FilTdb%2BAW166bcCJNFOVNuozzYbRlYPk3fSKcdqHwM7TNReE&X-Amz-Signature=e6d924b72b33bce3e2ec6b8cd6ac9b1bb5ee9fa49f8b70d3670c15080ae4a227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

