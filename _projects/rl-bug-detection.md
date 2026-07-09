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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SO3VWQI%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T235615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBunC6Be0BT9tAuu7XXKZbI306w06YASnlR75rHryliCAiAIIlG%2B40Zpft0rP%2BibizYzeJuGMXI%2FSQKb2Ji5xx5cVSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrDyBd0GmNq6RC7ssKtwDUDxTmSybbq58J6IRQJrMB21JhlWfAnS1I5aJWA7GkQRrhopkuhaLxK760c8hbjADOoN5aztAmkYfR%2FEC1f5%2BrrqIQhPPo0lY6WqKMlpe5FeTv6HXVfjXYlLo92xcsbWbEu%2FaSL0U0LhlcqXnI3OkJS%2BakiYD5mlm2spFoVzZtSruLJDw9I9yV%2BuDpVi1YDEDyNhMBVogtKJBHeBeRUjDHEg2%2F%2F%2FCcxa%2FRzdr4lIYjxHh5UlkS7IZ6KmcXFsTLO22Jn2xZd%2B80HNzYQYIy3k1uaciwklqRtmQoDDPMF4T8%2BRmPTV%2BBeaUMvEFkwffsOZWk3PaxzrUFZ0fJ60iCkHlnxeJ7hMJYr2sy9LoWJacTAor6SesLTv9E9CoiY3ipiSjuOfzv9XCTf8cKIp4VDg7bHKngroBVlKic%2FcO77EAELyFgdxhHiJa43W%2Foq5JLJxdtGIaJIvTFOh7058kKcu7DDbHKrqeiRjgSD8fAsDahm8MoHyeyTQARbQ7WGFWAyd0spTORAsNkOFP8fSmMPMsn7GawKCQ32%2F8vN8WaDALp%2B3TPQXHvCB7sYDQBY5kE6%2BlKdCrM4o2AZqeebflbGFcihlsGcVO8XDsv1R3ezlrRfk%2FQzHj0qZZL%2BsCUx8w1MHA0gY6pgEJfj8EM5MljRqeNwSM5B%2FUhiN5ki3cw9lX%2FW29lju2N4yG%2FgXA1Te70vk%2B8nMbdKZK8KZ1eeWoI%2FJ0VYcfghSL14sTOFb2NePSns4ReMbbEHEDoU8f8Xua2GtSJQ6AtAjariW%2FpY4g3LXq6BQ48EY7nUv4yV6xCY5OlGbCd2QKupWDW1JOh35fj6xcK2DRALrIKz99ENx2Rnnifi1tenfu7EKnwQ4O&X-Amz-Signature=68e5f92fcdbbc0c9ebf9c19411c891b9e4081f0ca71e5048dfb25d48b94dc920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

