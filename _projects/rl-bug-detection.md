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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWKRBVUB%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T174428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIec%2BGJJ2sMn9as6ew%2BsZ7ZNlbRerPx7PIr6FVnnqfrgIgc0MiCeThGubw5GIoQ3cE2mhMKatEoVDGz3edC5Ek6lsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHx2c5mfAiHg0EYhtircA30IFfXZYy42HuwOqyQIvkK9ThqiAEIcoURYLKikNO9%2BoIwl%2BzcagT6YQ8rT8002%2BYpqjunp0M6oOAyBtkBIVcwkKBY7N0iMcokk2WZwIEH8ljkiaHZFt%2B2upEe06syXzVkLFxGmO%2BPpIuCKxw%2BeaxtOZWaXOwYFPU1H2M%2BbUn3%2BoDmJQYogvSJty3RR6s4VkeksxhpPwTunsGv0kekmEKNgaKHtWdOWoQD3zPALRwxAgVlTyZwWfWS7LgWh0mYv9qfWSYrf3O3tvo5KkXbX5SoyumrlMmcIADwK8axS9uHWqLdqmnAZhN%2BjdMvwaUpA8oZK0tXKqJs9iqAV01q437Uq0xuJc%2BqKzPMrd6Xe9yQ5orbCx7vvD9ri0M2ghbxpAdmJQulF8MKaTTmciNZ8%2BMEDxTFjVxSQS9tr3uo9qHc9OJyM98wHKppjQ1SQPtdG%2BraJ7fgM09FS5mew74yioYYHz9ystb9wk7ndGHsQu7B9Gp6c5C%2FtPJAkojJwqxQu3x0XxCYKe%2BCe33ukiKQW1jvGmsWH93dcrD%2F3KMvn%2B%2F3foFzEAsVX3ed64JybIl1317FvtsdZnI1Q12aqimphgkJ3CEPWPddH9VJAYe9UogtOMUqxK20njiKc1118MPTi7tIGOqUBKizQnwZMkFQSlD%2BDXaJWV7afb033aUXT4KJTlcnQEak7UXVy65gYc%2B%2F9RSRnodgPVqnkgEcGSycfwDAlpMzlbZyw0efAeLwdcvDi1HHl%2FLr0g5jI4HR4Jg4iTc9xvzyHGLJ6V0aEu9MW2Wg%2BkhZTIJb0tq%2BKvRE3Cj37TyYdhpT26c6pBX9jn9uV5JpdWSpSAFDmSxItWp307bKjje5CXbwzd2xA&X-Amz-Signature=9f154461a0c747b19484a1176be3a11cf201d497f159807287a5bf81b199ca18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

