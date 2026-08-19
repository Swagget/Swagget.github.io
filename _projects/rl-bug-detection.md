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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNI2KKLU%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T191616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpoiwOhbXzPbIPeJOdsSIvhALo2qwacMvUIrpKVk1bigIhAKDzqte6fd7cteYWNCpYcd5YzsRfC5jhxyV8rwdQNZL2Kv8DCHsQABoMNjM3NDIzMTgzODA1IgxKjIkORryW71m308kq3AMtiO7L77wHSwijCxDNor2PZDx6kFft1D9a6GVTojfsLOTGdEB1davFe99cjDpHXaG2Be13fJmi7LKq5J0QTIlVVgeQZrGpwUGzhK4PptAE%2FSO1a5Q5pYXockeqdAuC6DMycEa6TAYo9ClyPjQcjzVEDIi1ylzYhArhpkpATRDOzUIUHUsuWNUKAtHQEBi2M4IN7HsuO5uhhECrcR5B9nQbYAPc2Tz4B8z3B1TLMYLknrjGcFrOWrcADMHw2yvUjIUEZ8WATIG%2FxRoip%2F8yCquWfZ1Ys1cJ7YI3LmBLgeHSyuaERfsH3lLn1Wcpk28yZkQm6UBMw%2Fw%2Fs9sUDSUw6PNsYh9%2FZvu0cN3qXuVvr4CvjnDSXkKPQoUYTxhJiIDc86td19%2Fluvjrwq3rnJCA3Kjmh%2FcltOC0QBs2UT0APM%2Br%2BjC9WRJZ8H1dhmjOXwKR5tTrRxWWniW54YERrAvxRsW6q1Y%2BSQrlH1wWfO76AlsX%2Bx605WXydAx2oah2EXMyQJx2IsZ3Z2zV5hZMP91qBflNORQ%2FRVRvt6SjWFNTCM%2FVQOqSgsEYnP5MPni2iOgl55BZSm2hjSxDFGOyXK3qbfmTg7DfA0GdfA0JBu0xTpQrdee8YQFasVqmosKkUjCl0pfUBjqkAdaQM4Z3POSzFG2oXUA2iKgeYQG%2FLm2m2gCpLdkWwvM0qaAFIKacWWeem11vwL5nUFzV4dQXAPUs4qiRak2Ot40RugBj0Z%2FGFyFEHqpq33mRVs6tpwf8cZvQ1eK%2FMzWU9TVWVwrjCXHI%2BEB6TELAWjbhs2wtaCf9ySFktro0D%2Bz79zcyIX%2BvPIUPaUdpLNuj5Wio9SwHoqJ%2Feu1qb4wXXvK%2FDEth&X-Amz-Signature=14c6ef6d008f553a9c177005e075e6c6fdc14b6a715a3063f4ea2c1e4e2dddb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

