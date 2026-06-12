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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPLSARCK%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T222325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIBx%2FU5Li2BFYHf%2FM9uKjX4ocyEGkAlYw3kWjFJtQVx6lAiEAsvH%2FWkg9FoxHWUfq7t85SbhZ0aLKC5epVHZfMWb%2F%2Bwcq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDAIjx7ww6HMM%2BK218yrcA09u6cPJ83YFE0U35B4lAwgy%2BRtlw1c4ybLeLvXVnkhONyNJpbKCZozCfMlyDLK%2BszUAMgYAwyrLIqkbW9m1RGXyA4C8d8vJEWWT8CW4oCIWbm6aZINzcUNBG6eNXP1TRGRMntuB13TXChmRpnLkWx4343xDXjecIn3qFyGfP1WMl%2FhGt%2BAPDn5RfgpaW%2Fni%2FkNCsWA0nneUbho5ZbQb%2Fonvny3tOgr0y%2FCuwj0yVhXmPrQ7cb1nNKX8xXzzKxnjP0O0C1ZZ5xptJPautwgNmsARH04%2Bg%2FwsQ9NvedmEBKTK4%2Bk9SJqihKGisRww8jBdLem6%2B2EP7jPz05FgtVYM6N3nF6GEQoTR86C1fpgEkdR7I%2B73DgMV%2FSFYVO5U8Dsq4RyMxIrfayY4dLBreHEC%2BGDnrLNRhuXkoVS1e6tXB29FZqVjJFd8ZJYUpdBxn0VkdhxEIQXeR%2BXNNNt6N644P8GWUjehd2XbbN1tb4wcyQoDBXH6qwMP31l1kmbzivG%2Bqe9RupL%2BI4tnjS5ZHOVVPZMKaPyNiOYOhIhx3d0KJMm27D5L5fVbSleJS31PbtpRfrbxiqz1ZXt%2BadPSeVMOcNhELkigg1OlqyDF0QIUz8il9i%2BoZgpLPtp9myaxMKP6sdEGOqUBxOorrafR%2BWjVs919%2FMNJ0ymLiVxBzdqfrabRopYd%2BxhYla5Er3NZ3SKzYkjo41yJsbfo31lvkkMa%2FAYcdWn9FozhUAZOQtT6A72qywwAm6bE%2Bny9gI%2BJpAzQRaXXezdcTk64eyiOv3DzDttHQPUe2U0ttfF9Cp4bw6aJsf4o8A%2B27U2vwXgzQSiWmNPut7%2Fe3uuSnvz5fDTxvzQ8rWFwfn4aD2Ci&X-Amz-Signature=06fdbb1fa7a2b280c0cfc0ec12347629747d5fdfe574c51f568e1a29d0693c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

