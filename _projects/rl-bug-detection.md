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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMFWHJF%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T003222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDw%2BWFTPLbROe%2FisgxdpkZ72KZRPjePKSwWL5f2%2FFhD7AiBQjWNb52FPIMXfLOR%2Fq8V5vwRCu3ckDNxP47Is1azudSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiBYNujiD3UkfnydqKtwD9t2T2C5P0PNDhniP%2Bo%2B2fM2vUh5xqt8cLEbgMFtnY66UdPuEVQeCdI0IO5ugXrxX2viGcX3zLg6PlbWA2VNwW7Lx9ouObQfLbw1gmH%2FPaUAz2CWoVCsnMovFg5Bmj0%2FBxZsGF%2BqnoR4k3tBUxSqWTQLytoqW66ygi9pQnVuXL1VJiPiUrPQXWaRIledmewhfO2dHCYO7yJL5lp38guUwRjiz8tnyg9fbjidG5vAiMMhfK5Zggkqm%2Fm4XQ6%2F3O7z7YeFk3Zzm8bucsCPKHk1%2B2sL6e3sxRlZdhqXuZ3shKjK2Kdp78qe6oZ4%2B9XzVdzRw2CyLWrEi%2BhO1OPD%2BjeDT3S%2FMdRsw%2B2K3I%2FM2Xxdhhki7lPM7k6DY5SxjjfbeEbFTq6TnMDR80kJ8jY9s4hY2KN%2BcKLwogFJmvVJPgvFylFFghQ5779TfLfJVZfI03vf00K9F7OO5YlUzfy2YxU3BkQaAQOe6Ud%2BXGYmM0PGIOTJ1FVDCLMFMeJqChFVotgqPs%2FTeKs6Z2nza29bTehSbAEG0uuHagNtCRONClN9rAl5NvaXYxBtDRuQaNhrK4CbyiicSpLBkWqkf4i7PIwDoeSmpEvSBRw81fzjF3evVDjtlKCnn4MSIe9us5yAw9tWo1AY6pgE40Jqz%2FRLoS67uoHeibavnqSrx3N0kSoblrPVEr7cxgFutXWRTS63d7OgsE8xUPwNpQL8r7KyvbVdd4nEyFitSmND3MxPOvZgVrZBiauKxYKj5q1gnt3MrBMDig21%2B1KblUCNIaRRIDLcQtGTCgU5tXK5fQ3YsYRFydsLj%2FzhvBBHYZbXU4XRsq42cBUgAK%2BAr7kWXPpklGjGjX8fa%2BjIblWUru1UK&X-Amz-Signature=518bd6bc1c645c776562708d3e086e8b45134a6a4ace6da34290ec8414e76e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

