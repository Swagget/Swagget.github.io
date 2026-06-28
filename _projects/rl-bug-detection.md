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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2LF5IR%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T095018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLKrUSl2F9q9cEGiZzxaGVYZApA%2F17ORo3IUVtC%2BzxxAiACN4%2BEGvr%2BAsjQur44l7LmfPtmCH6HEse0mS4QWPYYziqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0AtNisBEO1iZoZU9KtwD6pGzRJHiZufxFNp0%2BmWn%2F%2F%2Fa71ZcEXQpLwFdIV6HiUrlj31Nchv9Tj%2FyHTwapB0864d7mC00ABZVKD%2BxmGbRVV%2BS7Glk2atdxzStUsCkNC4Rxf8GMribrGPgW%2F%2FIQaLWX8hYaFn1av6smhpfAWBjIcmQ3CCre7yeh6AiwgRosBQRD2hCLNBL%2BqKkg1EXWambNmMP3xjM33oVw1ay4Sd1wQJeoFzog1GH6bKHZ%2FcKSBBpjMiO3JPpZTQ6up7cJgulecOkGWbed464EwK4R9m684KtFP9g%2B670%2FjYxEmFK6RYH7wMLAi5apJq2pfkjQ2wkqk%2F%2F8C7Yl3CDx70Z3nnt0wcfkxZ6q1%2BYCWm%2F7OOX%2BvdXZTLbDHvzDJGhLrqFvaepKDHasrjTc4j0USiuAbkqZRCRjD11BLcpViduSptn3ppuqvrnIMmtQtV4sk%2FZVJSwPGlyWm1%2BepsgsqceLBIWZIXPuSUNOCG%2B4cgm%2FxZUEeRMi0Vew7MWvrqTEX%2FEGVqNrjfMev3%2BvDbIVD0INAOoO00%2BnjFni15xB%2Bwp3Lio1WobL9iOVJXBO%2FnX10sMmy7peI0nh%2Fb%2B6kJOALX9ggw%2FX4OJy6zn654T7ptzfXhDBml%2FuPg5byxbicT1F6IwxryD0gY6pgEA5%2Fhei7Rs6xTklxBehpVQcl2bgSvb6qQD275r3cf0S70zEcG9LkBtRnrCQgWFgTVQYciroUzoV40u69PaxcQxQXCFn4%2B4QwNwMZBXw9aBcperIdN7OE4vdLG5tnyaJmdT4jqg2HnX37RuWLYPk%2B9z6R6yKu2vVlzEzCUhkceB5rg3mqsV2bwU%2F2QXHxVO8FGO613AKQ1SNV6XkKu%2FAyHYew8MrWpI&X-Amz-Signature=3429974c36871cad843380852807d29ca8899d3b41ec0a42903075276896236e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

