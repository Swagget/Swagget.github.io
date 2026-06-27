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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFKMXNDX%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T082243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIuX3db0kqE0ZdBUd3sp9AK9spUIaO4YkT99pI0Z2mPAIgCZ8pxFHaT3RIcyvmqcbcoutFhJbkosUdlWSGy19hYXwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBi%2BKlyagHvEU%2BXA5yrcAyD0WOeKUiLvP3NM5b3QH63v1aL7QWozD7O6vKm6xfiHBIzvOO15uSf8Za6Ve9Dul2mfwAtWiozPaszuVpFuLHwTyTwpV%2Bv6eJk%2Fg2hdWht9FJNltbsH3ZTrQZOkxvH6jmEhZHogn6%2Be5VxzaXwDvv6ckDTXkYnisA3Y6whM7VIYXF0nE6S1A7cq7%2BemOIhKgEnVkkyb4fzf7OKubRsVBXxGCGsKkI4NwwouUE1DusPJb553H1060ls6GTqMWqYIxRlk%2BktEsFeZLfGLKzu1Fl75leTLjEh3DTszXsYsrO3nG8hPcsrpZ7KRjQFGdyCRJlhLH4dpNO33zI1skZEZS9rc05Nnkv%2FpwL3qT4gfL3xZ4CT0F4WxJjvaRvUGgu9xFGPzja%2BgK4XXKpoBkwIlybsOPysJ5hOIWj9VnOMTnF3vpKcsx6bHe2mwLuSDTVMgCT2l0cD9EbkLyQjIXo6hWrXRbj%2FehP3rT8yRzoo2XXWEJChVf0n3Xc8mtmnBeu%2BhPjlabay8yR5ZGvzgoPgP3U%2BFA7svYsJ8tgCHDaZyJTQb6z5bTOdp5NwuVBRbNc2PFHFzYtOCrj6BJW9HkN3laqO93XNtfzm5ISNK3TXzY1xUHnaMoFU5i9b0wCVzMIWN%2FtEGOqUBDDvhX4KkE2W38WIJoBoKtyH2teJwCwyniTLJqywn%2Baf0xA60avsn0WwACG9a3c2HzefPVH%2Fa3VO85JNrew%2BXH2w4Mw%2FOq6jIrrItShazPpT9LE4VTe1FC42Wgm6yzXuWv7SRl9D71FvvyUUB1EbX8kjJVcZreNNXISt490MlDTvm9%2FDxy6sKwfd6YiuFs4DOgU%2BZiRhfgbVaxE0d8OzyTnQfcu%2Bu&X-Amz-Signature=bf2595fa7cf67b1270c7feafedea2af5e0154cdf0b0d12d73cb812d10bf6e4e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

