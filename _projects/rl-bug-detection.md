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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664XA2JHE%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T142214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAJ8hORxN7HjbW%2BwS3DzUNZlzc%2BMt6NpACrvlrnSQGEAiEAjC59NNSO1dGdSYcbJL6A711c0VTPauKGc7H%2BDrvDXjkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDa44x7x9Q31x7JB2ircA6m9IZI2GLWKnUXv6nkvGOJ92t3NL0qTrTqWH5yzx3IYIChQzKBVx%2FjDvIep5jgGSMCAI%2BUQOmkXBO8owFykak3tXQPLNM9awEVK1oCyZaDW1b4osCRE3k3j%2BTRpkVDThG5oS%2BdGiDd0w3P4%2F3FQ5voW3Do26GJR%2FWH0ny57zw9SOrqu8D7LiaPkNujPCzBE9KAWAO9a4gk6xau6UTg71tjc0ZE9GTnfs1GL6OdcqoMKEFzZoIsse44EGrnwPhPGnSR2Mh74oOHxvyaAt4PGEAtvcjz%2FmexGNFl0CetCnozcnsVL5FyPSZj7n6xF0FV0m%2Fx5hM3dFvUghyeI0hzfo%2Bc%2FMSX8711T9LiUaS1XQZ2FceDjmmJAT26%2FhdvgKIBjrWw8a%2FRA5oqmE4G0XbTueFwOPFYxJlaL4sHnhNGq6XJzjWHBmEuEjOcBdrN7Yuneo2clI%2BP7gYoVUik0AVNRflsJujZ32zHa9EA0NzE8XU9Gm9lVyzXQ5q5X1f7sORqkfdXSJTOId5%2FwjJxyIjwCppZmkCt6QV1j7bv1iIPcyuyt%2FC8utAfUiF3gIhBMc1mq0GFHXi7g62ZBEJ0A%2FmphguFgbt3t17cerAdqi4zbtnUDiecDAmqHZDOBSF4EMMWl4dMGOqUBPrrgzFcV%2FgTINn3bRWnrAIChTB5TecfSXFlvXEZgqqvenlgSrYBCibtV%2BTo9jA6K%2BlcqbLHLfhjP1eLEA9pgMx24KpVwyQR8EIPU7QjVKgvFssuxQgPFF7ww4AhAlGWmGUl0J522NlX1gYvIKxmrQ606kAdU04p1u1lzDdcSMcWpssNGsyShvr6wodzCkYO8CxO7XEInDpxfTpe6oYWkemzyCSwf&X-Amz-Signature=d0b3daf79e7e562a86c45a9ee06ea62df31656643282852c09ff06e7c4ff2ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

