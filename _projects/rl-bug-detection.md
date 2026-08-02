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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQLB2RMV%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T012442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD5Wx1CpyQzCTOS8T00rVl8tycpKE%2Btlc5k9dm91Fq86gIhALz6PzkcAq9KinfRJnQ6mF5rfJ8HrULd3YC9XhcQAwUqKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1%2F4irNHn3Agyspl4q3AOuAPyHpiRHW7sqYRunbGJeulp6xtM5Ww28G%2F%2BBoV%2BPUV%2BlRnhP4G0FDwtt5xzvt90cdB4qrSoqXWRcbtdWQbiLgJrMt1%2FNsAXsHHyszip06hCoP2gw9PQYjdV0pbnF917rEUQ3XG1%2FKV8htsiNxCLeGOFZnAjhxxeW7eBFZJtRLJdJn%2F4OeNMkVCMYQ2lkWVOZGF2DT1oakTVBuKwn%2Bc%2FBOhoki%2FsKbkqlLYnW4vxmAIhNQivEEmVzNvBQ%2Fp6b6qGyf7UpGbuk72niL45wdKLz%2FyRmL51FSEfpTIhLniUJ4nY99Kikvt3NUSX5CXZ95oGa%2FFXunzaz5WoQkWNO5jMXQTnuQ4uiR7bjrpGR1mgayjIYLqgbJvYigFJgBpK8RSHxB9kZJxKsOXxj2zn3VUn3W9zFZb0ckUqKZBesDru1AIrYZcqLCx%2B1wFeRi8ViHYnPPKwjMdPJtjVkqd0G5DXhDbnUoYWn%2Fs5anESbAzQqMkq7Y31uHJ9O62LIyNIQDqCWQvjPzOMgbhO5HF1dQJ07Ek8c75XGNsVnnll78fERwFn2wGv8EMg%2FAJnU5g%2FQYkfVaN%2B%2BQAl1nM6UHkKOulkr08hOL5afAXrqProOTMdLyceK27r6Sc6eB4swhTCL0rnTBjqkAcJ6OrQfae1uDySuHmZWK9%2FofPO%2BXDf2ajvZog8Mil4%2FAHi%2B%2F2G7fFBpm6kce6G6MK9cqRrldgRNmFiByHuYFT3U5PATDOpx50JBy9pjQ1RjfibSEtKG8lwxmBdHVG2YjxXgkYmC6ahPqF9FHGarNcvtDl9m8AbIpfoE8BrN1jdPcTOz1Xqz%2FmMWlB3wcwuoSDlIwuydj7znlE6NfqfaRdBSmgw%2F&X-Amz-Signature=ed53e4763772e9c584c77751be8cf1d4f8d85ff8f4d6666bd944382d26f94a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

