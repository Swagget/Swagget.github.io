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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZSQRQC%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T154213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeKLQaZvpA8maZYHFEY44%2BKqqHuIGmRsCp%2BSDEcubrfwIhAOtRPx8bIMmRmSZLOQDM%2Fr9VMNiLH6rW4jSnaffgHPbSKv8DCHgQABoMNjM3NDIzMTgzODA1IgxZOX9tJfOjJyfQw98q3AP5HCGV3FfOhFG7NZ5CozY8ZNlTJJ%2FHB4TdWD2ZTJninGSAp8zlgfgi5zC7myXglZiHcxOx9Hadef5L2zkOHCqdKg55iPHG4C7W0zOKtusnIeIb06%2Fj11GuZn%2BZSXLtk%2F0aEy4dI502QSLLAV8uuP9uqTP1YyOKTyfp4c7uFD9L%2F4%2F%2F1PyPhWMbfA4%2BDh5advnITX%2FpXS41HpzegVGho5b3O3MnyF%2BMgF075DftLL7iYFRFGKhL2EocKeutbtrDTqGVmWbgf3Kf2svn0NaAYg%2BZgio%2BhTowj%2BhnvKg%2FkufdTIAtSuO2HJJOOhLkwZ14UKkb6omrJOyBdzSmyZrDWln21FB2GhmN4KMc5spyE822qN1TlHuRjVwxmOscNQ0NM%2FGrki2h6KpQ%2BRmGAeakpLqOAMf2detXxw%2BB%2Bsf6x3enWEqxIsyiDpbJaL80yre38iCzZLrNI%2FDWrNZpyEjXllipBjo%2BrHUp6tUnTx0eyePp8%2BqrJqZOiTShFOI6VyMu2VAJuIfEWVdN%2FOAeZioGAW%2B%2FIDGMwc8vdgoYwxZaDQS3gstWw4Nrp43jmEy7LSBjPM9yV7U8ZkIlvVIRR83dEfdYbNSGC5IlXT3n4%2BLw9k3d62HoFAplPLydPviaRjD1r%2B7SBjqkAZzV7zdR7XLIWjV8L7ND3cKU0AKvSMX36BwTofyqE63F5FED0qwYffXCsKhWFQSS7W0CJ7uMFrjAwV2UZsTAB%2BR0HmiArbFhKPT3uAqQBDEglXRwlgeoLSrBZ211Yn7x9reExiDup9yeCZyPwaxs7wxL8OVp5IWYc1KqUkSLHKgKb5B3%2BLsIzNsjhC55NUCpShkNjkZmHtVxAW2hWYAYIdW9U%2Bv%2F&X-Amz-Signature=7009ee9b92789344d6a1fd9c1f3d3c72989dd24bad02349188b14bd5fbd86cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

