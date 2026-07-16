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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZIYD6G%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T152405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDeOIzJlIf6kU%2FamDd0aQk2p6pcBxYm10I8ed6G8ybNUAiB6iLsROqQbNhncOzwA4WgYbM5zUBWCXIlrG3FlAKAbZSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMwSG%2BgS%2Be1W9ow4oZKtwDjB5kAGmA60fswchUFfxTWAVr1yc6U8cZ9IOHXwTF932XibOTxXWgpqwt9AN0XeKHQz1Q8nyvNIb5Stx%2Ffwx1Onk7VlQQjrRy9h4gROPkYvaCYJup5PAmPLnPw86gZgDvwr5loXWnOfqkC3WZA9bx8miwaFAV2zUcstHuAYAEzD38ClMfEx6aR70DS20U8NPCoiPqqfgMDs3adJileOYarPYZlcARR7ORdK7Sy%2Bf%2BZEWy4s0bMwISLSaaikvT%2FzqaeVNy4mwnK%2BuVjEiCkdC0lOx9o%2BHMhf%2FKdKeeQRl2LYkuuKYKhConzdoN5Vlj8em5jVeDG7UAgupH2X8bjNsSrYoRfugDJ3h18GZsa2WzR7do9KF7REzS%2FQ%2BrM2LYl2STJaWFBnEDfAcg4Vi2uYi4RlfhEgz6qfMq1iUrb8cjnokyijm9lGkGOZEjGI4Ah5fR4xYeYa8WmqpxNmJgMXYggqTooVMZfiroMVwVHa3bqxLiYJM736EzmAWPT8QdC3w7FlPC1X0N7Ei9g5v2KeTaQTxi9DNxHFli2rqxoXEHwPjwhXRj14NsT3WlcowFK%2Bjqo1Rkj8ImDVsFZfEv0ndsuvwajx%2FUJaeLqgh%2Fo6qVJyPPbYtGyCA24qK1pXIw9sPj0gY6pgE%2BwQWIOqD4kHqzUes46ydQXodHe41AmfkT22iz3Hc0N3YYMaO7xvedVRw4eXKBC7PxFp4UZLpQtvBAsdNhMIGcuJb5OxrmfvNZa8fOqtBgmegv0JM4ztIy43yplkozmUbceEXjCqdgiXpjdxiEdj%2BksuS4RIDiFqfw%2F6TdoKGfBZrCNX8n4lAxcb1cw2IbVZg%2F7SMdLcwD6kVeAVgRNJT%2Bqyolv8Yd&X-Amz-Signature=ba4d0791c45aff84a15da3510ada0d390fadd0128dbbae79ff0ee81d1bf5cbde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

