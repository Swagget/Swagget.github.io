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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AYIKJQ5%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T124902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN35RKkSy1BO5XPFyzeaKiokO9BwmMbqLkqIQ3wh9bAgIgeuqxtT1dEE55FC9gIg5PHAbgcg2AKAMXEJzLSDTeBS0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf6vGeXUVYolWW5wyrcA79kfVko6Il1hCJgXwZ5Mvm1Hx5Q8S02tweQRBZt6EKx9aPuxt0uP1ML3a6M2yVm%2FmZ%2BmEaDoJnYbykBJVBvXMlRQRDxuv0XGMnx5jMErxLBHSIteBPlUJK09fWEJutu%2FO9NDzou6lpYf1XhHfm6wQKEv%2F7XoiyZirH2vDo1PNFfZ%2F9DiM4jPTJRFCwBP4nTbiDZVwKSjTTaBk2%2F%2BqEhC2EZxPH%2B9JUCh2Dxqri2nuUlntIFAKSeQb8bQ%2BD97QJL4TeOEyFSE7BKWAzjhkqsTNtmEnze1%2BxZJTC2b2%2FIxHE7hDJtt%2FkUO1gwyrFeyZMSzxfiaG3mwEGZZq2dUmPh0dsRHPRqSr0bVMvE2PU%2FmvBacpkHYzTE4e9oL6Mn0cu7gS7sGq2L%2FaOCT5IZJOYZcg1twoN9KUfEOmkixlhXnwQBFnJMKc0Hf6e9N1ay%2BXgSeRumMk56mU1tZEQ5VGKKysR5Ci%2FnCklesHyGEsF1sYzfETkONlT57fCjR1UQeF%2BGAW8MsNY%2B0MF72DFACgTS7yGyjkcQwdPnjZ%2FXu8prE95CIwBzdjZwv4upL%2BzDXWE1JxpPLhbn1yU8ajSl%2B78IATrbURF%2FdEhs7nuvfyq04aI64KIFqGBOZvhi37XnMJj4ttMGOqUBtDN5zBNQYPS9b1%2Fac7My5H45F4Z%2BRRUgLr5Z50fYlQSWR50Hj7Ug0UWVWQA4QIm5LjVFhkylx4fw0uLYehCVWBl7ycT0DtZNAHGh%2FCqZuLRhdTCI%2FRQ85iqDcdJYAnnWbK88SOlj8FiyMnrtZ4voVy1I%2BqcVOrpzqN3HWwFMWXJ%2FpfvRXeBPLW9Qlk7XNEYNSofMIDDz4Iu5%2FLQaWBbF7ArKGIPm&X-Amz-Signature=52ac5c1af2347347b6d32aa3c222162add39cb62bb5eb536c68b39f182d58cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

