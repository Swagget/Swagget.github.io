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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676PZLQUY%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T224545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUUT7SyBg2os9%2Blu76HjSfXIMS2QcDpohgtPJdtdjSTAiA8eOlzWiaZL4L9E9S1x9zqzAjQ5ACiAGq%2FRYpRmivuKiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1143D41RuzJRPDN2KtwDZ7p27xMyjgrVYjTVsORHUzaoYRfhy2ervHQEo7Y8%2B56b6FOii66864bzlyazoW9jqs59vM6Iyt8rsOgSjQBWLOKalKi926CwLF%2BzN3jYnrGx%2Bk6HzOVcSjC%2FMp2MUzAisk%2BSIyA%2FVIzOvqUiaXBP1s10WmNY6Zr8KOuiSrK9hO6wlny%2FBPowx%2FwEdyoV6hlQAIJG5O48D5EiOprYbPA7td78bj%2FDHZJwyYHKT%2BG5JOGEAqVrjUVpm6RQ6MSbLKrIVfVgbDPJgnUdWZbXQzokyB1hN%2FK6LGrGkz%2BjbbqoaXfoc8BtxQ0H1TpvML0g6F6e4rfFa5Z81lWqzC3TFdFY1HLtjn7yyiFJBVFBYRXkyMzm3fQK%2BSfe%2Fng9LAImdM%2Ffy%2F5uZEok1mCBxE2AFTCfFnTEMJyn5Pn2xE7NA4Q1oMtmm4YCdNFCcKiG2Q1ERHvd7MsMcgQHrT%2FmZqoBI5H8Xa9Xzy2QPqOSOC%2BY8ZintbZnUQ0NiGNQuVHmbZoIbXBFcx%2Fr3SEbCbuyiIAMlYTHZ8HfEJOVdqyElwZwNBynX6XLhBouk1jimV1NGZ6eJtb9RvBpwUYqj7rkOyNxHvJy%2BA5HCD1ssYKfvnKi9rAYBTqNtiIdHrmnNBFQD1Yw%2BJrH0QY6pgFriZ9f7LNLiX7%2BG%2B3P7Rx%2F2h%2BmwSn9eZcPQ8ZdZlJttLzrZv9rPfOtCRW9GaGe10UY3jvRiy%2BEEHsDOyPncIUy%2FWNdJc9GMVQnLpbs%2BBJgPT0Co3isRLhtVRXXD4BwhRyNe8%2Bid%2BbQwoz7TOhH4BJsMGNyg6G%2B7S2H%2F%2FCATgqLK%2FVgBJS%2Bb3xhpkNLPJ4G%2FhabrIozjLD7jC8nUsIHg4l98oEjJoST&X-Amz-Signature=beb34fb8feb9ec64ab94eb5de016729552a307fb1aa212644703423826907abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

