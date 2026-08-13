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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLTWI7WF%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T052515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIA%2BBgqb%2Bg9E4AEWEB%2F9gsqQQl1L0BEY3OX%2F4G2pk0gSNAiAqfjlv9%2FYZvXLoEpZt8lNtw%2B7WYjL8XIZK0g7k3GxowCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMszzDixJUglA0R26AKtwDMiNz2Ak5la0VxTMnckvOMwfovd4jX7dO3G25MhxdenWTITS1vmJCNlEDcG7zL7oDKkTmUA5dxMtxVkKowX0CifpLbj2iWa4Hdf2XkMnbhkIC3MfqF3QhYW91kD82OzJ2V69iqRFQ3hHjnKgjUrdv7HhDOidzRZWNQ7BQwhzxaYXlHTyUM%2BOS4k6U4O43383rzup41Nx0l21vXZD5t7pI0xhkR2CasOd7gbwlh49X2MjeSB9ot7NMteNhfeDU4Xn8447ssQK6fI0%2FixtgRoTC5%2B4COW1e%2BcQEFWLLnj70CI%2FMw6uTUELZD%2BEkOAOl2yGnd6kQdj7i2%2FkVFmciJhIegSyRPXe6xG4vWrOni2YgDIPOe8EniZu9nKVtW%2BcBkRIbWUB7FxhLHuVXVBYd83puiP3tV%2FtrCSsKNmr65nW1jScfujZKMns7wWcYjzDzjWJn6WSgXRFGO6oO0FHPbQwdonxRcC%2BQ63IQBj%2BT2xMYyvZj2yaIfei3fBulc%2FZn9sI7q4kFIBUHIRPgXOU7ddkG3Ry5X70NeU9SEifZdrqCJ6bUsrZaYlzTsZgyoMrj0Ok7StTtRwMxhXbPTwFEZPQOOpfFvzcqcAVGDSvintGAHmn8C%2BQjOPOCcrnOAxEw2eD00wY6pgHlhH0mvOIak6TpcKkdprfip0hEF7AC36Vf7o9Gz%2BKWS%2FziGlowzPaHevEBmQ%2FQ8nfKRUqs6CHJjMQP07MZuR5ZQJFKcaYJ0%2Fy9FkxpT2TR44T7z1zSIiw2uy6BOAAUWKplgXacaL8vxdZxaRTf1AC318KPHXFdIr02ib1C%2BIBxyupsIwy1h%2FpoE33CBBGeT8GUAD0QXRAbuMCQq3KsajyD31%2BHbPrg&X-Amz-Signature=1c32dd6d1ec00a53d68de1b164adfb06398d3dfc62fac7f7d28dfb886da2b3d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

