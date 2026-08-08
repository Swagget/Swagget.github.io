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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5PD4AET%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T024705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE6AgZjPi22Feap%2F%2BY8JPHU0rIQ%2BrZILu3RAwd%2FLMRVAiBlg8hFntdRLn%2BmM3YzfZePOnrl1v9blbgS%2F4FLJmRRWyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMCfTPG0GCZz8wUh0rKtwDcoiMcv8OZE3WjUwIqxDnpGug5cUMJrKElMzECQSSOrK%2BHJK5TbrqzOSHfe%2B09ApnBwIJWDQygqxfl2pyCrIVh5ZrHY1M9lF0NED0zDKONr5nsYYet5QJHdoKOJ8oDq9GJbU7ezTOXlV%2F%2FAZi2RB3uHrkM%2BSzeXRcux7GxwSXsVTdotAo%2FbJb6qSQClViF1EvuCT2lDaJvDS4V5PUtQydTH8TiMyi9L4PE708TKNjz0TRL%2BVo7%2FQgh4K7zcsPu2cwOQSX%2FGdnKlaR%2FsssyvlpWqlwOWp8PwPlM1gFvEOGd%2FnGnsJqRk5SdB8NvNTDWEj4p%2BGsX%2B8zIVyIl2VW287c37jyIbwZsBuFa%2Bsflh4atV60BCXbI%2F3QuAAei%2Bbsdsasw2FWONfzSEngrF1RQv%2B7ZvIFMrg7O5Bvsq0joLQdmuJ9efYn42eU%2F5mcwzQB8xJS6HVQUXBKTbeydfzk6HV7TKu5C%2FTc7ozJ1AEC0CVSYc1X7USCq1A2KbdaFKCMuzYKyrb4IwvN4Eo5wC1Rpvkav7JEm1dG1LUY1vmFafC5n70aWL5gyki8WmWNX%2B2z%2B5573ZZXgfqVVyC3VJCDdlkdkWNTK0O4ZxKNshAt%2ByDxjLXtRtTz0qFR%2BNtg1Oww9q7a0wY6pgHYHVzkUncxqEhNcNz4yA9%2FDC6vLMh1AbVX%2BhJVai%2FnCo6OxtEopy86TubsIS81rk5vBbVhrrikgxbzz%2F9SCYGBjvbZQlB%2BgAA4qTBrlljggX2W5CBG0JAqxnr4iKo%2FytF6oZhM0IepitZy1SIQBz9SE55r5wFsJfDfIuMdJYa%2F6balyWt0kKvq6A2QAk0JrLJ8SzUmshyfllvcyuYZy1RNnB1mk77x&X-Amz-Signature=19b464186875ca6404c8b7f5dbd9292c7f075f07c96c0ae1a588353b04d56f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

