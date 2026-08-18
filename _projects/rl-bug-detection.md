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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZJR7WK4%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGYzVDJQCOf9SlB4Y1s46LP5tdmJVQK1l5nB5%2FWQlwQQIgGBuDFa5CT4OtVqPML9hPS8rKt4QDT8ies4KoCZnng%2Bwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJttcCVEeICX34Xn0CrcA5mVcJFfFkfG7AgdKuB3xcn4xfHBnXTE7ON2%2FIoOKbfptjyIkfv77Bowjw5CcQ5bprwW2MxxEBXjghIDvkUV8db95sb%2BU%2BE3%2BiGSm43uZjxRHRzRAbYCucpqRV6NXU79%2BRTzIBuXhPY2fuQubHtRfigZK0KYc7oBwFl%2F4sZkoFDY8hfqLgs06Ws%2Fr69jxcWdzcKbIolO4AVNA%2F5b1q92frwuYrrj6Mn9pzbu1bUxv3qkrbuB4AVQlHU13ls2nOvUW%2BWYOTuhuRDDviVWdZ%2Bb%2FsA6waMxlV2yM28W0TayB5WyQ5QgIO4usdGuSPDU0heQvrvJQGcUsQyPLOYE1q%2FLooRmSqe5%2B5n5zqfWAjM3jYa02cpPCUGolXeQeVmsRwzGX76JycQYo1mPWBLoz9THQYNC%2Ff3unIamP9UHV%2FHELPbnQJDL%2Fp5syNXQ6AuekHgkMaLo2joMUAEe1vWFxLfj3XjdL8c7QIAO8QXqkd0QqrSKaDZ4Oz7i9s93EiS2pkCPux1MTouONLpNgF5b402avWII81S0Ylk7jJ06WqasMmrjTRg%2B%2FLmtxr53%2BVh8mNLhS6bgTjwobV0Nxftq%2Bn%2FOuqw2kewFL06G1t6ZrdIQBw6ITpJnrkH04QQSzf7IMJ29ktQGOqUB7zvtfMsA02gsh7N%2FKrpwXqxYFNKNvmq2D6WN%2FLUBM20le896olsyqY%2FUSvVuUK9VCBn5E3oiGl4U78no1j4a3eDsUE36hwWQ6oRarowXsF8gJuyghmY5RAsZJNVbJztALzQYc769uoazXdIp84iFbhZm91j87u0olu6Z1yB5FDvcMSzkHcZDeBxpeTyPKj%2BjO2Lgcr0BfCzrnsGlVnH%2FW3fZdVSZ&X-Amz-Signature=3b51d9b6504b6856f2b33eb519618d5223bac65fc870e5c430e733d1ee77d889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

