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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUOQLV5W%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T142051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIFuVztHCf5OPid9NgszMXD0t8hI%2Fi1kbIYVPkw%2BW95wxAiAu86Hu8JOOTT2Keqg6ehdWtXgA%2B1lLs478tsFWSCh2LSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDMWbTihf%2BAgj0EinKtwDl1MdDg%2ByN3Q08jKSIGUSFTq8iap12Ow8dod7Wy%2Bo6rZ9MuHBhZufm4QfJlEl1KMqTpJii5grEslv4FcxG6fOByinV5JqwvkGmZzGoIoaVPJP8emoaMVog%2FojfznY%2BP32xL%2BwyTH54Yi1a3RhxNr9iBH8J7UvGbOGRpl%2B2FKPWSMVBgKpC6Egr7vyIJc%2FOGW87kllv2YiVvoCez2VVBNdG25PJYOSLXG3OQbB25ILsUyE9jpA8DneSX4h8IxLMeOMy7Zc3WkwDXNk0MHH1cWszqHX01EBPfElPdbcrPPXJOvj%2FjncjqZ%2F%2FLW5pV0q0Ds1MMA10GlWskgnG846RLPLa3xmC8TKIbMkA75hTaVfUkcs%2BeL8ugpa7T4MOWkcuFp2%2BMnMuzUG6A5UEabflL9gqI%2B%2FCKXqJSoKC%2FLWeMPNi5I1Ym%2FgNPImfN%2F71wLA8zAUvidm%2BSrKxjQFbHQMAxjpsx8B518VTfwi9R1tPI3J8jgjkrEDZRiGL9qkA18bt6XKHdGvX4qR6%2Fz8mBKDOEFEqw9%2BI0qE37bIzZZnyxBLLf%2BSOT1BwTD27P9x0JEmQ96ocZAXx4J%2FKu2sF%2FxtIQ%2FoWl1TLkcs5yKl8BbccgsqKF9p7yR5p4a%2FQRBBfGMwupC90wY6pgH4iJA5L4uWrGO3FEv3artS1mJ9dpMwBFFbDalJD%2Fe%2Fqd%2FckNVN4U4e0ol%2FGQ8FJwMxGEX6OhJWU%2FeXb8UnAJG1OigCo8%2BrXjJI1z0Cx8qRxWBXwBW4A0Gox7apti94s6QyDSXGcq0a8xsY8WiDnVHR04ANzawUzl7%2B3GQ%2FzZNomjfuQNved5uU5uYpw7Iw%2FRcytux9k38uFfvXRVFR0sJV3NhGsw5E&X-Amz-Signature=55fe7752f7d857032a0900fe210373e027d48e46916d9d5db9f2914d44012dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

