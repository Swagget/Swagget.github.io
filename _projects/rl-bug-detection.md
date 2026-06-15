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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2GPTLO7%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T094942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5knNeVo4OQ3DOJjrNtK4ZKrBdcwwGLIx21F0alwxbuAiEAtyBkmjWwXU8jzTXLm%2FOOh9l5u64F4ttd8cVPNVRsLI4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLuwTNT9%2FNL%2Fp4y9ECrcAxHws3HcR1P8bAjc8mdlpgAHHUVDdErlnwX%2BTEaLTvZWWviBcu95Y2SgwZJ2ZA%2FaAM66v%2BQMZJSGJwNp%2FmJ3LS%2FWitBpj5TWWoX1i88Xmqmfrp6DRIVPXVyc4DC%2FqNVCoy1US36OH7VEBFhZXqx3sJri6e1gSmI8DuZU9lofd%2FQ%2F0Y8iqcLVlmUpxPC6mAm4kAZ7DpHK27YDjyqGm%2B1GrsVh%2BLBx%2BBtdEB90tMyRDOPc8aL6P2XO%2BKVR%2BHZHQPrJyoE2JzElfIajKBc2zCxdjUZUJ2p7A2z0ggUdqqaadb%2F8bYsf0nEXQDzL%2FqmRr%2BtZhd%2FoQKycN%2Bdk7OAeoGjRRPad2ILwiGWSKMsxvTqBpXzySIb1ge9ZDSOzwUadV2EdtXoXJWenfSLeRY5w8bb8j6Df5JV1RxJ4g0sD85tZ3F%2Fnr0Oc73V9qLBBpq56pp0yyT20CTeHiR1pEz8mI1qvxfnVf2zjWffmm5al44JSKftOJAHO3FnSN%2FDm%2BMf0BYMXwEFj5UmB8o%2F2V%2FEYXEkc%2BeKkDeM2bXNY1t3ZBuu8ctfB%2F84jFfc6j%2B%2FgoP6ZteeVM1iAP2Q8VnkLzYxCyyzhGtCuEPuY99AvgpuYC8b9nodcq0mM4vuRJEAA%2FqkPMO6Bv9EGOqUBR4idxCYahdizxR1PNUD4mwlZfi%2FER7gOPtA1cdu9P0WUgRpKrdzZO%2FqfPHOLKUMWHaUDvmEeVbc%2BEx958CdX1LXb12WatdfQ%2Fn3HwU39HGNAmYN4uyRCsU62LGIc9F6Y%2Ff4RRZPs%2F8GoVHol7negGvOMUO1FO0hKYpr6KGvbzPV0PK0Ygi9B%2FfmcapHErKGYs5%2F70x1OoSro%2BDsfcSI4AZZF31Th&X-Amz-Signature=912689dedc8b8d7ec066263a49874357d7728b65c22f6c53259e8485de184264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

