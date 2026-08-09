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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676LPABMJ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T182053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2Fq5shlU71%2FajaLgpskMgXsotTcvfWfcVI%2BiZfkkcUmAiA3K9ppe5Z%2BDzXBmy89OQQvySGyzcb8C2Cr7IX4L2Hc6iqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVlLXXPDrrT9XBqkJKtwD4ERPZKUa%2BjEM3ZA7qy6R5a%2FVGdcpXeINJE0jAixNP0gJaQLzOF17FkRDSwOiO%2FEUjMVfmogRjxRoUsUshVP57RumYqm%2BxBqIOOhnFGOi0KLXTd2aLunZHodAzgKiiDS3gMQ%2FMRHiYKanryPUcSe1AVY30f5%2BW%2BjnqLbh8RFgHtmzcFPaljyT2b8UJWqCTflDDciayRelvemA9stbEBQC5UzzIPg8fJxxte5JljEQN%2BXO8fK2U2e7IH44EUTQaHELKyHnobh33Ww6JyIYdoGHOfoK7RnQrWruMRTOmwVzfVARtg2Sj8iFkmomXY6e%2F7NICbUN8MVeFPhx5yASqubJJWW3NEiHGiVAjzKW5xvG7gPL43qUNVyLumACb%2BOZ%2BoJTByGlWgdn4x%2BdAqRFFjBtemdYVQ27%2BM44DLgMGUhpiubu6tW9B%2F8UxwZ9sgECk2IeYINFM%2FUe4DtWwwhF9e3cxZDGLktk%2BdMelBXRRIYjYOmSJ58mVcmX7kMl3x0ITMD%2FtH0RBWKiaA4TvJSwVr5OsGPzuFSnR31zucMp8uOsy8ObM8cy6p2uXNcEJlIamWW1prhOpHROmp9mtNbeEiStZjNPEt9QLNkrMyIkCI0rWNohVuHexWziPsnJbcMw7Nvi0wY6pgHyjyt3s7B8BAxMS64jJEvQHfVebDcuPbt5FEA5qz0Cgo%2BlDaME2aCk1qw0stzBrbVAjtHTrCUXf3phsQFT9TTbFhMnV5JJRs%2B25Gh25lr6V3%2BzIeqS%2FO%2Fv4sO47iAafGxpvVKY%2BvjCJwo9tsyeGXuH8jN3jbmwyAwvBLfLs7xzAv5A1D2%2FVvb3d7fC808mXJ2FFbcVi8AzqRoGwJbmPAlFqhMh4nl%2F&X-Amz-Signature=0c494e54c43ab696aea70fe898d51406b4992807b3cd065884b5e21ab2f910e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

