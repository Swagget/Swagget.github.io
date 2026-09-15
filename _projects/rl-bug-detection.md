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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FA4WSHC%2F20260915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260915T203141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEtZjz8x6t3op1jUcWXj1%2FBpjKAR93%2FtcXiwzcF91l9FAiEA%2BzgrHGGi3rqAJpb8fi0EGTwPzX1XUcEaBzZnrWO%2BJvMq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDGI2IqOKpmak08aHPyrcAwPYEbAqMQ7Qj1ePzfmUaVP%2FmqkNRQ72YLFe9xKX5i%2Fc%2FOryVYH6TUHwdgRKX9jvS%2BQzMelKO5mIevpg7%2FLWGOrpHFIbpBd%2BtFjuXvaY1RmtGv3EBz%2FYzTi%2BXwxPq26S2GiqYfOiEuhYcJPgxj20lVAZ67bRM5ec68WlU%2BPkuEZGdclR%2BTtKj8fuQgBXYS7JI5h309SUu2Lh2SOXlec7Cxnebjfh5tFZg1NstpUU7vdClnkJ15%2Br48csI6s3ukNrxwIHcRALj%2FxksIeyGCYzIC1MXQarwyEDavlY4ryIu0V11pegexNxYtculLxqI4LoL%2FoEselAi%2Bm22DA2LD9ktgvLYWNOfClz4ROnS6If4ngK%2FLG55tHWyl0xMzMbfG%2BpjrlMRasQY54Xxsz6%2Fze5U1XDZHet0FPwKTpBJclwElPO85OoiIp6unA%2FkZAjNJ38ahOlJHVTSgGQP13J7NmKSfB7HA0ET93XwV8j3iMGpDbyvtgbpigorx96wS2U%2Fn3mRb65P6vgXw3%2B4fqIe78j8soktHDBmrXal7ERz85%2FECzhiIk%2BbNmYjMdFAb%2B8pZsMZ%2FScImlwYZ%2Fv7dtEKV5qsfX%2FYlwcOhKi5YW8Qj17oKWaZjLh6dV0QA8fI%2FPKMK3LptUGOqUBHjYH0xT3NQh0UZHXml%2BJD8TAC9V49EXspzUV6UzAttmrP8xQKMF9SYGupPqzKhBK4oeH0IIdkQi%2B681YbQk2ijYbjX8JXkYx0LYz2Q1IVNXuzzPl0x0fevazay58M1tKviW5f%2BoeRTxiPyVFHFr%2FFe%2FQXKE26MdSbjJj8I770fveEaMFb8LHOTv%2BniGpI0IMGAnfAJhzF83t4ewK2jnf6BxugfYv&X-Amz-Signature=172f6a7dff00c97f0fd72a5a327ac46dc611abf434d76d9b3ef2553d2e4a8121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

