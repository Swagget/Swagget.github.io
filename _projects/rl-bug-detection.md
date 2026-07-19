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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K5N6BSF%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T094121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHff%2FX5m%2FnUANYgWeeyIasiwsUnRptQGhh5S8tR1a87AiBqeKV0z84re%2BYorA19E1xhn9CzHjwWEr1fDReCQrtPPCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR0gXQ4aaIgWR64udKtwDxWX8vi0gWdfqE6HjyeptnOeR9LLbPFWD7GXYN9QXqQmH7Mo3TW%2F1YxNh3dS0hhdbuMriQ%2BqN2owOhdRQkeCO3uWjlfiPmKJ1Z0%2B3gsCAMHQ1e1q64v%2BdGeI%2BPqs2xaB7KHsC3nmBmZPMBZsPE1QcOOU7G5YgvEERt%2FFlB%2Bfww44qlbR%2F%2BbAVagU0dcJIECUBcwjB5uOmOkhR3ennUoF4OMnlkG2h6580xZg98%2FDeeI72sdtpQ5wKWHQO5405774Ud7mjkSZHSgNX5eX3VdYYEjOpTTdN8lGt%2B1Q%2FSR%2BPb4n%2FOsKPwwWniCPq31UXtjF3Jt9yAGgajaEX8sWhFf0Z86aSW7rctOLIQhBfauKNR6WCaffPLYVXLW5kCyKBIv88C5QhNRPsFoTjiDiDm29jIqeLBRfAGJst%2Bxi%2FIutgU6QBN8ITwyI8%2BJCXIX32evimXkpgcW2R55cIH9Ko9FTvqDZ3AowcIQkcNp1jedMlWyHddXk91fropSpFufg6zAt3fOH44KppW%2BytaRsZHH2fYk4VaByfyCGnWxgq6n33MMarXXwFtHQMmakXn%2BQLjdC0xcmzqT0nKRcHwUqdM24z5SMHTNqcTU6Zh9cVyY3dlWYg1QMSm7TrVkQ%2Bx%2Fcwiary0gY6pgFWujwwwJtQpc6aqzXEiDD45144a2PkmVl5YgKeipVGUOJajvJllm%2FkvYjSyh%2Fk9SwTgCImypirS2wCKFJSOzL%2FC9YoFdtgcPFRQMKPWvFbF2fKZyP27bCLEf7bcCXAY8ajt3lBGaaMqlrt6%2FwxVOZGfXL8VElhrW6qzqY98JMITA40uibJDD%2FFN3kudDxmKB6e1yZjyPNkyrD0KQUkKTHQnJS5uPWK&X-Amz-Signature=ef2c15407421ab12d925368ae36d86247ee36d0837de631427bf40578d3154e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

