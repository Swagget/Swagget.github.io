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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27SMUCE%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T101711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8IA0U6TipX0tvunfjnB%2FsctV8Fuh%2BtzegDVv%2BiB5V4AIgb%2BUDog%2FIrnyc22Y4yqMrgeA8vIUlmmzGtNm1dOvVGBUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXuvAHoHF1xYcVIOyrcA3%2BkYZF9kL%2F3FJdLFB8ZFyZkjzeZfGNhlu8bBwpXhcagiREc3XA2hHXEd4nL9KhOKyCf%2F8rmG4zA7c2xQslngNcUw9XNsq8FQzSimGERCoSBRr8bGTYktUR5aPAMHwmUxW%2B71gPbPNSkp4aylKpEO7OJM43zCSWmCLcKPiUHXs9zO2cTbJMkqbcyVqhOOyvgNrL0UbC%2BuIqZ%2FItcUGq6AaHz4U13SR%2F8yPQjTPdXQ0vBozZZzlJcV058VjSZhRJZNluGNtQidVZX%2BL4hQNj9FO%2B3bJ%2FI1%2BQllCyO5E5nj3sA0kxVN6e8%2FceSPFMIw3ZUAWD%2FpC0W0pBZA5vKTFOF9HQ9bP9bVLpYE%2B21Uo57NiUGwBgCZClRZ8vQOf8QQQewZOlWoXntz78O0tm7f%2BqGLURdU5WOqJRraCrMy6Nuytsly%2FruCExY4WeM3djzrJijS9LZtmthOdBkm6PdiEnvxdBRqhX96pPxiCNriDZfIMIj%2FB63E0ad0jqLWeM5x0aGWW9HCZPv47IYKE%2FFFMzNNFV2ePlJd9Ur%2FBPsKTOc95nyASB3Mg2V2IWbM1rwbNM%2FT8CMzYkxPgL5BZO3sOM4HrY2hhJpvYU6iqO9yika%2BAzmCOgsOQ7m09uQBnmUMLbwmtQGOqUBXlY0l311kvUiZWxjoRGTWw3OeOtoutEmpLp%2BcDL2QOQFJjruqP02CyM9PK3V4owYVUguVlwYaHS2JwYMCFt9FMR%2B%2FBfzed2t3MHiWMV1DN2odJOZdMjfepLlNsHCcmyt1RjOA6ie3cX0Y9%2FmDJ8swwMCqlZ6SgkAklkLOKejUHkM1MZBwAC9GCjj%2FqGsLWuM%2FpS0zJLz29%2FirF%2FjSR5MZFInW0io&X-Amz-Signature=8282f8b36833dab913e7644d3b7083873adfcebcaf4150c4cba79e87d2c08bda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

