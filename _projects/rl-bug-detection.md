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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRSSSF5J%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T202816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUPmmFI07tmqwFugf%2BdhTJHtorRYfKqZpyDuAQWtwRtQIgWFmhmeJBk2ZIbctacKcplYCfkLT98NSK9I3UMgxAUz0qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcq81IcCBrErjoB%2BCrcA9RhXppC9qf1bR3CthbuAIGjKI5lyAjRd2X69hfeC4ras3mV7bq8GGhDtfw%2FM28omnxFveG89UWkWwVZxg6awErAr3C3fF%2FOQVCVG%2F2zHbReKab1IuJiqRkqF8ieNkicQE%2FT9damYW7JUSVVzJDrLGuL0wQf6dU55TwSIfQOzBfk%2BCbBBLdREaEHQmz2LHeTw0w0gjjIyspWk633q4YgTfxNl1jEmz9L%2FK53A2utRxnAmI9y3o2RbuPms24SNzK3JHoFWXOZ4Y9qxgO%2FrDB%2F%2FiAaue%2BA4dJhTkWlqvl6rIJjV4qXsj8pMRgG%2BGfDyCDMTYWU6jXuHDNNPlFSsDmPx9nHEFw6vdlAQ3uAQWndiOqd8ApC%2FOuI43%2BBWEC8rGzR0GzbzEeTbwV2kdblKzbwS9C%2FF7pixJ5HjJ42agbMzpS2i%2FGxM8hiwfjj%2FKmrAuyds%2BBJpsnUPkPkdD%2FRG1GFyjv2F8UualK5mK7OK%2FWbQ8stWs5W6i5aS%2Bnz2N520pgufWcVXkvczGStNWaOlv1Rn3wLVmGWGYXs9NOc5cSZLn3Awq52M6ZQd6SI1lI2kdixDkugEVSzcFo8DvQxVnRRKptS8Q6xbprGAtsXDzcYxfgrSFsMEEsXcDfQEqeVMOm36NMGOqUBByCBgKS57etnxpkmaBAvmvoBJ2deRfulOrPui2txPmhYOB5PnhMQg0yw%2B%2BL7%2BDQnin4EnyerYPw3YPl1lKsiuyNL4vFFxMQabKwamXb8mQBOr85ON9veXsCb1iM6vAgyp4UEJONmpWyMtEtWkEWd02pwU7t6ttnddCUEDnLPkYIp1mEELyIT0Hfl3dQ67A3Lf9kH4Ezc6c%2FZYcSh%2BKVQxb16AWWI&X-Amz-Signature=135fa5a628ee4639d7799478801246ae9e78de03a93314bd69c019868b7f478f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

