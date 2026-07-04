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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF2PZPBT%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T155411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDtYEIwD7MOQPHHuOQFKmVDQ03bpxW7L3kAZ0eH2n7qDAIhAN%2BmfoXPvfC7nIlEhiclqbmyohKeGVptmDXQHRvO1qOpKv8DCCgQABoMNjM3NDIzMTgzODA1Igy9O4yONv0J%2BFOpsg4q3ANDBOymdP8SewwG3KkEtk4rSuq1NltsXXVxL89z7%2B%2FxEwMe18lgVhgYEHCba03n9%2FAppmlkcNKRtraMZ70ALedmgiMyOkskf3jNHFNroWWS7sfWNOqRKhZ7C%2BbmDcyJQ4s8J5CQ1iNBRBSglU8vQZUtma03B%2BmAFFiNBsc78n7%2Bm35X9hKE5GMmLjdTKwaMfCg9bXWHraNb%2Fdtin48%2BOcXtUaHPckOGnzaI8GQHwIBqDLzxhVjX%2BDm9SpBSprcSjrOdRG1o41qZR8xVJTygmLP%2BkaajTe0bTCTDS3etzXNnLMqOfb%2FMwhGRexSoYDTFPKdmKITjIoIi7UKWuqB3zf%2BTX3GO2EYxIPf30mtGpHvkjmJOQ0IEsSjWB4jGJo8%2BAGB1%2FaRUXlr2ynFr29F%2BqEjvdIHTUyby5pdNjONCRsVZ%2B13coYMDnUf%2Fw07X8ND7xU%2FAbTAhaGK%2FbrVOVZzEbv54uee8uS1xA82XnX1pohfzf7CAawp%2BALcNTvdISIvSg0gO2PMdeZeUwD2djC5cODN0NTZt5TjFqVTM6hvB%2BwRWy%2BAaru1rWBHvHnosInazeCUQQ0iq24mtlAdUR7aRTNEsHltD5I1UxYkM5VCZpXI5wG%2FOMck5xr8q7Cdn9jCBwqTSBjqkATGxqyeJDXBujejJqXyCOFLhHkqpsa%2BP0Ui%2BTp0sPna5GaQgTzbXurFME%2BHtbKjmNbM%2B22tQq2FLWosMyheSvxH9gaSRAoyQsMADbPoNXHWe3u06T3ILUQ%2BNdIVHCsNShFOFqBud%2Ba8NMgnlPsYTGMiZhcjF%2F55Z6KfMyhHBRO2Xcski9HbQCjAjP6Gw7IosOTvphRM6n9Aj4bT4OmpZZdmXaEED&X-Amz-Signature=090c52e5551c1ac2b779b4838d02895a274294beb568e0fedb160e5be6f48383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

