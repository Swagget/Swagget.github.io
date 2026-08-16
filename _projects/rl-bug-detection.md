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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627NHCWBD%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T021330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD0ougurLtJKc%2Fh2iW609%2BWdCszrueP0xnufot7kJLYbgIgIDwaE3z2iuIJBN1Uwlp9qLihegO6MOdcqbhjghtF9Awq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDBdrEGTBqcYu7f38kCrcAy8hGVYMhVRGO%2FMxTmkPdzgfWZT5NMqOFF1dhWVsXxXj1wlf2opEHzBlVpva9Kk%2BlsAXPZ9RBmsvffU3yxoG%2FrJFhyTuwItbQ6Yw9x3EFPObBrZpzYfZBRN4UVgJjzz6nRsuAeise98TMDUn6TMAyzt78CGOjSc4EuylZ%2B65WWtf%2B92OZW%2BUdh8UuqKaUe1LRuWfqIdg0UA4uAK2UP25E%2B8SrDliJpL29YEewldWx%2BCDBO0YTnM2zh3NMd%2FVI7z9emBFRWANYcpzoVdDdKD9q9WfTzXSclPRkq8Rm603tJjv5Al1dmPQLuR3WcWkCK5Nqg0SIzMbloM66c%2FnuubInSXzWqJBn1b9MT%2BlEURuh1112%2BLcd0Z%2FagiRX1uktsvsaN%2BFYA7AdluoNfp3aZJV9SSd%2FD%2BOU33OkIlN7cnLp3AIZyzEP%2B0v9UbN%2Bz7kSjXXjaPNCebsKc1JZqbbhbbLJQH%2Fx0a19VdynCUjXm%2FcBNvSjQngDy8tBNpVcwl7yiiaE4Wb%2F%2BxVp%2B4J3Dby2oyE6SJlMmZMaV3AqK%2FxcB040Pmcf6SIsCyRM%2FbqSNFHe6e5F8Biy6hz%2B3YB7s%2BOLJjmI74W29ci%2B0PClJ3%2FMjXJCxToT1wO0IkIChbLYaGHMMHrg9QGOqUB8XkxDhIqPllCTUt2zmDEPuI3hHMT9O%2FrNau%2Fl125iFAFKUny3r%2B%2BTgDS2LuUAbH4FVcGdfvdz7IqL8JFJjDwqVDTV6H9k3mZHDNd4iRMPdbuURNtCTZPP9eSaoUpPZXQShsXa011ipXZQe%2Fe4KYOOcfU68jMLSu%2BhUolK43%2FQJaSTXqv4Gw2m4bEeOLYTgJ2%2Fsi6iPRxRxH33bC59%2FWO9gDGleOD&X-Amz-Signature=559572edbca069c3244bdd5d0f060f6f4ea011836d0b3c517af78a5356c91056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

