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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSTBSTAE%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T172304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGPKkVhqmb3DzZ9vjoGwpE4I4eHtGgFk3LQB6TSjzBYYAiEA8L76Cd9TWPVhx%2BZEDKfZdNtvoS%2FXSLoTSnhKBuezHRYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXdawk1njPbAibpwCrcA1rrfN6b30Wnl%2BK11EayE6srMK8%2FTjlkr%2Fn8FkhD7%2BlX1rIp7LVYw3w83NNPaY5OrCOzXZUhrZzRipNLmT3OKFWgcf5CJ%2Fe2ohRb14%2Bwrvm5d0eNqfd0pMK7RJ%2FOC2I1zcet2fMh%2FqqkWAKaJ3chc84PtoSw5W9BXNH%2FS9OtVqOcJSek03czMJPLwNHC5wMFb9gN4lNCnCCCcW3oaxdGxZfpA%2B8%2FyxkVm8QF8pn3ze6bqUmcIv6c8kiCCD04I4Eul%2FIvkukUrHHmoqjFgdbgGfwZ46uMCP4yUWbrub%2BczFneeRBbU%2Fa1fzHKH%2BwlI0iGktTq%2FWLPTuRYmCHAaTOqf9tlDEIgboGy7eh%2FvZX3iQUtPc7J7jR0pWP9Lqee0DiLpmanZeSqoWm38UMSn5B2Ommyjr7tIadhCnJzV%2BT9xbZGhVuEVxE27hb8NYWCG1%2FJuFBhbHamqF%2FPnqqIopafuUFbuIn9lAAtJafzejJzclcmk79VaHrQQL5zRtlcqNGT6L3CqHX3ivU6ejGvIqn8J0xNiX85qXCvcYd7gPIYyyxCzNJr00f65VBCBgbPiWFfAb1YT7kJWF%2FqbqZVtbP1wBsx3JhSW41O8fGAbe6sDWbg%2BVhMJY8emc16FnRrMJOUmtIGOqUBNF7iwpmr3WRq3%2FCtom3NV%2BMNmo%2BmG2fp5T5ikZAn1xQMq80FVB2KXhye02nlRgP4GljkjD%2BssrlUyJLjAX2HID0fNJwXCEB7QgJ4VdMoz6Odo8nA76eLBOoI8PMFMs8ZBpd%2BK%2BmfbfXu4Iu5vmPV5RvYGfr2zZEG98tfm%2Fsb1XQg1iG8yPP5fw1pcRyd%2FdWPQsrqah26USljkUPjE5U3RGablanz&X-Amz-Signature=996567477036197f4bf6dee9f273a4ce55b7244ef921606f85d535beb7caa960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

