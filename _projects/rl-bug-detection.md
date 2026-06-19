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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE4V5QQZ%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T170855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDezHbe1bygPLFg0WzXaFTJbf4rkHwb2W%2FCprSonRAM1AIgQjw27LxD6imnEvSNn8uY%2BLo%2F0buJ4SvLxE3jk0BiJ%2FoqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQyKeW6D86UW5YAHCrcA%2Bt0pz%2FFQEyjqPaN57ATcADmNSipAHDXhCvhIBmFW8jAhERxxHq9C5qseTeK19HOGDpvWtaC0cJonjms9vLTseUkQ%2BVKZ5GUZpSaW%2BnwpMD5vmHhqIH8rv6sntmCdMAhEFzwjLnXLFtFmr97RD3xhS58apoHWcoiCF8jb6Q2ql7JF7Op2OjZtdTwSEOyChLFk%2FBoyvmYOUnOq8D%2FJG1UWmfuqN%2FETXg3Bdl9KnA1DH8c98CMd7o7Zek2gm4Swly8tVwLAKM0HAnJgDVqw8L1gjOZ022qsg8Q%2BnSlOzzbyLvMSOGlXT2NgGbsLWqsuU8pIBj2zaEq4hLHDFKJTKbo%2BCsRdVeYAI0J%2BzpvQCIMWbPPFY6g%2B054QLHC0KWIAdCHZTAtzg5bfxxED6tZAxrG1PrA5tZYVH9XolZc7bYOHRq2ECZhBk49rY2aQOGrMaBNRKEElv5L%2Bds3U0FMKQFy%2FIx%2By%2FurpGKLOUZ%2FgRzTnOLwQqhOlRHQVGjTu0tbF0pbekgGabJN6NUBR5vveEGvBB9BQHjgaDkHeTt0ncRlzCbYASia9TcsVyBROWmRxSkq07ZKEzhgfr59V1etRPG7KfGJfBJjnKzYN18XK9Eh7stJOxzdPuy0Twm5YA6OMPXi1dEGOqUBYmAlda4cQZIu2ZMTgbL%2Begwh6VJenWa5SJvY5iYEry1SQUDJQqXr1YcjCBBMSZhRyUn01FliMSAGmjT%2BZo0lYJlo5%2FHBOhfx6D8%2B1i4mqw%2BMcadmfKRv7221Q%2B%2BnMQPw3Vk8RhxxqYH55ZRS84K9E3dsmSVApgbjWYXYC5Ylb7s0o9emKylNljoxsEVf2hEMdoh%2BJ4k3d%2BUgqW4xCfiUJuqJUFm5&X-Amz-Signature=19cef5dfe4a5ab661b19131deabb740c5f962df4109f0a717faddc498de3ec97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

