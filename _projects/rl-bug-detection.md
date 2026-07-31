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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWRLU45U%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T215428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7jsdvgHyibPPH4XYuKpf%2BzYbpEuX0PeVc%2BSPIxmVNEAIhAI1pQg4Tv8kjQpIqVhMSdMbCMk%2BRYWWm9qhPlTKeUkb9KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCzTqU0BRasttwgT8q3AN8AxrzuJt6sFA49qNaT2i6jC32Dp8peRqIHoH7ZxAZ5eJudIXLjlk8MwR36LwS%2BlD8liQJPAu1FVENv%2B%2FAr1sNmMvDC%2FhUmnpbHYSBJn%2BY9SIJ9pMyNnLYTZPTW0BVbRdxGsVXljPnw0vLrKG3dVTjKWJ%2BCIig5KdgK9uPCA1%2By%2FnPnUdlHeCwtCPOvnxfB3I%2B4xBki1yaomED19Ft%2FFOXKoK0K57rZGho97TK3VQ0Rtsf4nydCq0bgaks53VKP0nbNP%2BjmfkWFAW0YYTIxHNMgRplkt74SfgD9TxqO4%2FB%2Fybw%2FYgwNHA6%2Bbt2mBWm8EUcny36p1WvzW7r0GBqR2uQv6CdPttX%2Fa1%2FIY0o8SNqHj2m5F%2FzExGqFkj%2F0qttyIPFUSOqM81pSFdlQXLgRoBwOli6HEZ9TElCOXdaeGVGkQ82Q8DecaC4l7amD5z82P4%2FnN%2BJhtKENeWfeux9XvJq9zjthLdwBkRlIvbefZ0foC92b4CvMNP3FRURiFVN7%2FQ9GMFHFQPsXeKkG3MNZQGtDlZsqKah8xKPU0zeXCS0bK3bAkpUEBPwB2Y66PjSnf4aQ9jh%2FnvdNtEecUlaZerIXZK1WpVEfGJgta2FOh5jVtzWzyISqmRmcWjrjzDynLPTBjqkAYTcmFOgTL4QqxL0MgFH%2Fhb6eKjZyQpS1rgMyTfBTfgCn3NXHRRC%2BqsrKkeP6X7jHiymwXdOvACDAhAkBcPR29kgpZ2P4a9aFGffaWCQ%2B6VZ4YRH7xtJ1qUjAxky3oOeGsHhSo3S5X6V9VD1lcQa1R01vnZDTC2GrKgDLNnUSoamxMl9%2BNRHcoE23FW6riVN0x37YY5PRS1rh7Nxlx1v9cJLWBE5&X-Amz-Signature=1469224acd67f6a988b6c2ac003784c685aa2c7063ebbd392a01fe9923f141f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

