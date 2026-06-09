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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKONVM6%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T154842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDxPrdc6L40ED6EDElZvmOguAAvSO%2FGiZICX2IDzi4u1wIgV6oJVLiLHCWwLUE9JyKmwi7j0jsvVGg13iBNfBgZ3egqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoh5T8qmZ77%2FFOc6yrcA33ZoXgdfFATzdvVc0brveV0gR3wwoAm36J7cw66IktsXkU5yVKGkIkFvj%2B3FGGBwMB%2BBPMBC0uY3ycEGjK3aMjiHdL0MiC0EeQv4TIdlRByrBMmLmt1tw6x64CKjhxAkmFjdfvHTU%2Fnk6AVNNth7vjKr%2BU9Z4OIZcF3nsRF9sbcIv69N68C0Q%2BKyyS6C6yaivC8Ll8%2FUVoIKCW28vYPyL%2FaSqBvFSl072P0yJJAVRP7q%2FWM7rX5p27Lh4sZ3KhH11KXcxfKqcJqnEktR3BAe1g58pq4leF%2BKv8Z2K%2Fj3%2FnvWhbiVyzhu0qc%2B9pfEpDjBL6t92ypn5m3GYZQpBLvB%2B%2F4xA3ziawA1Fhfo7HgUzua9fK1nCyDx1fao3YP01ado1%2Fq%2BsqVP%2F%2BXtPvOQ4nYAUZIf7yAKh8CGAUR3VnRjxITT3JE7CdDefJS3OflSDBYCahovwkbBkYRWbV3vmUY6%2FVHX1pNzpBYEd5iiJl0eKRGd3JsJkgWnoKWjnaw5PoQ4K4znO%2Fad9rwgB%2FHzek08VTEs25F8PQ%2FC7TRbNniAhqF38evZ9ta9p%2Bw1bzEjh7Z%2BND2VNQoMRH%2BDBlre21Ol6NsjXAY%2B27k3ZRYuGzi%2FaezKgEXEpMjwzh1Vo2LMMTFoNEGOqUBg7PYvFjEqtaB9WW%2BQ62ZZldmMCN4ykvB2d5LBB%2BVxcqJffVkI5F8Mm5LAfCMB49vbrvSVYktnuqc2U2UxIUgKXXCI9XBnqpA4TA0V%2BQUi9MW6%2B8Sbix2HpDfA1IVhBIkzw5vg5xkxa6fCcz5HzDPgdIrKpjB%2B5SrITvR5UYmrYDraTDnzxrAu2zsLBr2oFizhHr5pBoopyhvz%2BZWSCXk1g0DOIAb&X-Amz-Signature=47c38c85616caafbee21912043b28ba67f840e7fe3a576768f462f4e8fb0510b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

