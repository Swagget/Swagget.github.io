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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNUOEUT%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T114227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBXI8bzXb6JiGkpr%2FyEw1scCliwGlT63H3AMBOBEmX8AIgQWfCxVbfi0Lp9pJ0i3T2y6zdYNefTbEs6nlFX7h%2BSHAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwcDJYOsGOgKFn7gCrcA66srqpzZk7%2BZbHgor5JwrotKs33DCCmiJ4J%2BermXj1K8h%2F1MCBefIu6ewyzR7z2pwW7mfd28ZQSfKkeKUaizW%2BpBt8G2bloXHSUQ3NGqO%2Fg%2BBt%2B2MHuRuucDPazV0XQb2vYR9Dw9ZFmEYKz0pD39ObfK0cpJR0z%2BFQctYS%2BQUevSgmd041xILjDCgA22mw%2F34%2BPQoX0x0RfsG%2BCTUG6CgMiQGxsrlyOJZ%2B%2FanX4C6SJ9Ok6%2FnrUeXI%2FigWndzAAZh3P4gmpYwlUkjUy1xQjjKctgS%2FAYEriF6KjKW9L9krilpMiqpMNWQWNGCVuydAISEONZCVGFCt5kygcqbrA2GDrQDftVBRtycoKiY56XbFcYJatAdiHsuQiiRDMlURHpV9vqj%2BGyfSXuoz9xxrkmHeGCG2RRfGtN2Kz7J9J6ihURED6TUQDWd%2FEC4szpmgk5ogQZBdDdZBxlhow19N2g2IqJtV0o0i77c9rmAJHsEKW1RW9GQQr%2BtLXQGGAGyhj7IO5y4gZ9%2BUKP236MSHQq6TYiSS8Ja2F4XcmvYE03Va1Nr6ObIPx2WD7zxv%2F3AUSnUjDTlojOJ4%2F46W1i3VXakSIsI9m%2FKZndi3SEraS3ErrG2cHsau1oxdY9woHMPSrz9EGOqUB8q2Wd9cW6LOmnQqrUn8XjsiCdl9DHMl4nSkJ5nB26NecMX%2Bo0kFxfOuW8GeSk416S7yFcgLRXBl%2FKEG3agtMrq7pANcRabCZ128MVCzmKd66Maxap71Ppwm5P1HkyZr%2Bwd3%2FT1XD7b%2BhxkU9pFhzXlRfWMtv1RgD51Wq778eVqxI3ZkWKltHnlKXznVcxiDHcG45OPStos9SBf2EaXmpdc0PUJpE&X-Amz-Signature=58bef21bf232d34d0b25b08df26e7c7274c9dc29424f9fb0ce52014df8006852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

