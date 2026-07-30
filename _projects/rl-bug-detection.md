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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H25FE72%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T011231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTlPzZ2zAobMamrCUj3H63hjjH8dVN2zKE82d9hpSUXQIhAKnRav4SPycWBua%2BYVycM4TYcF%2F6nJpVEHgfyFPRMwN8KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy54vQjp08k9ZjLpvEq3AOVtD%2BNUhcl%2F3CtG9ei1h1mjNlhjjVz65bDDJ4MKgQOWReOhxINQ3cyuamDQIw%2FFPBwnpns1U4BO04HXmwWNf7W2J%2FzYFPV%2FM%2FY%2Ff%2FoudtIyivBhR4KgdD5oXogrMgs7s5EK55huIJff8l8aP3rkyrc3ehBiRJKjeEx4TR50CTEulDeaJ8xglt7AYTlDsqDmF%2Flr3egCHQ7NRQAQePrXX0CmDGuuwjJ2sv%2FttW0t3CKm7cbRTbearnaoAo06OFejKebxuBvx0qOonyLVhtxjIsSYILJYywnNcW2unVfbbO8oZGVMrJPZLr%2FOEqplW8wEDarbUxg7oc9Kt03JVC%2FzhWG1%2F4pB0oDYg5BaSD%2BxNNQveT2lpLx2JHky5P9A%2BmVtEET%2FMGwlazviheTfg6FBWqC8E%2BoelHoi0cFBkWNLJF4YO0yAO%2Fmbicw7Y3ZjgiCHwh%2BCQtJXFrGwmJ3eundZDNgLXOS1rAvvo0SZrYJWZgHpwGmy6%2BtbKTgfFP3iw%2FHW%2B8R%2FjhqSWULoYhK0paYeyROqq%2Bp5e5CDMoKbG7pLWCE%2B2SPy%2Fm1UzHgWQVhs3bDtG%2FEhNMX%2BE33skqShfsFVDX%2B5DwNG3KfOyHb5CTaqffBNcl1G88szd%2F61KY7QzCAp6rTBjqkAbm%2Fc3Jm39Kcc7RdS9R8RrnKnA9uxp2%2FaWxDFDilbkemg6AstRKt%2BDAKbzXx0fXzTC8SOThJDyOvmL1zv0KFKSj7dK7mMXGhaZrBhVrl9cZyyX0xiRkawRQtccgI2Ww4lxk0WYgbEMj85ye0WNnKK%2F9v7EM381m3eCwaUByhhCIBgZ7vHTZiCjvz4ggWp24CcAgrnryWmoKQKSDvlDkyYoKrYbji&X-Amz-Signature=b7ff33d9e0ca234b53d7632d0d0382ffcc6ffa0f69b7da1c7d7aeecc0d58853b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

