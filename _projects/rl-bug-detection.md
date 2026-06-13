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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMZVJBAO%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGjBLTgcqu3TXBLqEQ8b1VFaws3LPlKlttzf9v1h%2FJKXAiEA3VTYHkXmqVguBWY0giWc9awO0kGXigIKfTMi1IJJrHUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAVxIMZz6bCBhv6MOCrcAzwHQmjcz9Lbi3XgEzrGPC6oSctl4nGQaqPstYgv4kbVY57ckYsJOyr%2BdVet%2FmYOQ5eCRkoq1d%2Fa12jF4V64Q%2BqwhTHdVTqwrLdBm7n9gJ0%2B9DgRxYzL%2FSu8SyQXscsH1KUyKqAWnZwvqhXloFEqnu7mQQ8Behp1iNtiUOrPsJTK5HekITPoJPNShAkC0cgEa3rDhnHdRRkBPgoLtHv6uk4qN1ZLu1r0COBIrZPI7kw8%2BnbScYJaAXpH4AyE%2B1vDYZjrH9LY%2Bh7dhYNNb1%2FXAMPhr2SEQZuJUKy6tLNj%2Bo4xvgdMOFECSb3HL5RDY7yfEPEC9MSU%2FIzUSj1j4sjS1eDnWXNb2fdbuLqoknTTesAQ0luPs8mL8rR7X1l6tQywHZNeyktbyPSuHCCccbVBHCaFynJZrt5JjWVvuvl5meHm7Pw%2BDkElFfsxq3f0EH9jHofKlT9aqr0mUamXOJvPA%2F0WCfmRot%2BeQrucdc%2Bt8DX2W3DYqFXUADTE%2B9WJgiZSbtgAJG6B1jsAaO%2Fm0EgNIsFqM11JGXnpGHNCveI1W5UaKzs4e3kH39JfNozUgxE%2FkiKu5wq11o%2B8F%2ByaPUr45itFDbuIa7i%2BSnVsV1BSwFUl3nWpjv4j3Q8pkXJdMKuwtNEGOqUBSbyvzzsRDxw2rxL4qzlanCMUFpa6wcqKniafRoYBPDTtPlS3BHn36UHzZG8QZ5m6tm6jn9BDmwqK7%2BR6lrarvKdu6zO%2FjdaZ2vVvxa1aXghPgvayg1vvHIxdS435KxaLoE87ONVWVfGMZ10jXUg%2FprH8TBrntSMmKMQl8OS6YshEjhX1clekO%2FNPJiaTD1UtoejK9ofR4aHhiKDZX9eNXPm89nMv&X-Amz-Signature=bc9b61d7a2123c32bcb0808664f1d793fdbb90aa100e977a2458d30831acbcde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

