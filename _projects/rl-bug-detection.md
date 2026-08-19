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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C5P3FES%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0%2F3oG845Gl8LxtUE1iODvYIXwbjZKD1fowLx3Q2zSZAiAmaNcRELCpz9wF5NXH5yf5pRDwRAyDESWAN4KoNh3x7yr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMgsRetkVoMKTi%2Bb%2FkKtwDz%2BSBYv1NweL%2BFUEUheTvLRZUc5U4EqgRzwvbWwgf2AxX20urVkpONnuIhfsQWulWZwGFOW%2Bp5lUHqBmnVDfiGNMN1ICK%2Bnwgs%2F3N8UrkAfKOx8twtdYhSdl7aYSTCHMmJWBsTC%2Ba52agw7X1UoHhmJESPyj8Ie6mWJR8zD%2BFnE%2FABWVyQoH%2BVWRb0X87ZU4SqJpCCxtAJQqWANVMXFygg8rLrdshpI2veAblGSR0k1xbFEe2HynoNZTxy3H71bE60jm90ykRVfdD23D0OoBmQ%2BrmD0VQ%2BQDqjnVnRppRim9zf%2FQ0vNIkToJ8fFRyI6IfS82fYKw%2F4CC7g%2BrFBChGdesJH1XUQBxQsDOssNK4ooLVH11h9jBXo%2BEaiCFmHBF0rgvT3POklS2C%2FW45lDyoIVa25EEQqVuqG2b%2FmO3fhBE2%2FXQigOAH4IFiqilD0OxlTK7We5vDUvpde1k%2FWyE8hSQEl5S7mtiImsju7oLPo3DQRymBlG2QzL7rAiDX39hFcGbYoO0pmI4%2BnSZboeoWtAFRtoSjaJwBnRNjrghSK30qi9juMoeukSv70b%2FwkaJfkhIDBVgos8F9Rovt84%2Bhh9SudfiuvahbO7sYB3FYUeAsxOmpEDL1Puqd660wk5yU1AY6pgEkrYQuH1ddNhmLeWKaXDvOOkY%2F0uYIjOiV%2F%2BegmwW0TlrOgFkBz55OPnGiMAbpfn6Q0ZJQLWBCpTYVYikqH8xlrCtu9kSuyarvYB3olnedcndw9DR0E2nAHRwNcvZSus5lbv%2BOVum5K%2FOq8e7sdtIuFspGTp%2Buer%2F8Z8F1Y1pcUrJsJ16JyYKXylpk95UX%2FPGL0655xHOpQ7QiHHA9cvaYT9a3hTvs&X-Amz-Signature=f36048a9331c82c50b0312931c2c4ab5bb121bc3f3291fdff9e8a72a52fee658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

