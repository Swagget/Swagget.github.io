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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEDIPXMN%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T184512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIA04T1izC86Dm0j6tngwt5D0ZY8zuGpXrEwSrfMYq6m1AiEAi0Y6uuSWRjTB3IKI6U%2BoFr3d6kwcpe0y3VUZCCDF%2FvUq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDF0P5jDB6bhJtLinoCrcA6oDECq8IdeXFrulv3fMMEFu5CZOdIv623pHFLGnPcRhhzbO4Y%2B2%2BGgROvdRRjDsApm3TWmCdp7Fai5sIjiY2CXsPe40vU3yH%2BLpuQPG4T4LuGqVH5KqLaK0AlE2ZByrU%2FC04ytkKly%2FsqJqwppWgxHwILmYdROPd0okxFu8vSJ1Wv8SVTDCVs1Iwy3JfF1qnNYRTtGfKiQTAMfZ0QRVUHLRFzAz8BD4U8Il9DeZWv%2BFcpBErMGWDlPSP%2BJjZxdtyVoebEpOUWzb2zPfaVnXu7ZLtrqN7OWpY1N2cuCM79zsw2iD3cZyDyByF7eLYb9LwGeZV1a8l3vDjJO2tI8ET45iEmQ9uFu3XKDLkcz15qTIILT42CrAkO8%2BpYbeYjYGdSjKfyLrwqDMEdKJgGWpD9Pfcvgz%2BRz2UntIRrojQ%2F15NdRGo%2B4ALTCDevCoW9M2bEk6PFoElmGjTD37BE%2BuoiL3MhdbxyAr6nnx%2BOA69QJmWihPjEUn1PVE6cG5MB%2BE83s8ThqzMK1sO6RgF8APhKHTbz5hZ79iD22BEWxbjolbqmlKytiJv5RrpGnaT9AHDKCuwxBlT3Dl8t%2BX3oNlUMRnIchX7Zi%2FMYMG%2BBBzZiAXGu5vk8BU5NL6zRdVMMzwk9MGOqUBs6pi%2FXkUduS%2FX8S8Mtnn3%2BOUJnsCO3DiTlfaQdFHn36lvZGIB26ytptnScK3bcrBleNEPH%2FwKdVxAyNT6Cnec1kb9Qtv7AKgdeYVRlin6t9uoJd73zzFUn4Tsk%2BxhYtyDKEOzCCHIZOKXpBwYVPVKROSRN%2Bbk%2FAex%2FpVhSVpdbaRpBLsXz4fw8jb%2B2xD72a4XXwbNcNaUx4LJ5pWnIIhfk0t8AE1&X-Amz-Signature=df303bf17e9788849e0d68852d02e76009ac597cd51c1213eadba2f659f03f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

