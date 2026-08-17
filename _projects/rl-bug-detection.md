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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIL46WVF%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T211350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAl0ywdImKKwTBr9j1m817t%2FpD47xqWP%2BO2Yw76DjSEgIhAO9%2FFIdXsZEwiUG5Gj9OXsBfi0zXSQHWMoglIZ6SEHQkKv8DCE4QABoMNjM3NDIzMTgzODA1IgwuKTO%2Bv%2BsSgThiXkIq3ANyaHkqEHqhoOESAAJdZ9C6rJDNJ7rsl5oHwLCLNBhzi%2Fv5HS69AuJ4t7w%2BV5OsrDSv%2F%2FKLtMmA253jYl87ohZMWMGOxU5q57n8ngeYEvIj4FWfnK5Wv7ZyPT%2BHMiENvFqSHG8RYrCJcQuPtZQg%2FO57hTzJNuo6VYp57ia0xZkjocMn%2BGWWmjI7o1KcNY06niQ4rqjXkHAW71vkxfljLOIBD3QpZ0Vl3E2sqkRZ7wRBHw0QEsI8JSXFi5sCiSHJ1Dj%2BipHa9SrWERmUnPe%2BWR3qcdYVScnZvI11Vs52mRKqf%2BxMc3gplwExSByEcxpGnLwDYq1ZJ9Di7S89RkPUN3CGGaEVtw0Xq5tbln9bM2adXsPoyo4%2BVvc9w3LNIe0SdoN8dBA91s%2BFLq8UGEyLZ%2BRjeXNQfWsWBZ6Ov7UGNXoq8%2FQCjaUSLEyPbkboyVEqMJEb1SRDnSUeNwNM7hwcMrGlo59vQEo6e5yfKQzEagYmZwkAhz%2BK5BCxrIi12PH5Q4us%2BTj4HtRRiVlLl4j20w4SXCvxrccSPgw4oonJ6jay4L15c5f2F3%2Bb6DoAeRI8JwHmh90yE2fmGshRVuzCXXxUVionlFyNvoop9meN7ZHGbMzciGE%2FsHlYWQn7lTDk7Y3UBjqkAa9BM%2BKYkay5iSjXL1frgXuGHl5zLNScDHXhrP1FggUKEXopWDCfwV%2BleFRDSJoEjZYlsesJaVj%2Bt3uqGdjSE9trg1mnRPUnANiGY9JKbXKnPOiSOdX9lpPdcHhV81Y9uneRnqvDXxZ0BDbonOoOXNbDkY9GHzun2MbkA2dFhZ3PgfwwcTfHT%2BufG7awBkXxFGv8wvWdmpP%2FMYeHvcIsnEhvUDgB&X-Amz-Signature=b5eaa60ed192e30405a64fd913bce542c0b3350522ddf582ce128ae0415f4d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

