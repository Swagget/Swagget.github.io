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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2HMXQF4%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T125121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCnICQhMM9CehWNbuwI0zJpAy%2FexRrm5A8xRndcUBpbBwIhAJAjrIpfulkDWw79f3UKpQGNzTGo7S1CUhm3PW2jq2E%2BKv8DCA0QABoMNjM3NDIzMTgzODA1Igx6hLgBLHMmx1mShIEq3AP6uRUsVPotd4ugf7IfKihbDGAKzqLErP%2FUDDodkZp%2FxcmpRafOeAbukaTXGBvPAe6N3jzJha%2F547u7Qbbl2E%2F7q%2B6hDSfQdJ07cfIRw%2BKBG8asLpwUZdCBcH3dVYP1nKA%2F4%2F0wRCfkksseL7HR1kmJkiNs6Zqsl4VOgvyBJfITZJvRJ9HaCajToRSl%2BMGBCqsliIIitjvM64bZGopDQq8EuZqt%2FzMwbzQnFHX%2Ber%2Blj4f1zr9f94M1R%2BByFXXRNnhd4qbvm2MmheIxk3kJswCLmSUgA0z8lDjmck8jG7PN%2F5kswK%2FQEfJiG0jApr6QOeOB2UamRprOPjvJtYv1Trk23rx7rcTUra6G%2Ftle5uMzGCYZPg2TVXUWGR9JWyDO7GzrR9IHck%2FZdIHpmFdmlG26ALPAi2%2BrcJxaWvRqt39CIWBFkdxusxOniaP7X5ycQQzRIUa0LGsv9g7QOKUEyUZHufFS%2B%2BoYkMN0t482Hxgxd3tkSr9hFf2KAFBgb7dSEdvmRO6t1DjqgVsUnWDde%2Fk%2BIZ91q2UzbEQLCvk5g1TJseR25KVRX%2BFcYxVhLllzI4GVqSbY32NPeK62S%2FYtPWuARUHeDvT4avgCc%2BuOFBi6U%2BhVRBp4oqcWUFk%2FkDCrmsfTBjqkAcRQGzL96GfvUexTppQJezKr%2BnIakY1UKtsRgWPWEYF%2F5bk74vJ9dGIoOIhLyZ6%2Fy3MqrF5XsROnEXBYes5u7a8PWGzkZ8b33ZMB%2FEbloOphbBUfRaDqb22wohdOqZnb2Cqn%2FWaQigQCtWdpmDuFNy0VxEYoRVx6uiX8QCcmj%2FwmyoXv5pK4tIz3gnFxOra77pTqEmBv4PhPJOnHbQcqK7o%2Ffe2M&X-Amz-Signature=a32a65d1a594004134015c30ccf9b5036301d12a1ad890840b5bed595a66daf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

