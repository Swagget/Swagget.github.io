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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZYTHWO%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T214410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDl2vFLIrls%2FHpUR1JX8IPfKKch6ICR5z1CA4g0xZcOgIgFtfq9H%2BmCmS1M03o8sSkN4aeJvSAVl%2FaKmsSORqB9I0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLlPfY9Nnfq3J9JuyrcA0KnVYNkWA8DwQUk1HQLItQg9S2woqmzclOvkVRltEiqWqYEYZtOjd1oB54l8pF0HZMpr8rks63JcXDquaIJkBfSPTKELWGWSa6QjazF4jySVOEDUMDu0uEpsX14qf%2FyjBUTM1iuK3Sekdl8rfwnauyIbpb8wEu%2FZKMVfGXtq%2B28HzWO9r1KDU0fBCJFMJdRJ5OuE4FU1jZ65tFAyr225wEj9IsYENPsWD%2F7I2%2FGkn6Nhg4yFeo4RBjbaT09cU%2FzNyyy1DmTTLz2FTAcGFjspsZ9orJfqnM0E7koSMwOtT%2BAAw6BE8SePUSUzZaclnRLqNXFdGFY7cca5tlDePM9QQSANb%2B9bn8hCLmxRG8jG6ihrLwgfjpKQUWE4%2BPVpGTq%2BD%2BJipQv2HxkaZ09kWWqR%2Bn2u5GxWWHq%2FOMrWDgED65ZGBMOwwr0AyLivrUaBQLV6jeHe3Uml5fZtQYGr6Oyyoa5zeQLxM5KjAUfGzMqWEv%2Frn5R99LpasPewJ6ITBDkiqhN6o33OffJo5EaW2JcjuB3FKgZM4alExzsrVmwv87xPeqXl7Z5bpfDx4YdB1Q259SssNZ7lrV4n33Wn4%2FB%2BMBiKJ5pg7xvSWs%2Ff06qgTJpZ3%2F1Y6rbNp0g2PWSMIPVqdMGOqUBYIMLlqPfycapC47JTc7zZAJliMeVNHl%2FYOd0EPTur1oZpWMO5%2BMU%2FHv88X8Em4x%2FzEKYeUY4v81aso5TXFCN%2FlElu6MY7K9Lwe%2ByKpMsqz4oA97bXT0fAVXfbAwLhMHJuS6Y%2Fwsa5NbytM4ziYEOAR7oLbhlf3UBtBunnIM1T3mZ9MQ6TecLXzVHv%2BntO8cs0bGF6tjVZk2rGddcv92aO9ssEEny&X-Amz-Signature=12b53a5393fc5ade183ef16014d04789ac6541f531e34a74b8cff38c7316c964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

