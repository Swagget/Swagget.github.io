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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHHVPVO%2F20260904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260904T210606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIEc1MflR36sOKGvDa91xZET4xfNIDsmY7azCmQhwnh3JAiBZhsyoPTSlvlIYcWP5rWkTospjMJFebyDJ8wY65ZSHLiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcdsQcoBZSIeAq1t4KtwD0GpUF7fGE9j6DHBPytY2tmI4EoN1vnIpw5qR%2B6lUxzmSAEx8ZRj%2BA8Os7ADkqhAPIPGEjgpcgfX2TgxwIESHnXguoFiaYbRgBVc5Tly1LVgsk%2FXMmwaZ1rrdHuVPTlDRSUVjkZdvunD%2F7eBZchCHdKOK3hm453mzwLV0gIxLejJdQ2GjDLO%2B0cZFIBwvAYlt1BrHMR9dIZMMEKn7gnFWxStr%2BF9LAV3FfqET9Su3MHqiN5qWYj9gMuNO%2FhGcxxpRz7tRcJKEExj2l0YB51nBZXtnpZn7qrYOXBm9Wc%2FNXTb35dRMTLrcsCDdvel9tkQaTkTb9%2FA%2B47NX32GvQr8SH7Hb5%2FizDHNn5EldKCmg%2Fq4elqrndpUVy%2BhWT6IbLF8f8W39s%2FFDEZ6YG5F7QFN%2F7szp5y76jY0rErBjainosA3TNF39MCdSWt9XQ%2FlCaJfXAs6xyfmVMXN4EVmQNvsyggkTK7Kt9H9F96FL8l%2B0c0iUmNWVgLSbNOsI2NGZhdwi%2BUe%2BSSlpfFMAFNcpHvAF%2BZUuW1zXGFqfrtnncrR6qydTCFhB5sc2%2B0%2F2CBBixX2da70VUc2vUWwLtjNrE4J6CWwqtIMmG3YW7AlDYqSN6MWVQIbBNKhcz%2FzVJ20wndPs1AY6pgGKX%2BV8srTjqaW2wdX20vpDB6ABLBuIDqAH3OpDzXTyGCOkoEMAFOjEhfGG2o3U%2BPcnrSJWHNVQBLwie0z8LCg6kd6YQYxRYNsPXuA8CxTUr4%2FEiI%2BZuZftb4Wrv0msiPFJ2YzDOAILxErNxT62D5%2FllKf1QYiOGHHApdky4%2F4GzxqGsfLs%2F83Q0z9GgzpOPkRZD7BNY6WRZXNwBiEUkbfy0SnMOl42&X-Amz-Signature=a003d7446e7a7e6cd63d8d108938fb4f990abad8c1bfaab25e9d02e08bd00b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

