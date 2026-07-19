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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FBZ5LUD%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T204952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByZbuXuV3EzHtnX4S6HEzuM5Mhr89U0Osolmisvm95WAiBM2K4VJcppGBAaJAlDePTDZ44FYPn4G4LcxobUw5a9jSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIuLYuDNGKqeEDW9OKtwDqzoxBlV7RJZI5EuR68XxT3HfUBlcBrPyFVp%2BNuK8HV%2Bjfv%2B%2B6t%2B2xQgqMBJfVqOOdAzwfiaK%2FH23gJ5Y6GuT3800p21SS5%2B2ATyoGcv%2FJ6D%2Fu3KVC%2FDFRg9IPSoMDV2IG69KIt296nNNwd4inw%2BCr6pdn7KwcBdaVCr9h56ftMig6pVNGxpifepOM1pp80eq84g%2B5rS7vxu%2FtHkwIaeHutb5%2FvpjXbPmHOCZB3OivUJrD0pMaYEH2RQCA%2BGkUKsB%2BK%2BU6rL3PmHmzB6hQWUbWlLHRkw6a0IUim%2B4s%2FrhQ9DsYwuOt6kcOODLlHxRR4zJ70arIHiNoIDfJspsEq%2BwdFltHcWxX2VsJZ%2F6waRF7rTLuEFklwLexkxSFRRy9FWT1mPJvXDQGp42U1x9Hvsmw5kZZ52%2Bo%2BlGcAAX1qK1GBiqY8FGeAKU%2B1MJ%2FR7Q8%2FgeJYp2qcMYzyib4DQpT05vVe4VFodRHPaJfa4lGNQI7n%2Fwxph8nfHr9mAWTwH3OXTySs15IDAb7RSoLhLTCAToVRXMyXO%2Fp40nN5mALfesQ8eP53mj8ZEicX2L4APfxX%2F7LHNt4pha7p9%2FoD1h9jkInT4UI7n8fEHHNhrg9SYGH6wnx2lj5k59NtoKuv0woMT00gY6pgGOo2AlL3AU0rumqwqNKbMyfEk7heslz94FMSzNG5OE74mBp4mEttKBP%2BTjez7ESFQWU%2BFt6ysAf913It7u1NuX52LxT7YbW7ykBzeBesdkcTi8KO3ZZ4CAE7B2sweIuolAKd1R8mIQrlxe3eWffYFLaXJCTw4SqheAlUPcB5ljIiFsdc%2FcBz66E3WqE3MFyAeGCMi%2BHffg2i1LzS1MBJBQ4GVbYAOu&X-Amz-Signature=f6a162bf188debd9f8297ff0bad4ad698c38cc87439fe21ed351bf6658c2b832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

