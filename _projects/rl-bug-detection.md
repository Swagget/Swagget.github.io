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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E36BRZF%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T214448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCaD3Sj7tCHZlhxAo7%2F93D%2FzPfkTJvHM4VeyndGsJBbRgIhALD2%2FINy6i5huExaLuUoT56Ydd01o%2FOnvomwLnvsf5vDKv8DCC4QABoMNjM3NDIzMTgzODA1IgxaIzCNgmvs7koepL4q3AO95s0OJMYd5cfMag4HPB2d%2Bb91m2istK4RgOnPG9chXytziiGP4ZtAmPoP7DgE446clDxHwFWf%2Bo29SV4FqeIdzxzFcg860Jg5XF4a87MV%2Bn6vCAbiZQEg3EvuIhOWbhVcWX6%2FhSik8pLRSF2MDMTF6V%2BgyaUHdtHfXWWwrklwu1QTn4XYwML%2BchKyNttGHmvQBnTteH%2Bax8EmWH0KKbhJUsWyRefI9W5sLU6M2hN%2B0qYDJNMVsDMvKBX8XwkADdYWCjmLBVQKcWID2j2ZZnrqomccu9eBBl9iUsYFiXlwZsp0hO373jf69qMlbnti3Xm1Zs9kuIqBazUjlnX6MDAiyseMNPFzAYXf1Gf8VQityxW6WIbvuUzTvLopX0VcPHfO5XfggvyhuhczP8dHUQ%2BZ5tlCnltoRHSeGqgw6GDA%2FxElUFhrTVpz3eubnKnY3EghE7vwCawTMymmo4f4JsFwROwMbbK%2Bn4HoQkF7pwx85Tafcp9dB8OqA%2FWiQXOxc9evJDOa70DvFE4bE4vrShBDJ4YA9ooWIzSbB1SSp77ZAWyHIR%2FpyVCeto8%2BtpE76Z2riCe6pkgDKskUTnNkgfNwFYcpeDRysRLJtrn5tUMefkn6RLdF5zRNUROwJjDn9KXSBjqkAX6hPK%2FoiOKyCbt2bJ5UYPrAaOXia5vNcKDxcu%2Fasn7XPydNQ1DvqooMA0Rd46zTaCtcrx8VK3vmSNygc%2FbGAhB%2BEXd83W%2Fxac%2BRV7gLWQvQc992yv%2B1CcZH%2Bx6V8OUZ9oZjg9yN55%2F04d3zT1xFtl1tlvpHRCKLWCT4fWojjFbLUKVGN1%2B%2FXr6D8ep7HCGW8mCptdnyjjYuKVr5o1Sftd8S00Q2&X-Amz-Signature=3bd328ccff768286a848c0f01843b88014e9413e44b883054e08f13e29299699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

