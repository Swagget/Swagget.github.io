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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLPUVXE6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T175458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrStHfS%2BGmUecOqUsWMvDK4MWs9wOD7YoX8v7ts0%2B26AiBTC%2FFxpEXefbCNlSKPUokBgTvpBOEFFZAXDR6%2FiI3bxCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMQZQU%2BUqVA6k5oR4CKtwDLoLZlJQK94EC%2FYk5ZHJkOWFkIwGS7NNG3%2BBqQpx8PRhuPSRaGWGhT%2F2H6acRbtv5TBrdS12KWFYMiXvVLBycO0hEvuPLAiNc4N%2BbYmbXfcBvyZ7cP5McTX8UdfazpB3RN4%2B8jK%2BpCvFPRUjq5mAuI%2FdQHBJ%2BIWy9IueH8vMvhVmDF4ZWtRJ9S3aVWF%2FzMwC1V1DOXczMxDMFnOtRDseDIP6dAv2vMnOyFVoWZqaXCYMnJ3CZStBdcoeG%2FpvkMZU%2FWnUBgH3JEwbIkW5Josp2CIi7Yck8BVyt6z8psBTVrrji%2BdWHY4RBI6mWOc%2BhYDPLdyy8kE46wIuQi4uHAzif%2FFWNX4dao33fFd3em6L95pzm5zy51bweg%2B3lRlY0ZIYTz5Ct%2FyHLyQ9BBHENhH0kEYQNbyo2DWRYsPlr3mJji8M1aZwRHB3okZXxsr89iGIQUyZyhrNHvD5v7ePPtVk6OAmm9PAOQVKKTMNpKgAc9iEN%2Bb8c1f7gmgIT%2FQjuD0HTdDSOC2il5EZ6eg2tJlbeGBOQMm0McFV72RlLk0Z3vidJXq3ob5mR0zdx%2BunMaJlX1J%2B8wjPTI0BgOKs5wvwBkTYUE6ag9P81uaVudWMQCpEKU2LFrM2rkihTabMwlMrp0gY6pgEk5cH%2B8K9JMZx7bRYBxgGedPgZfbWIe02MbL3OGn5LK%2F68rO5oI0Y6lAlaeVRNlGN3pvstVuQAxXxD1%2Bm%2FZl%2B5Z6aPaBUG4lv37YXkA27KHY5hK1sRYZthlQ2g0A4D935fjQc7WCwZy1AiVjgAN1LcHH%2B2cD4K2e3dl0mvSusPDbcD0qglWuH4ZRjm9sPSwzhXy4VV66Yr725TVUcT25uO9VqGfYHX&X-Amz-Signature=f242ca005febde63b4a06a4f0a78378892a9a444e70ad8bda119b4f884f16baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

