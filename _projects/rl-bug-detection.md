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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623DEZ3I3%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T204118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ2Nov63dOqmVe%2BAsDwxpmO1j2fPLE4q%2FKXduvoO6yvQIgIpQn9dOG%2FA2vrmmW5OAihCzqEOBJmbtQQ6zLMgRmLVgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDC47VYULHn78y5%2FlMCrcA66SdWIecMT5XU%2B%2Bsho7XTlhrOoW380bFMGeAFnj4MeJZ0HK9A2DA9187%2FFERsAIOwbfjgH8wbrAshnU8VBGGMPMH9Ya5MwxtenbAB7FWpJ5T8%2Fv%2BUAh1FSW8gHrwewCeBBc11%2BrDthNnjIRDtg%2FbNZU3g49wl%2FELoSPI1PAk8lz4S6csvrpkXngjSrs7I52Cpa4oiusv%2FJ4H5KIj2V05nTxqebkLnHq0tcKTEmXjq7Gys%2BFcch3TR6mR33Y0p4un%2F9H5ivHoe%2BgkGeRbPVqjlWbjr7tn2b2qNSrj7Slpof%2BiEUgyUFEdyd0hlrfCTI6g8r4o4eg6XnMCqomGG29aaVVNMH7q5WaYmxDihwSlb8OdG7B9FTAGW1ME9iY8A1REb6999Qw87GNuvTzdcWzxQGIc1FMXa%2BnyKuLkd5hv%2FAX9frT5B%2BfUDKIvldAZ7YffDdLAlCIXETQYJE9pYZtT%2F7VCa41bT2KSHq3YV%2BSstT4nfxjdP2dcHSCLWu7UOw%2BoniWlnhLKOvG9NHSofLX9rzJU0px1ls%2BXnxoAScnl%2FblQaST0ucgxFh0XBsaCx4LeI55FOiUx9NFkptmYPKunzmdm7aYvqhcVU9f%2BP8oo4LCM9n%2B3Zji2QZrESf6MPqH6tIGOqUBCQBRja9YMQhbCVqAWfmZdDUTh%2BC6Scje4l8Hd%2F3JhPD3ANIUYyiOxszO7HS1iF0f3X0xJRa0CiS1gNmTc36%2Bni6CSxw6JJPlY%2FVUp9nZhPB3Za8uQfQzy%2FOYkx2prZRmJfJ7b6wyVZt7cAkxM9hbKhF1H2Ln72WIcJR2PW4DahpGxEWGU7nDOf7qKE0GrOvpLqBh6Mq83IJxpuevU5OnW4Ekb1DL&X-Amz-Signature=83b1779c814017c5a4e77964600bc4c9e20c248a49f90a58ebb2874d67e82343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

