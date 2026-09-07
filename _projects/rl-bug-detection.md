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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HKUVTP%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T230535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIBr2PlcDfkPhVwlNJDCOzXRpmAipDBXdl02PmETMELblAiAd%2Fg%2B1Awj2e72nY%2BIQ3O%2FTpkGQNc46%2F10OhXht%2FyUfcCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMUJYPl3KtUHTuyfvAKtwDHVR41w1JrcJjLOrO%2FLuq%2BDdd4WbwnIi3RI0IBWsC4UL5AL6GF5zW5KfRyAzJscqmPYoW8w1BAN65kNExUWMbzjzoaGUydMXam8zPJpUkewbV4rZAOfLDhRdOOnpi3de6BhMt8LGo72JTOLI9r2PXzWNyw%2BDTZM0t%2FnD1HS0s5cvnB9OvHwK%2FLIJvaep6OkQsKz9jU%2BAkm9FLNiRXSYHI0iwhGF4SKl%2Fuox82h9nrCAgt19hDpXEs0cgdKmBwX4l5Dgw69SxBOGb2YzUCKTvS1MLEnvAYhHfqnHsyrkNZKGRmRKmV6jaRoXWlE%2BelqBqro1c5jwC9dz7VaLFPAgl%2F9SrAWr5ZLOXeM5UYpJj7XDYnOEZDY2F9n%2B%2Bx66ZC0opOBJMppKWC8doLHIM1JGTcW4NgwX97mufqMKvXk1Ad6%2FoslmzdCY9pH36VHAYo17BjLL25cbunRtCMsKAiKtz8ZMA9hJLkd%2Fbs9jfEu90uyC2cMi1xF8rJLUDr9Tcyt7errqH1b7BJL6PcV5dvr3bl8Y%2BMXB2vInqseN9QR6DMErWeuFP%2F7PU7J9ZQYVWqN674IzK9ri1Bjf75M1BDL8lWc53kwItmLBcXA8NZghB9YWgWE61RZJsG4DosX44wq%2FP81AY6pgFNsKybvTqMYRE0TQsvIG7OC1W%2ByFpNk47pYlRlIbui2%2FI2YI1CMxTVQQuverZTyaEmd8uxaxAkga%2B%2Bm%2BQo4WLItWGonxlb%2B6%2FmhbLY%2BNM8NnI9kZ3fPv1Nndc%2F4DzQcBspDRoCD3Yu395O20pXXQJB3v8eZR7w44WNW%2FA9S%2Bp5VAW6XHWv56ONeqBSzCbSCoWL5J7YxDrLHOA1HNfFraw2PLksdQbG&X-Amz-Signature=03072ea7c0f7db14aee92212c0eca3c1f445f69b96ffb4711845cfe6bac28bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

