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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXFHKQBT%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T122125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIC5wJ0la1mPIFw1mPkKNd05TkkBil%2B4dCdr7HJngYG3wAiEAo4j9r51zITeYwVw4sUv%2BQdTRfdemrKJwK%2FkEnaGe3XIq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDF3xOYyv%2FfB7TZeDTSrcA9CYjSQKT8ci2Oafg94DC%2BGGWlWALuJOOpyHnYLZSHaKPM%2BvI7D6ZskYQYB0adRN7AXD%2FyVqoTutVCiOrn%2FXiZmU1vcgM9is337WRmNSKDdX5nW6mzhOiyoPNByICB%2BgMw7wq%2BEaiUb8eeWsrM4lPAMNkSpUvNqxNIAUsCZTr0WdkO4RSCyHXilbG4cgoKBCWhGiV97JYewq%2BQu%2FOBzwRpqHsZwRfOI4CSY2%2BnDB8mtEVdAi08ip3W0o2UU4XNjlqfHJ%2Bfw%2BgetaAp3uErzZKeqa03nF7eIWQwCdl6Q1a%2BVu6kBNjwN7m8%2FKguwxSmMZ2QnF8MlCHW%2Fl8kG4yfasl91ioZyBeP7K%2F%2FMyj%2F%2FrtXCiTMOmR5NEUn5JHq%2BiAKFbE1XavrH5O5PS%2BqVMT%2BHUHNxg%2FfDHc0urouhz0fXP6OHknTuooWw2C2GdIvOkgRrNDt68uAY0BIEuhHUYCHAkvf9rjXApgoiUMwrX%2FJjsfrl%2B1fSFHZvHzziXRgHqxittdHKz2gB1CmxubCIMSKQNy8aUGKPcy1VzlEo2Ybm5HbtSVxdug0oEKwg%2F77tKVnPHn9dXKmwH5VI%2BjNUcB0iNzDHA4RfQA%2FndjMFfLjTiPw0VQ%2FLvL3N%2BiNefmawaMMGNttQGOqUB%2BuvtFovscPknx1CRh3Y0b68fPdZBVbosRlF7WkqgEe2hNmfSZPNVTQaAK3Gj8PFhgbMcnJf5Li%2FeeEksFhyzZyER16J5qbyah8RG%2BBVK%2FQosvW1DKDiZClhoPDaWkDXy9l9SPIoSjdLOHDfp1m55NLMJMtlnMZl2N6g9g81XqfMHbhJ3vm9Opd5TVvpJ8KHfWVy1agw2spd7CNONjoO4OEglHVWG&X-Amz-Signature=2cbde50956ef1562bf235bf5a4d097351a54f668c0853a024c1f9ce965b84c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

