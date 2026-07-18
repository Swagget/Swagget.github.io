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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQIMDTRC%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T100626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNnaazPmQt4zbQ4EgwRRWQp638eXNFD%2BD4%2FAor0rLrlAIgbchzsoFPstZwcL5%2Fz54NbZqQKOqSBvClSVpP1C%2FudtUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGKcNwaPnrJww2ipIircAzSxAQlTlRCzZpuBtMJ6B%2BluGVTdSew7tM9HARjoKbc4pyLwZ9NhfC2Dmj4JaD6jJ0paeuNF6a5jG%2FugmQY3SdpsbMxsuhP%2Bs3YKar%2FdAEcaL9HL%2FBQ9Wb0IQbkKAL0XkpN5cPn%2B5xCus1ziHk1Ntxfr2YbFjkAiyljGuLgs3%2BgZ5wNfuiJepmre12FEmFQHeQveBHJ2zzkD0xWtcM9D%2F32O%2BW%2BRmhS2zGdWPI5uokDyl9vGtOSzx%2FbTupjbe3lrAYobXIlnJHq5amccvF0Rkbm%2B9IRepbwcfj8OfvjYLdBJE5eGXVY4NH2j7D2BH1hSAsQ3NnsvyyJPN5qtVdPp8iqxJ3ZUFFnudGC2yV6YrfMyWJYvSKLYjzSfXw4wbMkDcdunRKarKpp5Gc2L42hzO2GIQ1SPz5VseFNTXz%2FXPU3aN5OivNlyyfmfhZXjip6PAdlQZgZ9drc35ZLxF1VgV%2FI0yhllfoHQr%2FFCoq5iI4t0Cy8xh9kvDBa7H0m4MvcvO9AC5Nuf%2B6O%2BL7PljcUL5G5NZNFhEgVfPyaAA1bdQVnu9DtqePSb9qt7wkvU126tCA3JnwP4vW5KpweY8ILcXTuXuTTHB0YQj6odyHB%2BdbGUwpXKXuEGOK5NFwBZMM3x7NIGOqUBYZ5JNzkxtk04U6vNlzt11IqH3LvDhO2aT57%2FU8iDp7wn1nVtu0cZMkcsupzSKE2RBf6QtF%2FGmSMN8%2BvtBd6RL%2F%2FnopILpLqozQfp1ygkq3u9XDMh%2FdGYrKdK38CsGl5hlxBOBaSevbBcVVE3vOQseXxpgLFWiugL8yTgO9hSliyCm4S8Q1rUFW0K0V9Hk7jzeb5qbJkjdYbEYaszvOseyPSnHNOd&X-Amz-Signature=62d256b11aee3e9b8c7abd2570d855cef68ac7757573ab81f891d4e678cc8196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

