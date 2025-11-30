---
title: "A deep reinforcement learning technique for bug detection in video games"
collection: publications
category: manuscripts
permalink: /publication/2024-01-bug-detection-paper
excerpt: 'This paper analyses neural networks deployed to play games to uncover bugs in the games.'
date: 01-2024
venue: 'International Journal of Information Technology'
#slidesurl: 'https://aniketwagde.com/files/rl-bug-paper.pdf'
paperurl: 'https://aniketwagde.com/files/rl-bug-paper.pdf'
#bibtexurl: 'https://academicpages.github.io/files/bibtex1.bib'

citation: 'Rani, G., Pandey, U., Wagde, A.A. et al. A deep reinforcement learning technique for bug detection in video games. Int. j. inf. tecnol. 15, 355–367 (2023). https://doi.org/10.1007/s41870-022-01047-z'
---
This research proposes RLBGameTester, an autonomous bug detection framework that leverages Deep Reinforcement Learning (specifically a Deep Q-Network or DQN) to identify programming errors in video game environments without human supervision. Addressing the limitations of manual testing,such as high costs and human error,the model treats the game screen as a high-dimensional sensory input, learning to play while simultaneously monitoring internal loss function values. By analyzing the stability of these loss values, the system can flag anomalies; a sudden spike or significant deviation in the loss function typically indicates the presence of a bug, such as a graphical glitch or a game crash, distinguishing it from normal gameplay learning patterns.​

To validate the framework, the authors integrated the model with the Space Invaders environment and systematically injected three distinct types of bugs: visual artifacts ("White Dots"), catastrophic failures ("Black Screen"), and element suppression ("Sprite Disappearing"). Experimental results demonstrated that the model could successfully pinpoint the iterations where bugs occurred based on sharp fluctuations in the loss landscape, proving effective for both visual and logical error detection. This approach offers a scalable, platform-independent solution that significantly reduces the need for manual intervention in the quality assurance process of game development