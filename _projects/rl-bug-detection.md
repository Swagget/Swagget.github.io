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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TBD5MZC%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T073814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDGY6p84V6lPesXZXdb4uSaqwuVEzu9ewOVEVcb%2BT5SAIhANGFxQdDxu6eI8oipFPuV37t%2BrIH%2Fxbc7AGixVahvHN7Kv8DCGgQABoMNjM3NDIzMTgzODA1IgyeMlrOEw55eia6Ozcq3AN56UREZz1Ab%2BPC32vPEEWp%2BbuuEZSbMsVChs6KfBr11AqbSM6kTwKvvsLWACh5OL5tN7OEcJZB9A4VwFmWApYL%2FS9NHuIRrpGLzK9I%2BIxkX2fWgnpGWmKkF192ln1CTLEDcse1CJnXEbi%2FbUJoxGq4VvjKa2kRfFiyCY67z1ffO8CSTUE1qidCEFPW0ciW%2Bf4ysFgRXM1rYaWkKA8bQCf0koKnY5rFGTeysiy90NL2%2B49g1k57NXPcQt3jlyqb5wQLZtiuqTO0Oz2Zxxi6vKF4P2ctkOeDzZXv%2BDoF3ej6XX6756xR5KlWnINf%2FivPCvyFXXrpMS34LI9Vodx7QJx4lgSxKbYMrNvO%2BgWB%2BfHFqTMp4k%2BKUQbZeYgDYpAiBKEQcoobqA0nU2i9aAgnQ5hsyojqVrbsxQA0SajcDhFS5rGCqOvSobQtUtrwE1jdt1jzLNW%2FLVsyGQCIw9alfdPpRLIQyNpdhRc7XWBcESVwT1kr3kOYt3WwvOa0xcq6dytvrOZxUjXrhIKrBaU7u0InuvSf97U0MCeZrI%2BQrzMzbqb6TiPiVJux8lXSxMq4IP%2BjMyOEqs5W1lvalP7E6UaShtsKzjbucUIvhJp68BbCkaouiYmX5ti21TfKwzCWpdvTBjqkATzOG%2FNI2yWzYPkVUHhTQphye581dOzvD3uil10OoNBP4tqoFE0JzQBsXF%2F33pjvg3yFMBmlCuY4IOu50Ah7wRCs3eCCCyHHgy44LvaAgX3KT0ezxGVXKNPWVHfQ%2FrEYH%2BucGofenhjuGeKmdqPXXRuHMWoKu%2FdbBVLunkoBOCNH4ydtPCiXS01bQBu2irSYfsS3eEE3t0kbUDUi2qMFX%2BYo%2FFey&X-Amz-Signature=06ba102f4e808e3fe492d94493c2d91f905f3af5092327e0893d1fc1b122bb55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

