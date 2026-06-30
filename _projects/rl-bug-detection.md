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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF254NBP%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T064248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjB4q3JNmzyGhSfpFhDwktVvaH26A8k7H%2F4hNQqEbtCAiA442aRJBX7PpYgtJ2VsH18IprhQ8UU%2B2JTU2g%2BASObmyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyqE0gdNQqG4nWzjLKtwDyhMkan1l6tlSbR5TFlx1Q%2FLpQHqDEMW8ZVZJWhXraEldFelNXSkQqqBtX38kZrwCsiE7IQ6ysetMnGddYENswS2PcHOo3sAM6Z83tCll3ca0qLKrraSCl7SCqueqVzKc%2Fd8y7qeHllS0FPhpcCQwYP32NI4kshQLG4YndPQ7qv1FCuk9r3zmP44Jev4uD%2BNgIKTupTRQbxmJYB3EXK4EnXiHQgQfNDs5Nh6K8F3BxF1odhDSCys2qfSw27TPqqfWF6Y0PckzgCB%2F%2BjA6A6A0n7lnrDE2nJUsbWdURPnku%2Bwxw8Ln5xMI7CevWpAWJ%2BipuYYCvolJNtpgMzPjaaYmi34cPGi%2FiZQ9MePqR6A4RzrFpOZzNysJQPgWsHz3Y8yDijAWBTJF7GS4O3KHE21s2MsAMmC%2BYb9NQcoCllr%2F0vEDDy5oqpP2jdoO6x%2BEFKzOa51fXw4gC6MqAXDVrEbizKosdL0RfuHNZA16t7%2Bow4x7wHDIocF7QZIavRcEn%2Bz2blnphxrI6t0nmtCThpaPRzA7TxxBQJ%2BH6JQUKPl8sj4Um5oTCNp485omSRJCJZH8sfxwcV2n5qSQgSTogFXt0nxxED03RuVdGewzzjGrTBXvd4H8OV0nRTkXjsAwq6ON0gY6pgFExHo6GKc7GPwhUxxF4zRmbQjfLPYx9HfkDxDKhF91%2F8LtEMNzObPpNCGHpoiBNBh%2FCHEtb7ikwSTOTc2yUCbn8MxedL0Q7mnI7TFKMWd4xNtj2EXntfJYOv8Uwa5fPhNTdgEGdOqHrX2blnWTeM1JUCpfdKXmSLEI%2B%2FzaCqSA8uJGzEHuWWJKNEfDRAzLipdmC7hVOds1iPwO5BgLUAThhYvDvHhT&X-Amz-Signature=367c883c91be219eefe55e493243b38b70c2926e70f207bd6f596030574cc91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

