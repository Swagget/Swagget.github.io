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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S5E6WPK%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T125609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiLIqByc7SFfqxjRwlybVrO4kjKfNN5BLFIZOTGvDfmwIhAN7OQPwqwvlfIrMGHlRIHOG0AQRnA0Z9FOFz%2BqJgRa8MKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAQQLvVbpx7Pvworkq3ANxrwoWaWIPYE%2F56%2FXffymG8JP8EyY7YNCDbW0Hyc8XBsCxPLjQEVE64mp%2Fe%2FyZ4sxBgcsq3gtqV8yV9cBzLVb9gXLBKA2a3CZ38Hlhw2QenvVF1OGWsH4MfoFWaEA5ZzTOTOGq2KVb1f58g9WYszFXLQoXkm%2FRdFue5ZydNgrO%2FzU1rIKe9LtddcMA1D49Mu%2Fpu8my5gypzLHOAo23tZJM0vpJGbxH9KQKOjyOZs7rAOPOzko%2Bt91vz%2F1N8mr%2BmUyolw9dPe3yE6DTj%2B30pJoDHfRycjqyMdEjhwtYnqWpKLBCSZfrCkOOb6JRR%2F3%2FeSZu%2FPzJRUQdFwcqyt929bVD8AGF8k3EHhrx08Lm2sv6CI3AAHll81fr6mP8z33K%2FujWdyH67J5qiRY2qnNUbvECvMgwm5ib9KdOwUkKaeTcX6b2ogD9BNtSc5v6iixxF%2FQUprsR8jPDvxBroIdp04ABn%2BUmf1Gz%2FhUJQmmE2yL2DZKIqu7hsLwGomeZevoLCCf%2BrGXuLlykEJCKrIDQdnkTYYAj98L37BOeFeLj17SkH71aYFeqjFizLzC9%2FxzoRYuL5orvNjENJ0%2BxuT%2B310o8qYgeYjMD6HDHy64b4Ubs9q2IQTPPs1yCrz49%2FTDB6uDQBjqkAUwYT%2BT7p710BvJTsK4eP72BmT7wYzgCIoIscAmSguvZGXP03zd1qFU%2BhpM6XCtWDZQ%2BTPZXgvqwMyqYYYXlkjmDpikTPzZ6WsCM46Zpu07SxZhOb2PjCAqErXA627RryxvDc2vS5YI90n%2B62GDUNys%2FWbIx%2BpWPpTxz29Rdh%2FNDLmL0FH06lc%2BIip0hRrOoyz9m1JSVCjHpb%2BxYGZqS2psi5BGd&X-Amz-Signature=3f7bc6b981e989cc3909691b5893d368e779c78016b048f2a9fc61550df727a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

