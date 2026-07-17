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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXPMWYTX%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T233952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFa9gV%2F03ymRdof8%2B2FLqi%2FxHS6IMWs5RTAewGtpA3xNAiEAqQORexbPbbiiB%2FKMjpB9OzjQR3nVPBSqIypkBSl8Ucoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDPK0wmwt3GYFqJY8LircA9leZg4PK6HIjMVW2NLFaqd%2FIMrE6mveoQ7hFyv3R4HBtrKUjFywUWGpUQbLY3k3OBrE2mkayc4mPa7PL91Uen4jjZjAwUismVy8eDYhKpOfroOvrHEnhGzMZwPnBUCfhoxYai7GRD9AC5oK9%2FW799pbi26a7HlNQkAGXnjVCYJ6n0horcoavhoIVL2kDy5dEwWDSzdJC%2FFdvTJ1dKakezWjvY%2B6OBWJpMiH4EQhrZSbfGlSh897Nk4PS9uZGZOodZY1iIvS%2Fx7XeMhn0RJOOU9Pzx9mFnByFSaMhoYB1jbj7PC87XoWQAEh1U10opS8smqKh2TXOaToOkaMznNysClPzs%2FDUfaenYLJXXsiuutdj15WsqiG61aWULfwIbbauypkCLdEJHbEi9S4qEfmJRD8nQPMgTmPXLh4fSDVX4GblYOOuSq%2FcewLoGny1Kb2Atk7u7qGCQUyveGwsW%2B6FuvErt%2F2CsmRGk1wf6Lyar4BiByTQNFDXJFbozRJqQKNtk352vLLfxpwY9jrRbXD3EsJd5YdiL2DZk68zg%2Ban5doD1juYFDgLTQhcUNDOJVX3hvGAvbOKf6nb1VBhNIVRWmgLusJpUG%2B6rMhJ%2BHlHQBYR%2Bvjw8ic%2B9tTFq3yMI3O6tIGOqUBqYH%2BpJFTQArg%2FRN1WC6Q1k4DHlC4Ib4tyh37Eje%2FzvOFDlITYC6pslPlGwobnrC6MkLdZ4xrGzzdTDvcfuAnFxbCrYSWnASQ1Nu%2FmrL%2FtlxMi0vaGW0fsx67g7WwTdFU23DA1h7mtNfPlRd%2BUarB83R7Hq5QenjbUub70s1s9XO4mFgJpw7G8m8Mwc2%2FMRipOMyJuATGrop9ENRbef83sHVHEq96&X-Amz-Signature=b44d5719aea533e763edd8cd7084479d4777f22d14ca560fc859e1090781d5bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

