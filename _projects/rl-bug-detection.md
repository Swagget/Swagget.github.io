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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V533BRFF%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T144428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdMoFI8OhtMZXk03nP%2BpAKO2Ry72dU8hMaAbxUN6DPFQIgUvf5zxELx%2BQjT9nx%2F55rajV%2FU7iqH5dSrjX2%2FOOBkvMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJqqDHPUf5UMCSrqFircA29n%2BolIoz1ckW9uuY07Bh0LpsVXuMRAXTd9MiAI7KKQVQGS75pr9jRlgptHSDyAjK08NSKTrGZgprHcdVu9%2BvPrvxzWUXfHi3KDrPsfm1ajs2TeAAqTtH%2BVcl3Yd%2FZpO%2FODmFKIlcK4QrpsUdTI5bo38UclXeZkEQ6uOWTC%2BBdnFa3ju%2BXGT12eUBP%2B0QPVVu9vOy0%2Bo4dfraceSksQwi7VrxUaBr0z7UDPVsFqZ7xbJZFI%2F4iP30KWWrdG9gazbaPkxrKIbx3Iz9J8o079%2FgeWMVV%2FdRAuU6iqXEQh7fUsK0Ww4ZOVZt9WsXcZm8JeIk8DOeu7TCKZQyXbHsdPM%2BFR1VHLEAUYyv3A%2Bmf9Q5tatyBdUFUvhAPSABvq%2B1nbZ%2F0NhjxQYXpFKpzkQBOiPdXSB9iX%2FNVQVp4tCktSoENgLesrD%2FSfl6sg7%2FqpPiLB%2BIQWSL%2Fz78sQ0L3Vqct5t0wNUKOOlq1WKUwVEMPy9sK6%2BTkwEn2GMmw5srorqEJWHLFMZKxVMjmybbx433kvVaRThmzt1LMlNAkw2dhOZa522dOTDEALEBDr7Q%2BzItKvL2xwLefFwstiDwBh96fwwHYzQgyZDro0lDuHUMd0qnQDJDAQ%2FXvlbGO1gvuiMPO3y9QGOqUBKBW38elYMfEtNxYL1Rt5pvRRh22ZPhkOVd%2FhWWT22Cy5pdXveV1v%2FROhFYhcaQAARQxGGCM%2FK0VfTVQwErguFFlHwe4L8JpVX4YyBbws8O0foUIjUd4r9IDJagVo0NVKQDDhM5j3x2WrOweisegKVea0ND0TqgDhbGobFy7NfX9INA%2BNaKH%2Fcmj3v%2F8F8NoUzui2NlCQCuAx%2BasL3tAnHCSZsya2&X-Amz-Signature=8b764f7a21817bb523d73a36f787dc4dd54c433744222f52e6c3f7f5657d1524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

