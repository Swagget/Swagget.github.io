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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJFYEMF%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T091516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWWpddHnHtRyYTfM1cEgOMLpFHcmpFCGixHhwkuJmNyQIhAIIPdhTwJbBqJWhLpmtRDus03h9%2BGTcsa0cS1ZR6sxViKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB0R%2BFciBJL6Sh%2FPkq3AOn%2BIBJ9WVdHwwscevDcqY%2FQwOELnhxD%2BKfi0tYET98c%2FJe30keXRg8SHTop5ud24MxV2Ig4j3a9uWA1y0ezIMYeFm%2FSpXOL5FiidGMuvcZqCdPBF7awTTd5Np2odBMYQ7Y%2BzQV0J3at9G8G%2B1N%2B2gU0RO5QG1%2FobZnOZasZ4kYbxi8zzqZwjWzRro68bkdNCkdGnSfgNId42%2BDgsPRWRGIaR9F4mgUq%2BlqxrToiVs6cVRR3G0qWEeSSRbzYudKZH2QVDcSFCaeQG0Ovbx8v%2BFZ8YuWL79q4y5qzqwme8qz8vDkvM0mr4PVgGXFklMxF9X2psULBhsCae7E%2Ffu9LPK%2B6dpLhXT3gNhs6LK1xqsPy%2BcCmgrY8RDxK5u8q%2F6yiCAS0zffxBRy9Qa7DV3hc3OCzZJJOGb%2BsnsDDjzRUyNsBpXLtYyN%2FTpEcC9qA8XJfidrGwT99m3YCmE1imIUjxP9%2BSEKQFaZXy6u01Gbz4415BbieMO6P%2B5YhIAmx3gT0BLcX%2BnF8ZZpi5CbrwphHefhy3b2HFnBotVCsepCbGS6V4yU79KN1sdIy0erd5tw3RLj212Of18%2BLTeM6BjhzbFCrbKk9hNWUsiqdWxUuQzBGEd6GU7QVGCoR10TtTCTrKXUBjqkAXfOzFUbQPOUGwR2AYnKJympNmyytytYveHcZ8SwgkEBFnRW70h3KO7nz6n7EaOK%2Bk526Pg2%2BPbb9SrMggExax%2BodmvO%2FsQiR%2Bz4AX%2FsEKwgSml5waxsKL1%2BWRZ9wXqK8i7TQ6%2BvSnJP5zJPn922gqoFapxDzXIfRzSaAuumRviv3XwmQ%2FUWUwIBaKGEM7ZgxzXrjwHPU1fLTbaR9r6g%2FxikfOqR&X-Amz-Signature=e9ba23a34d6264e6f05c2e8f793e3e86e392af1ed11e7023b73f1caf7e992df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

