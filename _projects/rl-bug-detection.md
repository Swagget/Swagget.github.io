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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBE6WHEN%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T042919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCApJ9eOD%2BYZeC25wJBPnno%2BufLJZiB5dORSZnla5DA4AIgaL2R8ORHLc4VSSmvYLW7HRRhulIkVZnOcb870mRcvy4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLFfwKYGOezxysrpiircAw%2BvfcSTloi7wYrKf78N%2F%2Bx7qEsRbZUelKXp1ogq2SLCH4vAVqWefZqEQbqmEuTQKzAduLgq4VNVoFkPD7vUY8sN%2BF2REVze5qvbU8GLxoGarjiAWHuyrjb2JcQ9JmJz0J4h12Rh7yeramPnXfPiQvOo%2BmleCvpx7PsH6jVMaTY9IN4U2k8%2BM1ieG7xvvNx6li11MyGz7Kf98hXxY95ZFmbX1rBeh98h%2BYYKpAu18KYvBFKjMrfbriykzOy0ABRvsy4%2FlqBKU5srjHRV71S9J4z18WYYTCx7w7NHQ%2FRppIzz75fDlYWhW8PTNB3aWJFNeW3rPoDAuuU6w8VhuNfm9XKlgpMEUUdsczhN18zeeGqsA%2BzUASEuJSE0d7rfAiprzUeouKa8Mo3aaOINdjvlNlu1ZY6uGVSnWwzhL%2BdkcROYuygDLOocDASzFwzhtzA%2FlRBtPQ69G3lNAWlx3EMT3CuhTedo2ruUXhx6oDNcZLpvY0%2BFBUVEalvT7DstXHDbb0yhhW2Mj8DtI0owoxn99%2Fv77Salp1bY7SfNrrgZQQ4adc%2FBwkWALozkLBa2O1HZLIdDq5Oh22CX89wr4GqHB0oTJKUAwANPW%2BCSigfumb%2BiPLI2Xydv9XSPYBryMPmUitQGOqUBsQXIx0LOAon9Q5gTKUwa6jxAfLO7Z1ebNkW8BRqb2dQjmj%2Fin7h6LrFitFMsfz2hUYHdc7YK23a%2BE8MWIs43Eecu4LilntbIt9Th7rok8UJoZlbd0Cikcs6FF%2F10V97hYrN8qaSMhA0dk6exmznIyrQN1Ryf%2BAz8qe9g8TPsxkr31Af5R5Dd8vRZ6%2FbsgcGjZG62HqS%2BLX6mpu7kmFAgpqKZ7Mwu&X-Amz-Signature=aa5efa209b767afebfade9c4d3c7f3b026b1ef67ec10992b70ac001849714046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

