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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZH7BWSK%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T154544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqMvZ8U3JRAOUD4glFWkBSVS3agt8MbBQjq%2FuvYasdfAiBX%2Bnf4Z6hg5xmUQVJx1het8b%2BFYQpUSg84TrivTyP9tyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv7foQfTq2SA5G6G2KtwD7TEfZ0Q%2BWo9r033bXGaLL4jzYl%2FaodT6NkJwvOkPAnMQKaoWHHJF6OCNx9CoNI%2FqV30MDxXkzJdZkiRZVtswmlYJ3LuT%2FGaGXJNOW%2FRdG0iNQDi29aW%2B7AiQILBrjBcCVMKkP8arbKcbv2Kls8QlO5pEDgQth9e02V6V709P61UhmgKmsvEHdeiJ3V2rdGAqrfp1Z0SVEgjQcYaKCdxCvyZQKVjlYpqELuh69BsU48g5jYB%2BNSPRZncOVu%2FxaiWABN0TDGfT%2FnqTQhu1JTrmZi54pOrTo12fg84PAOcZSaz2yHvma8eJyuEt1wAPccUvMBPQpl1n3OH2gE5LVcFAwagEPOKye3anKHKtdnsdmGapZkucmOmqGTtYaml5uaC2kTD2lF8hoMX5TTSd2vkDXC6rCcS%2FhVU2ES%2FtxZsMVEEdmxbjoTsFcm75Z79EZ69cpTPkZEYOHdAFj9mc%2BevxMiFFxw%2ByFSVkreUVmJyJYIvTkoz%2BBfOdMhfk6juw4s1pI6N20MHLfv0S36Mi5nu2PxWpJY6wn%2BqaLmftd1fT2JokDgukBizuR0xPGcz1U9FnSed%2BErCeyR5Sx99kOowQsnrAvEGlFm5i7BIqqDoHpFDcRFSGZpxCDZRYEJgw04Xt0wY6pgHgnZBF%2BrercBECtR0i4CO6sNDPyoAhBo3NbzrCwsH1gGmYfQt8hdy2peCjZ82ZdC92wX6aVQzRjOLLQYOXLipsuPstMi2ca1M3Yv6vYxnVDJcKbEVR8iLGP05x4Yp3vopEMwFhQjt6PKZ4%2BLEbgE6fCB7Prny4nZbkgiWJYnY4UZStpI8tfn53cDidpv%2FykFjf7h7EDvmzQhLukQDmChByGW7l8y%2Fl&X-Amz-Signature=68e1a7dbef27bc9a21fca8276eea1c764aa2a626874a91773bb5bbc20ae0def5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

