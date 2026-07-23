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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDH6RF2C%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T162311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDi1q20FkBBubV43JoaEvbMNpjIO8chtbhOSbXdbeRMHwIhANUo7zQX%2FpHFzGbsCmQ5bPjTd%2FES0gmy%2BwSVF5wd%2Bd7HKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdgAmnY7do0m1nDXAq3AMQJ9MtkKV2vcAPqluU6pEY4kh6WHTCjTZRgn6%2BRJ01bZ%2F63fqEDW72Y4G7AV2Zm3Mqj4SjeE04jlwl6oNDgK8vc5zLWwGSFntmmpQ%2Bcmp1TKZFo8Bs%2BS6ow0z7PUBYVFwH0cqvyUvjpXvUi6Ng0ZtflWVYnU3UHPWWdPAnrv7fa0IRy%2FZQxBSPDauV7BqpIaM6SNpUBk1q6a4AZyoa7WtKaiST6FiaOzbX7mwAV%2BLjfFZERtYT7dFe%2BsgZ9mH4KkFnhZ3nUYseQHnJMZ78hkQ2FujecvytxtvtnhlV7Fff%2FE%2FAlUpl7g724bvG0lzlBKNtzpzaS8S127jEInFd%2Fj%2BvelSHPN5LRDbCQ1DD0Gs9NhLuQiGvcPBp8qVvk%2B0d8c1Ryt336W%2FSNqLTAI2SrxxBzJapcLxn%2F6%2FBUCW39FQjNYqqQ%2FWMuqPN6ZYCnnBP7dcvciF%2FmSuvVSuO8mEJc1fY1XoltQYn11et41DpEaICdLxXFvwjGZNnLXEUJ%2Fi7Eth0PfmI0bboAY5aD3VevZudfVKLUTk3n%2BeOE9FO85PCU9AiiIee58%2FjLuk1wU7Nc5HO%2FSUasP%2FSv4bzhCE9Qwk7XF3bYfTnjcPEES1Sb5RUnu9Lu%2F4Fv9s%2Bazgg0zCX14jTBjqkAbb2FwjALZvO0kCHg2dNTdRu0I4sjm8BoClyZjjPpDBFOhR5GHgSKZwzL9U%2Br3Iv3HMRm%2F4Z1KWhiIm3trdATVAZI5k7w2%2BUlB2pbDPChX9JRBPmVovA7pgP9Vt3TjLmp5wNmudGQDn9UqAUCj%2FjUArr4AjTFOBMGlUGf7VBiLNi2u5BCTRdrEsbDyZ6lkPt3vMJbYLAOupItOadYwOfknMMC%2Fua&X-Amz-Signature=9ea7687a7ee209aec570b15ca7dbae719c72cef677c64d66e8854d5f3237f8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

