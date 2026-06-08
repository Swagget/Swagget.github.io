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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672G4GIK5%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T023629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOzYYGVLs7f1Jbz78AGquWCxD1tWiIeM4rftpiz1zl9gIhAPvYzUi%2FU8dQ4%2B9CTQenz5OT7UNGTWxFXJSoRLBMLkBfKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhpmmFrilUljxTw7kq3AP3%2BMFa6h3XsWKSv0dmzH0CMhYbeG8s3T34Nh%2FAH3rVVrRMlG2vvKowD%2Bid8Gy6aalT%2B2EbAjs3oeG6D6C8yGNIg6EDMv5xYdT6sgFh3z0MfRrOL%2B0UFHtqcNcyAalcBhobvDnYYYIMCdeMPUXHuQ6BMUq7qc9lpHoJh%2FbYBZXZqQgNQ4EWxukQMXTuncTDiExq0iAnM4CYUejGkZBdZdCR%2BIxxNyiO0zvSdvSfsfObJlosyFRtLdBGo%2Bh8ibjKTYfCKVUGXWl%2F44U91EqnK30eCOCHRNK1frsPnCMfSdLHIWMhae78%2F3KNYJyfADLuZygGrry3cWCrSjaWNVMicOs8NnKdfAESh6Lw39O9SGgMAUpy4bVuunWJ0WiqJhITO9ovks2MVc3HzgP8KpvdXknUeyp6NC6Vd0ef1jArpBbwiPKl0hX22a8cMENIAr6PzZ2CPLw9NvwHZ2ymJPUV63YGilw%2FgldaOLOMKxVLjlFlhYW7s3p4AXpFxcWrBxW27cJw7Y4RupNJRhf0%2Bl32SCqpGKpDB4dYIVKq0PZATDU3dEpDjOf%2B5L0ti1ML3m1nku3Yb7mZSsTn9iSk5KhLwcIbtJ7MbC7exZWoufG5vSd%2F08%2BrED4Q%2FQRGTSk4rzCHpJjRBjqkAa%2BUHbNpOdoK0gYl4RLsdYS8UY7cXcYXRRCQnKJ3ts2fC7uuluYs46zoZ978ohHIWVmKgR2olm%2BQ%2Bz82IIK8cS84rOwxdfpHtgD7CRSY8UAED37%2FrDr82EfwhMTk97AYegKVJruPOCy2i5%2Fj2Oq720WrHWP4zudDAE7gkBjHZaO37Xs7KzPS3TePVw3WaQvE%2FGsAtL4l%2FBBWAjpK44%2BR%2BD4U%2B%2BrM&X-Amz-Signature=7d73f9fdc575df76bf37f72df8196e8a4c49e87b981a7a63f0bc9bd13d7999a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

