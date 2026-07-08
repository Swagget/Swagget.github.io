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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HY57U6D%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T171537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJTDBpMScBv%2FsD%2BKouS%2Ft9uPTdDsotNe4b0w9FFwWc%2FAiEAmoRRKft5ONV1EOk%2BIpT%2FQiS571mQUIT8f4DK7K6jCbIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC090BE41jkQKP2NCyrcA%2BYv9mw3ToBU%2BVXkiZxH0fawE1JKv6Y1OF%2Bz20oDyn4grQVQp6F%2FTr3Zs4nRN4a2Qe8NPBUH3KFnFzkvP8qUnOTi0GtvlF8bYkPa9peJHjM2ElAS7XOlkGBH4NpI26girl5AJs1HlHRxUELw0XDGgtEMoSeupol7GXbfM2Vr0EylC%2F%2FcYe4htwu0fQYEfBOMAoKoG5mjfTm4bQQMJ5mtplFkV8Y%2B3lRfZs4KkTMGCswTNh%2Bg%2BMYpBO%2FmwhYJCLap16ZWzf%2F85S7LWHLosl9IB37TrMhcPxuTE7yE6PeiWwzRBFEO2iIBhEQ8uExlmvVgF%2BsvG6vAkOKWIL6I1rhVPeiP3oiPPh3r44HW71HPgkuOEwWNZC3LONWFPutrq50CvdiqsvV61GAYyyoVUPeCk8FFrd9a27ep1PfwGUcpl81Duizea7PBQuLfvjufY10B%2FinLW7Z5UjuRv3u%2BEXJ1g8HxYQPNA%2BW4Kvz3s3Sa6v%2Ffb3G3PkydKNqU8klUj7uE%2Bi40dZIljgOy%2BNhw6pts9kck9jfzTTxIHAAtQ8lMjmn3g67Ecy%2BEA8v56mOe1lYcKz7nRm%2BfonFj8wnPOmlw0wcFX9GcWVTVwMkJrtXv9FMSQXMg7ihLabDiVlPYMPnXudIGOqUBn560QVWCyD7Iuitdzr8WSSL0uOeJe274YOSObXMiv9s%2BlYvLhtOlA5jJrBktvbiwFIYEHizaoNMa8mab7jnaH83Yx8ZfG8fMwypUD1mlyHxlYSX%2FOFk5P62YUNAy8KMTdDBO3%2BojCC%2BUY9y6WZMSlBs4cQAq%2B%2BrXHzi5fYQsw0gyR%2B5d%2F3RtH9QgsjUwii6hequW5i5RUqOOuor%2Fvb4FQPSiO5%2FY&X-Amz-Signature=6d45113d0be482fee3c480cd8e72f7c54a9fbdc5a511bd886366c4ebd3fdfcbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

