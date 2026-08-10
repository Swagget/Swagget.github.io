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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XJY36K5%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T194511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAusyJ0nWRzkNqF5haBko3FZORxCQWIoXis74Mbnvf5fAiB4Q1bJfRtQE%2FPa%2B7FhAk32kE81Ancs75UT7NbefkJEeyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMztpMog2somfxXSV%2BKtwD0BzYDxYZl6BXcEMb3QKDlZVLa0S0ki%2B4OhYOdkjxG6%2BLruPf15UfsNVO39mDilYSO4LdmIUqieNoeiZWUmbr1ympeR7HkeznrLgFaZM64nKb1BzY9RNCCgDIoKRZPD8uKJYC6c6e6dKbU5e3gHYS9NZB7MrcKuerzihYa%2BznkutVX06OjL%2BeGM4vbzDA7qrvxV1podxwP7xvENLIFnzf8A9zhWwox0uH64rbxTcB5hQIUp4Kwnx29fw%2F95OFvgMDSE1P1v8RhdKfNYV20xeVQbOmE7n8k7qm%2BpX3zkgqB32dtHwwYuPw%2B665LFtbwKkJbgRGVsaW%2FNrIqW1%2BbrrKDfBzLJm19lkiLvzrf1NaJP%2BXSj4Fl%2B3VZzW72PVBKXjpRWalhnokNIAnFif2p%2F6ZlVZ5og0x86GIAwsld%2BNbOjZrsxVHV5mrZYP0QgbwqHoolQHPMPra%2Bkkd%2BNakVQRYV7kvBPA%2FNPwrBIBtK%2FAYxqmivOiWHOuFH93GMzXE0V1K3MSAUtDIuZeMU702o3n0XN6FuuFtNzcEjiM6QaYG1PV7bn4gKxs1M1sKTZ8FnvOA6Kke5%2BIIiYVAJ0MnrUCtseDdMuqDhpPKKB3PqRip3gjccSmxIQmreYTM%2BTEw8bfo0wY6pgFQ3IrmmHO0zi244AlmEMshtfmxNpkgq9famk%2FZeXQCIrdEMd6OQJqAM%2Bg%2FX8mFe0AUBVZTxnL8mXRHZITKQiIsjBsrxEJBRMfHyx8RYrWhDETKqwN1BG6vfcx3cSVBDqjvtXtKrxWwFNoVwyl7DoMXguKs3vt6UHxT3%2BvQOKZk1VPaRzazBLycJaybJlgjhTzWWWsDM5ollpy5mO9j32HFEt1LEXnQ&X-Amz-Signature=da9e53fa6a3610d7669c15d170738d27388c013fa7744b0c2e8da0d1535c13c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

