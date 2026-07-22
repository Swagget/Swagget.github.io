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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642RRY6IY%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T191427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIH4Nf7O9Ops3OYLQ9582WTgrR5adxxwi7e0grbYYDB1aAiEA2ZGZC9Dft2medrZOSFfv2l%2FprwOtyaAlpNk2DAKhvW8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbt%2Bwbqr%2F03q0g7zircA6TTYsqCuIITB4qrH%2FPPLvJCZ%2B6tkczZ0a%2Bqi6bSmUxLHhhNOFI8XhZeIpAtdVcWFfCojKJm%2BRcPpAF5dWQfOV4N6MZTiQBsbtoptAMoIgVkxtuTkse5Kth0BtUVd4FGz%2FlDMjfxi5blsGcmSVCovPPJJ0sq6zCk4XT%2FEY5eg7hsDrOYIS31xa6pBohCcPaqR4ISwltTv%2F0kaF2VHng5r%2BcuTh2nKRC4Wqc3TlNZthK7lLPW7HX6GSXm%2F3%2Fu7GoPj1bwlTJP4vSxWaNud%2F8i6bzyrYUMym3laavI9vYm%2F8qtj19KYORtG2Gfi%2FVqRzbuyLSzV5J90JDqIMu%2BV2fvNia4qY3j0%2F9jcj%2BQizUyXvIyz68gFn9Atb38c2chGEyGK4RSOnaMjTupAaQV9O6hSoELzIFVssGadGChLgH36YLGzh8ntebveylVmiYtZkwN8Qdq8eCFY9qnbS%2FuYGCCygn0NDPaMvC9K%2BztqAeLUM4iSP7QUYrj8l9b0Bc%2BNitcOa3rXLNJiH5B2RRlZ9%2FXO4rTSBrUHvzd%2Fyyjz72ZYaUzs2T2ATE%2BgOT1kjQDwv7qjjClsy3Ji%2FvNW%2FQ%2BHdg5fWx04PEW0wYfXmxpKQdbjUPIi1kCFyBNwH4t400NMLfwg9MGOqUBAH%2BIwpAdAPLPwZS9m%2F7GTFy1ahMarYB3z%2BeOoKPcQcRvMMQIJ4lEmCEZkZTyaNHdKlnFeF%2BqeB0f3cfBkbX1qTrkdqwVw2hWUOMLJrh4mct6htHMX5YV4kgMLISOPSm%2FZsZiEYKMAg4q2ts38QcsozWCcu02VjwgwNocgp5NTbY6ZZmCzPhKwmHrigmNxGeKxfKIvDGIDIL61CZ%2FXC0f4U6002xE&X-Amz-Signature=b5b767ead176b5299445a8deb7f3159707a6e174771f544f33e43ad5ce0eadd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

