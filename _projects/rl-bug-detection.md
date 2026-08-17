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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG6VCIHB%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T181857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5OxBwtP4bnHOhy6p9NHyzHua4J0%2F%2Fp0ohPSJagRz6JAIhAKPuwz7IFSYNM6eZmoC6qildCLN3ohMLXTRba9%2FJpK6JKv8DCEsQABoMNjM3NDIzMTgzODA1IgyPzKWzuOlDQz9TLqEq3AMSCR%2BH%2BjgRJATbdlArockexM1%2BkYoJWt1E4vrK%2FkkAiLg0jkVGYbQv6IN52rELxA6HyXIQZtdjTrFmmVPAiuwijYtZRv%2Bd9BalUjlNKuswboHnkwsD%2B1qpwl8%2BxtIaFc54OyF51s4D2N3pNeBqtv4HZvC6nxkhH%2BOWEOkCad78Qhrjr182Ia2%2BnVJFxGue%2F0dr2tiQNTDvn7uBZPqxiwo80KaQLx%2BVFwI%2FIClGKpb5ZIk9L6XlX2zTLf7gGggCWh5qN62J7eOWM5Cyr1uEbTrH3Il%2BeWogYthlII67yeqpu68mMlNkWalzM7XNIvLu8LSMIvhHNJglWs1KG9xZ7RnswQ3Z2XqEyaGeVvHKXXmxdB%2FXpBj3bjA3sBn%2FDO2z2WEl0n8d6o80KyHtdyl0RbZNT2XbOJEB9gMBCzKoTxwL87bZ8Kq9mxZRKuL%2Fm2dJdLwUGIrpUZXE2uU9MqjLlT%2FDzsUKya67yJQFuMEc%2FhMnqkYtZbSNd4%2BWSFJDIV24YMFj%2BpuckAOKbq6I8yMaqWJmGZRsaK2JaWFlby7iPyrQvOUw7JA3D1WsuKs9FYyHNIbPPQHnBttoAs0LHPKeRh1nilTfasOtywE298zrnFGxq7aeva21LxeaOEjNCjDDlY3UBjqkAZozS4q0FiuhdW%2Bbvf%2FLhUJA1GRzt2odNjL%2BTbgI6QQ4MIxJonU7PyHERic9edH%2BHy6iHaGODvJBpHVmJRJZzZQGzs3Uqn5L68HuTahkRrrv5D%2BxvVScdfV81imPpS8DOXEGBIPEn8oNZHpGPH%2FBfLD8uMpNr8gOQWRFgo4Ci%2Fz6dmv1f3dLc1d%2FKk4uYFMHKdT5i%2BP%2FhVvYAMU3UDKm3W%2FGFMq5&X-Amz-Signature=a2845cd82bf4defed3fe29cbc98f5f052dfe988805e16dfa937b728fd13bd304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

