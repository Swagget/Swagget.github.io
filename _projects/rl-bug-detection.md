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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PVEVYVK%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T224511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDt%2F14PdYinIqV9XfdBfs1RrRK%2BWgJLVLn%2BHeRJ4gmtIgIgB1uBoICf4yZIzUWPkAVFz9%2FovF5w6vKwnbWPLRMFaYAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8REyo%2FnyoH7gFZtSrcA7fvhzP2lSk66Z6r5Uf3ad56Os2WFocTIarEIhRZdOFxEbyqW6crX1EpiUgLRRZRHBZEhR%2B0dvC%2FR32%2F0fK2vOFMXxP%2B%2BS9Eqa0Y8bYpSbVrEDxBwrObm5HVTA872wIePF4TMeW3v21JsE6%2BQlg3Uty4tm2izY%2BHYK61ot59A56UBAX%2B%2B5zL7DlZNzoifVcmDmEl0kYx%2F8kXdfbhFCAVmPzvJdTB%2F%2Fu5ZeANQP0P%2F3LIfA%2B7feNOi4t%2BA9oWQ04%2Ba%2F7AZDVNGXTiN0kY8%2F9VsMukr7%2BFLtiPL4rnmLwX42NVHpWEQ1We8IRVZ8Mv0xHYgtKtBxrQj9ElD17Q5ccafqozuV6m3CMkpQrCZX9bRz8%2B84cIZKcXy3YkxtBdSuRkmUvXy6ObE2IbVBKwAbv0TNY0Lx%2BSgtx9v8G3sZMMDSSdkVIl3xa4bAtlPjTBMXqu2eCYcL%2Bw%2Bob1P2eDAgQolqTujUz1LQ5EgYikxWI3Qjul7fQxFwFwFSohvSFsr4lgQ%2BU9CSpj8aW94DS8AwUsfNPRXyQXTnVde0I7YWK8rlVJ17ImD00QlwApUMvm%2BvQVkQ6kjF2m5GtgoyJSYncAH7jrQSdcFACFZWqX0JiA9AIvSZCzsF0NgZ5FK4W%2BMKfFp9EGOqUB4talz3bKtXa2GEmPzogMZ8KCfHMSzM%2Bggs2b3PiSDj5sI1Ku%2FOX9Yd8ACvYzjmf33GFLkpTtEaEsFjxuVlz%2BzbvZITN%2FTo4l40o1LFfthT9V3dINvL0c6w8wYwOxU%2BZlR%2B%2FdXfkrsTYIx%2FRlJEg7H1vnDyVgAIc8hNytEKs01XyDSfiv%2F%2BdaQb7f%2FXeoD3TsfZoPDx205xVP0kHQ42atJ5keZZGR&X-Amz-Signature=8aa4907d82c727a09d833046cacc122820806b0169b940a42ecf790954dee063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

