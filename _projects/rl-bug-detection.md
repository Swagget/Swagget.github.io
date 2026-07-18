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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHKRYWZP%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOUvmU3Rt7jbtbwP0Y%2FdGBzn55k5fkzmKCn3wxBx9w6AiApm%2FfEes5OFkluzPYx8N6hD2zqU0oNHpId6mIx4d665yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMsk8qs%2Bm39MCi0XfHKtwDh0zO672C1LWNp1%2BtAe9bmuaDMoP4G%2FoBucSacSFGqJRPd4zlW7I5I2nkGHceLIaGwYBhvS068i%2B1asvocoaEA8ok%2B8ia%2F%2Bp27w%2Bt4HMCU%2BFV50sMYvsROCFruKgHsWmsWqcULUGVIY3iL%2Be1ZuHTjjxmXxdaJmXybxtl6ubo7sBSMhQq1b7bp9LQZKXmvdPmO8nbkBhoCDMxQMBuMQvRt9Nouq%2BvJbcH1mf0z1JfTyM6bF1%2Fy%2F4i0HP9CDNDsB87dKxLAjOHm6NJlpwsvk9kmiF6M2xP4%2F%2ByeAcAeI4M98zDUdBrvkb3Cfz67X5fTQWchMTF1l%2FpGNRWSKua1S2dLg%2Fxkx6ucY5zjIF8EMAf1s5z%2BLKcMrJkONlWfO76xr%2Bl%2Bc64v7qMgsk0Ic519k5gqawnAtWlIzNeZqRl7%2FR32tT200jctbY5asKI%2BAbb47eUnTniL0iNB%2BmSkCEcGRYV8U5HJW0jRgaeN1TdagYFkXrC8NE3B46wJO1a3x2NaWQOv5CGsqkjXfWtq%2BrC1AGn97B%2B4nRLZZvXB072uuxzYglcTFBLIMyjk5JeZJP1tfv0y7InlhdlNt15DN43qRYtuyDROjV9k9a4f7aUrzuN%2FT6zgjEMwnwEfsavSskw7P%2Ft0gY6pgFwr1bEF0vAd59rU057wuKoF3p%2BaObszHWTi%2BmYArwmGSriKGH95uDc%2ByC0GZNeZo53qxUw%2FYqiVfOdpChr3M3qc6iGZkKKaKU2L8RdheJ4KjSGXepDr%2FI0E2x6YQaxUdhNKRPBzy%2FRp6bpCO1b8Dplm2CJ3ug646gPykPq9ws0tqDsjog600cCPBbdJJbA4fYeQ0Rf%2Bp%2BG88UbxGH3gK8cvedBrJcg&X-Amz-Signature=e46d927f599d6c56de5e2d0f8b36a3c73aafc59e24ce853c949735bc601bf5ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

