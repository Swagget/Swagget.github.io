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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB47TAST%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T124452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHovMkZXDg1YRrBtCGPG9saTYf8QxaPPNL1IxENuu0mOAiAWn%2BUWsPajVB1I9S4AcpZLWo4ftBiSciM1urhkfpE9kSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlGd7fDkVn4niTx14KtwDUbXQbMeJGzw%2Foy%2BuTsMGZNw%2B8lhaa%2Fnkg1lzxoUZdKwzQW5UUaPe6mRFF8P%2F144Lm1ztHsrmiCsXYxonQbw4vob3iWx0b%2BxDDe%2Fi9F3HeJhIVP6UrlYdqLynElp4Vn1E%2B%2BjQSmLX8wOBq8YXt90ayzxJHH1xgi%2BCOuV%2BcKytClH5WmdvP7rWpNb%2BVRgWkUsunLyw5zQ9ZqC4R8vAgFjJZ%2B%2FjaxCLxtEv%2FsW%2FZ0SvlHbTxPT%2FvKUWMe6jC7FxeT7XgFRpR39QXkwOsldSsMvEfF2vvSCozaMJAAynH8DdNAmmMuxyP5wptrtF5%2BC7wxwfALszfq5LdkgftcbtYzi2P6cjf6rMDWm3niQov%2FH03IBdcbKFfnIzXN%2BmTflKMuiS%2FF8gaCUSFKr96ttPzK3YgVTEjSGMEIjhMgl9oeMEldhm5Sh%2BV51jKmJ4JMl9d4CNJmqJysre6mII0csLXUVfeAaLfDsl8SVnWeKJWUymCWQi2T7GPvrvJ%2Fe9NQ7NGwqKt5l8ltsZaO%2F6NI4azNeOmgAZpXCBudRhYA1lpxUorLrdwhl9BeFiX2BtiNAcspMwAe5C2Rl08KyhSMbzx%2Bu87ll9eUhazFpIHogv4S17n%2BzfpEHbskQDQCkVqV0w2ary0gY6pgGwSA0L6RhFOkZH2T7saRx0B5TPU7ug1KVYzRO9UJqqoxHXUWhKE0BOfYIsxHxVi%2FszCT%2FPjcJAJV26DM5N36%2BvLqAhNIRI4kUlhOLTn15Yju%2B6n7TopZJF1uPGfDWdJncj3uxtV4QnzHEe9BufJti9A2zbIS8aRmfTsLZ%2FCDgtP4TUNho%2FsN2bPUai0p3kwcgnGK%2BapY1A25ZEqKY9K0MnlQKviy9R&X-Amz-Signature=4595d8f91ab203a71d32a62c3841c9ecd8873196d1c0c70b9cf40178a5e79a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

