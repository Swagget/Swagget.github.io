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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A5QBLUG%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T125116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCN6PT6%2FeIg%2FwjvmiUX7g7lg%2FChoLFde3Ls2E1%2B39tLAAIhAPM4PI6ZR5h7rCdWRn1cLyBvAHCZC8O%2FLdE%2BEKWkGoj1KogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F7sHyfbqc2KpghdIq3ANmE4vsJOWsU2QtQhrL1cBX9pGv%2FnvWNsIzXaG%2F3y8W6rOayROlP8qxaqfOdH7%2BZixKYY%2BxNUINlGbK9Xf5RZ6fKisyEp4opOoK2pbCJP1FuF0lSw07gd66Gx9W%2BgWeAOUix3k5BbblqA%2BVrAIDXtjXtfQR97NySfyWhfUEJ9cUwcQo7li57pzodBeRQPi8WOmx7Y4G87vK7FqCAJyTopwxpxvkyTqFER89kAosDYhMwXlGQXs4VSVZ%2FKXBlDmeGMiY7NIwD9hbu9pu4cJ7TLWDykk8CnHeF7dUZtSeOu17l4%2BCk%2BTbYed8lxwwF0TRSXMlNq2J%2FE1q0GIVc2%2BEsEhDxzklehXO2MvoXJqJhZ9q2x73upEP52jhg1sa2z%2F7bY5G5yWgSt8FAoTpOv%2BnJWEB3k60OVRe82lduMJ7DOdKsy7L0fr%2Blyb5IK37d48XT3IVIborfhXfumLByrREUA%2FFS9HaztkqcyQIV4%2FkuPyuXpT9NfuhBc5CfNOfwYGMp4082uupknueQYAmFeJstVSyrtP9%2FnuYoSUGDNfz5KSUVQXmy7Us3VT3RHnuPs4CGnqRLBMVUw%2FjcCmn5pk452RNzmbXX0H%2BvKTwPY7ZcGx8LnIFSQjvy5Ygi%2F2ZPDD78LvTBjqkAdm9oiVB1ciePZr%2BDl%2F1sBcWHziGnmh1cIUxppgRVJUGHGP%2Fe2Uhlsn8K0gIHwwXk%2F90bs69Dr02gHeDa4oOK%2FZHHU81PzEvRRNkle77jS5NiH5U4qGTIYgsnIGIafIRgyzOrTgcs4uV25AghvMPIXS5oDC2l5Vv9zhRqhCWiLWK2Dd4WF7y56hvwR5WDeN8f9V2mq%2FW1FRDFS6ArCd%2F1A9fkLjc&X-Amz-Signature=0a54947d5e416d241f6d2aa7aa0f07c3f16a4515836496f0d3c5f4bce74ea88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

