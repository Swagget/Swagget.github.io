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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQ7SBM7%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T203044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDthljbjCdOXw%2FiVESw3UoSfQFiSqzVvbdBanj8U0gmqgIhALG96Q4%2F5G361Yzn0vK73SC%2B7NoBA%2FW6W8SL1lhXC%2FQiKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmo6jvkaKR2fSysycq3AMZ0PsoN4nC88fKZESVRDLMv6qbnTkj4dN9EgitGuVVEInhM%2FLI%2FlJRxyZD1p1SCNz2A9DNt4Uv4YfAr5g8zOJw37KJpELBFFtZlFJHsOtgBR9XeTK6WpjxTfdLKSDe4vcH77n3eyvBKrnvo%2Fz9FEYblCWZr31OQ97LmfKKtJ1%2B54Uh4F8m9qN24OQQRlLKDbF79RqYBjCU4UC25ySxhlHqzxXZkgb4wb15CsQcBENZltswogiOOxKdlsv%2BY7%2BuB%2Boa1OaR1yC1WSmaJj2fyQCnK8898kKzZJpHgDnjSJauixYqRsvwMfHSRgwr%2BB4EuqQN%2BxRbIMwishN09XYFDwXhWQ8S7hYVB6kDlW58xRBesBpCBs%2BpZstTyhgFgqqRjRwAWkSkp6pOjuGU4hssTnk32A%2B1%2Fhwlbcswwvu4iPqW4OrxHF%2FKEZXQT4a%2FdA8MZfdgF3mgegtQkXn2RP7lpZq6ECp%2B%2FqjUhkYNbPzdkhu9PQDUvP2sS5P97v7SGr04FXUtkEz7S%2BDJ99jW%2BxieAtJ71uHM7ckXFAQLvaIxHAQXWLcIOim9lVAO7kMe1H%2FIR4nKBleSbBBQrn88cKFItWrz83EEXfETZUFWl7stKirsT7xIALcm7QmgY8j1%2BDDU8%2B3TBjqkAbYswmy3kzOweEjM%2FM2z6WvQ%2FIcHj8QMmrUlV2B%2FEgPM2qPZT6sXda5Xp8MsrYvf22HQgIjGJcirPEzgtt5FhpyAa17%2FslUIROgIxNMATRgU6qJZXedHf9FR5MvLa3FHYhihIX7n0%2BvC458lBtzG9E62T5AKwQNMfaXnOpd5nyjgQq1KX9%2FRcPsfgAuCNI5uNzgGFmKiK06DMjmACGAwkt0va6%2FQ&X-Amz-Signature=e8981a7fcd1f7ba0de49df37bc480968504882a1df2724dc07be7a14418d1c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

