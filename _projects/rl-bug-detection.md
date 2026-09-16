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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP7F24LD%2F20260916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260916T172038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEQrmIRWYWf0TzYHe60z0F1JCcyIFrfW0GWNap8xL6F%2FAiEA0uGbZ%2Be8oXnLJUao3h%2FMFWT6YASV7fxjNJ6yOQPBhN4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJaa9iwq1NNKRjpoDircA691CP%2BXvitQaelzkWnNrnJIHtb6aCK%2BcsOlgL6mW0ast5n3Ut9%2Bqzo%2BiPW8J7%2FYFmRuJbHCpGZ9ipPtGGskDUS4QHPhgMeU3oVj75BSh9X3zREZAhOOMZNz17RlhBWvig%2BZJq5TbbLsStlakbvjaj4bYeLfwjSkbQuWh8VSqoNwNfo0q%2B6YXfbo%2F0btWN3Ka5esj35aLw7YFjnixRlUtiCzX8f5PfDpGjQ1JigYklyADR4rCqpY9mQIR7gGQ26AQVB7wFKBIgvGm9CpKK5KSFdJ9xFjHzzd8CqwCi9%2BMsY8wks2bcEbvv2lBfcVkiwrmC7DvJlePSLQvttSk%2FOtSjL%2BXoeX9Ij3FhikwVBllyEA5yUYQKXIp3SCUOSN0oktIxDsOAG0GzX6xGg0T3CeMCwUme7gwY4owfND7AOvjKd%2Bn5Mxq9QAElXjYG36H%2FgUfOU7v7LOv7n96aFCnLoPw5qCU6I1iTGiQnBkwtZp8preKvEKFNIzOGlLeAnnK0d6oH%2F3V8EEgsfJ1q3jZWoJiXRcXBL722Av7cp7lDNjVykG5CrbTSdfm%2BTUTUTfg4FQdmZNzFkK%2FLn1UAYF8R%2BPvLzcFSfpXPl6mIkYnDYq6njJ9b7paw4%2FgjGl3PZHMPmcq9UGOqUBBpqHfEpcVqEIc1sOzsbhWiI3TGh4E3mBf33GCrDoOk4UKeTCP8p1m6%2FHvmeOyaYbTLNqeBgn%2FSRusQMy78V4s7GhQSuUOZ90AiSEW%2BIifjAfoqjqwAAM57uYy5GD6UrLvl7p58F8dCj7MPuXLJ6WqtSJHjUGFam%2FsKU%2BvemboyrRw5uSePzRAWvKRBAiMtnECEg2f9ljGWUjC2oGquO3b8OvlNi1&X-Amz-Signature=8deec8807052ff6ff6f1225bc6f4118242d457369ba3d2572cb64fe5c64d4fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

