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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNH2FJ4P%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T232923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFD6W%2BGFYu6Ccc23cXSY%2B%2FtTnkfE5lwhLKzN9BUA77ugIgE0GWbWoa2RtcUXscQoaAzeDi2OzI10onAmVZQgBOnhQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBge2sAR%2B%2BrvfLdpGCrcAy%2BlvzICG7fDW%2F145bTWt18GxZs58Cmh%2BFLwVviTQ6n%2F9dBiAcgU87zf%2BHt0D3mWoAOXbbpSbP21FwGVs5%2Bb6lPl5ZDTFPmxErYP8MBBysr2SCnE8Q9Wg4zC8myhsTQ3NF7%2FHoETISX1PcxEMz0o6eW3tYq9pAL8jaeTfZSjszTWoG7K2hLhaVj6BM5q0jHIE73NeRrddyjRss6qFAFZBNAA7CML3ZoBJFIlR5x%2FPA%2BL1EtBq%2FqKk8IaIfa853Ifa%2BR5Q3sNpQgRn0%2B2J6pDIC1bxCY43tBz3NweoNVJn06anvmhf%2BWp531W%2FvJ1qniI5FMqrD0HxS%2FkiVbrh0du1un2ydfvgn2D%2B7ifRzAmQB4nGnJnfYwDPUe%2FSA0rRb6vwL%2FInvzpZjk2f2O4hIKKfCzSluNKYM%2BWzQH9%2BI9ZteS6g1Fl6zFmSP3P%2BOXF%2Fo5VWR3%2Fola5LFPIZUxVAVCb4%2F6JlzpxXlqU4h867p51sEhHWYJQUrCiKW8Ty9KIVjvwr4bdkfOAaBDiSdPlaKKYV3CoMBI6QCv4hd7derpDhby0%2FQI9kdblPYBV5MfV724CHAbLdd5ZMqftdkbsSq%2F6OwQkZkNF4YXstxFKgiey5MPsDACg57cazUs6Nr30MPmul9UGOqUBJ2LOfM719xmvem43d%2Bfs9c%2FlGxh8nT8BMqq3cJ04IvhIq6fIwH%2Bds7%2FrKy6wo2f0TTQTRmoOtWMUMUpI1PKtRCwSJdY8%2F9Hdk80%2FJtLpfifjtgSLKjvs3fr2yAf9eIAIgPPXFiA66rybdtrGX2U%2BAmGu%2BHqWNH73kqpZd2UdLgW3YiJth9XzbtgVjyaH%2BaEzZKJ0nb%2Fy1PmwGOClg7%2FhbkmMLGxp&X-Amz-Signature=f5beb2bb6f38e806a86fb2c8e75b53c63506aad709cfc0647d635714fbabc0c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

