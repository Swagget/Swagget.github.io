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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSZUIKS%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T090053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDXdem22jsWQloQpZGpobvOlUVsaQKgXDjbYyXQgap5wIhALRSsGaXylMtK7tJcu1Z7nU1XjpgmG6tie1C0PqyS9c7Kv8DCGoQABoMNjM3NDIzMTgzODA1IgwyIRFI3VXOGGvx0Zkq3AMCR%2BM2Oz8koSKM%2B4FphC7vEJGfEErkE7qnAGFiX3MV46R%2BEF9h%2BaUWgmxiqjP7q0Mg87r063Mf88Ut5idEJ6jaLls9PNKA1XZJBi6KlDB%2BQUVgWCC6O7pu4e50zB2eMk7sqEyz5j7zAddpGC%2FHZuZvgVrd1CKHZfE9h5vXYS1EonOWB%2F0WkFTVuvP0dQuOPQ7IsZH9rms%2BRsxVEm4SGE%2FgXQ2fa9UxvvCfvP7KJTBlAMEePvSKQbq8COpVK57eOuK1Ym%2BletzHcmmu2uf1eJjpi5jJU9%2Fjxa4I8f3a5NWW0v6vnh0Q92sGJSSAzhzDGcQxxhLVgpTaSferTC78U%2BzRMFhrGKFlKKscmzAXYL%2BmevuUPMqgXkgPoUvYnMc0%2F%2BirMHONcavWHY823Fic3YAIumkPsMROuQ2A1N0vQwF6KwWZa7rHkBS18gSpHVPkRfuc1S0kXbZs5U4uicGXnirqCJ%2FyFcr5J73EhcdQMG1cpu%2FbnGAtelPuBLByGeQ8lPCarDP44jMXTbotQTrqMW2%2Bvb1jByKohOG8SQPQL3E47DsCePvBcV%2F0mftVOPRRRID7irE2aPvIFBXS1Ma8kztpVI2M4%2BtQPvHhH%2B7C%2BE6VsOfSeaJgF1kdtPjHqDCymorRBjqkAQivsDchDMdD%2FUdngmQ6iymHeN7AU5u%2FzBiCBn%2BDwtcUKYXHVvGcQOAMx59qpf5C9hza12RZkn0VzhyYm0ZFD62UgNFHu59LUnHGkjMUj7FpNhGHrGcEh81GQKjHz2ZnBJXdEnS1hwb58SS4lEBAwP9a2DHg37RJqjmMRLKK9RkdFEBN5GVqUhXdE3Tq9OOeuWRVOf3Uj0970ufCuiGITuI1YUTK&X-Amz-Signature=c5ffd02b5fbdd690075e3dcac98c568b8569fba7a721c33b00c690f33f416411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

