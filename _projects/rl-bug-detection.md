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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYKSTBD%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T202714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDnBNTsOHL9wviwmMF%2BFng6n7BWyOJc6n7VCw0uI%2B4ZEAIhANot8gAhVwgghdJQGVewdcFKqzw0WGDrsIHxd4gsJHEtKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrIb4cyMP0vlAFMiwq3ANYBZgD2bSfya5SwQhSFE9SrDLa%2FivaCMLGdIdW%2BE%2FLqsN62cH38Z9nAaLE%2BftKosSr%2BU%2FoqYpr%2FryQNCtiz2Y07%2F%2FwKwDdSfn7RjRmOvqqWdqs5LnQxigMpgALm6ZQFnnTUoN%2Fl7GClvK9TnIU8wUkYDbBVB2AbssL%2F6Dhi8icNujYmXKdQS09qPndime7vu1O3fRaiG79wOslOP0qc03BMb9GFc%2Fbtsw60C7YffVO2YP%2BLw8%2B0WyBy9vDFRgh4tPZXVycHBNgryMt2z%2Fj5dqfWQuj1PjKHOkXcwmpGgMLeC398Ig73GLzfFeeonoGhafdQ0HjkFZAozYc02ofpV0L39AJhU0q97sJljy5Tn%2B%2F8Y0gs0nJ%2FUA%2Bo%2Fv9WnTuxSr2DLmcV9Lw2bT%2B0dKAiBUF6kjfRZudIM2yDp%2FjE9K%2BAEoDLCs2kp%2Bg4lpL36Nr3o3Di5si2CfnIaegB05bRbsrRoMcN7z0uSatYw8jc7%2B3tbC9DSH4DI76YloYsyCioCCslMm2s8lMccqKEqEeOzl9H3UlxDlA40Q4Vzj63YHtWpw%2BeGUdq3%2BSPFL1Lxu36Tqz97kfeKU1bmko8fImFO%2FMvqRa9vPt%2Flda5992LZclbjkCrWVa2WT%2F2I27BzDxoPjTBjqkAYoVKM8vTXztyPxnNuXYJN0Qm3lLRzU%2B9nNo1zadr7jZVSr7C4XPxXxn5u2TqqBxNrLYoJPDvaGAmPg%2F0i1BB9QRDAk3RO0ZQW%2FuJe2klizPX03f8fcIRukcVoH5dDAQcAxd1%2BIpcTYwu%2F8KG5jlCO8uViMHw7tmc4XgXR%2BXeGwFHvxbY84%2BxJPm%2BGy5j7giQjwIy57rso7hJJaQfm%2FSIW81kLRD&X-Amz-Signature=d7561898f4bc90119edaed2f23521b2ee496da204616b8d4a6db12d7146e1bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

