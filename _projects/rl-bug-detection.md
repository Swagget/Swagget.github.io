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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXQPAD4T%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T212723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD17%2BF2QjXwN05HmFa3gMMxvSaEE8Gmt6%2BtZnjZXy7h3QIhAMVY0wpoCN6OU0UK4ds1AHhrUo108bT%2FBdgfD4k4v09aKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLT9O428f5k2TLVXwq3ANBhGDBitGAqvQqz4PhH%2FB6ZQpvqMi5oXXSLFmn0Fs6g2uOD0XDHlOGKiPy%2BO%2Fi7o3bfwX3cfyAkFTl6QGata%2BnixxTOHjGT0FUfVPkhlKfj5DGkf0SFm2%2FQSpqlJKK9yiuZuSFHfQ4TELKyfynUjeuhfHEetsK5zSq%2B64Wc1cZiPcD%2FIPcKiLf8Ttdjvx02VIaPIrh19avomVQ1Y3ontqCUCOtu0%2Be5BCtrtDA2rGANKajgQLgQt5q8MCNoogau7%2Fr7m7D9MebRlQDrEm1Ui9AG8rEvjjnvNyW9ocXVhHHd5jIgQN272nAgUnAeVkQ0o%2FlZq7fvTj%2Bo7A0on4LTtD%2BSpVBHWRFotNUNHS2sHcR25pSij6qGVs7MJwgSswivsFudfgakiNBsK7%2FathYOBLt6WSa4F6iI8yMo5d9Hjkap0q9FJh%2FivcpaZLsKTwFrykWYZkSGkwGvn5m1sHLBa5bCGC%2FpuEoAB6c0wTHtdfUe4j4aEHqFUZ0Xu93CvJ2wB9mD9tnfJmYfNPBpzJ5n3ULwuZHJkvtuX47m9Do81dnY0NLhepCzl0af5e2YUOeMqjGKNYzWkczx%2FNeXpdcX15xAt0wOi4j1w%2BrD6J%2BqCHE9kTuNfQC4%2B%2FUQUssYDCd%2FqHRBjqkASypQD9miIGTIJmNdPxw5aEMDOu3ZTZpKRcBI1F2UR4KC8LPebaKvXpo40M13ImQN4ebqF%2BKz4E4ypVyr%2F12F2lc6qdooQsuWakcp4I%2Bv708TGOC8rym1JY78jpitm78pls91GzdsUfFNESJpRjuVfVKe80dgfimAto4VfTUTDfxx98mdd4tELZhen9qYQYt%2FvERaUhQBbL%2F1eUWBc1nHOdF%2FzbU&X-Amz-Signature=322d4a7426eb8fc50fc5378897edfa7bb43fd35d7241ef3adcbb815b835265d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

