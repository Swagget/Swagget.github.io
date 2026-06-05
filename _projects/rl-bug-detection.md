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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SFDFHPI%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T122912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhF5am9uq6Db0mLcn4%2B5DGeawVW2X2xx73N6HOJ36kvAiEAtp5fPu9qI6%2FyI0WUAfMBqjUVmnoC55j3tPwd4k%2FbzhMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDINLtuF5JH4uxBtBxCrcA%2B0GWUY6Udh%2BOwIXkhxIeUgqz6QBzogpgNWIrXra9NxlU26DjFT2Q5Cqr%2FTlMON4CTYe5%2FbXm9hXMEfAJFw6HgLyelJF4nqYeLaxIRRiabI%2F3DrCWU%2B4LIB9eWFzY%2Bz%2BCo%2BJjdfM5UH%2FBnXj9e5jdTXL3kyukQ9cD8ujxalFSfQuN%2FkvIEvzk6fWoJ1%2B3Lnb0Rp%2Bdl5xtfKB7ODx1UrMo2r8EV3mWyJaNOtc%2BWTxXYEdSr2G025eEnQ8VtiFXefYOH64hHyuKh7x5gd0zBsIN42k2IGn3prKP8ZH5DkU6r7ODpr0R1H7afWRgjA%2BrvLqAgw6ztBcm2%2FNCk8oI%2BV5XjRu3KU8F%2FlY8nMSbc33zynwl0JYOiPXVG9tun%2FEaoc5T2IbY6AOUxtFOeXjsC8ewttyy9c6%2B8V8i3Wbo2mo21pEw5cmEEBinWQLLsuHxnpmeuE5kwWSk7vIu77ILVgFOyp%2FSZpGAQogvpBNTZySpKXlfarXIlqZ2ExqWBP5UkRvnNNUbgMsZp31ktpR7zi9TgGWUaix8XHyOMucXYxYKl3t0uGnxqATgJ%2ByJJXDveWcL%2FBCgifCBQasL%2FvbJSJRAI1Jmq3bnxW5Ng2iPcWx3FHiu0bz75LM40B0CbYgMIbzitEGOqUB1FrhDsE%2BzZyexL4JO%2BkqkM6cQLgSKs7Z8cmzKamGknd3WP57A1HCDaXalvS3lIfpaYOo1qiFWgcJ3JDFgzQj3LehPayHfl0x8umEaLKCl2JzshaRM1BqIM4OrQt4Xtq8Xan4QkZ92%2FWDgeU20Eey1ieQZ7McMt99kqt3uXwXf9RrgyqF9DUwcpISR%2B2f63soRDQzitAx3YxrvOT4aQfrdUeuall9&X-Amz-Signature=1e121d29205b37520219e3a6a02f52014636567cc83e8ba78c7e6b5f2c6da11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

