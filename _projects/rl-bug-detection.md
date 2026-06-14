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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGIUL3F5%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T104205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIByOmMjfVrC9UqznYdOe8CdC0FhnoJNlRogFUW0UXc%2FVAiBmPEdQIpzVy4hKdTeMgrcNhf%2FzObrYSoPXlLVOn5ETyCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMDyCEwv5UH7WQqFS4KtwDRiJPu3mFMJiWQD%2BevBGMRrr8oaCyMND84uMAKy8FUkXXmQxrwH088%2FrQuQSgPp9%2BQjuV2M%2FqA5mm5pcE3Gy165wZwZhMcd5KkOQK96pmCqhmu8fxN8MrBD8C%2Fpm%2F0L7if1iEpu%2BRJnxZD%2B6hq3%2F8dei4ESBd0sRC7XGG5RwKaegw2rBsSv9dz%2F9IFLNT%2Fb1QcuprwT0FzOX0pYdj39Y41clNLgID21itSYR0ncbwkgTdShf398fFAov7HGOip2XLEJB27A9Er4%2FgY9Uc%2FzHemKqDO7I3tjI8rMa%2BAsEHKWGX55kh6aZZhZxwMr2JSvrDePIR42FdN55Np3Trfi4EU5pmJHnW01Rkcq1qogty9wNJS4SMSvzdzqIMJYK5kFtQGh%2BMNOuamWm0NART0ynq%2BddGqdqlsxzPkBGpfaUltweTiDFZwBViDXMEMVb6YNVMSJA938ebINGLu4ZyY3xmtfcFEtTGE7XL0wfW%2BUeCuCo9NmeIqMKeiEsQo0cbbfWieEQ3%2FOBpvZQERv4aLz%2FU7Z7jVhrTWyW9Rg5puKPvkmmDww5k6C7RvvTWnb0ccwzXre8LfaNgKxqy4UGiCLE%2FwH1j9WYVHx1Opo4ExEqRoR%2Bf2ljn6HXL97FHGuIw0Zu50QY6pgH%2FRR6RVr2ngo2HPnSs3L6JGKw0wM%2FP752LzTASKizCJSTFcng912EHMISk0e2uf75gIXHQf7ADYXCbEG8A5n13JdDWkNmnpOB0KARpqEhNvpNqQrAO6PqEQRvEwvv9Deg87LudIZ5K0pVZVTaKNY8YuJXQ9xnzJFvWPhz6RLXB8GVsHtVKAhbB4Rq4L7YRmF%2F%2FKRxGw1%2FU5GGVDfpf1BFw5%2BLlC9xa&X-Amz-Signature=bdd500ee77f986d883942a179b05f6d4cdb3465af616ec44bd99440e9eb287b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

