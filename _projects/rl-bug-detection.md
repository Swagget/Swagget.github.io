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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLDNYUF%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T235826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC7mkdtYni4ZLJwYII%2BPUNYt1OTg1DaNQswAFp2oibbCwIhAPsGN52zNLkgqj9rYSfcIQOm7rXDHANNU2tbVgmMG1CqKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN8l9kDoL3sjkygw8q3ANgnLiOK4yzDo5zrVEJWRgWyp0fc3nWhcvuZIUIV9jg2hETJY3d4TvK%2B%2F%2BQIa5wVDiZQEl9ZievAvs%2BH9qL%2FL0MGTewRrfUi0I9IkxBNBCCIYI6%2Bo%2BRipn%2BIysxTeiyGDvcO5fBBcnc2CPdLNbZFRTWrI2ESVGpqAJ7kKpoR6dq5qG2Anmi3%2B3yRv1Hs5%2BcHaLxY72%2BZLf3xjBYUUiIIi5CM7a82ammws%2B1k0TGSvyYicplmy6OSv8d9XYiuDsh83cMEJfqaiTCPMh%2BW4iCQhEWfzBLQkryULhY%2FwV5LK%2FNfeSLCLS%2FdzVSP9P9l7D9cbd6o%2BufjFp0meQwFn91fejvObdFy5k3iVKw%2Fgo7mBunUFVRMVhza7qjhr134iPggu4DuiaF3Jb5NGEAR1NYhxPP3QC8OlgWdlQk1btEm0j725YsNDasq8AKPuVzZMTEW%2Bwl%2Bq26ho3LZSrd4cubHIeYR1cGUlKkFln1MGTGDNi%2F9DuLJdcf9CWsmNB5aYnQf%2BAjjZ1z7Kk8kzFRat10RK8kQQINnxiW85yQOFFyoxxcTFF3oOqgtis33yg1%2BJ1MCNG9F7XQgLo13ZIZ02ZvNAGfMVLW35gPvWUToXxIreWgmW%2BZuzlzEAMSYmEgRzCkmNzRBjqkAcFeOBQ4y34wCrvGP2DuqOyhconS50ZK2bwIRQ5%2BAiZvsUIS8LyZ5ka%2BbQMeDxVQqYATw17eemcN0Akitl4TGlroT4WYCjlT6xNkCd0nYR%2BK8khCSDBjjts09Su7pd81Tqgmkn8F6Grwppi0w4MJRnJnsKm1Vdp0tceK8bQyGlZG5KQ7SwX4mxViw07LNfp6gyffX2fxkSwO%2FUL6MEXfQNToZKQN&X-Amz-Signature=ff698f97b682db3284dfde8ffd78b0c0b88658f9c260d543cb37c31c8f0fdc7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

