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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNKZSQF5%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T171542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDEtiyp2aXg%2F1gLwIJ4dU%2FaC21dfsRweJfPK6GVfBpiIAIhANqoRTbcnNUyvJzxVeoZTNONjrUHmRmloFJmoSvBli8GKv8DCCoQABoMNjM3NDIzMTgzODA1IgzHjaLZJH%2BCnJvzErcq3APkXxvxUmzYoWgGeoEeKEXkPOgyHJNTbkYSMYoLLGNQLo4qvwUVv5htr%2FmPiFyRyGeXNFOlyh%2FR6T8muiRQ8vidqNre6Naj63GBgzd1Ulsro5ZgUdAuIdenSsxy6s0kD5fC2ldF14%2FnEckrQbq61rgQ98hpIM4OYlh8KHPl%2FQ1a6eVzKaj6jDVmHFWOLTRQAy8pRQS%2FxBtNpOgmcfi%2BgFyd2y6s3UbEwwJ0dZbKTC9vrDOi%2BgGkLfXsmb1ynN8OduBnAX%2FciB9lWU7NxVER7Jm3JOLTGZuKJDM9SbJNOpGsHWRSmMt0VAqjy4Z8gGLogS96YrOdxPfHMcjiHh2rhFeNw2I4O83EQdCcXXd9RljhKfyg2%2F3ZRwzCv7Aoz0xiC51%2FzytYG6%2B%2FcfuvWzwycJzO41zStqfDldT2wGfqIGQfzdKwYi%2FLTpHq8ib%2FW8NTGPiCW4x6Cy85IILNturqzM7u66l0eSt%2F9sWnhwYeGjqS7wyZFNKGzsIX7Hk13juN3L1l2eG8Nki2awfXlEgxdf0QMrqELwYeOgoqo6F1p4xePa09fa7T%2B2Xtn63NM2a48rPtYUbjWjFHToL6Slk91015DRAbJlLzvNXqOe0y4EQk0HJHtSVFzKyHMS2PLjDJ2M3TBjqkAWs3GvUkah0XnHMxFzdwC1togrkSZO%2FzYYwkJfwbJd9SMqA7TMqEhdTTgzUGPx%2BExrimeNI7C2UyV4j%2F0qSruKVxmL9BphaUVvQ6Zdd%2FBrieZejXG0mJt61kgoTSu1ac5ppV%2FsdrNyqdrps1MQnQ2JrcyQ4hna8YqsiiXsc7AE7Ozql99%2B783TRD9fZcMEAQ0UZThhAewYCTAnzGm10PuCdGVW%2FV&X-Amz-Signature=3d40ba585a443afefbfc34871b1f977d311c7dbdd57800cd800a27d3f3f28a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

