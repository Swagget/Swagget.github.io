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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XRIVKKN%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T185614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCuoTLEYDF9bxVl0k4QQ090%2FAFhC5rsmWK9%2BKKL8SpbBQIgT6IA30H4X%2B5C9Bv1OB3B%2FIADo6fpdLYliKZfJVYpKtwq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGozxx0Jybt1%2BO0bZyrcA3odMiu2xPmzqIHgbQNXpe%2FxsK1g4AwW7cv4%2Fi32tBQVWvPvjKJ6g2gr%2B4TJi%2BP4JbF2qY10F9wCPgaF12Dm%2Fww3xj7PffL60dpNhIhHtpewwNHuWj3LMLpDS%2BYMhoHtHn4zMwSNeA1AvsnsJYriUNOyy%2FGB6OWaTx6Xw%2Fc6pht2fCioIVmd5SStS5BLHU0nGPs147mXTkv3aHYyBOImihxTHz6jWtX3qARflIcmWPezSz2OauhcQssxfU3GVAeE043TqfN6n8OWyZ5KE6MGDkHmoPcBDHJ3RZNpq0Qlv3LUAmtcmc4TYPBYampcFRmc8fChHeFeeyDNzl5%2BfPeoPT2Yhx%2Fvbwr1boGgqyj9aZuw4DcWJdR8JY6uy6jta64dJiJsjCDtpqPPXjkdsCxXFm0%2FKgsTu82pBqLH3SRiy%2BU1T%2F5gm9%2F2rcE51QfZpXzQ%2FQ%2BfWSNOSNCEqdnK%2F34J%2BHpB8Wz9qy%2BrGK9I14NdlhQm%2B0cnyCbiCeD2ECAuegGRZiY1f0NEqbafn12Wf8Y7BPRoIQXOehnzcvII2OCGNQR%2Ftx0Afe3gFlX6Qv4BBGwK8riP3mcvhYmEgUhXK%2FgtwBNQ1RuW5Aq0DkhXGak20vvok9%2BSJhQ42spRwdnqMOSmsdEGOqUB8DlJmWduM6ydwIHJQOVoQUVOOpfT1fy1Bn2iurZfS8LsephNSILb1ZAD0JmvjOaIbgqJAMtpNk32I04qvqLjfn%2F%2BGFZgh9fs44ZjTRviwSt6PCm%2FIXgX92MqmJuCUE5l%2Bg%2BUg99zQ9iIVR5H31pYD%2BhDe5h9CT7%2FedbxEDTcSRVKyY8K0EsN3WowCU51UAPLoZxbm8uhxS6tHKTwEOuNzj7gdkt3&X-Amz-Signature=bd1f31a0091da59139f64b60487b5959d1298b47de3b03ff8c36312804991cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

