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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QNK7UG%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T133440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkl04xj4JnFy3KI1jRw8O5VUGtY6lWb7PkmRc%2FTk5FnAiEAy7tzMXp%2FoMtGC5cdONWRLdtlHyHDXBt9sjBOf61Hp9Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDP01SvqnPXVLh552ZircA0WidrQgdObeYu1LSpW7gyRS%2FZuNeWfPT9240Fr6t%2FPbzewGXb9YKGJ0NkixOe5ta%2BdH8e%2BSkkH%2Fr28jXjzJzj24EzCpbWH9Cg9zWOMV90G9rUcwQDnfm7Xk4HL9FLnkajoLd80D8zD9%2FHtpGeYkutxv7jg2Akv10BQjHzhJi18zoZHlCS1krWbJMfSFsT3hXWTGDK2XQWA5myb8XQPyacKARbhL8A0Btbql45xHv8XrqOTCQqXT50TvMhuZufUx0q%2BgSjryKGevz4dwD6ngrT4tu2insYai5WRqdb1BZQmdBty5cASTCVFbIbY6hgB6TZ5lbcwHTki57lA6JWxigU%2F%2FWjVOV31mfdv7czxzv0qx%2BKKaap7xq1OU5PimOXEVYoXqrRe%2FJnCUmU0UxIDr0JeqE0qAHQYhTwZUEixhHEuYdSNutPf0RXHfnmtIQNSupFJnnMdpXavx9KtHhLVC7fSAkt%2BFlvIdz0%2BKkEyZg%2BSKov9XoFr7CCT5mWHTzPC4uzahS3j1xKqqcTvML3alB85Ww5cE2N6RVS%2BWgn3wkWtYG3jPIc2ABFUlAVVEsw00P0BORoZXAeTUzaM0%2BcEsCgnAwDAot2ND%2FK8nNWmlhadcCNXGFy2%2FNpO9xVz%2BMMXdltQGOqUBTeES6yx%2FmhBMMPAQ01VQu00qZfoMKcv0nk%2BAPsKtZ4OjHa9eus4tomdWnBq4%2B9jIhCTUqWHwAzHXWAxCR0xyyL0yfcn4dD2fknyhK7Ewvd76D96pJZatPVH14kFXGeD8G8ye9NBbv0yA%2BCgmWvJ7EFrarHJRqBpHLrCZXa39l3YpSEzkox%2FG6ZDKF6OSv%2B8jsRGiVM%2Fg9U7qZwdcNgtslihKOPlv&X-Amz-Signature=433c5cbd974d8dacb106c57abfd687c60d06912109c2144bd75c7ccb40887efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

