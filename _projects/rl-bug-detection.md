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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOA7QXH%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVgrykqWehGjvbLQzR9g%2BWp99M76tfFuInILOt7Rg2hAiEA7cZ%2BboEbygmcDit6o6YAmIVeDyHrMKlbhpAm1JSkzPEqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDcHbrClAVdM1Cw5CrcA1nwdb0aMCro47%2FYTe5D441FYd5pjkJs80F%2B%2B%2B2w3w%2B3kYbYcUtSVgqBDPms5FS1LYdXaB2jTD7hPJZeH4uZgpWsos6zWW0Rz5TcSdgqiWVa%2BTVh31m%2BgRVpUsfCvTf8XsCYBwFs7J%2FeOGlx2%2Beib%2FJwNG6x92nqdIN4%2BqTdh5Th4DVrJuPaeV4WmiXjnVYHaZS7NsERyJL%2FcRFAEaPaA%2F%2Feo9TDCNYaYTJd7kVj6pnm3vSb67NJjsRAX6ykg7PHUnY1THlWRUlIinpDGLnr%2BSoQwX7cGEkPxUn0prgRxKg9dR%2FzqgO1cZKYekNbJsQ8prqamfs9lLc%2FJU24H7VshHZJyry0s7%2Bw6E%2F0%2BAaMkGVRPK26%2BtIUbumanPEni1n5O2Jeyae1tG8F9dOevsTBTnxA0BpYUzCJGQpEiuTOAUO5OTnJ8iSXfpY%2Bzho4SyjbCNtSu2zDC6WVgIc2srRBui00tW5cWxF6P5jlZt3X5GJnX7sachQK1qrjkUrYBZacnaRJik0Ok0SzVq8uPE92Q%2BVF8dNXscSbMeTg42RrLOEPLv6H6IGu7KQKfrqhh4WCWnCF5tEQKnDSiGba8oR20adGmflMDz4h74sKCTgcovqm25COdnCTxjze8k%2FdMPHTqNQGOqUBXX8Po6%2BWjnauBncPTg4wV%2B0BTIGLYHpDLwey5N8x3cUVoNy52VsHEES8nExO%2B9gvp5VQFQbMbE1H%2FxH7MKzoFuV%2BT1fFONlBzwCmtvsRT9mk0Aw%2FKhcfV7Wmy6ytLrvck53vSDWK1lWAqfznE1vU%2F7MA0x1CKnHseNHdZpxlyxaYZ4X0Mj239nlbzrYTDl5Qp3x9ZXuyFIiAr514wg%2B5FidRvWeX&X-Amz-Signature=2505356f0419a48dad4b2d0cd9f157882d1900c8c41586dffb949b918f010aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

