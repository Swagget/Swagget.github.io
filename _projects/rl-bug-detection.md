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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN5MJQ4T%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T094010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIHCuCFHmtRURKkuGAitk%2FKl3jOovSC6Yv7vM4%2BHLfoFIAiEAiIn9YPRnw1h7OoN5O%2FQXDOm6NJCRF%2B13VSsKp%2B3FPwoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAZj8hG6RmPmg7u0SrcAyIyy6hijDndHRqkgmQQJjb2iqP87eF0jq5hdPk3moE6bWGRDlSucmGXRxzfeTq1hXxTRYXzWoL3%2FRye1kUtV4wW7s7HlbGQ3kOXMV4YnW153hkK1ssJwHMDD%2F6%2BfliBK7k%2F3rTdr96N5mDWBCFGP4l45I9iCEnWz%2Bt5Qic3faJ83dJpLYfR1kHhreMmEhI%2F7zaogLVLxVwcYp7hu88lbF%2Fwoj9uiK9EmdlrpTPREkNlXDk86e2tGIBsE3kvM8AtNcoJJbMab7XkVRgapLBUjy1rUM9rjRZY5DUZYrAOkrY2jKg%2FN1%2F8aQEXEoaIhnZHrJ7XEz9n5MfgWYjXJ89zKWt%2B5FXIj2jbJBM7aDLYPi8sH5mtHVQkssNjeQTQyHR809JB9O8fjwc5p%2FOZAtsdpCCqNKgUfMHLfKC8fgzYbB5BhY%2Br8MN%2FXWjWrtTDOWVS%2Fhx3hDTs%2BpoKvN5MidHBQJ1UnJs1ueuFRv4VciO2uP4KUzB%2B2xJ11k3eIk8Ss7roZrF5DIqX4mM6p4a2vGvUGZw03yIGqQtsvEMcpZ2droz9k7zLg%2Bk068jPm7dIUbLBDrYPi%2FX1xsNEZ0M3JpVBPFoUz7ufol3eDSRU7%2BdrocaxMRcA3A4mJ%2Bvy%2BQABMM%2Fv79AGOqUBo0inxVgde00fXUR8l1gltd%2B0GsUfFTskXYYd9n4TzJkK869zF2NsWGBACLrQQ1x9nOus6ioA6vrPY1o0NPZVmBka9WzPMBjMdVWWskupg43wDf9YBRPju82FzLRJ6vGBzEwX7alMmrJG8SBV2BCeO8iasJrh3w7m2sNQuiXuo1iiJhiE8znF%2BgXTwkPxSfD3TqlwAVgGODJ83NShT2vjRRejIpWI&X-Amz-Signature=76308112cf16af17c843c53904ebe5d501cb313e689d57d1f99bf5257e9b30dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

