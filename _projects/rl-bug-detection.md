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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUVDPR6M%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T223601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHY5zzYd1BV3gdiosDomDEHANJsJiUt6OqdZjLNI48gGAiEAoxpBwnRLngM5JDqNxbgXTjnjhCu0nCUBF9mntHdSeH8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDoo99AO9e4yyHJWcCrcA%2FpKRIRto7JfRcF1t0UsE28Oc%2FDp04aZEd2RtJH0CTKfA2o0EMnuTnoV1%2Fe0C%2BDalJ2s49Tx0XNkE6cQiczZhlJYchOiZQUFe09aYcXfXWTUa%2F5C5BESA%2FKFVkJREXMT5pBovPv%2Bc9EjImUAt75HedljHoVnxbYrXuOmsNUVwg35QFWXH4TmRftSXk5Pu0lpzfLzyhdUwNBzrQ1ubT2DsXpTcbrdz9ivtHPfvg4uDYKumT57GvT8dDrwmaDUC1kNr%2BGc6%2Bevo68HtZnn6aGvO%2BgljEaoq2jlfykGYc99GHrbyISrsTGbxeijR7GMqnBLTnZfj2p%2FHM52k7AzEqqmYbK0rCXkc5uyj8tGYy8qOHk73KhZRLT6YdP%2F7dpkDV5qtV3gYGihdi8z7jDOt3np5oja0MyJQQ9euVX2ihELqHYRm1BWbQQgGZ2WPrC%2FDrlljHyupWLH1iePMVWNWAQtGnIYw8yv1%2FyLjU5pkv%2FGu9f20OavxAh%2FIzgnhRIJHBhk%2F%2Fvupnqu3HotL1pXE1FJ%2Fw4XMrmQzEGcucBHQNYTsPqccxSJEOLbY5hZsLVOnr8MGnaw2XbANp%2BakHNivQCsGMY8rdbS%2F1kogqaI%2FC7%2B6QtfVl%2B9VDJu4l8l9JZ6MKXQ6tIGOqUByhJTuVF6ZkL4C1HT9XYEExrbxuNJnU2VU2hhryhvo%2FqWvwBcKnZh%2BiWvYHFzU0mIHfCs8%2BN22R176WR5LJnY6uoIbHiUeOhLgoNi1OlmVhAlVga3fH7ribLPfde7jAwvw0GtpEh45G2PmlnNDtyZbr4oa4CVUA4bVHTo2xlEUveLz44FyWtMuIM47Dmz4Z4h5Hv4%2F%2BceGderA07b0WGmZge6voHf&X-Amz-Signature=8f6516a2ed2e4696cc55d86d2e8a06c8588e4623e658a871f95a3214d1bf4a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

