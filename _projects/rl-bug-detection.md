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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY3WFU6A%2F20260529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260529T074356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiKUX88Ti9Umz68WxrJo4v9YMa%2FvkyavMuFA9uArxxmgIhAI3r4CbNuEg%2B1d4%2FKsT%2F7nonrFVBKI6%2F0v1KXew4OcW5KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiH6VsbXTsuvx0ovQq3AP1JXYpiVdakz3B7oDhhwzX36VIylTUpogdtqRAEpaM7281W0j2uqyaGqfyauB7Xl%2BRJZklq7wIiNuvXsJ%2F8zKxZs4C%2BdML%2B0PahBH0v7Ur9ZQg%2FmPGJmykRcBcUas3EuW9XQqSRz8Re6Qoj4V8VfY72rY4JjVRkvjs%2B2EeJydSe0Tu52ixzgiW8jIurqv2jzXRuJzCdid9kx5MsEP9PGcSFnPG0bHwGzDZBQsExK7hF5luzWk0DtciMbsdGTuZmZ14o%2BdAaCceTcp7%2FwFcf%2B1i11RCBBaIi%2FtyJchlVVAVCJPZJ298K97opijaInSzhmzH0NwkVYQF2PYGPFwG7oHrCpVB8uH%2BGvy6C%2Ftd6ED7r1fNfzKbUqHlgDMpWTN6pFz8dAWHdUjB4SpuiMmgr8DIlOpw2PjUDbwwNc64A%2BOA4QWPcTGy1HUgDdGGp%2FNAtlqbBW2Ya2FkTanoGWj%2BK8lgmZFmmogPVOsRby5SjrmUYVFmuHyZm0wTio2xnMwGGpWOwLGEcxrShCdOrHiMmCZu7tSNAvDfVhk5tCaa2v8ZXBjeVGk4PjliglsjUxmri2Ifxx%2BJrmQAvnzmxzu8IAwPZb4H%2Btqh%2FFPHwJt%2F9tTkinr29nRgRTGzUzmjKTD75OTQBjqkAaYVyeYz6aCx46b93awN%2B%2BeVvAbRGcxQ%2B9fmyIAAYYKmeTjy6Kjd%2FUjZAgGYpqeGolx%2BztTqYL%2FooF%2FlrLl%2BkHgkOtvV%2FPhcKkIS61iRt4wgsUq45tSgJ8oqx4P%2FDZirHEcy6y7sjIDqUD%2BXK87p8EBoz7oxvISJHYkV9sbo7AzEZbAVB4ntR6Yso2b1TeLxhwLWsGpf7J95wXRJYECB1D%2BIdjJJ&X-Amz-Signature=399ed3d110000ea99eaaafe76e0f30148ab7a248b8292bddb2625d69fa140380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

