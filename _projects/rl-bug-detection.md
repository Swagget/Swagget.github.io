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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FA36W5Y%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T164108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWku19VQp8zpSAAEMxD5eQbaykY4Rv2ypVR%2FZ39OebZQIhAPiXZtsyk9ex5Bqpsp2fNjH0ZDMyMd%2BjeUbUmCeFHlxKKv8DCHgQABoMNjM3NDIzMTgzODA1Igzp9%2FvrchOl4kUjPboq3AMVEpimwMDEpAMJ7OPl2qYmKbHbtVNAGOey1Jcl%2B5TL7It%2BT0TNtjKPbkbBulWZKPx9M%2BEtyoHnjEzDMgiDm1SIg7RaDVegSJZ4kdYLHdR433nWzYW%2B5Bh64xzNmOQSQ%2Bz6MAiGIZWLkGjiruSLiFHO%2FEHHRnCwGOg0nopOmhyl2fTsJe45VU4khLfffuZNZrfYA7SJvetGK8N79bwdzsOh7jpB3CyaG%2BJ8B8QRQNQgRVZW4yWJgfwaX8bLAuwgTn2SMUjyw8NbF9EJhtnaMZ9ivfCbve4dYbq45KHqjIT3fKNpScutSi69C5tw4Y2bzTBkYlRFhNbd1qPavqBmfz%2BcQ5iiqy0t7ZpaWgdduskYQ6HGu5eo96Sftv5%2By24q03LyJ8vNaoZvkhwfFZsjnHaYy7ypheQ%2BJNTBIxN2FZJPxzxxa0N9Vct1aVsMeHcHV%2B3WuzDAFmPvo%2Bwlg80T8wtlHnh806MR99mprd%2FyylldHn6tFunIfTT0qdX6foBoJ24o0brZY74IMf4xClB5IUTnLlupRb2IkmcpFMic%2Fr4O34OAJWPWDN0tqPkkiZvskT1a2mnZlzmjXDxyuS5Cm2f95cFjf3zuzyDQhpj1SPfQ3PSHzF3UHPPXt4XXQzCnr%2B7SBjqkAU8GOi00Pj7z7Of6lpnMyzoxjx7iDOMyKN4fPxh8ikxVPB0euWJ1t8jlxzyVwIe4MtMFVXhCqkAlc5bHQqz3xJmH4dQMjX3M1EzTvRNdLYIOpg6%2BCV9VsRzscUP9IBjawK5NKqaiWKMFB1V96qmUEPiFl6iuGMYk6g6otbAOHoWtrgkBD3jOeH1mJawqClUg6OhmJ386%2F1zpxbaVtVaXMbO%2BYw7L&X-Amz-Signature=138bbf5e43376fdb702111a68903da774a57fd5b1867a457fd128b5483d37bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

