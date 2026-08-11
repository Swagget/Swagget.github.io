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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEW4OLZZ%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T222852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFySMdhP1tuU9ZRIg5%2BrHOD9AkX4AUMMOfrDjtE1ksYcAiEAhLc58aiTLraqftZRVM77qr6ew7uGO%2FoFsqHPn71bmK8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWDdg9cMRR%2Ff70EBCrcAwcYqiBt4J4ySguWcjaUxLFNz0E9ZqI2t%2BWepnToKszobDAL6gfOAE2kjHhufU8HoyGeTWeimfdSmBSkZ25SXD0fPU9Fudtj4qDNEd9Rwc4VK3Is7%2FH9ft%2B5MGHwYFqtnuK29jBYOMj5flNNG%2F3rqZjxtnwQ82HCj%2FSS8d2%2F9cVgX9SlNu9qD17%2FlfitoAP3oadkgvMTtq3%2FfSBwN7JW%2B4JXDO4Ayj5tlOHBQMV0S4R4w4SEZT6AffHv9XtZ4HMw5MpPqSauAf9SqQl5PwWBpcJVVDC7IWpxxC6pSTGoREycQ8Hch5y1xc00ciPY6ZWMVkTo6lqdN2L9GvLmmVDCVXCHFaaE8fLGswFRmGP3hEBj4Oq6sQfzkA8zUSp48vccE8zUQLXuaa4TjtV9Pwqo9verSmvSjb235Cv99BS7vZqfWBXzwwIk9jEpJkgVu9yLoSE7K8Mez4o52PeUJfeTYKGYoK%2FERSC6UxCZ0Ln1IqGd6AZ7eLsZz%2BM8%2FVzt0MY01qlCeKT7%2Fq00OMQP0QwCkiIx01SmF2QLGE%2BiYXf%2BzB8WaFnEz7MVNiJCE1x4OOdYclIq%2FVyTaHn1KKPENK%2BfamU%2Fft2PbbvJYd0uCr%2FOhj0ydqkA8f3jwMN7hVBTMPLS7dMGOqUBtSk0PC5X0Edm0Zuyttbdw688d9lSGeTwBxwra4Ag%2BzbT3zmu2R2nG8CvWWRACK3BZbhDR1nnNJODh8WQFIMq3wvUzYw%2BbFNmCINyEmg%2B23txHlFh8UMt%2FrGjCOFJbJWFb%2BPg4E6B2hcEKvZSy%2BzAxbxGTU5HBPitOyQW3uxrusDCENOorElkPZvgeDS5P%2BF1Y8kkEe1ba%2BqsO4bRmjUYVUWpZL3u&X-Amz-Signature=2b4facc4d9fba92bf5319156eee400441b791d2f3e4572a72851eeecddca2c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

