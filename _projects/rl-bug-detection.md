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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNSFRRGR%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T063720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIC29oHzQC0z02fAFZxpn2xg7%2FtUjPSOpZ2mC5h%2Bkz89CAiBfnG8tKnj9A2hqz8QbKvYVIqlTBoacxzWP2sAPk0gntir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMSk6Sgieleesz8Dr5KtwD4ytV644uGQJbZltj3qRKyplyzK56dedc4SU0Fla6lhHQeMrE5vVr3D2kDCMWTVugken0Uv1pfEFNoEtAdM9oRa5EKYEGpUN7glSxBSBAY4lMSrxAVCRGZPBccOp8wi1YefFnt61I2uV8nQhUVzCmShrJrou%2Bnr%2FVnmGVSE94Tsf75XKFO2k%2B%2BrwtwA%2FqqDdPkbPVeAI68Pew3w0gbjyTyZbYJWg4ksnrL6Z1r4JWaGQtA2oGMQfhsXHu3gsjb7pXx9VOWRF7Ydn9CnM9FToIhqdezxLh1FdEzgf%2FzJi9JzGG4U7SbykcD5EOkymMF2Z2RrF%2Foiq%2FBKQWb9sPGkOY49cpEtXujboS4UAXzKUJ%2FjgAkMCtjKa9pVjqNCnAxMOGKDdeJx3AJhBJcj716%2BGCDNkAocX%2BpCKhztntgIj9EH%2FT4OshoSZuxO3VI92sjFtejQq6TScFCtV3Kf0GHmuERYWewF3K3ux76z5Tod6Cp38YROdukvZKdWk3cKXdSyl5H0zNAPOHADxxYOavcs3tuRRZfbNd7H%2FArVbY2zd%2F4XMoFUh6FyMOWFVM3ahHhTkHy0aFkQmCVCVC09bxJ3Dx%2Fg5PmMkmNAsvsJdUID4HIIKrlq5aU86EX6q%2B%2FZIw0JPo0QY6pgEwaOm96HS3hIWCq2p7%2BaWjc1uPLWOEEHSgfmitS98se6ncJPtZ4xQxoAnWS0dpY6ti4IqUsK6mvCv6%2FVGGQlyaKGlH%2FuQiOQQhFhEpeyn0oKC7A4c6mEW3G%2B2TM6oovj9RmvBkd22a5gxZMLb8078nqqz7sIV0GIOS%2Fac%2B2pJIKwYP0VKO%2FEiBxOhVy7FgkcNmMuA9BmvLrSog2prPAkWv6X71iY4h&X-Amz-Signature=3171c11b3e97417bbf6b5701fb4dd67badcb38435e62405729c8edd5e0571582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

