---
title: "A Deep Reinforcement Learning Technique for Bug Detection in Video Games"
collection: publications
category: manuscripts
permalink: /publication/2023-01-bug-detection-paper
excerpt: 'This paper analyses neural networks deployed to play games to uncover bugs in the games.'
date: 2023-01-01
venue: 'International Journal of Information Technology'
#paperurl: 'https://aniketwagde.com/files/rl-bug-paper.pdf'
#citation: 'Rani, G., Pandey, U., Wagde, A.A. et al. A deep reinforcement learning technique for bug detection in video games. Int. j. inf. tecnol. 15, 355–367 (2023). https://doi.org/10.1007/s41870-022-01047-z'
header:
  teaser: 'publications/ijit-2023-teaser.png'
---

Rani, G., Pandey, U., **Wagde, A.A.**, Dhaka, V.S.
*International Journal of Information Technology*, 15, 355–367, 2023.

[[DOI]](https://doi.org/10.1007/s41870-022-01047-z) · [[PDF]](/files/rl-bug-paper.pdf)

Proposes RLBGameTester: trains a DQN agent on Atari games, then monitors last-layer gradients during gameplay — bugs injected post-training cause sharp gradient spikes, flagging the exact iteration where the bug occurred without any human supervision.