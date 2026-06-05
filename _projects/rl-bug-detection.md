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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TREARMJY%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T154612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu2nl8wlEcr84LE3x1LcnPAbT%2BBqilBbIDQQsTGHeyVAiAdhQ9OmQGq9h%2FocdIvcDC7pLB84H4PluEaeRsUIJR3nSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMSIsKBjqgeHB0CWroKtwDRsMt3rhq3FxJDIv6tIID7vCGctBdcJP4Q%2BOKKXVwQdF%2BAIZUxaN%2FSP%2F8%2FVb5i%2B1KvKAjQBUqVeANHpfCkkN9Cl5DsyHxTVR%2Fat0cr5SjIb4iaXirVJ9xDhV4ecTEst2nSkLpZ3Gk0lSfQ4IA8%2FnRm%2BtvakKi5Gm03mY3wXPtiW7Kcjd8LAbQcxsafWBCUKviIi4%2BnYsOjpXKve7athx1ubgaKB4od5t3AAKobD8KosK7UYk2frWDmH2HoZE94eEeRPny8KKL1Pp0Xf8qwbDUhYbgb6HA9Rbg%2BXwkB05yTnuonBSG%2BkUKzXwzkbpoI4PWoYeuUZ6yjpEd4bG%2F7zmM7CJJtBJw5TZox0KQZoR8kZbv1pBcT8xh9S2bi0LlAeQ75eVAU2KWuFtq7wlzs2cn5hsSllwZOV3%2BatCXjADCpq9YaZ5zxSRIwwejv860lribEXe5xbXjDSAXfUnyreaD3KMKI9g74%2F%2FlcKl1wXOZGNZnpbaEmlGEWaTjWPqov%2Fc3ABzzI0hKm3rNiM1FPJexo3KXjNv9z2WZO9yf0N0NJHubrc1GW5KOgH9n%2Fi4e6CH9pCNdnp%2BQmKuMprZXo0RO2e97X5G6zao06ms7x9QU%2F1h%2FpIF8SyvNSqbdBZYwuc2L0QY6pgHcyt%2BsrUdB41uYNftalrFmTPlJEcRKz2Uq2Qw5EyH5reXrtiiCR3UDXYImmqrqqpgY5NiZlIYCJ0ZeIeDEADUCaD6ASwBF45VX4ySeumZrms7E9ANEHvEhdFGl1mJQQ6jHR9aSBd33%2F98zNFK0qZg8rkpJmWkoxGsiVtvvZEphWs7c4OSwkpD1UBhPMz8j9EVmslrHgN10xB23x9ujJu67QeCO0WfA&X-Amz-Signature=66647514dd3be57aefedf38d9bb298c9300124e390f5d824a9b3cb7a261c44fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

