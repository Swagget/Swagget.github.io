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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JP4P45X%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T083553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCgrun6Fc6EhvYx%2FhP2r9BO6iXl9U9saONUd%2FG3UoW56QIgTjE%2BbIuEDtsCIJAdkZwfA4aYhnE6K3GJ4GPUSqPVpzwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPt5jYyUf5oCbDUzFSrcA%2FUFnravzw%2BRjOHHWAyVSPveB1r5SLIe0yiJ6pjRiAo%2FL5EX7rYLszmQEQ79vwjZ4znIpx0Ze8tGv2zU5QhoZHKC5vtOmSDyNNGcqVI0N%2FEMK1p2z5z9oXK72YlA%2BoWpUjr0bh7wVT8U77%2BXGVNW5vPwK4dSgf6eSFivb9MW3Tp60FvXKiFQb68RQSDAVIYj3jkTMTDO2J27wslUdu%2B5HGlprJzXJvv8ya1X7eN%2FkZOCS%2BIxbuTflQWCTfxyOIKLeZos%2BaS0pWv6t3h12LtsUPgsrpJhHDmcovts0IDf%2FS98qZeoosQro3BWNY6oM2lD7ktfCVD3izeLPf2Ut%2B6pBp0dAaF3X3xcky7twdbwPqEg6Iil7lTY7youWjnlgoBu03ynXPFlLGzFX9o0sjqG5DDEplBhZT%2BSVBINwyjCvimQwgogTV%2FOXnioM2S%2FyNBbO%2FkdNHxbdFXydq64c2CtTlotjD8lnW7ERd9cjuV1pS%2FzLcY2rgCCy8ZI1ElZ43dZYYrSNGQovy4AsDF1cgkqHvl6uDvwMIINyoXOSChYc6wudJCeDqdF%2FGFgKNkz6LfAeS2cUK2hI2fhQ9iXYs5oN%2FLPL9aoxRwUZe3NWRpVd4JCDKNBLKMYwf4Chwj%2BMJqBqNIGOqUBvGzjb1ksPkG9xfV7eogC94tsmXS8sk50UE7868KdeaENpXEeV%2BCGl5PevIveRWjMcbvrnnCB8HtCLygZG6SD%2B9z6y4PI9Df57hr5k5QL1Y29F9scjbra%2FIhydH34%2FWx3EMSj7DU1HN2kUdVxR7WXcr7%2BQ7gaQxSYFudOjM%2BrIEwtqMb%2BzTWF6EMM5mac7NGJ6Dx5VNi0Ckx5SBNimupFAdvxqvWj&X-Amz-Signature=bc5a3a9bb97cf99cafab1f3c35865af6aef0dc28462c03bfb409f0bfdb5f5cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

