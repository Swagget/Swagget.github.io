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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UJ6U4O5%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T004442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZEi0%2BZlr%2BR%2B4Mz2tk8%2BP6uT6MMTCmOYrzFbHH7Q7ZCgIhAIce1yrXV65y5LfsNSLEvQsXq6iMCnvQeUTZMdHjblDLKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV2LTMxqw%2Fh6TN6AAq3AOyLSi3B6JiScY4yA2YY3luDs7Qmg%2BctxfK4%2BKDDeVanPfqBbkYNHCrwuTd6IoP7bcdn1ePYYn6h2hmCZbImGZlY%2FZuO5LtVkbsa7R0%2BPoZFddDBBMdPX13eLa8KVBEAidrIeyeo8xHEvNxjqSGAAza1WJDvUQh9fjgzxBDH%2Fp4nK%2FsRF9l2JIgmRGXckVj4oQiWiCmnSEdW9Eb6l7A0t%2F5diQaRe4d7CNkWREGRJeJWXUqrhbZfxNUHwBs1wZwltoMNsyE63UdantgoDPKrp3zv1KwaT%2FmKCtkHFmdX%2FBhcqI7Dkqo7zhhCgxL%2BNyHUpFIE5yv4KzmgIPkrUoTwY40b6N9IkTz3qUUvzq6k486PyILbsVBWQyYxtUUtPLq0FuRVFfuTwunFQ0XRWQZuCZp5ubKxxSEDLtDfKuvlDSHHgUXR9u7LDxYAA37UjAdTAURTm04DMeT8LV7YnKmfGHiZ8z8sltrIy%2FGWos28DOUvpqmqbJpx3ZUyuedoDZYsSjvOxXT4AydObsOY8BhyVXv0%2FoJ44dW%2BKQcFx9ysVZEyzA%2BJ%2F%2FDI7XP2rS8dmFrH5MZmR%2B5I7dR2HPldrxNNa5OvbsvscW6SbX1U82QvQP6DDuG21twSwvvZjlTmjCV2%2BnTBjqkAT8L6ff3UIOOYSa4Cs8WmQoSoYOmh3S9jTDhCVZV7XvkjtTs492lIU0JNI2HAdpe4Z0foBwV4Rujy0Hc%2FtwrIjsyIaN59s5NKR7M%2BXEZWDAawbXFibFYcVb47Iw8fiC33%2BdVa21%2BoAZMzTUKkh4MozqLC%2FpI2RQ%2BYW02ReGr9aB7wLp9XAZf4aEebYCZibyYGOqPPSxlj0wBg6oOKhRlUXYRCmTI&X-Amz-Signature=988331124b45657e7fe1e136290dc7b9083a310a9ea54ba25c10c44d4a57e89a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

