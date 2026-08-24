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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6HSQI7%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T063115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCsHiunbId5N05fEEmVLpRBcLsvLiFsTJT8YfHtEbkLPwIhAIKnY8PByAtqXMMCrAaxDSK9EOiBf0i6uOz2Gh1wa2eWKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4aj04lx64CRJEe8Uq3AOZJjiagixCF3%2FZBiFOM3Dr6v4Mzhqz2Jrw8PRBJAa4Csh0So0wBlnE8l0M3%2BrxPUBcTB5SzfDj0l28drZtKGkKwT1HlSXO1xCjrr9j3vYlWnnKsCS6S5XS1LFDSYqZE8lsBZCy8F71C8Z6JHNk2x7kGHi8js6VWZedMF%2FejxN2KQUQQpUgOdmi0JQVoJSVFbHNzaPgXkXgtMCnEcOQAbCqSSTmhqdWlc1ZForWTP0i%2FDOmeZvZUDJC9MV5AjfXT7fy6VGvvLFBe7QB%2B0XZwdlGJe04XuqRTHL5mNh05WcCLI4MgeshQYMo%2BkP41qqoj2Ugjfu%2BujXuKzEOosoBV1HGRDG73evryhcqPLEiNA4JYRIkSeXtDyIWAQVAR%2BEIcuW9bwzgA%2BxVZji0Wp%2FcmZkEdvmAlUAiMKmrsVhh1%2B3yBTF2oqYPxPFk6YyXZh2oddwPs7BMxFA21PpKaIS3bWKyLRN3xA56FBrrY8oDIJN5gEfG91hnv6RApd25pzZfQhSuvGV2idGj88xnZjjZzbuMspTou7H8kZUWALXUkWuolixJZY%2FBp1b2g3GCcIFmAmiVkEh881WPeZFbU7GYQI85X7v6ZgfRVJ6GK0d0PbxgXvewsmbHh7QwWmeOnjDcoK%2FUBjqkAS63ZclVjEgrt%2BdYOrcpf94zfOD9A6CLHwEMmg9PqK0yEmDCU3PuaRr6PQGMSkTMROA%2FYEXAgzXf7gNFnT2GO%2FUkSLwG9%2B9Y83tOUU2oOEoCsILQLYzZs%2B5dOmMvu8L0LXLJGUaOEUDJZCwqS1qvPztP5oT5c4lCKzl63e95go0xec%2BMtvWGzjcdrX%2FU95kngAFCeQI%2Fyx9YV8FnG7ZPS73ek9Q2&X-Amz-Signature=2d6d7f2147c38b795824fd2ffb2b2b69fc74985e9a20df33592e1b97a4daa0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

