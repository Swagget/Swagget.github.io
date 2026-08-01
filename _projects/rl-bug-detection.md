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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WXCFXPE%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T012653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyHflHwxasZnpQ9x%2FH%2Fn5%2BOnTMRKnvz1ACYoS2oL%2Fl6AiBYMYnCYTvxAutACX0n%2FtKN3p%2BooJMue%2B5ym2uEZc%2FsTSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyXZRiGzqtXL%2F58q5KtwDS7UNzs%2FfzjLYrsmWCWHGVHx%2B8Yuf%2FxxDou1q1Rgh3IDMVpy9R%2F3fuQcX6080j6tDJdN07zPtCFAisqDjPaRN3JeEOIkN1Nbe7xZUN65hSc%2FumRMrKUyoF0Nwj5f10o3O1fiQTK9YBRANu3OPE%2BzlcFB99zW1rMNTHg4IsKHhw0aukd93M1Vsh%2Ff%2FZxnwJbvoCCAqEHPliSkOBWEr5UpV6UyUPHOC9RiGgZieWzI0eViH0MPFxLI9J2NngOU2BmbpFM1QUkiK6F4RNEUaxXSJjrEylJuse01bHkjT8WxXo2z3Vsdd3dA9dmyJHTqcAcz7Hb%2FcRAvc1OVJWXhIgzCHhDkDY416PyLhDenDM0CfFycfGPcy6AnABMWk57ZzteGQPOfOGW8Sl8cKSvHVWdfIqX1x6y1ttbUsXkCweBHU3yPX9qOUfsQ0ZMc3UrsmOIaJxBWkkTZP9QYFZI71htX9k%2FR7vol%2B6xfZ40z%2BTNIdW37Pv5YDuyv%2BYPmqgu0vYmI7aUcpgz851UjMv3EGOT0rz%2FLa9ypKFyr9YmvAXHeGflSm7a5PEPrL2CO9EY6rN8Rqgr1qANxJe7quRbKXsG7XOtAiQd5HZC8%2B162xkNAYwNps7%2B1hRzscs0OrgVEw%2FIu10wY6pgHfDJrqjb0y%2FgCHjGwnWNu6Y0ZRhANG%2FspkxyiT41q4ruQlHnM%2FEa8oFwXn72sCtwEU6qN67FkGimQYAjQS5A4%2FIaYQRVxQg3%2BfbNzc421J8HZzKx%2Bepp9dNtBbyfjSNmuDQX%2BS6ncCD0JsN459m3%2BSx4lHshiclJC%2BO79GrSaMz%2FcpUGagM5mHzE7yXW7GBOnumv%2FrSBSgaQmCn9w0UXCu9yb%2F06mj&X-Amz-Signature=bcfb284d57d2335996f1d5b206611aa0dcd99081c8634f0fe183696fb5375a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

