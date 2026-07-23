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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBI7TDIO%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T200523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD6NFQSQuNHvvwcGL%2FIKgt%2BBd9mOG62UFPH495gR4XzGQIhAPZ40CO0hYlHJULiwrWZWlZw7vFouFoavUk2ou1PHC17KogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGzvsOGGyiBpVMlZMq3AP9t9FRN3WijEb8Ue3V5JAEoEszJkomlkkou7A61LqiW2MkOSmY8O0SNkS1V7f9ab%2BjX22Y%2FS3Rzr31CFB11WVWUWagxcM9D2H7qxnAUkwjpG9m0rPlQ0F2ApJk%2BT5%2Fhw95YvrsXj0S2KCY3jtrR%2BtMj0XJlJAAYgdtsQJaMGqmlQaGDT4tJ60mm24sypdGihs900QBoBa2cQtZ7w6m%2BqduSYyPvK%2FLWC0gdnELSAb5NXOSCnJO9%2BAeBq0R%2FUNgMIi3xiYULJ%2FfqKfxddohmJKTCoQo655X0mUiz5Vl8dwW3UanDdSJ5iR3aXWCovpg6jgNZLXd1xRxsqM5aIU8rB%2FycKw3lsRDk12vTQwO6P%2Fx18HM8qOQw8iPb7sWzD7C9djOwLnTHANU0TF8dlS3jpy6hKNjmJMLHYcdLBhaHfAjWwALTYVtJkygoS8LoQH7v53cOLjwxVb6XG%2Bhda6luJX5uIY5ZsdleXRnSs02LkBgHeClr%2BPsXdK0byzFn8z5k0HnV5%2FcVTAmx2y2%2B5qoWcts90s689XzOyF8m9rLcYH711h1dKB9%2BgiU7kmuqcl55mw%2FA9WC8MbIINSQTXYWnp1glhLZtxp5QFtyWIo7nB9olyst%2F%2Bfkws49MI0p%2BDCA0YnTBjqkAaPD3OyRcjlHNT1gRdUVJDTPGPgD8kinUpC1Pql5QLAqJ1uXYFtW3esRw6vBaZcmQKDnR0%2BUgfpN0Mr%2B6nIIh1bda16YevZj72H%2BcCeuW0pREbSKSKFjdDbgj9Bh45f4wInUju6Vf%2B7eF1Zu6kXdAcEp9mL3Ib8JvRnlyVLY5NH5ukKYdzKvD81OBq%2FWc%2F3%2FsgyXKsaCAxasb6PX3LjvUJSKJPrl&X-Amz-Signature=7d856e1fec255386ea91d676a7795bc93483e2f0ad808d8234b91c027d859d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

