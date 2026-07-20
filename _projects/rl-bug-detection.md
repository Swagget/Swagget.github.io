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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466275BCMHN%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T234438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHizefCyy8j1R19EmiSwrk8ebuhzcJ6HDxtLqlHjH4%2BZAiEAsB%2FwvJyCYSbGHutHh%2FI1QB%2FputSwMkgJMqqj4l08qt4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnP4khos3jJwgUoFircAzh0DvgLqyveuJ%2Fwd7xpgkKbdjMc%2BCU927vrcQeZ02KQq9lOFdOL%2BLxKQqKV3IE%2BJ72m3A6Ezkh3AmapikkSd43LS5hkCF60KgF7R5jUJ2Y1E%2B1D%2FoPx4AnDRHWsRKz7E5VrwVm0IOV85sz49ES0jGMmYyF7xfNuQ8cykZHmd0Y5wCjdzWaCXrf9Pp9oDVwJ9MeemjdMIA6C3nkPnDCdjDBpRjXZk0ale8FBIiYFRQ10TmM2wKvjvPoAe1wld9ymZBm5Y5j88soKC%2Ff2dCrvOFXU4LP7G0SPKQxCXo5zNhu%2BHDfdaFPvY9uP2jJM0GYExc7DP2OPy9jxkgOKYvxoDjaQxODbYiOTNBE%2B4odVfG3f5qLP%2FJ%2BkkAbGZWAfd1l7wf4rt8c9SB2suSinJdJlhyZuROM5799jhHgrTPe3ODskeahm3aJ4pdnhHJiEHJpwmNbllLG%2BU7KoHAdZK7ToFoIr7YqwR03rCJYDou%2FKmzI78GqybDZEo%2B3x9Ti9bGwCe%2B0HDpvu5x5BZiKjIrTDRW1SQddQRHKy6Y%2FurMbbYPkqj9GiQ9FsqsYHZNNssgxjE%2FxXy9Ovth%2B%2BQRq5gns%2FHMP9cnRYixVdniGRvkVLpF6k%2FFZ%2BdSKvMhPPijvbMKe%2B%2BtIGOqUBFIeOt%2B5juF4FfyPoKNN3WrMadUBrFlm%2FDTGkmYSg%2FqztO%2F0jgNBZFW7a8kAWOg5XEiHquiN%2FaBfbafV5go2kmYvHND8kg9OUleUfAqtxYhnYALg2Du2cneNE7K7dLuIFBszdUM1UmKOJOPhMjN90HOcDnFdjGHko3w%2FI8Vogi6jo2rilUDbfBGbaVhDoOQhbR%2BCpNECN%2BDSwn3szfkX%2BaNFgk916&X-Amz-Signature=d8859978beccfe04720b983086a11d7e8c729552950cb968ba1f519b980748e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

