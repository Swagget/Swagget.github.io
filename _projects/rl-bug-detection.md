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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4MHBLSJ%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T081855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHMM1Q6P5pDO6UkhZhcsZC5VcPiHxjwWQBx0xw1cfvEqAiEA3F308HtXVPAhqScO13Lqd1jt88HiZhoHvBzjZ8KvMpQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmPki%2Fzi4nJpfAsvircA1silzw5camnxatYPLgjCwMOLqJS1%2FFMTg7hlI94eGti88ni1U5%2F%2FfDObopCwS4HCj2wQGuY5TPYnAVOfX6NvQ4LGgM8D6AtuVukmSut3yE1XVyiPcVd3%2BfDZaPA88mE7iG0%2BaYA%2ByeTH%2B%2B3msKKWFCXWIgXRTPsUrF7jwTZauy9MMArm7NS%2FF4ulmQOdLRWMjeSBSb0VIqdC%2FU3tB0TaaFVjhuC4cja4741dhFUtSZ%2BanDTa0qkgylpnTWX1fKQGFR9xwsgld%2BdNaNNAFicAj1oIG4CWfozx4Brr%2Fa21uVVtnkrMXFuikPx2auFT%2B8S3Fgar15zzh56VtZSgP5uAha75MYhtfJJjDWxplYDkcdwUlTmKKXNaB7AnExoDvhK85Q35StiLfzPq3SzbPLBmj7FhFSbTZIQLMugaHlflrKv4q5MYsF5IYALmbKasNtk18dRi9Bb3YQFLXiQ45r2ya3Ks2esKUVViLa6DcJCocugmGHWbqJoih3jqHx1isBR5Qktq8jciz7mZ4IeT0iMb2A8jxtc9csxzitkeom7fZj5nEGqacOQlqEVsBH4dXFea6gc66RHacr%2BiLOLWcegk66oE%2FhwRr4swyA9cJBl5YjhGf%2FbdOob9kLAdf4fMPLp3dEGOqUBwAUxcwMOMPEF6Ie1Zi25sD0yRymYIsnfdOPU5nLR3qqUZcnKg%2FDAIsZrhrsGfsYIPtOdrMA9hSCfyTu2720JNwz%2Fr%2FNnVstgbQmRhRrkfraLgDpmNFHwUV2CGN%2BW5CWGALmQTnzzzJytxlg0ZdhYoaKZL%2FjsQugS8Yq%2F39fV6dYsh9CQSbkh2Xk2PZVrCen06KHlf1XdEf%2Bw20KptZjXoeOO4uGc&X-Amz-Signature=9ed0cf72e84876dda764ba6b11c2e96ccc9dcf23fa1ab6b24746a30d3369b26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

