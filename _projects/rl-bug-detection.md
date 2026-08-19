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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOZXF4CB%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T111306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F8VhbIYYsoc7kChQgukHzYtab%2FeZT6SSTAC26%2BlWibQIhANbxhCEBfYckozGHM7veq2W2XaWzN6i0BMphDzDrwa6MKv8DCHQQABoMNjM3NDIzMTgzODA1IgzHRggdIM3QPvvEpR8q3APLBLp5A%2FARDxtqNyNbi0J807QCDZkCMYVntufMq9Tg5HrahpwHBh8kHZfx%2F1NBja0vT3L7%2B6lUTKTSqksJ%2FV1op8ocuESNosGHYCprVoNBS2dZQ8h2VD6DktPji22%2BJoFn0tb%2FQ901L0OoxFPZ4wMP9ZQoeGdWELdO4QHR4HFqBcEu%2BoFqEKZo9DbjFtomkKKZ1UkUtPL1ssu4fRExqadRfBZ26XfSrnPA3oVLaVAJUW%2Bi42nOIFl10kgz5KXmh%2BsVASv%2Bj3Bu9G01BIPn7ZOcAZa7%2Bah9YyXeyW30UEHpKCLsIUWwUwVsNakG8%2FtjgOdG0Ui5Z%2FGlFvYv1IbV9LpVyn7GzXAF7V09AN763Tz7JZQ%2BBAZoYDB16W8nwjZQs97GCNlud1Bgasb0ADAcxI%2FuKmzyG%2BtaRvlaEd8yAKiDWbnwacBRu6ushG%2BR%2Bw1NtKSO1YXUluA2JaiT6MoynXupw%2FrTI7MKfr7eoE8UMX7FI4UHKy5WLBwK%2BVNEq7DlI2tjVNsbuTOlmG2JsTnIcgHxvVWHuC0l4R1Nz%2FC3V0TznaBWElzfPv3ii%2BFm32nIDVOaNXzFGLDcSvy%2BcIGI5B0b5rCphaoogdNAP1%2BqOgCAolv3um66Ss4HaWmprTDSmpbUBjqkAQgTo7QEsqxy%2FwLTdiTwYx28aizpzjtuA9Tws2owzHctJYjkWTHqPBx7raep2vjMBaFERNTfci9O4iTjuIwb%2FXS0btuqONy7tCB7REPTF0B8yPZWHZP0YtfriGRcGcET4owexsJDN7%2F4UJ9xWyQSl5bTQ75EtYtywGNPahkbpXns5QYX4aPBl2%2FbApU7990VwWYm61Dm2sMWAhSiam4p8%2FLdJXOs&X-Amz-Signature=c774452b2ebdea9fea882f96dfd4cff5591ae5cf65d3a23c95b71866fb2244bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

