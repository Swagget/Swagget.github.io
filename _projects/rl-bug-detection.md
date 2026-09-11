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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAGOYX2A%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T212346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzOXKAuEoxYGZE7%2FCyfuJIrp745FQlhvH8ysP2Mfla%2FAIgHOInLydqofJ7%2FLBnGCRVvMP0Dyjtn2zkjPAXQDAgaSUqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBUiwdzhpC9SO4%2BSircA%2FzYhYmwX2KLK4oCWhAy723qZoBLBd5hjCQLGVNfA0T0ITtMJb3lHPXHhi7yF3YYt5iaMh%2F9IhT4khupkA4TCe2OnHlbTEPPZ0%2FM1tmOMH1fEWgmc%2FJcyek0dxU%2B9cg%2BigAkc9koTjMHq3EL%2BqHNEWjwfqCtUtIJjOg3180dWuTOLUvzaqW5qA6qf119LNkDACRES%2B%2FLrsbz2AR6OcbLkACpBsQcTnS98tuGu0DUsRpZbiKe9sWf47EhMho2xSjeAl0b538oZw2fr9ZJqcg2swCGCCJbHw63GnFalpptFn4e6nVMidA%2F0qGiJtalQhXohl1ttiFhLqpjmOozZSSQ6z4PTkYo8sDFUlv2tTvG%2F%2Fx4f7LpX0KUlbY9gR3XDQo5fNztqHSxx8VGYazvoZa82x7bTWd%2BNKkau5Wv%2BFI%2BhlkkjiHb6UX%2B3NFASyitb41WF3BIcauzTwov6m%2FsKUIr8tuaNBs1p%2FzqZZF7D%2BIrYTZ%2BcyW5ndwHDZjZUV9KBV%2F10OR7yRD20zeIMqh6TovZZCdKuo%2BeI7SafPDeVUVYLaaDn1NfwwmdFp2glF%2FxT3u0YOuvovvzyhsSDl9xykhn9G8ZdCGiZHysFlghNW4u1W9G2C7pDV5%2BSheNKBZ6MMrBkNUGOqUB93O8HDn05wfuLeuuSZ1F5cETmg8Qn9XQkBrqWbtFx4%2FhFt%2Bd4LpKXpPp1SxFK4TvbOltG9NX65QQQNGIrljGCyjVjVr0vvowlMZnERGzHbpqWPKUq8yAHV2hLyIIUD9hJYWSXGT%2Fc8RJeccoDDsmZifpr45rqZ5v2R4ZWp8BVl34GDjvUAoqcuMkyLjSbVUR7ZHsHCCT6j42t%2BMqzMzm92UZHSxc&X-Amz-Signature=f8c28540cbf601c35c5562fff3f1426015cc34fdc02d88305ba2a620060e0da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

