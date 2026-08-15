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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX4G54PI%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T140941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIHp9nS7znSX%2BsXydKTdgpe6cxghvkMcQkQ6%2FwRf5XtjmAiBUPoJH%2Fsjt7NYu0WMSsFUXe7ZKD337gwWmcYxPbx9jHCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMJPy5RQ09isKI0rhdKtwDmBLOKbq08OXtES04gUX1YVMVokUsljRkpmp1pMfTfha5RrkxCJnA%2FEtZ84A0e4KqGbjEa1AumFEQ0k4R6Z219Oyvzs7yjBDzo69KCTAqqVz7thC8584FsGkwre6hjK8qfqSHvmBJ82yimUh7ki2yv02Chu9mRMsdi6FtnMfKEFJjctTLiN3fJE7UVQRHRUkJC04%2FVmBYERhSLhc0mLuiagV1nPDOzSqoWWOZIAHW1kCL7mY4pw4Btf76EoUADa5kfM533%2FP330uqO4R5kbpFDiFyWl8W%2FY1V7KOKlzfwAsMOWDtMhh%2BNCobSr9%2FnqDF4QlUlMEmJy6pO0KA0010A3QPDtVQ%2B9UeX8vPuwUcH4TR574jFuZIwkqIUMYn0EsWpfMEQc3O%2B5PvI6LYUiBYxuvtXqyc0UpPQAaK8eutKqmG3O0g3qVa08IDlIJ0TOEpk%2FQTsjjaQJ0bKfT9R76a30%2Fc6e31IlMbwiTqMaLGPZQrB7Gcdble%2B7oG0utjj6c4l%2Fvn5frJxVfkSZUgT4yJcTBzg64xf8Fjo%2F80K63ZOhwNX20VBW4E15bWyVmSHPssxtOKG4BF9h1qED4Kz5MQ2SD36KJNlsnkriozi1SUv7ATKlyrxhaaiKwTAGLQw7JqB1AY6pgF0%2BQAapTKNtdklJEhbTjRA0NKKbafn9Luhclb6YAKjAbXlsbpG%2FvpfTDygRCQOKAjzInbkJVJqijcVzr8tBR1MgsT9KRk7g8Q6mcNCjPyqQx3vHFihb4952%2BFWoZeTI19cU3cQLPChBjst4lpZYdCF0mr%2FyD2R8NsXt4qFbv%2BPNBBdyHXwzVF%2BBgH2%2B0Ylqs%2FjJP7tXgeadfDXlE%2F%2FlYpecXVxv5ZL&X-Amz-Signature=bae2299fa81f6a1e7743b75044adb4b6b81a1e02a1f5edb05335e1f8d94927bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

