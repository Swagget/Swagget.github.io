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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAOU3WPX%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T222437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhlGOwLaPEFaqE%2FqDL2BFDEE29rzWD6Cf7gFFjMb55vwIhAOwXXiarjKbYxJOdHTgFXdcspUrFrNXyJPFepSONB6yiKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEoj2jGmoZKRW1tjoq3AMzWXYquswRHqAPnMvUENmPE%2BxOlNZsP0h1mIO7EVPw6UZ%2BY1eHu7Io%2BWSaRPmBlw%2B1WKzYKcXi9I3kK%2Fayb2Z%2BMfq46NlC1mQMs7ZCDDiUm3ZP%2FxIwD9QFGWD8km45scEKehF7lac3V24fFv7JMra23mHnLX%2Bu%2BPObgH2kYRSzRAI0MITtWqSDcwOKNybbNjAl%2BGkFHzLDXlGq3509ewM%2B5ZsTO4LaMiH%2F5FXT%2BoIYowiPz%2FdCMNIsL9%2Fgrtq47wSmEYbWJvneUhn7NqKsptUiluVi3PqmHzmwbu95TQmf5HE84ZXT%2BEAJZwDWsw13%2BfMxYstQXGoi5Atl%2FXjzgGoW9M4EU4MkwcaG%2BeytjE6meVi2uqlztZQlvt5wxQGa1TTOmYyW%2FeSSdSxpX5IKSGcqmo3YFTD78KYkNEVvrIDzV8ICJArEiVTbQP5hBH0uOSsjEsCKFNLqfc3GNJsyr7dbEvdCiPi1Cb%2Fd66%2BuBOUdOsNLWZJ8osQT%2FwZXe5o1YLmu8R6wFdsgsSFxFMcwP%2BFyY5iuEDRW7GqSEmhA%2BKm8KATp3APV0uBaZ%2BQU%2F7WwuBKojMWh79WoDo96GovaxTAx8p90VhIOR6BHl5PGzSdH9cVpiN%2F%2BdxP8qpqiYjDm%2F%2BLQBjqkAfU0P6k3Nh0%2BAIv12PxRHL8I3ECci3PR%2B5zF8%2BMsDy9OZC94WCIis7ZIPHJZdci%2Bl0%2BjNm5MumuAQ5Y5Ir1c0NSG16Jqgh1bOM%2BBPmJdkPr0ZB%2FIhzWxG4HpOMp6GV0pCV0xpLd6t0Nz%2B31N%2BfYZjkj%2BlKdTIZBLh7tyOovVY5ghYrlDAWwXUXQlBlQK7Sok4zTQjDvC9J%2BG1qs4vfRHqURfrZli&X-Amz-Signature=bdaf3d09b41cbe1145117fef9a541e375c5cb039c63df0b35ebe6521bb6a1567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

