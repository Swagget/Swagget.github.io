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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RKQPEES%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T224929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC4rrUOZamIWTfUgZM5Dh7Z21ecjSN1M1f0qw1JFb7ERAIhAMU6Yhy3WiMHOUnTGE1%2FG2rIxR5SpenFCz7PF5saxXITKv8DCDcQABoMNjM3NDIzMTgzODA1IgzcrorAwMtNGmlT6P0q3AMI%2B1XOLP%2FhuO%2FgyPL7ZQCeEkkYTvbbWX%2BVqdSu63XGHfd9tuV8DJr19Cx0OyBzDJiNhfPn1sVEvIUbCx8bK%2BVf1rCuERcq5AzgEaCdXW%2BpMRQhlm9Z9Snl6sQ6wzDWtSnp0i3rym%2BsNAXIALQcRd9FXNH4SnFsCcG2YXhN0zbsCSVG%2B4ys2WNBVLuIum4P4J1FbkrkhAm9yDAhI2QmLUJIpesWTdAvIxe1QV6VH1jiZpryoTtectrOs7Q79LbGLJPXM5LR%2Btz5ipXa1sbLadTo1Nd%2FbeR9gL9o8n9ZZNooqzdOJQmxZycFhGlhF0o1eO3j%2FO8Awv02T90rII1QiNY%2Fwj4S2zDV2Nws5DjWb2PIXjh3DrzohJ%2BomwYizAG%2FP%2Bi1cCNvAh9%2ByV0Iq%2FeioH9FYWIBCUdde%2FZSfGvoXLQTn6%2FBOXE26btqht35NbyPFcXRZijdSQfFxlztbKdlK3oNSnKh0iWyvN3BK0rh1QCjTnDwPuTO8YknlQNBKP7O%2FmTp9J2evFz3PwnJn1norzSncDGGq%2FbYTFfcmPGs4zgldzhugNwXDIARNomY5rqjFSi%2FGwSRmPcywcjklCz7ta7F7yydMubpNeuXqOhQnMbmIIGNnLOUJgag1NmQ7DDfheDSBjqkAUFdkb2d2%2B0M46eQPUXeCu7bQMC3wS6bA6IZ0DztGHVkGvVaUNSoLJNTclWeqbUOLMBCaoDSyoPYGPogj1rh4YycWM1dL285qFxEma%2Bp9ngdnCvKOUiWW1kUbwyIXWB7XUoAkyM9k2IGUWMEyOZuycN%2FD3c8um6rlW1pQbMMHlW5Yp6VEOSCK3k%2B6gJUvJCd6%2F65MY8SjVOFxwry3dZ1vHrXe%2Fu5&X-Amz-Signature=978ff52eb5f3e5625edb2fbebade4662744f2150ee1815bfc18badeb8c88cfc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

