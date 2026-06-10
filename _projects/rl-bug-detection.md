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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCJ6LHV%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T104707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQD7EyuVW11ZhwW1ZX8g9fzAoxFRFIM84ZUj5nwU%2FQ78IAIhAJMlps%2FptFWysRbH0LFwDlagNOyeieh8iA7O239tfSmYKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fq6Y%2B5EonPg9omXYq3ANwYkWW%2FiuPDoFTNtltgkMJDT3FJWUQlyfcwZrIn8voTsEeg5hLzO%2B3MP495hU8Swi8mMo1O5PFM7dDcwZgW0GEJIYgOBbfAHuMq3CB9OZjfkoOR2iX6Y3FTbOH4xBZbmhQpCpqDP6PkwhiqHKYGJjetDTYFYgaFzaBCjQfmCCKQxlfwmLa%2B6Lcrv%2Bc5iMs2nQajxIWlXqfhLgFhTuVPz48CjjA8w84wx7Q9CjGAErVADBdxSgDQJ2yICnpkbx10UwYMXU%2FlpzWqbvpoHyxBcOgVgZPS%2FlL3%2B%2BXKvR9pn27y2XAoMdI9eblibs%2BRokhnUh%2B1qWgcr5NHDXMUnnZVDh43NLeFh6oAFVq5jbACmwZA1BKCdFUqSGdOqmF81kp2%2FgSJOAbCiLUviii%2B9RAKWJMbbRH6zhcXrEm8nNPOAxh78cwkrfIEVxlqAnjWKfkUN2pGMcT04p7ZR2iSwW3BzdcpISjZBCTY4D4%2Fyb5R7xXYlRd2fJAx08RbiphsSSEFJikendXEITDOlm%2B5%2BcleNJWdKc4h3hS6wnMEIjhNAwaHKweaHdgeHawA0oo%2FAq1CHz5ZUuSW1l%2BxTWO%2BcN0niiOTWD6ZrM%2BLPoOmbR2BfGM4lUnwSxBGpKtT7IlojC97qTRBjqkAeE1I2ZzjRdyP0CJH1mG%2Bws%2B2jpCtGyf8BBimXHCEkAZSkavGBefUHL52tUPfTtca3cpBaL018Mx1nsvySl%2FFxP%2Bjwy4iXLjor4hUXxrPdvzZkdlovlxslwns%2FgFukm2gGASquGA%2FEzEjB%2FdqnvWCd7pa1LrGXCOUaERSbsQ0i6BD5e%2B8LOGclJfn2TtoL6MdYG0DrjUI5K0KxMott8v5fQjrJAG&X-Amz-Signature=b2213406d397b79b01b7d02fc1b948bdeb26b746f2ed074029283516e7b974f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

