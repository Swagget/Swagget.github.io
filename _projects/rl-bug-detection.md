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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWR5VGD%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T142937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC7Twdf%2FWXJ%2FtX3tqkyl%2Fc%2BjNSFtswnY%2FkhpYSEpQaq0wIhAJo9k9aum40AtrCTd6nrl%2BF24cVggO77ctvt4%2FXBvNvoKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx90ycUQX0QfSCcldsq3AP4xE0NG9icB8BrBPgRL6j%2BlVW9DS2gQGory7aRU%2FXzoRZIrXAAJp4GNyGu4avwtznjGV5mnXK0ZlKmpLMknriPq%2BEJGqBq8BT30s%2Bjr2taHrDCVYKzebj0ovLDz3S7dqwG7NT%2Bg8JM6rQ0xQNI%2FpQgirC%2BNTrRSWhw8z8ENN2Q0gnEoRts6ofAwB2vWvqin09YVPQ0cgMdgRKZADRfymARjDmHG1iGun039Wdz6kddY5dNmqT4dAa%2BT64KAaGwju1kiTuUVhZraTYGfsNcG6GQ0uqaJIGq1tH%2Bx86oKYzsU8Rh%2Ftu0hMr%2F3NfEjFYbVUfMqL31vZif2mVLTSyOGDn0CRQEj2jqIwLuEj4NIMg3bu5a2lMReLBqFu3VG0%2B3X3bh8X4M5AdyNK9abXa0vBCeyjwj2kxSh3EHju4bv983SwEKHujY1hBGBn7%2FXF19DXpn2gvCZXfcRQ4sCQzNfZZV1D33YCsSyu3vARhwRxDdaz1w3A8EsVDgqccNP8c%2BjJnQmlZi9KSSQqxOjbU2ztiwQaY1M02Zq41VTqjgIyDe7g8KxS2WtUtnzrSfebNmLrw%2FZj%2Foothygee2B0r%2BiHSBUa1qteFnQc6eBTNVNQBIgPWPK%2BOlWOSFsCTYrjCo2Z%2FVBjqkAf%2BIUWYhIVU3N%2F3Cu8OlZUaT%2F91NbBQcQtNZMxc9gkfi02aOPDlZu7TisP9Rd4bWIh1NxU0EZmjAV8WXVkPm06Pg%2BOTzLzecOl2jlu%2B2inDUU3vB3wXiAgNE8iM3HBtdP7hHzaBACsbIDdiVDvHEHKrrr5U%2Fr149WBkJvuehS2L3YDLBxYjuodtBYVNbkHzyHppJvJUx0a4ieMcyLASc%2BmofmiN9&X-Amz-Signature=bea3224c18f372932e5b563ad8d8ffa0e90c37fb29e8764c382cadec2065701c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

