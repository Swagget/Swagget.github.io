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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SR4V26%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD%2F33uUYkcNhMQtIabz1cHJCa0yuKNbgDIdkGXlZ0wvTAIgQRA4FLHu2JRwsolkLJOd81syeFunxMu4NEIvUVxLcl0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDG7%2B6Lx1iV67Cq%2BLRSrcAzThwadtJaYy6JY56B0mxk18svDVJZOJ2q%2B67l%2BwBFQlkrFhRHjQnO2xR7Ah9xjLnQw%2FJ20Em5YDsZ2eRoXjIhLP%2BjlQcIK%2BBk07YwcY%2FcsZfTGCAfZFBUD9Ft0vH%2FCStXvnnG%2Bi1ltITnh34h3T6KbwpzcR5cWaOLCWFL9syKeHwTfaRhlyky9A%2FgW4YOo6FoJPDMPNA0W%2BtLP4aAdpkYMOdASggHYP1gIIfkqswxUBrob4p1WwBYHRmB7N%2Fylqmho2KNMUVT1lh6FSy8%2FWO%2BTYwkPE7DVqVTjbdD1NNjrYAEDU%2FvFBDhBbO%2FV6zE9DQLVS%2F5qpCpBmEd%2FyeLVJfjMCMLarXD5StL4OGJGwfy%2FMxlmmMUSo%2BLFxNJijnSz0N%2FvPbRYef%2BBF%2FAPWMfR0lI7Oa5%2BT6pbSlyjuuH2qAFwrXK%2BIgD3eRchzx7XGzxP3g61vE1Cgga8bP6xLHp81kbHils1JOL6c2N388R2zaOTRdy4yh49acXxVhVxqHlineFKUqCbwaBf5wuTyLBv03kBGvQK0CO3TZ5g3MkO93v2DbYKSPQC6ZcCGGfKIga0cVrCBnDjTpmgwTT4HPGlZV947kAuNa2Y9sTkW6YiUr1NUFJ7GZY1TN05LPiw6MOfk7tEGOqUBAfQ33MnMV36gI1MrJHAcYlpn84PFSmI12MVJWfs%2BZQ8ABmoJHY0b3PKp6VZ%2F3moAIW6O3o0yumaUlBtRdk8ANAbE5%2BVjDDS%2BvSJtMCUklzOe9kD3wEH1JV9hqtUNmlR29epDypNNSqbXbG4cdXTGd7sIbVTRYwcqMb2yh9GGgldjGVMvvJEDjFnqtbPgnhRgtHTB3CtTk%2FYtcDDRdIbxnds2taMH&X-Amz-Signature=37a8dd44e0f4baeb499e634b4367f9c72ebb7e79d7174d48be3f3edef4c078a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

