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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626VUJXFE%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCjPbwPdkqURCpBGZqzTAbM%2BuuaFSc%2BHdnqc5KN8GeIfAIgaodOk2sJWzdEbwMxYOOPJXcI13la1KHZyQprgG1vj%2FEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDL4U4ql5JXOLSCAoNCrcAzS3u%2Bww7ehVjRTmGKx%2B9VWvVBKdEXr11yyqs468gudhFl58dCi2KBP3PSds9uRTvBdAoSodvJakbwZUiZJ8aWRK4%2FIoQxbnaM0tH0yUrIe9FJJueE5js%2BcYNQeQFujWFj1NCmPrxfJ71FfpbeLHtaUsVWeukU2CyXnVewrYPzEqLizySyonWKMqv7knynaLunKDv7Ez75WteBVfUbqWhCC%2FpXKmlWhV0rkGJkWWq9rSbEF088k4qv2kGptR0aYjLdUGec7vXulg%2FY6CmlSvm31BKGfZqC510%2FCb8LFWicUI%2BR9XTD8N8fwgW%2BiWdM8dR01%2B4Bb%2BbQO0XuAJ5EbuZ4dWFldyYbiRFyJP141NRuK699XPVIjAbix78sUCP%2Fa0xBYyDZ7O1a%2FMAWkKRlOs6fU%2BxVlkHrCkYgWT7qJOLD7unDAWj8DhYI%2F3dJMquOZKwZOJiaFdGxAoMjv2r5lRgV7elc8Wf5d8%2F6EXnqnZgbI4NBXATlVVaMVtYpd76DfIYUI7meRZawbDCfdn5qL%2BiSmspa2wFFYe01IwY7UDGpUm6JNLDBBI6DnEUd8gUufOc0VhjfcMHnKHtHZszkkxiHBkENY7jGad%2FtO10Sb0Skz9UR3H%2FaAgExAGuwqlMMLn3tIGOqUB%2Fs31er%2FSm0ShgqHHj%2FC5xjoz8H1yA9Dvbm8FRgG9nFTuNfJUP2QjNpKrC0sxFzX7e53RUIY%2FNmHEC4JzUeBvBpqWA7PS5gSi%2FikSUQKOfQ%2B6d%2BdPyYi8KIwfhj5YmBjp3kdED8%2BF3Cjt1zT40DO1EcKm12PZDYHYS2c5j8Dcmk04V5rzqnqTA9zk6MiJH0h7o9EkWquoM%2BFZag3e4xnR5Hgo5x%2Bg&X-Amz-Signature=7919d1364c7b6f0b072f4da47ad2d806e562331ab52e6e6699a2d712ab4f4cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

