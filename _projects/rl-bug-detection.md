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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDWQ4VIF%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T133831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQC%2FfV%2FIpuT0AbrngsFbdEzPhV6%2FWqBKXhwEh9gqhDRvaAIgbRAfsN5MZdiXNtb4BAEEEQtAm6WdOsCPE%2FR%2BfiwV%2FPcq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDJ1CB00kuXwbQOKvLCrcA5OYX3I%2FVrchZiqK2bfkrrTQBy5es%2BjB8uAikx01D1i%2Bj1ldXUdH%2BWBK%2F0p0mWYaeYzxEoa9M7BqFB5jdSzkP2yIRzrL9yissO7hIp1VrzmlcWFvo8fXILyByv25z43ED6rZb5r8ksijeU%2Fg3TVkS9l8K2VswNuSb6ZHqTfDcarp5T8R1Dnoe3sMsGzCyHuKd84yb2%2FOFAU1XkoKeN1i%2BNjak9F3lYlWEURboYORhhrl8iDNFnFFyQKl0r3z%2BByCLGBFJQ1ovQk3vHOz%2Bebzdf%2BgSUeyl2feNAqlCFM2%2FXGfR73uflX5MIQTFRUyNhQWKikitQlN7muEK%2FxanT%2Bddjh5MwEFyxOqsDTzAXaS4DYNMSsb6pf3fO1x2LoSrg2EeKAfAQSO29RlQ2tuR5BZWE52Afi33r%2B99vJycMbPPfCeWV9ysWLdRa5C9op1Qij6q1NgddUcFkVW9eD1pUz0adlOynk4a1o94zKEgul4S2ob3LKI7fc4PExz5Rkodz2ZR6XBZKcnauKjiwkhGF8fR4a4cMnPMJwBUOJqSrLjmkViEE5XYeU5puorMlK31SWIqNm9oyxnh%2B665D%2FnF8iua7PLCzHhFNcgjmK7B9SKGwZQy21jJtLWxTBiXi24MKGRttQGOqUBFGFyBYZ%2ByjzhRAgyR1uefBVqdfNhJKR1KDPNAIf%2BTTApRckKs4eDG1Tz5K85B0bhfnNf%2BmAAU8Dg8SooXSdXgeDAyhx%2BDBEwUvS1YnZIiL5gPNBeVu%2F%2BPIJXcRdgJdAb6HQDXw%2BOZaQE02BMt5fb3%2FiWjrPwQmoozhluINEPAszg%2F3mzI%2BN177xWjnexwxjoCFtYVOHt83oWGp5fn9vlRX9z9cXg&X-Amz-Signature=e51b4b5924a7003a205a21a9b6ca3b2439a354b15d07a7e590562f8434f918aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

