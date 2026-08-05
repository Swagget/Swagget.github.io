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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FOO3CPH%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T150501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIDeuGEDVNddoQvwAXJAmuSxX2DhzokBZZIVO3tchOB4iAiEA%2Bw4UpJrSvtQDyjhIzhRnkza0tTtBKbj9QLAbWD3ieqcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDG0Gq9I1WhiEevve1yrcAzqxiBi6zHV8IePSx8Zi4VjW3wK3jcGdWr2FWG7PCSI9yZJuvm3HkHZRvIPFFB2NZCULl7sa%2Fhwc9Y%2B82jtrYeDBKic%2BP0gKGUvf6whKTPHAec2yJgrmUUgQquFpxGdyj3DnYhsnyE33CA%2FdZMMRpwdDFSFeW5d1hXj3uAtg%2Fpguzi1aG8pH1a7T%2FNew3853XL40ORenjO%2BpMM1RPEgj%2BRPVKCnyf9Di40AvF6t3ZkabNI4LXdiAAxuiBDtOwUIyFBdY3nfqEDaQqgkoi08Tj0Ra5%2F4i70Z%2BA8EtXJwLYvG5CrwZ%2B6hJfhPYWmhYih8KZztjPYTzaadcXpA%2FU4yv2l29gmK1vwXBGNB9PhTeq1ED0i%2BNTcSleI7VQ3cf46eRGpdOhZ7LTncPvjtfOD0cwrh6iorAZd6ZFWrRqlxz%2BWVYPdA5E1nCOuGLDQIZVjsVpFxC4tBd0BlSU0k3qBTWr9hRglBZz98qNo6PcZTONuG96lYK7OAc0QcK1yfTwMK%2FMTIu6rJRfMoysfP2XgGwywBcFh%2BUM1FOgCO1oRByxRns%2Bl4qvr9e4VPtooVw%2B7xUC5ObaDVfJvgBG7SHVg4iPTJSgUfd2qkhwlj3nW8u7ziBbLuANlphUEeUTV35ML6KzdMGOqUBu2u5RaSbPS%2FPNIJ9Le7h03g4naOqvYiEURlUM8i41KwugJGvhV6F%2F50XpIeNcuSSU06Ss8%2FCE%2BGf7HelKriGwER0wLFCxTwhK4%2FcLOt%2FNH%2FhInknJMmKzVKrs%2Bf%2FZHGR79F%2F%2ByFkDnIsOdBu7Io3JxCOvcDU5p%2BxhcJPqOv6Oipj6vUl4q3SDA2CMilX5rYehXf1pqbkUPaidAeojcnBLhHBFSUl&X-Amz-Signature=c5f023df5c4ecb13f597701e10671763650799d19ab0f98384fdbace5c949584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

