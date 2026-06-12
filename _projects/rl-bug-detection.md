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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U3SGKRE%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T124702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIB9NQmda2QgmCFnhAOtRPhPpC4fZJBTzogGMZ1JcAkD7AiEAlcIhaJbR7SfeT2Z%2FBxFmQFBt3iQAUU2PMYYuFjAfzDAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDP4s2I4uNzW4ACcSmSrcA7QnTpRqQaX72zT93f%2FX0ZtC4tBcYH9kpsSB9ZOr1InXWQWF0jq1bSfbtPXh7yj64Ys82XALgbTHB%2BtG3sn4DcmaswMMfs2IL9isTIPdgZAbOpsroDHD13AwYn1LpRMvBWiM%2F2Tlo%2Fc8btUj7INbswsTffilS%2FqyBLV0Xc0UtMiLoF05lDjWUecq7wyW0HT8VfBzEjIXlTqh6UZviJkgiGqjvzMlUAPnRQJ9Xy3NT0wqbECJnbVJ%2BEJDojiv278DsZbIKn%2BSSbyBXF0b1zXkP8AE3WwVUweFPrujXh53rokSZuFY67IZCzxq6IKOGMENxqgjeYTDXYZ9tPKGm3p0OiJNTqs8%2Bsup37sD%2BDy6xcFqD7UvDjf7kmWIk4Ag6IJv8Agt0QlqIOB3XeFTIXg45StdJwvZSdHKBIwJNbgJBhsBnOY9tiLkHYZHa1qrHDMrrHp8z%2FNAon9SzQ1BMUXe6ePxX6WoOmViGyvpWh1qjZf1dgnkUhQcAgldcxrrxJC8ZcJvUmfhkCg3pfQqvjTd%2F9bCD7AY0WnSx5bn4Ubv40dt%2FttC27EnkKLeBnfM1me0mk9M6Fcee1OJxqf7p7uRUMncqPMk26fqbR1nIkeVBl%2Fd9kyEeZY%2Bxen%2BwtcCMPrgr9EGOqUBUJ752y7QqVlr9%2FszJq8oLlnSrwg1wQMv4y4kC0wkrzMox7P0%2FegdGkDxsamzRstkhitO%2Fyd1TnqJsq5HyoHvC7Z%2BJNK%2ByVASuRihklMvwsccMMSLCRnAx%2FL2oKkeT%2FAHJmwZwRY6AhQrjzg%2FTgAM3E3Lt5bUJJcJ9pjIWFnjaC1UCRCgmCiVjP5tKHTDbo08%2BosAToEd4vEVXfFneBDBvoDvtf9H&X-Amz-Signature=1ec5517b04bb7edc8f9744d9df21326324b6a913572f8950bbe083c989eb6f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

