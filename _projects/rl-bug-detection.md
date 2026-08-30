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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC36KAFW%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T055940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe78JE4sniR03%2B1M0xN2hZSQhiu4%2F4PiMxyMjW4JYS%2FAIhALDYZgSXSEZUgFfCri1B2YTwSGx7E0tIxkM%2BorvkM8tkKv8DCHcQABoMNjM3NDIzMTgzODA1Igxp8IYcA1RldJUW1fIq3AMF43an9is0lZ64q3TaC%2FXnknUtTy0TwatpFUbDWaEM9IYaD%2Bgac3BOK3TlvOivCz8%2FcJJZYTw0C%2Bkotwptc4XzUxByFx27pByTd0Mv%2FsYWl%2B30iV3PrV4zZSs5K7Ivrj9%2Bk%2F4OKejUSa%2FHZNog0KJCcqJvK%2Fhg%2FGbe%2BktOaPFWm9Di48jU9zaaPEjIPLN25pklSbjdJ5NgcsOKs9V78q3NHQ64U4F59Fk18QkuM1huvrVTeNXJVC8YI4qj9HfQU%2BPjllGMWHVt7q7fEUnKuwid0QJXltBA9xbRVy1ZOQBDngd%2BF2WqjiY1PXBA%2BY2Z8wjAPux2n49RipDyahdbEoW1m3dBr2QgZY0bZFGmAh2J8YiuCXRWQHWCPBoDnNn5%2FhhNNe4R4lE%2BvYJx1GOpypaQXu6ETqDChAskgAiRC6jSpm%2BVHcm6Y%2FZZBWfR%2BfnXG97xgbfD1x3OWOqn2DI6b3SgmMWlUM%2B2y0ppmtLD2vyffDOLV9upTQmrABlcqjqYOlhMeF71pj8Wm96N2%2FJ5bW7rKkTqRvLkz4DPoSomG2wRU064y4cVjNHXaq80s0gfH0rw4UI1OmKq23JUnim4JhEUU95Fwbsv%2Fgi3gJj8wdbj4Yxuxk4%2BXRf2h0tNDjCS%2F87UBjqkAfHgIjGxqvYWR5WQ33Z4nJroUnRR0JTuPOyhha7vkQZa3FT4n2cEr6q30w7sohv98soF09LGjrWW8pV%2Bt1gSxfqnVRn62BuG%2BZGVGr9Ppm%2FnQad1uHUN8qu7EGqNbw07bWUqyvcRX2ZvJik3dsdZXF33NlQXxsk6uaUMPuKFuIzHMOmUvtoPqVyUv2C%2FCuD1QB8dAbgQY6WD6sX3KTOVjQpuB5WY&X-Amz-Signature=408938242322df5008ec890d981993d9edbb090bfeed6c690fd6e350c9c0119c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

