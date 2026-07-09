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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYY7HWYJ%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T063115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAPuE7ASO2lVnYnaav5jewLVlO9wmaNZDFZFr%2FgLNd8wIga110prJXUA%2FGWUyM8kXbaB7T8IC%2FIN8%2BC7gsO6eLQW4qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJWDet21H7v2MVXlCrcA1uZ74ML5ELWE99GcYBobZ%2FLd47zQPM7sBs5JVl6hf%2FJDk2wG76piUfiywnlQgWN6KrHkOvtSgZAVw%2Bg0nX%2FR2OVdK8kUFw3Y2pDA7ZzLxkChUCaxvmqF76TbBrVvoZv8Dv20htt7Jo4wdNZM%2BwCsIuWd7kdjdDCIJbjf6kVRGCJ%2BkUni4YaT8AtjlN0%2Fs8gV0ReUOZCqW84NeUvRR60c%2F%2BrC9GG4YuuGN1dcJPMjCeN%2Bas2PUz1N455RiMtzMc4BnHRos6zpNamLC%2FQ8TPJ6G4YM0ycTRFok1VL6B9DIew8sLy0EC4zSuPrw0%2BHG4PogjjcdsvVi9P%2BQQu2vFGigpiV6Xb56G0Y%2Flkcj2of0PqRNw0ySQKbMACk3x321qUl7xkQaPIdr2OtWe8IqrmkSk%2BUeRQkWI0ftkSmR5Tt8HD%2BBzVxJ2cG%2F4j5yP8XUaShbQWwSXbh7VUxBhYdkSduWA0sngcibzjsLuyT0OYsZ%2B5BgpkuI1VKvk4P%2BTWJtL0iUt0W%2Bb3J9iucsrCzaTg0MPSgpjwIjBYvavCT6idtJskviZXj5W0NCJMWcaUw69BJUzIIgl49VEZpL2OlKEC3mOXf4F9VB3TCUjRxWVTTQOJq80F8B8mSJopBA6f1MIDnvNIGOqUBwk9QWmaMSTCg5xqIfSV9DDMTCXil0eBjrvLfokciC8sS%2FrClllGAqQ3YkhAKDkNbhjysqKd5c9vxG1mHFBK71uMgL4j9TlN26VcdeYGWWMOZnfBYHHptVzId%2BubT3TLOgRRt7ibyE%2Biq666UbxNBOQP87gK4IcsJlUGAv9c1hcA17ZCkZOX4nb2KSMIHj7ZeRCAQqhLqqHcAqMRHnM6paH0EyPX9&X-Amz-Signature=8a12af84acce0f9c0084198d08164bee48231f2700cbb98ce3c93a16113ad3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

