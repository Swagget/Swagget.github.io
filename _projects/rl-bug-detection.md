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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZQXRBL%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T093917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoH4VJDtdqgJ5vGzsz0HWQTfO4xMLejW4guRrAF3O7HAIgOunDTlatzzyflQirtJ%2FPs5f7HLufR2GPYrUtb3PFbC0q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDFsv5oUbzSBfZd4vISrcA10DzYPxlGt3NET2UZJOr42P95vZrtap6mW%2B4TBYA1MUGpNeh2TT%2BM71Mr5E05JH8IptMg7XL9qvswx%2Fpu%2FiBmAQHW66IqbwsCk37PvRj0dGFXT9ZC39eqYQ%2FHlkHOKH5ijyx%2FWApzHJQ9YLFHQR3CJgj1jo9b%2BC6%2B0WzzhLff9XkscvUgTu1RQviaBVG2myGNnleahczC7xKLl3SyrVXvC4C5GbGerVCxMkrOhFwRUpv0%2BDqMw%2BGWoZ3viAsjP8hTY4SggtOC9ZoPSxKlYYOcCViKj%2Bi7g8WIzatbH2VlFV89iuNFWxxlgCcoijxMoBq%2BxjyOzOTWusfZ%2BMvulF573a27KNK3Bt36ODKVAF64YEr9OVBLdc%2BnctOLEe8jO9BjPpjNW%2BnRqz6WFmlvgCgeAN%2FYNLnsbu9v%2FaH8xEnmdefI44WZ9IvHs3aDo5abcW9EFS2Z51SmobdSg%2FPbdRoS1F7JiWUV%2FEWGL0HEQ9nkbIU7I8aUcWqswhNtfEuRUXj1Um2pI%2FWk%2FNVuJFxNO1QwfxwO7HxXLtsZO0bK4VmBF0NQJsZ0QFOn96%2FZ1ykkHkRw5WtjerMlbG9RmzBbVnszWPGbggkohMukCQMItbngyaA4OtFBq6Bx7Qh%2FqhMI6DhdEGOqUBz%2BMu%2FVysketwxv7mZ78zRd8x7kYQ0EAB2pkA4SJ5VTLicaiyY2XUK%2FpjDyDWm1dToh%2FZeoWhKAKD2qLXpD7lhKdWWrquG%2BWpzQy8uB20mgAiowF5BldzFEBWpGWFLhnxRM5Xr9N7GVjJZGRh0wH4MlNhvVXLfjTC%2F0grelGKF%2Fhf9i5kxpS5VcaKGQISX9QwbWAs7JiBnek3FERs%2BZDGqeofjt5F&X-Amz-Signature=e211d0f8f40d05a721880805b66d2971d109e598e4fe6e20f63c5b4beb46a5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

