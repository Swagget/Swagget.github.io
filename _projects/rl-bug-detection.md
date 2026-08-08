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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA66PJUH%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T211710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKiq8ZVaoR6%2BXYBOpSKNyiIK8K%2F4ublLx8RhWAn1CeUQIhAIcVgLiqUZcBOhKyvq4VM7vtmX5X5yCkPvFMQuto79CDKv8DCHUQABoMNjM3NDIzMTgzODA1IgyoBhjoWOAK7u96IkMq3AMe4tVupogTpJjckRVkvM4WckGSQanXDnWEBsjdBpqfjH67cvL7iGlHkYqaoARm5LIIJKU1F9GTGKEhWmpI3r1m16fFfqMX4%2B38oBUwSiLz2095CTBRr38cP1UG6u6k%2B0flxueWx4Jl0owOC%2BMPHD9Pnssm8R8RZN6BngtVd7biJTRybHRu8IJ0iDdrn7DI7%2FahV7YfG0kQlXqkEoaYf1qQ%2BPe7ieoM2V6hGg51Kk7KSCoUMH4GkVRsY0gyjUAlL%2FtHXJ%2BalANFY6hsVpARYlQ6BgwhReoBkp97qKz%2Fj6PQH7zsLDry2R6PIiRl%2F32rZLxzMFyUfeFBB8kyAn%2FZhnjZ4eC%2BAMcGNDUtocpKPSjz09NbYojJuFpOCMYz%2Fnb2m0hr4B%2B54tJTkLMND47XD7%2FaKggidpvrQxhFTT2FzmlNMJA5Du2DtSWPpLej5KIlCC7u7zbk0ROA3gbD9IBlSgO8WKYo%2BVaTOeBARSF8SOlqqfadSNBs8xmRp0J2mNEKufdHrDA%2B%2BrZ1zKiTDGdVVPaNiAjNzze%2Bv7X8GrYdVIysf9qhgVzMGngToN8kOTDXmT9Pga9CK5xMgNC1BlQgdFqZ%2FL0Kbfrp3DBYYZUV9%2FHlD0Fg0TDjTkbfkuG%2F0DCvid7TBjqkAbNG5E8%2FOdgVSZml%2F%2FZob0XyEVry1gUPgQ6gQnQOtY3hvy0MBxaQ32ZWLMhmm3SYzxpSZ9gY6REUSYBCp9c9s2zBT82EX61zJHMt2vbnkFzfaj7E7Mnd8bd1Hj%2BYRU4IAzMfAETaNTcE9z%2Bp1Wt7YE3zOgAv%2FFPDbZF8By%2BZhNR6IyxOSL%2BJ0986a7yLMIZbyFaOpt5QczkKPcTtPRti5BMxboBd&X-Amz-Signature=1b6ad798503dc7943cf5212f8a98b70722e731a8fc755fdf5e29414df152040b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

