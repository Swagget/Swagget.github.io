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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYGYN3I%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T012943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFDb3SjFdxaGmWzmd28aSDm%2FFYspoN4ZCBX4jp21eHCyAiEA3dRvr2bep2%2Bm%2BpE2%2BpxGGoP69oO8VwLeVq35%2Bi8R0usq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDwc9wLIAWIwWbpiiSrcAypiPLjxXTYx1myHodWhRxmZRIcZDJrNCOIyNIEPhlyAgrlcR4AWUc1fpM1Xr7lKoe0VYBUyV5BoqsTTNkQOMnvhoC36PtDszn8sqswD%2BBG3gbwMGegFSt51g%2BS40LxG7aLVwkBsROInKDdA6xZBuZdugaAo%2F6vV7yp1rPLoDsSdTFCGMTEQ4t%2B78jf14oS8IrT0gxthHKHUQbDUdFYIj7FZ39ad1BcYPGuOoAJCKWbQ59zZRqUIPOoJNv8l2Q%2BMlhpauUnmbh1kxfDQ16Slv4tLJFxDIxTwYUuleEdEUx6JnI3OjdLKnWv98vGTN6qrMe1GsrCL0SfhVEQZBfYdcXa8N%2FYVNA1Ii68hAgA2koSBEW9296v6JS2eHK7nf7lz88JLPRQBmyxDISS65rekNdlujfk0m9PkDQ2rL%2BttIA7RFQWqFvv%2BLz1%2Fr9IjDDFtyI%2Fxdl8sPs85osUfWDPht5UL1tNiW%2Fca4mOm%2FMsknWK16BIOl0dnM3LCSGsL%2BuzkaCzepvvgzeXn%2BqKJ2rV3jbUTd2EvbDwWYCIU1D5PwaRD38x8YHL1GdGhTx1bUVy%2FqpYgeuVPcuxRvFklelQQ61U5%2F656jHaYyKQ2x4dGXC4gg1wVVKP%2FmSxWWkJ4MNzGmtMGOqUBE21n0GGxtLWMdfabuYL57xRjysiz0%2B8COLEI95R4sIbfgRBmdDZD7N5kYdDFxkpw8E9jkuSoFc%2B2BkkjUrPmi8ivm%2Fq0dgjeB5Gz4GlWcWdd%2BxLxACzJfoaqAJ3xwsUFW46vZsL0%2F%2BvjEpQ93VMQWgmqCTItsJ8s1lFcHhmsKjxlCOPa%2FPoI4FYN0vlnpRDQ2BMpDiXNkxYdU%2F02DDZrnERcHXKf&X-Amz-Signature=ff2d3c686d3826fc5d6e335ca9f7d690cf41ed39e8208ebff9b582844f553344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

