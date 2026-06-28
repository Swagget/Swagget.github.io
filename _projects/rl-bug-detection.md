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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3JWIJE%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T112944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDafiqvMgeLkrAPYOVtvG11atm0MWRaPTF1oRV83HQgxAIhALFKyTksowydSnv8m5XYcpos1HfpDSFVAmCTvYZ%2BdbghKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsY46D8F8gyDvkua0q3ANaodWz8L5a5%2BY%2BQ5oQhoi2Kvl0%2FhoWEXd3LjUBOtDFeQo%2BsfON5g0iH69lGh%2BHstsWiE%2BePQYi3loZF%2FO0cWthgOmPOXsX%2F299ieb5QjbbEcagHGBrfzUUtVCrhFTtR8Q18L%2FHFBcDuYbI%2FfGvUsiSlOzOy4q2Dw9rFldpQwr8y2GQuJCFCoTgb2X9RNF575LHHaylDSeC4sZPFZt1wXCIPsc7ezNE0cjDHOBOGM9lyQzNYsEoVii14aAPLqa2G2H4hyZ6pcTqeXc0kQA5flYIgGfyRXIOKUhaJ9Q1PHyUX3N5u5flwwxsBaKfGW%2F7InBpFuJ0EXa8fKmqARRvqmDQ0FZPEkdpL33VYAm1%2BwEospYu3Za43%2FTGbNXiNUyCaVdmQW6M2sK7QL5PMQtQqIjTQDIAORJ5AuJldrv%2B%2B58jdw0%2FeKdMFUcRHlA8UaYiUSSaS2UkXzZgmfh5YHBaMdstFscXLHrtNxsT0TEg6LfrppTYWJOImSaA8LMcrnhQcOoYQ%2BgaHtB4orGoS%2B05miLHYERSdLWUl49cT9O7EJ%2FvlHIo8QMGtgsLM%2BSl7puoPjcNOJBV8uA%2BpDjLMdSy68wWD2WDQOm24Rq4ttxPjb0Fxfa3Y7wNbnzt5goOsDCnu4PSBjqkASujQnjVa4t5ULEBpZp4nxdLg3T5OIPf51AWZs8VQ4%2F5g6gusCOlJqP6jCI1yE%2Bjq%2BTAfgxXjvqZjEU8xJuJnDdNatT0tN0GzIz3wvEGGaBtL%2FAbW52OPjHxUSH%2FBH3LZ75AfiUqps%2BvS%2BFXY36XnZkbs22eWsxHtMX%2B55mcQ0m8ffcaAVgas49bsfns6qyq6YUyOyy9uJZe2gqpEWurRwzJD4ZV&X-Amz-Signature=caf21f24a4a6881a7598bf41cd62cc702b0cc6360232abac96a5e6244944a136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

