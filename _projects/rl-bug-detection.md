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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDXND24F%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T011742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtkZI2%2F4bhLUtNvXO2%2FhZMo%2BBhERxsrKchH6XHk7nsdAiAE8W2aSCgaDmijgmaysX7QoKbgaPPftusKQBSBy0Mhiir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMpadSdGL%2FGBp1gw%2BzKtwDUnyYY14LetvnmCe4D98L00vDDrJ52nwfz8jDrf3d5N%2FeDVoZfxmsRVlJd90d5I0Mfr2QKizP0%2BSgJ6baQ3%2BEXxr20vuxMiX65rbxvfVNmv3ZP87HRu2ys%2BHUqdtLOsvGN4gWIdfxCSU1i%2Bzbb1X25UvyHq0VnNsefVZ1k4efYdxjEHr3K%2FRgFh8XvT2g6o9cwSyLc6mDA5g1DbJCmDFficGFLuEA0cpMw%2Bpz7azTO31WVH%2F8Kc0Mhwit3PUrgmSD0ppEYMg4oOe72nJTSRm30Dz1vpR55SrbhdjUrfiQw4OzWH6VAQI71kBWqRFFGvwOrgWy13fi9OHJk3i%2FKp%2BTYd1MA36Cc6UTOcGlvSrB4sm3n6k%2BA74tE4UvN%2BHkzHHoKq9VFCCa%2FFM1S1VgYk38DjhqsKQlHLmcyg3WfTcroMt7gPwzVxX0ofpO1HQL8fTkcDfkEFxIt%2BLePMEpzXQIWfzjhl8yxyn7AvPYcO4aKkh%2BRZxyqPMUjgls%2BPS9up%2BDYACVFV3TRUEK00C9xNZRBYr4TnNTQMFlN6Pw5PG4Gc08POsIQftbnBWhi9pTiieyr2qbBdO6WlZK1kwiN10YJsQmwzZejUfLRh0CItN0gO74piPtSeiwqELB%2Bjow2dWf0wY6pgHbh6rcXQvo681CYbXt%2B3K%2B1KqKYtnqQlx0dbV0K6J6k2EkW6MRhVnUPv3ll5rq3YNmyVA6nJMa0sT9rQrtOTNjFCa%2F9vLBQa%2BuD17eznx2t1g6EACgAukH35iiW3aNh3AKz%2F3lc4COFCgriDG%2BRishjiPSuWO43Wu1l6hs2HVXetxU2hcL%2FqDQ3NlQqeL8bJf%2FGL1CwxP8luG0dipXU5LdXeXIBTcB&X-Amz-Signature=44a70e5b274aaea91fd1c3efedaf4fcdc9fa8bd56bd1af04ea606bc3cec82164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

