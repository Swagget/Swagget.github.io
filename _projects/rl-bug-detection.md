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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7OZD352%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T142134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8TAuhYpkqoYm%2B52w%2B%2BVbC0erxuUnt1nd7Jwf5ZN6SZAiAUJ6S6zdSYTo3QP0DEHwvSYXT4We83Tn3rhDWqOt9P4CqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUKHLeVwzX4KLjtmcKtwD%2BQbev1kOKENPdqBevAXV2TmzBJpHR%2FITM4T8PfiIxcDUHvoGVufiiIsFxmSmD9QEAPCy6AkT2Iyibu4g%2B67LQjHmxxr4UOGExUnvfCVbv6Brap7HQONiSUNg52H2mUY8lKYgwBD52TD8SyqR1WTLJUfl1qyW6wuXev4RZV%2F7On1BShpbevC0fddAljb8Je4JzTwbD%2FUYBQiqpKTA4xIEUu%2BA4YNubXrkwBL62rznBEZ7Xzl67TJCfH5hcu5pNpROT7vTERDcS%2F8qoB3v7TbinCVSpDXXjc1S%2F6uwAOAGvRYIN1KWHaDtWjXiuVTyZhT%2BWfk3y44b4RUjE82GlhvaJh%2BgEjgMSR%2Bz1HEa5ztLvoRPpo7o5sI6NTo%2FQ6VEtq3b8FBtXFCXZXyooqkFXMClew5ZU37J9FYornLrSZsNvvHf3b90sQztcVTUJ3uMjmNZ5rrx1i3WqTDPZLCNH5iaFXToKgJSDGuKX%2FRC9huIKmgWWG74gb6s7AXA7ho%2F%2Bg%2B7oOh9lYH8%2F7hH%2FMRRdOiPes7YoVeJ2R8oo07RvAcmLOA1n5aLJke0FrV%2B3Ws96AEAcknCK1LZc1My8qpKjfvM46MubDXzgnxTOcBTIb0oEjEeZdSnHFruw1%2FlhVEwsb%2FK0QY6pgFC3WJUIWf6F2sc7cT7Wl6C%2Fblc3dwHQcoyGRcPlsJnpNtVeYwN%2FTF%2BTXrt7YkI4FqEGpFCj0taN63tPYM2QBBZSJTdE1jxJ8Ck95NMixBSJDbJzcyZeGjGGKhbm1YKeFs2MHvrSDhNYJjf48yhnL2MuFHZs9YAmlASvflO2O8FXUjge%2BtAFa6RHjlu33nXRjF0npX1szfeTRt%2FxfHnRJHrlGmgDtgB&X-Amz-Signature=1c7867a96bbd98a33102c653af0c2a6858d00c7ff0c57e2ac9fcc21abf92f9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

