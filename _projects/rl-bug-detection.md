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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZFNPGD%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T143913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD42cfGXPtboJz%2BZhjwgWlvDAdX5u9Am44IODcl5JSWqgIhAJWsp2IT1ds1HO1XqHOTt%2FxoeSuyMimlEai8dbkFetp%2FKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRyTUBcHFa7ne16Ckq3ANV9yUqloJ0%2FHDbMZSie8daDEYlaojb2FnkzbybKZfsJ3RjUhq1A5g%2BI3G38PVsIYAiun79MTgMn2pwL0CyE%2BiDq3HQ5wOPI7sQABMrs6WtH7rZW%2Fpw1LRmFOH72GYLajddn%2BIYu2jny2sW%2FruoinsHeIUy6Rw6l1N9UM4jA2GN71qV3dyg01aNWITV21oiUZyfZhlSH9neYBQe6C4%2FyrESvw%2BJQ87DA2tnthD1xirUMKo7QEhXMYfq8BfnBXg2MtgZsb6xaWHNAbdDUR0kA4tv8TTneFbzLcTNCz%2FkeG1gzaWRK5tACwT%2FLYZ1cJYFT0TsE2HITQM2ScAOL3g34RLv%2BxFsZi0y5jmLaBCoNsGpie9G2L20itZlZZ9WzDp396oWFhjc5g4tN4ATZZmZ28Y026yR77A0K79F4rN5H4Q%2FyxEo4ImiWXLNC2IZa%2FsF%2B5aek6lzr1hJisqBp0zbV82V1GJMW9XGnCZ%2FYxjQ98ZplUlS5Wj7kA2rE0iijUb0I2Jn3AyeFemOtX4NM76kX%2BANzde0BtTsbAACSOwRbMzqsDGePptOv1u165iyHAu1tESJian6hn%2B%2BF3ChjuQzX7q7IFZTs0Tf9k3TNXcGpd6dIFfLnULL6O0iaJBnqDCR98%2FRBjqkASJz14OTzaiRLSbnMYozw0enRrswseJI6lk2z3KQ87LV0bYOJV5rBhVEpQVjFA2qJffiRpsd1%2FCpdYWDTYR4l7PNMZvh7kytQiF%2B%2BUG4GGi0pGXYb6ZXedtyx3waxv1uHtGu73oHbzQxQEJZKmefzzQ9xROGlu08qGo4GcksgR7k%2BhcjwEpOqP%2BW3ncy6CRgk8a40eFMHGId4W%2BWW6NDqW2WLFJn&X-Amz-Signature=3f10c22689bfe7d4df2036a383c4669c9844d8ee85a40603f7f5ee4b694a6194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

