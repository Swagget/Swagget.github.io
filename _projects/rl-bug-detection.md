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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W3S6UXI%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T192933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRBjwRRR5iFXiJsU%2FvlesLjqmgWU1aHp6GsGtUasIbVwIgaP0Bq1PCIUiorirfnfT6BAuF6BsJZSo1Bn2E8XmnhNQq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLRjxPpoBQfIhE%2FnvircAwtbnhnlMuX7WYXfIcRoRIor8I4UF03jE4Q497K25Y6WEECq0Nn0tZDRAI8jXZCGcp3tg1Ui4riyWvO%2B3x%2F7KxVXhs06gcHTVx11xqAzHLY2VlWHu%2FsL25u5LCJWVo4QIEtjT3GfLhXswCxNveAn047ywNAMMQoPocOBVUBMyq%2B1xnwq3CEu%2Bq3DCj5Rd0egoCWevSal1nWxPXDN3nciBwbdNEOdMPbGmA%2BTmsQYYvsHE6HGAxjhuVddJtTADXRFBzdIir0ctcUh6AC3ipp%2F9g5Tt%2B9VDESGNWNexk2kyx3H7Ex1jw%2BQ5OonKPvETA65oERUzWiWA3HVyquDOAYj104yZCQSXgYo2iuA%2BYu3kme%2BdWFpMX%2FN3CP7kHm69ruM40M%2BwN%2BC6fo1DOvLSVzOqbTCqbe7Qba0eQq8WvPskIQ4cCUCSGfAFxp0lLLWjT2tSWMiqSUP8wUO7ubI1x%2B6QYW1qKbxTw%2FDVX1UDEZJnH3sYFy7Y58EkRD2KubGINMZZCEhCh2AiwSXtMoiDXkVNuQJCKn7qxAEmtsjZiGpCR5OzetS5%2B2mBTPLkynzfgzHEsiS5VSHzozh2913fT%2FthSyeRt2mrs39aMJ3ovrKmIX1FhOLTLr1IrDw18OrMKGatdIGOqUBqCzGAfQ9Y%2F%2BZ4LaWH1rzqyi9NjhUe%2BEV%2FHRUD2X7ui2mu8QihThcAhrDIXMx7HZjHGO38W0C1oX0ayg44ij%2BU1ReAGy6h3n9E7RQwIcjxD4U%2B9uUKIlZUBM7pV6LORpgySTqvsmXu3SJCYOcaPi4zUI5147GT2buyZiqXiPjoBhifkhxeLo5IdyNKphBFLFPR9f1LbUJqwoCrJ9v7TV7j0FVvEF1&X-Amz-Signature=75b7ba99ceb6bdca32261c5fc25915c1cd27e3b6909ca57a8d0f838e056af397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

