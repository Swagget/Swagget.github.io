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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J3HHNQN%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T225057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQSblsz7nvME6YVBx87QcunUgvbN8Bp3Oe96042qqyKgIgSfiGGE1rZNttaFZdeE79sVnMFI%2FNGD%2BObX38ErVZTiIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbpwCK8WLbIcp3tSircA%2FDk6yFJAU9B02zVIesFaFI9ujkRCAlT%2FzLlxDME5hl8TRPbv8bwVAm0ZWOBDuFkbccorXM9ZZ%2FuXbbv6FFxBir9owYozm63qJ7YpqrErc6ofZYp4Wq4DmDHdeh81iDBkGn3W6XUOylsTfzR%2F9BBcWBwrkIasaWFRRU6UaasoBjlLdy6QpmCTKX%2FXx0I0gIyqkrfeQ2mSDoyMHdxEf3O068PHZDylSSflmWoCxSESPJzPYfb%2BTDUNKuLTXoXGXqyzCcmWEBqGj9WvhRzSFXVUXncLiyOYuiQXftqNfXKXnW%2FkP2LPXpychPtCglV%2FsBHuECUfZuC1w5NUava13n2KeumeNtOyxMjZdi31rFRr9jRc1B712GEFCGhG3oVxTHOqabLf9hV6kgqVvhIRPXu0nWOfftm9m6gnYHJomEOgm0bknON7f1s%2BZMeGJJ8mLZ08haj4zcnwfjl8vFx3pMgM%2F%2BeRRrFGl5ZHe9AkTj6Mzi%2BwCV59PF6bldZCyFUvYLY9JOo8btJLuEkW0BYWiKoo5BhMziBAJuuJBvpLRPQe1J5HWWtgB2M1Tf8VoXGZs8P%2BZnVXUFhRGAKGGqX3tmBeQW%2FGICz%2Fi7cEH3ck7X7gGHv9CTikN5vXQDSmWKSMMKIgdIGOqUBoak1zTeRB52ne86EBi98mw1iirEDilTxP5cpevFykz46w7tQAICskiy3Tf0Fta5wEbxB98xIVNm5dK1p5n%2BjJO%2BmtmnvUXHdJhwFzokkPvjF%2B%2BsCdw1rm5b85pzQkDIfpQGb5bsmZJngFlE5%2BpY0NkA9WLAZY5falhaL43DFYl8%2FFz0lYtHxDLhtR6K5ZnAJwTGJLrhrD3AMWbNeddU1B6UPi0Kc&X-Amz-Signature=348926632c5caff42adc27f883f83f30123c804c3b4c472b2d81f42f48e7fe85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

