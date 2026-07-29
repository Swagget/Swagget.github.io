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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEWSAZ7C%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T102503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGteouczmRkuLYMudAxNeXHlc%2BuxT3kXzbYVP55YDYPFAiEA5jkzzLaxPjBaOq0EAVvrykXAeibcwveSyCkVo0paEWwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMUBLmYCZSyxsxs%2BQircA4N59%2BqvRx7y774XfemHX157D%2BTdIlkVbZvv7ULe7jpb6IU4hO%2BMVwjByrWOniWfL7093BbGjKVwo8hwLbBDr8FGMcECnkMPAdFftpMRzHOJVO2GQ9dSy6g2bbDJ4HUL%2FHfpwKPI7b819CYvH%2Bw2Kdu471J%2FVIFjjf8XpTsnA5v%2BHuQvyd0jJb9eN0Irz%2Bv%2FgB%2BOPJObsX8oGlvd7CBOvrf%2BCvMfIC2QZaD9rfbFBx1JYJjoHb9wFfyAkyaI%2FsvyOF1E%2Fz0tm5vSdfvNjPgDXjLVWesovvMkMaWZNBJsH7tqEljM2nCmOP4gNn87nrgA%2FPA6N7HWQpFF3jVXM6OI5AOBVFHZiBj%2FiD5egXKtWiQ09HCxCrLnNKLla8PmFDXVwVEiTGonFCyzipo09qAV6cn3NDWIgXIzsFP8gqkSNgInhQHS4pj2Ae35CGCIMGf8XfJqe9eRSM%2B5wS0zSbCCzixvIRlN8tnj%2BzPjIFqAulFwk2%2BYedU%2BXmy6pPti8xkjd68Kbf3SITLHPiB1yxkTkVBt5I9qhgpsic3pwT0OfVV74CjYLwAuLZG6IQcFXTXUJRrG%2F2eBtsXOQVQB6RoDKscf1nTo6DWRZxWtQInZt%2BmtC5fpFoQQ1hCoctM4MNOQp9MGOqUBnS7GfzFR7vOrbpAkHNiCVr4GTAcmfW%2FB41H4%2F3Df0CNV%2B9qzERatbYb%2Bz%2FJdTi03jeBRxTflV3prLkOEYaWqK%2BFli2%2FoP%2BvFxu1DGMhca5lOZ0P4Rq%2B7XW41qpa4vpeV1Y8u84mfO53tRTZGJpKomrE%2FlOd8DVJvtcTtaF8tNWph7jWp0Int3LO9nGoi7584EdGq8Q4vtNkrArSFY0MHQ2p5AB4v&X-Amz-Signature=75f9427f01ba161e68659c198e0b02e3e928864c2d609d3e681046b6da7cea08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

