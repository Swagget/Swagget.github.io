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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2MNJ4TK%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T092616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUbWybaFAiWe72EPaUq%2BluGEcu%2FqgPc4l%2Bl%2FIedCA3HAiA2Ap0F25kdfUnGW6dYIoNdVr8hgp6yOiUFQQl7KsCCeSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMp4FT7EHlY4pqSxtKtwDtNtHZg2GtgQFsSFMgL0X5Mh17Vw5ttp91lk4k1XTov84wOCJNQWNdfkICFzUMjGCnaaHgo7AV71WHea2%2FuJnyi%2BgTD81EIuGHZD2owJZqBktPJvCan6oNlUAA%2FFGAO76mwPzmxboHbUEHYjuO%2Fai1ZJsbN2bT%2BiCawGNRzNalGAyxZdBh8jtyrXkte%2F8VitWuAVSq707CtPSRR1hjmkvx2Z8Quy7pUb6opv%2FV4z%2B9%2BNbl6Cz%2BUCIYpaQepU40MqxjWHMNoOqBwFYg0U2FmOu7Aeuq8108HhTIyR%2Bks98A43jDvZIMv7rE32kcTRL30yyjGzyW3UVo2LPrsEpntt82Jsi7lWcRAjxqD4seeIpw%2Fh2MbIL47AP1SC%2F%2BSiJsq0SXdCpzxJLPIcMBXvfKQdu3QJKeRl%2BsrfGLyYwOwf%2FW07A5smGnUeVjxJlvhHxBjV43%2B5VGKS6mVvJ6DJuDodNmVaZEly7Gzsjcs0wsdfl8j7SHAuWncvH%2FiypiYQbpOcx%2F%2B5CXE87LX1N7RhVHOUClVCtCRyFgFgHN88xjVsqQ7Npcc9LZBa6FkINd3IRcpCRulCCSwooIsHrMaQy2r%2F6ec%2F7IwodR6GmuEtQ9tppgJPEaIPYsRJ%2Fc2winbAwr%2FPg0wY6pgFW27l46F0pWybh%2FQAuTFYjvzGPp1%2BiLLiyJH7EFr%2BfDdMgj4aRgUYiURiy0Q%2Bh9R8k%2FyiF3%2BJxXYCpSdQY7PVN9ZUsN9Fv9cnu5hL32RTy%2Fv1D8ysXaAYhC7JSxxWnL1VVsDCduay%2FDDWlCRwrj9gX1Mz%2FWJUHaYmJaSS3pzAS6V%2FTvACCjObEh7TYXW1KeOwadFmGSAd8t8C2tQHmd2AVoFWcN35j&X-Amz-Signature=dea4ae2b6027b036c269a75bf5a3608e94a917b6b74bfd173e543181b4b9d03e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

