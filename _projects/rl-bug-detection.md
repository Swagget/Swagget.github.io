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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R2WBHKZ%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T061643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCn1BZ07gvZ1iJ38L1sqIqi2B%2FF%2Fsss5HMWH%2F4cBc2syQIgenjiVkFz6%2BeT1oi2XqbHr7Wrs0JLsbUbWzhWaZCVyXcqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhfomfhgkG82jIOTCrcAyMxVhQ9aNNxoVN%2BgNJfz1LNGeDZwyAIaJepD4bGPWzN9eBaLQLQ6dcp3XYCz35%2BMYH%2Fzgt%2FV6Nq7F9kVoL1HihKfFrUpQNose88pRo%2B7YdLnOTr20Z4UYmVvO73%2FuYtPQe8torWE0rOkTDjejrUyLacXaz1BvIvQRWIN%2FgmWi25BCq11FTT4xi6c7%2BMeWWJ0dpmjXZssrFXgqCBrlRZkz00iVtTx8Owr9WXG2QlKTadvJmbU1U%2BogO7fS6XDmXb0zYsxT64XUFBMhEgLLjkwvyDLphgXDjUeuRl2GqD4BzM9sjlfglq1rRSzZv4xnzPZrcHqQYBcDxUVJ3wXrP4zxFH9cAZn7EPXw9qQ3I%2FjKMwAH8jQ%2BMwLHzCnU66hbcVkiHMmcnSSaCChN77iLmrPMV%2BYvyekagHuuC6izm4CR4a6SaKkyak%2BZbQ7v3MdiHVn4F1t3gKio4BawYhMm5EDVF7GA1CGn0TT0AZX8PyhJ79lb3Th9Ly3oQNOO71Btuv0YHOfua4yuJDAL506pAHfvVT8xMpjgpq087M%2B5zM6clVovc3ib7T1nyPFwpF39sW6SDKRIbDCe73z7LmCV4MURv1kNRylVvqYTvTsuhDDeFCxlAG8ZAZoSa0A03XMOyX49EGOqUB1twiNFwcLPwR%2BFJ2CNlYfp6H7eTu0zEJACahw8bCNI8SzH4Y3BtURDGdXCsI9y%2FOdX7herit1yQGJqWiSgC%2BUvB7K5bg1InflbV3xkYfb3a3QOizGXtQfcC6%2FNNP6vdOZgDMRC351%2BTyqOnUlFXu4ypI5KqaSZ%2BiAh4mFV93UiraB35nX%2BdVi1O8NswvG2WE%2B2ZXNBKOqCK64J1IED6C4G%2BPntMN&X-Amz-Signature=a728c778fc9555a0e22dda1687cf2fd8b1bb9a38cd6f3e80133dbd05aea7c8fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

