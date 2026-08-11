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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZZ4HP4%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T025710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcgpZew%2BNV4EvowQaPdycU%2Bjs2V8BLU6mVafGMY5i1sAiEAqjAQzhW5dNrMbPFUTKrRItxHYW1TnD5D%2FmclpV0N3DMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHAhl4XXczFvVNSACrcA9yZZ2MNoLaRYAGRgUq3TxxXz45mXxkHNSH4W1zWdn3VEavMFEy3Z4YEMlO%2B17vgm%2BViJXL3oghjk1uNPa4dlVez%2BJMEMwjpeFrOPLCN7C2%2FGxF0eix6%2Bk9RtiQp82aL7QOtXMorIbLQnLhZcxgHoAS7tB475l5gYTepuxMv0QLQ%2BZGs2MbsV2qcobujnKK8qQ83xAErML28BBSLHUACebetNpLJqEM7E2x5QtgZ9kja0pPSIN4zdd%2F6Nf%2BvRqIJbHiH6cKyWtv4R7YEwswZCITgp%2BiY3j0nGiqnKshcjWwcd6IsCdh9q%2BYpZmKpqvCiAEtmwkHmAc4gGYZk4YrFOxuTZR2CPLzBH3dqcpYz9Z9mqdpPmlMSpMR2FqGNfvYEtxdY5eFL5UWWtcVK2kdzrKeb120GBSbvRsQ5DShfD8GO3JWZ5yU5PEc%2Bx5nnWLGlLJ2rbwNtuyavNt4EOYbPlO65I8aR7DznjOVANxW%2FZF8A6fGxVel8IbUFksBrxeS%2BTl6FhFdsOodXe%2F%2FwfbWFcqYelsJuORHBvlLJwaGJjE8S84GKfOQ3jiCiPCmaY%2Bc%2FCV5JJJbU%2F3wcpBGqp%2ByQQRAkXIac4K3dDCzWuz6g3brRgxZxGj6AK2RQypX7MPXd6dMGOqUBBAckJPSXhlH3jjmxFGSOFnxPwp75T2mzboBq1Uu9imPVGzplI5kAmCUK2PqgMIoRImIElcB%2FkguEKkvrQ8%2B5Bj45lVDgnr%2Fu38GDzrDzhebcgfulqQfdA8XivXjAw%2F1h%2B9zAf87IYcBb0VS7WC7BvMzXHWUeiFDjYX%2Faged%2FFX2RbwV0JyYAdtp52NFq%2Ba3YY1HfL87TQND6DDsTBFb8hrkCMJBP&X-Amz-Signature=c645614ae076c291e1b93cee601fcd63ade113b8ca13bb6eef65814107f8e620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

