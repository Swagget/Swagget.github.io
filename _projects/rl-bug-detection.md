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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MX443SM%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T160559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEogjyb9PFDQu1ZxXsT7Kg%2FRBABl3e1vi5epJCt1Azo1AiEAme7v0kVewvXgCbSX%2BveayAGD%2FWLFa3Uvf1EZb7QAn1Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDNuzNU2ZETFwGLcqsSrcA76VYGGHn209XzSOOf7a9sBVQwROdDCaeh6PXntU2lXs5fadUKPET7ms0l8Y%2FEumKg2Pfd26%2FsswbeVmqIkW0SP%2FFrX9atyLXEOz2rSA4w6aJtaetDfDLqNr97of910MSwZ9rzD26EfbySVGooY%2FgJXLL%2Faxql4K%2B0MgL1y4vzU6NztXoAAceqKe2%2FEUirFxxjCRHKwy2uq3Cemz1tmBAlPBFXg%2FNWLDsgmnuxY1hHn1Oi81sEntIGz6DgMEX4gAr3DX3qzv5ueSE27PsZnaW78dKRsRbTuhMdabwyPi6umk2cbAYZXxJi1J%2FZN9%2FOxvpMi%2BVZ2nv5PPigSK%2Fb7HyT794RnDjx2i%2B9zRbTYMc3ujXw9ARl23GRACpCjNEMO53aZme3ohva%2FSyfI4ApcChWBzaJrn%2Fmkxuut6%2B7DxVAiWqCTBWqautAMySiU%2FdX14m61rFy4kDXW9d9muX6mBmBpn3Kz11Tf22YuT4hRCQ5G0TEQh3wdtI9OhiUHNVtGaVoEgBZZ8wBSqPEefe8TB%2BOUSglTHk9KH9fLpG7lGBmyPyO5PkVGr7GZfy78aCMqxk6f9si1sz1cSdFqf4NHEOkEijm2oy67S6zQikjlLgWpRPu%2BcMjo%2ByuqsdbAyMMKV6dIGOqUBZUBx9TlmUPm75vyiuJIb69uWQdrlvcX9j1VKVv%2BXLvtdHlCf4k7xJjWJcQCpbdZK9MN22U3RlmFJbzdoJ6p3O83BC%2FgA8ZyfezM65TfuAxP%2BQdT%2BtcJrm9purKdp%2FglHM793Tmm6UXz9Gg6C5r3tNiCb8gY0T%2BsuRPSphU76cgkxCMZ9Blsg2hckMyKcXsbmMq6oo7pvMbBPhJvkvLdnonTYUdlR&X-Amz-Signature=92b393a7173b74ddc3c9088616ef8abe7347dea9371d9d850a1e20380a7c9dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

