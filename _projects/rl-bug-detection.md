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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNAL3XDV%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T235745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuxCQgIpQSQIgOoTg4ZgC%2BT0etX192E6C1r381eEtH8AIgeGarGqtkbs8QFtaADrA8FTW%2BlxJO4WXiTXiaqHspe%2BsqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjdJ1L4P5G8bfQDFircA6IAQ%2FBE%2BPwnPNAr7VpWqetcHt8ZRhparrLsF62deSXoRUWIe3K9Yk%2F%2F1EO6K8XpmDosOyXkzpe3mHrg%2BmHNDmmpH3%2ByQjFc1d8RTwkaWgF3crkrXBn0KoWuC86MhhMe3m4jvvkMe5%2FKMdnPnsKWKR4uyjxc0FzFORQ7E5SxFJyMD54qjaIZJSTGqwRYJdXc0dCQWBBeecTvDi60LToYbVghucyYyINdjFbj2cUibdQImyIHc6%2BwjZ87k9%2BPSYK0emRaj158syd%2F116cTo%2F6Vx%2Fk%2FTNtLdgKvj9wlZNYmw%2BhZxdEtn8m85jDQR4z12LGx8fi5s0lWESOSytI9H1goVZbtdaWG2qlcwUgs3ksV2veDpiOCdl%2BkzG%2BeF%2Bp9ZkLIqFxv7eEH30ykSUqLO43Mx5EjL3I%2B4k8NP2t%2Byf9Bhuj5q6dJV5Prz2iEFXD4osSzFCWUqQdWBXCcvMqtUX0v%2FSBXjFAgmRy9dTKduiJyIwj03QNgBHUysqNaz63aBMYZPMgplxkVmKLywa8vijcR8W%2FMUjCFbejqCvd03QKxsnAaewM67eNeGFDPQV2GjuWd9jitB9xk%2BL%2Fji1oGaDVJBWR6vEXtLM5ecv37Q5ZFaY9J9ukq%2FHrucaqfsX4MPjchtIGOqUBvpAz0WTyU64468AHITJsK9nijjy%2F6e3vrHRY%2Fws3lO44lzy9oP7h67X4WIy90VstmwKpX0Ag3dFPuaWrQNDuuQrd1dVfiorr4qLrwv%2FnnpVslP8%2BphHo5b0hBREYIuckFqIjchrJrQvzR9O%2Fr%2BLS4h%2FoNvRg6FNzaCOb%2BI8XV31l%2FYM71zSFd4smF5MbhO5EkBilyFO%2B%2FQrWa0IpWjBMJp3VRocU&X-Amz-Signature=19abd4e2a54cb843301c7d7f13b2b32afdf621898674a207176a37fcd461269d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

