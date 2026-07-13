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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H5EODGW%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T084103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIF7N3flbelCDz8uy8L7sgoUbBaRvHHMFw1glnQA%2Fw7rGAiAoIAoXJ75Kd%2BfsPyTGMaoITWqgNcvMt%2BQVq%2FY9VaTWtSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjLG%2BMYa%2BiXgrQH3tKtwDxtdCIY4bVPfcBUOz3AMN275E1uyTri7b08Aque4ybUPsxpza1aNsxXqQtuaelb5UplVOqn0oq0Ck628KIU2mRYBM75gv05gr5RQqZadhfvUBpeqSCgBWaJ6XpACA7k6zhD1AT1hyxK2XCRYunf6pGpCgIFJBgJDLYJc3OSr2BphvdKjybtdDTbUddOFqRYSHJevBDOeX0Z8HGS33uFFI%2FObiSimlxbp93xm%2Fh%2FQcuN8SsReu8YJpG8uTomtkMz8l%2B3Iqf1CXVGGe7WdB75bj3Xf9HoXwIOD%2B3%2BpTb73Zjbngqf1XcabDslpez47YtAeU%2BybHRTpBdblKojTCXpNZyax1VtssLpilfTidrV5qq7Tpq%2FY6ZTIQ8H0OEHGppzmkjZytYLadNxs2v6VypnD5%2Fq6MhTbmzQd1R5HKqhXmm4b9%2FC%2FvW8guNs3KRzOjVoCBnQdMmp3cQls0bvrraVKej6cIwhHjt87WdjSAaKhQxuxdArPpFFNaDOKjM5JWY%2BBTjI5GxwV4%2F15hooYC9z8W3g%2B8M5MpTlKlducj5QhtJdKnDuW61nr4pXvmm1oVsFBA41X5%2FFqKq0OVJyc2RMWepx78upkP6ewzSciuBBEg9NxMSxEbxc8e7inavbIwnJzS0gY6pgH6lYwVzgm73OcU0nbrFrfAp1oBdrEgvt0l34fh84PPvXW6TZUu2rRoBX9UJZjJX8VoXwt4fVuikybr3MRkZ4XIJeWcs9%2FgvjLCdtdHIAMskEaMdharTqGu29in0hqa6gc54OKKvVGdyckFuntL0oJazWi2%2BiVagk%2BfU2HujvmLlos%2B%2FEvwWDlfcdt84Tq90F%2B8yXn2jBh%2F%2FAARy2cZSKilwrPpVG6c&X-Amz-Signature=d90d34da11def9d1c38436025f32c9f1d0eb574c576849f81d03bf3b19cfe0ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

