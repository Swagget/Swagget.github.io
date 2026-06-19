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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XXPVSW3%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T060453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD41YXc3fm6C5A%2BbRII%2FeRNWtloQK5dNcTGc%2ByhEVWyEgIhAIRDmg5%2BoyGC39rcAS742O2OGrVLv6MqIil%2FzB34ROZpKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzt88IRQznKGKUnWvcq3AMGehGXjsXDq54dMR%2BoN7roDUfaxMnMV2pJx%2Fj%2B22V95%2FElcZ%2BrjoCTWsJr0CjTRUFXTygeLegRfNd%2B8L3Ni9Une%2BoOu1INjNauLgLrfmxrn1Kg67yb3ATr%2BfgzEYlBjCm8lnXXIl8r60B8Es%2BpkRWar9iFnBLH9C4sOMXA4c95yOZRzU8t19hxgoe8EhOMLkgfbYvIteZHKxMeI7g%2B941WhnfrMZPAws8hWVIKqQIchWyVq9FRSxQmXTpqsR6%2FVTO%2FDKTsx9Hhx8J8yQSRLPaurNfX42x2Ckm3wg1ycw3KL4FvCcx5QSIgIzsNyxjlj7%2BZSsSAxr92yLarmFFZkI35T%2BOEl%2F0RWU90OQOpyQm648IIjb%2Fsp30m4Mkm1MPiLph7A2JzWIjm0TjnQhXlmNzecAfuenMOH%2BidCo%2FIIBcDXyfaZqMFX7kqJh0G74Dd%2Fyh4ElAdASyXJ5z2cgeDB9n7fPZk6yfqPReby5rqXLP087ziiYmVMy9xGD5LGPQs0OVaqrcFQyuWRUBQiDHn0lbj0Skoo4LjrnDVNwKiF6eN1HUn8vy%2FUz8wemV9nPXk11N8xTD88eFtRc1SYFS6e5zQYfB0j7cc6qTUEAF1wfXsebnRjgungZCtpb%2BTDDDOtNPRBjqkAc6A8sA%2FiTpOT7TEXOvwcTnk07nfRajFqLbWoy9P995vd1%2FRsFq8TlZ2junvNof6CK%2BbD2dI1sRjxpLupbpkNbMFdOM6aicR%2Fk6aVPYYNsGkuC%2FGfSRBryENzT9%2B0wH8L6SqlbaAgTXxAnkduXk9g1RNoTX4VVvuhbjSPOn5r1WlzCDvX4y8W99k0oG5D75QHgO%2Fl3c1CjsicmLkGOvW28kvHMgr&X-Amz-Signature=32f14671d73d7fac062c166f29747ea5a976cf1d4aa20e0f39fdfdb1f4032ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

