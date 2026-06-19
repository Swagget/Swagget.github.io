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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTTW7XNL%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T192138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiT4PDweeO3kUonZrkq43FmAdNl%2FfgmTjPJpW2jW%2B4AAiBKPbU15pvvZv2HapDtmLNf%2FQ60YLRh2CK5hy2VtdV%2BpSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FjBy3gWwUuvRAG59KtwDeenPaGWi4YzVv9gjx2EnXm9hG%2B1MpciwCkRse8LaVaw%2BHU5jRpYhyuddNW9JDWo5iBdEjF03k14ZLDREmUUjLU9CbOW5CMaMhEXmXkas0yZRBT4Kjl5YnODa5bVP6kgPEdpa8jtOVSaoCBl2Wu%2Fu9imjUIy5jgAw%2F9q7%2FBXYiSXmSl42AXd6Xka0ss3Z3ZiJdQXs0lorcZxbf6qUTnQDl9oaNtXM34sMChB%2F9a%2FiHzD5eGFNIku5r9d0gHpTjkmpPrj2PZTl5rU2eGsmRL75jEilgDD%2BEm4TeV2SV4%2BioPMPLuDVWkQ2DMPqf4t6kL46XqOSkvCcOnzjcw0cuQ6mxUufA%2FC6EQsZ%2BYj76ao%2BoMDvzVUnQreWk9Zq3K7izj6uwovLoHsfrXBP2pfr%2FqENQj%2F2nZg%2B3TBQzbKaN73Mmp94rMzV2taPzRuQrhR9ZPdZr0LODkipW2%2FgPzG1Pj0bdbYASevsw2XsD1fOdzsBx4OeRr%2B7KphcX28Kb8rZI0MPJWhmirgo0qX2A2NQxLQHyTmxl14NfsyhHXBsbXEf9YrIyV3JWj5N8VbSQ6Wb2JVdjIDImzT2fKY30semIPkWqN1%2Fptx5Mtp%2FFCGsWFTJWW%2FR9dewI2opE5VRbKwwtKnW0QY6pgFAvWLecBDpQHZRNaPG3EXVnChul0Ki8540PehhhVrsGp0W5AoSaYrlkQx3PluIumoSn2otGA2giWdVL%2B%2F0d0ZbjRqZwg1a1F0jhykgFI2o2Yo2hSp53goEJtIc%2F0XFRAZEexSuy26AXS485Z%2Ftc7Qf679gClMxRuzhs6Wp%2Bhfy7tohPriicZDhAVHLHK4bQDbnLm%2BtQ5cb7jSkWpL7%2FpUI3aHVZurt&X-Amz-Signature=3d5e231104f0c9e3e70ec988edc096ea94f1b6cc0ba7db450598bd3f7dab4b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

