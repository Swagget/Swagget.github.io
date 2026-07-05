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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNB6HDAQ%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T155821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDlq%2BiqvwglW33%2BS3aPDJb9pSse65AePDipHKj7pbCN8AIgU7OzFuMfo6awQ8Y7Z5mbeQVma41HjcSTnGXWUCU%2B8Gsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEoaszwYxbeGOFUDgyrcA7YIDOWykv6VTBcGB4155oOwXIkIezNM9%2FapkzC8juATSqOodSJLqX5r7HdxyGlctkMSOzcsWQvEF3LBscBpsLMbyXo%2BHnFJO7%2FWgmkudsWXX19daQC8H7IM8qjMFRWXiseupKhsBnZFeQbqU8tIXfknOpNgEEYEZUg%2FHDHekdhfcxz%2BmhGS5E8uhMM3%2BecsTKGcwTGs%2BhtkmKhMaFyTqu6qtQWBtm319O71Wh3jiGa3WwpwJC0TwSGn2mMlsOjx1m9MWCh9OuLxuZwfH%2FI52TNTFqZqVRWgTQ1Hr3LhmDzt1xVMNTF3BVUjYujFULikZsbFqFpr67niWLdEI3A9dQRyNZBMoLcKfr4L6vKqOTp%2BnbeGO20tF2McDcLuHfxEQYa9I3lDmZ6Mb1JoyuWHPx7E90hfekCP2ooygWkKVvnJ%2F6caLtERA3aVgOHY4P8cDqxPzcfPuL63EnD0vPQs50urttza3xDiU1W8cHC4ASAhcZ1qsK%2FxCKS25Y8Dof9fG20917ikw1hBGwOot7%2BCHGkAKc1IEAfNPp9y9fTqy1uZJY6uINWheXeqLoTH6D155cx7HUbhkKSl360obrmBe5b6FvCZYVOLqzz8RS4sQwf8q06E8BgZ46La9BzLMKXxqdIGOqUBt2eWVu5hQrj7jJlue3kxEQ2UnSn9rtutR118Ew%2B5DCeUwmtv3kxLGNouw1M612Qqx%2BBb03uv8VymF5l7dL71FbOpuxMQo4AeBaRJX3F1JMkoUz4ocg3Y8v1hgulP7hHp8AW52TtsrU5nchBlzLgUYkdOv9sjaaVidMCzSeJw%2FX%2FQEELoAY%2BMrNr85X8ogwVQ3yCaU%2F2oMXTiCtTUpdHMzpqgrZnL&X-Amz-Signature=3817f3c8575c3033e8deebf778eab47affd91483750393d3c35d484ad3c8ef7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

