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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VIAREIP%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T234522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEEjI7XD5JAkldSrusnoJz1WeIKkmSUtly9LEudGRqSoAiA8B8sQm82jubibNF93P5DeeU1uE6snfXpj2crAGrUDxCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMI9GRkDvUR3COvSYNKtwDdFTl4YQTmBuQ3U%2FFw1GQIfCXZvv%2Fl%2BmvgJk3oLFegWt%2BpHE0wj5RXVDpxtWB06jxMmHnTiIrBxspA7NAPI%2F%2F1FdJ62nWl0V2%2BsomSEQu0NTbC7eCDMlXKlNV7rCOs0g5x0p4oQ0FkHomPk1LrWZnSm7RE5Th3wycXNiSbPtiW0kYLw48S4vc1%2FU0oGuDl%2F0FlPulffDfkCm4Tpf2mgKV248Viu%2Fnji2dOmTGbtSqIVn21SdtPbvggFwqjCxg37BcKABA1SdaH0ISh88VA8Ta30pFOXqf%2FhT2ps3WgyJBB2tHXIXehXr9K%2Bi7Mj1HRspV28CilszIlOb7LhSV3ossIRfOQd2P%2BaJ6Uoij0MXG6fpyeTNEkvS73DOR11oATPdU9XrtHFUwEER%2Bx4E0obxMgs6udy0%2FqEd086MLPXRx%2Fy2VXXGn%2FT16voK0qDSAOIDvt8Vm6ZueiZxbeEHXeZLG8Dfn9w5IpkcjIeCjL6sukLe93IOJ4czlLDDjKE5PmnHXxpXFxkGYsXv0hAOkgBmF8f0E0gxBfxm6jQPOIe2oIC9rWTEglv1O5Ht%2BGgfrsPJkT1Ion16IPgpRYiVgnS00PcwpCdeDd4UvpTrRIZ3bc5SpqPXhK50j1C8C97QwyO%2Fr0QY6pgFsTwYSsjPwAAvzmrXgn1fVVLFwVCRbmJ29XQodJGEUiyKzj8bi3dnWD8ow3IYR1rqwEzGZrd9iA4Q6ETgDcaCd2Lry9EVAS3W3FTpXn5%2FeNSgsiAOu3E2cpVxfs9%2FY0fGEOceN8X1IhZa54VeyvW9CBsli6j0XIvtyvComTIOHQHv14bYKXnNJkazewNrzIRTG0TF6cC3uIJ3qZYQFFjsj2bxQixZ%2F&X-Amz-Signature=ffc7251e50d9bd670e204976005b3fe4324b81a7e60d385760f5c8b82f090db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

