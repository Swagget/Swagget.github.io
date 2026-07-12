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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQRWQYT5%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T051243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC1xGsV762KP3C66SpLV%2BycEgZUOM6aPrughDSB559UwgIhAPVg5roesXxANRUogcbMoXF4yWhlna%2FxpZr341kdzfTtKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWNmokSIdSKDWVx5Aq3AMaYV3Rb2xXjPHK%2FuOKtUwGN0G5W0wogexZNboWNCO6smbA%2B5zC5%2BSSVCKyNzJC8iJAJUowjOWTov3cuMy7sGmVFL%2FE%2FXgq7Vcwg6txCokzShB0gKzLxWxNI%2FwdXWJ3lMtAbPjKcq51JL11Sek6vwk2%2BFtN1cLO6Q0b8cxjjye%2BmLy6%2FP0q1D%2Fk1M8rhcv2HMo%2F1Yu0hYVaKo6nLmE87f3d%2FRnc%2FPXtscX8rb9%2FP%2B74Vc7rwKF95VsUAAFO8LEYy41q4H8QWgP7Wnjv0MHJzU6OEqhPx7UgEvbaDMXSJb97QHQ%2B7s7mVLSzREqwajHKkMRUgnoUxZLjDIx%2FlUk%2F8JHZKHvU5OOKVvk0VeyY%2FuzD96WU1kSxkyuKZnDsWjW%2BFLtax7y4xsMze9aVWn381o4oqkU%2FjUlbLgKAzz%2FdLEpFIY6zdAwE7y%2FRQanHOnVzLpih3HI27XKKj05%2BCGlbGMBlnseeGFMmKCF2oF%2FA5%2Bw%2FL98WSd72EyQH9ZyOXw0qFSSEWK7QbRZSxqbGHTr2arLxuHC98UkMs75dMDHEP0j1%2BNXje%2BnjHK2zFBJe1XESTtoQzYzLBySTMu13eRL7zMKu5Ln8MgQB5pjYnzNRKH1bfWDS6GRb63Bs5QTIcTCprszSBjqkAdQB2ab7Zeop%2Bk6H6UWZ8YIGg6z9Wi8wsdf0FRqW0JPaC9wH7qr9FICYZmDIl8Bi3Xls3fjoYFOCoETXQsHY%2BvUAqyX4TwWE9BlySYAgXb84Cbvz8TOk%2BaL2WZcLs3OdhXr6qGjETfp4Gw%2F3Nl1mzpeiByoZU9ZjyV7u61Gs7TV1oiax5vVDqDVYApUzmagAONr2uR0unbAzJ%2Fos6iuriV%2FMdJZh&X-Amz-Signature=e156a963bbc31ccc28e44c8d73d33414fa24c6cc75484a1fca87f206049df227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

