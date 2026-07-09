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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FGT77XE%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T203034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSZEY%2F7X96%2F6Xin5gn8IUKu4yqmNnWGvCtQ12IQFZ6KAiA52DbyWaP4VgyVTGKED1BNeG%2FAajKUGYN3jfOF1uVCtSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP7ziWMc2JDPVP7uiKtwD6LEagL5izMYZ4Ax4bx21G7Q1cqlFl%2FWD5lVBbJghvLbMEYAX592wdxNxYmGjnpk0jRNL8tvcD06F1UsH%2FKA9OdqZ8vyDigbNWtNKZyQ1Um2xOH9ldW3UlD83HX9DnEF1m2zPdEEWz6%2BnsSWfyfmMlAbSrJmTZp%2BlhduvWm2jH5c%2Bv3eyiGtvtRL9FPfa0CcgdCCraO7F2JehJZ%2BgnE1W%2FR%2FgqC%2BF8QoHMd00abOqpyhDHx5JCwJJvqR%2Bx6ihnJoy9OJarQoLYmKgCMiwWHCKyEJZhrLt5AZ%2FmGb8FCCnMpGaF7LSnjsmBhqimoJV3zf7A8Pxf2NxK0fmF9SiIZTuN95otyT9VXIwJOaUkzcR0r6Rd2gKliS0UhPzuFR9uvcC5myZhLxUke5yoNZE1JNXgskHwIp8I658XK60Sdbq2p%2BJbtWWn0nyeecQ3Yxn59rPJd2dnLLP1IKWzrvWsc6bS8AGOhWvnsqUQ6UtuH3dbpVrfRweCj6MnXATDHJazgUYVc6a%2BPMhadwYSXavy01SXuKTYxVU3y1BQJOpQHeu9vVIPHrMBpxvzn0Kb7uUc8inijHgxVi76Eb%2FRxOpF4ew2OzFBWwYKVRxMaFDZSaC5qiD0gpvSCmf8a8tthMwjdm%2F0gY6pgFbLJOsu3m3%2B8nHXOTFcXcmAdeATMgsI9Da3tCEANeCBuyLGR6VR8GfbVwhWxRA25cmy2ROKvAMeuairdId7yXFgMLQLfZULr2xXZuE1v%2FsCDM0hes6Ex5sUAbWa5b9JhwtLSw7uMvEdVC%2BzrygUEKhc81xXL3Law5zuoL9eMXo24KQTcNppqZ0ujlxdNq1f2bNUOttAgR3CJLM6Ak5UtVINXhNrWM4&X-Amz-Signature=461ed4e416446795add02c048a7e6842fd32423c947ba4bdfc7b459492d1a4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

