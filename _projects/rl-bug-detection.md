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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7P3PNQ%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T174735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDyrfsncfflfs%2BXK9o42tTpXhH%2BZ4LMeFeNdeG2a4xRCgIhALyJU%2BSjy%2FX9ZM0eEkJjviW3XI3ajexnpRsVvaq4Lh76KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWl%2F9FY3CuEU33948q3AN2ACzbKa7jKUA4M4wC4IY2pmcXRvALgnvntWS7lQ%2FZWLCD7UKejkmb8HWoelAnntDpW3jALz2zppePiWPvrAf7NGl4NnBEE0L0p4Jz7%2BeUbDYAaQ8LYxxt8n0iqYGpCu%2FzGoc45rm8yzknZ%2B92La3ghKs7vRKtGbqokov256DVT6oj2bZObDhtOrBoOYYtXGbi1IJxAP6a2Ny9G%2FE4k1rALOR1GFsK2DOoqCK4kYV5YZ1OTEhiRsjmIph93XA1rkGr7VngEFn6SoJJbYYwkczpN1FPSUx1pyvw4scPBiMjYi7nk4SGELw5AD%2F0raVRk9G%2FkNRdMWpmMcDHRvrR0lLM64DUtD%2BG92ZSUHXiDhEh5vSfTTXIde4uNCWk3tLHXq53Xt%2Bmp3l5tlVYYXOZblla01njJEL83zKf0Nze6CZG%2Fh7MOQyCJ4Da4szcbWJphphnovdmn8eXdn67K00aaPeO19wohAP7Dvk2%2B7Vf5Dfpa0FgquPLkLMNwiPXum1I5vVRbrDCBNUzHLXvS3lw6N3bL1V%2FRl3msBziA7QxNu%2BsMIHyPwoG5%2Fm3marhfk9DXzyTOruIRlFBEytSq7onwlT0XGodbEiDelNj%2BqAd1EXBEbu5nVJN1gldoIjy8jDStPLTBjqkASc%2BQ0asvVRqlBTNBe%2FLK59PX2qXDZIdAhMoCfDvJxxtr62DwYHU6WKolMmNEG6GlsedzCC8Vad5%2BttxTnGL1J5%2Fmx7Gfn%2FErql8CucBW6c5FeifD6rrioySsueBetQGGjow5QGTkoC81oW6pWc2uoRcny7w3w%2BNLuNyyUhKhvlN24u%2F0PeSihG%2B96sCa4575xlXEdRFSCylQqxTrYvZkEHPEugn&X-Amz-Signature=a3a372a57e36a8a802295f4e1f40c1bbb22fe67e4c3730f10829cfd220fb173d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

