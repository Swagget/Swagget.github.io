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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT5KII6M%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T121337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIET9Mj%2BUqAGCcWy9wEh3KT0dD4SuACx8y4e7nHVAciMfAiBYPVmC7Z2a7cuZk%2B613VtIN8gmI75xzD%2BzvizUGT9btCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBA381BdVWr4YWglsKtwDLGxGi0DuLvYj5diy1C6pUEeAvxRa5UTU%2BHS2kr4FISYDefwoyHv0zNyx4MymG69kX9a%2BpOml9Tm%2B87FBSu%2B3dVxWupUQ6OORyz0u527cLteHoFbkKSwUahrDIb55AktSCEFvjYGhdGyFwfpzHjAfdgO1r4SMztG%2Bk4P%2F4JAxeGDsu3mxvJT%2FYEhcmntc7F0Yy1rPjL5nuRv2wSCT0fR7VndHGe18gbknw5pW2L6b7gRXi9c6vXSLmujgJpuxno%2F4kuUvOM2oOKM0KjicgxOuRMUh8aYekCH4LKy5OmdWG5XdPLQOybAhRokqSedPkxTf95rk9YTWhdOvV2DHAPpXmoiPMstaP6Sav2Ij3kRgQ1yq1ADol14k0npnvXHgJs%2BsDrDncF4sttLFVOEXVA2o8busTo6Eadu5gSluWTvT1RfjnkCLjmYsPxN4xacJ5Nwh5NVG4c5OW4ylTmDM9SqwqMJOqVFbz8jV4YEDGWlh3w%2Figpg%2BA6BtmAW4i2Ga5dOdiPvkZ1DWk3s3BTPw6t05TJN9w0PkVqOfT9HEeI795HeFTBAWRTJ7uiUC7meL8eTGYKWSAMckqpQxH54uguKvGIE%2FW51CD%2BQzN8M191knj1kThltZK3I5bLcrGuMwpd%2Bl1AY6pgHqfnXqE%2FQiQmJJByqHdF0kmr90QrwFfPKa92OT85fHzrkCcgBJEOzCoF6gaRTJtdihy4diVgKPq0rcZCUcnLlS%2FrYcamSVcoTizXa3pzTNWmNTm5Wk1PRPS996FzkJlnyKJwwmnMbOKz%2FJAefkaD9Neo20sVYO2jOfRL4vyxCoWjNjrNYkqw8b%2BIaTinhD45O0r%2FLFuzvOPKMUu1PMAPRZtnnQQqTS&X-Amz-Signature=f8f1427c212e09fd14b3959cb29c2da9ae82ce4b1429f49eaec2e4c700505b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

