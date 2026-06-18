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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI2IG7TO%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T200506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyITyo5lFfCWptKGMEscqR2zF5wzs89tu3chadMOs6TAiEA1OVs81JUVSO28VLbdGWPB3t4ppRVTdPb%2BcHOATLhDcoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdzINh18b86kUN%2FfCrcAyFcvtvOjj4jTwWCe5z%2B%2B%2Bi4EonqlOBdVXgy3zQM%2BEt4L9qgn7RZpvtkT9mVJXHna%2F8Yx%2FTipsepwRK2dYo8BmPNGtIsQuweaWZZlwRwqbK79aNR16coqCcPgRWe%2Fg0ZoRx2364UQpIVlRhr0kjusXVo5qZKSXJeVCPgMovfU%2BRYw0m0s%2FqCKBOYZ5sR5hLOhWxvlJkxKMlEZV767Jevd5quqsNZ1sp9JeaaZUA9%2FjuAy%2Bsn3v1CE4sf91R%2F1dHPC7bGAZveLNaD11kxvhS7gY6TBnpFLOf96OPnHkLLjUKB3t8d4Y6TrWXBhsOqDRBYCmzLOudplxgKPwJfyJb6nkzVODQfZp5PK3vG97yp1Iq9AjhEKRZlcWsC3ue%2FMEr4RSDGUcZ6OFPEIfMksCRMVB2tkhBqHTDQKUxNFl6%2BpaGFZTHZausvAUZUV4d7eVom4o9Ip9Z5aRza15g5D2uf5ohBlrM0lSypRaDgbz376gNfvLDRjCBtFKrIaqfExNEEq%2F8VLFSl433lqGB2J5Ct%2FIvSTTq1U5cqEQUBx%2FnOyXuHzbfRexluJu7Kf%2BzOt8qPz25%2FN2CuJx4Mmc93xKxBG9uQNfCeeW6dyF3ONUlZrdFe2Eai7UU0dTpKIpLjMNyU0dEGOqUB2%2FC4zHAvlceWUm%2BYazyRA%2BxWp3IYul5asCUWBJV3tbHkm9oSZjN4rg6Ye4sw1h1hQy6V46%2BGQLiNGJR3sdazUQbJAr%2F%2FA8tk%2BAJdrbUDE2UH5ye4V26ikh6%2FWnHCQdGLOkKlABP%2FviX3itXJjKq9k9K9tZVLhDZEqvthiqbnwXKGDlFQPjDRIYBfJYpPRHXw0lyQlEnCv%2BFYyscm9OPAHfJvJ2Ec&X-Amz-Signature=ff11bb0eecef9f735df29fdc341f7843135420302e70a2eefa97a6f5f1ee9ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

