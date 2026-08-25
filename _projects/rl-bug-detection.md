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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YOOP7SH%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T073356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDRzYku6yZMhLGogdVpqqyNkecVfdWR1CTR3y5QsuGgpgIgU5Nq9ISk6%2B%2BvEWm%2Bqx1S8qo4ku%2BYz6K%2BB5bCkw2Jeu8q%2FwMIABAAGgw2Mzc0MjMxODM4MDUiDIRp4RaDXD%2FHhgA3ZSrcA9z7jDw1SH7pNeMOHTjJex7Sj5u16emcvZZjMMPQM7eXHo8tBgc83vaqdYAvp%2F3KY7qOiDMijYvvbqFBp741MtPtv%2FqMlqBBj1Jwsk60pWutKXt3Dk1Csz3RjK9liI%2FVnbL7hJ7nKq%2BPlmprKo%2F2WHOPUa8kQTBgBm%2BhIS4uLGcTjLm%2FJ%2BOH2blTcyCzmG0QCLce%2B6z8i9WQSecSJOhVFZ7WHOGgrcZIGHPmfjZC%2Bk1k55wVRRRlr0Lwk%2FByWVOXt9bciphWH0zI2TfI3rPTyaBFiWINOWTBuIKgcKbBhHulEwuf8RwkocSpdYBUR85On71usa1Y0sZPFt%2FLycjdVElrtnpY9pAK59sJ4i9PzWXV33H9EJxmSx%2F%2FBtUpZiIhfmMrUQP%2F2cIZs2%2Bzkg%2FRt%2F0oJCG2JLAT7GQK3vQhyEFwYEY%2Fl9tFHe0Z0QVHpbTBb36%2FOSm4PgVDUEP5J6ZITTX35s3gptqnQ1ZewIYD6rlcwypYLogVUJrS71waIi%2Fj3q6yWRbnCabyVfXBsgb0TtkU2sAAbkGNk7TTOo3Imx%2Fi3uGr8ZywWcrXTK4nr2Gl2QjZh1PXOld2XyMfC5qoxORkySPANt4ozRZyQMXpCMR%2F%2BYBbVLAsJd0Ek6dGMNzutNQGOqUBHBxrz145vxA8Dd6SXEaxP0Jvi%2BNJe0FCCXCuMyzXk0os8KdLZhzUp2N03z0IgidjNUy5Dwc1eAtiHryE7uqxJbxQB39ioiryTtV2iRMr2Odk9tKHuA0uTPlkw5BrfHhl94FaC5C8u1MXup%2FRXBo81%2FesrKaZ2tEIkrXTXpUo%2FbURM6dLEA1oD305T%2FN0k3wixcwobvLvVxv0Q0kpqfGK%2B357wz8R&X-Amz-Signature=180b0aa0ac71a03af9fdd22cd5a14734a756ac583bc592ead5e0b96313601d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

