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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNDKMSCO%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T141956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCupJg68qK1YBY5FoAbevwaKFNq%2FJRs4eo8gL2oxW3ubQIhAL8g8GtyBv6ZSjvnTXG7QDMrKr4xPBNokdrc3O0UL4weKv8DCF4QABoMNjM3NDIzMTgzODA1IgxsBmqafl40dpQStdsq3APRgp%2FDxD0NDf4PZCN12q7ajaG9fVNPS%2BXkb%2BErpaC5yawFpEMWd4Pystc7ms5UaVLqikywtsSAkqe6dNELwdAFcWpZRnkEmWaANgxpSRQl4ckCuJdUwzMYTvmDlJdT%2FLep9zlWCLlu2NaUwn6AeX2VCSFGqUMcSyVzmP5GkZb7luVi4w%2FXaoJlxfvHdzcQnK8UebTNp%2BNoUk70bwiPm3i9xsD68sKlUuu9kvKQfp22IZOHUWXyRKhwZxIprpn0KxNAinp7OW8NgsNe86TGkSGiDkYDkCfzcWTYgQLp2Wv9r%2BSTM1JxwQDoVYYvc8Pt7kkcPIq9ZVZ4CuDj3ocmIstvgy0cJVunl1EqhHdMCbPek2p02sZpVDSktwCrNevZqXjyy6%2FrVv6R8rCPKyvWErS1HteD0Qtu5NkqwKpwoujmcGZ%2FW4P7PAw1wABs6D3XPaF0iQhTlq%2BAe7G67xwUhzVmKWq11vaAie4j9B8K81oqs7tBNQZbQaT3N76mzhNDFTovTfgTiDCn1Kwfr%2B9ROdcPzY%2F1LV7hPfbnW4ejmMxtwqpQrPihn0PWJZfZsvoiCJ%2FBtzWy9CEefN1bcBBI%2FGj3wws%2Fqb1t7YWe7uzfZpZxw7QeEvUxEGjiNFLpPjDit5HUBjqkAb8Msj6HJZGmghS6LA%2FL%2FPuyhuc43KLRxIukUqQZ8YifuF5gH7Iljsw%2BHYGzxGzTlA%2FqK9pbFd9SDy0UmNHFdaDWrp3pRwveIRuXf5BiVhXtmq%2Bxe4%2BexF0Tctsx2vUC0RgPVJJzGOSRGvJDhmhLJIRe3yi1%2FOJAa8E5AaAUdyU7UPtbqoiAASh3nBYQKja%2BhOwKAp7hWBxgdXmZZjPYAEsCJil0&X-Amz-Signature=65921f2300cf1cf9f2dd5e8574946529af5419939a4063015ef411d2fe7c545a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

