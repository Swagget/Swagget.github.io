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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVETKXOW%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T235745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmbdioAFmLWGFHGa35M%2FLBZ8%2Bjh7Em4WLaA2WkGZSGMAiEAt3UpSRJrzVwwZeuocJcaEqZtK2gnKrapNUgyCorITVkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQWVcnwc77uWhLwMyrcA6qiPm6qBOb%2F2cyWX42RpL0%2Bds6leCpuER78TrQOF%2Fdo8YXySIR4am2KONOTezb0RC%2F2TVKglQSSJuKVbRxAY%2FS5%2FN4xIzMoNcXLrU8KxkRfEy%2BtxWpXMnFhlVuolUdnMMmHTjMmPM12pOGOYBLgtxzxwIFSv%2FCpyiKXrYSvn%2FIxLXqxnPYUqVx%2FSN9hYY6iRMrBOdJ0217zH1d5Ey1kV%2FSY9%2BY0S%2BvJBlvv2ecI%2F5%2F%2BFKmxbzA8tT2PkovpK%2BkH%2BRkxVVDJen0bHyO6p%2Bmk28OwCT2hlEIoiNlHA7NuBl%2BkVrF3Yw%2F8ifSINbvAOSH%2BgP8OkXcq1Q8xY89kkweONzqJGsYQd8qbdwUMm7W9MbpWzbWxQmt1iuiM3k6Y27aJGttc8YVGA9gXT6He4KU0UFe2puKcH0SMJZ8R%2FaGbI3Fdv5iqPSCpJOz3L5ZiMU%2FG8ACEPG1WmAJJgugqrYu6XX6dVQGxYiAxGvPBn6We8DD%2FCIt4AAbecIwD%2BLNxabTV6x6F2fauz%2B89GRJT2qR1RirZQAcVvvvJEjedjpcPuhsIs0wxExEnN1vF4kVds5nTObmihLE%2Bt4jQcbbFHLTRU7Vb3%2F1YTAO80KuvEB%2B6LKo6QO0yr2eUPumadOjeMPzAu9IGOqUBb0Xzntr0NQlN97a3322L3r9BkMawxNYoiNaCO5kPXN%2BxpnHdwr40QrTCI%2B9pU50wt3ReMTAJD2tUVZzlDeOoZDPjKEYPFRg9l6F0WilVn0PKwFzqL26zRB1g8RSO7V2jWdrVeayWmQ8wSex6C6J6VRlu10ALfoLMVzG88ucM48jlzmJkmYPu3WFsf8Ybi3cOduZDnPwM5OVXxfnIQgiRdThQaVl5&X-Amz-Signature=a6db2fc91f17085ec3870476a3533471320213baf22d185c1f7f8e708586a73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

