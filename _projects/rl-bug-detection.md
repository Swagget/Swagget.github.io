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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ODKYHV7%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T082142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxMN8vEoQDFE9Wl0LD5HJhefPYD5SUyYTibkm6dptF1AiAOwom3P73y5Yv9Pvtf9Xq%2Bd%2BOMfx1MgSV7p%2F%2BLZ3uumyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM07GGkVQVui1b%2FUgkKtwDASwXz%2Bdm3TW3BE4QIK090gUng8amaAYdfWh5XzAwjL7zvXGVEXOuuE8gwq%2FV2Zwp9bHSepSM6LXTGJzORtuLd2deYJmJV0cF5MMS7JaZT9v%2BuVQsJ6k6MKxkAr%2BQgFWn%2FiRCxYwivWxxthXdSdlyRZkvnFG6yvhzdncO5na%2FzfuFE5mtEGFzxGV%2FuDCq7oqmQN4RSQDJNw4Hm0GldacPAcrm338u1JKJVj%2B3enck7aOtY65djI6kKxHtrwjc%2Fzts8glj8Fv6AIZ61ZeZJIjhjzo0pZ2Zpa9rmgsTZTsOQ%2FmeSRL8uCQNRnPd8z8kji3LeEQH5y7Q2uSO7pVnAf%2Fa2eLAMdedGy8BGzxEpjeOe8n2CFoTmMxOxE99WxVBiMs9LQ0xBFn%2B%2BuFEOV8sMOGESN9Wp7O5lZJXzWJ6BQ7w0yRfQBjTbW352BUct4jTjJY9Ig6SAIxfuTD7omhrU57HYwLqC2pAB164yS3V%2F6fmVQzJGUGKm%2FYU9UzjLzn8qDegNwW5DTLXIAvLmAbKbUQs3q78HsnZb6QLZhm3L27Uwq1g7SW4uGD3dkLUeZvPJxJgAZY5sWoCtTSv%2FE12RcMSDwlNsUAr9TqOM95ZQrdCm1AAhbsR0WNzb5%2BDiEIwrKya1AY6pgFyJl4VrB3nnC3NNFlpHd68nL35Nf3fLxvcRFG%2B03aXBnN4W%2Fe7YVXmYPSBUCbgBgeQ%2B%2Fex3YZIp8HRPz3Uf2nA3zNaArimkSiRSscCb5CZGmdILgMiKxuaHr1cHCcv%2FR5UeYkGsMGjmjFdkrB4LxKtzwBkqzFpLt8I4iBUSVslW%2BYLQb%2B8x%2BqHCpUsWsn81lUSCdwDWWWSehJrkBAj6enS5pSSW45x&X-Amz-Signature=04fcf0d69edca8dd7efab5e1daebbb1715d7c1f28b38d229bf7682d71aec2b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

