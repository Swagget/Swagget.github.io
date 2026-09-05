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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLDDAV5%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T013819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFBiBk%2BVsjK9JiIKwFtQBqlavuNAsw75Q%2FVkvSn2FLeGAiEA5ZFaBnl09ospPM0uli2tXhdYV91hYO64i7f9i72ZGcwq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDNX8V8YEMp2epW9LeSrcA9KdV0khXCsIRGMEhip90Wbt6uwWwbnL%2FZow6dJl88IrLIdzOTvT%2B9T4fTvQ4vvqIanKum0sn5SSxmHAxoW6ypBg%2FGjZ79wy2PNI6MrbW80fXEt5kP%2F81Vsbo5%2FvWC7vxIh6DfKdmXMD5%2FY97GH9oMXcJGoevRYHLt6%2FNSH8fT%2BgeS6VKscRNjHeezSDh5RLg%2BHMKMpDPkwXjkAYpYYCiMQmDytG%2F2zMrfjx4n%2Bz1YZwKtg7rPVY%2Fp32fNsG9%2FwUZaBaLOUfqks1BLKqQtNdv50%2F45SGIbrONlTBRJHIs%2Fyzvnc2gbfsP7RsMk4F6XpE%2FC5SHq3GZjEMz9bK4Hp8epR1wh%2B5E%2FUGtDWc20ZDydow86z%2BgzqBe9V6wsuTGSr4fR3nlOyLLJLY1rSaoHgu13r2en%2FQT4gOSVD9WghUl9QhNjcF76p0ZzpLtp56htAlItx9NyOqXcQIzYaGt84Ek%2FtLwiLn%2FO%2FIawfQboKJTUHq6G%2BX9KAdfHxU45mpM4949El4W0NXWyZsqhfHQoUKwsG78hSdFZRL1391IbSUCCsWvrH74WeP9kqKTMmuErCODmb2ww5W1K4Hr31yPd8ro%2Fir5ygRGEC3QA3%2FxEyvTec8Wycl9VdkZw105kEFMNfA7dQGOqUBZITCqebPN7PlPOadP6LOe%2BYAAriahkrhEAOCOqzTS%2BcMMiutKpFghG5Slmom3OUby56H4dGr6vtpBrTh4IS5AWm4mGd%2BYRn8EEfutn2VR70RtnRCV1mP2eF0saoS%2F1E%2B%2FL%2FG%2Bbs%2F8%2BIJxjkGGED0sbILb03seG7YpfQPieEi9SxJre9Hxy1QMh4V0OUeN%2FYcBAp5nhL3uZnyHKoum7UMi1SW78qM&X-Amz-Signature=9dea56ac64f88078a8c273b65dcd3bbdec6a6fcaf1b4ae59dce75dc9e0ef5cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

