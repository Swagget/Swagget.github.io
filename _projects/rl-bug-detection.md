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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUX6XKOU%2F20260902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260902T212355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD31opItvLTqji9yDxisEiUm6bFBgvqEYsg70AhdDgtHAIhAKd89o8kKyhGPOLUC%2Fh2%2FA7z3NljyeAQ7rVAouRS1qaKKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrdPC%2FhHFXj4evNXEq3AOf39KOnFZZ4AmchHE4tUA91LPsZycYp0y7UfIagK06fuMWOtLWk7Uuf%2BG%2BD%2BCPk5JrRIKNX%2BWTYEevBLDyHusJo%2BTqHa8Om3zYxbu9KGuhzNR4lq6VVkmQNSDXV%2BJL9MlRuI9b6c6vVJQAP9sv2QXURyS1f1MdpxhQf9uQ6a2vUiiVp%2BiVNdh5Sq7fVC6hvWJtLHzxFcXxqZbSWeHab%2FrVfh40puIIM6fTr4OWO5opKqprPY%2FfYeyQdiu6Rp5b5QXIGoq9GZl7oX5MpXPlYijRGaHjvuG8GTumtwU3O6pO%2FmBlyDAUSmh2n4YcVwuKgR0KLJtdda59xpRfVFKfWTt4ohGDeA1yyoszIJBUwrjSzHQhR72hCOkEFZB25QZ7tBg9vJWOtH2ZtnyDyxD63VGAFCVj0uEyEh1BiEiXpGb%2BuOBlTCEimTg3aHHYwifE%2BFRVcKPKMgIk1ecIkVSnj0fc6gordmU3Gs9jgsv8ZV5QaKXmgN8QLc8ifRO79r6P7%2BbIDx%2Fi39yty75j6NFMbmPAojPGa%2Fskfj9VhYdGogfhO5gt68haf3fKbo3RgCn8Khai0vxm8yTwqHl0Yqh%2F383u1Btvdr9ol0J5x8fEHjhSD3a1FscCJif4HkEgnTCZiOLUBjqkAbV6gTw6ue2hC2IAO%2FsjVYbNrnwkWjhgnvdq99SRgNyPAlMnlnwOE6tbOCFjA6oc82WldXaEl4bCQI4UrUpU02%2BoikY%2FEtinAeNV1dxkV49HMKHJYh5KyWIQSHx0l1tlI1ufOICugVH6YyH3OBGWyWTCjxFwS%2BVX%2FVzLK2TSCYG70p8rHPTHzYcSqYzmmbEVahX6GWCkgcU6dE%2BSYgeOE8TK6R7N&X-Amz-Signature=efee61d3f138a73c09d5caebabb4de7e3eb64e86b0f27acd067bac5044308075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

