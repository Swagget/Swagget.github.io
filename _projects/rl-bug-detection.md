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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ERV44KY%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T222723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDmpGYqwQ%2B41xZOkhfVBlwiM5otRcImxSl2AUSd%2FNCN3AIgbBUvo%2BoS7iFjGSrwF682XTTet%2Fidsdt%2F9Z2kbqPiYmEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4mZp4ytjTZPa0fICrcA21%2Fn%2FGQKbZLQWVdm4Go63DTKHyaJbnqh5vaLB7Vxo%2BaV9XmbYPZmPnvNU8JsHDIwnabv95cNResp2TcGuqUsSrLRqzgRgUeoESfYThBJUIWUqnH2OA132uwSrYMcGuVZSJxeQwFCf%2BlwZcApdxVdVnh2Y2GjGnzLOw0KJkKmDhlxC8nNa6dFxKZQPziz4%2BsNYl6SSsHOVx2on%2Blz%2F89cyr1rIBcGCeBqYTYjpJZgiXxYPh5XTcW3uh7BwZ82wcDtdyQ8SuSEpTuSpXPCF65ZmsT37Yc%2BLt7plJAjVH6xp91HSu0XMZn8i5HXsDynxifjhHWf6vP73%2BDIi%2F8UXlOnIEkGl8bjTQufAqS1%2F9zikarjUSP8G77fLKK4Dt5q0mavF68Om10SMqBk9KBMrlD80jTgTn1MioI51bZvhQbEfRcr6sb2KyiQ1sGkJkMG20yIsKTiOOa6FqWjXo5zQEOblHfNBXUqRQok3xhbqbSl%2BMzfYkLI8%2FlpYzU6sS1iQhUuwsrKyvfuizqw5%2BfG7KaoZ4srMYoqdbh5uqFhqhOdxBE%2BX6sB78Fs6659CrvDgc0LiYXmWH%2BPOCcpVTJsNiOvPGrHnZUdTrByBYmJglYgrZY3EK4q30PlN%2B41OIoMM3M89MGOqUB0U8fZID9c%2BiIZGd6jXOFS6yW1687iX%2BzoSMCmjmSMawOKhSGHUPPfAdqk2fptmyjfJvnnNpHVq0xObjBnA%2Byc1BEkkc15zWLjMg0WXo9ltBoJ%2BzyYBqLKjHw%2B6cchAMTsaloNrfSoAiBru7PMBlIKLvVWpQ72y2S7nnWgXRtouPubX%2BYOFwJHDn6ifKCsn5PCrijiEuPX47RrDeHew0vTjHVc%2F8m&X-Amz-Signature=e38fcfe4d3b1d893474e133773700f2af6d4f132265b5f55f08908a8933a9035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

