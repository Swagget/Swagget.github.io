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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU6NSC7A%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T081437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVyqpYsZZjbJnaDPH3kl%2FKWR17fOFpvrUq6NuABfXQWAiEAhhb%2Fvr1FcI2kKyexaYQBrurqO6ixJrD53I2YLrXd%2BDQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXjb%2B%2F%2FlrcgqsBSdSrcAzUXPmYgAq%2FYLbKas6mfeIP6KAyXGwwlYYES0Hf9KQHr5XtYtZLIvKWXXOgI2jeBYE6mpJcebL7eHLeE3wzizMFwPWBoRgcdWfmr9cejB6Aejd35uGUhzkJS6jR7VEvHEcbposckRVhGWmqqfldZFS%2BNw0qSNvhjXWdwATLNwQHT9uepSWFbX23nHSshZz5oZ6Ik3uQAISa1sJ%2FWPIRK5f%2FF%2FMofsaIkW9WUHuVmiphuL5ecRTvY6WGjxPFESLXsFQPLJJvY498GRsFgnY49Wb0kdrwDYEeiwL4r09kjOB111Ne6rusKKC0sHb%2BZ7YohRfDSMvksO%2BrapHtODeFOCn16BaULuNrs4gu3eIZ6WP6PxhdUo%2FLGJObe30It3GbXjvlE%2FRVFtDYc2jqygmtgrTsE2cw0lHaSHT4p85jkR1Ru7Cn7A5LXI2wY73G4sJTTi%2FSAvqDcQsFJjOhdcNm39hLoYpsivJjGeqmE46FbarPzRfj6Xk5K6jAkHkaGw%2FDZ96mUkJz3L9lyo%2FuH5wpCnvSKckOn8X8GAL6hJ3gwOeZL9NUZSTZr9xi%2BUIWWrknGcH8oCD8EnyaWjFlGnXSb%2Bd2izZY%2BRjETUNDAFPNplh8fBSB1RCKNgH7wPJf9MPWrpdQGOqUB7V%2FaHEky1Xq84ysIJJ3SW9MNYow%2BekrotT%2B2ZPNdkl0rkjHDtHC96oBKdWhW5k4x1HV%2BZuHdMHVbWO3L8%2FnSyBS8ODISmliG9CG2s2hHXFvPOsXqb9zHM3m8F6U3SoW4fdMY4E%2Fyiv9eCJoAAzG3eqAEJnXw1NNL5sxMQsfm4eFODu%2BrxCBE6MB3VSh%2FtSyS7m2H8C6xmBEFIK9vrqlimCW6Lf0P&X-Amz-Signature=4fbf636cbf372fbc5bb4ea23e1ac771ae58eeed4aa70504d0b89a56e828bb514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

