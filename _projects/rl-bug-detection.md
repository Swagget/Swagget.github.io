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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMFZTLL%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T193622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBEvEsgLwpZOHN3K0j6SdPd6ZSBBqWewwQEebtrQgQDAIhANwSnEBkvhfZgYZDrXxsR%2By%2FUaOQQO87dfkG0AjVlBQxKv8DCGMQABoMNjM3NDIzMTgzODA1IgxrBLpAfQ2DCn3yHOMq3APlscPVjUn%2B3%2Bk5lFJp4z1nQw5KQRfZsYUBspDG60kb7TfYJvQ4gXBS39ChuDkOG%2Fmjaylaq0ynVh4SaqaZ5HObCw2QFzhdpr99xp1wT4UqjR%2Fg06LLldnssbCT50B%2B%2ByFIREjD1KTkdoj0OpudlXedBPrsmIGnhCo799Wd3oTyiDppwew0zJ0ReIT5oS20hnZfPWrSd5nOT1Tq8q7KoP7sYlwq%2FDmnZ8oYHKgL9aQNh9ebwyEWz4%2FsZ7RqI5mcsTfkvCk4zIYTw56Cc50w1cJ0qi67Ukg9pZrRywBxgSLHs4X9Vg%2BIHg4sC8EA1%2F7RIY%2BKfPlXos%2BePXJH%2FkzaX1CfKJDnLhdKdkuT%2FrEx9hto0lmSfnNkhxJXfQ6bNQygOZrUJ5gOCj8fOMJVzn%2BIglVaUv%2FIrl2yH4a1Xt6BfjbaXvjT8vzhSccNhYeYn8scYmpGKHesaEiEd1CbdunR8hmmalE%2FHOEg76g4KTGdxesMFV02CAM2frnJDRu0Boug2KHA7ZjaDSCB6CkhnCEJh%2Bfn%2FsltigbJnb1fH3RyAjFZf7u1gOuwKBS3%2Bu5xRRtPPYia9pzLi5N%2FkTEvm5UjW65qQJqkVAnfyKAnIC8Zy2LOqXRjJC69N221IrMpkjCFhsHRBjqkAQ8Ff%2B7k8ialkeNEt%2FqgYTgQoaU%2BmxJSOaKKa%2FxJoE2b%2BDxEXwjiMP8O2FYYncVHA1a%2BSx1503iIlbux4x4E75Q2e6LalEidaUMubzFzwZ3grDmgbE7oYIXEztPne3Nj44g1vDoo0HQ2yhYlPUiBq90sbcd1txjbu5d0iDZMhgbmXfhurwxq1wVlgXIDR8nNp3Afkk10odGAy6RXz%2F1Boed04EoN&X-Amz-Signature=43bd9ec31956de92de50ee480abbbd7da2395e0ad5089493963da0d6b6e18158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

