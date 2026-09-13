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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E3BHAC5%2F20260913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260913T215157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGmtudDTtJYLsO77KpgnnXVn2JQ8QOvwJcMrrSGbTc53AiBIZs8Wfe0WQobEel26T07aF9%2BpUFSjbrVNqiJOSH%2FyQCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyclJ17kUcG3k%2BJ2WKtwDeCSDcsjMvTUcPk3Iugmpw3aaDjRl5Sup5%2B7pRRZeCiJpGnQoKPLqlQ6Xu%2FIdasyxLar70xubf4FMpxwqmIK7TA68WcXmqZa036A8mMG2bT2EQ45aQ7yR8J2zvH6lpBQzqbkKdNbjwP3Bkx9GEXgrFivfJwGQ1TVwjmuOxYAAV6izipq8npbKfBaBbUcRyd5vE5pfjj6N6scMcnTwXDu8OPDljFm52xnYktLLMW%2FoBGeVl34IUY2Lq3T05F5cVFujStWPF0oX22eM%2BhpVC%2FttvxPULofszNd1rCO5mCmNAPqogBR%2F4UXIXon6OoQZnhQmoJc6Fo%2Fd3c%2B6MyAIvYRYULfdFB6jQ%2BhN1P5iCR3RGOuAWZmY6ErQGlkp2A0r5K4HmUL3YqAjulDTvSx1EeXYUpPeNUyks6jWNKKavt4OCXFMQxXsYj9P52stiH5WMNmFiyA4%2FMrFNb4MefxSlOTANzO2AxhrpOrSbLvE7Ks2IinREYdsDo3KJqIOpK2%2FVChAhLAlHWvF5mdme0iIKGxLn3d8mVp0EWtCzjjR7EddNBRH2N8RfXOeD6CSbm7EJRtjKvWQBcs54QABz%2Bvck%2Fuov5BcWdHbuWRDgs3rB%2Bbsj4OGzG49HxcQ%2BiSI2k4wxICc1QY6pgGBPsBliE0YSCocufVZiNdl0GPqdtYARvz0Y7DFOchIjgg3zVLkgQ%2B9%2BNiV1Glf7l%2BS2dXMzirdDyIIn74v5%2FppGwxNisG5o9r2p2KoWiK77PniF5a0lppQqioQD5m4nVvIcbgT4JHN969fR6EGHQBGfJk8aBYdtu3xcoYNuuBhlfYlh4ZvcLHKLt7S%2BdZjxlSKl39VKroC0bwZZJ7mN%2FfUo4l3E1v7&X-Amz-Signature=df27ccce536305b551d1158ba1e6644755941465681b218857bab7f5c0b06fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

