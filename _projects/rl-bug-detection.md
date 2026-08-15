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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNBO2XWA%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T002958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDBXHGG0BG6d9I8WVhTWBANI83xWplz4CK1NmAZU4Ye5QIgaTVvHgaXQrtDW3P8nmKO78BMA1XE%2FL9Ulfy5JTD2fBEq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDLw%2F32CXSYcozJdMEircA1A04yAJW3Y1gma2iEcJGjM%2F0IEBEQRxuq0lJqG%2BFmx6UxnpNGUVA29PBSuudObHzeYt1qREBIW7NWMVw3Q9Z9Yq9TGWJ2BjumaN7gVQsrFAR8okgcatYzGnWDxdRZV0rhdQ9z0CA55yVHeNznIdYibXFdbGBPwyoMf%2BZ2J6rlj5ZRRj%2Bq1gOchDiFa%2BvxPPhgSiipmxWx8tYsh4K0gDll9u%2FeIApdanqzdKl%2FDIfyjE9vlRXckZOW1%2Fb71QvwBHRcFYRKux49BGQadNMpZQ8arg96p%2Fobo9XIJVmtg9R0M7LFTqC6QW%2FophhOOsNqUmfoOPJgYRxtNCCPLv7WbmzbdkvTVEfUNMP8rLdUExRHbi63AKvqT0dHo%2FXZZ45vBjEQuW7WSqH8kwvxD0ixp1M%2BJW2oJVjk9sNG%2F4mvkCbNyqCDARtAUMQopj8OWeZMcRoD9GhS8IXnaDrPd50wqj7Q89GGCDygu2LdVuY4tMK%2BW0UQFLjXI3%2B%2FD6fMOjPmcwffUA8sfK2TWwyh3yHok0P3nLX9fwpG3%2FVewoxKNPsRodosyrR%2B0%2BKUEckXGx3NMGARB%2FpMPA2FHg3T362Vms0nihpmlPg0RYC6HrMUeLHAjcdgTAudo%2BZDbCj%2BQjMKnE%2FtMGOqUBVJv7GN7dIlnJ%2FsZKFkTtzjzHmo6xtzfMoD8VZVBcLmvr9MdMVi9%2FlOiMhMv3ruo3GqkhzM1dLv93Bih4v6iQmKYSTunpNcnbZMq3QqV1ClSGnJWU6gggmTQawGnaLiQqG%2FSsblCA87qALs2weLJBFRTvz%2BiGe44EXcv26qBJXjJaS1HD9c7yM%2BuNtLcBOwSQ6bsYc5ehAJ3i7Ft0ACTLB7JizazV&X-Amz-Signature=d995617ba7e7ba1ba02f2355234fb75dab17e24b6895daf8fac1def7a39161f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

