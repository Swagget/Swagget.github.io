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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIXNXSJ%2F20260901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260901T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFv8k0fAZNJ7tK65iBstKCXITQ5mM3MpS7RHcUuvvR%2FOAiAYAvT78l3sWhf9pCkY3d%2F104q83Wd%2BXEh7T9tmfgvfniqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4O23IpQroiDd5MEKKtwDHQSYfYfOU7OL3In3XCT4LJz177wXl8NYGIcssBEsZLHyXd63db8vzi7bn9AXQl5Dle7Tyrr33eBKOLKzmwPPXPCI8XV3rVE08ew5CGCtyyQhhCkwwhmrw8VSMJm3nOHz3lVSsIMJ%2FJwNpbN8ySaLasoAODGwcbzeN%2FyVS%2F%2FBXBKvgVEfAOmvgAXM2SrWx9fjtuCOnc0vzG8Z6WLlqdVXIvi9O9ClL3BJXTQMOci7BMpRJ%2B37%2BLwN4ecCQkcEfNwvZHDPSaP5gb%2B9ZwF80%2FUGWdxIieycqQS7cYQrFLnT0Mp7czsRLBggtiERfL9dXFyR52Lj8J%2FVLkzPHx4Hgpwx%2F%2BIDvn3nsUtL%2F5noXqMm1S8T76qzf5Kplx1ulm0wnXmTkRId0G4EpqXIzZW5i8ma61g4dMeoEd5ZVGRN1K%2Bi5jUetUmEu6%2BU7tDZymA87peS%2B91K%2F%2BHTt2LCVIkbblCQzvDvf5QCC4prAt2IXP8OUaWqBBEUkI5if0L5n3pWdk9JKlQhja0zGyPVVFhZEzzna3hfi2waBQo%2F37h7aRv459bJni8mNJanXDoUZgGi28k8lwYhVW%2FErTs0Y5IqxAyP9F7ZXircX2sXHjAV6FvrogRBAW9rbuNbHN1pwpQw0N7b1AY6pgFomUT0yAlBPfqGWGLBpwq84pIfpcjByM0NpJD5MLOV1HEjfvAsIDNdihDXtJNdF%2FL7oKT0RsG3gK2qa%2FeTiOwJ9pEe2MHrtT0KBeEakE6eT8b6G4TcYWwsLuH8o5bJfPWleds6Ac55yUbnA3v3bg90%2FP0e60mf5Q3Zyc%2BgtFNK0799ZAe%2BYzWfTbYDAI8Pgn2eDvkkfbem2QRIS9E73OWMjJ8S825q&X-Amz-Signature=043c297cf281fa68e5610d292a4b847d5ae3fc8cb7273aa3174227df5b963baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

