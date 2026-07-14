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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZH346P%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T160708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIC0OuPs71Ns%2BDbqRjn0ltl3eDYVGEaVgKZag1sW4%2BRpfAiEAnfm1jVORb8HF0IcjYPuLdfVeETYrXVuaGvfmVNptl0Mq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDDfXXldu4zG4i2doDyrcA4OuAgXtSp2V6PQEK8DvIr1yllUlPOzozye7Fmli1syLg4CW9ZkrdB3LDPTbOCxmRzZo0Dg9jIfK6AO0DMm%2B0ynUPvS7PnoDchnuoXEYDSeAHxp9FjjdMhJDTnROn5bsOtADTkFHziz%2B5i31sJHOukTydmAcLhi9qFgZgsaUzZSRXcrjnjM1xhfpBkPk1NTPY79LRaJg%2FYjJYuDNRAtiuzjlUcy6Bh4V6yMLIvHYfjrH%2BsC5sqhZn2WnUVa35J%2BCIqsOWPPgLw2XbSrwnibYbT%2FduNxAamucQbm7iIznN%2FbZMcbBeKUVjr8pJzh2EuAhK5fSq3a3Xuau%2FLZWnpB%2FcKjbiPwvCWHhapWVelVFEwCmohXlnH25eK%2FHs2QVTO0UKz%2FZZvssVNvxo2NwyDOpj7QagvKK5m1XE5k3EvQEm3Nsj7Eb3n2YqKY5Ek595XsxU%2FBExCSmwIj8blvdBtlU5SpOsBQ45kh1rF%2F13MqAYfla6yRreTSS%2BXxIiftSBC0sfi6PUSM%2FChXO%2B20236uInCITu9oki7%2FcSQz0bH3l4fUP8g07O3RiXXJD4EHZwgFdMw1Y%2FKdBM12O%2FF2MDQUUWlDJGDkO6eC19pB%2FONpoY3iR3kMILPA6ssHhpWTnMNiz2dIGOqUBKQlkiVEgaaf602ZuUCJMQPCZp8iDWXNreBrI19OAxsAnUsw6SFK%2B%2F9gb3qxPkx5I%2B9YgH3nGnr4XT3N0mPeJKM%2FLHuVO3HvWtSGJkqwxJUQmolthh7kO3yRmR0KNbSGhUQj2Y1TGysfUzC3827QAqjzpmMCglfyxJ84ZaV4pI00oKj23jZMbP3JpBp0UNMP80ZXBoyEyMH0Fc7H5AdK9VG9a4oT6&X-Amz-Signature=2a98e0e3801c62c4f2e1f4fcec280027c254f16c2a70e95d6da372d572a1d34e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

