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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FI4TVSZ%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T185928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfRYf8P6sI2o4yv8CfF9t%2FHn6eXDGKf6frNmjw0fWQlAiEA8xRVN2RAoviP1E6M1%2FL9Z9QLxlETFoolTvADhVxKzXIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpaChxknsiV59epYyrcA1v4JKqv8IEI0hdmaGdrUt6gVBPYsUsIelxrQ5gsP7ZXN7xpJvE2rDvjibgaDrJHOjaLJowJoFB3THIkfjlX5lTnjC1Bvs%2BcXhnZPUCwb8t%2FgakPYZwCT0LCvZ7hlya3XJ9J7LpoSg9SdYKzFQpgv6gfiUJlccdHcANud4V%2BxM2Efc6SF90YHmVfABal3GDItanm4DB4tW1pjJIxC0LDUb9xBsLMeRzV1NL5lEMhV6wIFQdzwiOchA87bFqkDSTlS5Z1BdqbtK%2Fq%2FhxAycCDfUviLM9dLLx3FU6UjCaCrXQU09flNrJ1MUO1omDWha%2Bs%2BsOCZpxXz5NDUgGW9f2gzDnWy5mdB9%2F6WCkPEHcyVtqQGBptGgs4k8YktWRpn7eLBi%2FguGxQX2Q7PDUtCN6w6DLY6XhjoKX8olIcu53W2103ZqVxpmyWS4OHJ6aVv0ZYer5lZb8u8zkbOOc46OaSEvFL3vZL2XAOkPNNQJUsewdN78%2FTMKZrjqVT2nYvN4q2DR9qRTpUKG%2B419AoFhU1VmqAzXb8yRqECoBjSsuYjZ1Snl7ZhASqF2fSiDIUiA13udM3LiQEKMF07CD7YrS6Fp4na4Qb%2FLGtGM%2FaqoP9Aoyv5CHQpblvUxe%2BmjrwMJaEgNIGOqUBL8XOpc4b8B2mtlXrkD5LPjkHAETAwVJjdzRo3cyderuT2nf7y%2F%2FmjfsQ5QrfIiskjvws3QI6x9bFzaxdVDzLwNdcnQio5P518SsAF1ORKwdOrY9WT3OZ0%2FryT2E%2BJSX0sE2FmWoNgfYRkCtSXykzorl6Tr8byD747Iamilq6G2scRh2uM%2BPPbyQBxFD7fPW0bFBV7rtMz3XVslEl%2BU53G4fhUvjN&X-Amz-Signature=84fe12dd996877bb21751753f3877d45e27fdd2623355e029475b0ee7fc81a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

