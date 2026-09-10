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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEVRY6G%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T115424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9tF%2FHW6osxL7eGAi52Kn2cNlTW596iqAEvZGXjn7PyAIgDBZI4aG7TiWuCmautwWJWNhrL%2BxtJNeWzjhdVRxW9EAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN3YX4QXJc3RRXPLSrcA%2FAS0aWCkNzogApA2Cge6%2FSMcmZy7o9tMP4MePJdeANWnVTerdVXhgzNiR3E6p%2FW1iI1ibyt4tGr4Zyg4zA85g%2FaoG7l7FBfjNaEHkBxWkFCc9sw%2BCkc2mZsNFN%2BUWv2TA8w7qISxZG46v4NhKhEPcn6oR3uZOQac48UNdp%2F97G6xrYbIuZmEexSHzBXgpTVNW6Xe3Bbu8O1yS7mWmHv7RoAxw9msJ4dG4RfNjaw28ovjYXg5qX6NTJEzyK34LaIrLph4%2Fr4%2FJ8jAJOzWX%2Fj6Tey%2F8GW%2FX1lthP5IX%2Frh59I1lO8V4V9SYLZbdM%2B7IJ%2BFv7F3ZrFt%2BZNEECuLkXoOtIOGHjmoGlOxVCmn6Rs7G83uafRLoFw6txzT25%2BkqsdYEO0vfJfKoKPwgLQA9tDTWGkpo6bZmcsdvCHjHwCI8g5rDougSJldpG%2FdUSbnIcXszBQ4HARf0hvriheb9Ru5P%2F8GKoBqDHeCybTAg1wqRpi1kvjeJB6GU%2FqKy8zcxvb5JxIKVU%2B0yp98w6kszARvknQr9VTh9XB7ufp9Wo5E%2BhbH3Y81G9SUCAI71oh4LO10xNp%2F8IfclClWAmSN0D2EVElvyjspKnyiWHgr1CH8oAyRM7bGLJPmV%2FyZDxcMLagitUGOqUBdVfjZaKPaKWQKFEN6SKtIcZickU1suJhxapm8UAG%2F9d7le2gXAUd11IlMbE0l2TQR%2Fgeh0PWFcRI2ITTCb7bWZy8O57N03UkF1vANHlviYlntZeznZDbERMMNywVoo3YK4bJ3JzhFB1AzTgVfYWMr9GIuSpM%2B0bhu5vaRGsDFheX%2BZQXUpjuLThCzUU31C4rnSxS10mYiU%2F881jl9XX6wPTItoZX&X-Amz-Signature=3e94b9d7321571b46763f7acd85da0c296da9b49021a8c58d59671898b59631e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

