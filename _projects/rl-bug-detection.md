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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YUMYBRB%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T005409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCIj4f78%2BImkhPa5mG7Tlx%2BvpBZfWswg4A5szYyFlLDhwIgZn7hw7U0re1XHR2bEaqS6w56ydiEMW7KHQDRS1TEo1YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTwnJnbN%2BUfG0Fc9ircA6otBjtwKwKfjaO5Ro5KTW8UhRPZbGt2Tz%2FHIUAnc03v6oO2Vm6wHnVCMFXt1DyltGJgLAjzDwjRxV5tDPC6ZPe2UfT%2Bky0CgxNGX16ZNOM%2FcAph%2BXd42RciVlneyysSJh7qfv%2BvjoSLehsjXEameMAYK8USpsBjvoxRHdpAdkR73Q5%2Bu2QX8H5819UX2mJRihSO%2BM7Cylfv6OiXpSC9jXBvHkKqxGuXN5dnpagtKB3WlWVXfArlxlPQs3tQAeFhPTeMjlYGqx6gX2tefJLegl5v2rsi6NsRfarwfG7WHit4AB9v0yHn2PdgPD%2FSUJEt4kiBur4o%2FhgvpElp%2BMT7TouhJT4jcb%2F6yVp63ybhyhGZkXlLKBzSHka1A8bcWCnhXQAE%2BOd0Sf34Q%2Fu9utJykyVQGlKTvUoP9qL%2FlKGaET%2BeFCWvbEFml1q%2BdwXbvC58DC9p%2FpXbklF0DguMJFGL0Yl9ydeiHH%2FuP%2FgGSYtZSPwt0clWas2oROZpc3%2B0caMlEbwLBZyyD1Oo9gfvt2IWmgh5Qu922eId7LBON2ZGCjHpkKY4Iw7Orwf4Z2eG3pLREoKrw0o4TAngSiYzPwEW8kz1ZFR7eiWWZUypFBnYukZkT0bcEJMafi97bBp2MMnM89MGOqUBCVzDQhktCXT6L%2BTLrJH2cbQpNlIf9U8KvMsyO%2Bo9Q5fRHSgb%2BonbYGYIHBdSe9Tzn%2FWqusF5DlPbeI6a95TtucjOPKuRhOjn56Ush3YWHfCDwAqHFEhhCJl7pXrs2RySxhxtM2xsiRD3lViaEy9wO1Txo67onNfciIT8beJHfxH21ryO1QUTQ7b2lrw4ZJGdeO2Mvyrs%2Fg74DfOBbNCgoBqTvodj&X-Amz-Signature=efffc5bbc950dd3434ead878cec702c610e5b12d3c09acd4bd5284e59c8f5372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

