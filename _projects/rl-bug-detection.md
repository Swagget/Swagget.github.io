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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VUCQCWO%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T111058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFRwYkME%2FAQQauz6ZklhYNZea7J%2BLn%2Be2hR3cv%2BLoRyQIgF%2BXwpTYdPeCddP6hjju%2BwaiT0JQNaKOifgn%2FTX0KuV8qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADpgYo1oTkPblkgKircA1EKKv7YAB%2Bpe9WiFdVXVX2OYNZrdGamQfOGl1WomGMi6nYeD11h3yFGT6jyJPBkKmZ%2FKL5VVaEalY2luxX7q2uScaRljWykh8%2FnfHiBbflYz31JkHF4CFBJEQT3jjJJGd5287280Z9qco2IKeIm3jq%2B0s%2B1Azacfpp2pt%2FvSNQMOL49dT0I%2F72NBh63i74%2FfIMoBYlJ0kgkZQqUTwT%2BGiuj%2BzYUrDAwKXCD%2FhTS5H7CFjdN8JfGxvaINb3ENeLWP7ZqGo1%2F5frnN3UlykYHF3TtNm3ve8y5d5GnUGnD4h6g1XgmdkuydQiciCICpn0sb0RmD%2BbaXDHaX2SkBls6h4XC4XyEB%2FIjdNU%2FyOvmcuAegS1IGa7ErvuIVPQZy3wjYodYWZaoC5kZjOWBzRwm62UxVATVe0uBgdAuBV769OYKHQgmTGv0Er179EkT0JWLYz1ilCZG%2FyOeOVbdOUwAPHeWoewDEJQsMjWOVPQKII5KDef8LfTHUib0ok11tXU%2BcYUyWNdSJDaRP5qhxjgP2XdGj5h%2BlJ0Ojdt3%2FDWBpMBqGl4TSYwK629PDKoihlSXCmZw43OOw8w8DLoXHBl9SZO4fKDmfg01WDRUHh%2F3QWFuzcN2UoXT9q4jsPnYMMml1NEGOqUBNl8vECE9iRP8K%2B5iKuJEXaOCm12VSq0G639ni0V9GX6N7Vh93TL99qqoyNm2U%2BLrB71bHNUAcQt0zE04CZLGHyVaO2AoWNwDo35bB5BzviFVZASuR%2Btofn7I4tQNJ1nyxs4LbAOjHM6vsoL7sivl2eXLhyiPQyC6mKdx6t7M0Rx1cXGma2rduCQb4pfLl2Upwzt9h48IkS54PkzOPxE8%2Ba8Zom7f&X-Amz-Signature=b50b59efb79c008a38d7ad3daf53106f6d75253b347753b2c80532d1848e69fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

