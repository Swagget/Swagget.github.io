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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NM54YFQ%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T075403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDGSAIvD%2BXwsRensLYZOBx0jOJtMWF1%2BP5FHcCPcgU1FwIgSecrill4MJ%2Baa%2FI8kswNgJCiVWmJCODfNFlmC%2FgL468qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLy%2BSqPa7i7hCcFY8ircA6TuHHpiwnHj1qThyoBkfwcz33ZhzAAyh%2BV9V9L0Bcz%2BuvkwEVxc5GVqkL%2BoIw8Jvh88LYa77zCaXKHQyk%2FYBg%2BH9bvhUXPRUAc%2B%2BTmcIhOBal2mrUkala6fB0WTo8alWiSmNNjojz33WT1Q9GqMpHKFgUYHmnePizuH581W3vnIElOG5EHdGz5YDPy1meT7N6BELutY1kz2YnhF58tmrUmARwxzVctAPYxwR6eMLQ3xOwlG6ZeyOnA2ZDpi3ovC1Z5LjL65UxzHqYdmNTEtk2Nxx4PSpV294rPsLbZD70Nu9Y1azl9OatUSi8nvH%2Bqh9UVHqr8v7WOXAW2wpvOfUjcmBi0il3heUzWobRcco2wui6%2BuGZd8wCucdI46uPrBistlWsAwhFJCDnqu%2Fv53rIRr08LcZSKLS2Fp7f2BzL%2F0z5pFgLQWE39iNP5%2BI%2Fwb57U4iQv7NklROxpPlcWTX0z%2F9hi5T5k%2BIwvRLoI1KceFGTss3rfy%2FdSlogP7DvW1ivXQio6kRVqBOtquN%2BjGPO7y953AH0zoMhjjj0UoMAhVgFrDowixJ5qxhdAcHlB3C2RIY7YBhQV6liQYIQdlkbEBNevTTjR3Dj75isB5TRcfz2SkAF4UkgUDwLiWMJqIzdIGOqUBKA7Lw3DQ4zwss1NSuBDaRNDVptsvxTdQ9%2BXw%2FcEMwYmqyJj9%2B%2Fze8JNN0I5TPR0J2i%2B39IlxqmreUNiuLf2tVrifK4WpBR5FPskRO%2Be8lviOCNjHqCdynwsfaZhUVcgEXSdEE4Vjb0vqRbP4M6BVjsWbGKbraM18PSvAaTsbEaDzP8btxt0QReV2dB%2FILX3P0pbojUyNzTaeW7p473WNqDWx5fpQ&X-Amz-Signature=0cdcfaf304228df1eee59d634f8f7fb0a0306662f461d944e4556e545326bb1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

