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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ZV3MRV%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T095439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFUm5bL82MjWoNa0hvSaIjTZ0j7ynP2OQLjQCI%2FdfGH1AiBMFFwDuUN0%2F3vTtV%2Bu2AqanG3Yo5ukc67S6P5osyxG%2FyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt2BdXoIae7y%2B867hKtwDTXJpjfZjBBy9ADM5oFTHC0e4iXqD7%2F51%2F%2BE5sNcWEKYI2PjGmvQOqUo%2Fm4jYLMwL51hoCasj8rer3I3O1V0t7PjoMugKdaj0YVVfGd%2FUiV9f5VuncanM9eNcB6OKhgo1nRiVuSRj7DIz9AOIje5VsFklqAee4pXbX6zr2kQsfXzkfhrbTlX7Pxb%2F5HGwpXRBk0xzhwkN%2B3A6PwcB8Ub0XSKQgBmKXcdhiK1ObZJv3YtYuCpGofELFtOEYkF%2Be9cdHGw2q863WU0O3Lxs0G7HIVj1DY8fiakWX2kRH%2BaFuBwd%2BBe8qjz9DMMtwtQfKdYcda6ZDPt4GrRXOdOLdNSITwPVLeWHzWaK7v5J1IUlM2HBEWK%2BmV47HcPRU%2Br%2FnvrqVbTfuNKr1sf%2FjduZNGsWycLKaq1B8Gnv65XOfDpn4rqIAfQ8tuGcw1w3eEw3bzoDC4AZ%2BVNAG0Rs2fhKEo6stYka1S9XBtHV%2BHG1UoDBzh5SqQH8BAY7MJFionc0nz6rrH8Ng83%2Fn2sqQwgUjs8H0t7%2BdDVJOK6L8vjD7dwadhmiHnmPOcV0%2B3OOnmZAnkQFQjDSAGsdQYL4Zy0atdkd2IZeQLyXnl9MDb9j2M%2FGq8lpss%2BUaZDt1wSUbIsw2Nfw0wY6pgFzEAORicU2LPtU%2BBHR5Wvw3YhZW8ZIid6wh6AdbKCCBZpfLJa%2BXVRBDRXq8H81YZYT0eJePD1erU0fR%2Bcwp5tOd9pH%2FY9N%2Fx2lR3beGUgXBbCGr0ruJxHFBUFVhZd87oEEisIpB8k0URJBGDMGzGeuII2RIRU%2BAwD%2F8gZnUawvzPhLXgcq9Y%2BD5CDKB9x463t4IXzGzSCD77q04E6kvgPni0Hbev%2Fj&X-Amz-Signature=cfce59694bded4d68f50f1f34844cb91d335bd7cd6259f0320f4f794476096a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

