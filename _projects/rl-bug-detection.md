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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VPYDVO7%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T184314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHUubndRAHud80YKoLv0CYIRNtoXG5AhuXk9YRc5XsEXAiBPVIzlmVspqKLx%2BrALb0LilJ5qTDtwiOOAUeIAzb6OVCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjqAM%2B9kPWQKvl2BRKtwDjeYaKpZ8eSo5oomiZajN7Os77SUrg3qiolV3DXEJWlviXFFnsJicbQNv6Ogl51EpFcfKm5Bpsc65j1Nzg7tNiKrpbSm7peXEx%2F8UyWeoJ3nWfAGWDXRm1kSNh16ZBynaawr8k6eNkWNVDBUdHijOHZVdeljp%2FSq6brOOwyq9hDXSDIWg5OpYJv102hC7s9wyWr9FOHetzFceJLqQb0diIrQwiNcjIOr%2FCyMrIiZD2rce8oQHYNT%2Bcvb%2FVU3J%2F0nYme0bA4bNFNBRA3ri%2FxaDBXc0ZQ0Beqikejyfd6ZpR8Sb%2B93tvOVDLLd1hofzFZfar51wFs9LE%2BJf5kWlRfIENEZ6B8Jpd2XOYatTjrJbg%2BO23%2ByP9n8RMQX5OFjjXz1ZFz8o%2Bd5jaVYmZ7KjLfg7A1xWMeQ%2FEdVpTb91wdZxSuN2lnWkkrlhUeadA%2FSy%2BqSc%2FV2pTEpOkxSHviaZcvPxwuVEROa5rr8XW6Ev7g9F06cTTEi7o2hZ3gUswsaTelWNoENxp%2FG5EZrqbQoGTGZeiwifWfqhABbModceOFzDQofXh49eZFbAwscRV8YspYerTo%2F1N1Vk08yKbx4Y%2Bk6Ac%2BC5CoryncBEvDFFIPMqoXRyL6VS5eIbEubDLPow0bTy0wY6pgF7%2BvJ3ovPFlytz4ZUHC3INDx2dPKNSuXEmgwQ7LxqVeoTnDI%2FjQMIxp5rSV16NqlAJaVn9100osZtJAW4TJAMEgcsXANTJjhYA7QM5U0O1Y56FIJenHPoCBCuFhQzBdJFvdrMj76ad%2B5C5R8OgQnsgExCAws1f%2F5wFIOdiTAzJUDrY5FrrQTU4pMVygw40ceQsvJvDv%2BR5BBntCWwpDfQXmnIYslCA&X-Amz-Signature=a77bbea4e5c69b77370a782234a2532211a0adc5026c67cedaadab84b2c13e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

