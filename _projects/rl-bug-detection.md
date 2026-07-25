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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWFNRP2%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T200308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDRTEWVeJu4bqitNewOmKBlpv84SYRlklpQcaDAq3VeXAiEAjc6AojaQxzUxpK9qPFu2KOvQynn4wwRQ7k%2F5%2BFGvp4Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDE%2F7np4qheTz1mwwayrcA1srT6hYtwWGfpzqxjLiLm%2FKGzPnRzsa24oH7zSJbNrLv6UahxtwGI7DKPPZDF5BbRqDcKNuvMiREtwoLvkk4lUkjH4iVPe9PlwdR6SizOFF0UkxmEp2vF%2BYm4yuK%2FMrrAN1oLB4LoBuFUOYtxyqQneSsT%2F280uV3SbZAQ5drC5tDCx8aWLauSFtmBSobOWmlu0axt450b5uqZzipAGEK1rIihQY64VAVwuU%2FA6%2BM5dM9d1qq6Y5FvwKbem%2BwPk7MfL5jdoJbqcUI5ItgQiIqH4uFcxNvrY4jNmJB4nv7MUKcDwFZvHdGNB6qVoIMkt2RukjXdPHwgDk%2FQtqiOU%2FlMDNgtiF8iNU33z2M8DEfBaZj%2FgJCXyvgF0Lu81gjD%2FXWNKjUN9OBif%2F%2FerXbM6FzYltZhpp1Dun26kChqzsdixfs1Rzb47Iv%2BCZx%2Fszc0%2FjIINmd6foPsiUmFcHkkXQRNgsHQzs9OHr5%2FjejBs1nrNlvT3D87OxpSD%2FwRD4IsBgqSvcvIHeNH474mh7vzVc1GckOqrbhC2V902G8FY7g6OzWB6AP7KaI%2FceF4zy2SPMa6j6nFbbXIgzrZI9qa2weE%2BSIzr4hm5Y1PWUqYoWss1e2WNNHKcO6MQj1N7%2BMISOlNMGOqUB07PJsQUmAFgTTXXXos3wfGxWqtMIYxf4M%2Fs3zyiRWeN3B6fQW8C9ZNLB0mAN6UfezoHBrPsPjrJJI8jmMMIWecvjVLLMRnq8kFB8dRH%2BCRwBcQHwQmsA5vAMyxg%2FhQOC3BskxnXKThRBBdoMS5xNadZvcGzieY454jJ70ge2Bv581OdBi9shTSTTUqIGWfWU0vt%2FW6OUTeAtifyCldFnnlvPEWEK&X-Amz-Signature=e248f5c4f2d7738706b81e3c2dd01efc664ec7b6154733878b7f06589ff37eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

