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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IMZTHSY%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T002402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICHUTTD1YmdSentiyawr2cvgK%2FHPsCyABAA%2FR6ErodldAiBQMDRG0rhismITGRyjT%2FNpomLUAkCt6ZvSZZmt1stx3yr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM7EyzOHhqxzKomL7lKtwDDaLc2NOFK4zdSeLDG13vfMnXGX9c4JF6nx6D2%2FDGtNstqU0jodECspGal8aXklaJhrpu%2BvgDkjRdULv6RtaT5kRj9ZuDG4zKy5QtT8tzZ2DOM26FN%2BePFj8Kr4dcpjvzhl6xCsxmOhykVtcuWRN4jemzmohSmkfsxgoIDSxSB%2BCdueALaeIYCAO%2FY%2F8P0nb51WYFouCSGN9GhbJDyfFAcci8w8YwUwunKdHRvEEKIU%2FObFwRa1BB2Lhcn77U48Prw%2FwEm0E0O7%2F0bx9XnJROl%2FbyIH2FhfNKdDHGDucMc2uQjT4JEnXM3HMTtp%2BA8Fi0DOHvSCOA4QfMz01CLhMavGyy614bfShmtBEuQ8qa3uRP%2FC3qeZzUHHoA93zRwxhE%2FSg291plul%2BAqkyUuj46ODOexyo4pJwPjRSA8UoMZYgwLFgV5zdvBLEC%2B46YodtANZyNlTbz00NjZrrzmzIzX56JogdQ4%2BP4zg%2BxBtoaeaMyvL%2FEdrOzdqfnTluG%2Bk2rLw0SELanKmU%2FKfuyYiTr%2B1k0BH1fScFPLc1cAtwe29FBdLbacPH0nWdT8sspDEFNoLCCgBOPIJWyweMlP8FR51cNiI2%2FlCktfFD5Sd7htHlVt2%2BouOq5XU59%2B4gwjOGC0QY6pgHrg56wTUM6qy4TB5E6G09pnfEMVBIt%2BEWlKj81%2FrJ95poCTUeptcen4ia%2B1eFqLyv3neqhR0D50YOE0X64tkoKGLaewHtesHm8WsA7c4vs%2BifYY4IqMPgPsfQZ2NePBQzdbR5%2BHCUlkWFt7Fi%2F5olnBULqNurSVCimAzGY5Eo8T5QGcsB808E10MNjfhu03RhGo25iFS0cCwh%2Bp1QNAYv5gegpsOlE&X-Amz-Signature=0dc257312421f3e1ef6be8d8d4b3744bd85610f0b3275d8165e078bdc1c5fff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

