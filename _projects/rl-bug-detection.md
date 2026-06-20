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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EG5JEHH%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T132122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCuKVFVUL2p8kT0KVHLYsjIo6ASIO4smaO1c%2BSDx%2FMKMQIhAKtFjQmZwmM58%2BVi48XLJvWXbG1Bn%2FUJME4i8qMlPajSKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4JKtSZlk6I5Bicgsq3APV32h4ESsxE0GbEG%2BICZYSeAe36%2FdFyfggjqitevCkhHf9r1VPd7QmZHesKQw4WFF5tYLo9ATaF6vnHfLkgSyJCFNAYcqy%2FJq2cpjks5mtmfiVK3QdW90HTZyPEpCRMWSHrdcVanvzu1P%2Ba1WGwaMt%2F4pKLKfvpykLo5aBGIC%2FQqjUfZ9zpZvjLylO23rO4k%2BpzGxYuwQ2OoKqz7bdlPst95TgQNxNBTrSmJnSiUrhCNYrCSr7mOLzH3iD5yWwS8Ru6od9KiyoTw7c04qIMJ3yZmU6zNUSeC3v%2F7T0aJNs6uQbE849ajTV5IO%2BCHAkrjOS1XI%2FlT4YKGSY2xgJoHML52dvrLUsZIJ33yNx01boOaQuWACo9u%2B7%2Ftw3hqZ2ySNddX1EtAXfUQoCPuQsL4gnQTDF68GfnkPPUNfD%2FJmhDTVvuyd7XsEq679hSW7qDh4aQI1e%2BWTvCoz80L2SGMGTmuNhuOjVdzZ1V2x8ldb6ufKBfuFoQ6siYPmNmVMh06qy5wdfTZ2vaKtPPTvBpCwZ8h1a03U%2F3N5i0AynlbA%2FXysrTOswQ8RIiFvATT9ZtJYdLsDOXWZla1m7RNaqUQzKTYc9pWELnAVBWaqG3qc7tdNod44THDObSOfyuDD%2B0dnRBjqkAT6qivl0PkOe8dCQGRN%2FtdmMfARqTIg8CIWH2zEAWlYRHJUjJtNKpLzTIpD7a%2BvgLenAoSh15cvZgW%2B5%2B8sWodC0Jkr9AoNhRidp7t0WmwOt2jtJTl0Z7xyyEYnwTukOHgPL8ruaYyoliCMKw1MDACtTk9SR3enaaCJSdM7VcSedr0Som8aJtjSXD6sSCY6miqZhRROb%2Fb97JaPFOtn73LyQhQ1m&X-Amz-Signature=0acda556fe6c387dba3b7671b5198fdfa41d270fcf9021bd216e593e25de6acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

