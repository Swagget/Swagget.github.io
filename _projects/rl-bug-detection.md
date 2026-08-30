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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T66OTL5%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T214152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET6KV0vrR%2FZNnsANGSrUprgGF2CgutHyJkkqF66AW6BAiEA5JgvwybWURjAc6xkE7OMwCNqs%2BuOR55f5z%2B3K2aG9ygqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTJXuY8YMfPpiHqNCrcA6LTmlw189rwy6UCPPlJbDSCSmQNiw3b5FWlw5CIYDPD06L0648%2BgwbYZHoTB0HFDfpEVIxeo5PQMOPwy8lX07KSIBzVXtbg4hzF3NERDcQmZog2%2Fx5OE0Mbbz27kofrlv4S9q%2BGOb0aik2TduCI%2FQSBjJCS3IrYs6gnNOzXscXjNfGOqWjWMXR3pA3SK89gEYkpoi1MIpCPQ1rNyY4kBLEumwpFPYUPuKoR8NkIyYaEvCJtX1%2FPuw2l%2FEcb6QUWTXycejVzkWR%2F5wiPY01sZSKx5W4udOUkwuu6OBody%2BH96VGl1ixK7cNFSajnjFeyvTunt6Rlcx6km8f1HMKMdlANtnI1gGqW9t4kbR5UNvl%2Bnn8vLfM7QFp8hafNSa6ohyOOSr3d2%2BrHvy5epE6upZ7skzcZ2290XBFP9NSfU6pSfXqRFZBQocYiqIzWgyfCjPX0Tm7xd0lkRa4vABcxjkfNWB0EME79wisfBmQa%2FV09iqjuKyqp28kR%2FRiJhv7JnesxaDGrrZcHxeF4%2FEs5c53mAVgbBrkhBkQfrkdZZ0Syj%2BJynvGafNm1qnhSd%2FgVbxfJ5i%2BnHb%2FrB3JafYZESGKUWXLuXcCL80BsUr%2FyNUSY8CKY2MWDxbjiaTuuMI%2FE0tQGOqUBL2msNw9l%2Fq44BLF9luZYkURsVh9Ijqn89APtwzBVSK8gAYrLKCCPj9AZFZ%2F8R9leI5Q1l7lnH0tAzHypu1r9c40FMH1goQ6Kp%2BBFo%2BUiYG2EHz%2FiaYp%2F5A7SvrK8Tc6iABgGsGJMus64WcRk98KTx4VlRYgByevDIdcxAPW3MEEytQ7oEm1ci4VufyDnAINbYac3bBl8i7C%2B8bk3O6rBJS52M26O&X-Amz-Signature=2966b664669b37a4f0c1528d81a39c4f87b13a0bae7b98e8d84b7076aadcd28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

