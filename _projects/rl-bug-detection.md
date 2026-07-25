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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TODNL245%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T164148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDZxwwLwQU9BzikYeg43oHRGmjT9W2dX28%2Ft49YABz3dQIhANjdhCLrvLru%2B7A6KfqL6VB2ckFsE22dMNagm6fXY3FPKv8DCCAQABoMNjM3NDIzMTgzODA1Igx7f7CUq3B%2Fs6VUeeQq3AN9jWPYc%2FADSdDFgX26UYSyS58eHhbhOQIUxMOmPuLj2tNvMmlRziRNzLzgjMUfeVIiiH5WzsyQmYSz6l4ZlTEN5FOuVazzrUSrtJH%2BAiyh3koDNUweQS6vkBi%2FWVvtqmf7kfAHW9RftBUi31jzkKFPFj%2Bd6SVxEktgBQb4t3o5HqTEfeS0KS%2FC8WYrrADQG3vneriFV2czx9WJcwK3kceN0wzldW%2FT5vr0d5NVcewLmFTv%2FRS4NfGsxC%2Bunag4Vju73SP0bft0NzixKs73%2BWMVuTQWGr3ZqDENxSXUdPt8Q9NqGttvGe%2Fi4a6nRXYyKHZ4ljHnPiesd0i4mdzr5SZWomITAuOzAQzfYedz%2F7zojaq0X2eTF8pBfB5idWj5yUj5isHSN659T0MLlRepIq5hZfZqkrV8r%2FpGcuBkG3uPfrQ0k%2FdxfbtPhQeYrT52R9XGgU1%2FX8REYz9Bng5WQSDEj0VuYBY6VOLvYTRwSbsMkjKTOtZE2Nl%2Bfb0UQKbfngMvrVTKxXEHuVxpYJDY0eHzOAPrCZqB4vwkeQ9%2Faw2PArdxgRB7%2FgZSYHaEpytykDQCLk9Gb8F6lEfSIRSbs8VNodh2cdn9OmktnNdg97MbNw6M6LdE6PV4633MDjCepJPTBjqkASdMy1qfJFbC50RP0eFN5BA%2BU%2BYg%2FvvgrEBa5k0z%2FIC5rv93nPyzsEWAAz3KPb0aI1CcCFJj5o77JHgbRTp02O4NORzIEP15IdUMadTefYOzBxnWhTuM5cv9UT0Crvh5UFZKvreUUkjqfnRPP09%2F8jipAm%2FiMiECyxYiRQbyGmP8mrifAb85TW14GzPD4HlMjH2m0pxPDeascSGP14M1QFIzgjwG&X-Amz-Signature=2045c7dbf331ee33c3c9d34f97a606bf3903dc81753bd220bdd44d056f1370f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

