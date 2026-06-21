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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB6X3JLG%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T133017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDhVuksm3iT2p5e%2FxDpz%2BEzEsHi4jZLHNTJ%2FgGOt%2BE8EQIhAJxpEV5bMp%2FIiqubNQSqiDIcJEvUHmpc%2BHwvKFdGwrIQKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwLhtGaQunfrSK5zEq3ANx8duMF3p4F7fag4rtfUgpOD4mVJvl6ATZTCZB99yHJJ6Nlttm%2BZt1%2FnBw9t4NK91NRIu0vMzH%2BcbGfffrD%2BZyjezoe0AAJBFQTMKLbtAoSM1Jy7RSz7%2BbszDNcd%2Br0ET6QK9KW1XoWoHuMhkvARwPdF6eUc8UYM28yH3CM6qEf0152IjQWRS6B4ybKZEN2EABotbsaLwEmhwvyh%2BOTPdulwW0Pzdt6gywSaaBJXExG4O39X99F1Fj7Gyh%2Fb7obNosoU73KBaCQh97ha1GjgDbjqML4KgNZzkCtLHMfpNICizpl%2FA18rA5iewVATwhFBpB81kbNJJJqG8M2DdPZy6UymCslLE%2BZzWINrU0U9TUlYXFxeLjqCSM1BpUNrJLuiIyIt4M%2BcqqBsWFW8gujdN%2B3QQpjubHQpuCndnzYGis8QexXKyHWgCqAEDMqgmYp5nFwUU6cWwLuxIKshE%2Fdk1zy1DhLxpXZtyTenb8XNLsLP7cIgZCr6EdQXRftRGJ9ret6KPkvZEFckdEb1SeQFT5MbBR5%2BrME2179o6ql74lX5uYTvfmNnuoBgV7OS%2BKp5WJZJq4U1x9SsiNtmB21N7elMeRrFA6BmD37MOdzNCgm5r30br7uoBFre3zDjDPjd%2FRBjqkAQ6gRtdIpd26jNKFpRY9ddFQw0Ram5m2tytYiBVMmJIGBjsx6jYtmY1D69mTZgy%2BgNIem61stAda8nObvjiaX95GdFsM0KrBer%2BC7qyYFXl%2FfNiD5kq3mV1lt2h1fwFKWKjMcva4Tq7fBTugw5Ee%2F4hzl0%2FoS%2Fv7wKXM4SvOgTEUsT319riTxlz8XUmQq8brWFA30LeonvYQf9xZO8dSaHBOiCwn&X-Amz-Signature=68d579cc6801f0a331459df8e7033566ee9e2647aeb841eab7182462cddf8bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

