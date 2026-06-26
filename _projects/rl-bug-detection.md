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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6W4LFY5%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T084549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj5gX%2BZCQyBvWD2vyHPvzqcrVLBTVWVztqOfEGxRqlTQIgdQZ6TLHHxgquMnrxNqk%2F9bDLk6FadUIqZKeQ4VotXOcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCf%2Fg7IpsRceH8YfkyrcA22L%2FzER8Tu8u9vB0WeF7FkrxFnIpS%2F2RfhBe7BVCiWUV6zOfnBcaVAptd6HIFAY9FhCmozYax4PMIuZ%2BnjTl0Q91imngMQaqmo705r1e%2BZ9nikGDXIXBGgB8Hq5nQcObj3n8%2Fx1Xnw3SdljromkkpkN%2BZ%2FJAikKjbZqVRhq9YYnpDSew7VIsD2I7gSwvSKOJh2zQllIN9cxSWVte8ERYLk14khCLZjB3CoVCpnOULOhL1D5Z8ZLa9T7sZOMziN%2FyOrk0E%2BcBbKPHUZ6VzGvBV6LOuMRqynoLCNaJ1AYAD638kyNCJ%2BUBidbkpM109K%2F6AvF8Kxl6UgdGatpaHfhLGobJ82wli6ViPdQbXGJTfryr9%2FWoB9CQQLBHW62oUtiriagD8nzCs1pLDIj6wzI4hBke5Hzr48cgjrFzfYnf1AcnBcDGsHo%2FFGLmm%2FGSqbjEUE4B93M9C3j2ZQc3jvXrwvv3mzJ4KGHiTj0iBmjiIRALC4Rz7gR%2FaJJU396fRBZfkZ7yQMJbx4mqn3Dl%2BElfeTLwAtCO7Yk0IelI%2FBNNlvnmWs00cldPKe5HO91VNprDIigYm2bZ5vl1qVeNx%2FR3PQGxQjpVq3%2FRVpSC1x8wasc4AtjKVIPUaU2EKB2MKjc%2BNEGOqUB703DlUQRsqIUp9QNV4n%2FwuzOCiC%2FAxkpsZ2Mqg6xCSfyqPxoXUQKPZc3%2BJWmhPraWjZ37L74ljosJBkoF4SeRxUTHlwAx%2Fbu4viPCseASDcYxV0Dvi2mSmy1PbEBcs5XDN0dbPHG51lafpqYw%2BVbhMtKtwiCHGTfNRklIkjVJcAKk4ZtofgqcOjJYVMEgkNiYm0zeB7G1err%2B6XCz82%2FWAfd09TS&X-Amz-Signature=7a484b097d5203e66fe79b8a52f0d1ea08d16efb4813969ef279ac2a1ed2ad90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

