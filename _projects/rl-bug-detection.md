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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676OZOXQR%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T003032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIAJ7GJwjSTHgnzoHQ8sHkNf1eZYenISdIzESYtd7%2FbXrAiEA6cJZ2hmBwnii7ay0o7La8qJ5ZOEH8KNuDX3SiWxo5CsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4LyrlnkxjqrOHA%2BSrcA%2FV5xEtZC2t7jI2b0%2Bwjb%2FC%2FtkuBahAvplyUmk8PRlpzNut48VV7mdo90%2BnPMYwGGeevXH3QPgYLKpTvhAzrIL6yOWfG7EGhzjwfYYF1l5gFkQVCFKsgwIqbkqY8rnqDIGi0m3PVwE%2BcfW0LLkzZSnK6MH71vIW9iV7HGPrgT%2F6bAE%2FVMpqxgKEF%2Fd8J7FxQtBURaYVbU2OnARAfrYe%2FOqg06snKIvLPNE94MJDQJJ046QOLYj7%2FpGMBPFwdMqqyDc%2FMoLPbnSGRXCWMbhGkljmMlnfxMebl1sh5%2Beolzc34rW9tTJDa6AY0zCkF4TnoZgVbY%2BfIqnzLBqaQInb92nZS2EQ%2BvC39JjuovRtQqcnyTsWe7TyGXP80%2BDny3KIa8aMR6ldM8nsU4t8o6UI9%2FZdw1QttIIoI%2BUOV7HmwVH%2BDwgTUKrblfhM3yL8dc%2F7m%2FUShuCYeiTGQq0GoGJ2HWGT7CizlNUvAlpMzlMdNPWXUSBHGwVbNb0YQyHWKd4P8uwp%2FXXuMyVgj%2BWqR7Uo5%2BaSISW0VaMgmdlPNLtliAvC6CuTJSa0bumzPzi9ngOQqq16ETgfmkJ22%2BmGbQZNKNYTIVq%2Bam9YlTqU8K4JhR8dywgRuV%2BPvSwMSITUwMOGNs9QGOqUBXCHccs8cqjsNR7Q1utYv2i9V5ipAoH0%2F8dOffp7ny5deWL%2FFyZjIWzor0tS0SucLTLab3xN3gfs52oIB0clMqEH7z1JvofsYEWz96v%2FWYODFMnVK4nU2s9Vj6rk6WSuKMKr4vF%2FEtMA%2F%2Fva%2FZtNRUMEMn8Gz5FX%2BD1ayDaW237LF5%2Bc0kTPNWFa5z27IILATVX2SOUu0YAK5EfYVAtzH7v1NKZ8T&X-Amz-Signature=1798db5aaf31ae8a0a8f84724a75a9c3be9f5bb260afc34fdee8ec30581f55e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

