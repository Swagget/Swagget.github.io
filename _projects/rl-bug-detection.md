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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVCZKWHC%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T143210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCRu2oEa6HJx2sWBTdTYGjDrJwdS0WEetXiqZAaEWAwTAIhAO7mee05cAmUrsfciVzMe2pWvFJk2%2F8zFEK0zKsSN624Kv8DCB8QABoMNjM3NDIzMTgzODA1IgwWHeqx%2FD%2Fv6a6VzpUq3AMeNLbA2vbCnty4Cs9nWaq1n4kD5e2GuKWGSkejJxs5UPQUmGkuyPMfIgqIMBJueyPam55%2BazR%2BpRMlm5ELWTMhMeBh76%2BUUMjHEkmA%2BgoJuSJ2ymUdWrZNso9XMOkqnt%2FQ8XWNuQ1HA3hAAbHfPda8U4oILFHL8lJ5beN4d27YJZI1Mnm9UzQhMigCfJXhwLBRoqkHGAsq6aP4flhKt4oQx4PEsxq0vViSZHx%2FeJ00iAQ7kQFMzhPtkzeDDcsx5Id4QrBXdTDOWs55OcXY5zZPH%2B4ag%2Bf6EwBGoQ2AIlgWtcJByF7KgWgA%2BiK5Gx%2BcaDR7ix%2Fy%2FCp4xO4%2FWlxHGTnFI%2BhAyrolHj%2BkmwDCaEeJbOS3W8u8921JrBTfj2j2J%2B5jXuuSORCiGCRSf879dMV4ya%2Fpp%2FiMilaOemn8psNjM5SFnGMn9VBzpGOVf8uVyNLJKhTtaNGJsLUVWgancmu1clFah%2F3fND6at6wqXti4kkhyj%2FHyjDF1BGcMbL4YDBuHXUsFlaVeFYIkPxa%2BHTvUQoULY7HhYznAlnCh0y23wVktn%2BsBvEBU3uhSq%2FiwH68QgtdpfDS%2FL5g2EqZy2R7x%2BT5DshX72%2FpJksXbutBztmwD2e6BErZBvzq%2FKTCX5LvUBjqkATvU5uARc5xtVgqeSHAwylHD3PbustLUNbfyF5Cc7ES1CXsooPUaYIHFQhw1mnRVq8NDoXXEz0UXUTQxietiFROOjKfdP0TbmpAMsAL502eBYnyXPHNkpIGpEZmT4Cv5eRCuAB3W%2FrLA3KoIojppkWXRxtAZVVUeCE4YZhY5rslEEyRKD11G6VZDETfcAP3%2FXtY%2FkXPazxeKDBy%2F2GVvLnL3th9E&X-Amz-Signature=2abf6f69c221e9a23a0c35bcd11a8d5e5deb9ccd5caabc18c6e747d121ce61e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

