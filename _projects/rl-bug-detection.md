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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG4DW6BY%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T235421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz7b6V4MW24wrz4Jf%2F4apnn6CuFXPZxJCo9AQfwCRX9AIgZ3PO6cTVYNbSiZvYSOSLsU2Y6%2FCN8VCDsOAihH9Vtc8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYWJiLCrGJUxKUgjSrcA5sRIBA5FY36t9WkHJX5fZTGlpS4NxB6FnV0wpZufjVKn9yRPtluoyj0E1UfM0FTKci%2Fks1KcSgYGfIeBXGh21UHCQqtktPEWY0yr%2F76HCwi8TPKMHukFVeDIF5CNESSO4LC4acw8vIim36iGDRfnniIySWU4MVhAWVe6mn%2BMC5GZOrNjQr9ozTp6cC8pR5fEPts0m3toqcKdjzzLRq9sRR5BgG6C%2BiGO2tvoQ%2BAA5%2B5Z6iyN%2Fmyza2SirvuYbLKqt%2Bh%2FuVwmnVl9doh9vpn0QPsiX7iIQbdY6vDCSC088FAHERBJIKOL6YpMpEfetBIttfHF3mPF09gzbXpBNgF1%2FxNLdQMr%2FbhdJ1Yqp2QAdvyd1mYq7X7byhTAqiDQPxL9cc4R1jGNGv2R%2F%2FylCNL7tQnx88otfiQofryikrtONCBF1hG%2F38rWQYftVItrA0R%2BKDRUCO9hHBeW6oih2clbOlX7dNdbc3WAQ%2FvtOWuTpWmENtg4m543HCmbdV2liKWGnIEXz%2FqPgIqbkvGy6GP3xd9DF8B%2B%2F%2FXICvoJr0kIuEvrZ33BSlRndejb77E1WBpk3MXQhQ9s5brhFe5VcYVvlaqkiJMWIQIxFka5lemMmb2JMRryNlFkfAXvkjOMJK2ktEGOqUBn1WxBEbe63eGdTw3Ct0G0NY8zwO6qRUq8kV6a%2BatSrZrByW7OVyZYwvbnJRqGK6Y13e4uWtdUK7%2Bo2%2F2XwDrgkgFBjflWUsl5gVVhn0C%2BywK7swG4s%2BPchhPIFCe9y%2FcDYUiK8XFLSNC7xIKftUDPlTr5nnBWR2EqTnhf%2FIpNfGyvXegZe1VQ08WSveTORZEHc69WM0ZaJMUPfP5yZ0aYlSOvbk1&X-Amz-Signature=20b452a9e2ad44735c46b54bc7f8ca723e1b992ce51587fe1ad67c04062031a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

