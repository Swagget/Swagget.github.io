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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3F7TOR%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T145111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJkmoA1UqSYrHYuaAbrhjHy098JuHMEYWVsb43gJb6lAiA02BfFJUol1AzEbrmHtUV17hG0One%2BtLGyE6UN%2FcXCWyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMwIEFmiiARyB0GFjJKtwDKBMCf4ZXvAl%2F60vyPD63UtD9ilg9U6kdNzQToG4GVDeP1oRe99iVBG%2BwjXk1oer45CDAIYXVIzFL%2F%2B70hkdSM7hD%2BgfgkQ34IM9N04mQMvUz%2BOg17V4ORragjRRzwITQygItGt1pmKq2hakXBgzAUOfJMkz0mYn5wuEIPYT9jBv1wWsDpOg460VShMg0PJSKf0ZW%2BXnG4%2BgF49oXf7%2BvIFVi%2Fh62D2imiwqHdyT%2Fl8Ebk9axELt%2B6gNWMGZ8vSFdt2IenXZ64ihH1NiJ0TEPcheA50wH%2BgaEKXj2Hf3WkF2V1NkhqR0amtSGkaDSjoQwENgKPBqm1OI1aBeuwS0WkZn6J%2BPDiwXjS6GTV77hca4W9h3RPY61YPuiG1C7dMDJol7%2F9hBSZgcU%2BqGidrGkisME2DsFBkBQOjz1AFIvFL9TPXI8wXJgy9liRUbrdvHdgr8uEO8%2BVTgVEPFkHYET4omZgarc%2F3P%2FQ5ZtJ%2BmGeYlLvYp6FSZcajt3l1g2I6uavZvIMjNgZLaIgzM5uDaX6d3FASx9vK4zzscwxryjtG58HRahcn%2FSP8OIm8R5%2BP7tEEDcW1KAT3rTRziF49A04CSYGyosAwYn6Iy1a1BvstRGhMNHdTHjD%2B%2BxAeYw4veu0gY6pgFjNY5D1mt5fHRnU1%2FmchhoB8Q0McdOAoDri2vm1K%2BoMgG%2FJFMKQHZ%2BFVFgXfDHDDBC1M3sw0TpCsU2BuSpvBvJPJou5fbND0RZDN4fBxSb%2BrDxuSJByGU1H0uSJkdrhaoypBbhaqGOSuV8ZJ8t2cH783wYVa5QSOtUfhksxKwDLrLxos8mRDfg%2B5FF6rfdsnh9JP0LoOQvZFzax99zoeTe88aBfnJL&X-Amz-Signature=e7f51b7c5f3eaea13a0124ae486f2fb23eb59b18f62403c5c34fac24ea955aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

