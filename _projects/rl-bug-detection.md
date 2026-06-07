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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3SSBEOR%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T235556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSVBAoyU52FP5dPhQIzSWi67fdWs3TkuC870EbQY7O1AiA9ntlsKUGLTtwrV590f6ivvWJu1fFi8t%2B9x3NqWL5gciqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6MKJVzcAyFrzi5W1KtwDzm%2B6w8AN%2BrDLEszZfQwHsggnBe8brYEmqRBF8rhds%2BKX0nA%2F9z%2FIvZ7pS9PTOs%2FpE1A5yAJqLcxBh6q9%2F6W%2FBjNQTPNyRS26yQXLBp967g9A7ARt9vxpZqNX1Dqp9koV1ZUAtDhswa8ZI6MdkrLKcDlkMSeYty5JoHR7eTiSUJvK93A3KZW1GuEid%2F7kWVbdPV7HBxfUuckhoYVd2OEs941WGXxn9n3hhzItJZSOUIiPgHSctk7ByxpqlY%2FCS6vymaGbuhCL46YaNYfvhdj2%2BFZomz2bfQ3pW8VGoKiSV%2FuswSgmHEIUQmff9k11V33j0J5lTfvefLFfmM%2B%2Bbt%2BVJ4971Vw5%2BcQHBeWPB310RnHeCXLDbLq2LnEFY9KDedUILXswHXhu%2FdLQtKfILwBrg4V7EZtD72wI7mrQKhPYlwJUyPMCiajXe%2FFNurkrahu5JfEr7tXj16MaUD7xt5AHS1ofRauYghf1MZ11MG30bsKWADEBOl9AV0uBoxmZ5J%2FoeUdF1CkosYLcwa5IInD0FypOlQCoxcCX%2F5m%2Fjm9U2YI%2FGfSza8qPb2UBgcnb9svm8edj3zG5xtXRXJhC6XReEgqO59Jg4dRXk52VRzXIIBubkzDtsVvbeV86C2kwkP2X0QY6pgHoybZpPufvc0%2FeR5CbBKDXh6DvUPuVo4ehcJAGl%2BeE%2FdpoQJmMKK18FuSq%2FIkDqagnERQ%2FOyCrbE9iANu4u%2B3T8WO3sGnQ5xv2BlsiQZHaUUGKuMupiF4GCAMFhxf1qgGs6N%2BNkzEs0bZn1g5wvHa2SvvjGt3nzLCWLrHR5w1B3s4wIAjVG%2FvmvFAWzhXJOvkId4MQHKN6BI6qw7dnrc4hG8o0ySBv&X-Amz-Signature=98e857bcd9761148b76f62b6dcc6eda6aaed23b7bd15c8f1d4a2af1cd12bdc8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

