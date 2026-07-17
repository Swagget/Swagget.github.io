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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XRBKM67%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T142532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1aDou4GHUWT0lgFEzW3PdvJ1Q%2FRvPfNrIYS%2BxbpjlJwIgUH6kpK4RB%2BM0j3MOMDZ5Mh2EHSgr%2BZGlN2krCSN7fF0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDKuIL3yDuGWj4MFbkircA5MkjCll8BcQ8bCVcxtLLYYZiJFjPxiIVkvBilSpnXBv3BYLFNTjzn%2FzI%2FB0BO2w8J4uBiiaVzrUJlm6Yy%2FZkHr%2FReVeoUPQG%2FhSqOYKfsaNXENE7IQ8IdaMPxLYv01N9l%2B%2BiXfw5OeZHROJBTa9n22YBYohWJ6bU8C07D9L%2FJoCdBAupr1jtE6MS5rwYuE5D7NqjqckD9lLpY45vTz3lAjdSp3%2FVfPwE%2BbMna4BkSjf6pxzi5ql3mLJycC8gVnM1Z%2FFf6gNuR0pKGP6YsRUxROoBZRL8Tq%2BeOCaJehvqjmZveCFEe7xG5RjOrlscfLWOo%2B0Tte7rgw4jzh6EBgd9AHZCYXM7wxBpRL1CTI7lMrbkVI92q3gWP4K0WDndIEOl759Cs6VDggoX9gOCTrIs3rweFNkABzF%2B1ZaRE3ngVqAY85Qgvv2Ji3vKJAE8hsNk2IW5L1i4OCsnQikowgtFXB1lrbOBYpfxfIUSi6PL9qDzHohY%2FiJ6K%2FYff9Eokn4cnZ0H0rSDLYz%2F3hSvR1XgTpVxRdn1%2BfMzVrmd%2F3vFsBoyTPWRZgHRkm6KsWTmP3VHnrS0n%2FYH8QHrcDAh%2BmY4Nkj3gGxQk2kkB4X3SF4w46khXj%2BxiPKHHFyt0WaMJGQ6NIGOqUBF3tMVBS8sMV4OA3ObxBktLW1eGbMx4lrS3uar9HamTzZIHkzFtz8uIzoDVMGBlICe763cXxQBTwIDXXnoUD6hnMvy2T%2BWoKqQfsA9U6SVfpeuDdfu38Tf6smSN8d0PiCOuDg9PsFlN0S2QhD988YquWkH7kvwiWPOadm5H6xwjzxzMcj%2BdpFLkE1HKkxMU8L9eYGSFOGojvmvtyrFmT9j%2Fkv7G5n&X-Amz-Signature=133e696c2de39f3b544e94038129184cd7c09e9400be580f01dd9e5eef8caa1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

