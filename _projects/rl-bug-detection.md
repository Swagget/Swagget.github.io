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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD75LKVU%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T073054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1rHYeg3N1d0jzcgjtW4teMmFpsYNsdhYjl%2F23emcphAiEA1jbqEzI7CVJySKTuLTR2rXbGmnT9lNWaSrCMSkZYVQ0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuaMDeYkF3P949xdyrcAyMOQOyhdf7ldKjDfYNmHFhTerpv%2FZWKrA%2FvFlbUjxSz9XJutUJmUstciumyiGRu0IoBmq1bks5FN%2BcPxECxnGSBKQPakF39LcLtdnNQSehIwjzD1xXl1gTcAB%2FhHqrsbldrNXPWD0ZORBr1UAXj6hjoXshqphTJORKT9CTFwNHy7%2FREMzunuV3e78MDqX5RhK8%2Fsa%2BAVgGqYUy%2BRGzYs1KcP1G2RDU5B4%2BFf3xfn9HhKcsp7I8cK83f6Q%2Ba9bl872s%2BPsnHOARmS5%2Bqt9fNs2S24R3zvfIOjrkJuAA0rmAd2Gs%2Bh2w1WV6c6n0p8UfmzZ%2FEmBsSPEtN6C7SB4gz%2Ftn7o1xoO9Q9uZGz%2BTS8n3F4A3CTtHG%2FeTbR0RIPm3JghSheLlxer4KPcgvSgn7%2FZ2OZ5RIGNTk0uXBKj1el%2BXs%2FmfVpXX8LsKwpHPLPABhApg6032NCF7C35yE%2BvplqcBhlzOSo81vV2D%2BOAKFYOXluL2t1MIW6eoNwniTBTK5GJobnC9aJpF4A4eAtWtnzi2biPfdM%2FRApdPCIz5Sdsi7qBQj9udBrbib4UiX8Cf%2BGyR1VBHEdUSA%2FYncI1BO9CklfbyIAOHMHgF2tnsEqbJ8o4XDJ%2Fwytnzpi%2B3baMJuqmtQGOqUBpvaOa5VhsZUQU9Pw4OAODLLEgeyDqLxkM1LFD%2BC%2BhJ%2FH0OhsSgiaBo2cjc27pIDXFSMwAU%2BiSGEkjQU1%2Bu7bAaQuyhi9XuSMb31u70X2JsHuqavwgz9YTcuLdyspGV0mGcgCnm6B%2FtOcRHn2Hxygi3FpO8QHElKSM9IaD%2BOx5uW0QntXnZgQc21NbPV%2B6LM3K5GST%2F4TKhiD3RMk0NaAnIVRiTS1&X-Amz-Signature=365356dd7fc7929aaf3051ff7df15dabb8a1b7727bcfd9af338286db002465ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

