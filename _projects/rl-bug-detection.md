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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VOAGNCV%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T230534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0Z60BaeOUVOoeVoqB9aj6C6nV5tb006YvG1w3ZvBHzwIhAIs4%2FrDZs6c2ObiCD3u8a4zMPiEUNLhZSIKJxQGbgNqDKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyObyxNstCZVf5k9xoq3ANRU6wnQ%2FqQxRDSqrP3FIWYuSOA0fuhTBDxrgqxSb5P11POy6Ymyg6GFZzo9lAkJk2rLoOZViLjr570UtoNNC0ES210syl7ftjWUOEi9V%2BFjmuV30daL3OHL5Qg2fseuB3In%2BiKi0bGOQ2djqDdzL93NZri3s8MyB9QEMQ%2Fm4uedSC4BnYNipNblz0YukFvc2BlsZJYvqofa79Rg3uF2mrzYRgi2gTHOivRIuepCWrQ%2Bw05H14To0Kawm%2BTp2FVFZm8qTzmTYW%2FGwJeXR2t9N%2BnrezAGKEAAPOZ2g3N6OvgKdLPnLjs9IbJf1hat8XnO8wZbv3FQ0naG95ik57q%2FPmlYFxnKgIHUga%2Boch5mSy7E%2FefSq7Jgj%2BsPLUKSU5nElfOkqDeys%2Bq8dxXDCoSzoHTjfGIHdgC0SGzpF5HiQFbacPdJ1%2B%2BRuuNHqxwnSqLF3iKV%2F3LbTEQ3FzKzT25O2Ef8sNx8c%2BLx1s2oeR7u77V6NNkGVsLg1nuzp1IM%2BjaPID9jonsPvV6tbufpEO6yoxukx4P2ywqFYGe88Y2%2FzaGR8N5lp%2B8usrJ7r06L8QHfgxNFZBZk8sxJYzbAdumv0TyuxqYyWhrNN%2FoaN4EF%2FhiJEAPl%2Bh%2BScCcXyIh7zDqip3RBjqkAQeyURD%2BcivZ3F3ORQuARc0jYVct%2FlyqQ0XSCIC3NyvhBwCmB9EZY%2BWVH74q2KCqgLu%2FcdFHfoI8nbMEHYBRK8fVKr2stRKhBqQvDtsGVl67ct%2BGHWENJcy0L7iWFqCjYQ2Wu848nbzKAIt5vKZOw9%2BeE3weGLoiDo1YQZKn03LdZCKArnZTKVj5ZQh1%2FDyQsKeQSCruR%2B64aIx2TR2iNcgHtN50&X-Amz-Signature=ec7c059a7c6289823271fed99ad2e6d43c711d253a3ae512014225c0a2211404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

