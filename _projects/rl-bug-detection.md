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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DSYHOIK%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T221045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmuemHLvkUthwt0drcKnuFMrtoHXVJeKxmp30WHBqewAiEAwMRAWGWIEvfTfMV6XOoTLk3FFi%2BvmwroEArUIyNVQpwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB92DOX2hRYbzW5DMCrcA9xM9NwA8Ri6vfeYHYHqWiICNoEiUqE%2B0MiOm%2FutwQXbAR0TmzBYkwmbU%2FMrhOkAXY5Vb5bNvDn0cIZv9QCRaRAsOTuJ%2Fu9P0xxOY6YL3xowPyw%2FBtOAKk9rJWJA3uaGO2rXq%2FKBMvUUufgBJu61UxG5GxY3law6pvXIfJ1TuX0edqxUfNxGnLp%2B4cxiyRWjtMeT3T%2FsZmUonLtcr6d%2B85r4tqRW4UczFOJoFP8%2Beh7F%2Byb24AXoNDN1u1TawPf011FnQIED4hDWdrAJyOFsDYPsLgPOjYGHfEQLfjWor%2BwIO6NtZ7IszTCXdP6BRDroi4hwydOpkJaRole8z6KRQmSQyBoOrS4NsAqmjdOfThPr7Vwf7Sj1SdJVvX%2B%2FxaunTa44Jo6bl7idQV45SO6twWuV9qxszeq55MdHwJQ1zoDL7qektOBMer7ghnGJl5xQZ8d8URavvYzvqnMRwzR9wMCTkZ5%2F2VrQ6kmfC2PMQQSXn4T14yNe%2Bj8Zw4U2oUXaQaIJ3KYJQjjEq%2F4C%2BvkVf2pes4rXbyFGcO%2FupsqbIdfS8Lz5%2FJ4B9ZjIhDBBhKNKN8qGRW9Mncmq01wcJpDj7vGeMUd7UQn3%2FOZib%2B%2B1SFpp71GWGwWg5FeZ2FyhMOmFo9QGOqUBy2I83zZDQeNKoT8FKIBrs4eMnvMZVdUkcLnbNEZPRJpZxnOetQRv9NfdUK2aXV6RqWa8IZugXQ9vNhVFdbpN4FRLtgq29PlyDnPKkgwkxS%2FDSB%2FMrmakNZwfapR9Xe7oCJtY%2BdYtci2u06TxgUT6SEYkIY9ZIkv4wax8%2BMziDZ3t8hRc4EWw5BQ%2F8MBGcoE2yZPTSGsylVxhcibOHp9wf7dLN1k3&X-Amz-Signature=541af39f169d7825135a850003e22a13cb782d2a0604e9f0f756f89be81337a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

