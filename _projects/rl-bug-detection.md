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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RC3277%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T154957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCeorYBXaiMW9w5Rq%2FwuLPv%2BHKpH6iCBO7X38d5Mr%2BICAIhAOxvpvFK6qi%2BO7MHQOLY9a6eaXBHvJaa5kpiwk5CEGQPKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuQgAm%2BpKx6%2BWAzrQq3AOdf3mdWzatBnzURyFuQpLIHjX%2FkTbmsGOo0Qc%2BG%2F4H4GoSi%2BLUXZq0nNBlsUxiTQSwT8jb%2Fujb3OC62zFkNGajF4METsV1Ll1jpisirfHJAxd6eGFd6YasBiQJWqGpz8b42eofXFHsesWOc%2FzlpbFeiKd0Eug37JXPvLgXysEsqTr3PNRHQ3gWDMkQj6FXDKip59gKPgqm%2FqAi27B38DOKMdwgV%2Foyz1Gq13Y4OwOnZtI2V%2FkZxrYxN1%2BqknfaRDzhRrQqoFs%2BoSugFOJwLjego5bEOws8UYm660K8yiKjAL6cyTYfTllUYPm2evsVHQl8ySinGeEo4o5dhlocYT6xySRA8H6Tg0Y%2FRueQvnpe4qZa3CQ%2FCiOL7Jt19LQjzcySKX2eGcCmuxqT5UbqwmGAViLhUxnn4LH0LZudKaR1%2BVREDjZe8khBy8gNa9Qye8L8Ywvt562oyA7cKmXG%2BRXh0RWpWKwIG%2BRlikR7Sqf4%2BBSf0eBVEEIn7eyrI9%2Ffwxmgb8gAzXTyL%2FhVzFtHvzSof7CRlFEfXRkw2qkaNaRoSFujAl5HpIBclYxrfINNQkB2jwvNZjXrWN1uoqUOW54h30vvcRwKgh7PdcSlzgwSQhU3ombjEUG7Y8SnKTDdjr3TBjqkATa8bZsG6hqs5CreVN1nYYhBlBVVOtdXjY7oNOBwdDk84d2wffLNIKnu5P2acgdDuAFE4Yd6LSPPtniIrKBlfq4tQi3vyY19VhdxOzbSHyWsSyg4zoWEgFylzi7SGhdf9n4z3V7kT6mjcds1NfMjblMhKfXQIReBzCtptuk1%2FgqNltk59YswlQKvnL3iBlBrLjZ%2FYO7tjZi4DNennasBgXD1YD%2Fq&X-Amz-Signature=ca78c55213887bcedecb762ce3dba564b2ffa0c5856db1351d60399cde24f489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

