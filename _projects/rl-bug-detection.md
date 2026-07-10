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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653BUKRV5%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T205724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUa69FBfXRuyR9C7F5MzeJW8nrPq4%2FB%2B7kWoI0hcTDcAiAgdNDXkmUfcybM5JFf%2F12CbSq3q5ylv9V5xgGz7IJOnSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkG6WHZn2WbRvorUxKtwD8PcYGYRhr15M3gMbUDMa3UpbShFPn2L4NRpLhsEJguLNyfNP5GiPPrylTpE1hxQ9kOFsMvqnL1oBkZe5Mn7Qw18q2ZStk%2FLHSuHATqHzbjyw%2B%2F3TvsF4YjQDEj9C3m4nwCWGCV8J6DA3G4oPUXVoWq4mB%2BXvnxwhEFsjIb4DGfEvZQh9mHZQN3i%2FqANRJwwP96PIDPmUALCW337FUrIK10zLPIZX4LVok3XqEZWhcO%2F%2BTrIzW54%2BmIZ6W2OhNmCgQ7Ir35d85cahskYdVMa7PvCRAsK5SJkWhAVYfXB7U05CqlYTEC6YBpJoZ1EBAFbJasKQ0ATd4HdtFjt1luXvqY%2FUjZFTXV3IGupvP2wUo8lC%2BvpTHgzn9ueG1rwF067UUdTAJz%2FvY4DJ3VQ%2BOygEUPopkiyL3n1qaSQvB4%2F6h8RI6JnoWnktZXCkGHzo7tvem6s62REMlf0%2FRonL9kAfRiUx98KMyxTVlTtoRUdd4KrbNTCwcvJ%2FZkFzUbqNEbs4ClsxuLEV%2Bf2BokkiBH%2BGjELpp4lCwFlEsSQVkpmOnX2EC%2B3lbIW%2BbSnHHMVKKGFxgW7rYFrL6leMy8pR0URHBQtTq0XZJqZRbdifySlJdEuKEaAtQAUr%2Ba1kMiYw6ZTF0gY6pgGPjz3CkPB6qEU8ojRCbVIQ5U7Kbwy0dR%2F%2FFZUg2mpKcoRidY1KOqkKgNgIq2PR5BXFo50v%2FVp5FjVPwhOSI6UZovNDNXTYgIbTUBKMEBWNoZpA5OJiL30r4jg%2BSbJmdxtu3fRbEgCvs%2Bz%2BdbtgN2DHk%2Fwnj6alaZQ11fEGE1iAUytLY0rR%2Fxe4d%2Fud3WDhxifV3r7wZDNGfv5zmrSpK%2ByowGV09G3P&X-Amz-Signature=217cbdf8bdb4baab3990a0340baa320efdb811bc8ba846ef7af84e1120a56694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

