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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SSXYG5L%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T185308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDSNpQzH57FwBdNy9Mz8p%2FF%2F8%2Fd8LyRTxNho6l%2FDpWuPAIhAORfNGHYNubj18vQtdW2k2Jb8Ab2221yvrldGw0dD8H5KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxnp0zG6vw8SZ4Sa6Mq3ANrj5EiLf1NhYCVVMk32vASxy4BOMkET%2FxdLl5puqMoelUD19744NA3T56s7VDFej5eQREYj14hWtfVuAyYRLcwHCljaEng7pv5E2L0z%2BJD8cnK9M3VSXgnwF4XPJZFjsBWX%2BrTt1W5Gy7JJAtCbuakI2yfEfOTeMLhTbUSlYGwo%2BuJgTRdsLhfJXWXr4rRC6bKQvau6UPbJV1KOTDRya3MadGecGXhRag9kutXA0Ts6CvK4Tny6X9PPxpAjWoRaETyooC1daZt9yFm1%2Fr937MkzCn3rnptVYTxTVXa2DBT%2FBy3kzURcrJ%2FXwvXxw69HipIghZ9dV5SW7a4xQyrJNlNVsXqsqhVVp8D1AJj9C9YCVSyYV4S%2FR7nXditzKoN4WsVspQY3lO0bgpPKS67dVNMYIMbMRuN1TcGzbcgiH96RlmkY31tQ1IiXBXyaimrBkZ8t2RF%2FceJTzcbyZ2o6vqiJAvbNxCLZia7VUtB5W6QYR9NhvloUOimm0GU19gWk8xn0yfvGNoH5M18BjyPxAerj%2B%2FaZdJZ%2FJdllZPUE0%2Fs%2FKD4yKyKp2Y%2B8hqrA49MAEAAVgjCYo23M8IjHYYRgrepp85gTCmrAdkLdvJ9EnymhNqaW4lMTXso%2F4MffzDgypTSBjqkAZFEASQ3QjFIFarecgcrcSYIZIJ4ucydLM3E6UpcfLMM5mDVsbvCzpUtLskZfRD%2BPrvORhwpjCl9bN22s8WdP8mxvbIdcfZBCkLBrhO3SX6i0h2B7%2BR8PSJKeSsWHlBxvUrXDwQsOEO64wYor7Rr%2BtpZvoGfGb7Tc60LMDAeSNct9VvHfdi5qWchLJVcOlxJqVjOmUQDIFkFzIl%2B9FcLWACImkZ%2F&X-Amz-Signature=d1d040ce2fa0e56c06862f6e80da279cd5a38f731e8ea93f40be14516b1746e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

