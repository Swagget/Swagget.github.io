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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZB6ZFFW%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T214348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQC9%2FtXZI72ixInowqtjNisZgxKQlwgXMh2MRgjwYbETJgIgUmwDE2df6sZ7jL1fIp3QkZAasWvfCcYATLmgUzhRwYcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNoLCVoaKiAIoeKiDircA4Wz9h3UFrBo1%2FV%2F6J26BHXzkE3Wiq1JrOuaX13OQDoffmHVhQ6EYFQbaKTVes2HNdDnWG03aYX7XIz76TwczQwwBE%2FgRNMdH40U7BhI9v0KR4Rud6oJ3K0GqSUffE79n81lW4MXi7zuoTO9c0Qrk%2BQ2EpJciv4O4Zht4Jxy1tR6jzhY25VYp62HmQe%2BZOiKH3AcO4cMqEkL2lIbDnSPRC8%2Bi1mDXbkcr4ipPEZpadCj2t%2BYHL1nYifZlEqjoAvMb3uKaXOwQKV6%2Bw1ya9KOfqUbg2SumnG2xYX%2Fgj6jepsX1t7KX8DTBUjOc45a4xhmYIyPOg5XQBFMGMnFlvMrlg3NvGSsaER2HUbAtjOYDWGn12h5PEkw8k1DC1DJ3N6oCGtSMrL6DzPUNa8JvKef2uU4GjL5qL3IeNnvhtYoz3diiOlPJVVN9vg4OLnuli7FsvHPRjNX8EGii%2Fo828et8qUuToyTCvwF8G8veHVPm2szpuger06un1XYegDYJGIdO5ku3t5uuVumX08LYchixbUB5UbBTZU7F0HvpeKeSkFKAr%2BeFg3xMMdWsHLwUeFpvf6h1DHFFG1XAj%2BXsq5cGUIKoHKupA%2Bi4wAVcvZME9u06Gd3rDxqP2FFLuRaMNvQ2tIGOqUBhi7WR%2FooGrGFBENOp4JgpGIg9uvH96MZorm0W7AGdC2zuu9vlCF7Yg0%2FBbtybpULoa6FPJdSNbvyoaIP3v97qQuFhXKjArgSrYxVILmjC5ELf%2BY4oZmkVAsurtl2UGU7UD1s4CSBIcOvXYpsFu4uY1zFAn5IyZZAmv5m2vTrZnUwWHzroKW%2FihdbrlPTIgeMvQunwkJQu9uiSw3Oc91DKvtK7Rmw&X-Amz-Signature=fb51b48ffe5f1a5798dae5ba44f6089258c9ed5d8144a2bc0b92029403a0b273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

