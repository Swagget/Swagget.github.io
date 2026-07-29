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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PSVIR4V%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T125304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuZ5EvjsGStTCtcAVDRb0hORkxPK%2FNm2tsSscITd0MdgIgfU%2BD%2BA%2FXCosUJhIG3j47oN6ZqkCyy%2FLAJnxdg%2BoM0Bgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJ7Gf4w%2FHZO5poAh%2ByrcAxbkIMiOdiw%2FJ7TReZmsw7kUAGzlHMavWg1ElAcL1ewfUR0HA9f%2F6E1zGHQQxpAG3ZqOmF3cU%2FT8E1ipJADeIJ6qhgwbvljxjgsh%2BtxaH0juA9nI2cxLnlJgx5pftdohrxSHki7qDBFRgjmkdJDF7Mqojw9M6fRw3L%2B4p%2FdyJQHbSGIlcS3su2fkVUCbm%2BZ93HGlYszWc8iX3eHqwIXWTtvQiL5%2Br48ZzPTX9Xtp0qdgqeFjzxlD3Zrn9l%2BD%2FMvev4g2OesUc7zB5IkMSfQ6KTd5jfX2082oeXxWXbOfiuk7P36AXrMzvbNNTMyjCJsujOhEhkiHt81oy3%2BIzb4qtpXPK05LN%2FdgMeDfILvdxEKRVeRWwSfYshOc%2FlMYPkW6KhkoJYPYl%2FtXXkVpO84%2B1YqxNlY%2Fi9SBMdptk3rT2JhgnwT8Az%2FxeaqgfvIPStDV48hP01V5sqYckOSqEPdgtnEH6tIgGe%2FXks2MIye3es%2B%2B2sYs9PhjD4p0V7m25ib56V0RvyDWXMTsxBO4hICe%2FQjTdge2y5zZca3YfIh3dEco%2BIRXTWAgcIygLWS0NWIGpITH4LuFZOvfSy1VoXu1fcVsBA6NnHrJgzNLoPjYPMWIvO2NhxsknDIt9hoXMO%2FZp9MGOqUB8aIFm34%2B7wwedtUvJzUzpOnnidaMlP%2Fys8VFma7spBLnSg4%2Bli1xfwzkrVz0IlVjoi%2FwrmWBikFOaBJ4oBEgRmWiTqE25YS2KeFkZ92ao1tDtYMdpzRw1q7eMd2dQtetQf%2BR3WcCO%2BkNRguX%2FZZ4AvcmAjPdkrWAj3Pi%2B8%2FZCZA2bNG8yl232jK654CFFmFGK37qkcg2B0oWdPQ9kZ0RYMyGf3mH&X-Amz-Signature=85ebe129bc2879ab1a7af193347d2072fa2319ecb2d932e97198c55a895b0316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

