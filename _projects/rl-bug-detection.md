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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST3CYPEC%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T182445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEr%2F7hE9LcQJh92GbOyZRSF07IJ%2BsishgKLSsTgYuj7uAiABIqZ7gDpJyqmlNb8EkVCttNUcu3QW8Yw99m8LLhDAhir%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIM3xVC3%2FXUMk0wo7IwKtwD6qlP%2FT25qBKGXNwtZ1g0CfomHxsA0stww6hgZnXZN9HPyjVyqyy8FaPIxpkYMX9ibrc9ga4cCANGSAjtcM7QA9CBX9Bu77VwEtdMKRaaGpLKAjgPtFkGJEf8rejKljkPLNfPKw1OAwhH3pKkQBI3ZFD5rMdP8O%2FezDlPWHxHpxQZWg%2FYeN5IMqnEOHU8zOOrEpe38BQH%2B6n2eP73YY%2B%2FkWVxE31fW%2FVBmrcWfpRRwXtIE9Mh4CmWAGG5j%2FfStTKWmDt%2BtoY2bEDTHKErNxFSLYNM4GKhPBRFp%2FeoLE1redo94dTyHelSOp%2BoiJhsRvoTN0JeVJugvUEVFdx%2FlaDMFo%2BmIZ%2BQESePS1GQgnG98lqedLLKS%2BHzmwAhGhek9F51vUPnErBCakd1M45z0UCmI0GEqz%2BguaksaUnVR9KDYJSBgkl%2FDuEThB7RyV6PBlkpbwTBB%2B3ZcsRHvZCylgPROOFk85nsbpzYSEaltqchlNPBeomVIoReUMF4VotN9wx67BFipMKI0ChqkRLe6ynvu6mULqczrph9EY2pr8V9tkjjGXfXHUUL53HjL7MBzlRs9FrqRYjmuRJD1fUd16uA9vq%2FCJGbBlDU74c%2BOU2kom2yNZrpvghUMMkVmskw5dLU0gY6pgHxU%2BD35wwuUnRb%2FDyJKZsxp6qXULTws%2BdncRE2pVjePE5cPANdnvG69ZkSYOKM6gf4D18pp0FuqjtAfMJcNIoHIav7eek5KWxZegysinByH7Nq6ib8iTpFWzndmCjWrVzypjyQzSVVXG91Bgek2Z%2BWL%2F9BJh19%2F4uEvJplAg3YosqBSnjvWtsnxjBmhpK39AYcmvWy%2B8eUqj3BACUbOSygyZV%2F6rYO&X-Amz-Signature=e40fca0c15e2b7fe788af1865245a947b4c13c5ec51458077417b5c274f70bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

