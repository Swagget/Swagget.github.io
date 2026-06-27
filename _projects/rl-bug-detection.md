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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVSII5B2%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T170210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1McIbIbTjsyGcCPH79opIQSr9mpv7nVoh4Ow85skB5AiEAqtWegh8mikKF%2FsayR0%2BZuFlAjS0Y7C7jF1Hv7zc%2BAs4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlax95LLXES4DSAJSrcA3MQFQtdURhmkicU8pKjiGxi8Nt3rVTMlh9Pn2UOeI%2BenNfHNRmb%2By47oZCWPmdEVFFXMo9cplAbMh1Wpr1QY2f9ohHmgVndagY7R8PagaPJNqbDliOuaYIbSNVPUZYWelp8Xy%2FUMBiJotpKdf9OWCS6vriUBVPpHC3pBES8Ih8MX0Nm9uBLhuI%2BuCfBXReNPHcLxBippp26m5u37YfVwuypmSl3VfkMIKfIJ%2FIRz%2BkM553TezhpqZm7V110wwlas2AXApFYBlH3s5JeK6P5eqDkhqvuvZfYtMV8E4Snmiwxq2qI5R7PZkxI%2FD6zMCACASgELozGObGsTzkA43%2Ft%2BfVPIcXk6Y6ItONS9%2FrESIQmFVqdurvj4XmmoclRePR0%2FjuywQXZN7K54jJwMhvjwSZg9%2BR8mns9oQ9Dx70qpUT5JClRt8b2KCjiMrek8LVo64rPVfXKpmVxXYhkc%2FaOw%2F04MRFWPpnVu8kDTdZ3s8K6CnWtP4lXrqZEQBNGqEt8rYjS5c1%2B9w2LAtaHgO7vkIv41Bs67a77Bke9AYkbq3pSgvTvrwD2g4fzHT8XA73WDEynk41gpwi1b7%2FAxvrwHE2oDYjcHPJrerJ%2FxabCBSrGifruSYIsTQq0mMxiMInV%2F9EGOqUBaLzjdHGArwu3CaOrG9xFEcd6ALKhfOIK22Mpe5e9Vyci%2Bqhe%2FEisWY0fC5yG1deDJTJzvRS2iK43%2B1OIjugW925jSvkXHjoqbzkJvPBrc3Kda798T5kOCkhDIGVKySkI5M8SncZOXOzkXpYFVaZnd62HDuqRPzbnSLBQljq3jhE%2F5%2BptDlEIQGNaxzpyJ8NgMdMOeEmilbyxPV%2BENS6EAxi2j1rA&X-Amz-Signature=c9db7808cbca0b94b66311358e1fbcf17c14790c45cb9d102bb87f4c2122ee0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

