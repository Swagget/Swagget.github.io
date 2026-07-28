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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHFBCXK%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T072904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEI8%2BdIw1gJkAJ1xA9nobP%2BmXxJ%2BP0wKR%2FOFE%2BgGHkWLAiAydFQBaLItAStZ7pPAXTsMn71BmLGXrK6ijE0q%2FUFGyir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM22ykAQ16PUF7hd84KtwDGUDiyxih68gWLOl3YIG2xHxNv1PfXWxCeMiNos8iFspB7IEZzxtM0SKyybLWn022%2FuF0lojHhT95XVDAglunyap%2Fiqd%2BvGe%2BXO7d%2BkO21pe9DhUscRCcB%2B5f4HbicfgEz6C746uwR7EUxpEPWd1993T7xCV753lb7BXCo1eo7BvOivqY4%2FewSlrYCJZa7jeExPOm4LUWzaQcpe2FGakGLxbMbdK0uDVy2VGy%2FD7T5GLF1aK23vMxBz4UHOx%2BmISlXo43iGd%2FNMxUDTcKejsgDRtQ4kQegZxPLeAo0QXCfStsTozIlgKaO9XZrNMjXU4wQPTWBolZJEXzNAGg9iTj%2Fe2sb0y1g%2BVHl9RrzCrOz712ndcDz6pZopvo3C7JNbul%2B1KsgWczUbK2SPKe0TRA1fLuBXAuuM3V%2FR2jiXUepkonkdJGFmQLPV3biK6ucc1d1XVYRmD3tJAz7TiBuf759L%2B578iJWhgAu%2FA2ACb9I%2BCdy0ODbAgV5IR7cXD8RjDtQEldDqvG9BKZDf4mqL%2BBfbtagGXJ5t%2Bw4%2FWVtu5GoleqqHPMSJBOA4OU071SbUlZo92YazPkCQvKvP1iBPBTaNXgOanCRhG2pl1RVqhazVHYvgQjWk2tfNUEeIUwvLKh0wY6pgFel8HIITbNENNg0mX2JpWBL6fNgA42PfBpZyyKUsjUMPiZUrZNS97tuXhH9K4AP%2ByhVotHlUg8p4gnV9BSeCVcrolNJrACz%2Br1zjRAa2nAGZbdO9zRwI5Fm7KwbYE3g8L0Cf7%2Fe1uHGV3mwXTqy%2BfM5nTNUS8pxX6i9k0xkYg1FtJhqALJcwDF9jRtW58o9u6H5CCmET%2Fu80Gprn6i33Ub%2Fu9rM3nL&X-Amz-Signature=74a259889ef104def5b57a49aa27378f002bf8b7327bce21d4f87b33f0304be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

