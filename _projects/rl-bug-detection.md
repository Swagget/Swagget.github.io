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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALZMZ6X%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T185520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAtlPmXeJwMix7CziZuvPkEio5I3Ji9Q%2Bwi5PgXrrfbzAiEAkqau9t%2FWlNcghJ7dBW4SiHTRCYNhKlcwHFH0LDe7HecqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BWsPOXQmmn%2B5Jn%2FCrcA4S%2FhAjKyfHE%2F%2FTw7wqV5HzXvTrkE8TABX9OrkyP%2B3DvatpjTagRusx5%2B9vkKoSfPKQtbgYnWerfwnva109ntEBbzL5vSq%2BXOMttcxmtP4Q18Cj7KVveWhDw0eCkiwuyf5GlLfeCDIwCuBFMoChq8nP%2BOlKxaFgGlkji18Wk3hHOAKntCwoduDEDrZo2nAGKnFJdDrTTofhDQxzmEPjkwygp2JkTg7xqMPV6fN7N46JpfZfpNv%2B%2Bt0wcs2bJ6Iu%2BOrC42l%2FHBorPOSrHqqvx8wOiqCy3vVMkGdLS8N4SKbsfMfQ7jfjNEcT9j0LWLxxln%2FJjhrV276k3YKAaffbqPCvvwSYuYTn8yv%2F91Gp9Uu5WPi2NXjgORfNhstR9BPUY0agAFGo%2F9QBKjNzSSx%2FgIgZIKNmgxm4KA4671JKFJzJ60RsXtd5segjXpFfLFRGd%2FO%2BW9%2Fhn27OIROyOfCHIUg1Hkd7418cmob7QgaUZz2UwSIP%2BvSQcYTcdUkTJNuhQfh1DN9bhWW%2FmhYlxYSIbg89Kt5mpeA1lHsqcBeIqI4Yw8sEnf2lyISx7rdoIZbJ2c1d7YBNABTa9WGAQtBSbbrx2aq%2B9w9BwMzttvZtwdRKL2xpLT8Sv80gfcUGcMNbB7NAGOqUBO8e0mpBPNHpr56LJQOCjPeVd0aaA%2BmV4AFzYhnTJzxcCSDo%2BFnAxtRhQ8yx7kQ1Fio9oFYke0ZdtUvTHrmEwGfsQEe9T5Cr%2BXlazDsNabfxFiIGs80t4Vb8GrFDBXIxsxfX2ea7othtSH%2FlIouExdz8z6qHVLhu%2BSspq9B3b8clLviBq6tN3JprK8219PUuQ90%2BfJiO%2BiUnPfEIyj0C1oEBnEAny&X-Amz-Signature=1e0e7caf32dc22a33ebffcc0bb5659d3a7d76d8d14c4fc7adce8d76660920be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

