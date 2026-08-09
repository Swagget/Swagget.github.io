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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYOOCZL4%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T122147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD9P%2BqwVW5zDNwbBXMkVMwLn4SS6oXfA7frn5yhvbBvAiBTgkzN%2BIoPvaGQFRlnuW3IR%2FvXUlY%2BphPeI2kdP6zlFSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr%2BzG0qvlwt9My5PbKtwD7hdRqt3TvGn%2FpsS%2FsNoWaaqP8IhrgAbpwqAcBp1otzZav7zOwUtch6HjKFzpzuDjcFu8%2Bb4MrOsZjZ8yf0%2FLnPmGQ9iNZdJmTsCPTIocpcGE%2FDQrKLibdatp6eGGnYYjKA2ncvlLJ4CNZ%2Fz0O8LdFA%2BeyS%2FQC%2FbIElQWdhhc7VxKIHqnU3ppxU0pUmNkXLVhs%2BXAlS2Iiv4ut25VfgtjpZ31yD9bbxJMAgK%2Fhu4xa%2BlbY7cDTRWcXVZjjACg8riEHmKj1XK18vANHRxoPXi0Gnb7Nm1CXCRPK4kP3jRjXrhx920adJNCjxzswQOlcnQ3%2F2LERea8LcVRoE%2Fqa35wbkSzQfOfoXusOOD3%2By8Ohrue5BmY7YbhJHJCp5E5BbmWjYZ6kwhFpNSt8o75uxz0HPJ2X8ynd8MkSQYwTGyZ5Z0NQNypxOQ%2B%2FHt2FgZeWMmF63a6RX5z581F027Iwkz4izwO21oV9kInfgF%2F5B83AGtuDL5e%2Fye%2FGDQovkHA9kGTT6pn%2F%2BO0f2fqlhs6jP5Ed35zNblbdnTje87ss7zuB5ktTmMMvHYLoXiVvoJ2IuGbMfluLPw06Kxnw%2Fw7YWFHzFqIkwXYhVcwROKvf6d1gyRJfG%2FWmEFNr011FNow2KTh0wY6pgE6dSGj%2BVQwo1r%2BJsvuch6Bh7GjuRsL2%2BGtag%2BXDx%2FbDmC5sEVa2n2LBD3VLCXLr7ovow5ScSZZO6y01C01esS15NH9mLuj2J1ZsVvD2vlA%2FPKBL1FybeTJTigJSAbnbDICu2gWRMCwG7JjV6MOvd4hE8Y2WUqoJswvAo0rwHV92Dk6orubd0LEoiXwJN3UZMy2Zt4j9gdnwvy%2BV2zahWe4r3M4mjIi&X-Amz-Signature=be32f937c6e9578b9a195f404aa4d125821fbfb552e736b0b5c6aa06c4a5c5ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

