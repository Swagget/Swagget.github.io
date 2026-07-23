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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VRTVAZF%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T224351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICtqayZnkPgOtf%2Fr2U8M1K0Btz9N97PK9wPgEJFll68tAiEAmss0xlHOkmS0iSpDqwto9VuXUqGb8LVL%2BMx0DIp9uJQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXFVjsxI%2FlSKZaYVSrcA5Dkq9pd1rs0ak%2FDe%2FlITelg7D7KxDw2fJe2%2BCPMotvix%2BhQDfch%2Brn8dCZKvKzuuWKjvVOBiu5kMXVbEjqokY6WpdHYZV6%2Be6A5jtOGV2kvxawNJaemKLkrhQAeqzg7AsaYT499disUunGMJjDGGfqD4jq0yKbTqWWvBieGf%2BGbLDxnfrbHclZ1VZMIyB7dCJNmAK2wLQD2cypxsPGcneJIlKWXG94Up4pCumHHjMRcLgV56DyYA8uL17DpyzGymIIV5zTXyUEloR48jdlRGiJGBIQTizymnqdhCNAIYfPZWlhotWLOsLK%2FdUFM1lEkZZzUd96ofWmgyD60ZI2UZcJSiONwblUdYez%2BV2JXU%2BdYApehHZUnI8RwHd1nzvEq8DV24Ov3OWs%2BtVXPbsES4WLHGhqSjTQ18suUWiC0DNblb7BLm4mt2GcUDMDs5ccNyzeJigBQVz6fH8WAu8GYEKQFm5icAHb2FmVxWcDq2Bi30gip5u9QzPLdpA%2BJNoGFeKhBzQ94m%2FBi1uq7vAYcOtLfihIw11t1HArrIaASBaDLuTalMDqq9rrYk%2FWLGL2N9F08QPMyB5JSad41MUqBhbRFfR76Mp0tkBqZsICM%2FWH%2FQ3pmOJkMESZE21eEMKuUitMGOqUB1VrOUH7npwGyUQTg3r%2F%2FjDF%2BW5iEH%2FopB4LB7DkaL3CepPsKxpSavwrNnY9M3NN9tYKy04LS2ZWNnmTaDnS8%2FfifObxnqrGOTDbcIQDgImDNRD4iOaVIdIztrC8M3ky0y673oPsQMxkK447WVfT%2BYPiVCx1cjwFoVPaTdki%2BV30So8oLURQOPOJO5AsEEuq5R0agDHtNnZGS634JNpB6kY7xRDJ0&X-Amz-Signature=ce09e560ee1836b3f6f10adb2a37b240a41cd32977eecd313bf06c9ab36c4ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

