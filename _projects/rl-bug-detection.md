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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VAEQG6%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T003103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICI2Bj7WdWSV2tYWX57Evs3Hb7XzakG3C8J7ThJXVWU0AiEA2hO8XDfEseGm%2BzfkyjU0IWzSh%2FNoakVQBodVGcQsqLsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOw1FTUS4q%2FMNfWs8ircA%2BoPdU4mAMX0%2BpA3EgS4F95qCDMRo1mdx5Jox6H5dShsx1j8RfQ1alc1WIjA3VP4ndjf7bAtziDBy%2Fm%2FwQ06UvuiaasDBYXPX2Cn8ASXtQG%2BDYkW55c5AtVFNJh8TqI9kZcjcd50OO%2BXzDUPRU6%2F29YkFEpjB0I8tZDYUKC2cfwD%2FWQtN13vwBrKEhMEHPYELc6WelfR17wHWIkpyYojdJS%2Fzt%2B8gjBmuDqbc4Qj7Bo01KIfF3AFthLHgwgMzHtsA%2BVN4q1Lrxa9tf30TEh8S2VN%2FOcAvlQGwrnrCZHxPZ%2FHn1DdVw5K7dEhFS%2FHPz4Bkrs9alvOvnOAtvTvKzTQGq7gZa6dsliXBq0GSyXzWTO7pBLChQdknYAxJV1XUiEVo6SiMLkYwSddZxQypyh74mjthe0pe%2Bhl%2B3aTv%2BgEt5hUht%2Fo7L7QBJs54o4ARR3mZcFDqg0ZTYKHEHJdYbdFyw0nhc7LrHMymoHgMptEMbmSUvlo0mtXbuhs62JgJ5GqSjZ5h3VxMsLGwiGhQzgmlBfwk4j3pT4gCYqA%2B5rktWMYufOdacfs8xUY6Hn6Z31WLcC%2BqZYw1Am5pl2HmMDR4SVKA72oCdJ3BWevceYSZ4RiGdmIVwYYQVxMEHxXMO6CrtQGOqUBtoDmLZnjut%2F1oD7LbH5tJbQQcpivF9sKq5pv0Vwvv7lKcA%2FHuzqdoegT7ph8dOdacJDyFlxRyO9Ihf7anYaV6KfBOiUrd3QKGgyPRgUz5hMZutnCQX7fVSM5Imr0ri3OGK2XvCKgFzADC6k42O6f5ZHiSUEqgGXROxQwkrssg22vg1mDH92iXtL9lSDiuzwuVi4YqNguyLUdI88SxJTzcMCM1A1J&X-Amz-Signature=add5e89ace2c12cbdc6e265a43ae3153be161deb3322cd657770c143d05b4637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

