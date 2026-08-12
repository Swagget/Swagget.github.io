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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L4OM32X%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T154605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDQxw5pp%2BF%2FXMJnXm4EBsEWS8Y1FIbBS%2F3rXiT4X5O%2BjwIhANoNmvBsLrDfStaz1T9SyzndgVisVKepW9eTuggfahnRKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYE3sbnMoR6iB8sWMq3AObk1HldXwy60c37Yi%2Bxyj2fAwPIZmXHnLFf28qs%2BmlruAxfmAeoumo0%2BaKmrln9Gbzfk5VYaheDsuIXmSSxGeGwLl5IYAGIn7pwWlF49HVh6%2FhGKW3cJolFKGomMmpFPjAtNdtNPtbVRLYRdhtv2WlXTywePLGGEqRWiBjav8U9uX3IbKYiO%2FDVorGI9Na7q8CdWQBBBf3smLKhi87iWgw6AHcvNEbq%2F1UgGHRd7XJ20pU%2BnrR85%2FcrapfYuj1kxy5Ws6VUevDzH4Nnar0zMPHqJzhgVRzDbAgwaayVegFo7zw1M9E2cU7jUArvGwe69iSZ5blLVMb6jPZyZ%2F3QyFUkDfKVWNw7uhmxz%2BZzmeK08ZplcyXO9zLKC0nYPX08YY%2F%2FodE04IgRL1m%2F3g2aG0eAY7GpE9a8zeQIKCHrggkgkhG%2BiSZ74WeSK91Bz6j%2FaTXpOFOVn3lSWUBV32GgbA%2F8QJweHGBu2PXsXnX7jWjvI0p6qgWHHaAQPNlrnroaXge0EIYwAl2EW77vzpUIoXYsZHwhig0phxoeNAW8jrUQ3G9Q0MGQXlxhssijfM7LXSNTxS3Z%2FCykpzAdfysPG5DONiBd24ValJH1DosCq8OYR%2B%2FRCBEyDKYR6tcGTCg6%2FHTBjqkAdlOqkyvWoO8R2wsGRV4ud3KaWDMhkAy%2Fu5alLh2S20%2BFygK17Dzzx8wlwkWfrdmDReJhMSYQp7L1hOGpc%2FIRULQJ0sKRZEckWhNEDTNEKhLHr7t2X%2FEaCvOQ%2F8r5%2Fd2KFFf3fThXFRNILCTsskNI6e8x0%2B%2Fr51k9k3xm5QimXBwUdNIAm1mrSl0t7C6OMv5wPatzWBlhOi7xRUlLNUCub7zpALM&X-Amz-Signature=2524bfc46d300e87580670c8fb4364ba0e0cf4c2d807454ae8564cb82435ef18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

