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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y24MSPEG%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHarnYC6i7SwO0tPhYmOUWyzwK6NPkh2RsORl%2BdIMIrAiEAqWeWrgZdvLGpqzHmLOiuho9%2F04RzQBFNGNdceIv9SUkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGxULftVFLvrRJs9myrcA2U%2BpcBF50yR0v3gZR8Yhkomgc9o9V%2F%2BDelITCI3hNLkBzrK6eIG1jJqk1l3UvHTfEyGw%2Fkzj3pj3G0TqIE9Ylkb4IAFLtGfW6ImA36sOrsnM8VKvT%2B1h2nyMTz1lcUMT3guLh0TZ4OKDg2f%2BU%2FwnkA7%2B3jj2K%2BtufmeGTGrJ5HaEBhpufq2mQ2Bywrz%2BojGU8y5JE62yC9044bAD018ll%2Bx78ZM6AVBjBW1Cmqu%2Fp5sKAOqWcujk%2Bnou5%2FWNWNitz3I%2BHOdCgzlcQN1U%2FGP3pbDNuhvO9%2FZtPQQMIP5%2B8QF4u1l3Kq277D1GgRQBfubS%2BxZBeI3FZFbJ28nA%2BTPtH%2B4lcxAcwRZgaD7guaWHg0vS3DkGBFXtO25qhQ1wim7fyswSqKVmESL%2FU2xD3hyrdvDYiFXoLik6d8oE1nt0tkeqeQww2DIXVx%2BQf8Y25nF0qmOCiI7sG6Xc%2FEMcmr%2Fg6GMCFLxrmPp2qWp3180v4QDVHM5f4M12bi5FzLDc91J1H6oZGdgUzKZBWTrgRW3W2B0XXrmi1cl6AN3rjssbdtF1mwMLnkX6%2FSoOnzvmeobJyWCl5OV1YLeslCIuFpUQCmLQLFnoGTY2jzydE4%2BiSoTvB2XNyZD19qB%2FptfMLG7ktQGOqUBOMcBEimB0z47S9jkCx9y0qLjjnmx2sp70Kh0JPbDwIH6Q4qxvqA8rqQnhM850v945QNGHacWbUPYygbE2LLFrXoUpCRqWAezRmVB9yQfDzZV8Mt0GA1rd6dN28tlY5xZTwPgaHZVi96AZuu3Lp622P%2B1a9PeAfshAUeVtJJa3Rl0qUeonSG4TGI3HUPQ7XGjscp%2FjGraecaZax4%2FvTGKfWYmXwNE&X-Amz-Signature=8015e89271af55d237481b0e9e73338c975d2aecb2a053820ec06b244bbd2cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

