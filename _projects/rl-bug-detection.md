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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGOSSQKZ%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T203825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSSN%2BOiyAM29%2FrAExycdhmzqRSHFL6EfrIDaG41%2FWS5AiBMqqkG%2BGwXNMt20ldAIp7oMmdx3rrtj11nP8tddVeebSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMuHEPVYjn7FJKG8JNKtwDSS8zOHiHIYxz%2FLNcQC6%2F21MreeI6E3vt71IVSdvJVqerKn%2B8oHOtdlGTzj3vjJWnH88Vr8Ucg1VxMzxWvoZyiIPGlCVUXsfjujc4fR6W%2BG25NKmcO2alWufiTSNnbCk99FFONB265zTQWyEpSXpZ6KVyschj3ybUBf%2FIppedjfRgMxpZmxNbYJnyPmaQY5kyVdM98%2BrtGyOcc4RnQfTDbYgqtwODjfEEdaJnw7VDaw0XVLsGOuGtEjUxeW0ryPl7LTrzom3WKEYt%2Ffw6gJ6eFdbTk6K7CQ7Jq5TmR66hd%2BAmBKiian%2Fm6kGBWGITUH4rbR7r5EZ8vNNVnUb2gRPFFrc9ZQNfAIxycAS7UJto4dBIzQibUBTpRhFNADQgAB9heTlQkVhuAjlro4lTit8Xt5Kqnth5TTe7vlPnoUvfxHNal3bTRsklBTbJrFYoBzPXgKrAjJARg8omoiF9c7AhXQTrd4NlvSN7zpvOK5KAknCyOmCZQD53AOLbCyYyCAHlwRb%2FnhuClNo2qHllqWfLjOr27Gwf%2Fn%2BpyOTcX5CltkdZhQ6QakzjH9JcX9rTGdbm9vxUs650CxxbLUKqv0cO%2F246YxMWCC66nMfkuFOdRW4EoDeqYDoBZUvU8cMwnMfv0gY6pgEB1SG34fNStvXKNc19%2BdFpEoolgyAukwJxNA4MasEbjpT6ylIcX81U%2BZSpyxJ%2FO7d8PQkjTZRySCM5DdP8g8i9LaJyBkS1v51n6%2FEoctQg%2FQ2T0ZK0M%2FGnPEo99a4dMCYkDeuRYr5IMzMi3JOijmv09npEMt4l8WqHgB3J4diEqlQAgMyamnA78m39mMb1uRkVm%2BVtn3yTZbRiztJ3xmJD9KbcWcSK&X-Amz-Signature=9399aac7893d75b69c99597a8ef82b8f995e0030df2d3600e0f7e74aba5b5cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

