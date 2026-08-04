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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NBVKHO%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T235153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIG544I0qK4eVilpcckqsYCGd5VaPMNFwgSmJj3vvqezeAiAWLeDkhvDTz0czyeaL%2B4EUSvAmK4uAKoE6W%2F2tz3tLYSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMee0XSt1eW1w9BnzTKtwD5Ae2WtZXb%2BD%2FrII098RlzVMZ5mL3l%2BpeLBxzwt3%2BBGTzW6InsmI20Jb2M0KuKy5m%2BEuK71BEgYeoSkuJZNeZw38yxGXDZP8Z2FrQe7t%2B8ENHs7Ffm7hGMF4neW0%2Bb%2BlVsvfU2fLw3Qh57u5FzTH7E470M84h%2B0cD%2FnNXNj5nhEqlQoJ5lZtDwxBp9BQoeZn5yQxktGCrJqFKFsp1P0v8jO6JhopMxeKhi0qrgn7KLdoRPpPNSi9EnkvmNWf43J47UBbr4MzujrwMjtZe%2F22PeefiSWAV6lE6mmhhDfrFAOXUyLF9E97tK89Dy%2FeI%2FjuceB3dDvXgniWM3E4f1CXrK%2B%2F9ROTqv6nXZ5JO8QWbPHvs0B1S0xqhLpUVPD5elfPZYVIZ1E%2B2d3xwUR7Ltuk9K20vlXj0az86Mf4xd%2BccTP5PWEYIOlnh6MlBCPFTmjgAI9rUjJGVHv4SSw1%2F6F%2BfJ9zuikCi%2FPuEE7Ymh4Ds0Dfskw7xMwmISCEeAoM3d%2Bt7f2uWed6bFTqjMd1E%2FUyXFH9iFwXQLE2kW4uINYkMivFoP%2Fg42Fdfz39gWGSQjDk62ryNSRKV81hbkwhJV31WXHi6H0OLTOhm3q7hmT6XHixQeR99zJQL48yRU4MwrefJ0wY6pgEzacEc3zXks1obwg5W0vdhMndGdw8YhxjJYkneKdDQo6Jm0gsZzhZze%2BcqriUbUaT%2BMUaoFkGDgSe8owD8AkrCVvBx0Dtqfbb6kXeuS1r2C3k9Wntr%2F9Adv8p9WXcDgA7WpNZz1NctL3c4ovAc1qYFNRQNnGgkHLUtIw9dOkyVQF2DXQZ%2B8coHmDhREv%2FSYPSFe8XjUJReIyvtNmVmAPMxJ4Q9aPwg&X-Amz-Signature=4647febffcf75eddad80eecb4a0e2ed387239858e36f6c0baaf34f794c901845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

