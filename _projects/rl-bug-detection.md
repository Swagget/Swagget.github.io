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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ASR5EQQ%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T221440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZ9R9YOCw0GDMatbjRuZP6GDo0CppzGMRpzf0%2BYX9m5AiAKy5m00VfosJNFA8S64GEz3OwsJWS00DeS88L13D5VZir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMr843qtkvwupyc9eEKtwDPRRPS%2Bk5Ci6Mx2vhaClkvyYTrhXrJRhCu8UF2jGKa8Helw4CtzwbU0sfjgoERXS8cn273dBYbAGHxJ8aDT4bZd5o5N9iL2aaWrmOBeZChL%2F7DFT1Qyp9Cewp97oDI%2FwAnDygxMMWBte66aUsCoun4E1HC5KKU5Ka%2BtYdGFqnIviZm7RkVyBKElfSrN0DQ%2FK9dXYvZ%2FhZL7FekcsetB%2FERI93u4aWBhEpxbyT9s4SZdGkCULdMOYlNRnXH%2Bp3KHBONDiod%2BpEoMGTfkPtkrs3jy%2B%2FAxs%2Bwv2rfwY309%2FP44HIp4qoiPZYphaYr7AOCN%2FpY1FnM2jc4IVt4%2BUQNo2Rzw2V%2BNgfClQY0vmDK366I9%2FVzV%2Fet43tOKdTFBnHr0U7nnOC4Ncd%2FHmrt%2Fvwg2nO3ACE0yPwdfkl5hLk8rehnGoDMaz3Q0WnWy6226XkT%2BHiQCmnxsZNaif7N7YItIICrVym6in9VZ7WIiRc3wzinH2mbcLn1r9WXwnuZn9cgCgB4eAh3REyi5MqliMKeZyeTk2zLRxi8x5qtyo0%2BeVJqhnSC63hOae5M1d0J8GOlq0lXazfvozxD3kOPHEhbAtKC%2BVlxQr9tUx%2B2kMYhVetBt5NlYE0KPibNp1%2B5yEw1Lf20QY6pgGMkkkNh%2BsW%2FA7vRW6%2BwC%2Bxi2OarkUsujyXjAyW8sfZpdRCnu8%2Fp90DU5ISdvdfferQbzO7URAUw8MoSDW05c5%2Banm1xW4SHqfaExOeDcaRi9IsXrCSAPfcnd9jrCUgSmiPoefLwtGyyb6D63Y1IgGK94pUJ0%2BKn5tKjA1Y4MJJ%2F4%2BA4mva4ktueFySKC3Cd%2FxIbPQNxNX1%2F2ykK5KecbDbfUEvsAYG&X-Amz-Signature=9599fba606fc2c32c0a170a375a4a591c4e850b03fa0bd8d6923420c35368790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

