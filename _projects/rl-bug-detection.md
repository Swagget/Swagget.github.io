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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPEUTHPK%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T102133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHXeclfH6rUwhyEOcWFOSccG7x0yk3OpgKmacCHdIUcgIgV2BWFF%2B0Q4OWEGYYo%2Bkh2zLDiIekYCtIc6hjups5XREqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLO5WH7I7Fa3s5exMircA%2FupqUgJiHAmVSOBuXS6n9EwNycerWqdsqVQPDy581pZw0dEIRLJHSJxK%2BANltmo%2Bm%2B2%2BNB7JBRtaLjEN0e3FD711IewSPP2RXwnZDjlK71sDOguQAY%2FYe5aU%2FfbiWGdKv6t16LGWcyJTZbE7T9FvKGTvyuY7dohnQ7ATzB6n8TrvilNzP%2BU7hsuZCiM7enzTsjok6V%2BtFSEtHyXSb36AcdNP2c0ox34j6yN%2F4iySXjyE2k10sKH74sQLhxzRr%2Fk0CTk2YM4%2FZP5%2BE9YRRJ5IXghe3Z5hC%2FNZz0cYJJnnMKS1ybv7tWgsKhavywHqw0JP4dX0XTT7vhVivOMBOZidKbTmq30WerbienWNJuepMQ65thdkxlHkftuUkz%2BkFBdy9JFPUxyaNOVrUMTrYkSX9GveRI3mFb7AW5wm8AOQBKIjXKOigtLZo5XcRB8MdnDiEnLEUTZrRRyZ28rir5a74P%2FoEPFw9BmTJwT%2B76ZJHXqlo8dwDwyPDj%2BI74Kw%2BIML0efJmhwEN851nh8THD0%2Bg7%2FxzrT9dBKzdt9dS3ZU2TpAeKuEmHdKvSdYJJhXCd96AKewDz9TNt7eR3QD89remLOTEG9ldTJIIEU7dmy2TB23Z0CjfR3dlXL9FzZMKuQjtIGOqUBGN7FZ5rEMnNpwS4R5qe6J6cSOMJaN2W6r%2BXSQ406Hn5r6W54RUyDicQ5CcPeWKhmNZ5QjUhjS02zg2fK1pn%2BS5G3THPXpRGrsAm0i8gmYzDyX%2F4jv%2BZBadEqD26%2FRDXorQ42hctCw2Z6ANcwRfG5dd%2BG%2BdiozLHUsidM9wxo2jVZUaAapGHRQH%2BvSBbcPoJPTnSGZvIUV9%2FuJfEXtKfASN%2BpAlQB&X-Amz-Signature=70146bae5f97e1f1b124a49bb34a8bb64ff06c99f930b11958abdec0cbba6e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

