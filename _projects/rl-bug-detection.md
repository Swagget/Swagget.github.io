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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPX3D5FL%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T230738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIHXTrBv4fbLjJb19afE1L6UjeYHXMWO0qFdnIOxULdblAiAAxhcvawgq%2BPA1lgtlESQpt8YH411ex0TpZmgbqcKiTyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM84aAQ1Zg2ZKAJ2l2KtwDXWy8hADl3I09bs4IU2H%2FnJ6Qt8TICUdnaQSMQXtb8wzaHiUrGM%2BE0UXf1iw9fXz2beh0OsasdpHvY4SzZJRZT4ManKCurbZY5kT8OK1jMsKy9fcvchShckW%2F5tLernYu9aoU9BfRGu%2FObWgxPciiY0pYJpei5%2FoXLu2HSfQ5MvAriOl%2F6kaGWOm0qKt17EyfkIEkNoejrU9B1NQhoVozucSLOgoTj%2Fo383kqyw%2F8VdTwK3omuXKJj3k0nwLZlVQXMWkvVL1DfNiVPqeSTg1hirx0EEvx%2Fo7iUqCQlXBN5%2BGROnooc3Y6qr5C4mdjKO7Yy%2FKbJBDLBpixXgY0F1tLrG1fLIx1hi2qSDTuyWWDgR7FljkIe9GrEHu5yxqILT23LB7WAnaErvN9XLpbG8v%2F5SjtTQ8hQADDHCz3zVOvhjU0LyH6%2FnUFsGxOBVGjRemrdGh3kB0YWYIjnCwv0SnqTBIFFfPkYIHv8Wr5yjFDFYT%2BTJPMJH%2F97S5hhDO3tivjC%2BDhLmisq%2BBTffoGrpFzVx4w25kKErg91J7d0pTEcz1wiLCLCBuTtRP6hCpzZz2I4WeCzOpHwylDHifqEGK3%2Fe9PaGxMjrvVDJsTLGtrPa9ps3JqZQGOBMdTaNIwmKWi0QY6pgEd8hp%2BHdS7znlVliacdahd8PUoCFMnq1NNdWaOnnTpIIEzKPbndfb%2Be2%2BOmLa2fB7jI6Y25LBVkivGmXjtS9F00Cb9WEOKnzUGLZIOx64xAU0fzbLzcFfyHBnV565r%2BQK9owPRX6qide%2FJ8rQyX5AAqbbvHyqLJUncFp%2Btkpo1eBeci05SnVXDNlacgOH7IWyUuq0ov1ZlM0Ab4V0UpsmEuJBWQVnR&X-Amz-Signature=014778b944a47b61efbe8888fb578cd6a70ca2f6274c52a5f10e6275cb97f6cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

