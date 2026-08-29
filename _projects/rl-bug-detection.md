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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CWQTSA%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T175735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB1sjHyJP86h%2Bn7%2FDsOkk6zCOxTmFMmNgTvQ75uJAjBwIgEguMi4ctLkMhVGnOsGWPJWjtJOAClU21erQ6AaQUDZEq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDF7q5ycE2zzGRXwpzSrcA%2B8pJMjlSQqYF%2BqnuvWFLYt9FRVEkDhOPozx4ZGhOrFRv%2B7J1nsZuDtET8T3xPjdQ3R83QJRAUa59Nbs8en2KICXQBwJEP2msf7ogXyWFl26iZgklS6OG2%2BoP8UL3L%2BE7n9Rcy%2F2u6fvEl5xY7ZN6q4DN2ys7DHzd5pRSgd0rUeIxvG8JVUo0DDVSev%2FwwfLniU13GBVGQ7D%2Be5HbKMG9Bt4h5QNHrSOJ%2FuePBAdwfDGi3fnB2CNudqFU%2FeRMNEJ5BOgnhOC8azCPVgqpLfmWzudVzv%2F1lV4G2NIpoA%2BbTk4PwEjHBsh%2F0QknYdiL%2BtWWfgkB%2Fta4ypayHcUK27o7jhwct5mZoBWKyZEQQ1UuFe%2BSyXRyZIoxC%2BAO%2FLAcU%2BKN52%2B6Z8hbqJREvXVixE9vtnrjJMa8U9r5lKa3geASgPaFgxl%2FoIEJBDckrvFpmjLwrWgh0esxktP6Kxov%2FkDpYdrDNMCLqBPDxkPPPMB9%2BeyYUSRgxPj3uqK%2BhyWyhqM%2FNuHpJPl6Ob9w009G5WkY5NkK798XDg1pWlobjBLt0AwIXTku%2BhfjJBPR9ml6AvJPbPul%2BCDdksU%2FiU93YqivtU36Gp1ZvpjVAFkMoHRMTWxmzRoH2dj%2FUpVYooEMIaTzNQGOqUBflevyrOWJiKV37J4gCB77%2Fq8v6e81JH4B59C1OMXSPCbUJtG0IFoAECuTdFYKw5y5N9hoOafDv4JtRjBjJ7XaiLRAr8tbUwHDOMNpkfjo7P%2FW5h9FCX8n3qUbgzW%2BqfHGMv26XflCGg19YDgpdYNYFslzE%2BFGlswM6WZDgiVMJc9aStQ5Y5wqgNWIWDhVihLABjpZzmhk2x%2FdZ9yjcZ8rw8gUDGr&X-Amz-Signature=beb6bc0bf82ce018fb7267579db1ea7926224fcf50f5b7686dcc38ddf61b63cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

