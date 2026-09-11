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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VT5CMYA%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T184810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxbvEFu6RvWwuA82IpisZTGuz7FLZlMGVdi0k3Kq8bSAIhAPlfO2G9H%2Fr5t0k71rXl0W4ISPMshBuONq5cl8aRArpvKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsrMaWkN76Hn59azYq3AN2B%2FgD%2Fcgj0GU41zmbfPFSv0rOk2%2FE1dLwrxlDyzOr9EBeBKVyzbMHxFq7Z%2BhHnywA4DPnFma0ijW0Vjd%2FlMA61hFlMw6WjRkw3OzOu5gQjRZWJ%2BPMStKBVqrYyGOFH6IViSL%2F1SWBMP0ppui9SpF50xzJxItMxP9%2BhCqDs%2BMQz%2F9z0OvO0qQETBSv0Pi%2BVsPYFRXbfnw6dzqav1gZBHzBLZV%2BxogjfHRV2dwLAUborZGUeLCaNDju2yJrI5eIZYJsvd2ZbhbEEtWMmix0F%2Bs6FFpdXVfA3sHwJbAsg2TLlCYa5aEvBUmksi%2Bk0Mc4ehGpnA0gFKoLyDqOJlPSjYfmTUqy2xrVxhx%2BYOLZIO6RXeSOOjLZaKLlpb7nMMdf%2FqwgKlw0lXlOuxbAptRko%2BSb%2BnrCbphum6DmZ4JqujLSNwsLek9CN68qhOgrDM8BngUn5NEHW8XXqMg%2B9vNKFSGo7iPQAaV43LUvoZ%2B4Glfqoa%2BBjMO0aIJF4yBnfYGl9wNuQGTl0wrwjQSOvswXnc5qIy%2F%2BPk4Rn%2F9dDcuIkB6ieRqI64QwgGGZaRZ7KI9VdVu%2FoVxMrDIbv4UYjWm4tFODZCCqPRc9ZjF%2FfpT%2BQQ5NsaTRKc60okxqwjYSxDDp4ZDVBjqkATioGrNZMFsRFwuJ%2ByKt8Os9%2B05z8keBkUIdsL0H0D1cpKiUBiifJSIu0YbKnJomgV19Wp2SZMiGcyhUDYWSSP3XVqA5Yi%2FJE2%2BrcRlAB%2BNvTYySInDWB3kmS0tDiDlDltx84Dw2%2FKv31O%2BFcQ5RTokWNTNDCl6PJPZfCYUp8wUZ2dNlPRXvRjoP365QJ31XCFbZ%2BimHNPWIGFG45VGzgtYWPoNz&X-Amz-Signature=a14ea2409126dc70ca76ddc7d395af5f3decef5cfac45e327a7908aa91c4478d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

