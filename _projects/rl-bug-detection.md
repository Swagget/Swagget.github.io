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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XSX35CJ%2F20260827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260827T021932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBBRlSFynHK2l0X0kG5eza%2B9PubbF3CvCvfzReZIxF5DAiBLSCahTNUii1PZmcDVkOPCZH1JV90R1D%2BMDp1dEsB%2FrSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMXgEY2ObQRpUL0qPEKtwD%2FkWTquHsz5OEWGpkWzQuklsjFczMFTV4rQa7VlbbhYL45c2028%2BeBb317Ce3eDKZOF5cqlk15nI%2BEAFJr7aSUuXjTHWnb1mGzVIybZ%2F5SpYPPWFUYDvFdpKIm%2FBpT37UbW45ppEP9J1zGH5Vmhtf9uHnQX99hvVtyf1mDaDBNxexJ43PAGm4Os%2F0wdKPF1eqcRe3XnyGVQUjvZE8sE9%2BeGDPNPZel8K8ekYZPMaBYsYeQ%2BPa8B9VYaTtUaGyXd4GFDDymDxJRHWE4MJdlhG5Y6yu9sPlcx%2ForqQRPbqnFQbgRNWIE2TMsYSpDj50IENfLYcLH%2F7I9UuzuLDELCypQjSvySOA85da%2F9mJx9KFobo6RE3wilOD4%2BlO%2BGhnMsrMVNJFVrEoHbpZilCNPbK1SiszcIzO7XSJaHZ1LDOnsqP4dQXihvdYzm2%2BLl0XsWa%2FN5vZ%2BRYrqNCb5mhLZCPqEMacn2ahLr%2FBqlwFmP9enGrIGJEDpAsvSzT09nZiBJg0kVJ0Z7HKeJutK57f2rXNrFBrlDGlyKsqEwe1Cq7T1U2fyLH0iisO2TeX0g1mr4FgtXe3WrwecdpPtRkjZnW8GVZCekdy8KYA7v5YtkvXpBcRj%2Bck4XpFUxZ4%2FVEwtLS%2B1AY6pgGHQJi4605WzL0R%2BKm5mG%2BuenFoVZGvlBWo9mSvWvDY%2BKcuYblfv2dstP%2BEXVT8tn7JDfFrYFrWOuEaFEhZo923bsh0UhK8JGsLO%2BWtO8t8Wa81sCbe3aam9fIqgu3iatAi%2FnGwUpdBKeclkTzLEc%2B%2F5GNfhNYKnQATOrnhvMR%2FRPwN5SvLiOWDd20Lpfy4V9EBI2SMbspxtAKowbs11jWfUj0gONru&X-Amz-Signature=e5d403b4593793fa523deb757ab7069136a3091ef039713e79efac9bc12449ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

