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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXF72BUT%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T122851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCCbFK0QzhQYSMErJuxuS4bZgwhU0LghKfL7inChbMUggIgAxdDkRu7YicgicM%2Flz9roRe0dCkwMVxWFPD8a6T5KzYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCT1k7JJVn%2BYHtPdyrcAxSgLWW1ahRXEKqo0WwEkHM%2BvdlMZ8W%2Bk13KbDJBkSAejnd%2BkvVpkeO9ZxerqVewWCi7qTL%2F9yQaC5c4CNSAUrTJacfjFiqjev4R12keBgTdKKcABH2fIciqUadkc6%2F6T2mz%2FKsGQxHs5sRAm7yokPISfxV8YM%2FT84ksU3xf2gAVOI%2Fpa02PJ9r%2BjoDfZhYzUQh3yu5xsWQtKlTN%2FFXqtcTUotyE6SLSEquV9piqv3vMHVrSs8xbH1b5DvDfkCVJ6R8PV3dYZdDnPevqNMZxNPTiT237Wkr863HryUMkNAtts5uVXKLeeUtzUUFUyk261tMrmOtaJIxD3OVB7E%2FUNkGfIupjYQSG8v9tlLKZfxFy9mwkAY37nfYQULnH5KrCNmPetl1Bh0zim2jxaqOqsS4%2FWK07yApHDAoNKP2diOfUGjntZNnQ08XNHmdqLBAWUKXWO2kcjH6zCGaK9be0%2B%2F%2FqCyX4igMkrJWzUWMouIW3zXNICPr05K3kvsaUoAjvuFYfixLTsAifrZfg0cY420XR1DG0stueMe7aryYxAeiEkA%2BeqtI6v8VhiUqIGLsoot41%2FkpvXEg0LEZJrpbVw28FuTb7DC1iNI%2F2pXBiKVnaNvoY6HSITYyEHjrKMLjun9EGOqUBhhD4GLpR%2BWDy2EzZrQpkq9BUkyppplCnz6Lf77Kc0dCTaWfEoQCNgdTpQb2sCbZ4A4I5ibTXT2cgauzx2E0cCcXSHjYDhFobrB3UJcOKxDo0HrncVBOnkbRQgPFMDD1UfcC6AeS5MGAbJB%2BBQvARj1YVIu95LsybypzmqIoGUfVqtRrEDALMJHA1HtEY2efsXFQ0zuT5C%2F1hgXnn0xs4ZFr44Ni6&X-Amz-Signature=84381a8009abbfda99ebe2b756957deb6869e3353694fe372d145be9d578fa79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

