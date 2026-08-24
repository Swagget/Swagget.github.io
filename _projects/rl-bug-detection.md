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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IR3I53Y%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T052738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDsq%2FxY0Vd%2BaXttpGUGaeyglO6rVs8h0IU4aKyT5vqj7QIhAICorgAQKa%2FcwR%2FF1cgHe3SjGPEzKQolqaSiORjE8kiVKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnVAzFSd6FFBVkk%2FAq3AOGzf5XDTGZRDfOaxEML2%2BbKwVgu57Kan2x3bE3nxPWGEObI%2BJiDJJfyRROU4qdT5QkpZJXwG%2FZ5s%2FxzswbOKxSoqcPgZLTDOC8r%2FXLq02yH4WT8S%2BXxXE4lbfNcUXh5gpZSmxUtc%2FLYVSkybRy24jlyEk8GR58c4I2DqcnOSBsUXJNgXu%2BZbPXHRWFEPibkm7IOQliskE1W%2BjlNWKnHKxsSuaZm4%2FlyK1B%2F%2Bm4LM%2B%2BVSEces7CYVXVbCWdBBlf9%2FDSmfynWHIZ9iIOj0l%2FvCytngR%2FLAg5B8N6KGtCxHTV%2BELDvAj8nbRJvXNGdjtcII1eGmxuwKxrwmM5GiNR3NwgdsTHPrs03mNGlnHR3zaMs0F688%2BBrI5RSSDb6CWcDAja0ZWDo1DlEfLNuDNNiB3yByHNAjw7OoVL4a8ZopXx%2Ba0VAavOB9EgDw5PuwEYNuQlK4Ofq2g1%2BbOu4jbSOfqr6I9sKjtPyR8t9M8wyJZzSbZQ8EkUT9g9kHxlCVikmT8tsOpqmjeEoEGs3Ld8qxg%2FoG%2Fizsd8bW3nVHSKZfsE2sSmbAYuDomfpvLRu5JJezM%2Fzhwxs5QWmCTNhIEcSzIiM2aaBRQfN2GyNdbZhHaXrwOdLUNEOPHEpzdhAjCVo6%2FUBjqkAa%2BDj0H%2F8AiD0fLRjVchnuLsZNrvPzlKC7VyE6jnnruVTqVaRX2zmx09V0qv4kfasWYccGnZvum6cFkGlrcZjVNfR8aeGkVP4ocsZEwz16OiH9dlatHy1rpWP3%2B0UVauZubkEaMlpogzh50pZtRDiavQz%2B%2Fg%2Fjz%2BWh0LRwCZEs5j4nmzwZ1gqGToiWW1Cbtc2%2FviDnEW6a%2B74vGlz%2FGFIucAh1KH&X-Amz-Signature=5728917924374333e7051881cd0c17fe2544ffa7417168222afe21e9a03e6a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

