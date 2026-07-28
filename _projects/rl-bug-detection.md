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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIWJLVE%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBG%2B73FYly7q6MTMIIlhbg8a1OywJvm1ClwwWHYLNdUSAiEA2scqq58Mq3UF31UjqC%2FAPmCah%2Be3bt04OpgCQ9UJNmUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDP45CecoEm%2BKqYlU1ircA5LGIZYoRPXvLWBxfr9MLNYRMLQHEytNlN49imnIzGI3eC%2FYPcW%2Be6uJ3SBjywo06XqW02WWbVO8Q40mDuJhMxRTNwmyKZ8GLuwYAlfVl3Vz8ndRgQM3wJFckFFKfXxA4o3tYLgBvS6uTpwPlVb0vqzkalvcixtuhEZA%2Bowf8QS%2BKWD3NpoVXdAI11sE2om6o52onNfSffrNpmg7JKe9FDn5DZdVFD8J9QTwWErn9d3U08eCw7dNGGTSawyoroQjVeCb0gcoF%2BZ5JHnOHFdgNrnVYKvwgmkg6Y5nJXdssVoC257OBOgDDLJSTCM0UdPdISx9y0qCrX8QPmq3Nh9P5ccganpFQt1g%2Btfyi0LafC8wR4d99KHSGR%2B4ai3fwvrnosDSmJA9lemlfbfF1GoguRlOnWjR3ludImQb6vzioCqYbpP5ehJys%2Bt5rwUtUttRsqSYu4q6YtGX5ZoS3uu8P014L3KlBCS7tKLdQ%2F209N6BL3Ks0eU2MxZTLTm9QhnLMahNAp2mTp5pAqEfp%2BF3%2Bj5VR7egNkJfPxvPf2oNCa9hkzDwBRgy9D7vXW8PeZ9nHIKbcNtL5hEFigJfGWVtDLbRRkJFhEfwaTxwqqybdudbWbfn1%2F0L6DmVXnCUMO%2F3o9MGOqUBKwG9rwR2eAnW3dCa8ndI8vDXh1zBltt52MJE1X6Hi5vuJFfDUTgLrZYRaTg9aX4XkyQmDKs%2FM3YcCMGNmStWGVWxmlkyZccStxaTxI03PVeJDEBUYh0fc3PS9bE5fOGlZZ1p3ahHHFcrj2EZc7slGcB3QMF%2BIxRP1hlxfL9l1%2FH%2ByEiMNMAp2gLCVSogvpTh1T6BOAXQoJz4BWVzspFEwYhoeckT&X-Amz-Signature=7a40d026e6fa7ddce67d7da82a734981cb45011c31bec9daf4ce5d192170bfd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

