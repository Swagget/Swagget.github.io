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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3MMDQO%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T113716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDj0mh5Q4PBgwO%2FArPjktWbucdNURjY3pWPeMkxkzASmwIhAKF2MeP0lXJtbTJWGM21DsIJOuTWY04DD%2B9%2BZQr7iewUKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSw5XU16t187aQD7Mq3AM1G793B0b5J0qz7GLSXsmhwIq2PKqUEUQupn58m1I98711Ld0rf%2FpSc%2Fz93MoqHG7INeHxlGLGAPUFXFZaUTSTDY7wyCOfWlDpzV2FBPNSV3%2FjsuU%2FqEFuWLcuTgi3oaykV9g%2FoQW3OM24JCc2XMMOiODTbfHKVrfnhRwQqkcMenduwNbOl955MZhZMvbt0oz7KApspzoGHAX%2Fu%2BAr2Ih6pYEmKgzoJbmi%2Betcy9W9s%2BUhpmXm096IwS%2FDPJh9LkQm9qwtmjtd1XuyR8q7fF7Z8mJpzUDi5fQg3fUiNFFiP%2BvhSTah3VHv%2FNnIjOVQrwey2NMiY%2BvjH6t0uYwePeGCZcsbuIjO7rjIhLnmNKUKWL28KKg4iFAqIJAukemZ76APJy2c7tqPWxo7UNGGXeT16A6t%2BxP3Ji0Ws1pYomVgMt3bb64WBfYtczRGHfkX6GR4QoIfyFrOm4KWEuY7yOs6KMyWN1FTw%2BqY%2FOvp4OBBdVXc%2F4hlmBcbF9Q1oLT5szo1lxnCwgm%2B9WQScysUxnHfCW6%2FmLIrbmqIWX3V%2B6VKe8LpBhQyLNNOtt11VJNL4Q%2B5qyOkBle3lxPWQK9dfIonm0scSFrQ%2FeyQ6Ng80piujRjnJz0uhlZ2WZlzujCNit%2FRBjqkAZsX6u4RIOtfQ8xk8Ajd8SdvMhttvlDVVMrBpDAP9P5KQN4x2d1E6s%2B3fK%2Bx2t9ojeTDTbNDXk3%2FbSAm%2BCqEee%2Bjq6TojyIiQwIKWf0taSqqCUoEtcjFSkVMe5la0QRsdfIYZz3iFsld6Z8QWsJ7FLyAndqxKT2RVjjfEAFCeZrWPWe7Txr5125i87z%2FgaMFCNvz4qxs8iexC6heGfA2RM5eAGy6&X-Amz-Signature=92ccf66f2a7fc2c6f8528b65c6ff5b7479024ac2593158ae77d21079815f331a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

