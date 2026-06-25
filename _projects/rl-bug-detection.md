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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CBSWCJ7%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T161759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fzeyw1N8%2B03%2BTjpZJQUu4DiHgj9xTNZmJ5js4tssQ7QIhAL%2B7q1TjvWd3vTh%2FE1NY8IoWRDAF5kwOsoJnd%2FMrtHwtKv8DCFEQABoMNjM3NDIzMTgzODA1IgzHCd7LwGDQapRxtu8q3AM%2B0mW8YLUijUCauwDa4EwNFT8yZ20PjKGHDLjgg4i1nGSBqtuOxE8U%2FSXWuLuP%2BupkkZpjsR%2BuPglk7klYnuYUgO203wAeKi%2BFCWj%2Bg8leE0wl64nZ6RKxBWgyD8SlSHIfdZPxg6l7NRzL%2BbvAOEhD0Fl9i%2BEsob3E7r%2FYCDXwJSV5HQC%2BvNdU66If3BA6sB7%2BYqx4EzZt0JazMZBnf3rexB%2FJoYpfzo8GE78u9NLj8lNMESHiP9ateAYKHwk3DrS9GBUaVTEAI7ZUELPxWWh3urcrYqAlRjgo3t4mgIK58VvDgWelnYeL%2Fnarc7T2L4Rq4y5iUjTCOlJklAmGMmGrY0yQNq1PxZ6zTgz9z0OD3XlPrlFkBxKAirRZ69fSoRkQ7L2g9s1hlkqlQbphbuS2qJSPM7WppmBEZqJOnMl%2Bmv377lLHFqDRRpH44PNlAXxblboT3WcxJ1yK97shinTTAz1S7faxwgOve84xK3KF3yRCmYdpZOxfBmM8WqOeI586YXHUx137YVkpwA23H%2BQKhQLgJQIJa%2BiS2dzJdd%2FQ7Dkmlcc98G%2F%2F%2Bpwv2XJu0XjjOQ%2BFfWPBp60DTl4ObR8w5UTiUrI%2FGnJ3hTWHenn1NJQC0e7ZyvWQhmOENzDtl%2FXRBjqkAe7Q38TjCHaa1RsIi3vlV%2BauDacfngbm9C5Rh67XAkp%2ByoOy3CZVxUWmYqr5js6iVanchseii2YMlSfCGwBPAX5rgSQ3B03OsBmf4GnkuY6iymL%2Fe2jjJQbmqUrRsngCRE0LEswqqrLsI%2BJQI7VbH57g%2FZtbc8o477K481WYQBiEkGLg0lUffsvtWu6X6uIpkj5OaPKdywdvbqINbw1FDzkNFQPB&X-Amz-Signature=954c9036c81f0821495e2f57fdc8460a9d929f2f4cba691888d35b7991b4e983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

