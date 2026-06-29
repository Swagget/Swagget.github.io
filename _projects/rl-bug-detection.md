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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632EE2KVP%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T122101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDESRD8juo3qgqJzpBY8jUw6S93660wq6%2Bkc%2FRBtOJviAIgbR0H4kqUnGIHXEKjjdtm76e4RXaWQUwlJwOM8o%2FWiBUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYws0iZdMPNQoGCNCrcA6lofJv78PT7B3rOFJ3I1bELOGTBSsUOzCx369BusKzRNwqjq%2Fs9R6VHV5sB8mS75Fv8FEeR1aVYbT2GkbXw653yqPeopxfIs9yl%2BX94Y%2BKWt3IH02240rvobEkWrq0pf79iS7bzvUs2fdu7yQlYfE1sCctdS7b6v1AY3vmj2eL5tyPBmGRiHrgl6H8r%2FolghHSUUMiqECvFiovOCCODsjsr7wO5IAEZFebzUsQB9r1AlFIolz4YW3fUjDKTTWPqW3n%2BfjoQ1xPqn1wKSYeaXuDyOmAIkhSo5ayEteEQfNFHxVEeUVUv7IfbCSC9E35oWjIqjCDto5C2rvPXocgA%2F2Ah7OeV15837pnyRRM1zFFUBOs7SZLX4E9cIaD%2BqOOouFaxptFjcTuwq8LlXXijWHavsZ0dyvVUbx1mFetp%2BnctlbnWiEFihE%2BHJ8KqH57HUh3c7jVkKwnWm4ZbmDOZZC5HHkYoPUnZVJjEo%2FK%2B%2Be74Cqz%2FxjiWCoSPlxU2tR%2FCjz4M6qijD%2BAgnLZhlqN2T8Jj308l%2FF0PEJPnxuWnum401SARkgGX0B95sZ9WyC1uwfCVWyELnYE0%2FMWQ02LvcOUfCe2zwjeGPl%2B%2BUkN%2BndAQThOBFqNrZ8CjHHYvMOTDidIGOqUBAcXMSqI3k2vN%2F3CDoZui7%2FAe9sNgfPMi7UKwtvTwsSRHQJ%2FCkunxYt%2FTy1kRYQ6fww2jzSZmOPLMYQ%2Fbczj7mMCu5vzOYeA0Hm67C85k0tF2I8y2YKHwBIT2KF4pH7yCaEoiAqsTzS33iZOnVwfDQ1pZrG9nsrV8%2FeQVXvPfutDwXfOqG%2BOuTSZ0Ih%2Bm1mQydxE8x%2FwOGSINHzjzTJqhO5KYnr%2Bc&X-Amz-Signature=c7acb01c015e60d579f54fee08cb50ec03459f6f9dd4f904331d065845a38bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

