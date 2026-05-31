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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAYZTOPA%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T165312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBqEa%2B2fT7MUW2MkvkQAMM6Iz4z8BzAfAczd3QbRzVMaAiAKwwEjY7hJaMW3hIiBQK%2FVIDibl4X6XpRufJHqP636QiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDf43Fk5ECk3lY8rKtwDxZKvJ2LA2bCbyIym1EwiJ%2BuJcTHwJuB2mXPrI2zoUDI7bdHgMElY5obOvFf63A%2FfdN6E7Yq5MQMc59VB4hoySYB%2FlnXieIH5vZshH6UCLUbArfjDZCVPns2jckzKic0%2B63SmY%2Fut5GP%2Bp7pyNMdhl08kjKOYVtBVlGk%2FfeUeoi8%2Fg%2FvBO6U%2BPA4YS1Xv4GHYQJi6OYelqGCoGB20Nf1hFNBDXPwdovL1%2B6ghscfxAuXMFPDGYgBoaYYzQ0PqmD9PHeBEiZfnMLJJ8Q7IolmnKMmzFU42dW8jZBztclxPHviZDfR5cdSQlS%2FaZkEtzCdo2j4B%2FbQNJnevyzLm5r4sbRNIfP9wQEbT%2BH1RXo7Lf5IA7Sx8Tl%2Fe97ibXjO1qwOWYPWsTV54Jr%2BCmhWxEF8bRSHS6cpV9K%2FriaQDj%2F6GQsxW5eeZcSvO3flXkdXVBEBA8Sn8Gg6btsDN8HiOiJDR3R0g9CYatsHEq46LreBJgTt93V6gUlXbFcZOeJKz4hok4SWwcEsfvW5KEacRq%2BTpnZ%2Fpl%2FPRN8ILXQ0fiMOq8GcSeNgMbrP40Ccoq6MAzRe3O0iHVmbjNziIAjb0a3a%2B%2BYTWknPlcSCHni048xNmH7MpIvcBs39YkuGaRIcw37Xx0AY6pgHOxJtpPXpIEizodstATz3srrHk06GxEXSXV4n%2F0W8oaSSeBrvCotfFm60ThKZ%2Fs84HCTYVu4ZBAlQ%2FNwlDefVlgUf3JHCn3JTJGdbtYNNlTO%2BpooasDX%2BMl78eOmmzKPqiHqL9VHNPNvJnZttxohZHS9EmZweyRZKmxL3GaSnmBIxqs8Ac1Z4pPueJgK%2B02W4Nn2wo%2Fr4zVt1aYsqQQfeFDhrhh9VP&X-Amz-Signature=16037204b379086624aad0c625042bca15b1fae0b4a73c48ef4143f4c5a8aac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

