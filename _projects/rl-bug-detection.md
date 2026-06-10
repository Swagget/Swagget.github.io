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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP3ZUEWM%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T141506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFKf2PAjYZsmG3wdy4mDoYQ8yDkWxXRds%2Fbn1BHRfADpAiA1l16Y0xO68fLpJQ94aDXIFHmN4T5jEaYg6%2BAU0CuCzCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB8VUK0supa%2BUt99jKtwDaOgIguBxD6poh024OVhmrMYbDZ3O%2B1%2BnYcpOPFYS9SkfAnlzrHK8saq1XwWUhZ6GgJMObtEGeqn99LSf%2F%2FtEGuAXaUiGKer45H75QpAJFyOt7KraTCOBiuehXltCtKcyRZWEL%2Bp4xw32B3U2LXg96%2F5O%2FlJ2kQQQSG0LlCRmrRY2XP6K7Gen7x%2BlJOf8DSySLU8BH4P3EVWUwV3Sirf7aa24s%2BXJO3xRNeeypRYIdOLjVJgpr4XO5WdbiqhTjwLvcLxHQMHU%2B%2BLikL%2FsBJyJfq6Qj8Uy2lNSBJ6iumLIDsGfKm%2BFGxYp0V4WWj0dqkLw3ZGn7TxWVc8Sb4uXZsxEi8HJzhpnQyNG9t2t%2FAPGxll%2B%2FOfre6LAjggQN%2B1YhVotL0EXOL3UcFZSnmwaYQkyFlkbKaw99l11V0IvTB020KwvfYqbWb12HcHt5yzMJcnt9AbhCZ%2BxfqsBEC72%2F91Pmy4w4ai16TaaG2ehRnEaKdrO3Kc6qc8UPV3ntI30edJQKTC9V4PJFSVNhNloaseOutvq8VYHtNtGiAsyco5Yu7p8Fl4vzk1931QfYqbfJiHFGQQccfMrejERlLftRWjs%2BxRIDCwQBHztWSGt3z21VVAnvuem8lxmJmRAWucw5tGl0QY6pgEBZRSm5V61RppbXGVuKtMJuwPOjiH7EX%2BIBSIlY1MxEAx1fzkyaU8oyn8HuFEe%2BWcZA9n%2FoOuIjAaaBTLdvlQY64F%2FD72HDI%2F7HvkFpFlilLaSRVvT2EJn%2FWU4ny1%2Fz0TNq06ULbuuXIMMILV8K7tcoaDktOrXGcDApBYxLAHE8B2mrRzpci02BtaAzDtj3VOP2RrBAf5ctW1EzfsS35YZPbgiEvXm&X-Amz-Signature=70208b4bc31fdd22035c6c14023e9af51c38d756f61124df7358e9cd6a4b7ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

