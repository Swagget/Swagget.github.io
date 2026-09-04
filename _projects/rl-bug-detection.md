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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FXRPPZ%2F20260904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260904T183729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDBvYmHBaHkkOxbXr1v4wU6CAodTz0eaA4qdO71S3%2F7fAIgNop2c7Pnea%2FVzpNTjgohB9s1j0eLiy7y4b3thZan7LkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F5N2kL7tYPOvdtfCrcA1ZZKGtFXb20d2UCv2IhLiAfSdefhHf1p4vvQn0U1bnYyY9d%2BIUPbYDyPekYNacPN8Riu2Ml3gLSNyawAOU6KOtUzlzNfCecs6PxTqdisOYjY5yx8EOIdCm%2FKaCEbkNQW2B9SlaOoSwuvf8SXSLW1a7GQKd1h%2BJ%2BZLaJoa1mH%2FNt7SKPLu0Ko4vp6uSJnxC5FMBz0cpRzd3mLQRLFWiC7jRXbAEBtFLmtMLGtirTkyZXk2EOyLNZV1gH2KXrImH%2FAM84GmN%2BNzLVev4RU3NDppsi33EVXzlGWAGN9c5QaUcIYY4qJAXR%2B9n3StXC4Z9tol5XIxI56o022vxPONIOyDlNSlayzhe4b9DA7hs2i8fTVSt1I7Ce9gMM1PYEyo8MKju6McfhTgwn7F6Dt0xIfUPXA07Dlx4E4Y%2FlJrrEH7BGusk%2FP7QzadUfjynRTz3c%2FVZ19yLbmzh5c9ufj2VirU1KBSdl2YyxamIEBLTnvj9RF4R4P04zlFoYIYKpISGqJGOAERjgCWAvEig4S4JkhwgKBTVKQ%2BSXJuqTUotCgr0Ut6M9jXgWBxWvFo5JsoCbggpTAlAfSpLTgx7fy84YQDhQ%2F1xGpAa30QLFaxqp%2FmDiHZDIiJrTriz2l7eIMNvy69QGOqUBLca3ZJliR7OBvxPThT%2FLYxstETVSZhvkd6Bz8ApTIvfzE6uD%2F%2BMTGaWNlibOk0jOErisvW2YCY2Z8q%2Feg%2BMTDPfUCsOvf93YEtnXcsnD374P6noyXZg%2FlNmsXvDWQ6Tm5mh0pewtVchK1dnxVLx%2FLcKt%2BpFnOUr1rfS6YsOTn68pEQ43twPqps96PCDfDYOYcx17f%2FPjzTH%2F3TPzYoawJdo6Q%2BMS&X-Amz-Signature=bd69ef140b1676e5adea8a643b4462db5795945602b9733c41121e64c5c99f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

