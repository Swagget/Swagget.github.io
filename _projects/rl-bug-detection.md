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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHEAZJTF%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T154320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCF88MF1kDeKiYDRfTArVRiZSPE4uuRDdZg2Bkvz1irIgIhAKF6ZicJxmZw0rdigGq0GUQKUzRl0Ma%2Fp%2FIbxiMSaJ09KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtpOM5JPr5ePMIVrsq3AO1bL8rwrPrqgj9kZIyZ7c0IZmEbTyaF3lEM%2BlM%2FmOBi%2FFgFD075r2Y3ecZ6Dp1jv2tchywINtwo5Ve12kPrcLFXg%2Bih5e%2F7mMojgY1Qo5s0kizxuC0oh49nqygBtFCSoZPa84xVeS4Xo54STcxkglSh5H%2F9R81wM74OoRjZU773oPx7GlJfCQ%2F6Cb%2Bb178z%2FYsApgkDRs9LAQf2UZcW4tuUU0j6IFPnmht02PypHlPE66eHYh5eVQA6eUfu404kTYMVPqfeyVcISmnPZOpjUe2PVBt1nJzpC5CowKrQZ5Y7LvENC7MtCpM111DR7SvP%2ByuFxqJFeR97%2FAqX0IHu1TO%2Bsm7hI9D08YinMsdaweHDRzDO%2FPMLVGc%2FiQIjZJjip%2F1g4G5%2B1owjYvU1ZPhx6y71LiPxBt7fZLnfQfCD5YTchw5IbaIUdx8z9sDe5SNQtDjKJuR2x8IMqWIaN8v8KGjs8YI1QaJ%2BC8URc3S%2BMxrX2bEXksNGYTDkdUxpKg86RQSryv3MdhgrQbz3mleWxEukYGYUfgt%2Fxp894kmevi8soVf1URjGETfjEqEa1KPKb84b6OAh60ZO5T8KWPIyRSReOie4O5EJ6bC0tIEVpJk5EOj25YDyDBBXUBWfzD5j9%2FRBjqkAW8jwduOowcaNzLU008cPUn2NtJ%2BUrjY8d%2FzezJ5ZhgaWBGZTSw5u%2BmtuEjCWglBNM0VDlcCeSJE8jRVi4h7T6%2FmEEulhfjNFkSBxf%2FoYSuacw37cv47tCo%2BI09zf2ExONiVKtUoq%2BiBoiS4PI5aKiM239FxpxcC3%2FUqx08M4Q9zBQY%2Bvf7djwEhOBWe%2B%2BFrrbmiYzz5d64wuaX7dNOvOevV7Nkn&X-Amz-Signature=3bd6032b69149b55f2f1a2a0a3836487374a5f3ae31acd5f3bdfb3ee855a940b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

