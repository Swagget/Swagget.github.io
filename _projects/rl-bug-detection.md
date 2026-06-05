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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZ2WGRC%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T211452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBGHFbTNSGTJK5afKGmL1DRpbQoEjWIDLxMgwIarRIeQIgXiChELhOS%2Fmrf5Bzv9LCg9NBHhSD1TLRxca7EAeRr6Iq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAsxGphlUNxAlXvFISrcA%2FsW%2FA%2BUQ8%2FXLbNF5SpxG44EySLvHTI7psXNL00EdNwBOwbVSK2hdpCeUurUWpOlTDjSxC7MlsiqiylT9sNlG%2Bek12F6rb3JdDIigWonDyKWmCJM6ydhJdsYlKijRzjcGJcusgfxiCFXZyvwvO63uZqGIfREAftAieA5Ede1gMcnWl%2BElCXp5MIrcNyVHDLjm6%2FPFfMsJpuWfAbCgas%2B4xvJthVBHD1RocRePopLluxwmtZEgAKjh1gEpIC8AG4Z7C5UwjmeGH91%2BsH0bSX0823zAP169GdvACJVXTRbFnDqqb8a0ZdEyllOVzOrXFTDtaUgve0%2B4RJJfqZqw6tJkYU6GY3Y4CDkdgl4bFMMg1x2Nh6HV6kQnoRgBLhjwkR3cBkk3FrG8BeWHcLyvYh9XDLh5jBNogGHiSh8AJTZ3SS1KwAriGnPHig5t13lo0C9mdDLRQJbNgRRS8c%2FlIQHex%2BocrcHMkyTAFVWX5Op2E83z9ZRNhZDux1ncp2YwG%2BGMnnHOoMayEN6MiG3IkV47XQ9JY5C70MLHcqibMP%2FLVjs7%2FqdGiP934pwD6cfcw65aJxxduRfKe3FFpsje%2FWiZFpIIq3eKWJJ8maCA2ilRmPsFfH3JY9S6KbS0KKZMMmwjNEGOqUBUCeC5iTxfjyZkn7qLlXi4iUmbbVZao7deM2JdQWaXvxLIQNIb04ZDxKXfHQ8aag5xt0naLtWufrpJcu9xSWp6DRp0Tz7lQo6YusQoHv%2FzhYXERRpBE0e5hu%2FoF2F8MY%2BMRgQ9mrAfWsub0%2FV6kr%2BHcgF2S8PZMn8ULSj4BYAKEQAXzOzAv7rMHYGUB6EI2t%2BHrrqOh6JGosH2Nu0fAUyXvGY7ctR&X-Amz-Signature=496360208895ede3994eb32c4f54c2e601db06675ce1358f7fc6eda359bb6217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

