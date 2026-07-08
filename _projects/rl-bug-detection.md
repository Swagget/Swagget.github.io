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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWG6WS7L%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T121120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK0IxiyviHJVAGxgAZruNoLRitoYDYft4N0gGh9u4nAAIhAO%2BBgHyJ3ht6DzkLkEjd1v0UIsTF3ZYYzSPtLkodYA%2FJKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx6iCWpF1XEpjZIbUq3AMJfHm8RpgccxTwyUPQRXSA%2F%2FTLc5ym2H6Gw1dQ1O9OWGFbslecfeMjOHKT5QBoGf%2FBO%2BwrtDtcvyK8MEYQ9IdsPIg1pr16JgY4EjrSeNw6ta0oAwdPJ2%2FZ2iPfV%2ByJTzcDhWhisNAu7%2FP%2F7o30NGD0IZGlBvdx3n6j7wi5oLUPjQ88ANrqop3j%2BKvhdLvWHwpCzlra9iy%2BG%2FRvOCf8HqrueN0fyh7OWP%2Fo37iwb0VMJ1rUyubacjYsr7wt7RFvDk0MW%2F5edOTveICIUyMMJvt%2B1vwXN2iSXYbZ7D2O76jzHOpteBU9X4Y7BwFtqvFVeN48%2BvoC6cGrMoNvJ9eX%2BFF8qC6Ci6CyuN98pbubvq70rly1iDka6lFdquOkWI835DMgcE64DGfOsIj%2Bmihj8T9vRqT%2Fh%2FShBFJq951CqG5oych2JhKpkpT5x%2BujnotiSlkDD3ysyVy%2B766gDnRPLnZn1B6WRzy8U1PpCS%2FguEObBc8unvWY7qf1iP2cbyLJvc1szPpGLeItAx0oDdsYg8RzRY909YXrHDOiohcper8Hp8N9svQVyJwXfcwii0p4PjjaiTSF%2F9eDpoqMLhlFpYzyrxBrGbroCqG3EqxMa2vuT4LWZSJs%2BQvtDh63xDDMvLjSBjqkAbAIIQyn9aD0reZ%2BvhcR5EmEQg7nDjuBX7KYS11ogTDuo%2FDDa2fKlMh2Hm6vxfUCq1HPrpQ8ZNlM3MeaJ6bRAXdXGRKJu4oDi4MbIojfDr54AUH4IniT7sRIiNiDtNJYj%2BCX%2FAoqSzY852W%2F3RCdFUhOKnX2tgVxfJG1fX1q2FCrnGFaPr88zcuLxIOiRMmh2WGTTCGc2wo9OKTHpkyjIdJy2Cd%2F&X-Amz-Signature=3eccfa4fde106d8eb871871991910a02f007dcfe1308be1f50fdd0f340ae3a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

