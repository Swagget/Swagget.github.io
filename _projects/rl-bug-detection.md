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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ITL7AMW%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T064157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbn1YrmRFDr91lrz2HOljXYeOvlFqy%2BmbpbkQqWRgJgAiEAvI0s1ct1xtd46ZlhGuuXxwShCz1m5DOa6Fwc0IBxurEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2A0Xg42%2BWC4mqjVircA%2FP4Nqc7HMoeiHuHLYSLz8xBM5ZRdn2%2FqQaIAyQu4z32Rmj0yFsPtdAu1xQY1WQctX%2FCk%2BkQDZtrMjl%2Buyn8BGgIN%2F4%2B2TpzmSRxEDPLndI%2BaNcfdgw3WvqvRFNfPFQHTiJbQVKLGhomVwLKe%2FeQbQbB3hHWMyb0yYM6j3msxWj04jv%2BCX2qHZ9m6VOuDeKO59z9kUcPtbXVAtftT%2Fo4RegnprAg37GrrRVBgjDUIyZXzvzDTyH3atH5ASvcqxbp5%2B3IDAWnGlQeIbgEu3tx6JWBHJuL0qtyywOZlQrP9bRvbxDwlD%2BjIYhDA%2FClpclhEuakPITzMNie7xqkZwBjxMCFOiRdbHzgtwiYnmcIJoHi5DgllUVvX69PcX7e3ggizyVhXyDQSZ2nO%2FUNN%2BBQD15EH0Qet0nRC49Kd0Ftm%2B3uJXA8AiV4G%2BcfFAJwil%2B%2F%2Bm3si4kkdZJy6QgwbbEy%2FsN8Dn1rl9pzPT5Y4us6cIqiQZQSHrZ44226LgUtQTXiUALb1hysxa9TdQgqT0bF%2FoDx494qm2yXBKndhqiShbegbQxElYtMvLTY1EtTJZcOjy1pbIhciziDZbgijsxJmt6Hq7oUXTSP1dyokwU5r2Z2wSbao1sLmdF1nSPTMJ%2FQ6tMGOqUBhj0ORGttdxlm7NKZOpA%2FEFF6rO%2FUSwWE2yffs7rU1C0r6YMVoJ2HtJ%2F7X0jizPprNa5SyBvstlr4x3W4TAHqMd2NpM9%2BlElXxZLJn73aIHkF7RBeDbeUE7tSMSwQ2Nv97JsYSpkjKatckKbH8DSGbodJ0gK5HPvvWROUXOLc6mIUiAYdzJxsKk1vmYuS0S86SVtjpnYf4Jtua7kC%2FxQmSYYv%2Fxcq&X-Amz-Signature=ec7818f53097e68d597710a3df9a4c49ef14d37fc918e4e499333d85dc39b6b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

