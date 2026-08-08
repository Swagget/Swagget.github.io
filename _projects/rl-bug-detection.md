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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3KXMSP%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T133611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdOU3z8ENxIF0nJFa%2FT%2F3Uq3HjVTyAXeBfLEhddANMFAiBUtYO25LSQDM9f6dUn6G2zZq8k%2Fo2iZOcTDm3SrHPW2Cr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMjz31Cu6uj4MabA3VKtwDikTL1D3tfOmvCSfDF5FvFiEceWLd5G6hiQfrKiT1b1CJy1pgUqGvuR7DHzzWjtnU3hlrPxV875u%2FjlyIMygCi5Ox32O7fkeD1T7KizvHaafre9B1PNlf1eThrsFlSjnntLPO5BNOoGfkpwx4obHJMXINiCGHPyBUtJxJdnwa4xeF%2B%2FrRWGcA%2FoAbAm7jdWetDF4J9DlNIAMYwR2VrvcuwOb6Kd%2B7AdW%2B0wSATDJy%2FgVc0MVtz%2Fdc5UVxRvaOwQZk9e6N87UAIMWmd1y%2Bie0CcVcA5G0UPdwli0OSHBoAWFhIg6lKlquyuuqYpvdOPB%2FQyZw2kPgGkjlAIL4tl3%2BCT0qj4j3O%2Fk%2FToWWU90eIOI8FiHnlYOS3%2BtDhI3DyP5yHIn3xe2Y%2F4xDsqZDtOr8wl9vsIYnIEx9QXqEmT3%2B12noHCO%2FXOMNdNs0ljgfuQm9M4hPTrKk1ufP1T295NeRGv42TsBU%2Bvwbp1%2BJIFujDZkkK5TEExGaDFkMzd1lCzKJ%2Fmr0%2BgGuh1Od7BbDOYoICjkmEhH1rmjEcXQvN3lFqR2JqVjQE7H%2FsVJn2vVjyknAz9NL8MYQsDgih2rTUoxnFcNWUEzNv7f0lJtNrH0LmGoIhL1wJSc164SSHtVMwkNXb0wY6pgGei2ZxERv65kkNLknNY0KSpcXXJulC83%2FsjDWDL3bhX71YPMog6RS%2FH2wMLsI0p0wYM%2BXDfHaG0VoNd6Y1d3db1cjtEg0Cj%2Bd0w8I6qZyd%2BRRX3BDFnbKe22cvecJ%2B4%2FTnKCFBNL041VKLUgB88wFBO2lKt2LHxid%2BN2g6d9RmxUyJPTCSeTjvGRNM0AFyaG1PQ8Tji0kHI4aEkhuXMpokIzGzkUjx&X-Amz-Signature=fb09e20a1c4bbd4b2a81a4ff85a26463e7c0e9924888d27d86aabbca710fa24f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

