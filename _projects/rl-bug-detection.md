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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWLVLOBD%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T134456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvSsTl4eIPVm5UjRilf80T6mU2RtVfub%2B1NHsihiOVaAIhAMq1yZ3BQSdC1U%2FEScVuA0eurovHk%2BUunkyHYNFZb%2FvGKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI%2Fi6ucaoymiMo9F8q3ANg81vRkX4pP4iUSllhs4j0qDIBb5veEz4fjn6ROkX7ziaWmGFgeGvKPb8wsY1ArjcO3ISHrvkqn0IeeMRdC5BB5Jg9up5I3NHnGQpDuOsaTLBHWcfGnmGgrUGaEp0WBcp%2Bo%2FmBvulmV7RPn20NytZpp46mzZYc234QN2ZKmBFCg3neDNwc0qix5pJmeYfjdk82tS6E15DfqtnRF2KGyx08GoLrVW0L8toisNpTwApRILVBznEtAsEG3tMOREnqX0i4N%2Fqc6AUuwsdX%2BSdn9talmxmKMp%2FESRy5plyW47BwwT4vcVHAYZOa9GsMePNm62vMoNi0RaEeV%2FaG0411Wnnc62BYB5ow7YDJfya9ezyCcA0MhFnDN0G2LFD7NSMGeUcRCvZarPzcbtfWiIA6%2F1h%2BNHUPupYFJUXlrOh4xDf9SVru6CRV%2BlHEV%2B2gOKOiMvYDv76VnYr9EVGgfwAEMwQjRA4nJ0GYUfq5DRNCAsbFkIxcjHtCpCiPbhQn3VGG4Y7mDcS0lZsPR%2BKkETur6w%2FpHyZYm01lk77dKz1REB%2FxulZlv8e3XdBQSrjr8gSgMDWgB9X14fXQF5JM6Hj3oukQ7GXkCIcLE86d6ou8XruSqiS%2FQwP%2Fq1edmyPcUDDQ6uDQBjqkAYRPBytG993UIajBAIFVcKkrOAS3yE4xf6oC7ZB8D1poDvfsgkZr%2B2A01I68aLUo3aPU8TUANScZ9g5KHeTa02BjPVJ7qdPRlBtGepCmyPJYICiM9%2FA4wfpeJNEz3Z8udDYco%2BUu9RCeikm%2Ffk0xSzOWQD91GGFpYRqdvXmXzO56z5LEAO7ubBix%2FBVGUtYBNNChRMTCDNTx9gb3BSIMdNOn2hG8&X-Amz-Signature=5eb03d8b10571b52584329f7d3ad061786d0df1de3ea4f4ce10e139e26ffed40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

