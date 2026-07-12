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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OH253DL%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T094011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIA84eRVAOuNSqMHnBsXwL27bHN6Ul51Dh502q%2BJ1GZz%2FAiEA3sYlFtJuFcEdhrlzxbM3fpsufC7Q%2F1EzmxLpWQzom3cqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZS3%2Betf4zgzTPiISrcA8pMIBQl9q9c8in2GjsX2SrKvhZnOmv0NgJ5cji8F4TZe536ZBYdVBe4dlz5XhnFuZZ9UNrLdv2n%2B8uyeJR%2B9Cs%2BG5KkmpfgCBzAyLosmJ7uXsxab6kn7FKrbs6jY0khCXwnXNuAjkWuRgshP3m934cS%2BTVwdhjdei1h6tirPz17%2B7ZJoydNrO0ZM5g0NgidBkaIbYmpdjE%2By%2FHkKu6wT3Jt6e5w6QW%2BwlKwKEs%2FlYq%2F1AtnHpUizU4DKg5NegAIzQOya0PdJ8ZpmWQxbd4X5hkpLwG%2Bk5P8zAQ7qq%2BoCI6tbxqCjxIAwsDwMQk8Qn3fWbQirCDizRZzS9fqyTzxD6Z9JeasVfyfl4Iv9IpyeSZfHNiF5SSep9giO1%2BVQKRsaCDYdL39oWBIvoJNf2Hy5exGT%2FpXJKCq%2BqPKrLMJ4T6fHBGeCcrV5obC0e7xPOjxG%2F8%2BlwKjeoCBm9pDo10ieUBebwWsqgJqryjVtge8LrAWh0lWcDazh0BJNR6o4VWcllV574iRRfN8ZSDRwRsrzNJhizOMvBAswR7e7smKxbLXWRqZmEl74Im%2BRnY8QpozfBM7LQuxc0PL68Urfb91pXY8UgaimUAX%2BVG6n7MZBjNFXySzEqJLvYtziUXIMMyJzdIGOqUBmAbYp27Qj1jkbVoTzQz9rGgxk6jiwUyGaYMxFVpkpiC7DjbCrp%2Fcyq%2BArYLzZ2M4IRDGq61ik6UBWSyCUVSp2WVS6LvRLmYoWZUua5IULdZmaqkv268koOZjW6EYttWuYDoriuiT0Q6SGwV0PDJCep5x0mHaYQ7vsvPY%2Fr1Bw9SNtJE5PVd%2BtxipF79E%2BUsMErAD6N%2By4OiLqVl57OiLjQHtnq7p&X-Amz-Signature=a12a682cd9db98de0fac85787ade70ac8428dea2d9354f55decd1917c5cd38e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

