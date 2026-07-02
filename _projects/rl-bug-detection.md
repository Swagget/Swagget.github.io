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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOIJDL6%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T215557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGLkFByZoI8vo6j6eT4S9CeUYUKWfdEYwcIzeYKKyFXtAiAc2jKzRjaGnDSVvZLDqEUQK9N4pdCaVxc7OthSSQwgaCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfsFl4YZ04IzYZvIZKtwDaxw%2BAJJXj3%2FqJT4EFtqJTAZXz2vZSwuxtxw%2BypNJ3isigbUFz5f3z8zvX9rl4cbrb1yWgOwA8Q%2FrepYI4vrfVtHkR5dxSOye4bOOYwWdoyrKc4quZicdkScPa8qIm85rB4ucNf4DhytzeE9E7kJwv1RUXMBmxrrqTNZbj3inBrmP5hkjrbL%2FbZyEmHLgLWkb%2FNcfC%2BXef8kh9siJJzQcxVWDPc%2F9AubCExHDbaZtX7lFw6fS5ds9fcB3rC7a6qb9SjUyStxRa18kz9Lth66Q%2FIS10b%2FHsqPIVXMIr3SO9jp1p72IBNCJHmTDJ%2FAaJzxZPKfeKdb3NSKCBhkuqTc6cBmYWKsBPnfOwW9vC%2F%2FUDQOnlMtwdU3Qa%2FDv03d7D8yr4K92cDhXmwrb4gZZu4OQklayBWYLdryxPO0DywwMp7R%2Fn3LyHBF2kD2VdHiCXA0IxVeHOld5LOdW4ff33LCnp93wOGgBIp4dWCsJcOI0TJaD5BcsCO8Tx%2BYD5FhJB7AXj1D186UmW50YmtCLoegx3ud4eiSDBTA3N3beL%2Fis6nH8xD%2Ba%2BwRgjStbHts%2F9DoxvjkfOFp0OPPhnoP5NUSQ3XXXq33stEa6%2FdAfMjqT0sc%2BOj1LR2WjWsHhI0sw%2FqOb0gY6pgEBzJQNFI54ZBzmqNfKlVlUhGn0KR3AjIX5JoP8T8AKjcZT1psGee3Hiz2xWltZ7MeDoq78GwNkn%2FOD3JZ%2BbIkPyFg1khQVB4Qm%2FCKlr8dSs%2BtRJ6igs8sjPwxPZDfApfNOkf2NHCmHMTNfk3fpUx8jbOWXu18aQCN%2BQQ7JyjGvWbtRJAJ0T9rQyJvLzDnSJDh3gJZ1tx6dHHCOgA7DwKD6J7d9pCeO&X-Amz-Signature=c642e7f92a963b7a2b899ec4e6dbe5bf493076bd82611d6ea5b9d20809b61927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

