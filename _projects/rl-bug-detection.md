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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFCKWHII%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T132821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIANM7%2B%2BJIaLXaaXzXw1PDD%2BajlIyiemQ7ZTymlsRz22jAiEAsi5R7G%2BaA3wOC1cgYmg%2B2S3bx%2By0d30gwv64l9IJp9Iq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDNBfUKwAdG4kNTSv4CrcA0Z4zFEJ1fffyW0V9SSMpX9gZEvxPOiEnXWuuiPHxcR4NzG%2BNsB4mKUwHgJhytgzARgcgM6lSb124boEEND%2BT72C4RsR%2FNXo57V7B5H59sLIcdd0bw5qTq3aAyE5td5C0MP%2BbAlQSY%2BnluKCwKngQUCZ68HAVYTiHkQrNx6%2FubcmP%2FgbQ0WA%2Fcu4YNdNmRTVdyL3EcRHn0iaE4en4K8dE9hIH9C%2FG5Pg3Z10XnlZNXke4D8mMZW8yTxDzRNRbNR20dt1113tv8XgFhMWNKSbHzPvgRBtwpLC6GumSuLan80laNAYUc6%2FpgtbzBcCj3vmMhRpaYqJyFAFmCsc62Ygj4A7LFGgVvzafCsiGEXBquXzvzjs%2Bo3HSP72CJypJset8Ie0uzbLaqmo2B0upIYTmlAnqrk5z28pUN%2BoF%2BkwDQw8ILNCMjfTZ4CVs3CWg3mN8sOVT8evfWjfL9FYSo1s5WCgHMvCB50ylmngr1qvtJsXOUVmSa%2FJxOy%2BrMBl03q1D%2Fxq4tv3Dxw5Vtxnj5sGw9VnTsCwKiUU6WA4twsKi0ZX4O%2B%2B7gzGECXr%2BWyKkN%2Fx2HikUudtjRGxcOmO3Hin4DWgc1uC2byJPpcENx8GNdlc6fmCZW5nL%2BOHbML8MPDVntIGOqUBrUHVpf5UKOY%2FfyYquT%2B%2B3fYkyJD2r6DF7pHBosgjUGb96W088v2Ys4FoDlyLiBgu6D1F%2B5tJHOrF6nPJaX553STB03Ce5bx1GT4WRFOPGC6CWpLTBzOSbCQzRxdtVo2fazNBVLQe%2F4a3ulliBP1LWhoiHySnYA74XIhEouiKOH1nJHiDmSfQwTZwKZuBXAeTnAaOKfXnIHE6EiOwVf%2BNnm71HgbV&X-Amz-Signature=7b0a9e9a46550bba402724536ca34157665ca095c4aae753f69fc05eae788279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

