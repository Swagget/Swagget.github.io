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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2O6KC2%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T214142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDPdPq4KhTIm71ZzqAk0%2BEoaXAcpc%2F9KLVCRn%2BTf1BqFwIgQQsjhMGPd1EUonQBjVy0nbuoxXVwq7ym%2FTIif6wV4JgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjREtzVfM0u8KE84SrcA5Mr9eXFZ%2FJWRdDW3C%2FvMVPO6sH9%2BYL0Qoa%2FSJhmEk6BhbNWVEEjEUILHxIWUGsh9mOT0j%2FN5BbOlnROXx1a%2BcZBl%2Fr79%2BvJH7kT9H4i94jcEh6glvBh%2BDR0mI%2Bl9QTEVtgOiOLHsYHwzyj9STjRId2efT8SRJRzbXJFFmkxmvgZaisLTEn4VPpugUizLiEIAwYVoTAW%2Bq%2Bxnx2k0KcF4ZlB68ZPodFC2lI1fzXg3WYHWo5ntDLTjtDb4eFszTjYrhj26UGFU14uNuAygvSoJ03axGohPEgYrt4fGeurZxX2zUfftCxbe6GBsa8S5%2FED%2BSh3eMrEGbQWabfhfQsBTTBhkf%2FOXDIFlREQ5exg4q4mfpBX8FPLJxEkrFAsI1wHcVQkN2L0M1D5c4A37Ap3KpB11rsSo8yop%2BNDJKpuJnoSCvtXwuFKQ3jihUAL%2FtCjWcWaZD5WTVTK0yYMgKwJ8P%2FXq114MjEHnp8s%2Bb6fssrGj3NaEozqHW959OhZ%2Br4oOp0L%2BPU%2F8qD6wf50SCOpj4mfDnj7wzMCE8Zj1yJ%2BYxUpiW2FvnPfrxYYfy43lnxe1AKA2SsLNN8Kjyl7DgyZZ0ysJvuC9YN%2F8u3sdn9lMwHZ0JZkEMQW3g0032LeMPe4udMGOqUBQA9MEE3qbuxGO1Fju%2BOjuD9QdcpSYrhztZNa5h5q7E%2BJpUuqHmadK1B0jDEopkIKlgI8%2FXiedgP%2B7N0%2FWcWXQOK%2BOoe3nQyfiFZkk3zFI6Vv3kC6GLuGn1ciZwJDfJ%2FW5uD0Rt6YUJIJJuTJszczJXZzLf5uL30NjvPNXLgXTK5JIM%2FO0Chl8brxK%2F5Y4%2FF176lIzqCzt3kqNiPVBAqvLLl%2BtgB%2B&X-Amz-Signature=89dedb949499ea68cba6337a863a4d13a73d69310d8a0be5734e025cccddb2ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

