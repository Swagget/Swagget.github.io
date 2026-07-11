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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YDZIFZY%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T184055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIDQlirJso3JlHx3D5fZ8wt6hhwUC8A6ZfNyVGtunR6%2B5AiEA%2FVqD82VyejYErKf0FuQeS3nQYqXXt8ilvXX%2F5TxF%2Fd0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkIeKkwaJIW9Kq8wyrcAyQ8HQAtCCP76w%2B7qlu91oHrBggElecBPsbY6%2BkazDKdHnlzB0wsiFGhGR7UXl1XjluoSC1axH6ldAYSqLoV7pZFuALtJquM9S3xu%2Ba%2Bakip8YjXIlql5huaUJpZJ49NrVubnyiUzDvLq8v120OpRTgrfy%2BRBhKoJZPq1WvuCUh3vw7M99zB6e4HGxXz1oKiCrYQ94W5p%2F3W5fhpYYR8yhB9bi1YwlirSAuLlGaQigZecjE3fY5No6YncCtfVzUTOQZdSKCKtW%2FeBhXGeOC%2Bu3uGa3DippiSWS0MIbFLGJQ7%2BJNzMYVtaBeT3ICEh0OjQb2vKlP8P%2FDCbLFJ%2Bh3VTfkGDt9OX5hP0llOCnALQvnsTlq8t4tIsTB7jl%2Bp9HyUQRY48Ah3fqNPrnNSfV8J%2FK57NyyyE18UgoXseg69a5j%2Fn3eMc7RDhiauE2bRV8uPnQOvKby6mAZidMYyAIlZeQEWRFaMOWr2Vb76TsRfGUAiye5hKfMPTBNQb5SRU%2BUG%2FecRbxpdEA3VB9ocnCnNuWTUSHN9YYZ2VXqFrGOMBOUTBfjPZvrSltLDSsr6s9AIIk7wjooEf1U0TYNJhUoRETdAG%2FdqPAwxV1RIplntyPfImn%2BixdOlqmug8ll8MOLCydIGOqUB9JyGP8yXcjKi9BMcuv8wAaWlIxNXtGT2rpWMP38RGPlTn5KICLoLCdLYsOOBm8Gi4Co4x46Xu5TaRn83jXDLWDDBC1RjFEiaX1pzWvVijRoRHVcpgmG1qx4E9VEU8L8dnpCdqxhfARnmdrydrBbGOeBY2Ec8baYnrPIdbyJjIfDjWKMfj8Rcoi3Lj4ZFDUMqH8pP9aRf0xyj1yAVXFR2domHgGGK&X-Amz-Signature=71ae0691b59f1b97276864ee43f7d9be9b0d14cb794b2422b379a69f043caaf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

