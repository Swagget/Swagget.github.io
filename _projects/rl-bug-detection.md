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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVGXR6T7%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T220026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTBgey2Uuyz7zrkiTEFQ1ozgdWY4WuTssLcDoBEYZZrwIhAIRTOQap4woXexIhu17s1pj6KAfc0bscz%2B3N6IZsFdTmKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynxkZrZ60Vrrrp9Dcq3APQGMDJsbunDFJmOPmPY2xqHn7mGkDnsJZ5RoQmGsJUbZLnMt3WYgHdEKkU1GESEwAxif6C9eF3h%2BizHg6O4ZcPKopFe%2FQZBgpLEeXe8e%2FX1JUffoueUaNBPXhsF8YcLKpTe%2FYIR05W2dwhlAaM%2FA62JWnlkfQQXqfaXTe3v4z%2FPs%2F7otQgN9wmJr7hFMgDSxBtVnk1hLSTrZapGwY0nx4ndse119ReUycV878s24jk2fW59W%2FQIscC%2Fe8vNgdlF0OCI6wqBPQNcrwfkX8VwIZ5Jfu2bVCf1%2BhKFhIq66vxMGBhFM%2B5kfEftsGinivHkV2pZfJxLEEJUUQwsN2lq%2B1PzjerrorfbIal3X5EFhgbGHMYu0lN6Teqo0Vx5FLc19AI0kgEDV7%2BgmWXQhCJn5SgyyiD4rpVKvenIhEVRLlR8Yu4phq940diGHXgKv16HWM9QrSDzsGSzK6FBrSNev5ONFIm77aXDaJOCxmgBt1mmy2FP2VX9QsJ1dicYkmuCIXEqzl5alct4PKsr7ZbYezOPS9ZQtFEvsI20KmiFS0pWxtH3t%2FC0EpT3apw%2B1q1a5CSyv%2BO1zAVYnuww9faY%2BuDuhbdLwgv3Hvy5eYIKhFsNROjAfV0yD7HFaoa4TDXrJfRBjqkATNxhnOw0s8jSoIMv%2BmacTaXBml13Xw7DPfwUgjWvKHqPLiiOX1IOFBqiVOUoLwu2YnF6I5nuq3dezglQJeXmcK9BV3JntgekJMbeE6S%2FNNexukqoDgGKfsTHIn7VMf0LVqq6ft6I%2Bn8Du618PS9YjKD3dqliC8OCg2V1rZEkWDAKYlu4puWhPZFGENxmb%2BFdeE9%2FwsCn8sJPecz%2B6vkszd8ub6v&X-Amz-Signature=f11f6c8475ad7a11ca6dbc98273c99157052b53f26f570f7c6e1feac3cfcb383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

