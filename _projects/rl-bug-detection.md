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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2MOSER7%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T002930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F9l3Uj1yUqbd%2FPl1OOPB%2FOkr599HpYLIdkbKzS2pcUwIhAP8Qtf4VYR5D%2BFXHgYMpto9QwGA1iZ%2FiweBYgEORkfX1KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAqJ4Nk0KZPdlDT48q3AMN9NFCtvqrjn0oBdcDiaL0qeUnWFCnLj2vgqAQx0Q%2FgMUN%2F2C9IZflghASPcqUKvChki2LgS3N7e1d2CDsfK2ffTy%2Fy5BAKrupy%2Fc228hIzVrVQ%2B0J6YVBxH6tyk5ik1UjVFlPwUHgcbYlH5zfSw6c9tu7X4NRf1UPU19PhgXG6rOu%2BchPK788FhjToBXwXi6mLHSZW%2Fc%2FN%2FJWp8hDDMFfYTQMhZoNX6z1dfL6sResP%2Fs00HZnxROCFo7wQBJpXoYYPoIrX%2BPZl1CDm88yj%2BYM3Up1dWwF4yyzMIfYC1hGdkDnTG9AwwJg%2F8814vR3Np6TCB9okxSg0F37iwujCZcoQCATlNUluFGqciSzITFLG1Fi%2B2QDne%2Fl%2BHjPJq5zOE6GzWrN9tMLaZdCObGiG5430fJ0MC32BFj5RlYENPaHHetWsveNPpgbk2bcC%2BuIpfZFWWZ%2FjHW5DvX0Ggc9ulWaiGze8CEippyWSsAUW8K0z5YKJKEk7cV49g7%2BSIBAqB%2FDBx0%2FaW4EIc1SfZNpU56FvMdkNWv7CT2qal7X2QdYqcnYbOHrmT%2F2%2B1zISwq2mbEKg%2FEPe2qSXWV5XxxU5i%2BwWDP%2FFHRfZJvwxE4T5Nnyul0XKvIHWiMhfhqNjDCmwqPUBjqkAQN6LIM86lhSoGBqt%2BKmp019zLB84rcqnh9rCgw2vHk6uGDU9Q13tD2ajAFEs7J7hdgp2Ud4%2BGrIHTO2K%2Fsyu%2BCICIB7Ge8cVU5lYn5Ra01%2Fj0sl6wODJfzpv2PUHUyUJIrFoSmH7t1e7tKCsDL3NKAIlnwxUo6M5xIGKFpkknlAkdiPsUAIbH3e8tKULGj7UBxmQTRAd4Nz04yo5CAsB3WRUxkE&X-Amz-Signature=e8f80af27908d67dba41c33b00025ea45822b0ebd9de892432c33bbc90cd2175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

