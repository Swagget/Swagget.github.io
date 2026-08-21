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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KRV2OVC%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T211137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKaJPywYQs8Fl%2FDqolkpF8MOVWmHToqk88uEjN%2BpX1%2BAiEAj0b5ztl%2FwKQC1Z6binlEzo0KQPglXsmzvMFyhS9VMo0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRiCWo7%2BF9Lxst0XyrcA9YclLe6v0DOaenHlA4FaMfFIDeKWBgW%2BOaEH3ks82yLodZge0voHrvaddkS4I8nYNbbckW26iAHJNocZvT3DZbJklAnKfRMUHRRjETEP61AMoSdm9FcJ2PGRZ5IwTOzjny1nrhO4dFsYZl90UWBNT%2FzjTUtSYMX0JuIEBCX%2Fqw9Na0aU7785Qe8jkXnKNI%2Fd3YW0S7qSZpC3ugmONI0YIjkZZ9dQc0N048EMCobKea6y74huBgZNxMCue3wpkcjgXpe9Ipz0vnoxy4Ukqhiy724%2BoBCz5aKB5xZ0AD3vE1HcOzYJspxTBB4lOwnfrkHlYry1QI0dl5KZ97gNJLXYcbgIkGw7kMDMdyzak6GSer01gjV%2FUOTs72QFwBufU8VkOZuVQ%2BbfpodfCi8pYF9FXMLwEjT3ONDmamjSNul%2Fc3O6XthdMnCJjOvjAvaM6xutWkWO5RBd314K5YdNUmm%2F4DdTIN%2FN08EKPPqXMZAJ4IL8%2FTTcxSLF5%2F6Z%2FWsbalKToUuSC%2FpI1638ClbWno%2F5XRpk%2Fwsk69rGwrjT%2FEk4p78kqT%2BXZifDqIpiigzYVi%2F1y2eUnGrkBqLD%2F6wS1fiUhYguGFWjyw9RNdmovQ4K6juVz%2BN1hhepKbNoUrqMJPGotQGOqUBQYL631qgylPV1uedCwrk60GOKWaWDhtbYmyq87yv%2BeCbfXCBmzlA1De5ibZgK38jzkcsF2ZEUEXVvr19PS80L6aPoe1zDZ1J6Ln0kAXCR2YTwQthjXYm5tjEtUHf1%2BNDgSieGhQcv%2BFPyM%2FAGegX2hZ3eTHibTbCJxuh3ZegOJbhhX%2FyAxKmD4zDKdWt2bQbp4sA0afgYv7f3STXRXBHZXaOKTMM&X-Amz-Signature=6cabc87b36dd75ba76555999795eda242191bde8300c944fc566bcbb508e8090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

