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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHUTG44Z%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T121740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCT%2FpIKnNscSTxCqXVBqrthxjeJ7XHbMHTV0UBE6nKvxgIhAP8P2zqzOeuqPRv9fFJ75wHDD5fdTDea40yR3cLr76leKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ9xqPyZBK9G3%2BrDIq3APnlhyFCktvbNMZSR6yvKuFIZJyudVpU%2FUb7jzXOsUtsSC6WZ9x6lJSEdEWhStclh5m7FTYZiczt6CRhzFtqAHoWEczzwvLPjtMUUn2w4uUOzzTlaIfcJ0x%2BjcJ0mcZcQBK07BmaDwUHsb0DCOF%2B1tog8oF9MM62%2FwtYQMHBtWo5ixF%2BBovNaklccnjvFohblXRfNllcdCJdfrtrXAiwsLBOG1jTInbPf1R%2BJ2FS79QmxwBnmScxAvfKHf2HoaHFtFsw9BrjFeLveCpv9FvxGu7BXBhVtPVa%2BDLair1DV6ItJ29kiukfxVGAtkJanuXKBymlOqsWAQzeTpoguFZNWEABbyApzgMWIWwE8zjnYgGlGkVo3GAsku%2FzHPKkPshOlKSHNiMrbesIhaBe%2FgRGz%2B3vxFY9QOI%2BsGkrnskg8gFa2Kb9CUcJJ9Y38yyEqOXk4hM4l5nLKMoxLcb51yXgJ1CgWJs0FLqRKOL3E9jw4gllCSOp56t9AwkduqGUIpuOrcC%2FqSGSgywkCdKe3BjyuHoYcc9193%2Bdcckz07Pevycq17RBBLDGiikwgThnQz8QXHYiXrqETdig1HVR%2Fvat4cDSDSnLOn1UYCp4xJNmXCix%2Bij4t7VnVS5SqULujD5%2FIfTBjqkAUE8tPqWk6h10VQ4G7UjNAxC1RoD5%2F1lcJS%2BFh3kLh0qzkSWnt5ZvAElAh2A1K8cIfjuLzXwm%2F1Bn0h7TjCVVNYOS1gYy5NMMm8sqplsAs1OC9YLZmBco7CMWoxutzeeDQ3BVbWMRqlpdMdyxLcSO78dzA0Rs4cqc%2BPnzoPpjBo%2FrP%2Fn8AGzQEh%2Bb1wt61ylcOlLl6yWnSmAtEobvF8jcmcbhcpA&X-Amz-Signature=6c009b23f56dfc2ffad72e262ca48015369be32053d17be65cbed51add0c0360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

