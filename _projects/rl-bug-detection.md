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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWVCPEV%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T152352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIHJaIz60anOiwL7xNWEftE%2BWHJOqAnE9PnmqFmd73TRSAiAkSFX2bN5bLF3NKXeRYIaxpDro5MYQ%2FSdCmqz7U4qlKir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMytqmTcs6O6kKMqj%2BKtwD4%2BmiXF%2BhvVwb6ExG2%2FpJ6PdjOaJPe%2Bu96%2FaeDK9qsAWxHsLWxFOrRdCnRaM1TyAn6lRD7rIaGFxwUIC2TSn515qGgjg87LeISd6xrwdcQ9pta%2FGWHQyp37exFKgJAEQd5Ik5K1Oa2%2BiI95J%2BNPXmtpy1V54l%2Bg%2B1KHp30J5xE4Leo5bZxD3Zag0X9JXErsttdIU7RezxMLdfo3biKssdzAfDlQrfLCM77qIM8VlB26Z7IkBMrbAO0TPfs3fcLhm0AwVNC79xWjC9FMiz%2BHN9t9otqVfB7eRod1r%2BpeA9KXtuU%2BdYC3kkwwUSt75iGbI47zZCBx92k5p%2F5Z0gv2SyW%2FrQ5z8Rmhrg24VDoGxVgBsFNAWcPeovoRwh6cmLu3JSUiVPLD70zan7jIcW%2FY0C4Sf1qmPSuBj3t1aAjyWU%2FF2R8%2F1R37PPjRhe7kDJfFc9AvDmp8UrkNqEMGFF02%2FbnhKXe2TwoiMwPI5y%2BS8fC2j1TEgcznTZqkqMu%2F08np0T4cu4qEEaw1eV0qS3BgYm42Ru3Hn%2B7YQt2fQ%2F0wMKBllq5Yo5obdT6wd3HzMVZQmjy%2BkLDXMpyLwlD9J0sOv7ebamy96qyr0SYPd9yy4U34kk7Dsa6huPbUkm37Qw5NC10QY6pgHwBSriod2GQ7vac5iPeOjRv6jlkmCZWxebn5L2ugOcNh6KayY5XtJgbXyhQTnCCRA%2FE8g7fPyIydAPXrQxoD0jwU8W7IZCFocDfxad2oyXYGT39SosvOUgOdb23sYINnqQuslYr%2FqiT3mogqVPsUU%2FnBc9eUwcM6mPHuX2NxeYML4bRH9LBIHoSSmSlkyzDOXcSgL50%2BGHEH5y5cT4cIQIgsK5nNHN&X-Amz-Signature=2d4d101ac8ab104ddb23306252495ecbd49fb3df65214c65a9e6114a7708704f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

