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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GWQE44I%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T152029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGNkD2p3WhkaL%2FEF70XUy4K4JWVbe0Bp5c8DAv7RovJwIhAPJvYacyOWoC%2BRL0mFB5vV0yhMngs%2B9HefehlPNVlomrKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FD9JH5D8YMi6B7nkq3AMncaWA6yqYo9mHGXJ2IrfIt3Mob5kErxQnrK7JK%2B3BN1pz4W3A8qwnIitwVImCz42jGPBBKZScCHdjH07aobmCAt1eB2NcJtV7%2FqDtKEDF%2B3mJW8sxPymrG5E0jX1AV2LA71ieS9mUn2OZjaLTI8IIOtACrehV26idsVKOZPwCRe30E1QvSIRBoke2ipv8KGVY2xH9Bk4xXMD3zsb6yld59%2Bfcs6XaefjCzLyUEw%2FYVj2P4UuStWFsQubhNFp2kJ1SvxnZBsn6Ae0rN%2FNtILbGzpSgvVGqD%2Ftl5UscuGrozwW1HEcJjhskUju9voqiD7dgADbI5eAroHlcoLUrSmjmMox33ALMyNKv3cnyrW79Qmwhu4ZBgvT9O1HVvr0N1MAWI%2FHOBdR1%2Fcxlyn8E4ti%2BgmXXjIe%2BqAcu%2Blz75XrqSFXpDKdnNvGz5k9vGk1wVbKZTYmyyt6%2Flhv5FvJ8OQYJ7tSIdmgmyOz3APNS0FBUQuTu5%2BJUD9UCTF2%2FPIRi8m0BqCKlVS3PQjGjCiuaGD352v%2BE5QS0kBIF92D9%2BnbwNLKaeQ9pbKB8mi7EbbJN72BmSFhpgr5wwrECmmLUcnBxFU0n19dArH%2FRDM9HluMFUbGgz6%2BeqF%2F2CqW49jDQwKHUBjqkAaroaxiB4I6UUFTH6N33KUUVgcPUYh9yQJ7YfSlONnTmZmXyR5Mb5PzY9UEmu3QY6HjlJLYxaaUmvvXUOTwbF42aRzZ3VgIFnR5Px0y32YzHgGa62h92vH8p3pFWwaEiWQPMcNSFPEOXnLQ%2FL1Xpx%2FtIZ6r93wbprvSPM%2FI5qXScg1EI131TwZGizEzK1uydr14Lk3XV1Xwi6HTctyq%2FT1CJgGw1&X-Amz-Signature=e3b08991b9a70188c9190146b284bf06f6bc030d4c90eb313066d37a789202bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

