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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUIHKBV4%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T095211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaL8Na0jFzCqEA5jHHOp5JEv2v3T8dlfFPDllRzNhsAwIhAIQCtnalN7Ah46hSU%2FkiBKuoncpUlx%2BwCaE1ovZqaDpgKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXiepbRUWlaYuYG8Eq3ANT9sg1wflhWCQ1voOv%2FT1ouFUJ1Uh2vHclk%2BPiq3DcAQxPWkMwxoPoF%2FAHPiXrG0sxGwilJv5sS9jECeb1onKlJRcmgxRls1V%2B4A6ErSD%2B%2FeAyP4fClXHY%2F%2BNxtrH%2Fxd%2BAuDuFcMRH7G%2FKUOTWQ5%2FZNrE%2FO%2F5FQLJJh7yTUSyXP7TvZkq%2FRPP9oRitSygDMV0omFh0b%2FQt1nKVoDS2o%2FtcU72mqQnOCn4hFjelcrcOFG7FdteslMssEWa7JqSjb66V6CAz4Ksnh3rzg4TgvuIZ1g88%2FOpeS48HRGqWeUsvYgACc%2FoEG0yHmf1Cm1IXDvJTNx%2BZnCYU5XTuKvSXdz7GQuNaFdlvjAwO0QaXlVgzaoOtHrrqRULrHrk8mH2QbFz8qtPJtS%2FpAjifbmWpsl%2Beeho2HMDwovOgssIwITJJVMI0Kusy4kfrgiDIPYBJzn%2Bi%2BuLAH8bEAftVl8QCgQpoNhRk5b6RDsqaIhFq6RwppE0GWSRpVvkxFkQ0c2frv7uIlQoourg41GcTNcF2u%2BAHFBenu2tRy%2ByCfb41gdCBgqMnA9opCpCI26QR8i4xhrgxX1KmoOJr6TYM4%2FXL%2FHJ%2Bj7O0H8EcM1qc07tNcU%2BR9%2BM0CSg9LSaHYf9eEzDH%2BLbTBjqkAaxsz0TPyW2H%2BYIVluYxQAgMMyheP%2B3TeBIHCs%2FHc6cXCbnAf%2Bev20NpbgfNRHvJ7gBa132o4xjw%2Bg3RZTKR2dmjCIGleZeRPbSH7QqrqS1V%2Ff2GR%2BNvJ1zIhzi67t7sGtXP58M4qCVVYzgUI3HbgD0uy9VVQ4y5aj6IxZXGww%2BJO%2FaFyqWdk6yoAJ5svAtjrTZZD5GqW6VZq%2Bt%2Fg5XS9uNBDd0N&X-Amz-Signature=d858c34069586b4fff3a4040fc70eee6e7413ff145f0a3cc2e3df8aa179dae35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

