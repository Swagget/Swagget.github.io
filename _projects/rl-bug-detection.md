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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3LNDEE%2F20260916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260916T070325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCDKR1%2FA6MlWCSc%2B%2FzILHmAeyR%2FKhZz1NdvBAoEXqX9%2BgIhAJU30uVRe09RjyFH8fMUjKTblYgKj73Ro%2FScXwPkXzmhKv8DCA8QABoMNjM3NDIzMTgzODA1Igz21Fmi%2FsAIrGIFq%2BQq3AOdFvG%2BP67ZR9lpaCtcRDwjPOQvZ4iez%2BZjUoKmqdIdTqk2BfSp5QGj%2B8Yei9RXHa8bSRTmHdoer4PJTakKCMqisgdczavQa5A%2FSqBHsdHSFrF3VT4Gk6%2Bak5zO4UaoyG%2BQUpUZ6BAj0MTdWn%2Buu9%2BO6Sf7PS9g3oD9aFcHUv%2FH4SWaDy1JjsYYE7Y63lDTDPAjpWYQwPtCUxR38kSer8U4BDRVnQCSAJ0Bud1eG%2BFXyTIV9CrofHO03UuAlfCnZJZ4S%2BW2W2pov6sjgfzYz0O7jkDWmiOnU9NaF6EVI%2F8pswcZg%2BIWm%2BAC8oVOPcZ4pnfH5jjLUum0%2BWMvyutpbtDCsTpr4pIcT7eOSIiGnsffe%2BMaXCoWzROtvgasyeh%2FVEj%2F0avL2%2B3wAXSzk7ytbcA8BcsLlRDeoJsJ5uW10HKyFJRuF7ZAEvPA0zgeYE1R0rAcWjznsxZHjbTCXu%2Fy8HqA5xYT%2BukWwmjfNsAXPoxqan2RIL%2ByZ9twMgX3fpYcM%2BrhgXtE%2FMnPwu3cx9%2BhWrit8b1oL%2FVSPZf6zRXvNl97l%2FwhuWWq%2FwWfgLhK3%2F%2Bu%2FN%2FV%2FOc6VlR5XrHHxvWMnbMNaAVPgP%2FcVk1ztBXHLenAuTg5%2BROqaefaH5sU7zCR2qjVBjqkAcXb1dahG1k5ebvhAT%2Fg5bVVcKRMYq%2BXny65vBtnJgq1CrXfJ5pFhm1mY7n19IzzkJgyB87SCuPpIlmnbfuSfrPQYTDluGn06xmpeE6JtVjpVTbL2%2F3cmHCWYnamC3D0Z9pkrGK%2FJtALgJtZOJJve%2Bi9UXJZTqxT%2FtllTojkIwgg5xdPBa6NF2lamrTuivKsSAMreBKfgNWQxX0YN1TtAEXF2C7h&X-Amz-Signature=64e9b2bd1bfcac36523a2e86fde9369c86fa4d63ec2d4fb166f0394b8b59e46b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

