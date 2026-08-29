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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J4LDSFW%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T201623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqqr4QRggAWjUiCmp67tvrxgka7AQgFPmlPjkHr3h4YwIhAKPZ%2FI%2BXTA4f1S4Hm%2FGnaOGVF3to5QC4R9h24bI%2Bz7jOKv8DCGsQABoMNjM3NDIzMTgzODA1IgwzstftdAI4D0C9kfkq3AOqZYELkA4tDJPHSmQpUp0uRlfSz2Keq4byItw6sqW1mJYwYfM9NvXspg28oVePabivlHCgPLY2ZaLLHnTUAWa3BXsetTrX1jWDb4GGl83%2FL%2BcA4ZP7LI%2BKiWsVxzPje6%2B0T1ykmpxtGRUOue%2FsfCHEb%2BdqUfdNEXV0sw%2FSiwPMmtotRooAJPbYJTzFJHWxBYrrv6saoi23c1oecuvyq51cUaaV2HVbkJaBY68Uso4dSXT6K7gvf7jYj8QTR4i668bSbrp%2FbXLWABr80y5hgR3V8uDYvHP%2BZrox%2FS5XHsfs899ZondwusPxuHk46so58yL0GA3G3sl73qpMmdXCruboCCHA0newjapVP3vl62EaX45YXZkdpK13bsjX%2FXnmj3taE8HsxzMmMamU5Wlj9jJT%2Fmdy8dr1tpDNFDwenZ%2FiX0SZgyFZZ6BSi9pa84NsKZeqLt3o%2FWTjDyvELlZE%2B%2BICAtKQLgZS0Nu%2FGPIf99SFeaGFSY5vE8WNXOxdsqkQBZ3vNX0oBo2s6oJWdY25RDq2CC6zuGdGdm5PmC84Hq9RJbAOnoJFBej2fmdseOdrQTF%2BA8z69FL1YtFEwS6QVk0V66Cisehgz%2BgIw60RjXjvFUabj8PERUY92KLwkTC%2FxszUBjqkAUFMAP6h7BRJwvKtV693mJO%2BXEdcSijLTmYNJ0qTjw7VRC4gQO9C5We52HIgJZoweu2r1XwYmCr59KjSNHQLUuLUU3Y%2BtVbK9w2gQaGXRwMooRtxxsTK9HKFOB3vlsM29OlwVodW%2FOAaPUnTE%2BhybqsWGQMascK0KDgKQ16rmWOgjdmG3hEwBaDL21PYPrH%2FoV6fBJ%2BzSFZhDBvQOJgZ4aYeyhat&X-Amz-Signature=cd8a1d43b1bb9a46676b565ea0162a9353cfc98001f695a20d58f42a5b63b469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

