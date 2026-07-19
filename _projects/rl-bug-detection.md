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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676LK3KUG%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T223837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBW%2FCtUGn0F8QNzAyiXHIQ4n40pS6bi%2FRwfQMNNocUs2AiAEOD1LXPgzCnH7w9Q%2Bum%2Bz%2B%2FN%2FH5TYawg1tUjruZ05HCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo6QswYOUA4dvW57cKtwDkL0YSL53VH15sCqidxcZS%2F9vd6WOiD4QDy3heMmamNbtva2FTmXySt%2BlzsDDOFqjPl0kcqIdbmb5dR5vpswh93%2FInq5ufFAcODFn5UTTvbuQ42R9I0Ch77a7YYvGLMVrDK48BIx7RNXyQjHYTTaTU5RO06qA0hLRSsvT7ge9DZkL9EY3%2FdrSjtJIHJdfF5fTWMNzoTu7UY22olcENiLl9h%2FF8fyXY0Zn12C7JZ%2BNK1NgopQTQezF7GrQRc%2BS4Ytojm1UPU%2BBQQYR%2Ftuxw4zLCFfvqjEO%2Fv7FzScUXJ2%2Fo3R5hHJazKS51p918wocAZXOyr7KwEcGvhPAovsApV9hHnlKPNkuIaQaZ6B3CUo%2BAY0ZvEupIiPdg8pafvI1ZplR9%2BkS44wtyBWY12fs7rrIKR9bhVCsWlH4icrWoBpYpqnnbj7dqL5sSV%2FBMxbWlxbDzb9gcnUmSLRM7LeQHte23RBNm9qr%2Bqewy2oP55iRK32xbbGwwRmsUmw1L2OfwXpjFOo%2BAjI2TDHvJkBoxpUf5%2BwpFRTgbOsMqADfuwj6XPaEb974a6jv%2FJ9Hqu648B7EjAfOLnltnOTOhdMDu%2Bw2F%2FNIXlQYugn43K4Vr5YOUCKdsVw5wur93vcxMxwwqoD10gY6pgHwMMy0O5WIr3HwuXNwuGMNSe1fhiQhmqHl67n4KGPt%2FXiMM3HtiVwPrU0rVShlMSajpCIkdkRtUX6y3sdO7Xg3nZE4fn6rlX5u%2Bd3MTGkMxXU%2B1xONJJHov1xDC0rPbNV40vs9xgkTgT%2BfILxRXz9mXovR2b4C1w5Y537qFWjo9p9X20%2BU5NdawvALhgUtSZ3jeVCrJeqVKM620LY8RbTneC8aTxti&X-Amz-Signature=183cedf2ae1e4dea5365b982bf7a5c38da3d3acc6f56e3b3e0f8b3c53cfa92e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

