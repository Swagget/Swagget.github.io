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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSGX3ETY%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T204643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIAYww%2BEheYtnsFZFmg01HQzirK4vwmPqUqiIqqhV5xiWAiEAxsB6Mbl6vLrXE65htdsP1JZmkD9SAaByV1gWj6kYfrEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDGBTraZB3l1PyXna7ircA9c9b4TCWXO7KdGOmqxZBPYThBl8oarA4S29BD1hlYyn0%2FA1YZaGZ3iwhdtudHir%2BlCPyE6gFr8fS%2Fn1nJJB%2FznSiHDdt8aXwL%2F4sWVjj5CGRE235Z7nYehYjarxvs7Kr7FSmUG9yhQb3jEn5%2FfKg0QzvJV3MPjveNdzWCh2tioMZfcHhCVI6mJdl6QODjo9pkU%2FlwMuSSDqT%2Ftzv%2BUyvaARlzXvxk1roithQA0vEATixNJg2TH5kXRFD%2FLhopLjtkGa6rQjRdy3V0MMF0BiFWoJiGmsFCDyne%2FqF%2F%2FyK7CL%2BYbGocYT0ThQ1r%2Fccq%2BM55IX4awynjkgzJgWiOJho%2BlvlhJxO%2Bs5naJzfZ65vy5u9Jg2TR%2B8n0vTFE9DDC83hg6BgXRyBJnh%2BXBoyVjix8FxesgYMCaY8Rqt5nuZSggebeXCJZnFP%2FdlQMSYAZ9%2FexPSEwlhqjsKa%2BO%2BsuHLRZtSyFsPWDQwSzHdM0JAhWSZYkYuuE3opFTWN0M5UyvCK9AYxrkIn%2BKyldF5q8WxLhgWk7kJPqz7gLh66JsgtbnCdPtMGxofXbLjQZZ00rly%2BN7xSUdgZIWN2ftbi0GU8AgOXvnFhku%2F2XbGQuIm1AOGMCbJncUSEsfBqsdfMIHp8dQGOqUBIG3tJ%2FJyXt%2FKU1JAf8bemeDol%2B%2FgFX623GDqAHpZO5aXo8gRH6vKTGpFiRkSSSJK%2FbIoEbtQuNzYAScOHg0vJUA8ghnXDTm2rUxyy%2B0bTxcaXYdqWYRNziCNsgYOhyhUHap3DYiXcwGEUfsVBhSrAJ41ETC5UnR6DVTzssizBSzXhkc0Gqwlu9Ow%2B94ZUHpR8oxb2sC2z6xWguQEh5JXF%2F%2BF6J37&X-Amz-Signature=8f98d8dff831d60f17668149833bbbb28ee5cdf06853a2ff7cc9385db3b39678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

