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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWMWM4M%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T100337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdWV2P%2BGeKPMx4%2FsahRLEQUR57aIkUnZrVUGJiYyR1gAiEAzM%2B8Q9IA%2BRsbssKjthj7XyzoT2YCMjX0%2BSRVPl93Z1kqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGPHpAij1le%2BZp%2FXCrcA%2FE5tC91VjC93I%2BPxkvIfWBMAkmVgJhtY6jD9O6d6VKHc0FTKR%2FplBU5TEoHX09L8ouhxj3jG8Retob0ctyJhiWUw66a1HX7aicEg%2BsWO3KOxs7j6OavN8w4OS039Z87WUEXKqvdQC9LZlIJ5JQ0g%2B51rdKnIT6Vb9RyU%2F5Gq77ezIHWe6j%2F9rne1Fd5351RdI4pBvygmR%2FOtDibDrS%2Fm9C8zb2aMnblA2JvV9dA2t1fdhGD4BuWo3vn8SDxGAqfgOG4kYjr1kyjKhZ692bTFFP2MdZVDhMZ993gNozbo1M0%2Bjq%2FNQHK8TaXkpiI4grTxVq5sTHz4dGOYv04Fzd6v%2BOdTmyHYPzOoazs1xJoeilEyFmr8DgK06BXA31NlmznOZZ2MDppTgLcwGPwyo6dcYDhXEjCgpSQIRKivTMnR2KabK%2BkoSgeLwckvM2lcGVePdXogiS4GSwa2gj3cV2Pdx9Glok7FKrFb3D7941EWMe9Eps%2Fz%2BjqVCo5G4evgdHYiJtH6Ieii9jUWcPh0%2F%2Bj9mL91q5EBqD%2FVLbMJtDNcTOn9rPy6sjRAh80vQa7nw8qfqhAj4wO%2FsNg4SBH2gqDZirC0n%2FMVLlZdmVvVowRU9WPzaqE%2BycPVSNtTbyCMP28uNIGOqUBdsokECom6gdXSKH1TVZxePhxGazLoXtL6J63PedKblx8D0Mwiz7oWR9c%2B3lcelg3owTufBhoMeqNYFICXo8wM8lTlYd8fSaQm6nmUL99OSm1SoDNyQnZZfm%2FtuTEoMrwFH2ciiCivgo59OVN1%2FDJsdXtEayq8AcXt8THlztUNPkQFNHrAvWl63EhpOM1LPXCETKS%2BtD6GkcmRqHHrVAG8pfIcY6q&X-Amz-Signature=dc21360cccaa2cab0d392f53f78bf99836f6055b69d1817aeb791d0917a69625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

