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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HDV2PPV%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T220331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCNO0NLAMJGQzgpoe9CGA65Q3yHQdh9%2FrPqDSXOXnUHPAIff%2FDdwEso3dgrAfiXwG7VxnZ7zccYXwtuiSrHXYodKyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMIAuDkcUw%2BB2fqXesKtwDhet6k%2B705%2BuQoQ%2BZ869pZLOC1xHPNZ5vJC9a4fiXK8a2Lam31UWe2fxF9Y44ZxFI8243jOu2sRi0%2BBUpuedZF11l6KikR1c%2BLGa44iFvkrnAgB1VGLvd43o7zoTbSWBQQRvFz3ykmcN4l6rxE1qcmpDmQIx%2FGKi%2BdmZNI4fywT5A5DtGQRlo2lM%2FUMiWs%2B93VJk5UalfSWWqDoFBt%2B8Cd3fSTWupcmZgfDSR2spUsV2ZDY8NKssUIDLYm5LYp4fDZTdvvQq9DrEUq%2Fzp%2FxpLJtWGAO%2FnhguOlqbyS4DKtFB6lpbreKHX%2BbmT5mW80X3Rl%2F5KADfT%2FH%2BSC%2B63MtQLAb0rPwOYinofwhYYrlVm4r1tc0BQ3YtvoDzmyJmIVqW1UlvHtM5DgPeZKwT6jCqcpmw4jUHBQ5R7vt0lA9quAYdwgAs9g1y95%2Fxd2RZMVpntIvkMxguKXysTQFYla34e6yK4pbGGHqnvc2CcfSx%2F6As1MBIwG1rmp0kMnD3ZAX1jSOxGcbIdrIWntjRxq%2FJR%2FAVxxTO527L3y%2Bs8nTQUDhVx%2BF6io%2BpYXixpSPJ7thwdFcDwFbrHD2rhfhsrEg1%2BM%2FVMwKHs1XaUqt2YPBMAxD%2FyRzIVsp%2FLKvM1PNQw5%2Fu70QY6pgHBf20t6sq9KwU9yJ184oTpsMQ9u6%2F3abzDOwIrf1tiQ2OHyhNHlxRDhn9poHjZSO5LKIy8fmXrWT%2Bke0zMMVYPRWLmye6FaM1f6AmyG2Fu4M2jntqjTM1F%2FnvzZekay0glnxBMBkrLGYEnRdQNtyMUihuRp1JhjouiNkNpZi6sfLJ2EtKE5rPdDVRZWUWVG5E2dloSdmb0cG4qykCCnihUHI0ugyZ2&X-Amz-Signature=a42d382e6504ed16e65994610a2e37a3b9d8ace1befe9b080671d044b617d23b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

