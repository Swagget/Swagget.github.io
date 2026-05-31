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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5BNYUS%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T224509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIA%2BCmzVBnWtOL4AN8YJvxU7bFMHdszg5cKVcp04ne4H%2BAiEA6NL23yKacsTwpY46%2F0x7jzQ8StGIx7d0KedcG%2BsrS9QqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkFO0ZOvJ2DKLgS2yrcAx4dJVvqhnXl6nsfyCCI6j63FD6ZnBR4XKs6kSM50tuK%2FWIofRAlfKrG%2B9%2BS0vZEFD01khkuzhfbrChL60iA6eiW71jxCWgYpEPjPw3hqM6mSw0ra6jUZ%2F1m%2BfIAgr9Gs0KnMFetOGJnMyeBKZJl5Rp0iYPA46eNj%2FHzy%2FyAAdGw%2F4B8s57ZbQ03hqgoLO7YwQ7rXcZ%2BnT60JvgvGnK0uofs8nyd9IQt2Sa%2B6YGAZ7GBeJCrTAPm3Hl%2Fm6DvHAv6zDlcaTEjuy%2B7OzgDacv3D7dbou5LqO073dScVBPRzvKSrCWVM54QprvFsrThV3h2uMGxMwk%2B78jh09cRdOYmc9JgBrFP%2FnLTm4Ft%2FUsDLVRkV%2FSCWHDGvG5k%2BPRAxQGKa0WLSscTq%2FQkX9HKdo0Fkpvsy%2FXafvzUYxMxFe6AGSN1j%2BiJm2Zs3u%2BLQQBYzNrLIItOeeL7u%2F9t6zpv0cKfq1Ob1bxxR3cKELG63VT0aF2bT3tze9Zl92yvQM2N5smoZ2ylU1wwlnBH2L0W%2BoVi2zAl%2FHJ2St9NjPCWz4T0WAltaeye4HOT0NYKVK9uhfstjdnF2CjELCjfvW0SWJHQ3XF10QaueRgwHwtnHDnAcCC8wdr5DvE2A%2B8QsD0FMIbh8tAGOqUBvSR%2BhVeehwl2Pad3NA2CJbsUrO4%2FdsemePuZ2xSMiHSDKmTGQlgGwIceYwSsIoDSEPI9BWciwXoRl5Opv7yGICyudYC3%2Bv6Yqt9DD58KscXJTE4wcf%2BNu4294sGSw8fIiVZX9sH9B%2FsLgasoFDPhE5i5ek4m2pt7lr7zSr8kwJqp51dxH1CK5GUf5xIaQCAnjIeqzAPeDQuF5bXbXxWgktMgmw1W&X-Amz-Signature=ac249a3bfea0a08a3a6011c411b77f2e60d89c33d907f5bc9833fe1e1183db9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

