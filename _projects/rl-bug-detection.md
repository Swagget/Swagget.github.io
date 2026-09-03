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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3GN235R%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T063505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDRiwDJnamWLaazXUYT%2BrOsmi6NjrUL5umeAn5YmKAukAIgOmJ6u3WnwwirauXLVWLtORu82cfdwpHYye2zk9coun0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASVAJF1sjfqnbwPICrcAxmlr9A0Mk0zPKGou72XFqf96ELmH43yNNl%2Bx%2FtCNQOemD4qtw%2FDTsMLkLdOII%2FcB%2B3OdVvHytmzPY2DPIdlU1ugKb7TF9XgFfxADkweStzKca%2FuUETWP4xHb3rPXVTgnFBlf9HDWELwg4glJ9X8dg%2BPaC9FV6AqSZ70PcPtttWTjFRg94xalPHWfI9axIUtMKSvOWYfOBDDNBI5Ea4Ow3Syvbr53X5Z7foLhJkIEhvGoMOk4ww5vJlMj3BXlZ7jO8O04baNVKx9sUhJGs6c0RLh0acYdvriOekTA0Fpy3vE5bo5W8VbytAgiTRqsOMZKZhziHdpuIQKtOG0%2F8MVMdZiR0nftRRhY0MH51xZZLhCMI4%2BwgdNywppURTKc00%2FT2p39z%2FG9yoTOk0lCqhKyhbfFKW1kJoBc9KURNAgRYm%2Bup5iAZI8SdAcewnytABCFSlC2XT8aXTVgY%2BDP5FeqvXlzADbODsGJl37bHBsH2VrM%2F%2Fu%2Bu10M4ZuRNiSKgNhZb5ADfil82Xox69hPKnyOaPSMgZuOmyxwwKBHBAIvYIeiTbegBVKFiP0LNiXTYv%2FL5cRRAR%2FrRNNMLVEcpxHcOii6Lt8xlwjIx%2FaB%2B1qYHLVMbaP1DFJ0jMpIFclMKO949QGOqUBaspdD1vQW9rE1IQJ7hLgcDv6gcFhxDaKHBSLC9hQp5ucEPgkGG1tbnloH8wjawjq9YEo9loUMutA1h4%2FpTIrlZQsKAplfM8PHU5B3B%2B8ohHEGIZvFokfeI6FexN03nh3vCXGBhv5JxSVVWeX%2FZAn%2FcsuqZoF70KK8vIHcbiIua%2F8IBae1T4QePIxfE%2Fw2ry9%2FzxNzZQM8JBOuOCyWC2X6njzLRFK&X-Amz-Signature=0f1aabe2b1df46fc812f2e0fcd5ea0c0c326bc341ff758d7a8a1c77b8f80acd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

