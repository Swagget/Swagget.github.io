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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WK4KNCY%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T191325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDY7F83Cu4TIZiYeurwU34aFw1exHd5M7ufQKyM%2BsHoCAiEA%2B3i3IBrAurcCQkco6pngxQIOQpmmB5JVwmbZ%2BA81zjkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPnFi7NaHVjAdGgCircA9hRKmVwjTFhMLZpbv9jwRnD4v2MGx73RIYxcegMe5g0C%2Fj%2BHfkdteWCSuzmIY%2B6WLP%2F3WinYc5XnkKA2Js2ocgQeZglzJGn%2BtTdcWk88tvU3853sMXcDGyELssR%2BSGVc3G9VANvgnCnN6UzKEvtGJZojSpnN%2FpytYeROX%2BT49TlKF%2FOllGDrjwLwgcAyUrKK7lhrKQS44czOt7G0f2zTDfK0UO0hc65OmrawV%2FvctEUIMXgzB5DCSuH6FHNC1s8XS9KioQKm16nv7aNujmCZRgK%2F67fBsQGTLq5KVrdnPo8AXs%2FbYimof%2Bqrm6MFcsAqz8kEEKJo90bDcFzzoKIMjUnUYQEE3KFLogSZmUgutQEZOijlHtLb6MY02i5iS5wlDScV4I1saCNGVnhccv2fskd0i%2FaP5GkuGzGm58rXnzKu%2Bm3lVhVfJqcmpIJUy8Y0SZzAyW2tkPs5jwp2Dz%2FYyikCw2CFahYWFjZ4KmcY4efqKewdugP%2Blj0dL6tvTJ83Ll3rmWjo6hHN3IiLcaJwiaaWluHuTUJByspaIWZaUmDx865XFA%2BwMIdyBbwhtQBTYJ7pEYxOrYXd8%2BRfxQKGpj4aeXM%2FWrRGiGZuCWUE%2BgroyaanwN3Hzpoqr6xMKWxp9QGOqUB9Ot0KJwLqkmTmgQUAXJ72khUk%2F3ksIKjo0P0biyZ9eO7bJlRS3sKelUTKF%2F8iWCmTdhE%2Fuga6xen7bJ0JxrXG%2F263clz3fGa%2BUuYYGTa1%2FsUAiyKZcE9k%2Fk7YHxYORc9hkGPzw76O0hCDCx2hAyYyPdDeaGkp6IblKphvdh6AJR98ni6XeFuj7BMi5FKrT2ChRBqFbzlfM3V64Ao3ODiLdyOvzag&X-Amz-Signature=81277be507b1fd11cfd6c9c0fc3713f39292ab76c544b64c36eb2d5c662990ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

