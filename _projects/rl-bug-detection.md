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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKAGJRF%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T221238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCh%2BNAPSAQxWjIkdTvThSSHLg14nE1TSLludibEE4y9OAIhAOah2VuxiLTbFEd%2FpxMDRnjrEQuFvZwBXMIPN9Z%2F4UjBKv8DCA8QABoMNjM3NDIzMTgzODA1IgzZhD8%2Bbc9ZqTleD40q3AP6gRnZsl%2BtMDKQwacnB07sV9pzaWJlsjn%2BTe80nGsppp9qlOAYjFL8rYSTYbF6qe9%2FNSU3UAmXZIKn1O6hJU5Szup%2BF4ZnkPmdgQ9RmAV8k5CaIIkNSBJ0ZfyccoybIigdGBylYolra3jABDQJ1KGVWPOITzfzSUiTh3HgTOD5QEQlhm7LU8HWk2q%2BCGih7AVTpLO%2BJkCuz9Yn4aCVNIOUD4%2FDMK0wd%2B%2BL491q%2FXGfz0pEcPhP8%2F%2FdhOJC7%2B%2F5GaIqltpu7RIW8WM7Whafm093lHSHfwUa523mXGcAA5hKtKBVUnQmqDGt9zoVbGstMVipyfaSscspGRH14ShOpeAxDrJC76FK6ojLC3TiXBe%2FLqEtJINmQ%2Fi%2B6wt62WDBM8%2BG8n2Nq%2BYJG2FUSuWbpmFNTAoSY1HkiYu7RgxzrQSOA%2FxO6mNGyFCOrHv3L2iK963eLAgZvFZbVSKhtuKqduJipFg48OGCEqVqCCWVlGA88WYbYp3tUgKjK7Ri592oCVJKfJnciUZfQQESnIoU8MZ%2BC5dbq5r13iIy1TvRIpM9lsw%2FNRGVx42e2UaRhwMLmsbNL1XbNpAHHtcuDGDBIOWFRU9Ca46q9cOjpbfvu6p%2B2NoyPXpwiPXlFtkedjDTlrjUBjqkAWHbBZhFJkiqLuGnDIhfnzzxT%2FJDxH8fkrOCIkYUoDx67FckUUqbp476o6tGRBHpavyB0MpKznFYdc%2B450DEq2gB%2BcPjCNeHxB15egkt4A6KWEMwRRz3f8pom%2Bl1np%2BXUcqolJsE1HIEc43L39mPoJzfYR3%2BM97pYa%2BPc3zCWWtphimAUJ1ZTYmu1g4NGvYtbOGO1UOUPuiFX6aCGibwVxigwArl&X-Amz-Signature=eb0f24b817cebb73c8554794788c1d34bc56137fb58e64b11e87cc311390ea61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

