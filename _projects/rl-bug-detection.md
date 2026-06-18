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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFW3CTQ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T021438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrCwGgEfkJlznLJR%2FfBA0Up5DhVFxQfF%2FYv5qCkHFo2AiBZ5Lxl%2FweIsGzXfdjfnQ7vIavpSaOrS7sxvLwhhHdSGSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvp%2BJvu15ihwnMBJ8KtwDF8dgT7gHh7sVQ2OoTZfugyknuzgXJPCRnKYpBeTOzCLc1ruxuKjTpiKS296kd3D%2B%2BDAGmxnVryV7aq2LXbEO4Zz1U4AZ8Y3s0s88jQlln53qZKlQU1vh16bRCTfGfne9sjqcb1FfpXLdemwRny%2F2OD2lqCubziodfcLgvYQkbF8Gl6up8cBT3REvvAiN1r28s6WT7ROQs5yFDIYm4mEL5yizuyjjhk6gb8ZLNIdS2kqbq1i3L9ihpkDsivaIZqbIOgmxGwv6pl85M3svL1dJlUIZAHIRjEqQ3JHRbgI%2Fz1CmjzqYBIxDpSiYZKghHfdaX02AJCe9SY4cM6%2BXjnP5HPyFB1sy8QL8XpcuZMS%2F2Azr4r3FE1NpCfQYEIkjL6fQbiRz966lTDFJ7fZgkxnevnblbICARJ4RH%2Br9dlck9jERVI%2BEy07UwcJlIBdUYmBTAKYCbu1AZwiXXkRG6qTqqP9wS4S1%2FqHh430bmZhd5O5qd%2F%2F0fv8whvuqGxmifWJ8YqE%2Bf2xF28PGL7DYTpgZ2SSPDhCR%2FdD6HcXfHz2pRP3wJEb6ncWuUiaeR7I%2F1wzsPigVuY2vANrxyhkQbv6w%2BDgZWR5ihsiE0JxQmyhdVENxy5e9g7TkrkoMDDwwgJjN0QY6pgEcTeePCn7vqE%2B8AfMH59Yy5YoWKiOn2YPjM4leZcU1nqdGaMuGsz1oKdRmSMx4ln63fKHsjekXGHdgD7Fiu5pIWGmFJlKcH2n0BR%2BVE34D3tCGwiUQauqlBAl%2FtGg5DwFD67%2Fql2Iv9Wuoe96hwUj0JjBLfq%2BAU9PUOExaKL00m%2B9tIE%2B1Q6JI2opcvuAjBDT3FzyGhcnvVKftYrwRe2age9H%2Brcwk&X-Amz-Signature=11cecbced7b562caffdc986edeeb4604a19e12d442e98cb3ff37a13ced1f8119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

