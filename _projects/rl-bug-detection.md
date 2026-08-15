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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GOEPWL3%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCICQ8AumP8hg%2BIjL10%2FRW2ZyNS657cjY88KPP6mBuTBGiAiEA%2BKGxTljyPwCtzD9I2GRZW8ocUAZBRlSOKOqLQCDEuFEq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDPPLj7D2CFeqPlv9NircA03lF15mmNOdkPp4%2FZADhlNPQSMNRlk4yF6EqmpGpYUyrKihUsxlgkT2Q7hFqkM96EOUkHe7S8DqVr2gurdisclD8eyuejroqR3Mcx8cgLj1Vzu%2BRhSl6L%2BvinRbW2eAC8B89694WFCH4Z%2F8FvI6RSJO3c1g79WpHGGqQzN3yewQBJy1qSqOQ81euZaUODMSu3RUbXm0dgwWYasZqj0yTlW54feIUqQXWF%2FzuIAe%2F%2BkoNnlXwqIeSH9YFrYfdyC0l3A%2BMBc5r2U4kLZL6wvzs9fhv6BnMPESgNAmzx7SWtG9Dqb1U%2FuuRgrc0xuAokB5cUj7mdRIdkxOdE4X5hDVFXUmbwDpX%2FWUpgOPKK81G20xGASIq9dTSrkBeD4kK%2FiOis%2BXvNAZTq7M04kgs8N53Gv88vkBFDieM%2Fnja4Gg0XnJ0BezCO7r6XmVXO3VAHcI%2B1BeFwBcqQYr8KbyPZ7fXpNI84vZzEAfgLAzJbAMB6DSBDlIMkyEkt64w29kC%2BEYdUuWYXL4fIWlleeDmpNvSXs4QZVgcBjK1yoGze7uHJ8QkisUNzFY%2BChNADK6F85f6M91KnbJn6dKVQ7KYO242h3h4o7TUFqAz%2Fnz4RtWyltktOSXzdGlMh8ONGU4MM7qgNQGOqUBveKK4OKebwlhPCqJ9Ef6n6eDzn%2FG5qLNFnm4HnZyqro30hcHpcQa0z3hGgcy3zQzBTuXTCh63D9heTF49aqKyf1n%2Fw1e3vCLOpuqCgNRFLZPbW7jFwjmcKe1IO2RAS1o0N6p66tm%2FtnaUJEr6Ncu4IoX4oCprZGWLFhbxUYoaVVcGI8ydrc5V9Fw91yECs2WNAuYS8E7sQxpx5CrAsJrPuILx1FV&X-Amz-Signature=a7b181c6ee733118e92c594a19fec04e8fe5109e8ee1546f45d47fc9ea7ee3da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

