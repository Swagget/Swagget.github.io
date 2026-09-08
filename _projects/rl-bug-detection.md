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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L75OXEE%2F20260908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260908T152847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuWv8PEsSClpgwoemKaTcAD0kPLS5rzbgtyk%2Bx8FmXfQIhAI7k%2FYdwhAy3Dx0hcEbRLlGZFm98ldjhC9hHi2H5qbRVKv8DCFgQABoMNjM3NDIzMTgzODA1IgwHxulm%2BwPoY%2F%2BhA80q3AM7lOOjr8eAJZNZBPG5KZ0wrl4EBPn%2BO321SE1osxv9rACaMcXaiR7U60A7aCSthqXlc1%2FcIZAkxk55p0JARMLZjv9ypqLNDXMpKI3DUM6chX45YT9QIbieZa3zRDiW3aN3j7Boim%2BFOy6ET0%2FD2%2BTdADKnwsPLHqk29v3I%2F9tEEDFU%2FWv4makNDEbd%2FOT8%2F8LoSQVAy8KQfne39gqYa7IRQXXAk05R7L8pLIaY6KYryddQckqTkSf9LrXuXNI7Cp8OxG0PrPgHrqa7YbV5Dwi4ejc5SiDl56kscBRT2r69IAPXdsDXlPYKJE7wIEVuaxrYr4B5c%2B9QNBLfAj%2FlUyM4Lmi9aaPjN3z21eHsrQ%2BIzpVhKnyMhFWrq6wQWRg%2F%2FciUpnu4OW8ScrATYFupp5TcXxpdAYYbozj66UPIbqfgYoMnxfAmYBO%2Ba5LMDi0Cfsv8iGG4pFaiTwCLCur6%2BXSjtoGVcd46DogRZTSM0Qy36iahat61Iw2Hb%2BzxFAMMgv7tBiHTu1q4WXq3gy2ECFZiAOPGRFFit6VOFOAyCduLKpXVih%2BXQqBp3nDI5Vri6G9i0J1ERpAtKbD10X%2FxtwtWG0PDHzIyvR%2Bw%2FYMXQm%2B28%2BTSCVAm%2F2wSiLCYkTDixYDVBjqkATqpLHAaEQZYViscp%2FQZuVU7sHaZzri2XsnRmmFAljKQT%2F5YjGwRNG%2BoK39BL6gAskGXLCGBWboGM2%2B2amHJccCKxD50vsRQLSSYfWvzmZibfvq7%2FlI%2FBdyFbRstCT4pQ3E9NceCg5Kf1Uq%2BuAlwGdhak70HYaHxtrgaBnXW35gzjweqUdvIpuKaYZZWvXiOp80p%2Bxh3HXromFkrzeUK9IZlq%2FnR&X-Amz-Signature=166bce4ceb8f69d8504afd2601dfd689704722353e0d81c423a11dc5dc59ff50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

