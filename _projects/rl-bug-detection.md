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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HBIVOBZ%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T201051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC6vHswXFyYoR3HTqkbF7TtnzlDphXqA3Hjzb0N1CApNQIgb4x2l5G7bk58RWgqK22L6z05SSrPYffCH5ZFAGdYb5sq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDJ2jg6YFb5rmNf6ybCrcA1AucIKkkjOmmbdUkLXMTNA0%2FpBIKBq13Z%2BqdRT%2BkURFLntSDY7z%2FVYl1dd654SN2iV1Q%2F9zgqGPEnj4SWRTBGuySZ6jvrmWpHZ8SLXCY9e2s6HegO2xXmZCd%2BZlb%2FoXuxHTfEnp1tW93LFdJvCIVrgl7zn2Y743tgLwUe1Q4T4Aqtb8rDZls%2BrNxB6k5YJs%2BviijX8SxKBhGDIK7tzlEf1%2FC1oYlKhlWDcu6ryPTRicI5Q8bASxb5vvvKrjkWhbO05OJyi9eYrIr2%2BHfd%2BbR68y4l2DreYbviU6ffbOF6%2BNEgJtckkkl%2FkOaQ%2BQRpDFxLK4O2mrN%2BjWetf7yt8spyGSsVPBesaoFDJ72H2ucp8falf7nlyFLRDYCjO4B9C65Aok7o6X2xWd9MJfmumfsR1DnkAPd0LBRa9Rm%2FzU37acfaqAmMXikI5XCwf5LShFhFp%2Bjw%2BGObuzSAhXAR5SbAiO%2BJRgUQzRDV7mLjcF3iN2w9Z%2FF7nkQXQ1mGpU3fWDZ1GIygBt5QF7CGpxCi9K03Ag0RCIM%2Fy6tXODAKXNH00XA7FUWcj7ylxDAdeTN%2B2DCD3WYyPKgHhl%2F%2FmhVz1yan%2BqYZZtddloWDABdn8%2BD1VAxCRHxCZSy%2B4TyDRUMIiJoNIGOqUBMZ1vBJLBe%2FdPFpty793qEUSLUwc9iD%2BAWoenKJF0ZDQhsZfyxpkEsiNQQ8jm8JIqCOOm0PblQWoyYjBVJguMX7LKqnQEeIM95t7BCiPD9fOwNch5UoOzY50fB4WWh%2FpO2sRObN9%2FGwBK%2FtMhjROIepNv%2Fhg2Z65FNdkm8sb8uDccd68rKoWMB1gDxOGCXsYT15Dn2qvXy7nANWa1ttfFHnzT7ZcW&X-Amz-Signature=d3a7c77caf6565923d9b11319f1b6b1df6bd276827e40bba1607432eed764a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

