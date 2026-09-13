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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5DHGOK%2F20260913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260913T013928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7KGMF8ctdJ3Y04fZD7ccatsiVdR%2B1uVhQOKgT8iXd%2FwIge88m0EEYn9d%2Bc1RKO8IQdQ6DmDQcB6KYjd4gQGUFHFwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXaZ1S5AP5q3RjU%2FCrcA6%2Bumsj1XEePic0x2c0Ey1rsr%2BKCePErwaAmBQKGaJ84SS%2BoydXmZmQu9l0Vph29J3IB4TLk%2Fea7i3%2FTrwcPjToQNCJdA5fXXd%2Bp16tefNxfqhGrjY4AY8Msqwb9EC8ifazTx%2FMTzDs55v2nGBFmD5ePQfv5QxfKxIwYZ7I7to4G8XgPfBzcI2Wj4fS960iCXBBnWvmKDbdb1iBde6WhykQkrW1Fa8nrwdJCHVd%2BoelIwhPLB2ixa0HV4E3ol7Ef5DnMxFy0bBJpWjXefeHkteMa8Q0KzKJ1IYnCwgKzjTklu9KyoJVK8US3YjZtbbMIzDxW7JW7iQOm1HqugCSmMGhTpmn5zB8ROru5cPCaIRFTqEl4QmnToEouu9nyb5N7p7Vwlot5%2Fplp58Qq0c%2BF5YfHKqVN45Ul1qRt%2BvD2N3ROy9JuuxlRH9oYWfa5ds472O4jfe12Ox%2BaSyjppTcpdDgAs03I7ZmgVXmeeQqisVgpTNy8BKTOxcwUDRGWcEDMj%2BunD8%2B4%2FCAvfxT7%2BoDpsaIeDM%2FjPXUzN5KVa7paaG%2BM6X%2B%2BDUaDSOC%2BuGyYFQaZ%2Bu7DnSuZaM%2FfKUOJnSi1o3mGesLTZ%2FIpfDeWOclnHlUyddUEm1MXbbBVh30HMJLjl9UGOqUBnjjxtxcalbO%2B9tASFrBJmdW1YqCyUJEk1wFpOsT14uX877e9a9cpqnZtD%2Fgp37WKjwp6b%2FhqizA11UV%2BYCohFTP5EU1E9Y9QVODg6jht6yTzPdfWEwlEJQHPMfG%2FzEMJRSDfYdcnqilvDMbhAJjz1X8YR2yjPSl2cFd3iGZ2zdl2wFqFgOgrgNsSNTsMw4hNlsYQTtRLXmpIe%2B6Xt3eiVnV4HyJv&X-Amz-Signature=1068dec82b808bc11dc5b142eef727deb6f0a0242d881a3bde9f2138b2865f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

