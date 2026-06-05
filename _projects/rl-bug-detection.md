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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66VBYDH%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T000527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIyAnWG%2BVMB2V1z%2FrlTqIGF%2FDsksdG4431DOFdCnVH7QIhAPQVJP7qfTWmRhs4VMjM3fzcqSPlDUJ1FPBFwVc0Uke1Kv8DCGAQABoMNjM3NDIzMTgzODA1Igxzcch%2F7By7TsuZJmUq3AOuc8wF9r06EX9FKbufxJDi9ez62REaDYJPy4gPIj2m1Ob1yuxbZeVDvrKFfgcFX9t0cfsc3RjQaBS2Xz73dC4FVRb693KY8pld5CmBXBohgD87CtzNsPghL1S68y4mQCw89xpHcP9Neq0htH%2BBvH%2BtR2NEO1ITEo%2FYTK54fmn97FrEWncwjJ32ERl53EC%2BwSFJ9GWvBf15wb2qZHtbV5qoBnCR80rIPIStBYp1QBedBGJKiTdvj5fMXLt8u%2BNjdGJvWlgu%2BC7DVei0GeHOU0%2B%2BWagp%2Fnyx%2BOir2fP%2BywoNFUK66FLqBmlcaNaMZR3ZnpuEZam%2Fj5yXGTqIuNRZYPNTOFegiSCybqMeJb4Bk9vV%2BQEetGYkqk0D%2FQKQfaNPYKQKlDNgdxiV7Co5oQB9E%2Byyc1DL3UBm0PhJEY7%2BBKrInI1O5L%2BDUtYMA2bAalABYPhcKxfXMCgkaKA3wvKypjGJK3FZOtCOmS0FSDYj4s76mugTJIEx8mWjT0zmC83XioW52k9ukuomO%2B8j4GjbCAAmCnPYHkjpT08X86x%2B2IUlMhLGYL%2FutPvrh8js9XbuTJV8SP8sDLDucxD8ELltva7HKazztyO7fVbtwe6oXF5QngQZM624w0JGUGkNHjDT%2FIfRBjqkAWaY6Dt1xvezVsjaZnHc%2BxybE%2BjFbJ%2FJfVFO6aBvkYrd25zBnpDSJOvhp1zJx44mim9xrRTkotrAZJjqk%2FCvcUUlKY4cIXO4PKTqnaAqZ%2BIHN1GPscPAJnPP0SEvpJctjA6fYZ6ZhrEVpvtyOzIz%2BWmlDDfbO%2B%2B9%2Bbp%2BiCBCiX9Z4oc6WNqfJJ1XyyxYXUlNzlORFKYgwyPyEzGTBu7fONUF2B9p&X-Amz-Signature=21c637285751bd124265399da467e241939f1207943fa17c3454cba717762a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

