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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PSWLEF%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T191425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIH8KJ1RivWNeREbw5Vfu5UVVBP1X3ujIrHMGzbVY%2B0LIAiAEAHyfDw18YHpfHeTMoJXOcluQ0yIi5BhigqOMH8oX%2FCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC8mzcm1NKWLSLwpqKtwDjvpd9HHpnJW9SP6MmFAsGl9nElKthgfvYt165ZQRiJhcF%2Bbrk8bPOGTgXhbr9uv%2F05WApoHFV7x8IliBd8KeCQ7de4IiahYJ6cyUXmTe63u0xT8xmltBpQiE0ZSlnMyTw%2BkcmW9k1C3sw2BSuWdZWdEr7NY6s25hmxgTUcSUDshQcdRw9Fa70cTKwBsNxnrbf2u7f6ay5TaGabhsv1HgVG%2F8FgHK7UjWcymV1%2FX9lBxq%2F5gdHPYyFCJNILaps2aympVNyZkJTuCQN%2Burz1P8%2FgqtRHftvUiBFGUtRQHHvPRvZkTJUTQzPzP9aDF556tqf7WrVj6FwdB574f34YasO2p%2BYAHdJXzNoS%2FxOVEQMbd2astaxVoTl3%2FdlYRN%2Fbzn88spZI5%2BRFIjvdw3HdDGFq66oPKAwzCzXjBgq5Y%2FRT8epAFUtNhOrRwfr4hHH8gciJJ1pyHrOSLpXHQ0w%2BdDgr6mqqM5ArBxgytcw9ohkWoLrSe7lbmnET1fnXbQ%2FAElDC2uBihkTpIg3h%2B0RjCZSYrX%2FaywtZAaqBQVj3QRmLlc7dDraYUVHEdOhF7TPvfLdiOluJSunJx1mSAYO0BHNMaiDwgIprCc50PZW8XGGW66uoVmNtQUZgW%2Bhf4w%2FsbD0wY6pgGQCnnNctdvgaIS74wK6wWesJqpqgLbBgzfBdGBS497HeICsSHxh03xWjRiksTK2FpHkvYkgBkfWOWZ5KFA85%2Bm2pVYJHELQl%2BRTpRgUR2gLAx1N31SJw4OcuQCHAWSzSxCc52ZAJlDAknH0nKQv%2FiDOTAVpriCAY5SAhpeWT%2FjaHEab34issOtrvcUYrR0cZyX3XmTy%2Fulm5JciVMuxob7rUXaB%2Fac&X-Amz-Signature=fbfddbdfbfb93750946884e63420047a6b9312685522d005b5b308bb62c835fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

