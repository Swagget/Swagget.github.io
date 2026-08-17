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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIIZ57R%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIAloaXj%2Bd0pYcrLf6pau5L6Bg%2BHJkyo5sj7Dmz%2BPUnfTAiEAwFJhVtGtVvz%2FLLFl69oXageJ9po9iMZIe3oQMyFU1%2B4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLxstSE0lOCWZVzd1ircAwyrkRYqMcaTgyyl1PBQwVeBfNHIq9u8%2FolMxkSa9m1nQoYCDfr4xR3nSDEnsRx2cGl8kSXKSizez6%2B0BDKigWZRCzrcVIDg3cmMkpzkN%2FkIa3v5Zxu0QdHTP9A90Vh57%2FjwAzjOBv9UQc5Q7%2FWea%2BtktQzvNHj4TBz5Ld7itPT1GC1qXL8%2B45CiV%2BWLYmqm8quJJtf1pmSGp98IDQdVkpagckdAlCYGODD5om6UHuv4zGkkf3a2ZuAoT3iQOEnjDdEuRpZcuH%2FccRDZHzNQ%2Bi09EeUgh53SHARTflIteuqB4xUV%2FjOePXu6pqggvXGrDIoiV79xSwRZoJMGgpW%2BPCsCx7qObaoXGbCKi8vG7jC2vju8qUDebBIWpeL%2BE4%2FAfdhdbORy5piNib%2Blgqkb03aCH1zUT6JqPO8rcDhZzslzPadTW6qBBWs7MNDscUi1tRa45h4SFQTS6WPgrmM1HyhAAAiwxl9TtfgZ3ecb0u9xHj4a3RqsVE0R%2FhV8KZ9lytgGqf%2FcFO%2FDAKSzZnyq9giNGew%2BzK6vs97NVLHaE2hJz7TEb9t0dCUWd3jp22xg%2BUnpFNT%2FRgpPaDhfyx%2Fc51m4B4KWVfrObXcyJfBTAtqzAe37HUq3MC%2FbH9KWMNO%2Bi9QGOqUBSOaRGfBMgE10TL2RsI35pg4oyyybdndZxBIblTVYTgixcBtkOvMjYJiNDuPJGqqyH69dy3ykWwryBLGoRdoDPE5dGQ2wAvjDn2JJhET1WtgfxG6yt0bYQtor5Q0MuVxsdaoYN4mlUSERHdbJ4tqb3itNtbPSMV3IPMFIf5D3pPw4MgXyfmU747mMSlHxxWmthY0mgrAdez%2FR1jpVrit9OOagctRd&X-Amz-Signature=2b69aba4091f8c56710e2cebe7d0ed8aa1b07f9abd19ce9eef4b286b86a7c162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

