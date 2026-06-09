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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7LNIIHL%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDdM3ENn6N6sNFNcLdFH8EYI7TDJ5U8KpslVFlhU3qkMwIhAN3rwMVQ6Xk7XygPnP6BUmkLbr07oikBa4vjub1NwruVKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnPlT2TmUFYkZt%2F4oq3AMXBfbycJ7luqQk59%2F3a19kII7abuZ3iuhnRkrueF1qnK2OOAA2aUbW%2BewGpsLq52UFqtVbLwxJcEcKuw0mOYKsg6V9bufMz2wtCMuKWBAe9Wwf8nufuUZ8%2Fghh8FWd4RXEkuGgbSMlvzcBxwVqLrhcUMpB%2F25RkJHu2w1w1jwjfmWcaDMj5Rf4XqfeUBPWuT4KGUytjKmQWSpWruxnxtagXuQ9jFDxaLP9VLRSsl1%2FNa2ynVh%2B%2BwmUNThrycf2Rftk91%2B2zbjQtT7OflDmP5FQIvBHJjKuJ9%2FLCbjEHP3l%2BxnOuWrNbPu3I6ELAdrgyEqKC02upIC9oQGPrz8mxY6R3CsPfjuHqCGyTukzwI%2F6c43XplRX7UgGcusuCkcBi3%2FV0lLO4LQtQmObXDS3yAIpm6qPGauTG6ytFhaTx2JaBQrPzZbQ%2Fcb4rYVciHqkVpRZgdffIkrHnd8oBQNIjTknGeAI1Gq1CyF2yaUBYG2t4A%2FwJMNLHNfyTe%2F2M11CQV8%2FlbaMX78ixboiLeGFiko140JvdKk5jZIQ6Aj1%2FKd8eNMyRrBgskh1ii7Y5cEfwNFqyE0slWdZTw069vP2%2BSBOlMcfYK5UbBPtosDhm2w%2BD4%2BN4IMUxOYyehxKyTD4nZ%2FRBjqkAf42rL0U7sMdvGr8sgZc9q1ptTudUB6g7lvipAGZsQ6nTi8UvUAECDiwuhJkKsX6rMwmtB4sYBipS0qcfSaLpr3TWKIzVMd6jIfaMBfNSaSOEhHVi9eUqveFcm3AkMTjvzljDXPSjPI3E6h%2FQcVYzUZDETEhBP7kLZl0OSnt3qHSpaMxNVujCxadaVFPPLrfGn16DSQ%2BSSHXDcXBGcui4SfpvHyo&X-Amz-Signature=a4d381ac3d0a1cad5004d3b96dd3f08fc0060472194b5470e80397eca605af6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

