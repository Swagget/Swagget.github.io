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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCS3H4SF%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T045159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIChn1a44WYKFwf4y3FX%2FHsp7KEjDVV8jrrv%2FWvnAp0flAiEAlGNG8T4DXfV1s3GHa0tIqApGIYlTvDKx2ck45vlYlQIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGSHPMqzXpGjxsmOXyrcA36MFRxeQtryAY%2FYNCxNX0Yp4qk8ZQ%2Fxy2ZYh8VAO3pd%2FL5ZsolsUjroWSchCK4FgJL6Rp6M6kLE4SGALgMoB1snKTIHsELYbdwpfhJDONb717kghtj319VTDFUAvsjOyt01pBYYWJV%2B8UhDpiJnUt2a5Na%2Bi3IGdlX9oh0UfD55nF6MTexfZx7J0TqEULM9XzKLWFtuR85giuVhn8O1lyQrMiH0%2F18qmjUnIHAPQa4iX8vjmMSFqPCboamORRUB8xNxoBl52jTVbSKAE78VljRFaJPljDy1Pl1J1QSDmUrlqusBRIHmsSqy9VxEE9yQxFiEiEPNSkixM%2B2mehtR0SG2LEYZTplT7urNeyz5Z1EMeKsrhpH6QIoWDnp0uVBq7yoIenqSQYyVgnZTFrwH6u1Eq1NoAfNmyF4rVMUMB4pYDn3ax0DrJrXMytkTFxjL%2FLUHYAvcSkjvsskyDAhSZOtqwFF5gGMMJSfXQIHZFv5slnZbyMpBZIakyCVeflHHSSdzpwgKhMx42xL02Y90FZ1cMrnps8XBRL9HaGrx9cKaPsfyO7x2SIMpmjtowMZ2NKzkIHlSAleGa6qvEVdFPt4ys%2BcdBZSSLYDbyk44SkmRpoZjFHL2c7FvD0VFMOeC0NMGOqUBIaqc3Ni0tklekiNNJMi8ZdkY%2Bw6suZuCvL4RQ5BnL%2FIgPtcUTuqNURSeFElnaicO8Zpt1XkEG7ss%2FKiL%2F4ZrTExgPNWIkdvI3byFmI3Qbp63ia1gS1z%2Fz7WmiUQtb7B33pKYDQmqDVdJ1hfui47ddjbScYEYQe8JJ0wsDRLGFYb%2FAUX1DyO0b%2Fi9ACtI8NDvtmbVHMXES6xD7hfTGel2Q%2BZdtMyE&X-Amz-Signature=833ccd57c8289f75c17478a7d57f8382a8cf388209de231820a4bca58caba193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

