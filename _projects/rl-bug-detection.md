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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624KA7I7B%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T171422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEAAbYPpyQQB5Gfi93L5iCu2baDEuPvTX2GmDTy5w8YwIgCL2jWv92Ji0z8HTqOHddL%2BJm1KGyM0f2xJekGQxpaSAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwmMtPQSVHWqpadXircAyXCylp87uK5ZgwL4VCA%2FgFxhm5xC9rX3P0sNuwtIn2XkDuYr31OqV6nY4r9UYUiIO754%2F8yI%2BTQuSI%2FoBHCc%2Fb%2B62%2Fc9SH7xvQuYTtVVIJnZReFj%2Bgq%2FX2RgZR8pCVRZiHeXuur2OJ6pOKmMz1nFbxzC9EXxkBhIwqXpYcZ8IWi7qGn%2BoRPZS7xGQzGByy6mFv%2B35P7LyS0084lrdu5lkube0ej8OO1ekleM6vFFR2o5y9I0gZKcGfqnsWDFK1TaGpwZqioGqlMnEAnKko%2By%2FB8zM9yhzZDQABRaY%2B96k9kqLlbz1r3DBclGKrQpFvUbLV35X6i0pQiGPkeT%2BLG2CF8Vp6eKUsAJW8vdCpESiKBl%2Bo%2BT9hnXBm1uX7swflpzoBr1qdNzPADg3Pf9D65DnCSeC6sUGOBUDM47sOFcct5CEDJaxmGFh%2F%2BUltfNSlteig4IaJdrvbcFjcU%2Fgm9HQBstOvdJhAVBG0rFn5LZae5w7UXXaRbBT0u%2FEFJjWxke8IBKiMJ4fZBneHoyzQ2gmv2ehj0tVMuUCdlD6a2tTeBKKhOUXogPUQg4OTqGysrUZ8PMi%2FABbOGwK6OfriCC34Q12Hgl325lKgovkPkf6rv7KuVmiP20n25m2Y5ML%2Bo%2BdIGOqUBDY9LynDmngKbTagNNDeEErhLAogVjjJlJENZvO4NLtjpLcfxLoAySAdZLqghqsZBVQQXYRS9UAbDL11Oov3o4qNpKcYZFl6FLmTSV5wc%2FedcJaopHPr42zpq8LGWJy1WYrlzdlWPKsQRa4B%2B%2Bfx2uNMrxjXv%2BnHqflrLvT29bSf6yokBzwSjRdbcBsGbr2ltZGxOh7YwVA5VvDC9Eeo7rEPToSXT&X-Amz-Signature=895342398472425302506ae16c441e422a4ac58e0b3810e0a23a98e61a1bbaf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

