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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WE3BMUD%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T140553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIGCx%2FSuR%2Bivt4PeHAuOH682ZfhED478g0IFBAWxW2zCrAiBbxOFuVzbiTDx%2Bg72RFiAe%2FPItwlRQm8hrClTIwwylaCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc2vwi9d%2FFbDk2YBXKtwDS%2Bm966wn8nWESVw4Vj5lQF92xxJw6PLOGgZC6Taen1vK4ngq7VlSdoEgSpV2QtxEb%2BubTDZjEfsvZ4SJfWMz%2Fkmn1bPRdKXqDpRoGa3kScEwb7lS9Mg3Do9EpI7ywKg3lCTaaF8JtUBiPY%2F3VnMMd8GAQftQzOcLqwXz7Hm2ulfKP7IVjwQyQJYY5YF9HCsMnm2xydV6dinDf5KbEYynQrZE0DOaW4pYlzXQLgAmnK95EYaCSOC5tdscc7rqx4lgctzeyiETR4Bd1G3AXoyJ9n72VJPzNiuAAH2RWvT1vTxk99WAhfeZSM9uHMYh49j9Nj1L0r%2BRcDAzaVPmN8RObTxhmye5U%2BT78tYC1mNs0dhNkeT2bjzpZ6AGoR8Ush%2F56W8nzxvv48RUkes6JAM3H6Q3WMel5PQfIEXJITKStpp3bp8Fey3zep6xYZ7FZPKjLDB1I426FOhuiQrBDl8Ikr%2FsM5mcsXpAOF5QJlCBEOw7Jba7QUUuV%2FKkfSGl4CEMV9%2FbMky9%2Bdwd3KR25b4v6lZrQQwmWKJqKNXa27WgkS01uJy%2FEDtxqv7gzf8Ne%2Fe6xqt5Gqu%2BuJQ3CoH9P%2B6ygHhJqMTDhMXXL87s4IpqulzBQBBJZLbofC98czMw7e370wY6pgH%2FjZvtPAjYyBmCm1z9Vi3DU8u8UKUtbUPZmsRdN4ybgoJbAgRvKtCSiFFAPe%2FBHCopALn78IdDXjys52arxeDtVE5w9vvWVsVFp11GsBrdcaWHTIfKyYBBYZeevkdz8HDQoS6uoQpfVF%2BPQP4bXzr955t747JmjnMwF1bQ3pgljKrzaWVioQfTbASzQg7kUz8vXq6M%2F6HRzq2Q%2Fs9b%2Fc4nwb0%2FXs4k&X-Amz-Signature=138b2bf392101585970ecedca4a5794381e34b9b51461df05fa883b809403954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

