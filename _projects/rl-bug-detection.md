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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDS4DDHR%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T171532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtB0NGx0idyNq2uoqAGM1azCMgzENml5GYrcNTR%2BVBHgIhAOysuVGpKqpkHyjnuOY%2B3skfgjyIIwTDPBQ5tFa%2BMe7PKv8DCGoQABoMNjM3NDIzMTgzODA1IgxSs0OIwguywlCEtgUq3ANSqIMTMst0FrmYXaWFlezGMzfNOf3%2BsTm6Jd7Qq2sEzAMntbio2txNbgt3EluFdI1ndmK01%2FbxpqVvsY3tirY8SWyvxVXSayIODGcn1jPwHjhJZ7P%2F4tc0fr8MOl2Z0jjlv0Nc9ZYzNJs3VmOT4iC2x6iyLfNx%2FhnSp%2B4UAh%2F6Jt%2BZ9stMkBlg4uMEFvntMXzT4%2BIPt2jQzr8eqSlvIipQtKZbJe%2Fu75lpNBUfFO6vICMG4LJPS3JzksvmLW2ZMyTcBGPnLLOPNUkepIYnGyCslCbtnvaBeJPo5lf9psbqfx6k%2BQ8DHytU12m3H9n5QVmyUEthMWO%2Fmy1oaIg4OpOjiHQmb%2FswR%2BKtxx%2BBg%2Bz2i7uy1tPzccW7mdqIproyTSmiUyppOjpIXGLevg4IW9KBQHPnemQC5LUXnbbjV%2B4Tq7y1XrHYdE6dp4eJCkz1CCbrKHf1WXPSWgrgGBny%2FcgwhWkJp68xzUGq%2FAiSxxj%2FsDQfqMlieq6GmprYBHxWJWRVYNu4hm2VgKXKbFpkqE0kwUIqURgEd7ZzBzR2YtQTd7106kg8ZOn02KupvnVNBW%2FX0wtHxRxhGW4P7%2BLGP96zJl%2BQ%2FTNbtfAZXSfwewoNacbIa01bTOu688E7ojDRtaPTBjqkAat%2BJ6UNxJeME09scgqvhGIRgFgeuWkLfZPkhc%2FaO%2BpNklsJxLLoJhEfpFdHMNdyanjTMz1RbhZVbe3LDC8Kh4kS1d6udZ9uYgD2C8d4XeIHQMA4HsS%2FXX6iicaj5UYMlxh%2BER3bmByBVIW2dnejW1TEw1pDVE3tJvA3RVhwFqNgkZzcNmJrLO%2FgA4P%2BrnpNueFeGJDfTb1I1dDYNPG5FBH8tqNT&X-Amz-Signature=d87fb711bcc634904964dc14d327bc6eb314e33ede4f3e76ba36fbe7ab654907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

