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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJDUO3W%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T214205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIF9OYSgTMKPMdGYR418I%2BmJq9NT8I9EfHcRK8h6iWfJLAiEA8PlIuAKHZP0SS6T%2FMhEZNMK7kM5W7eAEURaoPFGYFn8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhGGyrmLUjmkgl5tSrcA%2B4iNVSBZX7cQy%2FDAIYFHHFbhe%2FbWD42bu22igL9BziMw5%2ByMWAPVruPsnBqtCJdk2eLjyz7sMSCpiANSQ6LL2z7ATm%2BZ%2BUTa%2FMOvZIxznHyGhc76v5QjB9%2BbUtQbnZD9AXmTEPHnqy6BTArocNHEhq%2FBFeILGnOSXKfGMGsx4WZIseOoQJApHWTtxLsINduqYb1xTkC7gofIhLY3TyvTLitCTtmwf5unv7JwaW0QrItpgroW%2B%2BF2vJ1S4onjNCTPC0NUyVZOKLtO0nMe%2FElTTp1vtWwbsqk5i5bb94EGTn%2B41XKSDocu3R3f0l4zYkTSlYwfrDSf7IF75xXVWtnDYEZyehpctSSdambRPRFEjvIAIhW8TMSKNISsqeV3wft0XNCmUcvJ91ZxbK98WzNjhg2R0FYXFQSLrRSBgIjaPKH973z0lRR2xUUHgLJRwSGfisbBu55SN7gy6W1HPJWVvK7bSdH83nsXCCXWD1587EqQPDzo%2BWcMYJcFXnei4hyOcJ18oT5zb%2FIE2dwsvYSLcY1N2qfbxxVKeLtAPieOsVGLLTK1%2BbuggKzQJzPaMrVDW5GMpoL58oNQ56p11suxxZ20xT9x2RNkPyDZtNKc01L6fHQ4z3irmEXl8NJMPPQvtMGOqUBj7vXFzPrWxWNlNByk7lUzDF0Tf4rNxJUAQ5vAz2HzBDVNRUAEKSB4v8edU8ceAdc2IcaCOR2Z3LVpwpHVpF7BiRS8uyrb6Z3OborXKYbWWIvZ8PQaSRB8RRh%2BJnhsKnbaif%2FLeAQ7kGqTkENNaB3VBZrtWn6IHJPs%2Bf%2FaRKzt2yo8sgim4gW61nh4X589qg373AgNDfLeI3fseANJk4x%2ByOF9txJ&X-Amz-Signature=d4bc301639f6c06d564cbc8ccaa3f5455762e548cd5340497ff9b5784b6c2901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

