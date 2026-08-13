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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UY67KYH%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T154521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBT3jxwC4F3f0Gqn6vRBiVG%2BECNfXMaQFu3ICWzNocVOAiEA30ByXD%2Bvbqq5Gp1AmzJ5bilulmV9WQ0z7I9YLwvTBa0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtPn%2BBYIPX%2BvQurICrcA6KXqz7W3hntwKfnskpitza%2F8cjjaKfuJDEYJJ5v3QSjCCd7Q06Y7LdMuJYEDJaBBhnKEuwQQ5EraSefVpPcr2%2FXViFUeBOpN3H9w%2BjDBOdlLO2kQvQlWE8F0dkZxtzdMgK4y0nsYMeLNVPgTLSzaG548RmLk6aANSFzvq3ZK%2FqwIltOueP1STglSiJNh2%2Fcr5WiDWXs4%2Ff1LhSv9CPCpKNvZgquw%2Fy%2BvzZJZEL4Pwpj0CtUsxaK3N%2Bp3hwa4yQOVHwkwVUBrVDgqfFWA6vo5LOn88j9Jrf%2FISIilQ4rKUqSRZjvS%2BODreD7IxgtIGREPTZjCMiROk53eIo0DPgujbb%2BdI%2FfmZo7Xja7l1x5MnaGpkAtVCEvH7mM1AkWnaNqOmFKuh90ErNuh%2FGEyuci%2B2D02URScZ%2F0lzxxn0oDIW9Xr2xA24k4w1PhWwu%2BImi7YFUzkYx%2F%2BGJv%2FBlDQtPVodotMXKehtY7J2CQggELOov40q4GJ1eszqHfR%2F5v%2F%2Fa3QJb69zbLwaMJvmwM9%2FIx%2FMp1TaA9RwEVVVyvSC5qzc0VBKaVn3V12ud5aesCuNX%2F2YLgv2o2NuTdqD2xvDeo1NwsiGg40215%2BfSzHJaxOzUXxhUfAmIrQCjK%2FeU3MK%2Ba99MGOqUBxwEjjr7RXGwLro8VMQ7luNVTsQVywRCd2pG3JSyTHtYnNTg9uL%2BAg%2BQ9uzSEuYw0sv0oMAI2hHpM96oWpW0GbhtBz2GgmWfmVkwYVCniNYEetORPuYkudM7jdlqDT3eudtxOPLI8ztJsvkcYgULWYbalvVxvZAu7yyv9XzZXdMjxK8REKrR5VHd7eR0wT3jLdx%2B9dzGwtE15%2B6DMmTvnbpB%2BJL%2FH&X-Amz-Signature=dd66f91400292bea82d68172b758ba4fdfb7449dbbc088bd8438e94cba8c97cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

