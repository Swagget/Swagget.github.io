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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ34BHJA%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T045135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFuxlKlrvF%2FEwJN8rbdNzCT3p3Qmun7gqUnupkGJGnRuAiEA9hcceFadq%2BEAaWUzuNUWSlii2xEt5d40VFes2%2BacMP4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDCBczSqJk7vPYsGI9CrcAyOUj0EO1rnO8QIf4M6JDcD0YRy%2F52iKddB2HBRpd7tcN%2BgqSQFWjvx5faIWf0ZqjcbHXHtqDpfAyqcdRGZd659GA9Oef2AqETMSNod4lGra8WJBDJH%2FLpmIktQbOOYB7YsO0S8Hvp4Arycn%2Fr9y%2B8Bvz2hS8W96PLvLYWpIW6kSyCZPxlHOn7xf7gSX%2FYTJQCVfeWIg8IWylL8attE23AQFyPiAuJ3uTV8XqBFGxhWoFfG8GywJpJ8jycN1eCutWYmYYPYyWXM3t8sFrnPzk0oNdFbvfCGNgJTIL16nmugI5qV%2FL5%2FfUKcy0LsiirwhddwnpQLZca%2FuUJOZmYc0MLJnzfAMjYAyM4hU6TsG6%2BvlOr6klC24JmQkooMsMskApRiXJxCNRoPAz7EKQ1AwJeob2oKvigQcQK%2FTrGMvI%2Fq5RR%2FQUG2c%2BHLBU4QzHPDl1xkpK3jmnHwhd74saEGAhkQtqNdKMqoflpxAddIUYHvjHhRN3DmVq1Qnw%2BspMyWyjkhxXHwMQ3pWrUQE3951YZBsde%2FPDPW4NbtCbuThs8PUqWsuZ0rEKFI6lbN15hV%2FlUBod8ndLoD2YU%2BBm%2FiLnOEQt9e43tQSzhZOnF5fUN4R%2Bp2e9gBMzpJbloUaMO3qytMGOqUB%2FIgyEbnTYPOnVKsDmLWnxBkgaGK%2BZeuqR0FTY50K%2Bz%2BAQrZTq42ssUxAgyXVeLEbNkNJIbDM9gF%2FP7gZPO817hQSlZz1RmgmFyvYxRQVp3r%2FWHw4%2B1DjqjcspJygu2Ar3jXk2WCt%2BtUbylVov9AKWpZTnhkmkr9lVAsmb06lFXHDB6SJCB8e2adePBkaqYfVP3DWkA8JucIhOnN8oBnbKofUIA%2FO&X-Amz-Signature=369081bf555780180025deb475462e6f600fe4f98a01054315c12e6e7f8d7073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

