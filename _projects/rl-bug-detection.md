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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GN2HA6C%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T054511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7XNo2aCw2MrTUts2bRf993qebLuRmgPXL%2Byj1APYDGwIhAPObfOusL%2BQJkNNN%2BF4Tuq5Mgo8yGTWT0GSGDNy2ESrWKv8DCHcQABoMNjM3NDIzMTgzODA1Igyw7cMxTJBRbFw%2FXsIq3AMZg7AbgIfVv9Enxx5zmL4A5dYu9eU3wFJyF35qYmtVhwfp84I8FuKsIgPSmZ7ZSI7Npan%2FCkkl1LkHnRqB1th3kjxsRQ4hHdi1W4ngCt9nBqnBOtv%2Fo0hzx5SH%2B%2Fz1sK%2F5gt4ZiQZcmAQFjvPUJEB6OozJZzBWlyBUUcCCn%2FN6Uk60Ach8BvYGD%2B6VBez%2FwZi2%2BcdXBAaTWrencsDOuLjq4XIXFouYscSVQWe8%2FJwxC2eY9lBg2huJN4Tch5KXsi%2BMPKptDQ5ytlzw%2BeNrXEI1zrTmm6662udVQnU4N%2BuULAmaFY%2F5oyTc1dx%2F0bmA5wKWonGw4BhuBQrvsWU11Gon%2FryJ%2FLKDm%2FEKgaoXPhQF5ud%2BktlmaN1Zjv945c34QJHZ4r536yJF6BPyoVsBJNu%2B2LmsgPKF5lUTRcE8IU4IdYo1YFKrm52%2F41oXees5lk4wm431IIKSm0Z4JpCRqqQ1ClztSHT4nQoiclZkbrwC8B6HeKCHJtFaUJoh0uvWxuCppIJJoALJR44hrPchuGET1m4IN56eA0Fj2sRsJPGrk1e8fKwVLSUaUv6sTwIm4Yd0QtZPYlfL6ISkJYK3Hm3qu5nRpWEloknLfzIHocmakSKrVv4%2BWGx%2F%2BamrLzCHxf3RBjqkAW5l6zhbgRAf0h64%2B%2F1G3oIkwmh0wbWapNNNMw3HaPBe4ChDJN%2Fehb98xYQhnMt3rxfblMXipTFnlpSNg8Ugdwnd6DenIf3sQCw%2FwNfmGXjJEXgwRQjw4f1VnkMaOgYiBjT%2FDj%2BQJCUgomRcB8iuH2Xq4tjRAUBqRnPgcWsBOm6biMnSNEF3cdDAPWKdk4WAT%2F3SE0CRYXrHeJ6sc2Jb%2B%2BlJSCrr&X-Amz-Signature=9602027c01db186f4bcc53f68e08499a2b00e57f4fd22b3160b7e73ec2e19b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

