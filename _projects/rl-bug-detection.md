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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z47DH3UE%2F20260913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260913T234254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEo4mf7CqPJIqXAg3znuegq%2BZ03qCfEG7uYawCNojxnHAiEA973NqfiY1W9p0u0hbqwivQb7%2BVKOBp15MBlXITpjT4oqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsK6akNGZa4I%2BL5mircAzVTVFcuknt4R44d7jmXlS9NPUrxEeRVBzPjOcrjD3%2FUDKB8O7zI7wxgTxj6eEzxY5pU9b41LYBKJlOZvNo0kwC3Qn7A2RYgIYI7m2imlGTxdP1S9nCb62qI2DEho8dlmIDkfFp2NXPs4ssG75e9yc2uFyzt%2BG%2B5VRDTjkLUwUWko1m77vjrEHiWB2MgD0Hnhfy5T6Ti7TEeHsSFVXZwx5Kx7PPsQYp6%2F9OdtIJ1Sz3AiO95MqZseDuCOjeXvrjQuEZon09ol9KZB%2BCQHcM3Fzc7Exoqtz9KX%2BwRJBsXPLid0RGGNOolW6upaS1qWMSVeEW4RHQ8c%2FpNiqpYuUgpRGQ%2FldpN75mkag6e8ZyF8%2F8E%2FoXq91LSzEn4Us%2BT37hgvUg3oDPy1hWDPuY38KwkuL7FqntUncpjD%2Bxe%2B5qFVEB0Ve6r3jreGNHw6iCDejjz8cODvh8%2F8LDaBbbNdHFHWEQhfp1nrJrRYJIjFqDL02gPPnihrB6GWSjeoqoNIRMczwDJX5cHKTu1JFb8z94qkQNAiOJszsBOeHLWHPMrc7L%2F5n8HHYO2KBylq0K%2FO5ykbvELye2o4gejHxW%2BgyKYhgoeCQ7hURrEIDApa1g6e723LqWveGPxOx%2Bn9SNNMLznnNUGOqUBay7Guvoiut2xxSPuPQhkJrlKO3uH%2F6a2Vsry%2Bwz0BR4SoV%2BkPbZeYujChRYiVBHiZ6JPVEtejZlsMTBDd%2B8bG2skdthH7T%2FAEwZyZhs2YLoptC2X5rtN1iIrRJZ9FItpRP1pvJTam0VHWcvcDiW%2FJGEzGX%2BK5esHXdKTrT2ZViQeuFW%2BU0O4lbHbc2%2FiGiSHK%2F0G9ztg9X%2BwxT9xw5djxoKc%2F1%2Fy&X-Amz-Signature=afafbe4d034193fc83f302188205834d71e594e38c20aa5bf77d21e6e793bc76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

