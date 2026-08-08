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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653OTD3ER%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T101828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXEFar6uojCmnTrKd%2F8UM%2Bq%2BZHrfodFOwGCtU5gQSLKQIhANF%2BJ0P%2FrArANCNN%2Fqq0qIfI16OgxOs4COaKgNVXk5bWKv8DCGoQABoMNjM3NDIzMTgzODA1IgylbdNTR7CBHx1q7sUq3AMaY5%2FEilbr%2F4kHf6M8HU%2BQL46%2B5zwG0oi99oG0Sov2Pl%2FZq7NqOcljqT3SPvwHv3bCgeNRXro8duHMNnRfQeMtmMQcvtPlpydZ4Qs5Tbo8KRnarJWX5YfWLtCOj6Vy37iFtxmCDo2V7SGaYXHCCTnwqVVr9R0AP8ANvjn6EkUDrK9Zy9NWfDR52Rw6sdT%2BYb6b0KqKv1AVNR5mrJdfatLdVJ0OpA73iuUhpr5iGDEREQVBSGGAy%2BxFlkxsWEwhDiEdxlqCSGKT7VUTnJHJ%2FF1mYfJFelP0qiZGnevZA%2BGeIVSVJXZPwNokaYzHGuJBAUoRvH038%2BQNhWP0ue1LuTCT%2FokkmEiShZ7M%2BKObIujS%2Farj%2BSakVDektnFzZmPrrytZmQWsEXaUagcNI6or1ALFa2gWIvhIIBwFqtaIvzG2493eylGxtpzkrbToEY9tGCpgXCCrWRvBlSSPOUEpubO102gCUv%2FkfxUqTaqh2I7odDdtzHNv28uXhPiuETIVREhNqzTNx6DNl038kWooOfZfKHZxWjpPrH5FAnk32oGbcAoEnBdZ9l1Og0WP8i13o9g0YVotTE8oTmLcx7fwvXAjgNGReBN%2Fe4Ehaace2K3BDbPrb9RPiUrvxbhZHzDQ1tvTBjqkAdesHuOYzj0O%2BXw0U%2BfqXb3jrlfW3%2BEZg5P4eEThjUyM8F1fU174MUzcbEAbwC7cnMxEhjQ1d%2FSfmpy%2BbjcIggRxoQP9cAKsl9wYkFIHlIyowjBDtcJHp0kp130si8RXCFp1D5UyvUc09sEkmhTd4b%2F2gdvZ00ikEBdcKWSMFWaYB1TaGt286Ym9uu2LcKZiL%2BhQONwK38B5cZRx7f0spyCURIlG&X-Amz-Signature=738940ffba7c035f2ee7f77ef94a898fb0aa70423a251c15b03e95884f396b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

