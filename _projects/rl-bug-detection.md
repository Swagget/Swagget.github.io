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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEMXYTJJ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T225116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqVjHIHwK1XgsQothgeKatNUtkImH%2BmR0N4JWevWD0SAiAVmCCTU6U2M1yJyKTDm9uk9yz0SHJQ%2Bt4SzqDewa83IiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMruQ%2BqBq049sFKWOQKtwDUkb0Cj60Rwk5kX75Ab8bwZmvOwdG0f3w6ukH%2B%2FWIOnVM%2F%2Bg2DwyNNjEjyQng6U3uWQoNQIMv9W9PHi0dUp9yEYezJ%2Bz9t7DLhorA3WjbNXVMAgb8uiY6S34JP322FwGMtwpJTYQjrFvPSOUFehwrylAbM2EbmpmiNNjUQt3NKw0TCINbPvC0sZAIdBTlHAzX6XMXhlUyfeVn1%2Fo%2Bg3W%2BMLN1%2FEYy0ySbRmu4me64n8d5rPt4aXfCiPvvdgj4HNK00JFhmnXdTBeAiPXb9NM6g955BsAplWr2%2F8qbSOYBMR8Xfhf2Bb5Ts%2FC%2FMzbPaD4T8Hib7V%2Fw6NeHml58ZjBKLi%2BXPDo30DCD6rGxSKjfQ49drS8Gc5dOnmiTF2bgzASyRz2HO2M%2FqKjE44C3QG46xAH0ObHjNq4cILEnnW2IrgmIBQGcXT1qQYgwGQrg2E%2FNP1VhiSUWL0DQHPlg88zlFa1QzzFU5jb5LevNSKnDVhUSUH6wkSdkDx0auk6mOXa7Je0RsombC%2B3ZUH1Fi3jWJ50hFqeG1yEbm1Sq0kDjFLumzzVnqlzXIqFWmUnweG0G0%2F%2FnzJIMBTAKYzRVu87SOK3fWlb2T7tSSOW4Rlk6K%2FrbVVBEydqDJ%2FScNbQw%2BbiG0gY6pgE8VrfiHWg7xSjwOrz%2FXwbf3QX1RIJDZ9p0fGBiilZbxovbkRimZSi8nxtAaD%2F%2Fdz2YpN%2FNbtranRFvQ7TIDr4hSnKIvZqBfhUSOyZAa89ieD5%2B51tm%2B79xloYFmmeh7sxB%2BKmBHAVb78y1JMtzQzHkwuBq1Q%2BvwZlSaeiPaVBU%2BZvhjxGp321gEMMyvk2e%2FOx7JJkpa7VnY%2BLKln0si0yhUujRZ21Y&X-Amz-Signature=38e23719ca2f5b5a8d0c7d406df7c41d10c7019119b1e35725b33562ec88481a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

