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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFS4HQTO%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T144047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD6kSnpxJGaegzhlGmSXOzmkcY9i6MR3il5bEtt5A3I4QIhAIi66D8qrmyF2fQ3O79%2FlUsa9u%2BRS8%2BzDfgtyMjV%2FJ5dKv8DCAMQABoMNjM3NDIzMTgzODA1Igx9%2Bq3T6rCuyRV3mcQq3AN6SsAYD4vwJK3Orn0z2wJejpZTZOucUvm8OJyc%2Fj59bWM7JLk5JBlcf%2BMCqZ%2BcdMJMctjvq9xKXaUyy%2FSgN%2BkX7WnxOxqtmF9eDZ5mCJ5rZQ%2BNBiBooe9z8W2PM5Q6Q9CvICkP89jRPGvws%2BOdEkZbBRil0kcZw1VSX5dFuzvrMCLJvfRNWRgv0maAQ607vKztBYoqPJWIuRIZzBqstFz45aDPcgUD09Qy51NTdWD1aDZY6JDOGcKw8YhOaiCHEeUHUunup%2BxmnDmSOKKfSWLt3ycy4Pn9mr31BZ3MjaJJjvrbyjxCHIWnkmGE7A6%2BZtavL3GVBYq7f0JOztu9oB4RbhaWtZ3pFC0AO1BE79XMeNFydHJ%2Fi0dvR0BPMC40nB78bPcFaaPjL7JdUcpZrDnuy%2BlZIeHp67pQFBSMy5vJAr0LTkIRGGJAKVYFP70WRn5PK25K5bqDMeeKBBd6SgOJePIqAnlUHaV7Rvfo5ruE2OwGl1mhg9NG%2FRFxxJXa83AofZZNGIRQ6PmmYxqaANGKcK3jsyA7Ri5Pxiwi%2FmkWcaYaq44yGehRNBNQlY1E9q51XzSWCvtS%2BWsBxmN1IO2%2FNQX5DLTdSdIGxJPKuFMSMgz4hYYgawHDxJd2PTDz5IzTBjqkARiKjle5brlzN5fUYa%2BhyFZJAwb7KL0YmERIStdLHqRnUeeKZYt%2Bj%2BBqPmItT4YYOZpCjmt97YSjwuYos%2FFOMmBP053iSsLzGhNT0xvRfcDyoN8UjohYy7WBEBQ%2BaiPNwC3Ky6gIoUJTMxqfA%2BbSLdrNaiFeKuV%2FlTDbdh3Km8jTdPlvF2GYzhGUjkptci32J%2Fx7iDUHVbNKnk5jQ2BdtxBoQm%2B7&X-Amz-Signature=55fa6b8e1f8253963453d230d076778e6b8a3c72e2db49c22f27dae5b4ffdb33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

