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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQSTZZX%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbAXZ25OqyUxmF1Gr5wDAur8QGv0x%2FKaxn%2BAVD414Y3gIgQ9xYfg7peB2czNXwBbuhLpGXW9OC2zofTGnNaPzjocYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHIeE%2BMjNqPhjbm20SrcA%2FQ1hlgSPs%2F%2FQW6vd0GMzLKWDlde56ErNFP3SSrzXKfUcClJwzqyPVNXmPhd5xJkWlAvLsZcATnFsxHGlL8HbjYQzcVDDWtBfbKYyhGynRnbq6i0ZnWeZp4SrjdHDAyRymngRa0VtnQ0jsoZiP6I2ZYgsChqJofn9QLwTQtRZnNzmuMotcscVHWnsk3lg9rVb7amvdy2EXWc5IAoUdb0efcyEx3c0IR7m7d%2F3HMREBRxFJe%2FQHU%2B%2B072n8cUWofYKg4W8vSOjXV5VMED8YOUHV7g1M2dU26HRVT4qlzRJwxAnJPEk6%2BfN8jhadusm%2BYUaSEW6mmmFULeXAh8t1yXLGYrrLW9NTWVnYnaHFy4RAz4Y%2FG%2FbWfZ%2F21rds%2B3W5fy6viMewavCl9t%2FqeqglguY4lFSAY33Egf6tt67AvfRc6l4dmyNxXuoNd4Briu17rKsbwvwKZXLL0z94gC9oFcy5RId9wQ%2F%2BT0qYxZPQub932BQrO7TdOjViMPfRw5zi3P%2FJKz1sqrkUK9G2VpPpm1ZQYtt%2F5iz4AbBMeXVBeytMOn%2FJdTbtJ%2BOcGeIum%2FHTeShsQNDFLaDh45kpwla%2BTaDpQy0RSm8eWYr1K%2F7o%2FpXzcFX2Ka%2F6OhqWKSV%2Fq1MNialtQGOqUBfPO6NdlP4yxfbFYGBIjBS2mhBiRV5aXi0cYvhqT%2FmG7VQbvmDo6RrGlKII0PVUJta7YW76i6Q0p49f%2FGhCt2j9JqxcrD4E%2BUSA5vt%2Fr51u9%2FRRHDTFvas1VN3yZsrn5j9%2FpiMR32hcsTkpJBs5L1vUXpnEwab3YPY9jELh5E%2FbF8v8Ic%2FbdH6RnthhncVzNw2qFVBBbQI8WBD7Ncx4plrUJ7AudR&X-Amz-Signature=58444ae168c1bb6d331613ef281c7110ea95c671c14d3d3e3712d56fbd1f26eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

