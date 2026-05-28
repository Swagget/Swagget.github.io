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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653CFIBRZ%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T173024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTlELYepyHxHTvlRsxwQgyb3kiRoQDX8D4RIBUegS5QAIgEf7qK6d5uX6leMcYxf%2FCwbb6M%2Frzw2XME8JRvW07gswqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKKFq8sYB3AD0jJmircA3UvPkpnMSuFU%2FOxNske6Ws%2Bt6RTlE2vB2%2BS3xmvkq8xlM2VwI4l%2BcKTi3aqE9LBPwdBE5M5aePet2WLBWaqXXI%2FD5rUGUrAs4xh2rE5pOA3NAQBvSWzCoHyjwKvxU0q90%2BOMbYHEBz9Y1FPV%2F%2BerM2w3ND74CGE0qEmo5lQg%2B4RjkXj03Ir30o297oLWfEU7FnZjYu2%2BAja77FXhinl2j2%2Fy6gBrdapPw9l7YJ2x61ICQf5c6BF0euIkqaXrtp4lCu5ENry2AQe9xh3pz0C16bElSh1DfKewWl3YSNgjHIwqDXIV%2BvzS%2BWQN7vmyAbtzZPedwDcRiXyQLw2V58EXe2MR1R5B4ligDv5rzAC6KiY1zbzv1H%2BArTCRMAxm7SH%2BLo1rj94gOuXWqRL7d%2BJJQi1yMN%2B7u%2BMo3zcBpxI5%2B7bjnPWsTPQUE61GPoFPinhOaneaZKnEPMS9rQiJNFDE6tbjg4grQP3%2FYrb%2BxNNZykp08WTT3aR4ZO6wVndD4y817u8DIe5erfVMz5J5aXWbVi1R9KBwM67Uzv9UQY0%2Blw%2BoBwS1fZ5iroKj18VXW41zYoOk2oWCN7zkidQMOye%2FE2ydfhP%2FT9hfCn01K5N5ys1E9GOHFCoG%2B4Kzz%2BvMKTp4dAGOqUBgOk8pj%2FOfndFo%2FulrA3C1lMetNlpFZZqSITVt37sW86BH7UER0YBYOeIAFyRpBZpUB9Yz%2FhDUdXKVD4HqEEx0Ckp02Oopmn1ira8tVLCIupUFZF8B%2BgHzJj1Vg6YlOl3gyyynUwlHeuIG6LafMI9tlT9QHCgVZhD5YdlD54dt4tsYFDIgZvPTlc5Vz5oYagdor9o4auHeWI0TPbShLYJflHnDsLc&X-Amz-Signature=95df2301b3a840e8c950553f7921cfb2d201753d748f55e5fb08b3eff7ba1500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

