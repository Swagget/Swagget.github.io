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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7MY6AW%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T085712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQD1vzi5yN3O8LGv1Xf5vRRPLTaSy3vpG8A1LZZwJHhT8AIgMYPLaUTRg%2FsTzGSuIeT2UTPbHNXryrZzv9T61ZLh2qAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKDjbR5Y1w1whsCfircA7Jf2YhniDKk%2FOV3RS1IPc0ny7439pbZB4d%2FCPlzxqTQvSIfHIoktE0cdGIMKtv4ecTznau%2FUaPpydaUnbMzcTDgc5E0vvPDggiyuvGhgDJyToUrbzBICR0tLBQqebL7%2FE73rM2r13yA8opTrIt%2FJOdgkYMBYEs7GmX5crmU2E%2BEGhovxXkwFeeRty9Z7nU5qCGC3mEmakLsDoNZNhdJ3UUinytDs%2BMNedA2Oc6lFaQcRXg5tOZj%2FW4wW%2BelaOzuaBx%2BYBgwu9WdxxtHainjkQa%2FNsAdYxfoE7c41jnVmQCiorPx9L0UA6dXWTXDGIvop0s8Y%2BRwuNOqFPk1dnVEejRu77rzPNkIf2VZs84ooob7vsgjKd%2FZsrM3jchmrve9PjbqZd%2F0CO6ga3hgRye9yjkmPN%2BqNP6GWbjGalxUYr9NS2T4n2iKBOzhQflvrdFZ%2FRQiq%2F07qvU%2F31HlnaU1vLQv2ZVIgK81Eus%2BQQHBsaPZGum26l0AQFopSK3ulxP%2Bb0yXxOadb1mlYZJDHMQuBmu2zEMaxlg%2FRVPoefOYhqAm9LgOu6Sr6FsDL8RZMWBrBXYOgWJ3CfyQrizl2W0NYyXCrOFWbK%2BM47H11F9GSdfxGQbpeegXnpiTAMELMLfa8NMGOqUBcGxwS3EijQBGNyAhkqphZD%2BdHq6mgUomzt3%2Fre2elYg%2BJBFAQQ34f9fGogM6hMiIc0bSRAEZNw31Lyy1LTnqF%2Bmw6XfLpdxBTwAqXaa4WUZL7owICnjvEh30GsdNt%2BqlFKVVby5AzQF2JsgIAHEMPotFM5u5mkbWmel8EcPbTBXC6l8P9KKkKH5JMSsVKvlrPYn3%2BQw75KdjFRgtVrh%2FUywZ7j9k&X-Amz-Signature=95c0e5ca8105db37b9acf9ebd928257bcaad29c152ada1edb0e935f90a956c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

