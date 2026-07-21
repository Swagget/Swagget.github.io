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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466374ZPI6I%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1baLX1zNR4GHvZc3AfOcHILFTnknL5qAr8j9AWFNr9wIhAP9QL%2FwVYK%2Bj0l66nhBSnQic%2FB8x%2ByKd%2FL3jl%2Fo0k2bsKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBz87EqSBBbhsCt%2BYq3AMTLVLaU4WfCJb3ABDUy0MWD%2FF32hNVBa5xEM5ljlGsowgyfTFLn24frpEo%2FQnywQtGn861yj1tEQ3TPQWbslWLffRggSSVClsAoMQ4XOwkYanfCyPWN1A5JE3gvg75F2emx9NZJ7lLUNjBpOMzkdafAOHNQHEEHFRZNL1DpBGicqHPloJ1%2BsV65MddDauk7jW89bcBE180TQik9iDv4J%2F%2BPlbLIFSBRMaZZTdw2wVan6V6%2BVSJiV78HExyQ0ufe5FJpLTT8jCJhFmVJYag7MsZxx8pkLyKRYFu0yIlQ1qrD972Au9UWYhSTuhjJzEM%2FjyqxOWP0xxeYp5cDZEq%2B9XKQj%2FJnSu%2F5KUx%2FCf9unALZ2AlAHZxFZ1ye8IpUrsgOk9g89eDHHkmsRtEcoySkR6psubod0jzQ7ZxE4aQZBhaAVBQRlo97XMIVsUeQ%2FlKXdJsqaYXDTxKdtwAXiroFgOkY4qpySezl50ddM3YmL28cvUj1K7%2B5ZV5wQ5gVpWRPxKQ2R1K8xhu3y179q30seVaVbzyq0A9VHoE1o5PCm%2Fm9gUnX5C5D%2FMXCf69goVAnyNs7Ll%2F%2BniS8jGh9%2BXHUrmNEZTegNbudEbGy4XDnEVEuXaJPOOGj0aEDH5dpDCbqP7SBjqkATGrwfcix%2Fn%2BqaVhfcelViGpyGfHOQl4KtDES3UwXSOAkdt8drc6hgSjIK3peYoJLJyc9s4DfbGSbc6qu6RpojMzCIC8iD2jUzGCaCAuDDQqzMpGzfdZlzqUxAQIxNNxCt6Sjk5nj6WJRuOcOm%2BG7hYGm8Ts8Gk8z4QpjF%2FbABTy3Ee%2BRhpCusd6us66CrN%2BoX9klUcnMkv2luiHt%2F%2FrEfTLdx4s&X-Amz-Signature=3cb8768370e2f3c054175bbd77284ef21b0ffd67fbfa96fc9065237ed5cfe849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

