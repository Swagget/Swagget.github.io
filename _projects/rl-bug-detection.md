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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZNYFZL%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCpAfywnk61wJfiwyB3xYy2QX8KTlLeJl7glY1BTn5ZWgIhAJyATXOHFOGSwEzqO1uuD6FfZSi9bD3EN0sbnqIyA%2BaTKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTNiVRGLlaz3KwzFkq3AOpz4Iu3Xai5jI0PEDPsjtGPZn89r76Iu8YJkQvztaFWd%2FXuayttU%2B3Gvs%2B20ME5Dh%2FcPmc%2FN%2BdMKWuKiiw8EbIFUzltu1MfyuRJkkrCrHlKl6NSN8gcICxItAr45r4ZNsi%2BGXuBVuLkjvv6bVbO8FwJWrwaXbvicmnO5ZXBBMH1jzxJaCYoONaC9q5dbbl51mo5yg8f0gUY4qv5wMMDA5CxnhnDeTH0cVd75dHFlwZA4PiwyAOEvFPxALJMXSF5Yu85OYbi6eZtf7qqbxtZ7Hn5L3yxGaKUkQNvvPThuaVWiWcSjCCZ%2F3zcjWKI1Ldi%2BpVIjgJOmmmx1Xk0FyPVe5Bv4FmkLjT0Mdwe0TVQvDLQ3efvOs%2FsXGuZPy4V%2FuDz7XuThWo%2FNxEG1iti1a%2BxSH6Atpnhh%2Bq3W7ThMVK24QwriGsyyLVdwfGf%2BR7ZmJDMQVTubAVFTD5JvZcbZ3TjtIXuiITBfzrASgfRPVQaAqoe4v5A3uhKCX9KWE3EmDRzUfXdrQvlXmI5VR%2FE5wV2zqaOvmGYN0wPpdlWoRM2vcgVt3Qc%2Fcof%2FYd%2F0ZfbHHop9oODpPR3DGH%2BSQyaWGyRke9ug5ObaWIvp%2FMBigcPj304nQIC8c%2BiwWWETQMFTDHj73TBjqkATA6ZMjha183iAEqts0yPx%2FGBWn9hShE7RnXGRl8pMMm5VltzvvlzArUyE5Um0Z8RdF%2BGmoKM9a6BVIm4vyflZYnuPfg2T8iDpV8%2BEfFN1bly2CVLT7svbHkwjLzuMsl4bA%2FWQSgkESeOhv2GDHDuIJ3uUc0wwN8JkYgVHjjpd6RZMqzKPdQZNXm1sNl9YRrZpAtIut2Ygt6a%2FkdVIkUl%2By%2FXsjd&X-Amz-Signature=b8a9fbe76281237708b7c2ca8e9fd7bd76f79b05693467edea84397e39b22e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

