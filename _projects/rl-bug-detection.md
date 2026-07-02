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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZICBYLR%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T235514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDZYKMWAsJUQu%2FmuFJWXWgtW%2FwynP8tc5dVkrcFDv8dbQIhAOtecHeb6Vix%2FnwkxAfHzbRD9lNRWf0AOR79Lf01Gm52Kv8DCAAQABoMNjM3NDIzMTgzODA1Igy0YM0l0WStYIzztaIq3AMZuQpFwq7QbE5a4g5sftW5bdGE1ko1BJ1FhSgeFmpRaN%2B61BCnfHJ7GM8ck4dHJO2rWL%2BXupC1mCVrUbQyOa2GUbjWs4vGyd%2FSUf6NTdF7k2nrXN5K%2FPnNyQ4lHxXoMlXS2zIafzrHnoFb0xkPK1QV7U%2B7mUiHP8pX5Eh8RulgLJjkwmW6nrSzzmhhkqwrTb7r6XbxIQH186IglbAo3NY4xVoHxdCrAblKuduK49LnBHldDYQXPicN7DtiglZXV7yPg00NPsNl2Kj6qJhrqV40LMV7buuCYXahU32T987iWUVUGDIfuT3hqbfg1uyL19iP4eUBSgd1sSgIZ8203rul9KbAVG2d9vr%2FMD2VuRZ8zrat4puPLrKTHAazKZiP5HGghjuRC5vGno94PxPkSjms4%2BiQS6VyWkbDmXixr82drZ7vdnWHZn9Aqp3P2Y4JEqcaFjVuPTK%2BxZww4psLa4a2vFeGd0R6zaTgqt13G6Hbhyb06FYHX4ffCxushulQ7Za2vctdxjg9zthCiOCHaGF%2BvAVp1FsThA9JvtGMafRa9AR0Ag6lNUUp9RzfwfBO7wKDUVbqJPL1LLurpPFD8HdstUmVf4DYxFx5tBrUo%2Fe2WM6wBRVbNt8c32wesDCU0ZvSBjqkAU1sxcL3pkloM7Ymai9ozRvk6av3I%2FFGlB0PkjO%2BA2beCNHwnei0J%2F%2BDUu54r4NSUiEKhETrEOYWvhLUFlFrI6BeWryl2tilaNjKA6nnm0bRQ5JiW4szQjW%2B73s5J7EDOxnQtfoqSrfY%2BPwL7vulNLRMzznDcUUSI2kD2eV0aS1Egp0G%2B4I1JGDN0x%2BNAoSpNaouJlp3lvT25BCJfDLMz6QybJx3&X-Amz-Signature=464683318a1a1760334bb012d3fe637242ccb0b863d90d8e81654f32674244bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

