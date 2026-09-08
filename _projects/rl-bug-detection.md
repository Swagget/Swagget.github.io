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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVKIVUZZ%2F20260908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260908T063738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwMNsKhjnZuNTifVEwzXjgc0mn7%2BPkm9IY%2FUBTwpiOyAiA0%2BJtWrfIzRc%2F8o5fqAJEwiY0Qjh8hxvVULPfHXHbvbyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMmSa4RO43vWo%2FMa5IKtwDvw9eUvYXhOanb6f46dtJclHG2Av6WAHE8oth0iQ6Mddow3nMsAHUwnKF053SojEKQwG2hqveQuUIV7%2F2JtYKIzNMsfdkggDRIfjtDHP7jta7p6pSeQRzfkvzpe9Qt3%2FDIFNnWLYYdRtgCAKSYgJ0BenfJciEs6GfKezJryWC9%2Ft30VwEQJcrkae9tIHe%2BsTTiirE1nQHwWy4qnh3pD3Vp%2BA8jSq1pM3UWca1jNOEAVfcolA0LUHyEkEVHyWYRKPzLLXAt6hYwfX7aWByo9NrmQxFqAnKbcU46ETGL%2BhFQVNcdIoGBjZbYhCgxJbhCIKcnc2NlCt98BFfp8R4hCzxyO2O%2B7Rz47ncg5EFltLn5%2FEticBTyGzDQuLjtbTuVYb%2BLdblnLsVKZ4O5GY8gXIPdtEnyj57nzYFXGxD1qESmaSz%2FoJnOd94trP9uT9XuP3LC7eHSaiZBJmPCwiyj0FypIJGhzfdjTETgvF4dj6q0XqnCLJhekc8zv826bv4B3yQOzDFEdQh8nB%2FOA1fKADXuk5fdFIfjHAsW8RpE1atjSOJwPMe9%2BeQbOSHcg9p21%2BzHtnSZsrL0jmdP0uWyU4mLl4VNxenIKbuBZ0FSBPSaQIjV6hK%2B%2FgRtL8hJ%2B4w5c%2F%2B1AY6pgFUfKkXjxAH1w9g6OHtg%2F6J4No0jXIGucMFzcEJjG1cFGZXQioOigZldoO%2B4BT9%2Bd4UPwqXRnb%2BPlfr2mSb2qnsySuNTkAHSc2hrmPWFcE0Y0Yb8KOkiYllbsr0vFsb4LFiGZUaoPkv4uk%2FCB5alxSNiHCi7dfDMa1rIC0E3CK%2F3%2FFrRn5Ip%2FJAqi7OAquWoDX3iVFsBb9bYl4Y05mW%2BrgW2G4MGoW1&X-Amz-Signature=63ded6b890e07b30aaf46cecb09429b26e8880b7d988c3b6584e74eb6e1f441e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

