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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3Z5VELF%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T221057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDLjWYtRd4%2BOgavvznOfCOkVjPBuYSIEwHgtrEaUQOKWgIhAKS23VNGDFQy55RLkIi0cV2PNO%2BHq4mbDF2%2Fz2aSrZQFKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZoEkcXgMFqwvF28sq3AMeifJND%2FcA5tbdF0lhHg61X%2BvYUCgwd1Hfk%2Bw0vigVGoVXQQv8oME6yd5R8wW%2Fqn6hvK7B%2Fegk5yMTK1hyuVUSitIylHAyyxxI3bmx%2BAiP%2F6ekg9nb4HhLempbJokccxMIE7nViuP10NOsIAUpafNRenVjauScvhXlm%2BobT%2BVy3qWL4rqrSab2zxIkk77X2MFJN8XpxaUFn6pW9vOCGMFb2XEAIZPXQTGI%2F4zjYruN%2B4UlU2v3gjF%2FArXsHCIiXRZiKYxmHps2E8VVUGQztiLIVlngTXXUHTe6NuFSoSgS0z2jP25bs897sT0g7hLXvWiYUSe%2BwpK5e%2BnLauedqx%2FdKjq%2BVXlNeOp9Y%2BjLwylVK2k9hVuOoPX2wwJofNr339GaQcWgFvGOEwQ2qTKRWhaDf%2BiG9%2FTIaavTBRy8qWgxfiwqL8vvWcZ95Ygft%2B%2FbGSFbpdmOkSNk8ZRvVGvc%2BwXmAtLknjuU6UPuqK4NWlDXYuAG0oNanrhOg5bW2zo%2BRoKUluLdLvKbzf9M5gEMpmzUG5eAbXTinFx8WHkeUvWHjxzbTO4gnEV8aB6K0HmTeWADOah8EBTqk5KbRRiNPNPoEUPqR2LbsT2FpDMFUZQd0WIlJxpT02K7ZsGmMjC0gZbSBjqkAbHJ2na7jt%2FtqOMdst7svqsfXAs1KoB12%2BnfensJzfRy9ZCw8PTwMD61jDim6s4SIhUSW7ihhIgZ6R8ocfnALCkzQE8bJ1VVIPLXp6yYBWQzRYNtxZJnAC46D8WfrSuV67FmVXhIcNiha%2FEr7XtuXDLEwVabY586EkimDZYXMGIqNMMtBVJyeK0WfKINreltipzelLA8lg%2BHwc6JLaO%2FOcVUnQn%2F&X-Amz-Signature=350a08370432a03a4a6a8d756a1a33669c1d2342981dff06405d6935363bbc6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

